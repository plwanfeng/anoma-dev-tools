# 贡献者展示网站 Contributors Showcase

一个现代化、高端的贡献者展示网站，用于展示项目的核心贡献人员。

## 特性

- 🎨 **现代化设计** - 采用渐变背景和卡片式布局
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ✨ **动画效果** - 流畅的加载动画和交互效果
- 👥 **贡献者展示** - 展示头像、姓名、角色和社交链接
- 📊 **统计数据** - 动态展示项目统计信息
- 🎯 **交互体验** - 鼠标悬停效果和平滑滚动

## 项目结构

```
22322/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript 逻辑
└── README.md           # 项目说明
```

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 或者使用本地服务器运行项目

### 使用本地服务器（推荐）

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx serve .

# 使用 Live Server (VS Code 扩展)
# 右键点击 index.html -> Open with Live Server
```

## 自定义数据

### 修改贡献者信息

在 `script.js` 文件中找到 `contributorsData` 数组，修改其中的数据：

```javascript
const contributorsData = [
    {
        id: 1,
        name: "你的姓名",
        role: "你的角色",
        avatar: "头像URL",
        twitter: "推特用户名",
        commits: 提交数,
        pullRequests: PR数量,
        issues: 问题数量
    },
    // 添加更多贡献者...
];
```

### 头像来源

当前使用 Unsplash 提供的示例头像。在实际使用时，你可以：

1. 使用 GitHub 头像：`https://github.com/username.png`
2. 使用 Gravatar：`https://www.gravatar.com/avatar/hash`
3. 上传自定义头像到项目目录

### 样式自定义

在 `styles.css` 中可以修改：

- **主题色彩**：修改 CSS 变量中的渐变色
- **布局**：调整网格布局和间距
- **动画**：自定义动画效果和时长
- **字体**：更换字体系列

## 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript (ES6+)** - 交互逻辑
- **Font Awesome** - 图标库
- **Google Fonts** - 网络字体

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证

MIT License - 可自由使用和修改

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

---

**Made with ❤️ by our amazing community**