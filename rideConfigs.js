export const rideConfigs = {  
    climb: {  
        label: "🏔️ Ascend to Greatness!", // More motivated label  
        'very fatigued': {  
            mainBreath: "Recovery Climb: 5-in / 5-out, gentle cadence.",  
            tip: "❗ **Body's Call for Calm.** Your system is signaling deep fatigue. Transform this into an active recovery ascent. Focus on smooth, nurturing breaths and avoid ANY strenuous efforts. Prioritize restoration.",  
            outputClass: 'danger'  
        },  
        'tired': {  
            mainBreath: "Controlled Climb: 4-in / 4-out, consistent effort. Focus on nasal breathing.",  
            tip: "💡 **Strategic Ascent.** Legs are tired. Embrace a steady, rhythmic climb. Maintain a consistent pace and breath, letting efficiency guide you. Resist the urge to push beyond comfort.",  
            outputClass: 'warning'  
        },  
        'slightly fatigued': {  
            mainBreath: "Balanced Climb: 3-in / 3-out (sustained), 2-in / 2-out (short bursts).",  
            tip: "💡 **Measured Power.** Slight fatigue detected. Employ a balanced strategy: mix focused, sustained breathing with sharp bursts for key sections. Conserve energy for maximum impact.",  
            outputClass: 'info'  
        },  
        'ready': {  
            mainBreath: "Efficient Climb: 3-in / 3-out or 4-in / 4-out, deep and smooth.",  
            tip: "✅ **Efficient Elevation.** Your body is primed for sustained effort. Maintain a deep, efficient breathing rhythm. Unleash smooth exhales to power your climb and sustain momentum!",  
            outputClass: 'info'  
        },  
        'peak condition': {  
            mainBreath: "Aggressive Climb: 2-in / 2-out (on steep sections), 3-in / 3-out (sustained).",  
            tip: "🔥 **Unleash the Beast!** This is your day to conquer. Attack every gradient with explosive inhales and powerful exhales. Dominate the climbs with raw, focused energy!",  
            outputClass: 'success',  
            bonusTip: "💪 *Bonus: Attack short, steep pitches in a BIG gear, driving deep with 2-in / 2-out breathing. Stay seated, engage every muscle, and show your strength!*"  
        }  
    },  
    endurance: {  
        label: "🛣️ Endless Horizons!", // More motivated label  
        'very fatigued': {  
            mainBreath: "Active Recovery: 5-in / 5-out (nasal, calming).",  
            tip: "❗ **Essential Restoration.** Deep fatigue calls for a full recovery ride. Focus on profound, calming nasal breaths and minimal effort. This is vital for deep carbon recovery.",  
            outputClass: 'danger'  
        },  
        'tired': {  
            mainBreath: "Steady Endurance: 4-in / 4-out, avoid surges.",  
            tip: "💡 **Mindful Mileage.** Legs are tired. Prioritize consistent, rhythmic breathing to maintain a smooth endurance pace. Resist pushing intensity; let fluidity be your guide.",  
            outputClass: 'warning'  
        },  
        'slightly fatigued': {  
            mainBreath: "Steady Endurance: 4-in / 4-out.",  
            tip: "💡 **Consistent Cadence.** Slight fatigue present. Focus on seamless, rhythmic breathing to maintain a steady and productive endurance pace.",  
            outputClass: 'info'  
        },  
        'ready': {  
            mainBreath: "Efficient Endurance: 3-in / 3-out or 4-in / 4-out, deep and smooth.",  
            tip: "✅ **Optimal Flow.** Your body is ready for sustained power. Cultivate an efficient breathing rhythm, emphasizing smooth exhales to maximize oxygen delivery and conquer the miles.",  
            outputClass: 'info'  
        },  
        'peak condition': {  
            mainBreath: "Optimal Endurance: 3-in / 3-out (strong, rhythmic).",  
            tip: "🔥 **Uninterrupted Power!** Today is perfect for long, high-output efforts. Fuel your ride with strong, consistent breathing to sustain peak performance. Go the distance!",  
            outputClass: 'success',  
            bonusTip: "✨ *Bonus: Aim for consistent power output and use your breath to maintain a hypnotic rhythm. Embrace the grind!*"  
        }  
    },  
    recovery: {  
        label: "🧘 Deep Recovery Flow", // More motivated label  
        'default': {  
            mainBreath: "Deep Recovery: 6-in / 6-out (diaphragmatic, full exhale).",  
            tip: "🧘 **Heal & Rebuild.** This is your sacred recovery day. Maximize relaxation, engage your diaphragm for profound, cleansing breaths. Actively work to clear metabolic waste and recharge your body's systems.",  
            outputClass: 'success',  
            bonusTip: "🚨 *Consider off-bike recovery or a very light walk if deep fatigue persists. Listen to your body's whisper.*"  
        },  
        'very fatigued': {  
            mainBreath: "Deep Rest: 7-in / 7-out (slow, restorative).",  
            tip: "❗ **Critical Reset.** Extreme fatigue demands absolute priority for rest. Focus on profound, slow, restorative breaths throughout the day. Prioritize sleep, nurturing nutrition, and minimal gentle movement. Your comeback starts now.",  
            outputClass: 'danger'  
        },  
        'tired': {  
            mainBreath: "Mindful Recovery: 5-in / 5-out (calming, nasal).",  
            tip: "💡 **Nurturing Breath.** Your body yearns for gentle support. Employ mindful breathing to accelerate recovery and reduce overall systemic load. Every breath is a step towards renewal.",  
            outputClass: 'warning'  
        }  
    },  
    interval: {  
        label: "🚀 Conquer Your Limits!", // More motivated label  
        'very fatigued': {  
            mainBreath: "Re-evaluation: 5-in / 5-out (calming, nasal).",  
            tip: "❗ **Urgent Reassessment.** Your fatigue levels are too high for intervals. Convert this ride into active recovery. Abandon high-intensity targets and focus on gentle movement with deep, calming breaths. Today is for restoration.",  
            outputClass: 'danger'  
        },  
        'tired': {  
            mainBreath: "Controlled Intervals: 2-in / 2-out during efforts, 4-in / 4-out during recovery.",  
            tip: "💡 **Strategic Discipline.** Fatigue is present, but potential remains. Maintain strict breath control during efforts to sustain power. Extend recovery periods as needed, prioritizing quality over raw output.",  
            outputClass: 'warning'  
        },  
        'slightly fatigued': {  
            mainBreath: "Productive Intervals: 2-in / 2-out (efforts), 3-in / 3-out (recovery).",  
            tip: "💡 **Focused Intensity.** Slight fatigue. Push hard during your efforts, but make recovery intervals count. Maintain impeccable form and let your breath guide your rhythm.",  
            outputClass: 'info'  
        },  
        'ready': {  
            mainBreath: "Powerful Intervals: 2-in / 2-out (sharp, powerful bursts).",  
            easyBreath: "Active Recovery: 3-in / 3-out (between efforts).",  
            tip: "✅ **UNLEASH THE POWER!** Optimal conditions for pushing your limits. Drive air in and out with force during intervals, and master efficient recovery breaths. You're ready to crush it!",  
            outputClass: 'success'  
        },  
        'peak condition': {  
            mainBreath: "Explosive Intervals: 2-in / 2-out (sharp, powerful bursts).",  
            easyBreath: "Active Recovery: 3-in / 3-out (between efforts).",  
            tip: "🔥 **MAXIMUM EXPLOSION!** Capitalize on your peak form. Unleash maximum power output in every interval! Drive air in and out with absolute force. Today, you are unstoppable.",  
            outputClass: 'success',  
            bonusTip: "💥 *Bonus: Visualize each breath as fueling an internal engine, propelling you forward with unmatched force!*"  
        }  
    },  
    tempo: {  
        label: "📈 Sustain Your Power!", // More motivated label  
        'very fatigued': {  
            mainBreath: "🧘 **Active Recovery Pace: Gentle 4-in / 6-out (nasal, calming).**",  
            tip: "🚨 **Tempo Session NOT Recommended.** Your readiness is critically low. Convert this into an active recovery ride. Prioritize deep rest, gentle movement, and nurturing your body's recovery.",  
            outputClass: 'danger'  
        },  
        'tired': {  
            mainBreath: "⚠️ **Controlled Tempo: Focus on smooth 4-in / 4-out. Avoid pushing too hard.**",  
            tip: "❗ **Strategic Discipline.** Your readiness is moderate. Aim for a controlled tempo, focusing on smooth, consistent breathing rather than high intensity. This builds endurance without overreaching.",  
            outputClass: 'warning'  
        },  
        'slightly fatigued': {  
            mainBreath: "Steady Tempo: Consistent 3-in / 3-out (nasal preferred).",  
            tip: "💡 **Rhythmic Power.** Slight fatigue detected. Maintain a solid, rhythmic breath to sustain your tempo effort without undue strain. Find your flow and hold it.",  
            outputClass: 'info'  
        },  
        'ready': {  
            mainBreath: "📈 **Tempo Pace: Consistent 3-in / 3-out (nasal preferred, strong focus).**",  
            tip: "✅ **Sustain Your Strength!** Maintain a steady, challenging effort. Your breathing should be deep, rhythmic, and perfectly matching your exertion. This builds unwavering sustained power!",  
            outputClass: 'success'  
        },  
        'peak condition': {  
            mainBreath: "📈 **Tempo Pace: Consistent 3-in / 3-out (powerful, rhythmic).**",  
            tip: "🔥 **Peak Tempo Mastery!** Excellent day for high-end tempo work. Focus on maximizing each powerful, rhythmic breath to sustain your highest output. Conquer the distance with relentless force!",  
            outputClass: 'success',  
            bonusTip: "✨ *Bonus: Feel the rhythm of your breath merge with your cadence, creating an unstoppable force of sustained power!*"  
        }  
    },  
    showoff: {  
        label: "🚀 Dominate the Group Ride!", // New label  
        'very fatigued': {  
            mainBreath: "Control the Show: 4-in / 4-out, avoid big surges.",  
            tip: "❗ **Strategic Retreat.** You are too fatigued for hard efforts. Focus on staying in the group, but resist leading. Use today to spin your legs gently and enjoy the social aspect of the ride.",  
            outputClass: 'warning'  
        },  
        'tired': {  
            mainBreath: "Tempo Flow: 3-in / 3-out. Surge only when necessary.",  
            tip: "💡 **Smart Play.** Legs are tired. Avoid chasing every surge. Prioritize your breathing rhythm and strategically hide in the group to conserve energy. Pick your moments wisely.",  
            outputClass: 'info'  
        },  
        'slightly fatigued': {  
            mainBreath: "Strategic Breathing: 3-in / 3-out with occasional 2-in / 2-out for surges.",  
            tip: "💡 **Calculated Attack.** Slight fatigue detected. Be strategic. Conserve energy when possible, but be ready to respond to surges with sharp, decisive breathing.",  
            outputClass: 'info'  
        },  
        'ready': {  
            mainBreath: "Balanced Push: 2-in / 2-out for efforts, 3-in / 3-out when cruising.",  
            easyBreath: "",  
            tip: "💡 **Ride with Purpose!** You’re in solid shape. Ride strong with your buddies. Master energy conservation between efforts and unleash deep, powerful breaths during pulls. Show your strength!",  
            outputClass: 'info'  
        },  
        'peak condition': {  
            mainBreath: "Surge Mode: 2-in / 2-out for bursts, 4-in / 4-out for recovery.",  
            easyBreath: "Cruise: 3-in / 3-out between efforts.",  
            tip: "🔥 **UNLEASH YOUR STRENGTH!** You are fresh, powerful, and ready to shine. Drive the pace, launch decisive sprints, and recover like a pro in the draft. Command the ride with control and explosive power!",  
            outputClass: 'success',  
            bonusTip: "💪 *Bonus: Attack those short hills in a GIANT gear, utilizing deep 2-in / 2-out breathing. This is your moment to impress and drop the hammer!*"  
        }  
    },  
    rest_day: {  
        label: "😴 Ultimate Recharge Day", // New label  
        'default': {  
            mainBreath: "Calm Recovery: 6-in / 6-out (nasal, diaphragmatic).",  
            tip: "🧘 **Embrace True Recovery.** Seize this vital opportunity to fully restore. Cultivate slow, deep, calming breaths throughout your day to actively support cellular recovery and reduce systemic stress. Absolutely no hard efforts!",  
            outputClass: 'success'  
        },  
        'very fatigued': {  
            mainBreath: "Deep Rest: 7-in / 7-out (slow, restorative).",  
            tip: "❗ **Critical Reset!** Extreme fatigue demands absolute priority. This is your essential rest day. Prioritize profound sleep, nurturing nutrition, and the gentlest of movements. Breathe deeply, mindfully, and empower your comeback.",  
            outputClass: 'danger'  
        },  
        'tired': {  
            mainBreath: "Mindful Recovery: 5-in / 5-out (calming, nasal).",  
            tip: "💡 **Nurturing Breath.** Your body yearns for gentle support. Employ mindful breathing to accelerate recovery and reduce overall systemic load. Every breath is a step towards renewal.",  
            outputClass: 'warning'  
        }  
    }  
};