---
title: 事件配置
order: 3
group:
  path: /formake
  title: formake
  order: 4
---

## 事件配置

**formake 用 DSL 描述事件带来的副作用。**

<font size='3'>
formake对事件进行了抽象，一般业务中，组件事件可以归纳为以下几点：

> <font color="#4c9aed">

- 1，隐藏其他表单项
- 2，修改其他表单的值
- 3，禁用其他表单项
- 4，修改其他项的验证规则
- 5，修改其他表单项的选项 ...... </font>

这些操作最终都是对表单产生副作用，这些副作用又通过 react 去操作状态影响视图，相对的，这些状态再引起表单变化。\
<font color="#4c9aed"> formake 进行了进一步抽象，省略状态，直接用表单 DSL 改变描述事件带来的视图改变。 </font>

## formake 中的事件 DSL 配置

```ts
interface EventConfig {
  filter: Array<
    {
      triggerValue: Array<string>;  // 触发值
      hideFields: Array<string>;    // 隐藏的表单项的param
    }
  >,
  modify: Array<{
    {
      triggerValue: Array<string>;   // 触发值
      modifyField: string;           // 修改的字段
      newValue?: any;                // 被修改表单项的新值
      newFormItemConfig?: {          // 表单项配置更改后的属性，更改什么就填入什么属性
        disabled: boolean;
        // ...
      }
    }
  }>
}
```

这个配置对应于 formItemDsl 中的 eventConfig

filter 用于隐藏表单项 modify 用于描述修改表单项

demo

```js
{
  marktype: 'radio',
  label: '是否远程',
  param: 'isOrigin',
  eventConfig: {
    filter: [
      {
        triggerValue: ['0'],
        hideFields: ['url', 'method', 'freshTime'],
      }
    ],
    modify: [
      {
        triggerValue: ['1'];
        modifyField: 'method';
        newFormItemConfig: {
          options: [
            {
              label:'get',
              value: '0'
            },
            {
              label:'post',
              value: '1'
            }
          ]
          // ...
        }
      }
    ],
  }
}
```

上面的配置是指：\
当 isOrigin 字段值为<font color="#4c9aed">'0'</font>时，隐藏字段<font color="#4c9aed">['url', 'method', 'freshTime']</font>\
当 isOrigin 字段值为<font color="#4c9aed">'1'</font>时，修改 method 字段选项为 <font color="#4c9aed">['get', 'post']</font>

## 如何开启事件

1，GenerateForm 传入 useEvent 为 true 2，使用 form 扩展 useWatchForm
