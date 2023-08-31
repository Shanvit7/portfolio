export const getExperienceAccToMonth=( exp = 0)=>{
   return experienceMap.get(exp) ??  {};
};

export const experienceMap= new Map([
    [0,
        {
            month: 'June',
            projectName: 'StorX',
            projectInfo: 'It is an DaaS provided by India based startup',
            skills: new Map([
                ['React', 0],
                ['JavaScript', 0],
                ['HTML', 0],
                ['CSS', 0]
            ]),
            year: 2022,
            contributions: [
                'Created UI',
                'Created Navbar',
                'Created Designs',
            ]
        }
    ],
    [1,
        {
            month: 'June - August',
            projectName: 'Remote Eye',
            projectInfo: '',
            skills: new Map([
                ['React', 0],
                ['JavaScript', 0],
                ['HTML', 0],
                ['CSS', 0]
            ]),
            year: 2022,
            contributions: [
                '',
                '',
                '',
            ]
        }
    ],
    [2,
        {
            month: 'September - November',
            projectName: 'Remote Eye',
            projectInfo: '',
            skills: new Map([
                ['React', 0],
                ['JavaScript', 0],
                ['HTML', 0],
                ['CSS', 0]
            ]),
            year: 2022,
            contributions: [
                '',
                '',
                '',
            ]
        }
    ],
    [3,
        {
            month: 'December - January',
            projectName: 'Remote Eye',
            projectInfo: '',
            skills: new Map([
                ['React', 0],
                ['JavaScript', 0],
                ['HTML', 0],
                ['CSS', 0]
            ]),
            year: 2023,
            contributions: [
                '',
                '',
                '',
            ]
        }
    ],
    [4,
        {
            month: 'February',
            projectName: 'NexBloc',
            projectInfo: '',
            skills: new Map([
                ['React', 0],
                ['JavaScript', 0],
                ['HTML', 0],
                ['CSS', 0]
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
                ['React', 0],
                ['JavaScript', 0],
                ['HTML', 0],
                ['CSS', 0]
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