# rinko's online living space

> 🪟 一个 Windows 98 复古风格的个人作品集网站 —— 干净的白色基底，青色点缀，零红色元素。

**在线预览:** https://hungry-bulldog.pika.me

---

## 目录

- [功能特性](#功能特性)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [如何自定义](#如何自定义)
  - [修改个人信息](#修改个人信息)
  - [添加照片](#添加照片)
  - [添加视频](#添加视频)
  - [修改联系方式](#修改联系方式)
- [配色方案](#配色方案)
- [键盘快捷键](#键盘快捷键)
- [更新上线](#更新上线)
- [技术说明](#技术说明)

---

## 功能特性

✅ **三页面结构** — Home / Works / Contact  
✅ **完整 Win98 界面** — 可拖拽窗口、任务栏、开始按钮、时钟  
✅ **桌面图标** — 快速导航的复古桌面图标  
✅ **作品展示** — 支持照片和视频，带分类筛选  
✅ **复古鼠标指针** — 经典斜箭头 + 悬停变色  
✅ **飘落像素动画** — 随机掉落青绿色像素方块  
✅ **实时时钟** — 右下角显示当前时间  
✅ **响应式设计** — 适配手机和平板  

---

## 项目结构

```
ringo-website/
├── index.html          # 主页面（所有内容都在这里）
├── style.css           # 样式表（Win98 复古主题）
├── script.js           # JavaScript（交互逻辑）
├── README.md           # 本说明文件
└── assets/             # 资源文件夹（需要你自己创建）
    ├── photos/         # 放照片
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   └── ...
    └── videos/         # 放视频
        ├── video1.mp4
        └── ...
```

---

## 快速开始

### 1. 本地预览

直接用浏览器打开 `index.html` 文件即可。

或者使用本地服务器（推荐）：

```bash
cd ringo-website
python -m http.server 8000
# 然后访问 http://localhost:8000
```

### 2. 更新到线上

修改完成后，用以下命令更新：

```bash
python /app/skills/web-publish/scripts/publish.py deploy . --slug hungry-bulldog
```

---

## 如何自定义

### 修改个人信息

打开 `index.html`，找到以下部分修改：

```html
<!-- 约在 80 行左右 -->
<div class="welcome-header">
    <div class="avatar-placeholder">
        <span>📸</span>  <!-- 可以改成你的头像图片 -->
    </div>
    <h1>hi, i'm rinko 🌿</h1>  <!-- 名字 -->
    <p class="tagline">photographer | plant lover | creative soul</p>  <!-- 标签 -->
</div>
```

### 添加照片

**第一步：** 把照片文件放入 `assets/photos/` 文件夹

**第二步：** 在 `index.html` 找到作品展示部分（搜索 "works-grid"），把 placeholder 替换成真实图片：

```html
<!-- 替换前： -->
<div class="thumb-placeholder">
    <span>🖼️</span>
    <p>your photo here</p>
</div>

<!-- 替换后： -->
<img src="assets/photos/my-photo.jpg" alt="照片描述" loading="lazy">
```

**第三步：** 更新作品信息

```html
<div class="work-info">
    <h4>作品标题</h4>
    <p class="work-meta">地点, 年份 | 相机型号</p>
</div>
```

### 添加视频

类似照片，但用 `<video>` 标签：

```html
<video controls poster="缩略图.jpg" preload="metadata">
    <source src="assets/videos/my-video.mp4" type="video/mp4">
</video>
```

记得把 `data-category` 设为 `"video"` 以便筛选。

### 修改联系方式

**当前已设置：**
- TikTok: https://www.tiktok.com/@rinko709
- 小红书: https://www.xiaohongshu.com/user/profile/...
- Email: rinkoweng99@gmail.com

如需修改，找到 Contact 页面部分（约 200 行后），编辑链接地址即可。

---

## 配色方案

| 用途 | 颜色值 | 说明 |
|------|--------|------|
| 主背景 | `#ffffff` | 纯白 |
| Win98 灰 | `#c0c0c0` | 经典窗口灰 |
| 强调色 | `#20b2aa` | 青绿色 (LightSeaGreen) |
| 深强调 | `#008b8b` | 深青色 (DarkCyan) |
| 桌面背景 | `#008080` | 经典 Win98 桌面色 |
| 文字 | `#000000` | 纯黑 |

**设计原则：**
- 零红色元素
- 蓝/绿为主，温暖木色/奶油色点缀
- 复古像素感，但保持干净现代的可读性

---

## 键盘快捷键

| 快捷键 | 功能 |
|--------|------|
| `Alt + 1` | 跳转到 Home 页面 |
| `Alt + 2` | 跳转到 Works 页面 |
| `Alt + 3` | 跳转到 Contact 页面 |

---

## 更新上线

修改代码后，重新部署到线上：

```bash
# 进入项目目录
cd ringo-website

# 部署更新
python /app/skills/web-publish/scripts/publish.py deploy . --slug hungry-bulldog
```

或使用完整路径：

```bash
python /app/skills/web-publish/scripts/publish.py deploy /data/.pikabot/workspace/ringo-website --slug hungry-bulldog --title "rinko's online living space"
```

---

## 技术说明

- **纯前端：** HTML5 + CSS3 + Vanilla JavaScript，无框架依赖
- **零构建：** 无需 npm/webpack，直接编辑即可
- **响应式：** 适配桌面、平板、手机
- **静态托管：** 可部署到任何静态托管服务（GitHub Pages, Netlify, Vercel, Cloudflare Pages 等）
- **无障碍：** 使用语义化标签，支持键盘导航

---

## Git 提交建议

```bash
# 初始化仓库
git init

# 添加所有文件
git add .

# 第一次提交
git commit -m "🌿 initial commit: win98 retro portfolio site"

# 后续更新示例
git commit -m "📸 add new photo collection"
git commit -m "🎨 update color scheme"
git commit -m "✨ add falling pixels animation"
```

---

**made with 💚 by rinko + AI ringo**

*last updated: 2026*
