---
title: 集成开发平台
order: 0
group:
  path: /pgting-cli
  title: 物料本地开发
  order: 3
---

# 智慧 PG 集成开发平台

## 基础介绍

为了方便物料的开发和维护，智慧 PG(pgting)提供了本地集成开发工具平台**pgting-cli**，开箱即用。\
**通过 pgting-cli 可以在本地编辑器开发新组件或者维护已发布的组件，并且和线上同步。**

<img src="https://www.pgting.com/pg-doc/pgting-cli/all.png" width="1000" alt="本地开发平台预览">

## 功能介绍

pgting-cli 是一款 node 命令工具，类似于我们使用的脚手架工具，其内部集成了以下功能：

- **智慧 PG 系统运行环境**
- **组件配置面板设计和预览**
- **组件初始属性值设置**
- **生成配置文件**
- **新建组件**
- **远程拉取线上组件**
- **将组件保存至线上**

## 基础使用

### 安装：

使用**pgting-cli**，需要先安装 node 环境，node 版本选择 16.1.x 以上

```js
yarn global add pgting-cli
```

### 新建组件

```js
mkdir demo
cd demo
pg init // 新建组件
yarn
yarn dev
```

### 拉取线上组件

```js
mkdir demo
cd demo
pg pull 组件id // 拉取组件
yarn
yarn dev
```

说明：**使用 pg pull 拉取线上组件，在项目运行后，要先进行数据同步，点击同步线上数据即可**

<img src="https://www.pgting.com/pg-doc/pgting-cli/01.png" width="450" alt="同步线上数据">

pgting-cli 具体使用参见：[使用手册](https://www.pgting.com/pg-doc/pgting-cli/document)
