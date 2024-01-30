### 单边阴影

CSS 中有一个用于实现边框的阴影的属性 box-shadow

如果要实现单边阴影对 box-shadow属性值需要进行特别的设定，才可以到达效果。



三个数值必须要保持一致，才能单边

```css
.shadow-only-bottom{ box-shadow: 0px 7px 7px -7px #5E5E5E;  }
.shadow-only-right{ box-shadow: 7px 0px 7px -7px #5E5E5E;  }
.shadow-only-left{ box-shadow: -7px 0px 7px -7px #5E5E5E;  }
.shadow-only-top{ box-shadow: 0px -7px 7px -7px #5E5E5E;  }
```

box-shadow 配置说明

值 描述  
h-shadow 必需。水平阴影的位置。允许负值。  
v-shadow 必需。垂直阴影的位置。允许负值。  
blur 可选。模糊距离。  
spread 可选。阴影的尺寸。  
color 可选。阴影的颜色。请参阅 CSS 颜色值。  
inset 可选。将外部阴影 (outset) 改为内部阴影。


* Demo

<preview path="./demos/shadow.vue"></preview>