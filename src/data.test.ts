import assert from 'node:assert/strict';
import { existsSync, statSync } from 'node:fs';
import test from 'node:test';
import { personalInfo } from './data';

test('smart chinese chess board project is listed with media assets', () => {
  const project = personalInfo.githubProjects.find(
    (item) => item.title === 'Smart Chinese Chess Guidance Board',
  );

  assert.ok(project, 'project should be listed');
  assert.equal(project.category, 'Robotics & Embedded');
  assert.match(project.description, /six modular PCB panels/i);
  assert.match(project.description, /magnetic switch/i);
  assert.deepEqual(project.techStack, [
    'EasyEDA Pro',
    'PCB Layout',
    'Magnetic Switches',
    'RGB LEDs',
    'PWM',
    'Hardware Prototyping',
  ]);
  assert.equal(project.githubUrl, 'https://github.com/zhaoyufei122/smart-chinese-chess-board-pcb');
  assert.equal(project.videoUrl, '/projects/smart-chinese-chess-board-demo.mp4');
  assert.equal(project.imageUrl, '/projects/smart-chinese-chess-board-pcb-top.png');
});

test('SAW-Buddy dissertation project links its demo and public repositories', () => {
  const project = personalInfo.githubProjects.find(
    (item) => item.title === 'SAW-Buddy Assistive Robotics System',
  );

  assert.ok(project, 'project should be listed');
  assert.equal(project.category, 'Robotics & Embedded');
  assert.match(project.description, /walker retrieval/i);
  assert.match(project.description, /18 of 20/i);
  assert.deepEqual(project.techStack, [
    'ROS 2 Jazzy',
    'Unitree Go2',
    'Unitree D1T',
    'Nav2',
    'MoveIt',
    'YOLOv8',
    'AprilTag',
    'Hokuyo LiDAR',
  ]);
  assert.equal(
    project.githubUrl,
    'https://github.com/zhaoyufei122/Final_Work/tree/feature/full-demo-pipeline',
  );
  assert.deepEqual(project.relatedLinks, [
    {
      label: 'Hokuyo Navigation',
      url: 'https://github.com/zhaoyufei122/go2_hokuyo_urg4_navigation',
    },
  ]);
  assert.equal(project.videoUrl, '/projects/saw-buddy-dissertation-demo.mp4');
  assert.equal(project.imageUrl, '/projects/saw-buddy-overview.png');
});

test('SAW-Buddy media is deployable with the static site', () => {
  const video = new URL('../public/projects/saw-buddy-dissertation-demo.mp4', import.meta.url);
  const poster = new URL('../public/projects/saw-buddy-overview.png', import.meta.url);

  assert.ok(existsSync(video), 'compressed dissertation video should exist');
  assert.ok(existsSync(poster), 'video poster should exist');
  assert.ok(statSync(video).size < 50 * 1024 * 1024, 'video should remain below 50 MB');
});
