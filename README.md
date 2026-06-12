# 🇨🇳 YCT 汉语词汇学习闯关系统 (YCT Chinese Vocabulary Learning Platform)

这是一个精心设计的 YCT 汉语词汇学习闯关系统。包含 **单人常识分类探险**（拖拽分类，内嵌暂停、减速、提示道具）与 **双人对战分屏模式**（找不同 / 卧底词消除）。
整合了 Express 后端与 Vite + React 前端，并采用 TypeScript 进行严苛的类型保证。

---

## 🚀 快速开始 (Quick Start)

### 1. 安装依赖
在项目根目录运行以下命令安装所需的所有依赖包：
```bash
npm install
```

### 2. 本地开发
启动本地开发服务器（同时运行 Express API 与 Vite 开发服务器）：
```bash
npm run dev
```
打开浏览器访问 [http://localhost:3000](http://localhost:3000) 即可开始使用。

### 3. 生产打包
打包生成极度优化的前端静态资源和打包后的后端单文件 `dist/server.cjs`：
```bash
npm run build
```

### 4. 生产环境启动
使用 Node.js 直接运行编译后的后端服务：
```bash
npm run start
```

---

## 📂 核心代码目录结构 (Project Directory Structure)

```text
├── .github/workflows/    # GitHub Actions 自动化工作流配置
│   └── ci.yml            # 自动化代码静态检查与构建验证指令
├── src/                  # 前端核心源码
│   ├── components/       # UI 独立组件 (Introduction, SingleAdventure, DualBattle, ScoreBoard 等)
│   ├── data/             # vocabulary.ts (核心 YCT1-6 词库), dualDistractors.ts (双人模式干扰项)
│   ├── utils/            # gameHelpers.ts (游戏调度核心、题目生成、多国语言翻译字典)
│   ├── App.tsx           # 主页面布局与整局游戏状态管理树
│   └── main.tsx          # 实例化挂载入口
├── server.ts             # Express 后端服务入口 (兼顾本地 Vite 中间件与生产静态代理)
├── tsconfig.json         # TypeScript 类型规约配置
├── vite.config.ts        # Vite 编译及插件管道配置
└── package.json          # 依赖管理与项目常用脚本一览
```

---

## 🛠️ GitHub Action 自动构建规则 (GitHub Actions CI/CD)

我们为您定制并初始化了位于 `.github/workflows/ci.yml` 的 **GitHub Actions** 自动化检测脚本：

*   **触发时机**：只要您往 `main`、`master`、`dev` 分支提交（Push）或提交合并请求（Pull Request），工作流即会自动启动。
*   **环境覆盖**：在 **Node.js 20.x** 和 **Node.js 22.x** 环境下进行矩阵式测试。
*   **自动化测试步骤**：
    1.  **拉取代码** (`actions/checkout@v4`)
    2.  **设置 Node.js 及依赖缓存** (`actions/setup-node@v4` + `cache: 'npm'`)
    3.  **标准依赖安装** (`npm ci || npm install` 智能回退)
    4.  **TypeScript 代码静态类型检查** (`npm run lint` 验证词库与逻辑类型安全)
    5.  **应用打包构建测试** (`npm run build` 确保前端 Vite 编译和后端 esbuild 归档畅行无阻)

---

## 📤 如何上传到您的 GitHub 服务 (How to upload to GitHub)

如果您想把代码推送至您自己的 GitHub 账号，可以参考以下标准流程：

1.  **打开您本地的终端**，进入当前工程根目录。
2.  **初始化本地 Git 仓库**（如果还没有）：
    ```bash
    git init
    ```
3.  **添加本地改动到暂存区**：
    ```bash
    git add .
    ```
4.  **提交更改到分支**：
    ```bash
    git commit -m "feat: setup complete with custom github action workflow"
    ```
5.  **设置默认主分支名称为 `main`**：
    ```bash
    git checkout -b main
    ```
6.  **在 [GitHub Website](https://github.com) 创建一个新的空白仓库**，并复制仓库的 SSH 或 HTTPS 地址（格式如 `https://github.com/您的用户名/您的仓库名.git`）。
7.  **绑定远程 GitHub 仓库**：
    ```bash
    git remote add origin https://github.com/您的用户名/您的仓库名.git
    ```
8.  **强制或正常推送到您的 GitHub 服务端**：
    ```bash
    git push -u origin main
    ```

推送完成后，点击您 GitHub 仓库页面的 **Actions** 标签卡，就能立即看到那台配置了 Node 20 / Node 22 环境的虚拟构建服务器在完美运行项目的自动化构建检测了！🚀
