export const getExperienceAccToMonth=( exp = 0)=>{
   return experienceMap.get(Math.floor(exp)) ??  {};
};

export const experienceMap= new Map([
    [0,
        {
            month: 'June',
            projectName: 'StorX',
            projectInfo: 'Distributed Cloud Storage Powered by XinFin Blockchain Network',
            year: 2022,
            contributions: [
                'Created responsive dashboard UI',
                'Created custom hamburger menu',
                'Improving overall UX of the platform',
                'Learned about flux architectural pattern through redux'
            ]
        }
    ],
    [1,
        {
            month: 'June - August',
            projectName: 'Real Eye (formerly known as Remote Eye)',
            projectInfo: 'ThirdEye\'s RealEye platform is a multifaceted technology platform that combines AI and MR to support digital transformation, automation, and operational enhancement across various industries and applications.',
            year: 2022,
            contributions: [
                'Created pricing page UI including custom switch & sticky positioned pricing table.',
                'Developed Sign In and Sign Up pages UI.',
                'Implemented throttling and debouncing in username field to check if username already exists as user types.',
                'Developed create & update user pages UI and learnt to integrate APIs using redux & fetch API.',
                'Implemented async thunk for data fetching.',
                'Debugged serveral UI issues and made enhancements.'
            ]
        }
    ],
    [2,
        {
            month: 'September - November',
            projectName: 'Real Eye (formerly known as Remote Eye)',
            projectInfo: 'ThirdEye\'s RealEye platform is a multifaceted technology platform that combines AI and MR to support digital transformation, automation, and operational enhancement across various industries and applications.',
            year: 2022,
            contributions: [
                'Created payment dashboard from which user can see their status of payment and payment history (downloadable).',
                'Debugged bugs and UI issues, improving overall UX of the platform.',
                'Devloped small UI components.',
                'Had a chance to work with legacy code and class based components.',
                'Developed critical thinking skills by rigorously working on bugs.'
            ]
        }
    ],
    [3,
        {
            month: 'December - January',
            projectName: 'Real Eye (formerly known as Remote Eye)',
            projectInfo: 'ThirdEye\'s RealEye platform is a multifaceted technology platform that combines AI and MR to support digital transformation, automation, and operational enhancement across various industries and applications.',
            year: 2023,
            contributions: [
                'Implemented typing status (for individual as well as group chat) and delete feature on front end using  MirrorFly Chat SDK',
                'Gained deeper understanding about react component lifecycle and asyncrhounous state management',
                'Fixed several bugs & UI issues',
                'Handled the logic on front end for incoming VOIP calls while the current call is still in progress.',
                'Worked with Jitsi Meet (Video conferencing solution) & pusher JS to notify the backend server about call being eneded.',
                'Learn more about handling different API responses and different ways that can be used while communicatig with backend server.'
            ]
        }
    ],
    [4,
        {
            month: 'February',
            projectName: 'NexBloc',
            projectInfo: 'Focused on revolutionizing the internet by introducing decentralized DNS (dDNS) and promoting cross-chain interoperability.Envisioning a future where personal data protection is enhanced through digital entities on the decentralized web. Making dDomains accessible across all blockchain networks and empower users with the tools to harness the value of this decentralized ecosystem.',
            year: 2023,
            contributions: [
                'Enhanced user dashboard with with real time updates & pusher.js notifications for seamless onboarding.',
                'Gained insights into Hedera Hashgraph, a secure and fast decentralized network for cryptocurrency transactions and applications.',
                'Used Metamask, a popular Ethereum wallet and browser extension, for easy interaction with Ethereum networks, smart contracts, and testing blockchain solutions.',
            ]
        }
    ],
    [5,
        {
            month: 'March 2023 - Present',
            projectName: 'myIDFi',
            projectInfo: 'myIDFi represents the first DID digital financial identity and open marketplace platform for consumers for residential mortgage transactions.It enables consumers to compare the costs of live lender mortgage offers, safe and securely, without sharing personal private information with multiple parties.  No annoying phone calls,  just great rates and secure delivery and fulfillment of your personalized mortgage request. ',
            year: '',
            contributions: [
                'Revamped and created UI pages and components, enhancing the overall user interface.',
                'Conducted rigorous debugging to resolve UI issues and ensure seamless performance.',
                'Developed an admin panel that provided comprehensive data analysis on consumers, lenders, and applications, optimizing decision-making processes.',
                'Integrated a set of APIs for effortless lender profile searching and seamless addition to realtor profiles, streamlining transactions on the platform.',
                'Collaborated with cross-functional teams to ensure successful API integration and smooth functioning of the platform.',
            ]
        }
    ]
]);

export const projectsArray=[
    {
        title: 'ClutchPlay',
        about: 'Clutchplay is a Progressive Web Application (PWA) that provides users with comprehensive NBA-related content. It offers information on upcoming matches, lists of players, teams, stadiums, and the latest news about players. This application is built using React, Vite.js, Daisy UI, and Tailwind CSS.',
        deployedLink: 'https://cp-web-shanvit7.vercel.app',
        githubLink: 'https://github.com/Shanvit7/ClutchPlay'
    },
    {
        title: 'synthAIze',
        about: 'synthAIze is a web application built on Next.js that offers a variety of AI-based text services. Powered by cloud functions and RapidAPI, it combines cutting-edge artificial intelligence with user-friendly features to deliver advanced text processing capabilities.',
        deployedLink: 'https://synthi-a-ize-web.vercel.app/',
        githubLink: 'https://github.com/Shanvit7/synthiAIze-web'
    }
];