# rinko's online living space — 完整代码汇总

> 收束整理版 | 零依赖 | 可直接复制使用

---

## 📁 文件结构

```
ringo-website/
├── index.html      # 主页面 (约 11KB)
├── style.css       # 样式表 (约 14KB)
├── script.js       # 交互脚本 (约 6KB)
├── README.md       # 详细使用说明
└── assets/         # 资源文件夹 (需自行创建)
    ├── photos/     # 放照片
    └── videos/     # 放视频
```

---

## 🗂️ 完整代码

### 1. index.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>rinko's online living space</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Falling Pixels Container -->
    <div class="falling-pixels" id="fallingPixels"></div>
    
    <!-- Desktop Background -->
    <div class="desktop">
        
        <!-- Taskbar -->
        <div class="taskbar">
            <div class="start-btn">
                <span class="logo">🪟</span>
                <span>Start</span>
            </div>
            <div class="taskbar-items">
                <div class="task-item active">rinko's space</div>
            </div>
            <div class="clock" id="clock">00:00 PM</div>
        </div>

        <!-- Main Window -->
        <div class="window active-window" id="main-window">
            <div class="title-bar">
                <div class="title-bar-text">
                    <span class="icon">🏠</span>
                    rinko's online living space
                </div>
                <div class="title-bar-controls">
                    <button class="btn-minimize">_</button>
                    <button class="btn-maximize">□</button>
                    <button class="btn-close">×</button>
                </div>
            </div>
            
            <div class="window-body">
                <!-- Navigation Menu -->
                <div class="menu-bar">
                    <span class="menu-item active" onclick="showPage('home')">🏠 Home</span>
                    <span class="menu-item" onclick="showPage('works')">📁 Works</span>
                    <span class="menu-item" onclick="showPage('contact')">📧 Contact</span>
                </div>

                <!-- Content Area -->
                <div class="content">
                    
                    <!-- HOME PAGE -->
                    <div id="home" class="page active">
                        <div class="welcome-header">
                            <div class="avatar-placeholder">
                                <span>📸</span>
                            </div>
                            <h1>hi, i'm rinko 🌿</h1>
                            <p class="tagline">photographer | plant lover | creative soul</p>
                        </div>
                        
                        <div class="pixel-divider"></div>
                        
                        <div class="intro-text">
                            <p>welcome to my digital corner — a space where i share my lens on the world.</p>
                            <p>based in shanghai, i chase light through streets and leaves, capturing moments that whisper rather than shout.</p>
                            <p>this site is built with love and a touch of y2k nostalgia ✨</p>
                        </div>
                        
                        <div class="quick-links">
                            <div class="link-card" onclick="showPage('works')">
                                <span class="link-icon">📷</span>
                                <span>view my works</span>
                            </div>
                            <div class="link-card" onclick="showPage('contact')">
                                <span class="link-icon">💌</span>
                                <span>say hello</span>
                            </div>
                        </div>
                        
                        <div class="status-bar">
                            <span class="status-light green"></span>
                            <span>currently: chasing golden hour</span>
                        </div>
                    </div>

                    <!-- WORKS PAGE -->
                    <div id="works" class="page">
                        <h2>📁 my works</h2>
                        <p class="section-desc">a collection of moments frozen in time</p>
                        
                        <div class="filter-bar">
                            <button class="filter-btn active" onclick="filterWorks('all')">all</button>
                            <button class="filter-btn" onclick="filterWorks('photo')">photography</button>
                            <button class="filter-btn" onclick="filterWorks('video')">video</button>
                        </div>
                        
                        <div class="works-grid">
                            <!-- 示例作品 1 - 照片 -->
                            <div class="work-item" data-category="photo">
                                <div class="work-thumb">
                                    <div class="thumb-placeholder">
                                        <span>🖼️</span>
                                        <p>your photo here</p>
                                    </div>
                                    <div class="work-overlay">
                                        <span class="view-icon">👁️</span>
                                    </div>
                                </div>
                                <div class="work-info">
                                    <h4>golden hour streets</h4>
                                    <p class="work-meta">shanghai, 2024 | fujifilm x-t5</p>
                                </div>
                            </div>
                            
                            <!-- 示例作品 2 - 照片 -->
                            <div class="work-item" data-category="photo">
                                <div class="work-thumb">
                                    <div class="thumb-placeholder">
                                        <span>🌿</span>
                                        <p>your photo here</p>
                                    </div>
                                    <div class="work-overlay">
                                        <span class="view-icon">👁️</span>
                                    </div>
                                </div>
                                <div class="work-info">
                                    <h4>botanical whispers</h4>
                                    <p class="work-meta">home studio | vintage casio</p>
                                </div>
                            </div>
                            
                            <!-- 示例作品 3 - 视频 -->
                            <div class="work-item" data-category="video">
                                <div class="work-thumb">
                                    <div class="thumb-placeholder video">
                                        <span>▶️</span>
                                        <p>your video here</p>
                                    </div>
                                    <div class="work-overlay">
                                        <span class="view-icon">▶️</span>
                                    </div>
                                </div>
                                <div class="work-info">
                                    <h4>moments in motion</h4>
                                    <p class="work-meta">2024 | shanghai streets</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="add-more-hint">
                            <p>💡 tip: edit <code>works</code> section in index.html to add your real photos and videos</p>
                        </div>
                    </div>

                    <!-- CONTACT PAGE -->
                    <div id="contact" class="page">
                        <h2>📧 get in touch</h2>
                        <p class="section-desc">let's create something together</p>
                        
                        <div class="contact-grid">
                            <a href="https://www.tiktok.com/@rinko709" target="_blank" class="contact-card-link">
                                <div class="contact-card">
                                    <div class="contact-icon">🎵</div>
                                    <h4>tiktok</h4>
                                    <p>@rinko709</p>
                                    <span class="contact-note">short videos & moments</span>
                                </div>
                            </a>
                            
                            <a href="https://www.xiaohongshu.com/user/profile/684f096a000000001b01a34f?xsec_token=ABoSlPkDsqR8d92CCCt06VXPhYUyjq5VTChxLpnSXfT2g%3D&xsec_source=pc_search" target="_blank" class="contact-card-link">
                                <div class="contact-card">
                                    <div class="contact-icon">📕</div>
                                    <h4>小红书</h4>
                                    <p>rinko's notes</p>
                                    <span class="contact-note">lifestyle & photo shares</span>
                                </div>
                            </a>
                            
                            <a href="mailto:rinkoweng99@gmail.com" class="contact-card-link">
                                <div class="contact-card">
                                    <div class="contact-icon">📧</div>
                                    <h4>email</h4>
                                    <p>rinkoweng99@gmail.com</p>
                                    <span class="contact-note">for project inquiries</span>
                                </div>
                            </a>
                        </div>
                        
                        <div class="pixel-divider"></div>
                        
                        <div class="message-form">
                            <h3>📨 send a message</h3>
                            <div class="form-fields">
                                <div class="form-row">
                                    <label>name:</label>
                                    <input type="text" class="retro-input" placeholder="your name">
                                </div>
                                <div class="form-row">
                                    <label>email:</label>
                                    <input type="text" class="retro-input" placeholder="your@email.com">
                                </div>
                                <div class="form-row">
                                    <label>message:</label>
                                    <textarea class="retro-textarea" rows="4" placeholder="type your message here..."></textarea>
                                </div>
                            </div>
                            <button class="retro-button" onclick="alert('message sent! (demo only)')">
                                <span>📤</span> send message
                            </button>
                        </div>
                        
                        <div class="status-bar footer-status">
                            <span class="status-light green"></span>
                            <span>status: online and ready to create</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Desktop Icons -->
        <div class="desktop-icons">
            <div class="desktop-icon" onclick="showPage('home')">
                <div class="icon-img">🏠</div>
                <div class="icon-label">home.exe</div>
            </div>
            <div class="desktop-icon" onclick="showPage('works')">
                <div class="icon-img">📁</div>
                <div class="icon-label">works.exe</div>
            </div>
            <div class="desktop-icon" onclick="showPage('contact')">
                <div class="icon-img">📧</div>
                <div class="icon-label">contact.exe</div>
            </div>
            <div class="desktop-icon">
                <div class="icon-img">🌿</div>
                <div class="icon-label">plants.exe</div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

---

### 2. style.css（完整版）

```css
/* Windows 98 Retro Theme - Clean White + Teal Accents */

/* Pixel Font Import */
@import url('https://fonts.googleapis.com/css2?family=VT323&family=Space+Mono:wght@400;700&display=swap');

:root {
    /* Windows 98 Colors - Clean White Theme */
    --win-bg: #c0c0c0;
    --win-white: #ffffff;
    --win-light: #dfdfdf;
    --win-gray: #808080;
    --win-dark: #404040;
    --win-black: #000000;
    
    /* Teal/Green Accents - Ringo's Vibe */
    --accent-teal: #20b2aa;
    --accent-light-teal: #48d1cc;
    --accent-dark-teal: #008b8b;
    --accent-mint: #98ff98;
    
    /* Desktop */
    --desktop-bg: #008080;
    --window-bg: var(--win-white);
}

/* Retro Cursor Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M5.5 2L2 21.5 6.5 17 10 23l3-2-3.5-6L16 16z'/%3E%3C/svg%3E"), auto;
}

a, button, .link-card, .desktop-icon, .work-item, .contact-card-link {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%2320b2aa' d='M5.5 2L2 21.5 6.5 17 10 23l3-2-3.5-6L16 16z'/%3E%3C/svg%3E"), pointer;
}

body {
    font-family: 'Space Mono', monospace;
    font-size: 14px;
    background: var(--desktop-bg);
    color: var(--win-black);
    overflow: hidden;
    height: 100vh;
}

/* Desktop */
.desktop {
    width: 100%;
    height: 100vh;
    position: relative;
    background: linear-gradient(135deg, #20b2aa 0%, #008b8b 50%, #006666 100%);
}

/* Taskbar */
.taskbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 36px;
    background: var(--win-bg);
    border-top: 2px solid var(--win-light);
    display: flex;
    align-items: center;
    padding: 2px;
    z-index: 1000;
}

.start-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    background: var(--win-bg);
    border-top: 2px solid var(--win-light);
    border-left: 2px solid var(--win-light);
    border-right: 2px solid var(--win-black);
    border-bottom: 2px solid var(--win-black);
    font-weight: bold;
    cursor: pointer;
}

.start-btn:active {
    border-top: 2px solid var(--win-black);
    border-left: 2px solid var(--win-black);
    border-right: 2px solid var(--win-light);
    border-bottom: 2px solid var(--win-light);
}

.start-btn .logo {
    font-size: 16px;
}

.taskbar-items {
    flex: 1;
    display: flex;
    gap: 4px;
    margin-left: 8px;
}

.task-item {
    padding: 4px 12px;
    background: var(--win-bg);
    border-top: 2px solid var(--win-white);
    border-left: 2px solid var(--win-white);
    border-right: 2px solid var(--win-gray);
    border-bottom: 2px solid var(--win-gray);
    font-size: 12px;
    cursor: pointer;
}

.task-item.active {
    background: var(--win-white);
    border-top: 2px solid var(--win-gray);
    border-left: 2px solid var(--win-gray);
    border-right: 2px solid var(--win-white);
    border-bottom: 2px solid var(--win-white);
}

.clock {
    padding: 4px 12px;
    background: var(--win-bg);
    border-top: 2px solid var(--win-gray);
    border-left: 2px solid var(--win-gray);
    border-right: 2px solid var(--win-white);
    border-bottom: 2px solid var(--win-white);
    font-size: 12px;
    font-family: 'VT323', monospace;
    font-size: 14px;
}

/* Window */
.window {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    max-width: 90vw;
    height: 600px;
    max-height: 80vh;
    background: var(--win-bg);
    border-top: 2px solid var(--win-light);
    border-left: 2px solid var(--win-light);
    border-right: 2px solid var(--win-black);
    border-bottom: 2px solid var(--win-black);
    box-shadow: 4px 4px 0 rgba(0,0,0,1);
}

.title-bar {
    background: linear-gradient(90deg, var(--accent-teal) 0%, var(--accent-dark-teal) 100%);
    padding: 4px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title-bar-text {
    color: var(--win-white);
    font-weight: bold;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.title-bar-controls {
    display: flex;
    gap: 4px;
}

.title-bar-controls button {
    width: 20px;
    height: 18px;
    background: var(--win-bg);
    border-top: 2px solid var(--win-light);
    border-left: 2px solid var(--win-light);
    border-right: 2px solid var(--win-black);
    border-bottom: 2px solid var(--win-black);
    font-size: 12px;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-bar-controls button:active {
    border-top: 2px solid var(--win-black);
    border-left: 2px solid var(--win-black);
    border-right: 2px solid var(--win-light);
    border-bottom: 2px solid var(--win-light);
}

.window-body {
    background: var(--win-white);
    margin: 4px;
    height: calc(100% - 32px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

/* Menu Bar */
.menu-bar {
    background: var(--win-bg);
    padding: 4px 8px;
    border-bottom: 2px solid var(--win-gray);
    display: flex;
    gap: 16px;
}

.menu-item {
    padding: 2px 8px;
    cursor: pointer;
    font-size: 12px;
}

.menu-item:hover, .menu-item.active {
    background: var(--accent-teal);
    color: var(--win-white);
}

/* Content Area */
.content {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
}

.page {
    display: none;
}

.page.active {
    display: block;
}

/* Home Page */
.welcome-header {
    text-align: center;
    padding: 30px 20px;
}

.avatar-placeholder {
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
    background: linear-gradient(135deg, var(--accent-teal), var(--accent-dark-teal));
    border: 4px solid var(--win-black);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
}

.welcome-header h1 {
    font-size: 24px;
    margin-bottom: 10px;
    color: var(--win-black);
}

.tagline {
    color: var(--accent-dark-teal);
    font-style: italic;
}

.pixel-divider {
    height: 4px;
    background: repeating-linear-gradient(
        90deg,
        var(--accent-teal) 0px,
        var(--accent-teal) 8px,
        transparent 8px,
        transparent 12px
    );
    margin: 20px 0;
}

.intro-text {
    line-height: 1.8;
    color: var(--win-dark);
}

.intro-text p {
    margin-bottom: 15px;
}

.quick-links {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: 30px 0;
    flex-wrap: wrap;
}

.link-card {
    background: var(--win-bg);
    border-top: 2px solid var(--win-light);
    border-left: 2px solid var(--win-light);
    border-right: 2px solid var(--win-black);
    border-bottom: 2px solid var(--win-black);
    padding: 15px 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: transform 0.1s;
}

.link-card:hover {
    background: var(--win-light);
}

.link-card:active {
    border-top: 2px solid var(--win-black);
    border-left: 2px solid var(--win-black);
    border-right: 2px solid var(--win-light);
    border-bottom: 2px solid var(--win-light);
    transform: translateY(1px);
}

.link-icon {
    font-size: 20px;
}

.status-bar {
    background: var(--win-bg);
    padding: 8px 12px;
    border-top: 2px solid var(--win-light);
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
}

.status-light {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid var(--win-black);
}

.status-light.green {
    background: #00ff00;
}

/* Works Page */
.section-desc {
    color: var(--win-gray);
    margin-bottom: 20px;
}

.filter-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 6px 16px;
    background: var(--win-bg);
    border-top: 2px solid var(--win-light);
    border-left: 2px solid var(--win-light);
    border-right: 2px solid var(--win-black);
    border-bottom: 2px solid var(--win-black);
    font-family: inherit;
    font-size: 12px;
    cursor: pointer;
}

.filter-btn:hover {
    background: var(--win-light);
}

.filter-btn.active {
    background: var(--accent-teal);
    color: white;
}

.works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
}

.work-item {
    background: var(--win-bg);
    border-top: 2px solid var(--win-light);
    border-left: 2px solid var(--win-light);
    border-right: 2px solid var(--win-black);
    border-bottom: 2px solid var(--win-black);
    cursor: pointer;
    transition: transform 0.1s;
}

.work-item:hover {
    transform: translateY(-2px);
}

.work-thumb {
    position: relative;
    aspect-ratio: 4/3;
    background: var(--win-white);
    overflow: hidden;
}

.thumb-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
    color: var(--win-gray);
}

.thumb-placeholder span {
    font-size: 32px;
    margin-bottom: 8px;
}

.thumb-placeholder.video {
    background: linear-gradient(135deg, #e8f4f8 0%, #d0e8f0 100%);
}

.work-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(32, 178, 170, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s;
}

.work-item:hover .work-overlay {
    opacity: 1;
}

.view-icon {
    font-size: 24px;
}

.work-info {
    padding: 12px;
}

.work-info h4 {
    font-size: 13px;
    margin-bottom: 4px;
    color: var(--win-black);
}

.work-meta {
    font-size: 11px;
    color: var(--win-gray);
}

.add-more-hint {
    margin-top: 30px;
    padding: 15px;
    background: #ffffcc;
    border: 2px dashed var(--win-gray);
    text-align: center;
    font-size: 12px;
    color: var(--win-dark);
}

.add-more-hint code {
    background: var(--win-white);
    padding: 2px 6px;
    font-family: monospace;
}

/* Contact Page */
.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.contact-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

.contact-card-link:hover {
    text-decoration: none;
}

.contact-card {
    background: var(--win-bg);
    border-top: 2px solid var(--win-light);
    border-left: 2px solid var(--win-light);
    border-right: 2px solid var(--win-black);
    border-bottom: 2px solid var(--win-black);
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.1s;
}

.contact-card:hover {
    background: var(--win-light);
    transform: translateY(-2px);
}

.contact-icon {
    font-size: 32px;
    margin-bottom: 10px;
}

.contact-card h4 {
    font-size: 13px;
    margin-bottom: 8px;
    color: var(--win-black);
}

.contact-card p {
    font-size: 12px;
    color: var(--accent-dark-teal);
    margin-bottom: 8px;
}

.contact-note {
    font-size: 10px;
    color: var(--win-gray);
}

/* Message Form */
.message-form {
    background: var(--win-bg);
    border-top: 2px solid var(--win-light);
    border-left: 2px solid var(--win-light);
    border-right: 2px solid var(--win-black);
    border-bottom: 2px solid var(--win-black);
    padding: 20px;
}

.message-form h3 {
    margin-bottom: 20px;
    font-size: 14px;
}

.form-fields {
    margin-bottom: 20px;
}

.form-row {
    display: flex;
    margin-bottom: 12px;
    align-items: center;
}

.form-row label {
    width: 80px;
    font-size: 12px;
}

.retro-input, .retro-textarea {
    flex: 1;
    padding: 6px 10px;
    font-family: 'Space Mono', monospace;
    font-size: 12px;
    background: var(--win-white);
    border-top: 2px solid var(--win-black);
    border-left: 2px solid var(--win-black);
    border-right: 2px solid var(--win-light);
    border-bottom: 2px solid var(--win-light);
    outline: none;
}

.retro-input:focus, .retro-textarea:focus {
    background: #f0ffff;
}

.retro-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--win-bg);
    border-top: 2px solid var(--win-light);
    border-left: 2px solid var(--win-light);
    border-right: 2px solid var(--win-black);
    border-bottom: 2px solid var(--win-black);
    font-family: 'Space Mono', monospace;
    font-size: 12px;
    cursor: pointer;
}

.retro-button:hover {
    background: var(--win-light);
}

.retro-button:active {
    border-top: 2px solid var(--win-black);
    border-left: 2px solid var(--win-black);
    border-right: 2px solid var(--win-light);
    border-bottom: 2px solid var(--win-light);
}

.footer-status {
    margin-top: 20px;
}

/* Desktop Icons */
.desktop-icons {
    position: fixed;
    top: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 100;
}

.desktop-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    width: 80px;
}

.desktop-icon:hover {
    background: rgba(255, 255, 255, 0.2);
}

.icon-img {
    font-size: 32px;
}

.icon-label {
    color: var(--win-white);
    font-size: 11px;
    text-align: center;
    text-shadow: 1px 1px 0 var(--win-black);
}

/* Falling Pixels Animation */
.falling-pixels {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 50;
    overflow: hidden;
}

.pixel-block {
    position: absolute;
    width: 8px;
    height: 8px;
    opacity: 1;
    animation: fall linear forwards;
}

@keyframes fall {
    0% {
        transform: translateY(-20px) rotate(1deg);
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(1deg);
        opacity: 0;
    }
}

/* Contact Card Links */
.contact-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

.contact-card-link:hover {
    text-decoration: none;
}

/* Scrollbar */
::-webkit-scrollbar {
    width: 16px;
}

::-webkit-scrollbar-track {
    background: var(--win-gray);
}

::-webkit-scrollbar-thumb {
    background: var(--win-bg);
    border-top: 2px solid var(--win-light);
    border-left: 2px solid var(--win-light);
    border-right: 2px solid var(--win-black);
    border-bottom: 2px solid var(--win-black);
}

/* Responsive */
@media (max-width: 768px) {
    .window {
        width: 95vw;
        height: 70vh;
    }
    
    .desktop-icons {
        flex-direction: row;
        flex-wrap: wrap;
        width: calc(100% - 40px);
        top: 10px;
    }
    
    .works-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-grid {
        grid-template-columns: 1fr;
    }
}
```

---

### 3. script.js（完整版）

```javascript
// rinko's online living space - Windows 98 Retro Site

// Clock Update
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    
    document.getElementById('clock').textContent = `${displayHours}:${minutes} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    
    const menuMap = {
        'home': 0,
        'works': 1,
        'contact': 2
    };
    
    if (menuMap[pageId] !== undefined && menuItems[menuMap[pageId]]) {
        menuItems[menuMap[pageId]].classList.add('active');
    }
    
    // Update window title
    const titleMap = {
        'home': "rinko's online living space",
        'works': "works.exe - rinko's portfolio",
        'contact': "contact.exe - get in touch"
    };
    
    const titleBarText = document.querySelector('.title-bar-text');
    if (titleBarText && titleMap[pageId]) {
        titleBarText.innerHTML = `<span class="icon">🏠</span> ${titleMap[pageId]}`;
    }
}

// Works Filter
function filterWorks(category) {
    const items = document.querySelectorAll('.work-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Window Controls & Dragging
document.addEventListener('DOMContentLoaded', function() {
    const minimizeBtn = document.querySelector('.btn-minimize');
    const maximizeBtn = document.querySelector('.btn-maximize');
    const closeBtn = document.querySelector('.btn-close');
    const windowEl = document.querySelector('.window');
    
    let isMaximized = false;
    let originalSize = {};
    
    minimizeBtn?.addEventListener('click', () => {
        windowEl.style.opacity = '1';
        windowEl.style.transform = 'translate(-50%, -50%) scale(0.1)';
        setTimeout(() => {
            windowEl.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 200);
    });
    
    maximizeBtn?.addEventListener('click', () => {
        if (!isMaximized) {
            originalSize = {
                width: windowEl.style.width,
                height: windowEl.style.height
            };
            windowEl.style.width = '98vw';
            windowEl.style.height = '92vh';
            windowEl.style.top = '2vh';
            windowEl.style.left = '1vw';
            windowEl.style.transform = 'none';
            isMaximized = true;
        } else {
            windowEl.style.width = '';
            windowEl.style.height = '';
            windowEl.style.top = '';
            windowEl.style.left = '';
            windowEl.style.transform = '';
            isMaximized = false;
        }
    });
    
    closeBtn?.addEventListener('click', () => {
        if (confirm('are you sure you want to close? 🌿')) {
            windowEl.style.display = 'none';
            setTimeout(() => {
                windowEl.style.display = 'block';
            }, 1000);
        }
    });
    
    // Window dragging
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };
    const titleBar = document.querySelector('.title-bar');
    
    titleBar?.addEventListener('mousedown', (e) => {
        if (e.target.closest('.title-bar-controls')) return;
        isDragging = true;
        const rect = windowEl.getBoundingClientRect();
        dragOffset.x = e.clientX - rect.left;
        dragOffset.y = e.clientY - rect.top;
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging || isMaximized) return;
        windowEl.style.left = (e.clientX - dragOffset.x) + 'px';
        windowEl.style.top = (e.clientY - dragOffset.y) + 'px';
        windowEl.style.transform = 'none';
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});

// Falling Pixels Effect
function createFallingPixels() {
    const container = document.getElementById('fallingPixels');
    if (!container) return;
    
    const colors = [
        '#20b2aa', '#48d1cc', '#008b8b', 
        '#98ff98', '#40e0d0', '#00ced1'
    ];
    
    function spawnPixel() {
        const pixel = document.createElement('div');
        pixel.className = 'pixel-block';
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = 3 + Math.random() * 4;
        const size = 4 + Math.floor(Math.random() * 8);
        
        pixel.style.backgroundColor = color;
        pixel.style.left = `${left}%`;
        pixel.style.width = `${size}px`;
        pixel.style.height = `${size}px`;
        pixel.style.animationDuration = `${duration}s`;
        
        container.appendChild(pixel);
        
        setTimeout(() => {
            pixel.remove();
        }, duration * 1000);
    }
    
    setInterval(spawnPixel, 400);
    
    for (let i = 0; i < 15; i++) {
        setTimeout(spawnPixel, i * 50);
    }
}

// Initialize falling pixels
createFallingPixels();

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.altKey) {
        switch(e.key) {
            case '1': showPage('home'); break;
            case '2': showPage('works'); break;
            case '3': showPage('contact'); break;
        }
    }
});

console.log('🌿 rinko\'s online living space loaded successfully');
console.log('keyboard shortcuts: Alt+1=Home, Alt+2=Works, Alt+3=Contact');
```

---

## 📋 快速修改指南

### 改名字
```html
<!-- index.html 约第 82 行 -->
<h1>hi, i'm rinko 🌿</h1>
```

### 加照片
```html
<!-- 把 placeholder 替换成 -->
<img src="assets/photos/my-photo.jpg" alt="描述">
```

### 改联系方式
```html
<!-- Contact 页面约 200+ 行 -->
<a href="https://www.tiktok.com/@你的账号" target="_blank">
```

---

## 🎨 配色说明

| 颜色 | 色值 | 用途 |
|------|------|------|
| Teal | `#20b2aa` | 主要强调色、标题栏 |
| Light Teal | `#48d1cc` | 悬停状态 |
| Dark Teal | `#008b8b` | 深色强调 |
| Mint | `#98ff98` | 点缀色 |
| Win Gray | `#c0c0c0` | 窗口边框 |
| Pure White | `#ffffff` | 内容区背景 |

---

## ⌨️ 快捷键

- `Alt + 1` — 首页
- `Alt + 2` — 作品页  
- `Alt + 3` — 联系页

---

## 🚀 部署上线

### 首次部署

```bash
cd ringo-website
python /app/skills/web-publish/scripts/publish.py deploy . --title "rinko's online living space"
```

### 更新部署

```bash
python /app/skills/web-publish/scripts/publish.py deploy . --slug hungry-bulldog
```

---

## 📦 技术栈

- **纯原生：** HTML5 + CSS3 + Vanilla JavaScript
- **零依赖：** 无框架、无构建工具
- **响应式：** 支持桌面、平板、手机
- **字体：** VT323（像素）、Space Mono（代码）

---

## 📝 后续扩展建议

- [ ] 添加照片 lightbox 点击放大功能
- [ ] 接入真实的发邮件后端
- [ ] 添加更多作品分类标签
- [ ] 自定义鼠标样式主题包
- [ ] 添加背景音乐（8-bit 风格）

---

**made with 💚 by rinko + AI ringo**

*last updated: 2026*
