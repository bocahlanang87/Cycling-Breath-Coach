import { rideConfigs } from './rideConfigs.js';
import { isRHRCriticallyElevated, getFatigueStatus, getCombinedReadinessScore, manageBreathHistory } from './utils.js';

const rhrTodayInput = document.getElementById('rhrToday');
const rhrAvgInput = document.getElementById('rhrAvg');
const sleepScoreInput = document.getElementById('sleepScore');
const durationInput = document.getElementById('duration');
const rideTypeSelect = document.getElementById('rideType');
const legFeelSelect = document.getElementById('legFeel');
const mentalFocusSelect = document.getElementById('mentalFocus');
const offRideActivitySelect = document.getElementById('offRideActivity');
const resultDiv = document.getElementById('result');
const getTipButton = document.getElementById('getTipButton');
const saveFeedbackDiv = document.getElementById('saveFeedback');
const saveDataButton = document.getElementById('saveDataButton');
const actualBreathInputGroup = document.getElementById('actualBreathInputGroup');
const actualBreathSelect = document.getElementById('actualBreath');

// REPLACE THIS WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbznSAcfk0kB0DV-BX_x_rM-KCnNeRjjqIDNIHwZbyWdS0zSgDRW61cnLyzO8akjSIG7/exec";

async function sendDataToGoogleSheet(data) {
    saveFeedbackDiv.textContent = 'Saving data...';
    saveFeedbackDiv.className = 'feedback-message show saving';
    try {
        await fetch(WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), });
        saveFeedbackDiv.textContent = '✅ Data saved to sheet!';
        saveFeedbackDiv.className = 'feedback-message show success-save';

        // Only save breath history after successful submission
        manageBreathHistory(data.breathTip, data.rideType, true);

    } catch (error) {
        console.error("Error sending data to Google Sheet:", error);
        saveFeedbackDiv.textContent = '❗ Error saving data to sheet.';
        saveFeedbackDiv.className = 'feedback-message show error-save';
    } finally { setTimeout(() => { saveFeedbackDiv.classList.remove('show'); saveFeedbackDiv.textContent = ''; }, 3000); }
}

function getRecommendation() {
    resultDiv.innerHTML = '<p>Enter your details and click \'Get My Personalized Breath Plan\' to receive tailored advice.</p>';
    resultDiv.className = 'result'; // Reset classes
    const rhrToday = parseInt(rhrTodayInput.value);
    const rhrAvg = parseInt(rhrAvgInput.value);
    const sleepScore = parseInt(sleepScoreInput.value);
    const legFeel = legFeelSelect.value;
    let duration = parseInt(durationInput.value);
    const rideType = rideTypeSelect.value;
    let mentalFocus = mentalFocusSelect.value;
    const offRideActivity = offRideActivitySelect.value;

    // --- Start of input validation checks that return null if failed ---
    if (isNaN(rhrToday) || rhrToday < 30 || rhrToday > 100) { resultDiv.innerHTML = "<p class='danger'>❗ Please enter a valid RHR Today (30-100 bpm).</p>"; resultDiv.classList.add('danger'); rhrTodayInput.focus(); return null; }
    if (isNaN(rhrAvg) || rhrAvg < 30 || rhrAvg > 100) { resultDiv.innerHTML = "<p class='danger'>❗ Please enter a valid RHR 7-Day Avg (30-100 bpm).</p>"; resultDiv.classList.add('danger'); rhrAvgInput.focus(); return null; }
    if (isNaN(sleepScore) || sleepScore < 0 || sleepScore > 100) { resultDiv.innerHTML = "<p class='danger'>❗ Please enter a valid Sleep Score (0-100).</p>"; resultDiv.classList.add('danger'); sleepScoreInput.focus(); return null; }
    if (!legFeel) { resultDiv.innerHTML = "<p class='danger'>❗ Please select how your legs feel.</p>"; resultDiv.classList.add('danger'); legFeelSelect.focus(); return null; }
    if (!rideType) { resultDiv.innerHTML = "<p class='danger'>❗ Please select a Ride Type.</p>"; resultDiv.classList.add('danger'); rideTypeSelect.focus(); return null; }
    if (!offRideActivity) { resultDiv.innerHTML = "<p class='danger'>❗ Please select today's off-bike activity.</p>"; resultDiv.classList.add('danger'); offRideActivitySelect.focus(); return null; }
    // This next check (RHR difference) produces a 'warning' but does NOT return null.
    if (Math.abs(rhrToday - rhrAvg) > 30) { resultDiv.innerHTML = "<p class='warning'>❗ Your current RHR seems extreme compared to your average. Please recheck your input.</p>"; resultDiv.classList.add('warning'); rhrTodayInput.focus(); /* Do NOT return null here */ }

    if (rideType === 'rest_day') {
        duration = 0;
        mentalFocus = 'N/A';
    } else {
        if (isNaN(duration) || duration < 10) { resultDiv.innerHTML = "<p class='danger'>❗ Please enter a valid Training Duration (at least 10 minutes).</p>"; resultDiv.classList.add('danger'); durationInput.focus(); return null; }
        if (!mentalFocus) { resultDiv.innerHTML = "<p class='danger'>❗ Please select your Mental Focus.</p>"; resultDiv.classList.add('danger'); mentalFocusSelect.focus(); return null; }
    }
    // --- End of input validation checks that return null if failed ---

    const { status: fatigueStatus, tip: fatigueOverallTip, lookupKey: fatigueLookupKey } = getFatigueStatus(rhrToday, rhrAvg, sleepScore);
    const combinedReadinessScore = getCombinedReadinessScore(legFeel, rhrToday, rhrAvg, sleepScore, mentalFocus);

    const config = rideConfigs[rideType];
    if (!config) { resultDiv.innerHTML = `<p class="danger">❗ Ride type "${rideType}" configuration not found. Please check your selection.</p>`; resultDiv.classList.add('danger'); return null; }

    let recommendation = config[fatigueLookupKey];
    if (!recommendation && config.default) recommendation = config.default;
    if (!recommendation) { recommendation = { mainBreath: "General: 4-in / 4-out (nasal)", easyBreath: "Calming: 4-in / 6-out", tip: "Focus on smooth, consistent breathing. Always listen to your body.", outputClass: "info", bonusTip: "" }; }

    const historyCheck = manageBreathHistory(recommendation.mainBreath, rideType, false); // Only check history, don't record here

    let finalBreathTip = recommendation.mainBreath;
    let finalOverallTip = recommendation.tip;
    let finalOutputClass = recommendation.outputClass;
    let finalBonusTip = recommendation.bonusTip;
    let warningMessageHtml = '';

    const isRHRHigh = isRHRCriticallyElevated(rhrToday, rhrAvg, 8);
    if (isRHRHigh) {
        warningMessageHtml += `<p class="danger">🚨 Your RHR is significantly elevated today. This is a strong indicator of fatigue or illness. Consider taking a full rest day or engaging in very light active recovery only, regardless of other metrics.</p>`;
        finalOutputClass = 'danger'; // Overwrite output class to danger if RHR is critical
        finalOverallTip = "Critical RHR Elevation Detected. " + finalOverallTip;
    }

    if (historyCheck.override) {
        finalBreathTip = historyCheck.alternativeBreath;
        finalOverallTip = historyCheck.warning + " " + finalOverallTip;
        finalOutputClass = 'warning'; // Override output class to warning if history suggests caution
        finalBonusTip = ''; // Clear bonus tip as override is more urgent
        warningMessageHtml += `<p class="warning">⚠️ ${historyCheck.warning}</p>`;
    }

    let outputHtml = `
        <h2>${config.label || rideType.charAt(0).toUpperCase() + rideType.slice(1)}</h2>
        <p><strong>Overall Readiness:</strong> ${fatigueStatus} – ${fatigueOverallTip}</p>
        ${warningMessageHtml}
        <h3>Recommended Breath Plan:</h3>
        <p><span id="mainBreathOutput">💨 ${finalBreathTip || 'N/A'}</span></p>
    `;
    if (recommendation.easyBreath && !historyCheck.override && finalBreathTip !== recommendation.easyBreath) { // Avoid showing easyBreath if it's the same as main or overridden
        outputHtml += `<p>🫁 Warm-up & Cool-down: ${recommendation.easyBreath}</p>`;
    }
    outputHtml += `<p><strong>Tips:</strong> <span id="tipOutput">${finalOverallTip || 'No specific tips.'}</span></p>`;
    if (finalBonusTip) { outputHtml += `<p>💡 <strong>Bonus Tip:</strong> ${finalBonusTip}</p>`; }
    outputHtml += `<p>*Based on your inputs. Always listen to your body.</p>`;
    outputHtml += `<p>Your Combined Readiness Score: <strong>${combinedReadinessScore}</strong></p>`;

    resultDiv.innerHTML = outputHtml;
    resultDiv.classList.add('result', finalOutputClass || 'info');

    // Show the "Actual Breath Used" input after getting a recommendation
    actualBreathInputGroup.style.display = 'block';

    return {
        rhrToday, rhrAvg, sleepScore, legFeel, duration, rideType, mentalFocus, offRideActivity,
        fatigueStatus: fatigueStatus,
        breathTip: finalBreathTip,
        overallTip: finalOverallTip,
        combinedReadinessScore: combinedReadinessScore,
        timestamp: new Date().toISOString()
    };
}

// Event Listeners
getTipButton.addEventListener('click', () => { getRecommendation(); });

saveDataButton.addEventListener('click', async () => {
    const dataToSave = getRecommendation();
    const actualBreath = actualBreathSelect.value;

    if (dataToSave) {
        // Add validation for the new input field
        if (dataToSave.rideType !== 'rest_day' && !actualBreath) {
            saveFeedbackDiv.textContent = '❗ Please select the breathing pattern you actually used.';
            saveFeedbackDiv.className = 'feedback-message show error-save';
            setTimeout(() => { saveFeedbackDiv.classList.remove('show'); saveFeedbackDiv.textContent = ''; }, 3000);
            return; // Stop the function if validation fails
        }
        
        // Add the new field to the data object
        dataToSave.actualBreath = actualBreath;

        await sendDataToGoogleSheet(dataToSave);
    } else {
        saveFeedbackDiv.textContent = '❗ Please fill in all required fields and correct basic input errors.';
        saveFeedbackDiv.className = 'feedback-message show error-save';
        setTimeout(() => { saveFeedbackDiv.classList.remove('show'); saveFeedbackDiv.textContent = ''; }, 3000);
    }
});

rideTypeSelect.addEventListener('change', () => {
    if (rideTypeSelect.value === 'rest_day') {
        durationInput.value = 0;
        durationInput.setAttribute('disabled', 'true');
        mentalFocusSelect.value = 'N/A';
        mentalFocusSelect.setAttribute('disabled', 'true');
        actualBreathInputGroup.style.display = 'none';
        actualBreathSelect.value = 'not_applicable';
    } else {
        durationInput.removeAttribute('disabled');
        if (mentalFocusSelect.value === 'N/A') {
            mentalFocusSelect.value = '';
        }
        mentalFocusSelect.removeAttribute('disabled');
        actualBreathInputGroup.style.display = 'block';
        actualBreathSelect.value = '';
    }
});
