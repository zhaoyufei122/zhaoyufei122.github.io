import assert from 'node:assert/strict';
import { existsSync, statSync } from 'node:fs';
import test from 'node:test';
import { personalInfo, posts } from './data';

test('unfinished project placeholders are not published', () => {
  const removed = ['STM32 Pan-Tilt Control System', 'Hybrid Robot Simulation Platform', 'Fuzzy Logic Controller & Cell Mapping', 'DOA Estimation Deep Convolution Network'];
  assert.ok(personalInfo.githubProjects.every((project) => !removed.includes(project.title)));
  assert.ok(personalInfo.githubProjects.every((project) => !project.githubUrl?.includes('/yourusername/')));
});

test('writing keeps the travel article and removes sample articles and maintenance guide', () => {
  assert.deepEqual(posts.map((post) => post.id), ['北欧旅记']);
  assert.ok(existsSync(new URL('../public/posts/北欧旅记.md', import.meta.url)));
  for (const id of ['how-to-update', 'stm32-flight-controller', 'fuzzy-logic-repo']) {
    assert.ok(!existsSync(new URL(`../public/posts/${id}.md`, import.meta.url)), `${id} must not remain publicly accessible`);
  }
});

test('MSc coursework is separated from publications and team work is credited', () => {
  const projects = personalInfo.githubProjects.filter((p) => p.category === 'MSc Coursework');
  assert.equal(projects.length, 3);
  assert.ok(projects.every((p) => p.context?.includes('coursework')));
  const team = projects.find((p) => p.title.includes('Pololu'));
  assert.ok(team?.context?.includes('Team'));
  assert.match(team?.description ?? '', /Fan Zhang and Zeyu Li/);
  assert.ok(projects.every((p) => !p.githubUrl));
  assert.equal(personalInfo.publications.length, 2);
});

test('RoboMaster projects replace generic entries with real demonstrations', () => {
  const projects = personalInfo.githubProjects.filter((p) => p.title.startsWith('RoboMaster'));
  assert.equal(projects.length, 2);
  assert.ok(projects.every((p) => p.videoUrl && p.imageUrl && p.context));
  assert.ok(!personalInfo.githubProjects.some((p) => p.title === 'STM32 Pan-Tilt Control System'));
});

test('homepage selection is curated independently of video availability', () => {
  const selected = personalInfo.githubProjects.filter((p) => p.featured);
  assert.equal(selected.length, 4);
  assert.ok(selected.some((p) => !p.videoUrl));
  assert.ok(selected.some((p) => p.title.startsWith('SAW-Buddy')));
  assert.ok(personalInfo.githubProjects.some((p) => p.videoUrl && !p.featured));
});

test('portfolio images, videos and local figure links exist and stay deployable', () => {
  for (const project of personalInfo.githubProjects) {
    const assets = [project.imageUrl, project.videoUrl, ...(project.relatedLinks ?? []).map((link) => link.url)];
    for (const path of assets.filter((path) => path?.startsWith('/projects/'))) {
      const file = new URL(`../public${path}`, import.meta.url);
      assert.ok(existsSync(file), `Missing asset: ${path}`);
      assert.ok(statSync(file).size < 50 * 1024 * 1024, `Oversized asset: ${path}`);
    }
  }
});

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
