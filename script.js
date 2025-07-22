// --- Ride Type Configurations ---  
const rideConfigs = {  
    climb: {  
        label: "Climbing Day",  
        veryFatigued: {mainBreath: "Recovery Climb: 5-in / 5-out, gentle cadence.", tip: "❗ You’re very fatigued. Focus on smooth, steady breathing for an active recovery climb. Avoid any hard efforts.", outputClass: 'danger'},  
        tired: {mainBreath: "Controlled Climb: 4-in / 4-out, consistent effort.", tip: "💡 Legs are tired. Focus on maintaining a steady rhythm and consistent breathing. Don't push too hard.", outputClass: 'warning'},  
        fresh: {mainBreath: "Aggressive Climb: 2-in / 2-out (on steep sections), 3-in / 3-out (sustained).", tip: "🔥 Go for it! Push hard on the climbs. Focus on explosive inhales and strong exhales during power sections.", outputClass: 'success', bonusTip: "💪 *Bonus: Attack short, steep pitches in a big gear using deep 2-in / 2-out breathing. Stay seated and focus on deep breathing.*"}  
    },  
    endurance: {  
        label: "Endurance Ride",  
        veryFatigued: {mainBreath: "Active Recovery: 5-in / 5-out (nasal, calming).", tip: "❗ You’re very fatigued. This is an active recovery ride. Focus on deep, calming nasal breathing and very light effort.", outputClass: 'danger'},  
        tired: {mainBreath: "Steady Endurance: 4-in / 4-out, avoid surges.", tip: "💡 You're a bit fatigued. Focus on consistent, rhythmic breathing to maintain a steady endurance pace. Avoid pushing intensity.", outputClass: 'warning'},  
        fresh: {mainBreath: "Efficient Endurance: 3-in / 3-out or 4-in / 4-out, deep and smooth.", tip: "✅ Maintain a steady, efficient breathing rhythm. Focus on smooth exhales to maximize oxygen delivery and sustain your effort.", outputClass: 'info'}  
    },  
    recovery: {  
        label: "Recovery Ride",  
        default: {mainBreath: "Deep Recovery: 6-in / 6-out (diaphragmatic, full exhale).", tip: "🧘 This is a crucial recovery day. Focus on maximizing relaxation and using your diaphragm for deep, cleansing breaths. Aim to clear metabolic waste.", outputClass: 'success', bonusTip: "🚨 Consider off-bike recovery or a very light walk instead if you're this fatigued."}  
    },  
    interval: {  
        label: "Interval/Tempo Session",  
        veryFatigued: {mainBreath: "Re-evaluation: 5-in / 5-out (calming, nasal).", tip: "❗ You are too fatigued for intervals. This ride should be active recovery. Abandon intervals and focus on gentle movement and deep breathing.", outputClass: 'danger'},  
        tired: {mainBreath: "Controlled Intervals: 2-in / 2-out during efforts, 4-in / 4-out during recovery.", tip: "💡 Fatigue is present. Focus on strict breath control during efforts to maintain power. Extend recovery periods if needed.", outputClass: 'warning'},  
        fresh: {mainBreath: "Explosive Intervals: 2-in / 2-out (sharp, powerful bursts).", easyBreath: "Active Recovery: 3-in / 3-out (between efforts).", tip: "🔥 Optimal for pushing hard! Focus on powerful breathing during your intervals and efficient recovery breaths between efforts.", outputClass: 'success'}  
    },  
    tempo: {  
        label: "Tempo Ride",  
        veryFatigued: {mainBreath: "🧘 **Active Recovery Pace: Gentle 4-in / 6-out (nasal, calming).**", tip: "🚨 **Tempo ride not recommended today.** Your readiness is low. Convert this into an active recovery ride. Prioritize rest and gentle movement.", outputClass: 'danger'},  
        tired: {mainBreath: "⚠️ **Controlled Tempo: Focus on smooth 4-in / 4-out. Avoid pushing too hard.**", tip: "❗ Your readiness is moderate. Aim for a controlled tempo, focusing on smooth breathing rather than high intensity. This is still productive for building endurance without overreaching.", outputClass: 'warning'},  
        fresh: {mainBreath: "📈 **Tempo Pace: Consistent 3-in / 3-out (nasal preferred, strong focus).**", tip: "💡 Maintain a steady, challenging effort. Your breathing should be deep and rhythmic, matching your exertion. This builds sustained power for long efforts!", outputClass: 'success'}  
    },  
    showoff: {  
        label: "🔥 Show-Off Time! 🔥",  
        veryFatigued: {mainBreath: "Control the Show: 4-in / 4-out, avoid big surges.", tip: "❗ You’re too fatigued for hard efforts. Try to stay in the group but don't lead. Use today to spin the legs and enjoy the ride.", outputClass: 'warning'},  
        tired: {mainBreath: "Tempo Flow: 3-in / 3-out. Surge only when necessary.", tip: "💡 Legs are tired, so avoid chasing every surge. Focus on breathing rhythm and try to hide in the group when possible.", outputClass: 'info'},  
        fresh: {mainBreath: "Surge Mode: 2-in / 2-out for bursts, 4-in / 4-out for recovery.", easyBreath: "Cruise: 3-in / 3-out between efforts.", tip: "🔥 You're fresh and ready to shine. Push hard on the front, sprint with style, and recover smart in the draft. Show control and power!", outputClass: 'success', bonusTip: "💪 *Bonus: Attack short hills in a big gear using deep 2-in / 2-out breathing. It’s your day to impress.*"},  
        normal: {mainBreath: "Balanced Push: 2-in / 2-out for efforts, 3-in / 3-out when cruising.", easyBreath: "", tip: "💡 You’re in decent shape. Ride strong with your buddies. Save energy between efforts and breathe deep during pulls.", outputClass: 'info'}  
    }  
};  
  
// --- Cache DOM elements for efficiency ---  
const rhrTodayInput = document.getElementById('rhrToday');  
const rhrAvgInput = document.getElementById('rhrAvg');  
const sleepScoreInput = document.getElementById('sleepScore');  
const durationInput = document.getElementById('duration');  
const rideTypeSelect = document.getElementById('rideType');  
const legFeelSelect = document.getElementById('legFeel');  
const mentalFocusSelect = document.getElementById('mentalFocus');  
const resultDiv = document.getElementById('result');  
const getTipButton = document.getElementById('getTipButton');   
  
// --- Fatigue Status Logic (Your provided function) ---  
function getFatigueStatus(rhrToday, rhrAvg, sleepScore) {  
  const rhrDiff = rhrToday - rhrAvg;  
  let status = "";  
  let tip = "";  
  let isFatigued = false; // Added to easily check fatigue state in main logic  
  
  if (rhrDiff > 5 && sleepScore < 70) {  
    status = "🚨 Fatigued";  
    tip = "High RHR and poor sleep. Prioritize rest.";  
    isFatigued = true;  
  } else if (rhrDiff > 3 && sleepScore < 80) {  
    status = "⚠️ Slightly Fatigued";  
    tip = "Light activity or recovery recommended.";  
    isFatigued = true;  
  } else if (rhrDiff < -3 && sleepScore > 85) {  
    status = "🔥 Peak Condition";  
    tip = "Excellent recovery. Great day for KOM or hard effort.";  
  } else {  
    status = "✅ Ready";  
    tip = "You're ready to train. Maintain awareness.";  
  }  
  
  return { status, tip, isFatigued };  
}  
  
// --- Function to send data to Google Sheet ---  
async function sendDataToGoogleSheet(data) {  
    // IMPORTANT: This is YOUR Google Apps Script Web App URL!  
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbznSAcfk0kB0DV-BX_x_rM-KCnNeRjjqIDNIHwZbyWdS0zSgDRW61cnLyzO8akjSIG7/exec";   
  
    try {  
        const response = await fetch(WEB_APP_URL, {  
            method: "POST",  
            mode: "no-cors", // Required for Apps Script web app deployments  
            headers: {  
                "Content-Type": "application/json",  
            },  
            body: JSON.stringify(data),  
        });  
  
        // Since mode is 'no-cors', response.ok will always be true and response.json() will fail.  
        // We rely on the script executing without error on the server side.  
        console.log("Data sent to Google Sheet (response might be opaque due to no-cors).");  
        // Optional: Add a small UI indicator here if you want to show "Data Saved!"  
        // For example:  
        // const saveStatus = document.createElement('p');  
        // saveStatus.textContent = '✅ Data saved to sheet!';  
        // saveStatus.style.color = 'green';  
        // resultDiv.appendChild(saveStatus);  
        // setTimeout(() => saveStatus.remove(), 3000);  
  
    } catch (error) {  
        // --- THIS PART WAS MISSING ---  
        console.error("Error sending data to Google Sheet:", error);  
        // resultDiv.innerHTML += '<p style="color:red;">❗ Error saving data to sheet.</p>';  
        // --- END OF MISSING PART ---  
    }  
}  
  
  
// --- Main Recommendation Logic ---  
function getRecommendation() {  
    // Parse input values as integers  
    const rhrToday = parseInt(rhrTodayInput.value);  
    const rhrAvg = parseInt(rhrAvgInput.value);  
    const sleepScore = parseInt(sleepScoreInput.value);  
    const duration = parseInt(durationInput.value);  
    const rideType = rideTypeSelect.value;  
    const legFeel = legFeelSelect.value;  
    const mentalFocus = mentalFocusSelect.value;  
  
    // Clear previous output class for styling  
    resultDiv.classList.remove('warning', 'success', 'danger', 'info');  
  
    // --- Input Validations ---  
    if (isNaN(rhrToday) || rhrToday < 30 || rhrToday > 100) {  
        resultDiv.innerHTML = "<p>❗ Please enter a valid Resting Heart Rate (Today) between 30 and 100.</p>";  
        resultDiv.classList.add('warning'); rhrTodayInput.focus(); return;  
    }  
    if (isNaN(rhrAvg) || rhrAvg < 30 || rhrAvg > 100) {  
        resultDiv.innerHTML = "<p>❗ Please enter a valid Average RHR between 30 and 100.</p>";  
        resultDiv.classList.add('warning'); rhrAvgInput.focus(); return;  
    }  
    if (isNaN(sleepScore) || sleepScore < 0 || sleepScore > 100) {  
        resultDiv.innerHTML = "<p>❗ Please enter a valid Sleep Score between 0 and 100.</p>";  
        resultDiv.classList.add('warning'); sleepScoreInput.focus(); return;  
    }  
    if (isNaN(duration) || duration < 10) {  
        resultDiv.innerHTML = "<p>❗ Please enter a valid Training Duration (minimum 10 minutes).</p>";  
        resultDiv.classList.add('warning'); durationInput.focus(); return;  
    }  
  
    // --- Get fatigue status from the new RHR/Sleep function ---  
    const fatigueMetrics = getFatigueStatus(rhrToday, rhrAvg, sleepScore);  
    const { status: fatigueStatus, tip: fatigueTip, isFatigued } = fatigueMetrics;  
  
    // --- Adjust fatigue flags for breath recommendations based on combined input ---  
    const veryFatigueFlag = isFatigued && (fatigueStatus === "🚨 Fatigued" || legFeel === 'very_tired');  
    const tiredLegsFlag = isFatigued || legFeel === 'tired' || legFeel === 'very_tired';   
    const freshLegsFlag = !isFatigued && (legFeel === 'very_fresh' || legFeel === 'fresh');   
  
    // --- Calculate a Combined Readiness Score ---  
    const legScoreMap = {'very_fresh':10,'fresh':7,'normal':5,'tired':3,'very_tired':0};  
    const legScoreVal = legScoreMap[legFeel];  
    const mentalFocusScoreMap = {'sharp':10,'okay':5,'dull':0};  
    const mentalFocusScoreVal = mentalFocusScoreMap[mentalFocus];  
  
    const rhrReadinessFactor = ((100 - rhrToday) / 70) * 10;   
    const sleepReadinessFactor = (sleepScore / 100) * 10;   
  
    // Weighted average for overall readiness  
    const readinessScore = (legScoreVal * 0.4) + (rhrReadinessFactor * 0.3) + (sleepReadinessFactor * 0.2) + (mentalFocusScoreVal * 0.1);  
  
    const optimalForTorqueWork = readinessScore > 7.5 && !tiredLegsFlag && fatigueStatus === "🔥 Peak Condition";  
  
    // --- Determine Ride Configuration and Specific Breath Plan ---  
    const config = rideConfigs[rideType];  
    let currentCondition = null;  
  
    if (veryFatigueFlag && config.veryFatigued) {  
        currentCondition = config.veryFatigued;  
    } else if (tiredLegsFlag && config.tired) {  
        currentCondition = config.tired;  
    } else if (freshLegsFlag && config.fresh) {  
        // Special case for "showoff" ride: if even slightly tired, downgrade from full "fresh" showoff  
        if (rideType === "showoff" && tiredLegsFlag) {   
            currentCondition = config.normal;   
        } else {  
            currentCondition = config.fresh;  
        }  
    } else if (rideType === "showoff" && config.normal) { // Default for showoff if not fresh or very fatigued  
         currentCondition = config.normal;   
    } else {  
        // Fallback for cases not explicitly covered, using 'default' or a 'fresh' or 'normal' state if available.  
        currentCondition = config.default || config.fresh || config.normal;  
    }  
  
    // --- Extract breath plan and tips, with sensible defaults ---  
    const {  
        mainBreath = "No specific plan yet. Focus on comfort.",  
        easyBreath: initialEasyBreath = "",   
        tip = "No specific tips for this condition.",  
        outputClass = 'info'  
    } = currentCondition || {};   
  
    let easyBreath = initialEasyBreath;  
    let lowCadenceTorqueTip = (currentCondition && currentCondition.bonusTip && optimalForTorqueWork) ? currentCondition.bonusTip : "";  
  
    // --- Specific adjustment for long tempo rides ---  
    if (rideType === "tempo" && duration > 90 && freshLegsFlag) {   
         easyBreath = (easyBreath ? easyBreath + "\n" : "") + "Mid-ride check: Periodically bring your attention back to your breath (e.g., 2-3 minutes of nasal 4-in / 6-out) for mindfulness.";  
    }  
      
    // --- Add the strategic 2:2 breath tip if applicable ---  
    let twoTwoTip = '';  
    if (mainBreath.includes('2-in / 2-out')) {  
        twoTwoTip = '💡 **Strategic Tip:** Aim for **max 2-3 days per week** using the 2-in / 2-out breath. Use it like a weapon for hard efforts, not a default.';  
    }  
  
    // --- Construct the final output HTML ---  
    let outputHtml = `<h2>${config.label}</h2>  
        <p><strong>Overall Readiness:</strong> ${fatigueStatus} – ${fatigueTip}</p>  
        <p><strong>Recommended Breath Plan:</strong></p>  
        <p><strong>Main Effort:</strong> 💨 ${mainBreath}</p>  
        ${easyBreath ? `<p><strong>Between Efforts / Cruise:</strong> 🧘 ${easyBreath}</p>` : ''}  
        <p><strong>Warm-up & Cool-down:</strong> 🫁 4-in / 6-out (nasal, calming)</p>  
        <p><strong>Tips:</strong> ${tip}</p>  
        ${lowCadenceTorqueTip ? `<p>${lowCadenceTorqueTip}</p>` : ''}  
        ${twoTwoTip ? `<p>${twoTwoTip}</p>` : ''}  
        <p style="font-size: 0.9em; color: #555;">*Based on your inputs. Always listen to your body.</p>  
        <p style="font-size: 0.8em; color: #777;"><em>Your Combined Readiness Score: ${readinessScore.toFixed(2)}</em></p>  
    `;  
    resultDiv.innerHTML = outputHtml;  
    resultDiv.className = `result ${outputClass}`; // Apply styling based on recommendation's class  
  
    // --- Send data to Google Sheet after successful calculation ---  
    const dataToSend = {  
        rhrToday: rhrToday,  
        rhrAvg: rhrAvg,  
        sleepScore: sleepScore,  
        legFeel: legFeelSelect.options[legFeelSelect.selectedIndex].text, // Send readable text  
        duration: duration,  
        rideType: rideTypeSelect.options[rideTypeSelect.selectedIndex].text, // Send readable text  
        mentalFocus: mentalFocusSelect.options[mentalFocusSelect.selectedIndex].text, // Send readable text  
        fatigueStatus: fatigueStatus,  
        breathTip: mainBreath // Sending just the main breath for simplicity  
    };  
    sendDataToGoogleSheet(dataToSend);  
}  
  
// --- Attach event listener after the DOM is fully loaded ---  
document.addEventListener('DOMContentLoaded', () => {  
    getTipButton.addEventListener('click', getRecommendation);  
});
