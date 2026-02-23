# 网站维护与更新指南

你好！这篇指南将用中文详细说明如何更新你网站上的内容。

本网站采用了**数据与界面分离**的设计。这意味着你不需要去改动复杂的 React 代码，**只需要修改 `src/data.ts` 文件**，网站上的内容就会自动更新。

---

## 1. 如何发布新的文章 (Logs & Thoughts)

这是你最关心的部分！现在文章系统已经升级为**独立 Markdown 文件模式**。

### 第一步：写文章
1. 在你电脑本地，用 Typora、VS Code 或任何你喜欢的编辑器写一篇 Markdown 文章。
2. 将这个文件保存为 `.md` 格式（例如 `my-robot-project.md`）。
3. 把这个文件放到网站源码的 **`public/posts/`** 文件夹中。

### 第二步：在 data.ts 中注册文章
打开 `src/data.ts` 文件，滑到最底部的 `posts` 数组，添加一个新对象，并把 `contentUrl` 指向你刚才的文件名：

```typescript
{
  id: "my-robot-project", // 网址的后缀，必须是唯一的英文字母和连字符
  title: "我的新机器人项目", 
  excerpt: "这里是文章的简短摘要，会显示在列表页...",
  date: "2026-03-01", 
  readTime: "5 min read", 
  tags: ["Robotics", "Control"], 
  type: "Article", 
  icon: "BookOpen", 
  contentUrl: "/posts/my-robot-project.md" // <--- 这里写你的 md 文件路径！
}
```
大功告成！网站会自动去读取这个 `.md` 文件并渲染。

---

## 2. 如何替换首页的个人照片

1. 准备一张你满意的个人照片（建议裁剪为**正方形比例**，这样显示效果最好）。
2. 将照片重命名为 `profile.jpg`（或者 `profile.png`）。
3. 把这张照片放到项目的 **`public/`** 文件夹中（注意不是 posts 文件夹）。
4. 打开 `src/pages/Home.tsx` 文件，找到大概第 57 行的 `<img src="..." />` 标签。
5. 将 `src` 属性的值改为 `"/profile.jpg"` 即可。

---

## 3. 如何添加新的项目 (Projects)

打开 `src/data.ts`，找到 `personalInfo.githubProjects` 数组。在数组中添加一个新的对象：

```typescript
{
  title: "新的机器人项目",
  description: "这个项目实现了什么功能，解决了什么问题...",
  category: "Robotics & Embedded", // 分类名称，相同的分类会自动归为一组！
  techStack: ["C++", "ROS2"], // 技术栈标签
  githubUrl: "https://github.com/...", // GitHub 仓库链接
  demoUrl: "https://..." // （可选）如果是网页小游戏或有演示视频，填在这里，会出现 PLAY 按钮
}
```

---

## 4. 如何添加论文和专利 (Publications & Patents)

同样在 `src/data.ts` 中，找到 `personalInfo.publications` 或 `personalInfo.patents` 数组。

按照现有的格式，添加新的对象即可。例如添加一篇新论文：

```typescript
{
  title: "你的新论文标题",
  authors: "Zhao, Y.; et al.",
  journal: "IEEE Robotics and Automation Letters",
  year: "2026",
  link: "https://doi.org/...", // （可选）论文链接
}
```

网站会自动为你排版并渲染出漂亮的卡片！
