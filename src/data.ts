export interface Project {
  title: string;
  description: string;
  category: string;
  techStack: string[];
  context?: string;
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  mediaAspectRatio?: string;
  relatedLinks?: { label: string; url: string }[];
}

export const personalInfo = {
  name: "ZHAO Yufei",
  role: "Robotics Engineer & MSc Student",
  emails: {
    personal: "xjtuzhaozhao@gmail.com",
    academic: "hi25078@bristol.ac.uk"
  },
  socials: {
    github: "https://github.com/zhaoyufei122",
    githubUsername: "zhaoyufei122",
    googleScholar: "https://scholar.google.com/citations?user=mPmR05IAAAAJ&hl=zh-CN"
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
      title: "DOA Estimation of Coherent Signals From a Single Moving Sensor: Time-Domain Multi-Sampling and Synthetic Aperture Convolution Kernel",
      authors: "Zhao, J.; Dong, X.; Zhao, Y.; Sun, M.; Yang, X.; Zhang, X.",
      journal: "IEEE Transactions on Aerospace and Electronic Systems",
      year: "2026",
      link: "https://doi.org/10.1109/TAES.2026.3731610",
    },
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
      title: "Piper + SmolVLA: Learning to Pick and Place",
      context: "Personal robotics project | Real-arm learning and deployment",
      description: "Built an end-to-end learning workflow on an AgileX Piper arm with a Pika gripper and RealSense D405 wrist camera: SpaceMouse demonstration collection, synchronized observations and actions, LeRobot dataset conversion, SmolVLA fine-tuning and local policy execution. The selected 48-second recording shows a red-cube pick-and-place trial. Reliable colour-conditioned selection is still under investigation: white-cube instructions are not yet reliable, motion jitter remains, and no systematic success-rate benchmark has been measured.",
      category: "Robotics & Embedded",
      techStack: ["AgileX Piper", "Pika Gripper", "SmolVLA", "LeRobot", "RealSense D405", "SpaceMouse", "PyTorch"],
      githubUrl: "https://github.com/zhaoyufei122/piper-smolvla",
      imageUrl: "/projects/piper-smolvla-demo-poster.jpg",
      videoUrl: "/projects/piper-smolvla-demo.mp4",
      relatedLinks: [
        { label: "Training and inference", url: "https://github.com/zhaoyufei122/piper-smolvla/blob/main/SMOLVLA.md" }
      ]
    },
    {
      title: "Galaxea A1: Gravity-Assisted Teaching and MoveIt Replay",
      context: "Personal robotics project | Motion planning and hardware integration",
      description: "Extended the official Galaxea A1 SDK with gravity-assisted hand guiding, measured joint-and-gripper keyframe recording, and MoveIt 2 grasp replay. Connected ROS 2 Jazzy and RViz2 to the ROS 1 SDK backend through an action bridge, with gripper coordination and joint-feedback diagnostics. The recordings show physical grasping and hand-guided motion. Gravity assistance uses nominal modelling and session-local corrections; full-workspace calibration, repeatability and positioning accuracy have not been systematically evaluated.",
      category: "Robotics & Embedded",
      techStack: ["Galaxea A1", "ROS 2 Jazzy", "MoveIt 2", "RViz2", "ROS 1 Noetic", "Gravity Compensation", "Keyframe Teaching"],
      githubUrl: "https://github.com/zhaoyufei122/galaxea-a1-tools",
      imageUrl: "/projects/galaxea-a1-grasp-demo-poster.jpg",
      videoUrl: "/projects/galaxea-a1-grasp-demo.mp4",
      mediaAspectRatio: "9 / 16",
      relatedLinks: [
        { label: "Hand-guided teaching (16 s)", url: "/projects/galaxea-a1-hand-guiding.mp4" },
        { label: "English documentation", url: "https://github.com/zhaoyufei122/galaxea-a1-tools/blob/main/README.en.md" }
      ]
    },
    {
      title: "SAW-Buddy Assistive Robotics System",
      featured: true,
      context: "MSc dissertation | University of Bristol",
      description: "Built SAW-Buddy, a supervised ROS 2 mobile-manipulation system combining a Unitree Go2 quadruped, D1T arm, RealSense D435, and Hokuyo LiDAR for walker retrieval and delivery, user following, and door-opening assistance. In evaluation, it delivered the walker in 18 of 20 runs, recovered all three induced grasp-loss events, and opened a lightweight door in 6 of 10 attempts.",
      category: "Robotics & Embedded",
      techStack: ["ROS 2 Jazzy", "Unitree Go2", "Unitree D1T", "Nav2", "MoveIt", "YOLOv8", "AprilTag", "Hokuyo LiDAR"],
      githubUrl: "https://github.com/zhaoyufei122/Final_Work/tree/feature/full-demo-pipeline",
      relatedLinks: [
        {
          label: "Hokuyo Navigation",
          url: "https://github.com/zhaoyufei122/go2_hokuyo_urg4_navigation"
        }
      ],
      imageUrl: "/projects/saw-buddy-overview.png",
      videoUrl: "/projects/saw-buddy-dissertation-demo.mp4"
    },
    {
      title: "Smart Chinese Chess Guidance Board",
      description: "Designed the PCB layout and component selection for an interactive Chinese chess board for elderly entertainment. The full board is assembled from six modular PCB panels, using magnetic switch sensing to detect piece lift/drop events from the standard initial layout, RGB LEDs driven by PWM to highlight legal moves and capture options, and red flashing/audio feedback for invalid decisions.",
      category: "Robotics & Embedded",
      techStack: ["EasyEDA Pro", "PCB Layout", "Magnetic Switches", "RGB LEDs", "PWM", "Hardware Prototyping"],
      githubUrl: "https://github.com/zhaoyufei122/smart-chinese-chess-board-pcb",
      imageUrl: "/projects/smart-chinese-chess-board-pcb-top.png",
      videoUrl: "/projects/smart-chinese-chess-board-demo.mp4"
    },
    {
      title: "Learning Robot Trajectories with DMP and GMM-GMR",
      context: "MSc coursework | Robot Learning for Control",
      description: "Implemented a demonstration-based trajectory learning pipeline in MATLAB, using Gaussian Mixture Regression to model the nonlinear forcing term of a Dynamic Movement Primitive. Compared WLR-DMP and GMM-GMR-DMP at model sizes 3, 9 and 20 across five demonstrated trajectories. At size 9, the reported reproduction MSE fell from 9.085 to 3.3492. Converted the learned path into joint references for a two-link robot kinematic simulation.",
      category: "MSc Coursework",
      techStack: ["MATLAB", "Simulink", "DMP", "GMM-GMR", "Inverse Kinematics"],
      imageUrl: "/projects/msc-dmp-trajectories.png",
      relatedLinks: [{ label: "Reproduction error", url: "/projects/msc-dmp-error.png" }]
    },
    {
      title: "Two-Link Manipulator: Robust and Underactuated Control",
      featured: true,
      context: "MSc coursework | Advanced Control and Dynamics",
      description: "Derived the two-link manipulator dynamics and implemented Computed Torque Control (CTC) and Sliding Mode Control (SMC) in Simulink. Compared tracking under external disturbances, a 50 Nm torque limit and estimated joint velocity. In the reported simulations, SMC reduced steady-state RMS tracking error by approximately 6-34 times at matched gains, with increased control effort. Extended the study to local LQR stabilization of Pendubot and Acrobot models.",
      category: "MSc Coursework",
      techStack: ["MATLAB", "Simulink", "CTC", "Sliding Mode Control", "LQR", "Dynamics"],
      imageUrl: "/projects/msc-manipulator-tracking.png",
      relatedLinks: [{ label: "Control architecture", url: "/projects/msc-manipulator-architecture.png" }]
    },
    {
      title: "Robust Target Following with Pololu 3pi+",
      featured: true,
      context: "MSc coursework | Robot System and Science | Team project",
      description: "Investigated target-following reliability on a low-cost Pololu 3pi+ robot with range-dependent infrared sensing. Combined sensor calibration, wheel-odometry propagation and innovation gating to maintain smoother tracking during partial signal loss and unreliable surface returns. Team coursework with Fan Zhang and Zeyu Li; the demonstration shows the physical robot experiment.",
      category: "MSc Coursework",
      techStack: ["Pololu 3pi+", "IR Sensing", "Wheel Odometry", "Kinematic Prediction", "Sensor Fusion"],
      imageUrl: "/projects/msc-pololu-poster.jpg",
      videoUrl: "/projects/msc-pololu-demo.mp4"
    },
    {
      title: "RoboMaster Gimbal Control and Visual Tracking",
      context: "XJTU RoboMaster | Control Group Member",
      description: "Developed STM32F405RG control modules for the team's gimbal and visual auto-aim pipeline, integrating FreeRTOS scheduling and CAN, I2C, SPI and USART communication. Applied cascade PID, LQR and Kalman filtering for stabilization and state estimation, with Webots validation and real-hardware debugging. The video shows the team's gimbal following a moving illuminated target.",
      category: "Robotics & Embedded",
      techStack: ["C/C++", "STM32F405RG", "FreeRTOS", "CAN", "PID", "LQR", "Kalman Filter"],
      imageUrl: "/projects/rm-gimbal-poster.jpg",
      videoUrl: "/projects/rm-gimbal-demo.mp4",
      mediaAspectRatio: "9 / 16"
    },
    {
      title: "RoboMaster Two-Wheel Balancing Infantry Robot",
      featured: true,
      context: "XJTU RoboMaster | Control Group Lead",
      description: "Led control development for the team's underactuated two-wheel balancing infantry robot. Combined LQR balance control with Kalman state estimation and evaluated behavior under impact and contact disturbances through simulation and hardware testing. Coordinated integration with the mechanical, vision and electrical subgroups. The video shows the physical balancing platform in motion.",
      category: "Robotics & Embedded",
      techStack: ["LQR", "Kalman Filter", "Embedded Control", "Webots", "System Integration"],
      imageUrl: "/projects/rm-balance-poster.jpg",
      videoUrl: "/projects/rm-balance-demo.mp4"
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
  ] as Project[]
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
  }
];
