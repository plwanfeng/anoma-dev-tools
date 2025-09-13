# Anoma 开发者文档中文版

这是 Anoma 开发者文档的完整中文翻译版本，基于 https://docs.anoma.net/ 的内容制作。

## 项目结构

```
├── index.html          # 首页 - Anoma 概述和介绍
├── build.html          # 构建指南 - 环境设置和工具安装
├── tutorial.html       # 教程 - 第一个 Anoma 应用程序
├── learn.html          # 学习 - 核心概念详解
├── styles.css          # 样式文件
└── README.md           # 项目说明
```

## 功能特性

- ✅ 完整的中文翻译
- ✅ 响应式设计，支持移动端
- ✅ 现代化的用户界面
- ✅ 平滑的页面动画效果
- ✅ 清晰的导航结构
- ✅ 优化的性能表现

## 内容覆盖

### 1. 概述页面 (index.html)
- Anoma 简介和核心特性
- 可构建的应用类型
- 快速开始指南

### 2. 构建指南 (build.html)
- 系统要求
- Juvix 编译器安装
- IDE 设置 (VS Code, Emacs)
- 开发环境配置

### 3. 教程页面 (tutorial.html)
- 第一个 Anoma 应用程序完整教程
- 资源定义
- 交易和投影函数
- 本地运行和测试

### 4. 学习页面 (learn.html)
- 意图 (Intents) 概念详解
- 状态模型架构
- 资源机器工作原理
- 交易处理流程
- 索引服务说明

## 本地运行

1. 确保已安装 Python 3
2. 在项目目录中运行：
   ```bash
   python -m http.server 8000
   ```
3. 在浏览器中访问：http://localhost:8000

## 技术特点

- **纯静态网站**：无需服务器端处理
- **现代 CSS**：使用 Grid 和 Flexbox 布局
- **性能优化**：包含动画优化和懒加载
- **SEO 友好**：语义化 HTML 结构
- **可访问性**：遵循 Web 可访问性标准

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 部署建议

### 静态托管平台
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

### 服务器部署
- Nginx
- Apache
- 任何支持静态文件的 Web 服务器

## 更新日志

- **v1.0.0** - 初始版本
  - 完整的中文翻译
  - 响应式设计
  - 现代化界面
  - 性能优化

## 贡献

如果您发现翻译错误或有改进建议，欢迎提出 Issue 或 Pull Request。

## 许可证

本项目基于原始 Anoma 文档进行翻译和重新设计，仅供学习和参考使用。

---

**注意**：本文档是基于 Anoma 官方文档的翻译版本，内容可能会随着官方文档的更新而变化。建议定期查看官方文档以获取最新信息。