---
title: 大屏编辑器
path: /screenEditor
order: 1
group:
  path: /editor
  title: 页面编辑器
  order: 1
---

## 功能区域介绍

<img src="https://www.pgting.com/pg-doc/editor01.png" width="800" alt="">\

## 按钮介绍

<img src="https://www.pgting.com/pg-doc/editor02.png" width="800" alt="">\

## 组件属性区域介绍

### 1，组件配置区域

配置区域是组件开发时，预留的变量接口，配置操作面板是用来填写这些变量的入口\
组件配置和组件编辑器中的 panel.config.json 是对应的，panel 配置可以查看组件编辑器介绍

<img src="https://www.pgting.com/pg-doc/editor03.png" width="700" alt="">\

大屏编辑器和组件编辑器对应关系\

<img src="https://www.pgting.com/pg-doc/editor_m01.png" width="700" alt="">\

### 2, 数据源介绍

数据配置支持远程和本地两种方式

<img src="https://www.pgting.com/pg-doc/editor04.png" width="700" alt="">\

数据面板和组件编辑器中的数据源是对应的

<img src="https://www.pgting.com/pg-doc/editor_m02.png" width="700" alt="">\

### 3，交互配置

交互是组件开发时预留的事件接口，通过 panel.config.json 中的 eventConfig 配置

eventConfig 中的 value 对用事件的名称和值

eventConfig 中的 formItems 用来生成交互面板表单

<img src="https://www.pgting.com/pg-doc/editor06.png" width="700" alt="">\
