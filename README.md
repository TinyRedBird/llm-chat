项目在线预览:https://tinyredbird.github.io/llm-chat/
## 组件编写进度(2025.2.4)

### 组件概述

1. **InlinePanel.vue**

   - 包含搜索框和消息展示区域。
   - 使用了 `UserMessage` 和 `RobotMessage` 组件。
   - 实现了关键词搜索和消息高亮显示功能。

2. **SearchBar.vue**

   - 提供一个简单的搜索栏，带有搜索图标和快捷键提示。

3. **UserMessage.vue**

   - 用于显示用户消息的组件。
   - 消息框样式已定义。

4. **RobotMessage.vue**

   - 用于显示机器人消息的组件。
   - 包含机器人头像和消息内容。

5. **Icon 组件**
   - 包含多个图标组件，如 `IconCommunity.vue`, `IconDocumentation.vue`, `IconEcosystem.vue`, `IconSupport.vue`, `IconTooling.vue`。
   - 图标使用 SVG 格式，提供了不同的功能性图标。

### 数据生成与类型定义

- **DataGenerate.ts**

  - 提供了生成对话、消息和摘要的函数。
  - 用于模拟数据以供组件使用。

- **DataType.ts**
  - 定义了 `Message`, `Conversation`, `SelectedSummary` 等数据类型。

### API 模拟

- **mock_api.ts**
  - 使用 `axios` 创建了一个 HTTP 实例。
  - 提供了 `generateSearchedSummaries` 方法，用于获取搜索摘要。

### 样式与资源

- **CSS 文件**

  - `base.css` 和 `main.css` 定义了全局样式和主题颜色。
  - 使用了 CSS 变量来管理颜色和布局。

- **SVG 资源**
  - 提供了多个 SVG 图标文件，如 `search.svg`, `上箭头.svg`, `切换.svg` 等。

### 其他

- **package.json**
  - 定义了 TypeScript 编译选项，确保代码的严格性和一致性。

# llm-chat

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
