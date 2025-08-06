export const rideConfigs = {
    climb: {
        label: 'Climbing Day',
        'peak condition': {
            mainBreath: "Aggressive Climb: 2-in / 2-out (on steep sections), 3-in / 3-out (sustained)",
            easyBreath: "Endurance: 4-in / 4-out",
            tip: "Unleash the power! Focus on a strong cadence and explosive breathing.",
            outputClass: "success",
            bonusTip: "Remember to relax your shoulders and jaw to prevent tension."
        },
        ready: {
            mainBreath: "Power Climb: 3-in / 3-out (hard efforts), 4-in / 4-out (steady)",
            easyBreath: "Endurance: 4-in / 4-out",
            tip: "Stay in control. Use rhythmic breathing to manage your effort.",
            outputClass: "info"
        },
        'slightly fatigued': {
            mainBreath: "Controlled Climb: 4-in / 4-out, deep belly breaths",
            easyBreath: "Calming: 4-in / 6-out",
            tip: "Keep your pace steady. Avoid over-reaching to preserve energy.",
            outputClass: "warning"
        },
        tired: {
            mainBreath: "Steady Ascent: 4-in / 6-out, focus on recovery",
            easyBreath: "Calming: 4-in / 6-out",
            tip: "Listen to your body. Today is about maintaining fitness, not pushing limits.",
            outputClass: "warning"
        },
        'very fatigued': {
            mainBreath: "Active Recovery: 5-in / 5-out (or longer) nasal breathing",
            easyBreath: "Rest Day: 5-in / 5-out",
            tip: "Consider a rest day or switch to an easy spin. Your body needs to recover.",
            outputClass: "danger"
        },
    },
    endurance: {
        label: 'Endurance Ride',
        default: {
            mainBreath: "Efficient Endurance: 3-in / 3-out or 4-in / 4-out, deep and smooth",
            easyBreath: "Calming: 4-in / 6-out",
            tip: "Focus on nasal breathing to improve efficiency and conserve energy.",
            outputClass: "info"
        },
        'peak condition': {
            mainBreath: "Push the pace: 3-in / 3-out with a slight exhale focus",
            easyBreath: "Recovery: 5-in / 5-out",
            tip: "Great day to challenge your aerobic threshold. Keep breathing rhythmic.",
            outputClass: "success"
        },
    },
    recovery: {
        label: 'Recovery Ride',
        default: {
            mainBreath: "Active Recovery: 5-in / 5-out, nasal only",
            easyBreath: "Calming: 4-in / 6-out",
            tip: "Keep the effort low. Use a soft pedal stroke and focus purely on recovery.",
            outputClass: "info",
            bonusTip: "This is a great day for zone 1 heart rate training."
        }
    },
    interval: {
        label: 'Interval/Tempo Session',
        default: {
            mainBreath: "Power Intervals: 2-in / 2-out or 3-in / 3-out",
            easyBreath: "Active Recovery: 4-in / 6-out",
            tip: "Maximize power output during intervals with sharp, focused breaths.",
            outputClass: "success",
            bonusTip: "Use recovery breaths to quickly lower your heart rate between efforts."
        },
        tired: {
            mainBreath: "Tempo Only: 3-in / 3-out, avoid sprint intervals",
            easyBreath: "Recovery: 4-in / 6-out",
            tip: "Modify your session to a steady tempo. Your body is not ready for high-intensity stress.",
            outputClass: "warning"
        },
        'very fatigued': {
            mainBreath: "Recovery: 4-in / 6-out (nasal only)",
            easyBreath: "Rest Day: 5-in / 5-out",
            tip: "Cancel the session. Your body needs a full rest day to avoid overtraining and injury.",
            outputClass: "danger"
        },
    },
    tempo: {
        label: 'Tempo Ride',
        default: {
            mainBreath: "Steady Tempo: 3-in / 3-out (nasal if possible)",
            easyBreath: "Endurance: 4-in / 4-out",
            tip: "Maintain a constant effort with a consistent, strong breathing rhythm.",
            outputClass: "info"
        },
        tired: {
            mainBreath: "Endurance: 4-in / 4-out",
            easyBreath: "Calming: 4-in / 6-out",
            tip: "Scale back to a steady endurance pace. Don't push into the tempo zone today.",
            outputClass: "warning"
        },
        'very fatigued': {
            mainBreath: "Recovery: 4-in / 6-out (nasal only)",
            easyBreath: "Rest Day: 5-in / 5-out",
            tip: "Switch to a recovery ride or take a rest day. Your body is too fatigued for tempo work.",
            outputClass: "danger"
        },
    },
    showoff: {
        label: 'Show-Off / Fast Group Ride',
        default: {
            mainBreath: "Surge Mode: 2-in / 2-out (for attacks), 3-in / 3-out (for pace lines)",
            easyBreath: "Recovery: 4-in / 6-out",
            tip: "Be prepared for sudden surges in pace. Use explosive breaths when needed.",
            outputClass: "success",
            bonusTip: "Breathing is key for staying calm and collected in the group."
        },
        'slightly fatigued': {
            mainBreath: "Controlled Pace: 3-in / 3-out",
            easyBreath: "Recovery: 4-in / 6-out",
            tip: "Avoid sharp attacks. Stick to a steady pace and conserve your energy.",
            outputClass: "warning"
        },
    },
    rest_day: {
        label: 'Rest Day / No Ride',
        default: {
            mainBreath: "Conscious Breathing: 5-in / 5-out or 4-in / 6-out, belly breathing",
            easyBreath: "N/A",
            tip: "Prioritize rest and recovery. This is where your body gets stronger!",
            outputClass: "info",
            bonusTip: "Focus on hydration, nutrition, and getting good sleep."
        },
    }
};
