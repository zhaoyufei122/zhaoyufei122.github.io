export const personalInfo = {
  name: "ZHAO Yufei",
  role: "Robotics Engineer & MSc Student",
  emails: {
    personal: "xjtuzhaozhao@gmail.com",
    academic: "hi25078@bristol.ac.uk"
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
    control: ["PID", "LQR", "Fuzzy Logic", "Kalman Filtering"],
    embedded: ["STM32 (HAL, FreeRTOS, CAN, I²C, SPI)", "ESP32", "ESP8266", "Arduino Uno"],
    simulation: ["Webots", "SolidWorks", "Fusion 360"],
    pcb: ["Altium Designer", "JLCPCB EDA"],
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
      githubUrl: "https://github.com/yourusername/orbital-pursuit",
      demoUrl: "https://yourusername.github.io/orbital-pursuit"
    },
    {
      title: "Orbital Pursuit 2",
      description: "Sequel to the orbital pursuit game with advanced mechanics, new levels, and improved physics.",
      category: "Web Games & Others",
      techStack: ["React", "TypeScript", "Vite"],
      githubUrl: "https://github.com/yourusername/orbital-pursuit-2",
      demoUrl: "https://yourusername.github.io/orbital-pursuit-2"
    }
  ]
};
