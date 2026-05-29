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
    
    // Find menu item that corresponds to this page
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
    
    // Update button states
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter items
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Window Controls (Visual only)
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
                height: windowEl.style.height,
                top: windowEl.style.top,
                left: windowEl.style.left,
                transform: windowEl.style.transform
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
    
    // Simple window dragging
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

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + 1, 2, 3 for page navigation
    if (e.altKey) {
        switch(e.key) {
            case '1': showPage('home'); break;
            case '2': showPage('works'); break;
            case '3': showPage('contact'); break;
        }
    }
});

// Falling Pixels Effect
function createFallingPixels() {
    const container = document.getElementById('fallingPixels');
    if (!container) return;
    
    const colors = [
        '#20b2aa', // teal
        '#48d1cc', // light teal
        '#008b8b', // dark teal
        '#98ff98', // mint
        '#40e0d0', // turquoise
        '#00ced1'  // dark turquoise
    ];
    
    function spawnPixel() {
        const pixel = document.createElement('div');
        pixel.className = 'pixel-block';
        
        // Random properties
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = 3 + Math.random() * 4; // 3-7 seconds
        const size = 4 + Math.floor(Math.random() * 8); // 4-12px
        
        pixel.style.backgroundColor = color;
        pixel.style.left = `${left}%`;
        pixel.style.width = `${size}px`;
        pixel.style.height = `${size}px`;
        pixel.style.animationDuration = `${duration}s`;
        
        container.appendChild(pixel);
        
        // Remove after animation
        setTimeout(() => {
            pixel.remove();
        }, duration * 1000);
    }
    
    // Spawn pixels periodically
    setInterval(spawnPixel, 400); // New pixel every 400ms
    
    // Initial burst
    for (let i = 0; i < 15; i++) {
        setTimeout(spawnPixel, i * 50);
    }
}

// Initialize falling pixels
createFallingPixels();

console.log('🌿 rinko\'s online living space loaded successfully');
console.log('keyboard shortcuts: Alt+1=Home, Alt+2=Works, Alt+3=Contact');
