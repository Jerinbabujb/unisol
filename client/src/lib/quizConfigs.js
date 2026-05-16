
export const quizConfigs = {
    mbti: {
        title: "MBTI Discovery",
        description: "Discover how you process energy, information, and decisions.",
        questions: [
            {
                dichotomy: "Energy",
                text: "After a long, busy week, how do you prefer to recharge?",
                options: [
                    { label: "Going out, socializing, or attending a lively event", axis: 'E' },
                    { label: "Staying in, reading a book, or enjoying a quiet hobby", axis: 'I' }
                ]
            },
            {
                dichotomy: "Information",
                text: "When learning something new, what do you naturally focus on first?",
                options: [
                    { label: "Concrete facts, details, and practical applications", axis: 'S' },
                    { label: "Underlying concepts, patterns, and future possibilities", axis: 'N' }
                ]
            },
            {
                dichotomy: "Decisions",
                text: "When making a difficult decision, what guides you the most?",
                options: [
                    { label: "Logic, objective data, consistency, and fairness", axis: 'T' },
                    { label: "Personal values, empathy, and how the decision affects others", axis: 'F' }
                ]
            },
            {
                dichotomy: "Organization",
                text: "How do you prefer to approach your daily life and tasks?",
                options: [
                    { label: "Having a structured plan, schedule, and completing tasks early", axis: 'J' },
                    { label: "Keeping things flexible, spontaneous, and adapting as you go", axis: 'P' }
                ]
            }
        ],
        calculateResult: (scores) => {
            return (
                (scores.E >= scores.I ? 'E' : 'I') +
                (scores.S >= scores.N ? 'S' : 'N') +
                (scores.T >= scores.F ? 'T' : 'F') +
                (scores.J >= scores.P ? 'J' : 'P')
            );
        },
        getResultMessage: (result) => `You lean towards an ${result} personality type.`
    },

    attachmentStyle: {
        title: "Attachment Style",
        description: "Understand how you connect and bond with partners.",
        questions: [
            {
                dichotomy: "Space & Closeness",
                text: "When a romantic partner asks for space, how do you typically react internally?",
                options: [
                    { label: "I feel anxious and worry they might be losing interest.", axis: 'Anxious' },
                    { label: "I feel relieved; I value my independence and alone time.", axis: 'Avoidant' },
                    { label: "I feel fine and respect their need for time to themselves.", axis: 'Secure' }
                ]
            },
            {
                dichotomy: "Trust & Vulnerability",
                text: "How do you feel about relying on a partner and having them rely on you?",
                options: [
                    { label: "I want to merge completely, but I fear they won't want to get as close.", axis: 'Anxious' },
                    { label: "I get uncomfortable when someone gets too close or depends on me too much.", axis: 'Avoidant' },
                    { label: "I am comfortable depending on them and having them depend on me.", axis: 'Secure' }
                ]
            },
            {
                dichotomy: "Conflict",
                text: "When an argument happens in a relationship, what is your instinct?",
                options: [
                    { label: "Fix it immediately. I can't rest until we've resolved it and reconnected.", axis: 'Anxious' },
                    { label: "Withdraw and shut down. I need to walk away and deal with it alone.", axis: 'Avoidant' },
                    { label: "Take a breath, then discuss the issue openly when we are both calm.", axis: 'Secure' }
                ]
            }
        ],
        calculateResult: (scores) => {
            // Find the axis with the highest score
            return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        },
        getResultMessage: (result) => `Your answers indicate a primarily ${result} attachment style.`
    },

    loveLanguage: {
        title: "Love Languages",
        description: "Discover how you prefer to give and receive affection.",
        questions: [
            {
                dichotomy: "Feeling Loved",
                text: "I feel most appreciated by a partner when they...",
                options: [
                    { label: "Tell me how much they care about me or praise my achievements.", axis: 'Words of Affirmation' },
                    { label: "Put away their phone and give me their undivided attention.", axis: 'Quality Time' },
                    { label: "Surprise me with a thoughtful little token or present.", axis: 'Receiving Gifts' },
                    { label: "Help me with my chores, errands, or heavy workload.", axis: 'Acts of Service' },
                    { label: "Hold my hand, hug me, or cuddle on the couch.", axis: 'Physical Touch' }
                ]
            },
            {
                dichotomy: "Showing Love",
                text: "When I want to show someone I care, my first instinct is to...",
                options: [
                    { label: "Write them a sweet text or tell them they look great.", axis: 'Words of Affirmation' },
                    { label: "Plan a special date or a quiet evening just for the two of us.", axis: 'Quality Time' },
                    { label: "Buy them that specific thing they mentioned liking weeks ago.", axis: 'Receiving Gifts' },
                    { label: "Cook them dinner or take a stressful task off their plate.", axis: 'Acts of Service' },
                    { label: "Give them a back rub, a kiss, or physical affection.", axis: 'Physical Touch' }
                ]
            }
        ],
        calculateResult: (scores) => {
            return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        },
        getResultMessage: (result) => `Your primary love language appears to be ${result}.`
    }
};