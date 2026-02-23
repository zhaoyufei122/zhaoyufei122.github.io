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

export const posts = [
  {
    id: "how-to-update",
    title: "系统维护指南：如何添加文章、项目与个人照片",
    excerpt: "这是一篇写给你的网站维护说明书。教你如何通过修改 data.ts 文件来更新网站上的个人经历、项目、论文，以及如何替换首页的个人照片。",
    date: new Date().toISOString().split('T')[0],
    readTime: "3 min read",
    tags: ["Tutorial", "Web", "Maintenance"],
    type: "System Guide",
    icon: "Wrench",
    content: `
# 网站维护与更新指南

你好！这篇指南将用中文详细说明如何更新你网站上的内容。

本网站采用了**数据与界面分离**的设计。这意味着你不需要去改动复杂的 React 代码，**只需要修改 \`src/data.ts\` 文件**，网站上的内容就会自动更新。

---

## 1. 如何替换首页的个人照片

在首页的右侧，我为你预留了一个照片展示区。目前它使用的是一张随机生成的占位图。要替换成你自己的照片，请按照以下步骤操作：

1. 准备一张你满意的个人照片（建议裁剪为**正方形比例**，这样显示效果最好）。
2. 将照片重命名为 \`profile.jpg\`（或者 \`profile.png\`）。
3. 把这张照片放到项目的 **\`public\`** 文件夹中。
4. 打开 \`src/pages/Home.tsx\` 文件，找到大概第 57 行的 \`<img src="..." />\` 标签。
5. 将 \`src\` 属性的值改为 \`"/profile.jpg"\` 即可。

---

## 2. 如何发布新的文章 (Logs & Thoughts)

要发布新的随笔、旅游记录或技术总结，请打开 \`src/data.ts\` 文件，滑到最底部的 \`posts\` 数组。

复制一个现有的文章对象，并按如下格式修改：

\`\`\`typescript
{
  id: "my-travel-log", // 网址的后缀，必须是唯一的英文字母和连字符
  title: "我的瑞士旅行记录", // 文章标题
  excerpt: "这里是文章的简短摘要，会显示在列表页...",
  date: "2026-02-23", // 发布日期
  readTime: "5 min read", // 阅读时间
  tags: ["Travel", "Life", "Photography"], // 标签
  type: "Article", // 类型，比如 Article, Repo, System Guide
  icon: "BookOpen", // 图标，可选：BookOpen, Github, Wrench
  content: \`
在这里写你的正文！
支持 **Markdown** 语法。

你可以写代码块、加粗、做列表，甚至插入图片：
![风景照](/my-photo.jpg) 
*(注意：图片也要放在 public 文件夹下)*
  \`
}
\`\`\`

---

## 3. 如何添加新的项目 (Projects)

打开 \`src/data.ts\`，找到 \`personalInfo.githubProjects\` 数组。在数组中添加一个新的对象：

\`\`\`typescript
{
  title: "新的机器人项目",
  description: "这个项目实现了什么功能，解决了什么问题...",
  category: "Robotics & Embedded", // 分类名称，相同的分类会自动归为一组！
  techStack: ["C++", "ROS2"], // 技术栈标签
  githubUrl: "https://github.com/...", // GitHub 仓库链接
  demoUrl: "https://..." // （可选）如果是网页小游戏或有演示视频，填在这里，会出现 PLAY 按钮
}
\`\`\`

---

## 4. 如何添加论文和专利 (Publications & Patents)

同样在 \`src/data.ts\` 中，找到 \`personalInfo.publications\` 或 \`personalInfo.patents\` 数组。

按照现有的格式，添加新的对象即可。例如添加一篇新论文：

\`\`\`typescript
{
  title: "你的新论文标题",
  authors: "Zhao, Y.; et al.",
  journal: "IEEE Robotics and Automation Letters",
  year: "2026",
  link: "https://doi.org/...", // （可选）论文链接
}
\`\`\`

网站会自动为你排版并渲染出漂亮的卡片！
    `
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
    content: `
# Building a Custom STM32 Flight Controller

*This is a placeholder article.*

In this post, I will discuss the architecture of my custom flight controller based on the STM32F4 series microcontroller.

## RTOS Scheduling
Using FreeRTOS allowed me to decouple the high-frequency control loop from lower-priority tasks like telemetry and logging.

## Sensor Fusion
I implemented a robust Kalman filter to fuse data from the MPU6050 accelerometer and gyroscope, providing stable attitude estimation even under high vibration.
    `
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
    content: `
# Fuzzy Logic Controller Library

*This is a placeholder article.*

This repository contains the Python implementation of the fuzzy logic algorithms I developed during my bachelor thesis.

## Features
- Mamdani and Sugeno inference systems
- Cell mapping theory for nonlinear dynamical system analysis
- Easy-to-use API for defining membership functions

Check out the source code on my GitHub!
    `
  }
];
