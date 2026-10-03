import edusafe360Image from '../assets/edusafe-360.png'

const projects = [
  {
    title: 'Placement Tracker',
    image: null,
    description:
      'A MERN-stack placement management system designed to help students manage placement activities, with role-based access, resume management, notifications, and an AI-powered resume analyzer.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    highlights: [
      'JWT-based role-based access control',
      'REST APIs for placement management',
      'Resume upload and management',
      'AI-powered resume analysis',
    ],
    github: 'https://github.com/skjha1808/Placement-Tracker',
    live: 'https://placement-tracker-skjha-dev.vercel.app/',
  },
  {
    title: 'EduSafe-360',
    image: edusafe360Image,
    description:
      'A student safety platform built around real-time campus monitoring, emergency assistance, risk awareness, and automated communication.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'EJS'],
    highlights: [
      'Real-time campus tracking with Firebase',
      'Geofencing alerts and emergency routing',
      'Rule-based safety chatbot',
      'Weather and location risk lookup',
      'Automated email alerts',
    ],
    github: 'https://github.com/skjha1808/EduSafe-360',
    live: 'https://edusafe-360.onrender.com/',
  },
]

export default projects