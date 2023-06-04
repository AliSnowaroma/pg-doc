---
title: 使用手册
order: 1
group:
  path: /pgting-cli
  title: 物料本地开发
  order: 3
---

# 智慧 PG 集成开发工具使用手册

## pgting-cli 命令

```js
pg init           // 新建组件
pg pull 组件id    // 拉取线上组件，启动后需要先同步数据
pg dev            // 启动开发平台, 需要在组件根目录使用
```

## pgting-cli 生成代码结构

<img src="https://www.pgting.com/pg-doc/pgting-cli/02.png" width="800" alt="同步线上数据">

src 目录下 index.jsx，index.scss, panel.config.json 和线上组件编辑器一一对应，并且有相同的运行环境。

在开发组件时，只需要开发**index.jsx，index.scss**即可，panel.config.json 可根据组件配置面板设计自动生成。

material.config.json 是组件基础信息，该文件不用修改，在保存或同步数据时会自动更新。

## 集成开发工作台介绍

### 操作按钮介绍

<img src="https://www.pgting.com/pg-doc/pgting-cli/03.png" width="1000" alt="操作界面">

说明：使用 pg pull 组件 id 生成物料，需要先进性数据同步同步线上数据时，index.jsx，index.scss, panel.config.json, material.config.json 均会被修改。

### 面板设计

<img src="https://www.pgting.com/pg-doc/pgting-cli/04.png" width="1000" alt="面板设计">
说明：
面板设计form编辑器和智慧PG form编辑器使用相同\
保存表单时会自动更新panel.config.json文件

## 技术支持和交流

智慧 PG 欢迎提出技术问题，欢迎联系并加入技术交流群。

&emsp;联系我们 &emsp;&emsp;&emsp;&emsp;&emsp;公众号\
<img src="https://www.pgting.com/pg-doc/qrcode.png" width="100" height="100" alt="联系我们">&emsp;&emsp; <img src="https://www.pgting.com/pg-doc/gzcode.png" width="100" height="100" alt="联系我们">
