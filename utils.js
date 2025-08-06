// utils.js
export function isRHRCriticallyElevated(rhrToday, rhrAvg, thresholdPercentage = 8) {
    if (typeof rhrToday !== 'number' || typeof rhrAvg !== 'number' || rhrAvg === 0) { return false; }
    const percentageIncrease = ((rhrToday - rhrAvg) / rhrAvg) * 100;
    return percentageIncrease > thresholdPercentage;
}

export function getFatigueStatus(rhrToday, rhrAvg, sleepScore) {
    const rhrDiff = rhrToday - rhrAvg;
    let status = "", tip = "", lookupKey = "";
    if (rhrDiff > 5 && sleepScore < 70) { status = "🚨 Fatigued"; tip = "High RHR and poor sleep. Prioritize rest."; lookupKey = "very fatigued"; }
    else if (rhrDiff > 3 && sleepScore < 80) { status = "⚠️ Slightly Fatigued"; tip = "Light activity or recovery recommended."; lookupKey = "tired"; }
    else if (rhrDiff > 0 && sleepScore < 90) { status = "💡 Moderate Fatigue"; tip = "You might feel a bit off. Focus on controlled efforts."; lookupKey = "slightly fatigued"; }
    else if (rhrDiff < -3 && sleepScore > 85) { status = "🔥 Peak Condition"; tip = "Excellent recovery. Great day for KOM or hard effort."; lookupKey = "peak condition"; }
    else { status = "✅ Ready"; tip = "You're ready to train. Maintain awareness."; lookupKey = "ready"; }
    return { status, tip, lookupKey };
}

export function getCombinedReadinessScore(legFeel, rhrToday, rhrAvg, sleepScore, mentalFocus) {
    let score = 0;
    const rhrDiff = rhrToday - rhrAvg;
    const weights = {'Leg Feel': 0.4, 'RHR Factor': 0.3, 'Sleep Score': 0.2, 'Mental Focus': 0.1};
    let legFeelFactor = 0;
    switch (legFeel) {
        case 'very_fresh': legFeelFactor = 10; break; case 'fresh': legFeelFactor = 8; break;
        case 'normal': legFeelFactor = 6; break; case 'tired': legFeelFactor = 3; break;
        case 'very_tired': legFeelFactor = 1; break;
    }
    score += legFeelFactor * weights['Leg Feel'];
    let rhrFactor = 0;
    if (rhrDiff <= -3) rhrFactor = 10; else if (rhrDiff >= -2 && rhrDiff <= 2) rhrFactor = 7;
    else if (rhrDiff >= 3 && rhrDiff <= 5) rhrFactor = 4; else rhrFactor = 1;
    score += rhrFactor * weights['RHR Factor'];
    score += (sleepScore / 10) * weights['Sleep Score'];
    let mentalFocusFactor = 0;
    switch (mentalFocus) {
        case 'sharp': mentalFocusFactor = 5; break; case 'okay': mentalFocusFactor = 3; break;
        case 'dull': mentalFocusFactor = 1; break;
    }
    score += (mentalFocusFactor * 2) * weights['Mental Focus'];
    return (score / 10).toFixed(2);
}

// *** MODIFIED LOGIC HERE ***
export function manageBreathHistory(currentBreathTip, rideType, actualBreaths, shouldRecord = false) {
    const today = new Date().toISOString().split('T')[0];
    let history = JSON.parse(localStorage.getItem('breathTipHistory')) || [];
    
    // Filter history to only keep the last 4 days
    history = history.filter(entry => entry.date >= new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);

    const isHighIntensityBreath = currentBreathTip.includes('2-in / 2-out') || currentBreathTip.includes('Explosive') || currentBreathTip.includes('Powerful Intervals') || currentBreathTip.includes('Surge Mode');

    if (isHighIntensityBreath) {
        const recentHighIntensityDays = new Set();
        for (const entry of history) { if (entry.date !== today && entry.isHighIntensity) { recentHighIntensityDays.add(entry.date); }}
        if (recentHighIntensityDays.size >= 2) {
            const alternativeTip = "Controlled Breathing: 4-in / 4-out (nasal, steady effort).";
            return { override: true, warning: "You've been consistently using high-intensity breathing for the past two days. Consider a more moderate approach today to aid recovery and prevent overtraining.", alternativeBreath: alternativeTip, lastActualBreaths: history[history.length - 1]?.actualBreaths || "" };
        }
    }

    if (shouldRecord) {
        const alreadyLoggedToday = history.some(entry => entry.date === today);
        if (!alreadyLoggedToday) {
            history.push({ date: today, rideType: rideType, breathTip: currentBreathTip, actualBreaths: actualBreaths, isHighIntensity: isHighIntensityBreath });
            localStorage.setItem('breathTipHistory', JSON.stringify(history));
        }
    }

    const lastActualBreaths = history[history.length - 1]?.actualBreaths || "";
    return { override: false, lastActualBreaths };
}

