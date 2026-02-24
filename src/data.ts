export const personalInfo = {
  name: "ZHAO Yufei",
  role: "Robotics Engineer & MSc Student",
  emails: {
    personal: "xjtuzhaozhao@gmail.com",
    academic: "hi25078@bristol.ac.uk"
  },
  socials: {
    github: "https://github.com/zhaoyufei122",
    githubUsername: "zhaoyufei122"
  },

  tagline: "Bridging the gap between intelligent algorithms and robust physical systems.",
  about:
    "MSc Robotics student at the University of Bristol with a strong foundation in Engineering Mechanics from Xi'an Jiaotong University (Qian Xuesen Experimental Class). Experienced in embedded control systems, multi-sensor fusion, and AI algorithms. Former Control Group Lead for the XJTU RoboMaster Team, with a proven track record of developing high-precision robotic platforms and leading technical teams.",
  education: [
    {
      institution: "University of Bristol",
      location: "Bristol, United Kingdom",
      degree: "MSc Robotics",
      period: "09/2025 - 09/2026",
      details: [
        "Core Modules: Advanced Control & Dynamics, Robotic Fundamentals, Artificial Intelligence for Robotics",
      ],
    },
    {
      institution: "Xi'an Jiaotong University (XJTU)",
      location: "Xi'an, China",
      degree: "Bachelor of Engineering in Engineering Mechanics",
      period: "09/2020 - 07/2024",
      details: [
        "Qian Xuesen Experimental Class",
        "Core Modules: Elasticity Theory, Theoretical Mechanics, Analytical Mechanics, Fluid Mechanics",
        "3rd Class Scholarship for academic excellence in the 2020-2021 academic year",
      ],
    },
  ],
  skills: {
    programming: ["C/C++", "Python", "MATLAB"],
    control: ["PID", "LQR", "Reinforcement Learning", "Kalman Filtering"],
    embedded: ["STM32", "ESP32", "ESP8266", "Arduino Uno"],
    simulation: ["Webots", "Matlab Simulink","MuJoCo"],
    pcb: ["Altium Designer", "JLCPCB EDA"],
    design: ["SolidWorks", "Fusion 360"]
  },
  experience: [
    {
      title: "Control Group Lead",
      organization: "XJTU RoboMaster Robotics Team",
      period: "09/2022 - 08/2023",
      points: [
        "Led a 6-member control subgroup within a 30+ member robotics team, overseeing technical development, task coordination, and system integration.",
        "Co-led the design and development of the robot's electronic and control systems together with a core group of experienced members.",
        "Developed and validated balancing and hybrid robotic platforms through simulation (Webots) and physical experiments.",
      ],
    },
    {
      title: "Member of Robot Team",
      organization: "XJTU RoboMaster Robotics Team",
      period: "09/2021 - 09/2022",
      points: [
        "Developed STM32F405RG-based embedded control systems for the robot's pan-tilt unit, integrating FreeRTOS for real-time scheduling and multi-protocol communication (USART, I²C, SPI, CAN).",
        "Implemented cascade PID and LQR control to stabilize the robot's pan-tilt angles with high precision, applying Kalman filtering for sensor fusion and motion estimation.",
      ],
    },
    {
      title: "Bachelor Thesis",
      organization: "Artificial Intelligence Algorithm Based on Fuzzy Logic and Fuzzy Reasoning",
      period: "12/2023 - 06/2024",
      points: [
        "Studied fuzzy logic and cell mapping theory for nonlinear dynamical system analysis, and implemented Python programs to identify periodic solutions and attractors.",
        "Further developed a fuzzy neural network based on fuzzy reasoning principles to enhance nonlinear system representation and pattern extraction.",
      ],
    },
  ],
  achievements: [
    "1st Prize in 2023 RoboMaster National Competition (09/2023)",
    "1st Prize in 2023 RoboMaster Eastern Division (09/2023)",
    "1st Prize in 2023 RoboMaster University Championship Northwest Division (04/2023)",
    "1st Prize in 2022 RoboMaster Central Division (09/2022)",
  ],
  publications: [
    {
      title: "Direction of Arrival Estimation of Coherent Sources via a Signal Space Deep Convolution Network",
      authors: "Zhao, J.; Gui, R.; Dong, X.; Zhao, Y.",
      journal: "Symmetry, 16(4): 433",
      year: "2024",
      link: "https://doi.org/10.3390/sym16040433",
    }
  ],
  patents: [
    {
      title: "Non-circular EBNC-PFLOM Joint Optimization DOA Estimation Method under Impulsive Noise",
      number: "CN 119846547 B",
      status: "Granted May 2025",
      role: "Co-inventor"
    },
    {
      title: "Diagonalized Spatial Smoothing Coherent DOA Estimation Method Based on Non-circular Signal",
      number: "CN 119846548 B",
      status: "Granted May 2025",
      role: "Co-inventor"
    },
    {
      title: "Wireless Sensor Network-Based Multi-Target DOA Tracking Method Using Probability Hypothesis Density (PHD)",
      number: "CN 120085244 B",
      status: "Granted Nov 2025",
      role: "Co-inventor"
    }
  ],
  githubProjects: [
    {
      title: "Fuzzy Logic Controller & Cell Mapping",
      description: "Python implementation of fuzzy logic and cell mapping theory for nonlinear dynamical system analysis, identifying periodic solutions and attractors.",
      category: "Algorithms & AI",
      techStack: ["Python", "NumPy", "SciPy"],
      githubUrl: "https://github.com/yourusername/fuzzy-logic-controller"
    },
    {
      title: "DOA Estimation Deep Convolution Network",
      description: "Signal Space Deep Convolution Network model for Direction of Arrival (DOA) estimation of coherent sources.",
      category: "Algorithms & AI",
      techStack: ["Python", "PyTorch", "MATLAB"],
      githubUrl: "https://github.com/yourusername/doa-estimation-dcn"
    },
    {
      title: "STM32 Pan-Tilt Control System",
      description: "Embedded control system integrating FreeRTOS, cascade PID, and LQR control with Kalman filtering for high-precision stabilization.",
      category: "Robotics & Embedded",
      techStack: ["C/C++", "STM32", "FreeRTOS", "CAN"],
      githubUrl: "https://github.com/yourusername/stm32-gimbal-control"
    },
    {
      title: "Hybrid Robot Simulation Platform",
      description: "Webots simulation environment for balancing and hybrid robotic platforms to validate control algorithms before physical deployment.",
      category: "Robotics & Embedded",
      techStack: ["Webots", "C++", "Python"],
      githubUrl: "https://github.com/yourusername/webots-hybrid-robot"
    },
    {
      title: "Orbital Pursuit",
      description: "A web-based mini-game featuring orbital mechanics and pursuit-evasion gameplay. Playable directly in the browser.",
      category: "Web Games & Others",
      techStack: ["HTML5", "JavaScript", "Canvas"],
      githubUrl: "https://github.com/zhaoyufei122/orbital-pursuit",
      demoUrl: "https://zhaoyufei122.github.io/orbital-pursuit/"
    },
    {
      title: "Orbital Pursuit 2",
      description: "Sequel to the orbital pursuit game with advanced mechanics, new levels, and improved physics.",
      category: "Web Games & Others",
      techStack: ["React", "TypeScript", "Vite"],
      githubUrl: "https://github.com/zhaoyufei122/orbital-pursuit2",
      demoUrl: "https://orbital-pursuit.space/"
    }
  ]
};

export const posts = [
    {
    id: "北欧旅记",
    title: "北欧旅记",
    excerpt: "英国留子北欧游玩个人心得体会",
    date: "2026-02-23",
    readTime: "20 min read",
    tags: ["Travel", "North Euro"],
    type: "Travel Records",
    icon: "BookOpen",
    contentUrl: "/posts/北欧旅记.md"
  },


  {
    id: "how-to-update",
    title: "系统维护指南：如何添加文章、项目与个人照片",
    excerpt: "这是一篇写给你的网站维护说明书。教你如何通过修改 data.ts 文件来更新网站上的个人经历、项目、论文，以及如何替换首页的个人照片。",
    date: new Date().toISOString().split('T')[0],
    readTime: "3 min read",
    tags: ["Tutorial", "Web", "Maintenance"],
    type: "System Guide",
    icon: "Wrench",
    contentUrl: "/posts/how-to-update.md"
  },
  {
    id: "stm32-flight-controller",
    title: "Building a Custom STM32 Flight Controller from Scratch",
    excerpt: "A deep dive into the architecture, RTOS scheduling, and sensor fusion algorithms used in my latest quadcopter project.",
    date: "2025-10-15",
    readTime: "8 min read",
    tags: ["Embedded", "STM32", "Control Systems"],
    type: "Article",
    icon: "BookOpen",
    contentUrl: "/posts/stm32-flight-controller.md"
  },
  {
    id: "fuzzy-logic-repo",
    title: "GitHub Repo Summary: Fuzzy Logic Controller Library",
    excerpt: "An overview of my open-source Python library for fuzzy logic control, originally developed during my bachelor thesis.",
    date: "2025-09-22",
    readTime: "5 min read",
    tags: ["Python", "AI", "Open Source"],
    type: "Repo",
    icon: "Github",
    contentUrl: "/posts/fuzzy-logic-repo.md"
  }
];
