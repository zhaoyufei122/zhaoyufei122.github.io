import assert from 'node:assert/strict';
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
