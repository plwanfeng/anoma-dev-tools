// 全局变量
let isMenuOpen = false;

// 项目数据
const projectsData = {
    infrastructure: [
        {
            name: "Adamik",
            description: "专注于身份管理或访问控制，确保用户隐私和安全。",
            tags: ["身份管理", "隐私保护"],
            icon: "fas fa-shield-alt",
            featured: true,
            website: "https://adamik.io",
            docs: "https://docs.adamik.io"
        },
        {
            name: "Aligned Layer",
            description: "Layer 2 解决方案，优化网络性能和可扩展性。",
            tags: ["Layer 2", "可扩展性"],
            icon: "fas fa-layer-group",
            website: "https://alignedlayer.com",
            docs: "https://docs.alignedlayer.com"
        },
        {
            name: "BitGo",
            description: "知名的数字资产保管公司，提供安全的数字资产托管服务。",
            tags: ["资产托管", "安全"],
            icon: "fas fa-vault",
            website: "https://www.bitgo.com",
            docs: "https://developers.bitgo.com"
        },
        {
            name: "Boundless",
            description: "专注于跨链互操作性，连接不同区块链网络。",
            tags: ["跨链", "互操作性"],
            icon: "fas fa-link",
            website: "https://boundless.network",
            docs: "https://docs.boundless.network"
        },
        {
            name: "Celestia",
            description: "模块化数据可用性层，为区块链提供可扩展的数据存储解决方案。",
            tags: ["数据可用性", "模块化"],
            icon: "fas fa-database",
            website: "https://celestia.org",
            docs: "https://docs.celestia.org"
        },
        {
            name: "EigenLayer",
            description: "通过重新质押协议为其他区块链提供安全性。",
            tags: ["重新质押", "安全性"],
            icon: "fas fa-coins",
            website: "https://www.eigenlayer.xyz",
            docs: "https://docs.eigenlayer.xyz"
        },
        {
            name: "Epoch Protocol",
            description: "与时间相关功能或意图求解相关的协议。",
            tags: ["时间协议", "意图求解"],
            icon: "fas fa-clock",
            website: "https://epoch.network",
            docs: "https://docs.epoch.network"
        },
        {
            name: "Fairblock",
            description: "与 Anoma 整合，专注于机密意图，确保交易隐私。",
            tags: ["机密意图", "交易隐私"],
            icon: "fas fa-user-secret",
            website: "https://fairblock.network",
            docs: "https://docs.fairblock.network"
        },
        {
            name: "Finoa",
            description: "数字资产保管公司，提供安全的托管服务。",
            tags: ["资产保管", "托管服务"],
            icon: "fas fa-safe",
            website: "https://www.finoa.io",
            docs: "https://docs.finoa.io"
        },
        {
            name: "Fireblocks",
            description: "数字资产安全公司，专注于保护数字资产免受攻击。",
            tags: ["资产安全", "攻击防护"],
            icon: "fas fa-fire",
            website: "https://www.fireblocks.com",
            docs: "https://developers.fireblocks.com"
        }
    ],
    ai: [
        {
            name: "Cognitive",
            description: "专注于认知计算或 AI 模型的区块链应用。",
            tags: ["认知计算", "AI 模型"],
            icon: "fas fa-brain",
            website: "https://cognitive.ai",
            docs: "https://docs.cognitive.ai"
        },
        {
            name: "Elsa AI",
            description: "AI 助手或聊天机器人，用于区块链交互。",
            tags: ["AI 助手", "交互"],
            icon: "fas fa-robot",
            website: "https://elsa.ai",
            docs: "https://docs.elsa.ai"
        },
        {
            name: "Spicenet",
            description: "为去中心化计算或 AI 提供支持。",
            tags: ["去中心化计算", "AI 支持"],
            icon: "fas fa-network-wired",
            website: "https://spicenet.ai",
            docs: "https://docs.spicenet.ai"
        },
        {
            name: "Alt Layer",
            description: "AI 驱动的 Layer 2 解决方案或其他创新应用。",
            tags: ["AI 驱动", "Layer 2"],
            icon: "fas fa-microchip",
            website: "https://altlayer.io",
            docs: "https://docs.altlayer.io"
        }
    ],
    defi: [
        {
            name: "Acurast",
            description: "去中心化预言机网络，为智能合约提供可靠的数据源。",
            tags: ["预言机", "数据源"],
            icon: "fas fa-chart-line",
            featured: true,
            website: "https://acurast.com",
            docs: "https://docs.acurast.com"
        },
        {
            name: "Encifherio",
            description: "专注于加密或隐私保护的 DeFi 解决方案。",
            tags: ["加密", "隐私保护"],
            icon: "fas fa-lock",
            website: "https://encifherio.com",
            docs: "https://docs.encifherio.com"
        },
        {
            name: "Fluton",
            description: "DeFi 平台或协议，提供金融服务。",
            tags: ["DeFi 平台", "金融服务"],
            icon: "fas fa-exchange-alt",
            website: "https://fluton.finance",
            docs: "https://docs.fluton.finance"
        },
        {
            name: "Metasigning",
            description: "专注于多签名钱包或增强 DeFi 安全性。",
            tags: ["多签名", "安全性"],
            icon: "fas fa-signature",
            website: "https://metasigning.com",
            docs: "https://docs.metasigning.com"
        }
    ],
    communication: [
        {
            name: "Anoma Chat",
            description: "基于 Anoma 的去中心化通信协议，保护用户隐私。",
            tags: ["去中心化通信", "隐私保护"],
            icon: "fas fa-comments",
            website: "https://chat.anoma.net",
            docs: "https://docs.anoma.net/chat"
        },
        {
            name: "Whisper Network",
            description: "端到端加密的消息传递网络。",
            tags: ["端到端加密", "消息传递"],
            icon: "fas fa-user-secret",
            website: "https://whisper.network",
            docs: "https://docs.whisper.network"
        }
    ],
    depin: [
        {
            name: "Anoma Storage",
            description: "去中心化存储网络，提供安全可靠的数据存储。",
            tags: ["去中心化存储", "数据安全"],
            icon: "fas fa-hdd",
            website: "https://storage.anoma.net",
            docs: "https://docs.anoma.net/storage"
        },
        {
            name: "Compute Grid",
            description: "分布式计算网络，为复杂计算任务提供算力。",
            tags: ["分布式计算", "算力网络"],
            icon: "fas fa-server",
            website: "https://compute.anoma.net",
            docs: "https://docs.anoma.net/compute"
        }
    ],
    solvers: [
        {
            name: "Intent Solver",
            description: "专门处理用户意图的求解器，优化交易执行。",
            tags: ["意图求解", "交易优化"],
            icon: "fas fa-puzzle-piece",
            website: "https://solver.anoma.net",
            docs: "https://docs.anoma.net/solver"
        },
        {
            name: "MEV Solver",
            description: "最大化可提取价值的求解器，提高交易效率。",
            tags: ["MEV", "价值提取"],
            icon: "fas fa-chart-bar",
            website: "https://mev.anoma.net",
            docs: "https://docs.anoma.net/mev"
        }
    ],
    matching: [
        {
            name: "Order Matcher",
            description: "高效的订单匹配引擎，支持复杂交易策略。",
            tags: ["订单匹配", "交易策略"],
            icon: "fas fa-exchange-alt",
            website: "https://matcher.anoma.net",
            docs: "https://docs.anoma.net/matcher"
        },
        {
            name: "Liquidity Pool",
            description: "智能流动性池，自动优化资金配置。",
            tags: ["流动性", "资金优化"],
            icon: "fas fa-water",
            website: "https://pool.anoma.net",
            docs: "https://docs.anoma.net/pool"
        }
    ]
};

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeProjectCards();
    initializeScrollEffects();
    initializeTypingEffect();
});

// 导航功能
function initializeNavigation() {
    // 导航链接相关功能已移除

    // 滚动时导航栏效果
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// 动画初始化
function initializeAnimations() {
    // 观察器选项
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // 创建观察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.project-card, .category-card, .section-header');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 项目卡片交互
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // 移除了project-link的点击事件监听器，让链接直接跳转

        // 卡片悬停效果
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 分类卡片交互
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryTitle = card.querySelector('.category-title').textContent;
            showCategoryModal(categoryTitle);
        });
    });
}

// 滚动效果
function initializeScrollEffects() {
    // 视差滚动效果
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.ecosystem-diagram');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // 滚动进度指示器
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 70px;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #8b5cf6);
        z-index: 1000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// 打字效果
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    // 获取纯文本内容，保留HTML结构
    const gradientSpan = heroTitle.querySelector('.gradient-text');
    const gradientText = gradientSpan ? gradientSpan.textContent : 'Anoma 生态系统';
    const remainingText = '隐私保护与意图驱动的未来';
    
    // 清空内容
    heroTitle.innerHTML = '<span class="gradient-text"></span><br>';
    const gradientElement = heroTitle.querySelector('.gradient-text');
    
    let phase = 1; // 1: 渐变文本, 2: 普通文本
    let index = 0;
    const typeSpeed = 80;
    
    function typeWriter() {
        if (phase === 1) {
            if (index < gradientText.length) {
                gradientElement.textContent += gradientText.charAt(index);
                index++;
                setTimeout(typeWriter, typeSpeed);
            } else {
                // 开始第二阶段
                phase = 2;
                index = 0;
                heroTitle.innerHTML += remainingText.charAt(0) === ' ' ? remainingText : ' ' + remainingText.charAt(0);
                index = remainingText.charAt(0) === ' ' ? 1 : 1;
                setTimeout(typeWriter, typeSpeed);
            }
        } else if (phase === 2) {
            const currentText = heroTitle.lastChild.textContent || '';
            const targetText = remainingText.charAt(0) === ' ' ? remainingText : ' ' + remainingText;
            
            if (index < targetText.length) {
                heroTitle.lastChild.textContent = targetText.substring(0, index + 1);
                index++;
                setTimeout(typeWriter, typeSpeed);
            }
        }
    }
    
    // 延迟开始打字效果
    setTimeout(typeWriter, 1000);
}

// 显示项目模态框
function showProjectModal(projectName) {
    // 查找项目数据
    let projectData = null;
    for (const category in projectsData) {
        projectData = projectsData[category].find(p => p.name === projectName);
        if (projectData) break;
    }

    if (!projectData) {
        projectData = {
            name: projectName,
            description: "详细信息即将推出...",
            tags: ["Anoma 生态"],
            icon: "fas fa-cube",
            website: "#",
            docs: "#"
        };
    }

    const modal = createModal({
        title: projectData.name,
        content: `
            <div class="modal-project">
                <div class="modal-project-icon">
                    <i class="${projectData.icon}"></i>
                </div>
                <p class="modal-project-description">${projectData.description}</p>
                <div class="modal-project-tags">
                    ${projectData.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="modal-project-links">
                    <button class="btn btn-primary" onclick="window.open('${projectData.website}', '_blank')">
                        <i class="fas fa-external-link-alt"></i> 访问官网
                    </button>
                    <button class="btn btn-secondary" onclick="window.open('${projectData.docs}', '_blank')">
                        <i class="fas fa-book"></i> 查看文档
                    </button>
                </div>
            </div>
        `
    });

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

// 显示分类模态框
function showCategoryModal(categoryName) {
    const modal = createModal({
        title: categoryName,
        content: `
            <div class="modal-category">
                <p>探索 ${categoryName} 中的所有项目和创新解决方案。</p>
                <div class="category-stats">
                    <div class="stat-item">
                        <span class="stat-number">10+</span>
                        <span class="stat-label">活跃项目</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">50+</span>
                        <span class="stat-label">开发者</span>
                    </div>
                </div>
                <button class="btn btn-primary">查看所有项目</button>
            </div>
        `
    });

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

// 创建模态框
function createModal({ title, content }) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">${title}</h3>
                <button class="modal-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;

    // 添加模态框样式
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .modal.active {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.9);
            background: var(--background-card);
            border: 1px solid var(--border-color);
            border-radius: 1rem;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            transition: transform 0.3s ease;
        }
        
        .modal.active .modal-content {
            transform: translate(-50%, -50%) scale(1);
        }
        
        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
        }
        
        .modal-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-primary);
        }
        
        .modal-close {
            background: none;
            border: none;
            color: var(--text-secondary);
            font-size: 1.25rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
        }
        
        .modal-close:hover {
            background: var(--background-light);
            color: var(--text-primary);
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .modal-project-icon {
            width: 80px;
            height: 80px;
            background: var(--gradient-primary);
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 2rem;
            color: white;
        }
        
        .modal-project-description {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            line-height: 1.6;
            text-align: center;
        }
        
        .modal-project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
            margin-bottom: 2rem;
        }
        
        .modal-project-links {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .modal-project-links .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
            font-size: 0.9rem;
        }
        
        .modal-project-links .btn-primary {
            background: var(--gradient-primary);
            color: white;
        }
        
        .modal-project-links .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }
        
        .modal-project-links .btn-secondary {
            background: var(--background-light);
            color: var(--text-primary);
            border: 1px solid var(--border-color);
        }
        
        .modal-project-links .btn-secondary:hover {
            background: var(--border-color);
            transform: translateY(-2px);
        }
        
        .modal-category {
            text-align: center;
        }
        
        .category-stats {
            display: flex;
            gap: 2rem;
            justify-content: center;
            margin: 2rem 0;
        }
    `;
    
    if (!document.querySelector('#modal-styles')) {
        style.id = 'modal-styles';
        document.head.appendChild(style);
    }

    // 关闭模态框事件
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // ESC 键关闭
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);

    return modal;
}

// 按钮交互效果
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn')) {
        // 创建波纹效果
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        e.target.style.position = 'relative';
        e.target.style.overflow = 'hidden';
        e.target.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
});

// 添加波纹动画样式
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// 页面加载完成后的额外效果
window.addEventListener('load', () => {
    // 添加页面加载完成的类
    document.body.classList.add('loaded');
    
    // 统计数字动画
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isNumber = !isNaN(parseInt(finalValue));
        
        if (isNumber) {
            const target = parseInt(finalValue);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + (finalValue.includes('+') ? '+' : '') + (finalValue.includes('%') ? '%' : '');
            }, 30);
        }
    });
});

// 错误处理
window.addEventListener('error', (e) => {
    console.error('页面错误:', e.error);
});

// 性能监控
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('页面加载时间:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}