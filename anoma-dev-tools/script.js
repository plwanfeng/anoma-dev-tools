// 高级开发者工具网站 JavaScript
// 现代化交互效果和代码动画系统

// 全局变量
let particleSystem = null;
let typingAnimations = [];
let codeBlocks = [];
let isTyping = false;

// 代码示例数据
const codeExamples = {
    javascript: {
        title: 'Advanced JavaScript',
        code: `// 高级 JavaScript 开发工具
class AnomaDevTools {
    constructor() {
        this.initialized = false;
        this.modules = new Map();
        this.eventBus = new EventEmitter();
    }

    async initialize() {
        console.log('🚀 初始化开发工具...');
        await this.loadModules();
        this.setupEventListeners();
        this.initialized = true;
        return this;
    }

    loadModules() {
        const modules = [
            'CodeGenerator',
            'IntentBuilder', 
            'APIClient',
            'TestRunner'
        ];
        
        return Promise.all(
            modules.map(async (module) => {
                const instance = await import(\`./modules/\${module}\`);
                this.modules.set(module, instance);
                console.log(\`✅ \${module} 加载完成\`);
            })
        );
    }

    generateCode(template, params) {
        const generator = this.modules.get('CodeGenerator');
        return generator.process(template, params);
    }

    buildIntent(userInput) {
        const builder = this.modules.get('IntentBuilder');
        return builder.parse(userInput).compile();
    }
}`
    },
    python: {
        title: 'Python Development',
        code: `# Anoma Python 开发工具包
import asyncio
import typing
from dataclasses import dataclass
from enum import Enum

class IntentType(Enum):
    TRANSFER = "transfer"
    SWAP = "swap"
    STAKE = "stake"
    GOVERNANCE = "governance"

@dataclass
class Intent:
    type: IntentType
    params: dict
    timestamp: float
    signature: str = None

class AnomaSDK:
    def __init__(self, endpoint: str):
        self.endpoint = endpoint
        self.session = None
        self.intents = []
    
    async def connect(self) -> bool:
        """连接到 Anoma 网络"""
        try:
            # 建立连接逻辑
            print(f"🔗 连接到 {self.endpoint}")
            return True
        except Exception as e:
            print(f"❌ 连接失败: {e}")
            return False
    
    async def submit_intent(self, intent: Intent) -> str:
        """提交意图到网络"""
        if not self.session:
            await self.connect()
        
        # 验证意图
        if not self._validate_intent(intent):
            raise ValueError("无效的意图格式")
        
        # 提交到网络
        tx_hash = await self._broadcast(intent)
        self.intents.append(intent)
        
        print(f"✅ 意图已提交: {tx_hash}")
        return tx_hash
    
    def _validate_intent(self, intent: Intent) -> bool:
        """验证意图格式"""
        required_fields = ['type', 'params', 'timestamp']
        return all(hasattr(intent, field) for field in required_fields)`
    },
    rust: {
        title: 'Rust Implementation',
        code: `// Anoma Rust 核心实现
use std::collections::HashMap;
use serde::{Deserialize, Serialize};
use tokio::sync::RwLock;
use anyhow::Result;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum IntentType {
    Transfer,
    Swap,
    Stake,
    Governance,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Intent {
    pub id: String,
    pub intent_type: IntentType,
    pub params: HashMap<String, serde_json::Value>,
    pub timestamp: u64,
    pub signature: Option<String>,
}

#[derive(Debug)]
pub struct AnomaCore {
    intents: RwLock<Vec<Intent>>,
    validators: RwLock<HashMap<String, Validator>>,
    state: RwLock<GlobalState>,
}

impl AnomaCore {
    pub fn new() -> Self {
        Self {
            intents: RwLock::new(Vec::new()),
            validators: RwLock::new(HashMap::new()),
            state: RwLock::new(GlobalState::default()),
        }
    }

    pub async fn submit_intent(&self, intent: Intent) -> Result<String> {
        // 验证意图
        self.validate_intent(&intent).await?;
        
        // 添加到意图池
        let mut intents = self.intents.write().await;
        intents.push(intent.clone());
        
        // 触发匹配引擎
        self.trigger_matching_engine().await?;
        
        println!("✅ 意图已提交: {}", intent.id);
        Ok(intent.id)
    }

    async fn validate_intent(&self, intent: &Intent) -> Result<()> {
        // 验证签名
        if intent.signature.is_none() {
            return Err(anyhow::anyhow!("缺少签名"));
        }
        
        // 验证参数
        match intent.intent_type {
            IntentType::Transfer => {
                self.validate_transfer_params(&intent.params)?;
            }
            IntentType::Swap => {
                self.validate_swap_params(&intent.params)?;
            }
            _ => {}
        }
        
        Ok(())
    }

    async fn trigger_matching_engine(&self) -> Result<()> {
        println!("🔄 启动意图匹配引擎...");
        // 匹配引擎逻辑
        Ok(())
    }
}`
    },
    solidity: {
        title: 'Solidity Smart Contract',
        code: `// Anoma Solidity 智能合约
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title AnomaIntent
 * @dev 意图驱动的智能合约系统
 */
contract AnomaIntent is ReentrancyGuard, Ownable {
    
    enum IntentType {
        TRANSFER,
        SWAP,
        STAKE,
        GOVERNANCE
    }
    
    struct Intent {
        bytes32 id;
        address user;
        IntentType intentType;
        bytes data;
        uint256 timestamp;
        bool executed;
        bytes signature;
    }
    
    mapping(bytes32 => Intent) public intents;
    mapping(address => bytes32[]) public userIntents;
    
    event IntentSubmitted(bytes32 indexed intentId, address indexed user);
    event IntentExecuted(bytes32 indexed intentId, bool success);
    
    /**
     * @dev 提交新的意图
     * @param _intentType 意图类型
     * @param _data 意图数据
     * @param _signature 用户签名
     */
    function submitIntent(
        IntentType _intentType,
        bytes calldata _data,
        bytes calldata _signature
    ) external nonReentrant returns (bytes32) {
        bytes32 intentId = keccak256(
            abi.encodePacked(
                msg.sender,
                _intentType,
                _data,
                block.timestamp
            )
        );
        
        require(intents[intentId].id == bytes32(0), "Intent already exists");
        
        intents[intentId] = Intent({
            id: intentId,
            user: msg.sender,
            intentType: _intentType,
            data: _data,
            timestamp: block.timestamp,
            executed: false,
            signature: _signature
        });
        
        userIntents[msg.sender].push(intentId);
        
        emit IntentSubmitted(intentId, msg.sender);
        return intentId;
    }
    
    /**
     * @dev 执行意图
     * @param _intentId 意图ID
     */
    function executeIntent(bytes32 _intentId) external nonReentrant {
        Intent storage intent = intents[_intentId];
        require(intent.id != bytes32(0), "Intent not found");
        require(!intent.executed, "Intent already executed");
        
        // 验证签名和执行逻辑
        bool success = _processIntent(intent);
        
        intent.executed = true;
        emit IntentExecuted(_intentId, success);
    }
    
    /**
     * @dev 内部处理意图逻辑
     */
    function _processIntent(Intent memory _intent) internal pure returns (bool) {
        // 根据意图类型执行相应逻辑
        if (_intent.intentType == IntentType.TRANSFER) {
            return _processTransfer(_intent.data);
        } else if (_intent.intentType == IntentType.SWAP) {
            return _processSwap(_intent.data);
        }
        return false;
    }
    
    function _processTransfer(bytes memory _data) internal pure returns (bool) {
        // 转账逻辑
        return true;
    }
    
    function _processSwap(bytes memory _data) internal pure returns (bool) {
        // 交换逻辑
        return true;
    }
}`
    }
};

// 粒子系统类
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.isRunning = false;
        
        this.setupCanvas();
        this.bindEvents();
    }
    
    setupCanvas() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    bindEvents() {
        this.canvas.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        this.canvas.addEventListener('click', (e) => {
            this.createExplosion(e.clientX, e.clientY);
        });
    }
    
    createParticle(x, y, type = 'default') {
        const particle = {
            x: x || Math.random() * this.canvas.width,
            y: y || Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            life: 1,
            decay: Math.random() * 0.02 + 0.005,
            color: this.getParticleColor(type),
            type: type
        };
        
        this.particles.push(particle);
    }
    
    getParticleColor(type) {
        const colors = {
            default: '#00d4ff',
            code: '#00ff88',
            error: '#ff4757',
            success: '#00ff88',
            warning: '#ffaa00'
        };
        return colors[type] || colors.default;
    }
    
    createExplosion(x, y) {
        for (let i = 0; i < 20; i++) {
            const particle = {
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                size: Math.random() * 4 + 2,
                life: 1,
                decay: Math.random() * 0.03 + 0.01,
                color: '#ff6b35',
                type: 'explosion'
            };
            this.particles.push(particle);
        }
    }
    
    update() {
        this.particles = this.particles.filter(particle => {
            // 更新位置
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // 应用重力和阻力
            particle.vy += 0.05;
            particle.vx *= 0.99;
            particle.vy *= 0.99;
            
            // 更新生命值
            particle.life -= particle.decay;
            
            // 鼠标交互
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx += (dx / distance) * force * 0.5;
                particle.vy += (dy / distance) * force * 0.5;
            }
            
            return particle.life > 0;
        });
        
        // 添加新粒子
        if (Math.random() < 0.1) {
            this.createParticle();
        }
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            this.ctx.save();
            this.ctx.globalAlpha = particle.life;
            this.ctx.fillStyle = particle.color;
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = particle.color;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.restore();
        });
    }
    
    animate() {
        if (!this.isRunning) return;
        
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
    
    start() {
        this.isRunning = true;
        this.animate();
    }
    
    stop() {
        this.isRunning = false;
    }
}

// 代码打字效果类
class CodeTypingEffect {
    constructor(element, code, options = {}) {
        this.element = element;
        this.code = code;
        this.options = {
            speed: 50,
            highlightSyntax: true,
            showCursor: true,
            cursorChar: '|',
            ...options
        };
        
        this.currentIndex = 0;
        this.isTyping = false;
        this.cursor = null;
    }
    
    async start() {
        if (this.isTyping) return;
        
        this.isTyping = true;
        this.element.innerHTML = '';
        
        if (this.options.showCursor) {
            this.createCursor();
        }
        
        await this.typeCode();
        this.isTyping = false;
    }
    
    createCursor() {
        this.cursor = document.createElement('span');
        this.cursor.className = 'typing-cursor';
        this.cursor.textContent = this.options.cursorChar;
        this.cursor.style.animation = 'blink 1s infinite';
        this.element.appendChild(this.cursor);
    }
    
    async typeCode() {
        const lines = this.code.split('\n');
        
        for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
            const line = lines[lineIndex];
            const lineElement = document.createElement('div');
            lineElement.className = 'code-line';
            
            if (this.cursor) {
                this.element.insertBefore(lineElement, this.cursor);
            } else {
                this.element.appendChild(lineElement);
            }
            
            await this.typeLine(lineElement, line);
            
            if (lineIndex < lines.length - 1) {
                await this.delay(100);
            }
        }
        
        if (this.cursor) {
            this.cursor.remove();
        }
        
        if (this.options.highlightSyntax) {
            this.applySyntaxHighlighting();
        }
    }
    
    async typeLine(lineElement, line) {
        for (let charIndex = 0; charIndex < line.length; charIndex++) {
            const char = line[charIndex];
            lineElement.textContent += char;
            
            // 创建粒子效果
            if (particleSystem && Math.random() < 0.3) {
                const rect = lineElement.getBoundingClientRect();
                particleSystem.createParticle(
                    rect.right,
                    rect.top + rect.height / 2,
                    'code'
                );
            }
            
            await this.delay(this.options.speed + Math.random() * 30);
        }
    }
    
    applySyntaxHighlighting() {
        // 简单的语法高亮
        let html = this.element.innerHTML;
        
        // 关键字
        html = html.replace(/\b(class|function|const|let|var|if|else|for|while|return|import|export|async|await|try|catch|throw)\b/g, 
            '<span class="token keyword">$1</span>');
        
        // 字符串 - 简化版本
        html = html.replace(/"[^"]*"/g, '<span class="token string">$&</span>');
        html = html.replace(/'[^']*'/g, '<span class="token string">$&</span>');
        html = html.replace(/`[^`]*`/g, '<span class="token string">$&</span>');
        
        // 数字
        html = html.replace(/\b\d+(\.\d+)?\b/g, 
            '<span class="token number">$&</span>');
        
        // 注释
        html = html.replace(/\/\/.*$/gm, '<span class="token comment">$&</span>');
        html = html.replace(/\/\*[\s\S]*?\*\//g, '<span class="token comment">$&</span>');
        
        this.element.innerHTML = html;
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    stop() {
        this.isTyping = false;
    }
}

// 工具卡片动画类
class ToolCardAnimator {
    constructor() {
        this.cards = [];
        this.observer = null;
        this.setupIntersectionObserver();
    }
    
    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCard(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
    }
    
    observeCard(card) {
        this.cards.push(card);
        this.observer.observe(card);
    }
    
    animateCard(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
        
        // 添加悬停效果
        this.addHoverEffects(card);
    }
    
    addHoverEffects(card) {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            
            // 创建粒子爆炸效果
            if (particleSystem) {
                const rect = card.getBoundingClientRect();
                for (let i = 0; i < 5; i++) {
                    particleSystem.createParticle(
                        rect.left + rect.width / 2,
                        rect.top + rect.height / 2,
                        'success'
                    );
                }
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    }
}

// 控制台模拟器类
class ConsoleSimulator {
    constructor(element) {
        this.element = element;
        this.messages = [];
        this.isRunning = false;
    }
    
    addMessage(message, type = 'info') {
        const timestamp = new Date().toLocaleTimeString();
        const messageObj = {
            text: message,
            type: type,
            timestamp: timestamp
        };
        
        this.messages.push(messageObj);
        this.renderMessage(messageObj);
    }
    
    renderMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = `console-line ${message.type}`;
        
        messageElement.innerHTML = `
            <span class="timestamp">${message.timestamp}</span>
            <span class="message">${message.text}</span>
        `;
        
        this.element.appendChild(messageElement);
        this.element.scrollTop = this.element.scrollHeight;
        
        // 创建粒子效果
        if (particleSystem) {
            const rect = messageElement.getBoundingClientRect();
            particleSystem.createParticle(
                rect.right - 20,
                rect.top + rect.height / 2,
                message.type
            );
        }
    }
    
    clear() {
        this.element.innerHTML = '';
        this.messages = [];
    }
    
    simulateCodeExecution() {
        this.clear();
        
        const steps = [
            { message: '🚀 启动 Anoma 开发环境...', type: 'info', delay: 500 },
            { message: '📦 加载依赖包...', type: 'info', delay: 800 },
            { message: '✅ TypeScript 编译完成', type: 'success', delay: 1200 },
            { message: '🔧 初始化意图构建器...', type: 'info', delay: 600 },
            { message: '⚡ 连接到测试网络...', type: 'info', delay: 900 },
            { message: '✅ 网络连接成功', type: 'success', delay: 400 },
            { message: '🎯 准备就绪，开始开发！', type: 'success', delay: 300 }
        ];
        
        let totalDelay = 0;
        steps.forEach(step => {
            totalDelay += step.delay;
            setTimeout(() => {
                this.addMessage(step.message, step.type);
            }, totalDelay);
        });
    }
}

// 主应用类
class AnomaDevApp {
    constructor() {
        this.particleSystem = null;
        this.typingEffect = null;
        this.cardAnimator = null;
        this.console = null;
        this.currentCodeExample = 'javascript';
        
        this.init();
    }
    
    async init() {
        await this.setupParticleSystem();
        this.setupCodeTyping();
        this.setupCardAnimations();
        this.setupConsole();
        this.setupEventListeners();
        this.startInitialAnimations();
        
        console.log('🎉 Anoma 开发工具已初始化');
    }
    
    async setupParticleSystem() {
        const canvas = document.getElementById('particleCanvas');
        if (canvas) {
            this.particleSystem = new ParticleSystem(canvas);
            particleSystem = this.particleSystem;
            this.particleSystem.start();
        }
    }
    
    setupCodeTyping() {
        const codeElement = document.querySelector('.code-text');
        if (codeElement) {
            this.startCodeTyping(this.currentCodeExample);
        }
    }
    
    async startCodeTyping(language) {
        const codeElement = document.querySelector('.code-text');
        if (!codeElement || !codeExamples[language]) return;
        
        if (this.typingEffect) {
            this.typingEffect.stop();
        }
        
        // 更新窗口标题
        const titleElement = document.querySelector('.window-title');
        if (titleElement) {
            titleElement.textContent = codeExamples[language].title;
        }
        
        this.typingEffect = new CodeTypingEffect(
            codeElement,
            codeExamples[language].code,
            {
                speed: 30,
                highlightSyntax: true,
                showCursor: true
            }
        );
        
        await this.typingEffect.start();
    }
    
    setupCardAnimations() {
        this.cardAnimator = new ToolCardAnimator();
        
        // 观察所有工具卡片
        document.querySelectorAll('.tool-card, .doc-card, .stat-card').forEach(card => {
            this.cardAnimator.observeCard(card);
        });
    }
    
    setupConsole() {
        const consoleElement = document.querySelector('.console');
        if (consoleElement) {
            this.console = new ConsoleSimulator(consoleElement);
            
            // 延迟启动控制台模拟
            setTimeout(() => {
                this.console.simulateCodeExecution();
            }, 2000);
        }
    }
    
    setupEventListeners() {
        // 代码语言切换
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const language = e.target.dataset.language;
                if (language && codeExamples[language]) {
                    this.switchCodeLanguage(language);
                }
            });
        });
        
        // 运行按钮
        const runButton = document.querySelector('.btn-run');
        if (runButton) {
            runButton.addEventListener('click', () => {
                this.runCode();
            });
        }
        
        // 清除按钮
        const clearButton = document.querySelector('.btn-clear');
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                if (this.console) {
                    this.console.clear();
                }
            });
        }
        
        // 导航链接平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // 窗口控制按钮
        document.querySelectorAll('.control').forEach(control => {
            control.addEventListener('click', (e) => {
                const action = e.target.classList.contains('close') ? 'close' :
                              e.target.classList.contains('minimize') ? 'minimize' : 'maximize';
                this.handleWindowControl(action);
            });
        });
    }
    
    switchCodeLanguage(language) {
        // 更新活动标签
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        const activeTab = document.querySelector(`[data-language="${language}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        this.currentCodeExample = language;
        this.startCodeTyping(language);
    }
    
    runCode() {
        if (this.console) {
            this.console.addMessage('▶️ 执行代码...', 'info');
            
            setTimeout(() => {
                this.console.addMessage('✅ 代码执行成功', 'success');
                this.console.addMessage(`📊 结果: ${Math.random().toFixed(4)}`, 'info');
            }, 1000);
        }
        
        // 创建成功粒子效果
        if (this.particleSystem) {
            for (let i = 0; i < 10; i++) {
                this.particleSystem.createParticle(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    'success'
                );
            }
        }
    }
    
    handleWindowControl(action) {
        const codeWindow = document.querySelector('.code-window');
        if (!codeWindow) return;
        
        switch (action) {
            case 'close':
                codeWindow.style.opacity = '0.5';
                setTimeout(() => {
                    codeWindow.style.opacity = '1';
                }, 500);
                break;
            case 'minimize':
                codeWindow.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    codeWindow.style.transform = 'scale(1)';
                }, 300);
                break;
            case 'maximize':
                codeWindow.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    codeWindow.style.transform = 'scale(1)';
                }, 300);
                break;
        }
    }
    
    startInitialAnimations() {
        // 启动英雄区域动画
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
        
        // 启动统计数字动画
        this.animateStats();
    }
    
    animateStats() {
        document.querySelectorAll('.stat-number').forEach(stat => {
            const finalValue = parseInt(stat.textContent.replace(/[^\d]/g, ''));
            const duration = 2000;
            const startTime = Date.now();
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const currentValue = Math.floor(finalValue * this.easeOutCubic(progress));
                stat.textContent = this.formatNumber(currentValue);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            
            animate();
        });
    }
    
    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }
    
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M+';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K+';
        }
        return num.toString();
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 创建粒子画布
    const canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);
    
    // 初始化应用
    const app = new AnomaDevApp();
    
    // 初始化按钮功能
    initializeToolButtons();
    
    // 初始化导航功能
    initializeNavigation();
    
    // 初始化模态框
    initializeModals();
    
    // 添加页面可见性变化监听
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (app.particleSystem) {
                app.particleSystem.stop();
            }
        } else {
            if (app.particleSystem) {
                app.particleSystem.start();
            }
        }
    });
    
    // 添加性能监控
    let frameCount = 0;
    let lastTime = performance.now();
    
    function monitorPerformance() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            
            // 如果帧率过低，减少粒子数量
            if (fps < 30 && app.particleSystem) {
                app.particleSystem.particles = app.particleSystem.particles.slice(0, 50);
            }
            
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(monitorPerformance);
    }
    
    monitorPerformance();
});

// 初始化按钮功能
function initializeButtonFunctions() {
    // 导航栏按钮
    const loginBtn = document.querySelector('.btn-secondary');
    const startDevBtn = document.querySelector('.btn-primary');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            showModal('login');
        });
    }
    
    if (startDevBtn) {
        startDevBtn.addEventListener('click', () => {
            scrollToSection('playground');
        });
    }
    
    // 英雄区域按钮
    const heroStartBtn = document.querySelector('.hero-actions .btn-primary');
    const heroDocsBtn = document.querySelector('.hero-actions .btn-outline');
    
    if (heroStartBtn) {
        heroStartBtn.addEventListener('click', () => {
            scrollToSection('playground');
        });
    }
    
    if (heroDocsBtn) {
        heroDocsBtn.addEventListener('click', () => {
            scrollToSection('docs');
        });
    }
    
    // 代码编辑器按钮
    const runBtn = document.querySelector('.editor-actions .btn-icon[title="运行代码"]');
    const saveBtn = document.querySelector('.editor-actions .btn-icon[title="保存"]');
    const shareBtn = document.querySelector('.editor-actions .btn-icon[title="分享"]');
    
    if (runBtn) {
        runBtn.addEventListener('click', runCode);
    }
    
    if (saveBtn) {
        saveBtn.addEventListener('click', saveCode);
    }
    
    if (shareBtn) {
        shareBtn.addEventListener('click', shareCode);
    }
    
    // 社区按钮
    const discordBtn = document.querySelector('.community-actions .btn-primary');
    const githubBtn = document.querySelector('.community-actions .btn-outline:nth-child(2)');
    const twitterBtn = document.querySelector('.community-actions .btn-outline:nth-child(3)');
    
    if (discordBtn) {
        discordBtn.addEventListener('click', () => {
            window.open('https://discord.gg/anoma', '_blank');
        });
    }
    
    if (githubBtn) {
        githubBtn.addEventListener('click', () => {
            window.open('https://github.com/anoma', '_blank');
        });
    }
    
    if (twitterBtn) {
        twitterBtn.addEventListener('click', () => {
            window.open('https://twitter.com/anoma', '_blank');
        });
    }
    
    // 文档卡片链接 - 移除阻止默认行为，让链接正常工作
    // const docLinks = document.querySelectorAll('.doc-link');
    // docLinks.forEach((link, index) => {
    //     link.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         const docTypes = ['quickstart', 'api', 'tutorials', 'best-practices'];
    //         showDocumentation(docTypes[index]);
    //     });
    // });
    
    // 工具卡片点击
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const tools = ['ide', 'testing', 'deployment', 'analytics'];
            showToolDetails(tools[index]);
        });
    });
}

// 初始化导航功能
function initializeNavigation() {
    // 平滑滚动到指定区域
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // 汉堡菜单已移除
}

// 滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 运行代码
function runCode() {
    const editor = document.getElementById('code-editor');
    const console = document.getElementById('console-output');
    
    if (!editor || !console) return;
    
    const code = editor.textContent;
    const timestamp = new Date().toLocaleTimeString();
    
    // 清空控制台
    console.innerHTML = '';
    
    // 添加运行信息
    addConsoleMessage('info', `[${timestamp}] 正在运行代码...`);
    
    // 模拟代码执行
    setTimeout(() => {
        addConsoleMessage('success', `[${timestamp}] ✓ 代码执行成功`);
        addConsoleMessage('info', `[${timestamp}] 输出: Hello, Anoma!`);
        
        // 模拟一些示例输出
        if (code.includes('console.log')) {
            addConsoleMessage('info', `[${timestamp}] > Hello, World!`);
        }
        if (code.includes('async') || code.includes('await')) {
            addConsoleMessage('success', `[${timestamp}] ✓ 异步操作完成`);
        }
    }, 1000);
}

// 保存代码
function saveCode() {
    const editor = document.getElementById('code-editor');
    if (!editor) return;
    
    const code = editor.textContent;
    const timestamp = new Date().toISOString();
    const filename = `anoma_code_${timestamp.split('T')[0]}.rs`;
    
    // 创建下载链接
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    
    URL.revokeObjectURL(url);
    
    // 显示保存成功消息
    showNotification('代码已保存到本地', 'success');
}

// 分享代码
function shareCode() {
    const editor = document.getElementById('code-editor');
    if (!editor) return;
    
    const code = editor.textContent;
    
    // 模拟生成分享链接
    const shareId = Math.random().toString(36).substring(2, 15);
    const shareUrl = `https://anoma.dev/share/${shareId}`;
    
    // 复制到剪贴板
    navigator.clipboard.writeText(shareUrl).then(() => {
        showNotification('分享链接已复制到剪贴板', 'success');
    }).catch(() => {
        showNotification('复制失败，请手动复制链接', 'error');
    });
}

// 添加控制台消息
function addConsoleMessage(type, message) {
    const console = document.getElementById('console-output');
    if (!console) return;
    
    const line = document.createElement('div');
    line.className = `console-line ${type}`;
    
    const timestamp = document.createElement('span');
    timestamp.className = 'timestamp';
    timestamp.textContent = `[${new Date().toLocaleTimeString()}]`;
    
    const messageSpan = document.createElement('span');
    messageSpan.className = 'message';
    messageSpan.textContent = message;
    
    line.appendChild(timestamp);
    line.appendChild(messageSpan);
    console.appendChild(line);
    
    // 滚动到底部
    console.scrollTop = console.scrollHeight;
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // 关闭按钮
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
    
    // 自动关闭
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
}

// 隐藏通知
function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// 显示工具详情
function showToolDetails(toolType) {
    const toolInfo = {
        ide: {
            title: '智能合约IDE',
            description: '功能强大的集成开发环境，支持多种编程语言和智能补全功能。',
            features: ['语法高亮', '智能补全', '实时调试', '代码格式化', '错误检测']
        },
        testing: {
            title: '测试框架',
            description: '完整的测试解决方案，确保您的智能合约安全可靠。',
            features: ['单元测试', '集成测试', '性能测试', '安全审计', '覆盖率报告']
        },
        deployment: {
            title: '部署工具',
            description: '一键部署到多个网络，支持自动化CI/CD流程。',
            features: ['多网络支持', '自动化部署', '版本管理', '回滚功能', '监控告警']
        },
        analytics: {
            title: '分析工具',
            description: '深度分析合约性能，优化Gas消耗和执行效率。',
            features: ['性能分析', 'Gas优化', '安全审计', '代码质量', '使用统计']
        }
    };
    
    const info = toolInfo[toolType];
    if (info) {
        showModal('tool-details', info);
    }
}

// 显示文档
function showDocumentation(docType) {
    const docInfo = {
        quickstart: {
            title: '快速开始',
            content: '5分钟快速上手Anoma开发，从安装到第一个智能合约。'
        },
        api: {
            title: 'API参考',
            content: '完整的API文档，包含所有接口和示例代码。'
        },
        tutorials: {
            title: '教程指南',
            content: '从基础到高级的完整教程，逐步学习Anoma开发。'
        },
        'best-practices': {
            title: '最佳实践',
            content: '行业最佳实践和设计模式，提高代码质量。'
        }
    };
    
    const info = docInfo[docType];
    if (info) {
        showModal('documentation', info);
    }
}

// 初始化模态框
function initializeModals() {
    // 创建模态框容器
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    modalContainer.className = 'modal-container';
    document.body.appendChild(modalContainer);
}

// 显示模态框
function showModal(type, data = {}) {
    const container = document.getElementById('modal-container');
    if (!container) return;
    
    let modalContent = '';
    
    switch (type) {
        case 'login':
            modalContent = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>登录到 Anoma Dev</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form class="login-form">
                            <div class="form-group">
                                <label>邮箱</label>
                                <input type="email" placeholder="输入您的邮箱">
                            </div>
                            <div class="form-group">
                                <label>密码</label>
                                <input type="password" placeholder="输入您的密码">
                            </div>
                            <button type="submit" class="btn-primary btn-full">登录</button>
                        </form>
                        <p class="modal-footer-text">还没有账户？ <a href="#">立即注册</a></p>
                    </div>
                </div>
            `;
            break;
            
        case 'tool-details':
            modalContent = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>${data.title}</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>${data.description}</p>
                        <h4>主要功能：</h4>
                        <ul>
                            ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                        <div class="modal-actions">
                            <button class="btn-primary">开始使用</button>
                            <button class="btn-outline">了解更多</button>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'documentation':
            modalContent = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>${data.title}</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>${data.content}</p>
                        <div class="modal-actions">
                            <button class="btn-primary">开始阅读</button>
                            <button class="btn-outline">下载PDF</button>
                        </div>
                    </div>
                </div>
            `;
            break;
    }
    
    container.innerHTML = `
        <div class="modal-overlay">
            ${modalContent}
        </div>
    `;
    
    container.classList.add('active');
    
    // 绑定关闭事件
    const closeBtn = container.querySelector('.modal-close');
    const overlay = container.querySelector('.modal-overlay');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', hideModal);
    }
    
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                hideModal();
            }
        });
    }
    
    // ESC键关闭
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            hideModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// 隐藏模态框
function hideModal() {
    const container = document.getElementById('modal-container');
    if (container) {
        container.classList.remove('active');
        setTimeout(() => {
            container.innerHTML = '';
        }, 300);
    }
}

// 初始化工具按钮事件
function initializeToolButtons() {
    const toolButtons = document.querySelectorAll('.tool-action-btn');
    toolButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const toolCard = button.closest('.tool-card');
            const toolType = toolCard.getAttribute('data-tool');
            handleToolAction(toolType);
        });
    });
}

// 处理工具操作
function handleToolAction(toolType) {
    switch(toolType) {
        case 'ide':
            openIDE();
            break;
        case 'testing':
            runTests();
            break;
        case 'deployment':
            startDeployment();
            break;
        case 'analytics':
            openAnalytics();
            break;
        default:
            console.log('未知工具类型:', toolType);
    }
}

// 启动IDE
function openIDE() {
    showModal('智能合约IDE', `
        <div style="background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; font-family: 'Courier New', monospace;">
            <div style="background: #2d2d30; padding: 10px; margin-bottom: 15px; border-radius: 4px;">
                <div style="color: #569cd6;">// Anoma智能合约示例</div>
                <div style="color: #dcdcaa;">contract</div> <div style="color: #4ec9b0;">SimpleStorage</div> {<br>
                &nbsp;&nbsp;<div style="color: #569cd6;">uint256</div> <div style="color: #9cdcfe;">storedData</div>;<br><br>
                &nbsp;&nbsp;<div style="color: #dcdcaa;">function</div> <div style="color: #dcdcaa;">set</div>(<div style="color: #569cd6;">uint256</div> <div style="color: #9cdcfe;">x</div>) <div style="color: #569cd6;">public</div> {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<div style="color: #9cdcfe;">storedData</div> = <div style="color: #9cdcfe;">x</div>;<br>
                &nbsp;&nbsp;}<br><br>
                &nbsp;&nbsp;<div style="color: #dcdcaa;">function</div> <div style="color: #dcdcaa;">get</div>() <div style="color: #569cd6;">public</div> <div style="color: #569cd6;">view</div> <div style="color: #569cd6;">returns</div> (<div style="color: #569cd6;">uint256</div>) {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<div style="color: #c586c0;">return</div> <div style="color: #9cdcfe;">storedData</div>;<br>
                &nbsp;&nbsp;}<br>
                }
            </div>
            <div style="background: #0e639c; color: white; padding: 8px 16px; border-radius: 4px; display: inline-block; cursor: pointer;" onclick="alert('合约编译成功！')">
                🔨 编译合约
            </div>
        </div>
    `);
}

// 运行测试
function runTests() {
    showModal('测试框架', `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; font-family: monospace;">
            <div style="background: #28a745; color: white; padding: 10px; border-radius: 4px; margin-bottom: 15px;">
                ✓ 正在运行测试套件...
            </div>
            <div style="background: white; padding: 15px; border: 1px solid #dee2e6; border-radius: 4px;">
                <div style="color: #28a745;">✓ test_contract_deployment (0.12s)</div>
                <div style="color: #28a745;">✓ test_function_calls (0.08s)</div>
                <div style="color: #28a745;">✓ test_state_changes (0.15s)</div>
                <div style="color: #28a745;">✓ test_error_handling (0.09s)</div>
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #dee2e6;">
                    <strong>测试结果: 4/4 通过 (0.44s)</strong>
                </div>
            </div>
        </div>
    `);
}

// 开始部署
function startDeployment() {
    showModal('部署工具', `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <div style="background: #007bff; color: white; padding: 10px; border-radius: 4px; margin-bottom: 15px;">
                🚀 部署进度
            </div>
            <div style="background: white; padding: 15px; border: 1px solid #dee2e6; border-radius: 4px;">
                <div style="margin-bottom: 10px;">📦 正在打包合约...</div>
                <div style="background: #e9ecef; height: 20px; border-radius: 10px; overflow: hidden; margin-bottom: 10px;">
                    <div style="background: #007bff; height: 100%; width: 75%; transition: width 0.3s;"></div>
                </div>
                <div style="color: #6c757d; font-size: 0.9em;">75% 完成</div>
                <div style="margin-top: 15px;">
                    <div style="color: #28a745;">✓ 合约验证完成</div>
                    <div style="color: #28a745;">✓ 网络连接正常</div>
                    <div style="color: #ffc107;">⏳ 正在部署到测试网...</div>
                </div>
            </div>
        </div>
    `);
}

// 打开分析工具
function openAnalytics() {
    showModal('分析工具', `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <div style="background: #6f42c1; color: white; padding: 10px; border-radius: 4px; margin-bottom: 15px;">
                📊 代码分析报告
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div style="background: white; padding: 15px; border: 1px solid #dee2e6; border-radius: 4px;">
                    <h4 style="margin: 0 0 10px 0; color: #495057;">代码质量</h4>
                    <div style="color: #28a745; font-size: 1.2em; font-weight: bold;">A+</div>
                    <div style="color: #6c757d; font-size: 0.9em;">优秀</div>
                </div>
                <div style="background: white; padding: 15px; border: 1px solid #dee2e6; border-radius: 4px;">
                    <h4 style="margin: 0 0 10px 0; color: #495057;">安全评分</h4>
                    <div style="color: #28a745; font-size: 1.2em; font-weight: bold;">95/100</div>
                    <div style="color: #6c757d; font-size: 0.9em;">高安全性</div>
                </div>
                <div style="background: white; padding: 15px; border: 1px solid #dee2e6; border-radius: 4px;">
                    <h4 style="margin: 0 0 10px 0; color: #495057;">Gas优化</h4>
                    <div style="color: #ffc107; font-size: 1.2em; font-weight: bold;">中等</div>
                    <div style="color: #6c757d; font-size: 0.9em;">可优化</div>
                </div>
                <div style="background: white; padding: 15px; border: 1px solid #dee2e6; border-radius: 4px;">
                    <h4 style="margin: 0 0 10px 0; color: #495057;">测试覆盖率</h4>
                    <div style="color: #28a745; font-size: 1.2em; font-weight: bold;">87%</div>
                    <div style="color: #6c757d; font-size: 0.9em;">良好</div>
                </div>
            </div>
        </div>
    `);
}

// 显示模态框
function showModal(title, content) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 12px;
        max-width: 600px;
        width: 90%;
        max-height: 80%;
        overflow-y: auto;
        animation: slideIn 0.3s ease;
    `;
    
    modalContent.innerHTML = `
        <div style="padding: 20px; border-bottom: 1px solid #dee2e6; display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0; color: #495057;">${title}</h3>
            <button onclick="this.closest('.modal').remove()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #6c757d;">×</button>
        </div>
        <div style="padding: 20px;">
            ${content}
        </div>
    `;
    
    modal.className = 'modal';
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // 点击背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // 添加动画样式
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideIn {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

// 导出给全局使用
window.AnomaDevApp = AnomaDevApp;
window.ParticleSystem = ParticleSystem;
window.CodeTypingEffect = CodeTypingEffect;
