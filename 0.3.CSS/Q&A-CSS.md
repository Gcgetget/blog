---
layout: post
title: CSS基础
date: 2019-02-13 16:46:25
# updated: 2013-7-13 20:46:29
# photos: 
tags:
- CSS
# categories:
# - 编程
categories:
- CSS
comments: true
---

[TOC]

# CSS基础

## 理论

### 渐进增强与优雅降级

**渐进增强（Progressive Enhancement）向上兼容**：一开始就针对**低版本浏览器进行构建页面**，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验，对于高版本的特殊处理。

**优雅降级（Graceful Degradation）向下兼容**：一开始就构建站点的**完整功能**，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览。针对低版本的所有浏览器的兼容处理

其实渐进增强和优雅降级并非什么新概念，只是旧的概念换了一个新的说法。在传统软件开发中，经常会提到**向上兼容和向下兼容**的概念。**渐进增强相当于向上兼容，而优雅降级相当于向下兼容。**

向下兼容指的是高版本支持低版本的或者说后期开发的版本支持和兼容早期开发的版本，向上兼容的很少。**大多数软件都是向下兼容的**，比如说Office2010能打开Office2007，Office2006，Office2005，Office2003等建的word文件，但是用Office2003就不能打开用Office2007，Office2010等建的word文件！

### 浮动与清除浮动，float

针对文字排版的属性值。

float CSS属性指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动(文档流)中移除，尽管仍然保持部分的流动性（与绝对定位相反）。

#### 浮动

1、浮动与清除浮动是html布局中很重要的一个部分，使用十分的广泛，要完全掌握，搞清楚内部的原理。清除浮动是每一个 web前台设计师必须掌握的技能。
2、浮动会使当前标签**产生向上浮的效果**，同时会影响到前后标签、父级标签的位置及width和height 属性。
3、而且同样的代码，在各种浏览器中显示效果也有可能不相同，这样让清除浮动更难了。
4、解决浮动引起的问题有多种方法，但有些方法在浏览器兼容性方面还有问题。 如下具体问题具体分析。
5、浮动是由于使用了float属性之后，元素脱离了正常的bfc模式下的正常位置，**会造成wrap塌陷**，所以要清除浮动，保持父元素块与其周围的布局稳定。

#### 清除浮动的具体方法

1、结尾处加空div标签 clear: both;最直观的方法。
2、父级div定义 **伪类**: after 和 父元素添加属性：zoom:1;
3、父级div定义 overflow: hidden; 或者设置overflow的值为auto;但是最好保证设置的父元素宽度大于子元素宽度的和，不然就会出现滚动条。如果不用兼容ie8以下就可以不设置width||zoom;auto属性值不建议使用。
4、父级div 也一起浮动 ，父元素上添加属性float: left||right;
5、父级div定义 display: table;
6、父级div定义 height;

### `display: none;`与`visibility: hidden;`的区别

联系：它们都能让元素不可见

区别：

1. display:none;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility: hidden;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见
2. display: none;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility: hidden;是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式
3. 修改常规流中元素的display通常会造成文档重排。修改visibility属性只会造成本元素的重绘。
4. 读屏器不会读取display: none;元素内容；会读取visibility: hidden;元素内容

## 属性

### height的取值

auto   : 默认。浏览器会计算出实际的高度。有的时候也可以用于覆盖不需要的定义属性。
length : 使用 px、cm 等单位定义高度。
%      : 基于包含它的块级对象的百分比高度。
inherit: 规定应该从父元素继承 height 属性的值。

### vertical-align

在使用vertical-align的时候，由于对齐的基线是**用行高**的基线作为标记，故需要设置line-height或设置display:table-cell;
只有一个元素属于inline或是inline-block（table-cell也可以理解为inline-block水平）水平，其身上的vertical-align属性才会起作用。

### transform，变换

1. 转换属性transform属性: 向元素应用 2D 或 3D 转换。
2. canvas画布内使用transform属性。
3. text-transform：转换文本的大小写属性。这不就是专门用来显示小像素点的属性吗。

### grayscale灰色滤镜

``` css
/* 黑白图像 */
/* 复制代码 */
/* 灰度调整，灰度计算，所有的颜色都变黑白通道 */
img.desaturate {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
}
div:hover {
  -webkit-filter: grayscale(0%);
  filter:  grayscale(0%);
}
```

### animation，动画

配合@keyframes，来定义动画的关键帧。

### transition，过渡属性，逐渐变化

### CSS3有哪些新特性？

RGBA和透明度

background-image background-origin(content-box/padding-box/border-box) background-size background-repeat

word-wrap（对长的不可分割单词换行）word-wrap：break-word

文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）

font-face属性：定义自己的字体

圆角（边框半径）：border-radius 属性用于创建圆角

边框图片：border-image: url(border.png) 30 30 round

盒阴影：box-shadow: 10px 10px 5px #888888

媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性

### position的属性值

六个属性值：static、relative、absolute、fixed、sticky和inherit；

伴生的属性值：

1. top、bottom、left、right；
2. z-index；

对应的单位：

1. 百分比：百分比的**参照物是父元素**，50%相当于父元素width的50%；
2. rem：这个对于复杂的设计图相当有用，**它是html的font-size的大小**；
3. em：它虽然也是一个相对的单位，**相对于父元素的font-size**，但是，并不常用，主要是计算太麻烦了。

### 控制元素不被选中，user-select:none

``` css
/*css控制不可被选中.css*/
body{
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
/*对比与页面内直接填写属性*/
onselectstart="return false;"
```

#### sticky

sticky：(这是css3新增的属性值)粘性定位，官方的介绍比较简单，或许你不能理解。其实，它就相当于relative和fixed混合。最初会被当作是relative，相对于原来的位置进行偏移；一旦超过一定阈值之后，会被当成fixed定位，相对于视口进行定位。[demo地址](https://jsbin.com/moxetad/edit?html,css,output)

### 打印样式的设置 @media print

``` css
/*媒体查询，打印的时候需要的样式写在里面*/
@media print {
  body {
    color: #000;
    background: #fff;
  }
  @page {
    /* 对应设置中的页边距*/
    margin: 2cm;
  }
  article {
    page-break-before: always;
  }
}
page-break-after: avoid;
h2, h3 {
  page-break-after: avoid;
}
/* 总之需要的样式都可以得到 */
```

## 选择器

### CSS选择器有哪些

1. *** 通用选择器**：选择所有元素，**不参与计算优先级**，兼容性IE6+
2. **#X id选择器**：选择id值为X的元素，兼容性：IE6+
3. **.X 类选择器**： 选择class包含X的元素，兼容性：IE6+
4. **X Y后代选择器**： 选择满足X选择器的后代节点中满足Y选择器的元素，兼容性：IE6+
5. **X 元素选择器**： 选择标所有签为X的元素，兼容性：IE6+
6. **:link，：visited，：focus，：hover，：active链接状态**： 选择特定状态的链接元素，顺序LoVe HAte，兼容性: IE4+
7. **X + Y直接兄弟选择器**：在**X之后第一个兄弟节点**中选择满足Y选择器的元素，兼容性： IE7+
8. **X > Y子选择器**： 选择X的子元素中满足Y选择器的元素，兼容性： IE7+
9. **X ~ Y兄弟**： 选择**X之后所有兄弟节点**中满足Y选择器的元素，兼容性： IE7+
10. **[attr]**：选择所有设置了attr属性的元素，兼容性IE7+
11. **[attr=value]**：选择属性值刚好为value的元素
12. **[attr~=value]**：选择属性值为空白符分隔，其中一个的值刚好是value的元素
13. **[attr|=value]**：选择属性值刚好为value或者value-开头的元素
14. **[attr^=value]**：选择属性值以value开头的元素
15. **[attr$=value]**：选择属性值以value结尾的元素
16. **[attr*=value]**：选择属性值中包含value的元素
17. **[:checked]**：选择单选框，复选框，下拉框中选中状态下的元素，兼容性：IE9+
18. **X:after, X::after**：after伪元素，选择元素虚拟子元素（元素的最后一个子元素），CSS3中::表示伪元素。兼容性:after为IE8+，::after为IE9+
19. **:hover**：鼠标移入状态的元素，兼容性a标签IE4+， 所有元素IE7+
20. **:not(selector)**：选择不符合selector的元素。**不参与计算优先级**，兼容性：IE9+
21. **::first-letter**：伪元素，选择块元素第一行的第一个字母，兼容性IE5.5+
22. **:nth-child(an + b)**：伪类，选择前面有an + b - 1个兄弟节点的元素，其中n
&gt;= 0， 兼容性IE9+
23. **:nth-last-child(an + b)**：伪类，选择后面有an + b - 1个兄弟节点的元素
其中n &gt;= 0，兼容性IE9+
24. **X:nth-of-type(an+b)**：伪类，X为选择器，**解析得到元素标签**，选择**前面**有an + b - 1个**相同标签**兄弟节点的元素。兼容性IE9+
25. **X:nth-last-of-type(an+b)**：伪类，X为选择器，解析得到元素标签，选择**后面**有an+b-1个相同**标签**兄弟节点的元素。兼容性IE9+
26. **X:first-child**：伪类，选择满足X选择器的元素，且这个元素是其父节点的第一个子元素。兼容性IE7+
27. **X:last-child**：伪类，选择满足X选择器的元素，且这个元素是其父节点的最后一个子元素。兼容性IE9+
28. **X:only-child**：伪类，选择满足X选择器的元素，且这个元素是其父元素的唯一子元素。兼容性IE9+
29. **X:only-of-type**：伪类，选择X选择的元素，**解析得到元素标签**，如果该元素没有相同类型的兄弟节点时选中它。兼容性IE9+
30. **X:first-of-type**：伪类，选择X选择的元素，**解析得到元素标签**，如果该元素
是此此类型元素的第一个兄弟。选中它。兼容性IE9+
31. **::first-line**：伪元素，选择块元素的第一行，兼容性IE5.5+

### 相邻兄弟选择器（这里的兄弟可以理解为其后，相邻就是紧接着的）

前方兄弟元素 + 紧跟着的目标元素 { 样式声明 }

- 注意这里的前方兄弟元素，不是后方元素，这样使用input:checked+label的时候就要把input放在前，label放在后。
- 只会返回一个目标元素。

### 通用兄弟选择器（这里的兄弟可以理解为其后，通用就是所有的）

前方兄弟元素 ~ 目标元素{ 样式声明 }

其后的元素具有相同的父元素的集合。

```css
.one + li{
  // 这里匹配到 .two
}
.one ~ li {
  // 这里匹配到 .two 和 .three
}
.two ~ li {
    // 这里匹配到 .three
}
```

```html
<ul>
  <li class="one">One</li>
  <li class="two">Two</li>
  <li class="three">Three</li>
</ul>
```

### css定义的权重

``` css
// 以下是权重的规则：标签的权重为1，class的权重为10，id的权重为100，以下/// 例子是演示各种定义的权重值：

/*权重为1*/
div{
}
/*权重为10*/
.class1{
}
/*权重为100*/
#id1{
}
/*权重为100+1=101*/
#id1 div{
}
/*权重为10+1=11*/
.class1 div{
}
/*权重为10+10+1=21*/
.class1 .class2 div{
}

// 如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现
```

#### CSS如何计算选择器优先？

- 相同权重，定义最近者为准：行内样式 > 内部样式 > 外部样式
- 含外部载入样式时，后载入样式覆盖其前面的载入的样式和内部样式
- 选择器优先级: 行内样式[1000] > id[100] > class[10] > Tag[1]
- 在同一组属性设置中，!important 优先级最高，高于行内样式

### css sprite是什么,有什么优缺点

概念：将多个小图片拼接到一个图片中。通过background-position和元素尺寸**调节需要显示的背景图案**。

优点：

1. 减少HTTP请求数，极大地提高页面加载速度
2. 增加图片信息重复度，提高压缩比，减少图片大小
3. 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现

缺点：

1. 图片合并麻烦
2. 维护麻烦，修改一个图片可能需要从新布局整个图片，样式

### css hack原理及常用hack

原理：利用**不同浏览器对CSS的支持和解析结果不一样**编写针对特定浏览器样式。常见的hack有1）属性hack。2）选择器hack。3）IE条件注释

- IE条件注释：适用于[IE5, IE9]常见格式如下

``` html
<!--[if IE 6]>
Special instructions for IE 6 here
<![endif]-->
```

- 选择器hack：不同浏览器对选择器的支持不一样

``` css
/***** Selector Hacks ******/

/* IE6 and below */
* html #uno  { color: red }

/* IE7 */
*:first-child+html #dos { color: red }

/* IE7, FF, Saf, Opera  */
html>body #tres { color: red }

/* IE8, FF, Saf, Opera (Everything but IE 6,7) */
html>/**/body #cuatro { color: red }

/* Opera 9.27 and below, safari 2 */
html:first-child #cinco { color: red }

/* Safari 2-3 */
html[xmlns*=""] body:last-child #seis { color: red }

/* safari 3+, chrome 1+, opera9+, ff 3.5+ */
body:nth-of-type(1) #siete { color: red }

/* safari 3+, chrome 1+, opera9+, ff 3.5+ */
body:first-of-type #ocho {  color: red }

/* saf3+, chrome1+ */
@media screen and (-webkit-min-device-pixel-ratio:0) {
 #diez  { color: red  }
}

/* iPhone / mobile webkit */
@media screen and (max-device-width: 480px) {
 #veintiseis { color: red  }
}

/* Safari 2 - 3.1 */
html[xmlns*=""]:root #trece  { color: red  }

/* Safari 2 - 3.1, Opera 9.25 */
*|html[xmlns*=""] #catorce { color: red  }

/* Everything but IE6-8 */
:root *> #quince { color: red  }

/* IE7 */
*+html #dieciocho {  color: red }

/* Firefox only. 1+ */
#veinticuatro,  x:-moz-any-link  { color: red }

/* Firefox 3.0+ */
#veinticinco,  x:-moz-any-link, x:default  { color: red  }
```

- 属性hack：不同浏览器解析bug或方法

``` css
/* IE6 */
#once { _color: blue }

/* IE6, IE7 */
#doce { *color: blue; /* or #color: blue */ }

/* Everything but IE6 */
#diecisiete { color/**/: blue }

/* IE6, IE7, IE8 */
#diecinueve { color: blue\9; }

/* IE7, IE8 */
#veinte { color/*\**/: blue\9; }

/* IE6, IE7 -- acts as an !important */
#veintesiete { color: blue !ie; } /* string after ! can be anything */
```

### specified value,computed value,used value计算方法

- specified value: 计算方法如下：
  1. 如果样式表设置了一个值，使用这个值
  2. 如果没有设置值，这个属性是继承属性，从父元素继承
  3. 如果没设置，并且不是继承属性，使用css规范指定的初始值

- computed value: 以specified value根据规范定义的行为进行计算，通常将相对值计算为绝对值，例如em根据font-size进行计算。一些使用百分数并且需要布局来决定最终值的属性，如width，margin。百分数就直接作为computed value。line-height的无单位值也直接作为computed value。这些值将在计算used value时得到绝对值。**computed value的主要作用是用于继承**

- used value：属性计算后的最终值，对于大多数属性可以通过window.getComputedStyle获得，尺寸值单位为像素。以下属性依赖于布局，
  - background-position
  - bottom, left, right, top
  - height, width
  - margin-bottom, margin-left, margin-right, margin-top
  - min-height, min-width
  - padding-bottom, padding-left, padding-right, padding-top
  - text-indent

### `link`与`@import`的区别

1. ``link``是HTML方式， ``@import``是CSS方式
2. ``link``最大限度支持并行下载，``@import``过多嵌套导致串行下载，出现[FOUC](http://www.bluerobot.com/web/css/fouc.asp/)
3. ``link``可以通过``rel="alternate stylesheet"``指定候选样式
4. 浏览器对``link``支持早于``@import``，可以使用``@import``对老浏览器隐藏样式
5. ``@import``必须在样式规则之前，可以在css文件中引用其他文件
6. 总体来说：**[link优于@import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/)**

### CSS有哪些继承属性

关于文字排版的属性如：

- [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
- [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
- [letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
- [text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
- [text-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering)
- [word-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)
- [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
- [text-indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
- [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
- [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
- [cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)

#### 不可继承的

margin、border、padding、background、
height、min-height、max-height、width、min-width、max-width、
display、overflow、position、
left、right、top、bottom、z-index、
float、clear、table-layout、vertical-align、page-break-after、page-bread-before和unicode-bidi。

#### 所有元素可继承

visibility和cursor。

#### 内联元素可继承

letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction。

#### 终端块状元素可继承

text-indent和text-align。

#### 列表元素可继承

list-style、list-style-type、list-style-position、list-style-image。

#### 表格元素可继承

border-collapse。

### IE6浏览器有哪些常见的bug,缺陷或者与标准不一致的地方,如何解决

- IE6不支持min-height，解决办法使用css hack：

``` css
.target {
  min-height: 100px;
  height: auto !important;
  height: 100px; // IE6下内容高度超过会自动扩展高度
}
```

- ``ol``内``li``的序号全为1，不递增。解决方法：为li设置样式``display: list-item;``

- 未定位父元素``overflow: auto;``，包含``position: relative;``子元素，子元素高于父元素时会溢出。解决办法：
  - 1）子元素去掉``position: relative;``;
  - 2）不能为子元素去掉定位时，父元素``position: relative;``

```html
<style type="text/css">
.outer {
    width: 215px;
    height: 100px;
    border: 1px solid red;
    overflow: auto;
    position: relative;  /* 修复bug */
}
.inner {
    width: 100px;
    height: 200px;
    background-color: purple;
    position: relative;
}
</style>

<div class="outer">
    <div class="inner"></div>
</div>
```

- IE6只支持``a``标签的``:hover``伪类，解决方法：使用js为元素监听mouseenter，mouseleave事件，添加类实现效果：

```html
<style type="text/css">
.p:hover,
.hover {
    background: purple;
}
</style>

<p class="p" id="target">aaaa bbbbb<span>DDDDDDDDDDDd</span> aaaa lkjlkjdf j</p>

<script type="text/javascript">
function addClass(elem, cls) {
    if (elem.className) {
        elem.className += ' ' + cls;
    } else {
        elem.className = cls;
    }
}
function removeClass(elem, cls) {
    var className = ' ' + elem.className + ' ';
    var reg = new RegExp(' +' + cls + ' +', 'g');
    elem.className = className.replace(reg, ' ').replace(/^ +| +$/, '');
}

var target = document.getElementById('target');
if (target.attachEvent) {
    target.attachEvent('onmouseenter', function () {
        addClass(target, 'hover');
    });
    target.attachEvent('onmouseleave', function () {
        removeClass(target, 'hover');
    })
}
</script>
```

- IE5-8不支持``opacity``，解决办法：

```css
.opacity {
  opacity: 0.4
  filter: alpha(opacity=60); /* for IE5-7 */
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"; /* for IE 8*/
}
```

- IE6在设置``height``小于``font-size``时高度值为``font-size``，解决办法：``font-size: 0;``
- IE6不支持PNG透明背景，解决办法: **IE6下使用gif图片**
- IE6-7不支持``display: inline-block``解决办法：设置inline并触发hasLayout

```css
  display: inline-block;
  *display: inline;
  *zoom: 1;
```

- IE6下浮动元素在浮动方向上与父元素边界接触元素的**外边距会加倍**。解决办法：
1）使用padding控制间距。
2）浮动元素``display: inline;``这样解决问题且无任何副作用：css标准规定浮动元素display:inline会自动调整为block
- 通过为块级元素设置宽度和左右margin为auto时，IE6不能实现水平居中，解决方法：为父元素设置``text-align: center;``

### 什么是FOUC?如何避免

Flash Of Unstyled Content：用户定义样式表加载之前浏览器使用默认样式显示文档，用户样式加载渲染之后再从新显示文档，造成页面闪烁。**解决方法**：把样式表放到文档的`head`

### stacking context，布局规则

z轴上的默认层叠顺序如下（从下到上）：

1. 根元素的边界和背景
2. 常规流中的元素按照html中顺序
3. 浮动块
4. positioned元素按照html中出现顺序

如何创建stacking context：

1. 根元素
2. z-index不为auto的定位元素
3. a flex item with a z-index value other than 'auto'
4. opacity小于1的元素
5. 在移动端webkit和chrome22+，z-index为auto，position: fixed也将创建新的stacking context

### 元素竖向的百分比设定是相对于容器的高度吗？

当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如 padding-top , padding-bottom , margin-top , margin-bottom 等，当按百分比设定它们时，依据的也是父容器的**宽度**，而不是高度。

### 排序操作，切换css属性

区分，不按当前列排序 -> 按照当前列顺序排序 -> 按照当前列倒序排序 -> 取消排序

``` css
/*右侧小图标.css*/
i{
  width: width;
  height: height;
  display: inline-block;
  margin-left: 5px;
  background: url ... ;
  &.select{
    /*更改图片, 改变图片*/
    background: url() ... ;
  }
  &.up{
    /*不改变图片，只是改变方向*/
    background: url() ... ;
    transform: rotate(180deg);
  }
}
/* js点击事件依次操作class */
无class -> 添加select -> 添加up,删除select -> 删除up，添加select
```

## CSS常见问题总结

### 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？

- png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.
- 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一
- IE下,可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性;
- Firefox下,只能使用getAttribute()获取自定义属性。
  - 解决方法:统一通过getAttribute()获取自定义属性
- IE下,event对象有x,y属性,但是没有pageX,pageY属性
- Firefox下,event对象有pageX,pageY属性,但是没有x,y属性

### rgba() 和 opacity 的透明效果有什么不同？

- opacity 作用于元素以及元素内的所有内容（包括文字）的透明度
- rgba() 只作用于元素自身的颜色或其背景色，子元素不会继承透明效果

### css 属性 content 有什么作用？

- content 属性专门应用在 before/after 伪元素上，用于插入额外内容或样式

### 介绍使用过的 CSS 预处理器？

- CSS 预处理器基本思想：为 CSS 增加了一些编程的特性（变量、逻辑判断、函数等）
- 开发者使用这种语言进行进行 Web 页面样式设计，再编译成正常的 CSS 文件使用
- 使用 CSS 预处理器，可以使 CSS 更加简洁、适应性更强、可读性更佳，无需考虑兼容性
- 最常用的 CSS 预处理器语言包括：Sass（SCSS）和 LESS

### CSS优化、提高性能的方法有哪些？

- 多个css合并，尽量减少HTTP请求
- 将css文件放在页面最上面
- 移除空的css规则
- 避免使用CSS表达式
- 选择器优化嵌套，尽量避免层级过深
- 充分利用css继承属性，减少代码量
- 抽象提取公共样式，减少代码量
- 属性值为0时，不加单位
- 属性值为小于1的小数时，省略小数点前面的0
- css雪碧图

### 浏览器是怎样解析CSS选择器的？

- 浏览器解析 CSS 选择器的方式是从右到左

### 在网页中的应该使用奇数还是偶数的字体？**

- 在网页中的应该使用“偶数”字体：
  - 偶数字号相对更容易和 web 设计的其他部分构成比例关系
  - 使用奇数号字体时**文本段落无法对齐**
  - 宋体的中文网页排布中使用最多的就是 12 和 14

### 伪元素和伪类的区别和作用？

- 伪元素 -- 在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。
- 它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：

``` css
p::before {content:"第一章：";}
p::after {content:"Hot!";}
p::first-line {background:red;}
p::first-letter {font-size:30px;}
```

- 伪类 -- 将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：

``` css
a:hover {color: #FF00FF}
p:first-child {color: red}
```

### ::before 和 :after 中双冒号和单冒号有什么区别？

- 在 CSS 中伪类一直用 : 表示，如 :hover, :active 等
- 伪元素在CSS1中已存在，当时语法是用 : 表示，如 :before 和 :after
- 后来在CSS3中修订，伪元素用 :: 表示，如 ::before 和 ::after，以此区分伪元素和伪类
- 由于低版本IE对双冒号不兼容，开发者为了兼容性各浏览器，继续使使用 :after 这种老语法表示伪元素
- 综上所述：::before 是 CSS3 中写伪元素的新语法； :after 是 CSS1 中存在的、兼容IE的老语法

### 如何修改Chrome记住密码后自动填充表单的黄色背景？

- 产生原因：由于Chrome默认会给自动填充的input表单加上 input:-webkit-autofill 私有属性造成的
- 解决方案1：在form标签上直接关闭了表单的自动填充：autocomplete="off"
- 解决方案2：input:-webkit-autofill { background-color: transparent; }

### input [type=search] 搜索框右侧小图标如何美化？

```css
input[type="search"]::-webkit-search-cancel-button{
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 8px;
  background:url("images/searchicon.png") no-repeat 0 0;
  background-size: 15px 15px;
}
```

### 让页面里的字体变清晰，变细用CSS怎么做？（IOS手机浏览器字体齿轮设置）

```css
-webkit-font-smoothing: antialiased;
```

### 自定义滚动条样式

``` css
.tableData::-webkit-scrollbar {
    height: 17px;
    border-top: 1px solid #1f2125;
    border-bottom: 1px solid #1f2125
}
/*对应垂直方向上的设置verticle*/
.tableData::-webkit-scrollbar-button:horizontal:increment {
    background: url(scrollRight.png) no-repeat;
    width: 20px;
    height: 17px
}

.tableData::-webkit-scrollbar-button:horizontal:decrement {
    background: url(scrollLeft.png) no-repeat;
    width: 20px;
    height: 17px
}

.tableData::-webkit-scrollbar-track {
    background-color: #14181e
}

.tableData::-webkit-scrollbar-thumb {
    background-color: #4d596d
}

.tableData::-webkit-scrollbar-corner {
    background-color: #14181e
}

```

### 绝对定位导致元素脱离标准本文档流，以及如何消除影响--撑开父元素

当元素使用`position:absolute;`的时候，会导致元素脱离标准文档流，以使父元素失去高度。

解决方案：

- js获取，然后设置；
- 两个同级元素一个定位一个自适应，通过自使用的这个元素来撑开父元素。
- 能用relative就不要用absolute；

另外一个问题，使用子元素来撑开父元素的时候，清除浮动之后，如果完全是由子元素撑起的，这个时候父元素就会有一段多出来的部分，这个时候使用**overflow:hidden;**来触发bfc模式来清除这一段。

### 清除select自带的下拉箭头

``` css
清除Css中select的下拉箭头样式.css
select {
  /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
  border: solid 1px #000;

  /*很关键：将默认的select选择框样式清除*/
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;

  /*在选择框的最右侧中间显示小箭头图片*/
  background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;

  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
  padding-right: 14px;
}

/*清除ie的默认选择框样式清除，隐藏下拉箭头*/
select::-ms-expand { display: none; }
```

### 修改placeholder的样式

``` css
/*修改placeholder的样式.css*/
/* webkit 浏览器*/
#field1::-webkit-input-placeholder{
  color:#00f;
}
#field2::-webkit-input-placeholder{
  color:#090;
  background:lightgreen;
  text-transform:uppercase;
}
#field3::-webkit-input-placeholder{
  font-style:italic;
  text-decoration:overline;
  letter-spacing:3px;
  color:#999;
}
```

## CSS与网络性能

### Question

- css如何阻塞页面的渲染？
- 从哪方面优化css对页面的渲染影响？

### Answer

CSS 是页面渲染的关键因素之一，（当页面存在**外链 CSS** 时，）**浏览器会等待全部的 CSS 下载及解析完成后再渲染页面**。
关键路径上的任何延迟都会影响**首屏时间**，因而我们需要尽快地将 CSS 传输到用户的设备，否则，（在页面渲染之前，）用户只能看到一个**空白的屏幕**。

### 最大的问题是什么？

广义而言，CSS 是（渲染）性能的关键，这是由于：

1. 浏览器直到**渲染树(renderTree)**构建完成后才会渲染页面；
2. 渲染树由 DOM 与 CSSOM 组合而成；
3. DOM 是 HTML 加上（同步）阻塞的 JavaScript 操作（DOM 后的）结果；
4. CSSOM 是 CSS 规则应用于 DOM 后的结果；
5. 使 JavaScript 非阻塞非常简单，添加 async 或 defer 属性即可；
6. 相对而言，**要让 CSS 变为异步加载是比较困难的**；
7. 所以记住这条经验法则：（理想情况下，）**最慢样式表的下载时间决定了页面渲染的时间**。

基于上述考虑，我们需要尽快构建 DOM 与 CSSOM。
一般情况下，DOM 的构建是相对较快，（当请求某个页面时，）服务器响应的首个请求是 HTML 文档。但一般 CSS 是作为 HTML 的子资源而存在，**因此 CSSOM 的构建通常需要更长的时间**。

### 解决问题

#### 1、Critical CSS （关键 CSS）模式

提取首次渲染需要用到的css样式，单独拿出来，内联到head中，其他的css通过加载文件资源的形式异步加载。

#### 2、根据媒体类型拆分代码

先查询当前的设备情况，加载相应的css文件。

我们可以观察到，这个单独的 CSS 文件会以 最高 的优先级下载。

根据媒体查询拆分成若干个 CSS 文件后：

```html
<link rel="stylesheet" href="all.css" media="all" />
<link rel="stylesheet" href="small.css" media="(min-width: 20em)" />
<link rel="stylesheet" href="medium.css" media="(min-width: 64em)" />
<link rel="stylesheet" href="large.css" media="(min-width: 90em)" />
<link rel="stylesheet" href="extra-large.css" media="(min-width: 120em)" />
<link rel="stylesheet" href="print.css" media="print" />
```

浏览器仍然会下载全部的 CSS 文件，但只有**符合当前上下文的 CSS 文件会阻塞渲染(Heighest)**。

#### 3、避免在 CSS 文件中使用 @import

import引入的子资源无法并行下载。

它的性能并不高，使用它会阻塞渲染更长时间。这是因为我们在关键路径上创造了**更多（队列式）的网络请求**。

1. 下载 HTML；
2. 请求并下载依赖的 CSS；下载及解析完成后，本该是构造渲染树，然而；
3. **CSS 依赖了其他的 CSS，继续请求并下载 CSS 文件**；
4. 构造渲染树。

#### 4、不要将动态插入 JavaScript 的代码放在`<link rel="stylesheet" />` 之后

css在下载完成之后，才会执行js，进而才会去执行下载js文件的进程。

如果 JS 文件**没有依赖 CSS （也就是js不去更改css）**，你应该将 JS 代码放在样式表之前。 既然没有依赖，那就没有任何理由阻塞 JavaScript 代码的执行。这里就像

（尽管执行 JavaScript 代码时会停止解析 DOM， 但预加载扫描器会提前下载之后的 CSS）

如果你一部分 JavaScript 需要依赖 CSS 而另一部分却不用，最佳的实践是将 JavaScript 分为两部分，分别置于 CSS 的两侧。

#### 5、将 `<link rel="stylesheet" />` 放在 `<body>` 中。

`<link rel="stylesheet" />` 只会阻塞**后续内容**，而不是整个页面的渲染。

```html
<html>
<head>
  <link rel="stylesheet" href="core.css" />
</head>
<body>
  <link rel="stylesheet" href="site-header.css" />
  <header class="site-header">
    <link rel="stylesheet" href="site-nav.css" />
    <nav class="site-nav">...</nav>
  </header>
  <link rel="stylesheet" href="content.css" />
  <main class="content">
    <link rel="stylesheet" href="content-primary.css" />
    <section class="content-primary">
      <h1>...</h1>
      <link rel="stylesheet" href="date-picker.css" />
      <div class="date-picker">...</div>
    </section>
    <link rel="stylesheet" href="content-secondary.css" />
    <aside class="content-secondary">
      <link rel="stylesheet" href="ads.css" />
      <div class="ads">...</div>
    </aside>
  </main>
  <link rel="stylesheet" href="site-footer.css" />
  <footer class="site-footer">
  </footer>
</body>
```

## Summary

本文内容比较 繁杂，成文后超出了本来的预期，尝试总结了 CSS 加载相关的一系列的最佳实践，值得仔细体会：

- **懒加载**非关键 CSS：
  - 优先加载关键 CSS，懒加载其他 CSS；
  - 或根据媒体类型拆分 CSS 文件。
- 避免使用 @import：
  - 在 HTML 文档中应该避免；
  - 在 CSS 文件之中更应避免；
  - 以及警惕预加载扫描器的怪异行为。

- 关注 CSS 与 JavaScript 的顺序：
  - 在 CSS 文件后的 JavaScript 仅在 CSSOM 构建完成后才会执行；
  - 如果你的 JavaScript 不依赖 CSS；
    将它放置于 CSS 之前；
  - 如果 JavaScript 依赖 CSS：
    将它放置于 CSS 之后。
- 仅加载 DOM 依赖的 CSS：
  - 这将提高初次渲染的速度使**让页面逐步渲染**。
