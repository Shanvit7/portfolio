export const getExperienceAccToMonth=( exp = 0)=>{
   return experienceMap.get(exp) ??  {};
};

export const experienceMap= new Map([
    [0,
        {
            month: 'June',
            projectName: 'StorX',
            projectInfo: 'Distributed Cloud Storage Powered by XinFin Blockchain Network',
            skills: new Map([
                ['React', 2],
                ['HTML & CSS', 3],
                ['JavaScript', 2],
                ['Redux', 1],
                ['Material UI',1]
            ]),
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
            skills: new Map([
                ['React', 3],
                ['SCSS',2],
                ['Javascript', 3],
                ['Redux', 2],
                ['Material UI', 2],
            ]),
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
            skills: new Map([
                ['React', 3],
                ['SCSS',4],
                ['Javascript', 3],
                ['Redux', 3],
                ['Material UI', 4],
            ]),
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
            skills: new Map([
                ['React', 3],
                ['Third party API Integration',2],
                ['Javascript', 4],
                ['Redux', 4],
                ['Material UI', 4],
            ]),
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
            skills: new Map([
                ['React', 4],
                ['Blockchain',1],
                ['Pusher JS', 2],
                ['RTK Query', 3],
                ['Chakra UI', 3],
            ]),
            year: 2023,
            contributions: [
                '',
                '',
                '',
            ]
        }
    ],
    [5,
        {
            month: 'March - Present',
            projectName: 'myIDFi',
            projectInfo: '',
            skills: new Map([
                ['React', 4],
                ['Blockchain',3],
                ['Styled Components', 4],
                ['RTK Query', 4],
                ['Material UI', 5],
            ]),
            year: '',
            contributions: [
                '',
                '',
                '',
            ]
        }
    ]
]);