// Ride configurations for different ride types and fatigue levels  
const rideConfigs = {  
    climb: {  
        label: "Climbing Day",  
        'very fatigued': {mainBreath: "Recovery Climb: 5-in / 5-out, gentle cadence.", tip: "❗ You’re very fatigued. Focus on smooth, steady breathing for an active recovery climb. Avoid any hard efforts.", outputClass: 'danger'},  
        'tired': {mainBreath: "Controlled Climb: 4-in / 4-out, consistent effort. Focus on nasal breathing.", tip: "💡 Legs are tired. Focus on maintaining a steady rhythm and consistent breathing. Don't push too hard.", outputClass: 'warning'},  
        'slightly fatigued': {mainBreath: "Balanced Climb: 3-in / 3-out (sustained), 2-in / 2-out (short bursts).", tip: "💡 Slight fatigue. Mix short, intense breaths with longer, smoother ones. Conserve energy.", outputClass: 'info'},  
        'ready': {mainBreath: "Efficient Climb: 3-in / 3-out (sustained effort).", tip: "✅ Maintain a steady, efficient breathing rhythm. Focus on smooth exhales to maximize oxygen delivery and sustain your effort.", outputClass: 'info'},  
        'peak condition': {mainBreath: "Aggressive Climb: 2-in / 2-out (on steep sections), 3-in / 3-out (sustained).", tip: "🔥 Go for it! Push hard on the climbs. Focus on explosive inhales and strong exhales during power sections.", outputClass: 'success', bonusTip: "💪 *Bonus: Attack short, steep pitches in a big gear using deep 2-in / 2-out breathing. Stay seated and focus on deep breathing.*"}  
    },  
    endurance: {  
        label: "Endurance Ride",  
        'very fatigued': {mainBreath: "Active Recovery: 5-in / 5-out (nasal, calming).", tip: "❗ You’re very fatigued. This is an carbon recovery ride. Focus on deep, calming nasal breathing and very light effort.", outputClass: 'danger'},  
        'tired': {mainBreath: "Steady Endurance: 4-in / 4-out, avoid surges.", tip: "💡 You're a bit fatigued. Focus on consistent, rhythmic breathing to maintain a steady endurance pace. Avoid pushing intensity.", outputClass: 'warning'},  
        'slightly fatigued': {mainBreath: "Steady Endurance: 4-in / 4-out.", tip: "💡 Slight fatigue. Focus on consistent, rhythmic breathing.", outputClass: 'info'},  
        'ready': {mainBreath: "Efficient Endurance: 3-in / 3-out or 4-in / 4-out, deep and smooth.", tip: "✅ Maintain a steady, efficient breathing rhythm. Focus on smooth exhales to maximize oxygen oxygen delivery and sustain your effort.", outputClass: 'info'},  
        'peak condition': {mainBreath: "Optimal Endurance: 3-in / 3-out (strong, rhythmic).", tip: "🔥 Excellent day for long, sustained efforts. Focus on powerful, consistent breathing to maintain high output.", outputClass: 'success'}  
    },  
    recovery: {  
        label: "Recovery Ride",  
        'default': {mainBreath: "Deep Recovery: 6-in / 6-out (diaphragmatic, full exhale).", tip: "🧘 This is a crucial recovery day. Focus on maximizing relaxation and using your diaphragm for deep, cleansing breaths. Aim to clear metabolic waste.", outputClass: 'success', bonusTip: "🚨 Consider off-bike recovery or a very light walk instead if you're this fatigued."}  
    },  
    interval: {  
        label: "Interval/Tempo Session",  
        'very fatigued': {mainBreath: "Re-evaluation: 5-in / 5-out (calming, nasal).", tip: "❗ You are too fatigued for intervals. This ride should be active recovery. Abandon intervals and focus on gentle movement and deep breathing.", outputClass: 'danger'},  
        'tired': {mainBreath: "Controlled Intervals: 2-in / 2-out during efforts, 4-in / 4-out during recovery.", tip: "💡 Fatigue is present. Focus on strict breath control during efforts to maintain power. Extend recovery periods if needed.", outputClass: 'warning'},  
        'slightly fatigued': {mainBreath: "Productive Intervals: 2-in / 2-out (efforts), 3-in / 3-out (recovery).", tip: "💡 Slight fatigue. Push hard but prioritize recovery intervals. Maintain form.", outputClass: 'info'},  
        'ready': {mainBreath: "Powerful Intervals: 2-in / 2-out (sharp, powerful bursts).", easyBreath: "Active Recovery: 3-in / 3-out (between efforts).", tip: "✅ Optimal for pushing hard! Focus on powerful breathing during your intervals and efficient recovery breaths between efforts.", outputClass: 'success'},  
        'peak condition': {mainBreath: "Explosive Intervals: 2-in / 2-out (sharp, powerful bursts).", easyBreath: "Active Recovery: 3-in / 3-out (between efforts).", tip: "🔥 Maximize your power output! Drive air in and out with force during efforts. You're ready to crush it.", outputClass: 'success'}  
    },  
    tempo: {  
        label: "Tempo Ride",  
        'very fatigued': {mainBreath: "🧘 **Active Recovery Pace: Gentle 4-in / 6-out (nasal, calming).**", tip: "🚨 **Tempo ride not recommended today.** Your readiness is low. Convert this into an active recovery ride. Prioritize rest and gentle movement.", outputClass: 'danger'},  
        'tired': {mainBreath: "⚠️ **Controlled Tempo: Focus on smooth 4-in / 4-out. Avoid pushing too hard.**", tip: "❗ Your readiness is moderate. Aim for a controlled tempo, focusing on smooth breathing rather than high intensity. This is still productive for building endurance without overreaching.", outputClass: 'warning'},  
        'slightly fatigued': {mainBreath: "Steady Tempo: Consistent 3-in / 3-out (nasal preferred).", tip: "💡 Slight fatigue. Focus on a solid, rhythmic breath to maintain your tempo effort without excessive strain.", outputClass: 'info'},  
        'ready': {mainBreath: "📈 **Tempo Pace: Consistent 3-in / 3-out (nasal preferred, strong focus).**", tip: "💡 Maintain a steady, challenging effort. Your breathing should be deep and rhythmic, matching your exertion. This builds sustained power for long efforts!", outputClass: 'success'},  
        'peak condition': {mainBreath: "📈 **Tempo Pace: Consistent 3-in / 3-out (powerful, rhythmic).**", tip: "🔥 Excellent day for high-end tempo work. Focus on maximizing each breath to sustain your effort.", outputClass: 'success'}  
    },  
    showoff: {  
        label: "🔥 Show-Off Time! 🔥",  
        'very fatigued': {mainBreath: "Control the Show: 4-in / 4-out, avoid big surges.", tip: "❗ You’re too fatigued for hard efforts. Try to stay in the group but don't lead. Use today to spin the legs and enjoy the ride.", outputClass: 'warning'},  
        'tired': {mainBreath: "Tempo Flow: 3-in / 3-out. Surge only when necessary.", tip: "💡 Legs are tired, so avoid chasing every surge. Focus on breathing rhythm and try to hide in the group when possible.", outputClass: 'info'},  
        'slightly fatigued': {mainBreath: "Strategic Breathing: 3-in / 3-out with occasional 2-in / 2-out for surges.", tip: "💡 Slight fatigue. Be strategic. Conserve energy, but still respond to surges with sharp breathing.", outputClass: 'info'},  
        'ready': {mainBreath: "Balanced Push: 2-in / 2-out for efforts, 3-in / 3-out when cruising.", easyBreath: "", tip: "💡 You’re in decent shape. Ride strong with your buddies. Save energy between efforts and breathe deep during pulls.", outputClass: 'info'},  
        'peak condition': {mainBreath: "Surge Mode: 2-in / 2-out for bursts, 4-in / 4-out for recovery.", easyBreath: "Cruise: 3-in / 3-out between efforts.", tip: "🔥 You're fresh and ready to shine. Push hard on the front, sprint with style and recover smart in the draft. Show control and power!", outputClass: 'success', bonusTip: "💪 *Bonus: Attack short hills in a big gear using deep 2-in / 2-out breathing. It’s your day to impress.*"}  
    }  
};  
  
// Cache DOM elements  
const rhrTodayInput = document.getElementById('rhrToday');  
const rhrAvgInput = document.getElementById('rhrAvg');  
const sleepScoreInput = document.getElementById('sleepScore');  
const durationInput = document.getElementById('duration');  
const rideTypeSelect = document.getElementById('rideType');  
const legFeelSelect = document.getElementById('legFeel');  
const mentalFocusSelect = document.getElementById('mentalFocus');  
const resultDiv = document.getElementById('result');  
const getTipButton = document.getElementById('getTipButton');  
const saveFeedbackDiv = document.getElementById('saveFeedback');  
const saveDataButton = document.getElementById('saveDataButton');  
  
// Google Apps Script URL for Data Logging  
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbznSAcfk0kB0DV-BX_x_rM-KCnNeRjjqIDNIHwZbyWdS0zSgDRW61cnLyzO8akjSIG7/exec";  
  
// Determine Fatigue Status  
function getFatigueStatus(rhrToday, rhrAvg, sleepScore) {  
  const rhrDiff = rhrToday - rhrAvg;  
  let status = "", tip = "", lookupKey = "";  
  
  if (rhrDiff > 5 && sleepScore < 70) {  
    status = "🚨 Fatigued"; tip = "High RHR and poor sleep. Prioritize rest."; lookupKey = "very fatigued";  
  } else if (rhrDiff > 3 && sleepScore < 80) {  
    status = "⚠️ Slightly Fatigued"; tip = "Light activity or recovery recommended."; lookupKey = "tired";  
  } else if (rhrDiff > 0 && sleepScore < 90) {  
    status = "💡 Moderate Fatigue"; tip = "You might feel a bit off. Focus on controlled efforts."; lookupKey = "slightly fatigued";  
  } else if (rhrDiff < -3 && sleepScore > 85) {  
    status = "🔥 Peak Condition"; tip = "Excellent recovery. Great day for KOM or hard effort."; lookupKey = "peak condition";  
  } else {  
    status = "✅ Ready"; tip = "You're ready to train. Maintain awareness."; lookupKey = "ready";  
  }  
  return { status, tip, lookupKey };  
}  
  
// Calculate Combined Readiness Score  
function getCombinedReadinessScore(legFeel, rhrToday, rhrAvg, sleepScore, mentalFocus) {  
    let score = 0;  
    const rhrDiff = rhrToday - rhrAvg;  
    const weights = {'Leg Feel': 0.4, 'RHR Factor': 0.3, 'Sleep Score': 0.2, 'Mental Focus': 0.1};  
  
    let legFeelFactor = 0;  
    switch (legFeel) {  
        case 'very_fresh': legFeelFactor = 10; break;  
        case 'fresh': legFeelFactor = 8; break;  
        case 'normal': legFeelFactor = 6; break;  
        case 'tired': legFeelFactor = 3; break;  
        case 'very_tired': legFeelFactor = 1; break;  
    }  
    score += legFeelFactor * weights['Leg Feel'];  
  
    let rhrFactor = 0;  
    if (rhrDiff <= -3) rhrFactor = 10;  
    else if (rhrDiff >= -2 && rhrDiff <= 2) rhrFactor = 7;  
    else if (rhrDiff >= 3 && rhrDiff <= 5) rhrFactor = 4;  
    else rhrFactor = 1;  
    score += rhrFactor * weights['RHR Factor'];  
  
    score += (sleepScore / 10) * weights['Sleep Score'];  
  
    let mentalFocusFactor = 0;  
    switch (mentalFocus) {  
        case 'sharp': mentalFocusFactor = 5; break;  
        case 'okay': mentalFocusFactor = 3; break;  
        case 'dull': mentalFocusFactor = 1; break;  
    }  
    score += (mentalFocusFactor * 2) * weights['Mental Focus'];  
  
    return (score / 10).toFixed(2);  
}  
  
// Track and limit 2-in/2-out suggestions  
function manageBreathHistory(currentBreathTip, rideType) {  
    const today = new Date().toISOString().split('T')[0];  
    let history = JSON.parse(localStorage.getItem('breathTipHistory')) || [];  
  
    history = history.filter(entry => entry.date >= new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);  
  
    const isHighIntensityBreath = currentBreathTip.includes('2-in / 2-out') || currentBreathTip.includes('Explosive') || currentBreathTip.includes('Powerful Intervals') || currentBreathTip.includes('Surge Mode');  
  
    if (isHighIntensityBreath) {  
        const recentHighIntensityDays = new Set();  
        for (const entry of history) {  
            if (entry.date !== today && entry.isHighIntensity) {  
                recentHighIntensityDays.add(entry.date);  
            }  
        }  
  
        if (recentHighIntensityDays.size >= 2) {  
            const alternativeTip = "Controlled Breathing: 4-in / 4-out (nasal, steady effort).";  
            history.push({ date: today, rideType: rideType, breathTip: alternativeTip, isHighIntensity: false });  
            localStorage.setItem('breathTipHistory', JSON.stringify(history));  
            return { override: true, warning: "You've been consistently using high-intensity breathing for the past two days. Consider a more moderate approach today to aid recovery and prevent overtraining.", alternativeBreath: alternativeTip };  
        }  
    }  
  
    const alreadyLoggedToday = history.some(entry => entry.date === today && entry.breathTip === currentBreathTip);  
    if (!isHighIntensityBreath || (isHighIntensityBreath && !alreadyLoggedToday)) {  
        history.push({ date: today, rideType: rideType, breathTip: currentBreathTip, isHighIntensity: isHighIntensityBreath });  
        localStorage.setItem('breathTipHistory', JSON.stringify(history));  
    }  
    return { override: false };  
}  
  
// Main function to get recommendation  
function getRecommendation() {  
    resultDiv.innerHTML = 'Enter your details and click \'Get My Breath Tip\' to see a recommendation.';  
    resultDiv.className = 'result';  
  
    const rhrToday = parseInt(rhrTodayInput.value);  
    const rhrAvg = parseInt(rhrAvgInput.value);  
    const sleepScore = parseInt(sleepScoreInput.value);  
    const legFeel = legFeelSelect.value;  
    const duration = parseInt(durationInput.value);  
    const rideType = rideTypeSelect.value;  
    const mentalFocus = mentalFocusSelect.value;  
  
    // Input Validation  
    if (isNaN(rhrToday) || rhrToday < 30 || rhrToday > 100) { resultDiv.innerHTML = "<p class='danger'>❗ Please enter a valid RHR Today (30-100 bpm).</p>"; resultDiv.classList.add('danger'); rhrTodayInput.focus(); return null; }  
    if (isNaN(rhrAvg) || rhrAvg < 30 || rhrAvg > 100) { resultDiv.innerHTML = "<p class='danger'>❗ Please enter a valid RHR 7-Day Avg (30-100 bpm).</p>"; resultDiv.classList.add('danger'); rhrAvgInput.focus(); return null; }  
    if (isNaN(sleepScore) || sleepScore < 0 || sleepScore > 100) { resultDiv.innerHTML = "<p class='danger'>❗ Please enter a valid Sleep Score (0-100).</p>"; resultDiv.classList.add('danger'); sleepScoreInput.focus(); return null; }  
    if (!legFeel) { resultDiv.innerHTML = "<p class='danger'>❗ Please select how your legs feel.</p>"; resultDiv.classList.add('danger'); legFeelSelect.focus(); return null; }  
    if (isNaN(duration) || duration < 10) { resultDiv.innerHTML = "<p class='danger'>❗ Please enter a valid Training Duration (at least 10 minutes).</p>"; resultDiv.classList.add('danger'); durationInput.focus(); return null; }  
    if (!rideType) { resultDiv.innerHTML = "<p class='danger'>❗ Please select a Ride Type.</p>"; resultDiv.classList.add('danger'); rideTypeSelect.focus(); return null; }  
    if (!mentalFocus) { resultDiv.innerHTML = "<p class='danger'>❗ Please select your Mental Focus.</p>"; resultDiv.classList.add('danger'); mentalFocusSelect.focus(); return null; }  
    if (Math.abs(rhrToday - rhrAvg) > 30) { resultDiv.innerHTML = "<p class='warning'>❗ Your current RHR seems extreme compared to your average. Please recheck your input.</p>"; resultDiv.classList.add('warning'); rhrTodayInput.focus(); return null; }  
  
    const { status: fatigueStatus, tip: fatigueOverallTip, lookupKey: fatigueLookupKey } = getFatigueStatus(rhrToday, rhrAvg, sleepScore);  
    const combinedReadinessScore = getCombinedReadinessScore(legFeel, rhrToday, rhrAvg, sleepScore, mentalFocus);  
  
    const config = rideConfigs[rideType];  
    if (!config) { resultDiv.innerHTML = `<p class="danger">❗ Ride type "${rideType}" configuration not found. Please check your selection.</p>`; resultDiv.classList.add('danger'); return null; }  
  
    let recommendation = config[fatigueLookupKey];  
    if (!recommendation && config.default) recommendation = config.default;  
    if (!recommendation) {  
        recommendation = { mainBreath: "General: 4-in / 4-out (nasal)", easyBreath: "Calming: 4-in / 6-out", tip: "Focus on smooth, consistent breathing. Always listen to your body.", outputClass: "info", bonusTip: "" };  
    }  
  
    const historyCheck = manageBreathHistory(recommendation.mainBreath, rideType);  
    let finalBreathTip = recommendation.mainBreath;  
    let finalOverallTip = recommendation.tip;  
    let finalOutputClass = recommendation.outputClass;  
    let finalBonusTip = recommendation.bonusTip;  
    let warningMessageHtml = '';  
  
    if (historyCheck.override) {  
        finalBreathTip = historyCheck.alternativeBreath;  
        finalOverallTip = historyCheck.warning + " " + finalOverallTip;  
        finalOutputClass = 'warning';  
        finalBonusTip = '';  
        warningMessageHtml = `<p class="warning">⚠️ ${historyCheck.warning}</p>`;  
    }  
  
    let outputHtml = `  
        <h2>${config.label || rideType.charAt(0).toUpperCase() + rideType.slice(1)}</h2>  
        <p><strong>Overall Readiness:</strong> ${fatigueStatus} – ${fatigueOverallTip}</p>  
        ${warningMessageHtml}  
        <h3>Recommended Breath Plan:</h3>  
        <p><span id="mainBreathOutput">💨 ${finalBreathTip || 'N/A'}</span></p>  
    `;  
    if (recommendation.easyBreath && !historyCheck.override) {  
        outputHtml += `<p>🫁 Warm-up & Cool-down: ${recommendation.easyBreath}</p>`;  
    }  
    outputHtml += `<p><strong>Tips:</strong> <span id="tipOutput">${finalOverallTip || 'No specific tips.'}</span></p>`;  
    if (finalBonusTip) {  
        outputHtml += `<p>💡 <strong>Bonus Tip:</strong> ${finalBonusTip}</p>`;  
    }  
    outputHtml += `<p>*Based on your inputs. Always listen to your body.</p>`;  
    outputHtml += `<p>Your Combined Readiness Score: ${combinedReadinessScore}</p>`;  
  
    resultDiv.innerHTML = outputHtml;  
    resultDiv.classList.add('result', finalOutputClass || 'info');  
  
    return {  
        rhrToday, rhrAvg, sleepScore, legFeel, duration, rideType, mentalFocus,  
        fatigueStatus: fatigueStatus,  
        breathTip: finalBreathTip,  
        overallTip: finalOverallTip,  
        combinedReadinessScore: combinedReadinessScore,  
        timestamp: new Date().toISOString()  
    };  
}  
  
// Send data to Google Sheet  
async function sendDataToGoogleSheet(data) {  
    saveFeedbackDiv.textContent = 'Saving data...';  
    saveFeedbackDiv.className = 'feedback-message show saving';  
  
    try {  
        await fetch(WEB_APP_URL, {  
            method: "POST", mode: "no-cors",  
            headers: { "Content-Type": "application/json" },  
            body: JSON.stringify(data),  
        });  
        saveFeedbackDiv.textContent = '✅ Data saved to sheet!';  
        saveFeedbackDiv.className = 'feedback-message show success-save';  
    } catch (error) {  
        console.error("Error sending data to Google Sheet:", error);  
        saveFeedbackDiv.textContent = '❗ Error saving data to sheet.';  
        saveFeedbackDiv.className = 'feedback-message show error-save';  
    } finally {  
        setTimeout(() => { saveFeedbackDiv.classList.remove('show'); saveFeedbackDiv.textContent = ''; }, 3000);  
    }  
}  
  
// Event Listeners  
getTipButton.addEventListener('click', () => { getRecommendation(); });  
saveDataButton.addEventListener('click', async () => {  
    const dataToSave = getRecommendation();  
    if (dataToSave) await sendDataToGoogleSheet(dataToSave);  
});
