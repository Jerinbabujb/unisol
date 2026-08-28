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
                dichotomy: "Social Style",
                text: "At a social gathering, how do you usually interact?",
                options: [
                    { label: "I mingle with many different people, including strangers.", axis: 'E' },
                    { label: "I prefer having deep conversations with a few people I already know.", axis: 'I' }
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
                dichotomy: "Focus",
                text: "When listening to a story or reading a book, what captures your attention?",
                options: [
                    { label: "The actual events, physical descriptions, and what literally happened.", axis: 'S' },
                    { label: "The symbolism, hidden meanings, and the overarching themes.", axis: 'N' }
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
                dichotomy: "Feedback",
                text: "When giving feedback to a friend or colleague, what is your priority?",
                options: [
                    { label: "Being truthful, direct, and objective, even if it's blunt.", axis: 'T' },
                    { label: "Being tactful, supportive, and preserving their feelings.", axis: 'F' }
                ]
            },
            {
                dichotomy: "Organization",
                text: "How do you prefer to approach your daily life and tasks?",
                options: [
                    { label: "Having a structured plan, schedule, and completing tasks early", axis: 'J' },
                    { label: "Keeping things flexible, spontaneous, and adapting as you go", axis: 'P' }
                ]
            },
            {
                dichotomy: "Deadlines",
                text: "How do you feel about project deadlines or upcoming trips?",
                options: [
                    { label: "I prefer to have everything planned and packed well ahead of time.", axis: 'J' },
                    { label: "I thrive on the last-minute pressure and prefer to keep my options open.", axis: 'P' }
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

    humanDesign: {
        title: "Human Design Energy Type",
        description: "Discover your energy type based on your natural behavioral patterns and how you interact with the world.",
        questions: [
            {
                dichotomy: "Energy & Stamina",
                text: "How do you typically experience your energy levels throughout the day?",
                options: [
                    { label: "I have a steady, reliable reserve of energy when I'm doing things I love.", axis: 'Generator' },
                    { label: "I have boundless energy, move very quickly, and love multitasking.", axis: 'Manifesting Generator' },
                    { label: "My energy fluctuates; I work best in short bursts and need plenty of rest.", axis: 'Projector' },
                    { label: "I have massive bursts of starting energy, but I don't always want to finish the task.", axis: 'Manifestor' },
                    { label: "My energy completely depends on my environment and the people I am around.", axis: 'Reflector' }
                ]
            },
            {
                dichotomy: "Action & Decision Making",
                text: "When it comes to making things happen in your life, you naturally...",
                options: [
                    { label: "Initiate and inform others of what I'm doing before I do it.", axis: 'Manifestor' },
                    { label: "Wait for something to cross my path so my gut can respond to it.", axis: 'Generator' },
                    { label: "Wait to be recognized and explicitly invited before sharing my wisdom.", axis: 'Projector' },
                    { label: "Respond to things quickly and then pivot if it doesn't feel right.", axis: 'Manifesting Generator' },
                    { label: "Take plenty of time (even weeks) to feel things out before deciding.", axis: 'Reflector' }
                ]
            },
            {
                dichotomy: "Rest & Winding Down",
                text: "How do you prefer to wind down for sleep?",
                options: [
                    { label: "I sleep best when I am physically exhausted from a satisfying day.", axis: 'Generator' },
                    { label: "I need to burn out the last bit of restless energy before I can crash.", axis: 'Manifesting Generator' },
                    { label: "I need to lie down before I'm actually tired to let go of absorbed energy.", axis: 'Projector' },
                    { label: "I need to sleep alone or retreat to my own space to escape demands.", axis: 'Manifestor' },
                    { label: "I need a completely clean, clear, and quiet space to discharge the day's energy.", axis: 'Reflector' }
                ]
            },
            {
                dichotomy: "Alignment Indicators",
                text: "When you are out of alignment or forcing things, what is your primary negative emotion?",
                options: [
                    { label: "Anger (feeling interrupted, controlled, or blocked).", axis: 'Manifestor' },
                    { label: "Frustration (feeling stuck, drained, or obligated).", axis: 'Generator' },
                    { label: "Frustration combined with extreme impatience.", axis: 'Manifesting Generator' },
                    { label: "Bitterness (feeling unappreciated, unseen, or ignored).", axis: 'Projector' },
                    { label: "Disappointment (feeling let down by people or environments).", axis: 'Reflector' }
                ]
            },
            {
                dichotomy: "Success & Signature",
                text: "What feeling tells you that you are living your best life?",
                options: [
                    { label: "Absolute peace and freedom from interference.", axis: 'Manifestor' },
                    { label: "Deep, satisfying exhaustion after doing work I truly love.", axis: 'Generator' },
                    { label: "The thrill of moving fast and skipping through tasks playfully without resistance.", axis: 'Manifesting Generator' },
                    { label: "Feeling deeply successful, recognized, and appreciated for my guidance.", axis: 'Projector' },
                    { label: "Constant surprise and awe at the beauty and uniqueness of life.", axis: 'Reflector' }
                ]
            },
            {
                dichotomy: "Intuition & Gut Feelings",
                text: "When faced with a big opportunity, how does your body react?",
                options: [
                    { label: "A distinct physical pull or an involuntary 'uh-huh' sound in my gut.", axis: 'Generator' },
                    { label: "An immediate gut 'yes' followed by a rapid burst of action to get started.", axis: 'Manifesting Generator' },
                    { label: "A sense of quiet recognition when the offer feels perfectly tailored to me.", axis: 'Projector' },
                    { label: "A sudden, undeniable internal urge to just go do it regardless of logic.", axis: 'Manifestor' },
                    { label: "I don't know immediately; I need to talk it out with different people over time.", axis: 'Reflector' }
                ]
            },
            {
                dichotomy: "Group Dynamics",
                text: "In a group setting, what role do you naturally fall into?",
                options: [
                    { label: "The builder/doer keeping the momentum going.", axis: 'Generator' },
                    { label: "The guide/advisor seeing how the system could be more efficient.", axis: 'Projector' },
                    { label: "The trailblazer getting the ball rolling, then stepping back.", axis: 'Manifestor' },
                    { label: "The multitasker skipping steps and finding faster ways to do things.", axis: 'Manifesting Generator' },
                    { label: "The observer taking the temperature of the group's health and mood.", axis: 'Reflector' }
                ]
            },
            {
                dichotomy: "Interaction Preferences",
                text: "How do you prefer people interact with you?",
                options: [
                    { label: "I want them to recognize my specific skills and ask for my input.", axis: 'Projector' },
                    { label: "I want them to ask me yes/no questions so I can feel my gut response.", axis: 'Generator' },
                    { label: "I want them to just get out of my way and let me do my thing.", axis: 'Manifestor' },
                    { label: "I want them to give me a completely open, low-pressure environment.", axis: 'Reflector' },
                    { label: "I want them to give me options to react to, and let me change my mind.", axis: 'Manifesting Generator' }
                ]
            }
        ],
        calculateResult: (scores) => {
            if (Object.keys(scores).length === 0) return 'Unsure';
            return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        },
        getResultMessage: (result) => `Your behavior aligns closest with a ${result} energy type.`
    },

    attachmentStyle: {
        title: "Attachment Style Assessment",
        description: "Understand your deeper relationship patterns and how you handle intimacy.",
        questions: [
            {
                dichotomy: "Space & Closeness",
                text: "When a partner asks for more space, how do you typically react internally?",
                options: [
                    { label: "I panic, feel rejected, and worry they are pulling away or want to leave me.", axis: 'Anxious' },
                    { label: "I feel relieved. I probably needed space anyway.", axis: 'Avoidant' },
                    { label: "I respect their boundary and use the time for my own hobbies or friends.", axis: 'Secure' },
                    { label: "I feel hurt, but I also immediately pull away aggressively to protect myself.", axis: 'Disorganized' }
                ]
            },
            {
                dichotomy: "Reliance & Independence",
                text: "How do you feel about relying on romantic partners?",
                options: [
                    { label: "I hate it. I prefer to be completely self-sufficient and independent.", axis: 'Avoidant' },
                    { label: "I am comfortable depending on them, and having them depend on me.", axis: 'Secure' },
                    { label: "I want to rely on them completely, but I constantly worry they won't be there for me.", axis: 'Anxious' },
                    { label: "I desperately want to rely on them, but I find it impossible to actually trust them.", axis: 'Disorganized' }
                ]
            },
            {
                dichotomy: "Conflict Resolution",
                text: "When there is a conflict in your relationship, your instinct is to:",
                options: [
                    { label: "Fix it immediately. I can't rest until we talk it out and reassure each other.", axis: 'Anxious' },
                    { label: "Shut down, withdraw, or leave the room. I need to distance myself from the drama.", axis: 'Avoidant' },
                    { label: "Address it calmly, listen to their side, and look for a compromise.", axis: 'Secure' },
                    { label: "Lash out or freeze up. My reactions are often chaotic and overwhelming.", axis: 'Disorganized' }
                ]
            },
            {
                dichotomy: "Views on Intimacy",
                text: "How do you view closeness and intimacy?",
                options: [
                    { label: "It's a natural, healthy part of a relationship that I enjoy.", axis: 'Secure' },
                    { label: "It feels suffocating or trapping if there's too much of it.", axis: 'Avoidant' },
                    { label: "I crave extreme closeness and often feel my partner doesn't want it as much as I do.", axis: 'Anxious' },
                    { label: "I crave it deeply, but the closer I get, the more terrified I become.", axis: 'Disorganized' }
                ]
            },
            {
                dichotomy: "Communication Needs",
                text: "When you need something emotional from your partner, how do you ask?",
                options: [
                    { label: "I ask directly and clearly for what I need.", axis: 'Secure' },
                    { label: "I drop hints and get resentful if they don't figure it out.", axis: 'Anxious' },
                    { label: "I usually don't ask, because I assume they won't deliver anyway.", axis: 'Avoidant' },
                    { label: "I push them away but secretly hope they fight to give me what I need.", axis: 'Disorganized' }
                ]
            },
            {
                dichotomy: "Jealousy & Security",
                text: "If your partner spends a lot of time with a new, attractive friend, you:",
                options: [
                    { label: "Trust them and don't think much of it.", axis: 'Secure' },
                    { label: "Feel intensely threatened, monitor their behavior, and seek reassurance.", axis: 'Anxious' },
                    { label: "Pretend I don't care and preemptively pull away from the relationship.", axis: 'Avoidant' },
                    { label: "Experience extreme anxiety and might start a major argument over it.", axis: 'Disorganized' }
                ]
            },
            {
                dichotomy: "Relationship Fears",
                text: "What is your biggest underlying fear in a relationship?",
                options: [
                    { label: "Being abandoned, unloved, or replaced.", axis: 'Anxious' },
                    { label: "Losing my independence, identity, or freedom.", axis: 'Avoidant' },
                    { label: "Being betrayed or trapped by someone who claims to love me.", axis: 'Disorganized' },
                    { label: "I don't have severe fears; I trust that if things end, I will be okay.", axis: 'Secure' }
                ]
            },
            {
                dichotomy: "Emotional Pacing",
                text: "How quickly do you open up emotionally to new partners?",
                options: [
                    { label: "Very quickly. I tend to overshare and attach early.", axis: 'Anxious' },
                    { label: "Very slowly, if at all. I keep my deepest feelings to myself.", axis: 'Avoidant' },
                    { label: "Gradually, as trust is naturally built over time.", axis: 'Secure' },
                    { label: "Unpredictably. I might overshare one day and build a wall the next.", axis: 'Disorganized' }
                ]
            },
            {
                dichotomy: "Past Relationships",
                text: "How do you generally view your past relationships?",
                options: [
                    { label: "They were learning experiences; I can recognize the good and bad.", axis: 'Secure' },
                    { label: "I tend to still feel hurt, resentful, or hung up on my exes.", axis: 'Anxious' },
                    { label: "I moved on immediately and rarely think about them at all.", axis: 'Avoidant' },
                    { label: "They feel like unresolved trauma; the memories are highly distressing.", axis: 'Disorganized' }
                ]
            },
            {
                dichotomy: "Self-Worth",
                text: "Deep down, your core belief about yourself in relationships is:",
                options: [
                    { label: "I am inherently worthy of love and respect.", axis: 'Secure' },
                    { label: "I have to overcompensate and prove my worth so they don't leave.", axis: 'Anxious' },
                    { label: "I am better off relying on myself because others will let me down.", axis: 'Avoidant' },
                    { label: "I am broken and whoever gets close to me will eventually hurt me.", axis: 'Disorganized' }
                ]
            },
            {
                dichotomy: "Supporting Partners",
                text: "If a partner is feeling sad or stressed, you:",
                options: [
                    { label: "Offer support and comfort in the way they prefer to receive it.", axis: 'Secure' },
                    { label: "Feel uncomfortable and hope they handle it on their own.", axis: 'Avoidant' },
                    { label: "Internalize it, worry it's my fault, and try obsessively to fix it.", axis: 'Anxious' },
                    { label: "Feel overwhelmed and might distance myself because I don't know how to handle it.", axis: 'Disorganized' }
                ]
            },
            {
                dichotomy: "Self & Others",
                text: "How do you generally view yourself and your partners?",
                options: [
                    { label: "I am worthy of love, and others are generally trustworthy.", axis: 'Secure' },
                    { label: "I am flawed and need reassurance, but others are great (if they stay).", axis: 'Anxious' },
                    { label: "I am fine on my own, but others are too needy or unreliable.", axis: 'Avoidant' },
                    { label: "I am unworthy, and others are inevitably going to hurt me.", axis: 'Disorganized' }
                ]
            }
        ],
        calculateResult: (scores) => {
            if (Object.keys(scores).length === 0) return 'Unsure';
            return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        },
        getResultMessage: (result) => `Your answers indicate a primarily ${result} attachment style.`
    },

    loveLanguage: {
        title: "Love Languages Discovery",
        description: "A deep dive into how you most naturally give and receive affection.",
        questions: [
            {
                dichotomy: "Daily Appreciation",
                text: "What makes you feel most appreciated after a long, hard day?",
                options: [
                    { label: "Hearing 'I appreciate how hard you work, I'm proud of you.'", axis: 'Words of Affirmation' },
                    { label: "Coming home to find my partner has cooked dinner and cleaned.", axis: 'Acts of Service' },
                    { label: "Getting a long, wordless hug or a back rub.", axis: 'Physical Touch' },
                    { label: "Sitting down together with no phones, just talking and unwinding.", axis: 'Quality Time' },
                    { label: "My partner bringing me my favorite snack or a little treat they picked up.", axis: 'Receiving Gifts' }
                ]
            },
            {
                dichotomy: "Daily Routine",
                text: "Your favorite everyday moment with your partner is:",
                options: [
                    { label: "A morning coffee chat before the day gets busy.", axis: 'Quality Time' },
                    { label: "Receiving a quick 'I love you' or encouragement text while at work.", axis: 'Words of Affirmation' },
                    { label: "A lingering goodbye kiss before leaving the house.", axis: 'Physical Touch' },
                    { label: "Them taking out the trash or making the bed without being asked.", axis: 'Acts of Service' },
                    { label: "Them surprising me by bringing home a pastry or my favorite drink.", axis: 'Receiving Gifts' }
                ]
            },
            {
                dichotomy: "Making Amends",
                text: "Which of these apologies means the most to you?",
                options: [
                    { label: "Clearing their schedule to spend dedicated time making it up to me.", axis: 'Quality Time' },
                    { label: "A sincere, spoken apology detailing why they were wrong and how much they care.", axis: 'Words of Affirmation' },
                    { label: "Taking over my chores or burdens to show they want to make things right.", axis: 'Acts of Service' },
                    { label: "Bringing me flowers or a thoughtful item to show they feel bad.", axis: 'Receiving Gifts' },
                    { label: "Holding me close and offering physical reassurance while they apologize.", axis: 'Physical Touch' }
                ]
            },
            {
                dichotomy: "Celebrations",
                text: "What's the best way for a partner to celebrate your birthday?",
                options: [
                    { label: "A carefully chosen, highly personalized present.", axis: 'Receiving Gifts' },
                    { label: "A weekend getaway just the two of us, entirely focused on each other.", axis: 'Quality Time' },
                    { label: "A deeply affectionate day filled with intimacy and closeness.", axis: 'Physical Touch' },
                    { label: "A heartfelt, handwritten letter expressing everything they love about me.", axis: 'Words of Affirmation' },
                    { label: "Handling all the planning, logistics, and errands so I can just relax.", axis: 'Acts of Service' }
                ]
            },
            {
                dichotomy: "Meaningful Surprises",
                text: "The absolute best random surprise would be:",
                options: [
                    { label: "A surprise date night they planned from start to finish.", axis: 'Quality Time' },
                    { label: "A sweet post-it note left on my bathroom mirror.", axis: 'Words of Affirmation' },
                    { label: "A thoughtful gadget or item I've been eyeing for months.", axis: 'Receiving Gifts' },
                    { label: "Finding out they got my car washed and detailed while I was asleep.", axis: 'Acts of Service' },
                    { label: "A surprise shoulder massage when I'm stressed at my desk.", axis: 'Physical Touch' }
                ]
            },
            {
                dichotomy: "Reconnecting",
                text: "You feel disconnected from your partner. What usually fixes it?",
                options: [
                    { label: "Cuddling on the couch or holding hands on a walk.", axis: 'Physical Touch' },
                    { label: "Going on a proper date night with uninterrupted conversation.", axis: 'Quality Time' },
                    { label: "Having a deep conversation where we validate each other's feelings.", axis: 'Words of Affirmation' },
                    { label: "Working on a project together or them helping me solve a problem.", axis: 'Acts of Service' },
                    { label: "Them surprising me with a small token that shows they were thinking of me.", axis: 'Receiving Gifts' }
                ]
            },
            {
                dichotomy: "Long Distance",
                text: "If you and your partner have to be apart for a week, what helps you feel connected?",
                options: [
                    { label: "Long phone calls and frequent texting.", axis: 'Words of Affirmation' },
                    { label: "Receiving a care package in the mail.", axis: 'Receiving Gifts' },
                    { label: "Setting up a specific time for a video-call date.", axis: 'Quality Time' },
                    { label: "Knowing they are handling things at home so I don't have to worry.", axis: 'Acts of Service' },
                    { label: "Sleeping in one of their hoodies because it smells like them.", axis: 'Physical Touch' }
                ]
            },
            {
                dichotomy: "Relationship Pain Points",
                text: "What hurts the most in a relationship?",
                options: [
                    { label: "Harsh, critical words or a tone of contempt.", axis: 'Words of Affirmation' },
                    { label: "My partner being consistently distracted by their phone while we are talking.", axis: 'Quality Time' },
                    { label: "Broken promises or my partner failing to follow through on a task.", axis: 'Acts of Service' },
                    { label: "Physical coldness, rejection of intimacy, or a lack of casual touch.", axis: 'Physical Touch' },
                    { label: "My partner forgetting an anniversary or giving a thoughtless, generic gift.", axis: 'Receiving Gifts' }
                ]
            },
            {
                dichotomy: "Feeling Unloved",
                text: "I feel most neglected when my partner...",
                options: [
                    { label: "Pulls away physically or doesn't want to cuddle.", axis: 'Physical Touch' },
                    { label: "Leaves my texts on read or communicates very bluntly.", axis: 'Words of Affirmation' },
                    { label: "Watches TV or zones out while I am trying to talk to them.", axis: 'Quality Time' },
                    { label: "Leaves all the house chores for me to do alone.", axis: 'Acts of Service' },
                    { label: "Never brings home little treats or forgets special occasions.", axis: 'Receiving Gifts' }
                ]
            },
            {
                dichotomy: "Expressing Affection",
                text: "How do you most naturally show someone you love them?",
                options: [
                    { label: "I step in to help them out, run errands, or fix things for them.", axis: 'Acts of Service' },
                    { label: "I compliment them often and tell them how much they mean to me.", axis: 'Words of Affirmation' },
                    { label: "I constantly buy or make little things that remind me of them.", axis: 'Receiving Gifts' },
                    { label: "I prioritize spending time with them over my other plans.", axis: 'Quality Time' },
                    { label: "I am very affectionate, always going in for hugs or touches.", axis: 'Physical Touch' }
                ]
            },
            {
                dichotomy: "Ideal Mornings",
                text: "An ideal weekend morning looks like:",
                options: [
                    { label: "Staying in bed late, cuddling and being physically close.", axis: 'Physical Touch' },
                    { label: "My partner waking up early to bring me coffee and make breakfast.", axis: 'Acts of Service' },
                    { label: "Going for a long hike or drive where we can just talk for hours.", axis: 'Quality Time' },
                    { label: "Waking up to a sweet little surprise they bought for the weekend.", axis: 'Receiving Gifts' },
                    { label: "Laying in bed having a deep, encouraging conversation about our goals.", axis: 'Words of Affirmation' }
                ]
            },
            {
                dichotomy: "Feeling Secure",
                text: "You feel most secure in your relationship when:",
                options: [
                    { label: "My partner frequently tells me I'm attractive and loved.", axis: 'Words of Affirmation' },
                    { label: "We have an active, affectionate physical connection.", axis: 'Physical Touch' },
                    { label: "We carve out non-negotiable time for each other every week.", axis: 'Quality Time' },
                    { label: "I know my partner has my back and will handle things when I'm overwhelmed.", axis: 'Acts of Service' },
                    { label: "I see tangible evidence that they think about me when we're apart.", axis: 'Receiving Gifts' }
                ]
            }
        ],
        calculateResult: (scores) => {
            if (Object.keys(scores).length === 0) return 'Unsure';
            return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        },
        getResultMessage: (result) => `Your primary love language appears to be ${result}.`
    }
};