### CSS

> 内联样式 用分号隔开 <dic style="color: red;font-size:20px">
>
> 文档样式
>
> <style type="text/css">
> div { color: red; font-size: 14px; }
> </style>
>
> 外部样式
>
> <link rel="stylesheet" href="" type="text/css">
>
> @charset 'UTF-8'
>
> @import "路径"

Cursor: 设置鼠标移动样式

- 设置浏览器小图标 左上角（所有图标引擎）大小通常为16*16 ，24 * 24 ，32*32
- Caret-color 设置光标颜色

`<link rel="icon" type="img/x-icon" href="图标地址">`

- html 中img标签可以不设置图片地址协议 如：

`<img src="//:www.baidu.log.png" alt="这是一张百度的图片logo">`

css参考网站：

国内:

- http://css.doyoe.com
- https://www.runoob.com/cssref/css-reference.html

国外：

- https://cssreference.io/
- http://tympanus.net/codrops/css_reference
- https://www.quackit.com/css/reference/

检测前端那些方法在那些浏览器上不能使用

- https://caniuse.com/

### CSS常见属性

- color 前景色  
- Background-color:背景色

### 颜色

- rgb()  里边也可以写 百分值
- #FFFFFF
- #345

视频转gif

- https://zhuanlan.zhihu.com/p/92735700

字体网站

- font.chinaz.com

`[TOC] 可以生成目录`

1. Text-decoration:

2. Text-decoration-color 很新

3. Letter-spacing: 每个英文字母的间距

4. Word-spaceing: 单词间距

5. Text-transform: 单词的大小写转换

6. Text-indent: 第一行文字缩进 单位一般使用em可以办证缩进固定距离跟随文字变化

7. em 相对单位2em 相当于2 * font-size 1em相当于一个font-size

8. Text-align 文字对齐方式

   ## 字体

   1. Font-size: 20px     150%*父元素的font-size  em相对于父元素 一般可以设置body后其他都相对于budy

   2. Font-family   设置字体  可以设置多个找到可用的字体   如果字体是多个文字 需要加双引号 一般英文字体不支持中文字体 中文支持英文字体

   3. @font-face  网络字体 自定义字体 可以设置多个 font-family 可以自定义字体名称

      `@font-face { src: url("")，url("")，url(""); font-family: "字体名称" }`

   4. Font-weight: 设置文字的粗细 normal 默认为400

   5. Font-style: 设置文字 设置斜体文字 等等 设置文字的样式

   6. Font-varlint: 影响小写字母的显示 会把一部分字体缩小

   ### 选择器

   1. 类型选择器 如 div
   2. 通用选择器 * 
   3. id 选择器 #id
   4. 类选择器 .class
   5. 属性选择器 [title] 拥有title属性的元素 [att=val] 属性名刚好等于某个值 [att~=val]  包含 [att|=val]  一般用在lang上    [att^=val]    [att=$val]    [att*=val] 包含
   6. 组合选择器 div>span div的直接子元素 div>span>p   兄弟： div+p 相邻的后面  div~p
   7. 选择器之间不留空格 div.span 交集选择器同时符合
   8. 并集选择器 ，号隔开 div,title,title

   ## 伪类

   - A:link a:visited a:hover a:active  顺序 livk visited hover active 必须按照这个顺序否则不生效
   - :force 当前拥有输入焦点 一般用在input a元素也可以使用  或者tab键选中
   - 取消tab建选中  { outline: none } tabindex 可以设置tab的选中顺序  如果不希望选中 可以设置为-1
   - 给a设置了样式 4个伪类都设置了
   - 结构伪类p :nth-child(1) 第几个  :nth-child(2n)   :nth-child(even) 偶数  :nth-child(2n+1) :nth-child(odd) 奇数  选择前2个:nth-child(-n+2)  指父元素
   - :nth-last-child(1) 
   - 取范围 :nth-child(n+2) :nth-last-child(n+2)  指父元素
   - :nth-of-type(3) :nth-last-of-type(3)/// 只算同一类元素 指父元素
   - First-child first-of-type
   - :Only-child 父元素中只有唯一的子元素
   - :Only-of-type
   - :root 根元素
   - ：empty 空白元素
   - 否定伪类 :not(div) 除了div之外的所有元素

   ## 伪元素

   - 建议写::first-line 针对文本的第一行
   - ::first-letter 首字母
   - ::before 在一个元素内容之前插入内容 ::after  支持图片

   `div::before {contetn: "666" url(显示图片)}` 无法选中 可以单独设置样式 content: “【”arrt()“】” 获取元素 可以把属性值显示在前面

Emme 插件  zen Coding  语法

!  !htm5: 快速生成h5代码

div>ul>li

div+p+bq

ul>li*5

dib+div>p>span=em^h1  ^和em的父元素

div>(header>ul*2>a+footer>p

div.class  td[title=hello

ul>li.item$*5

ul>li.item$@-*5

a{点击}

a>{click}

a>{}+span{}

生成css 代码

w200

w20+h30+m40



### 继承

- 不是所有的属性都支持继承 具体的可以查资料 不能继承的属性可以添加 inherit 关键字 强制继承 继承的是计算值 50%会计算后在继承

### 优先级(id>class,类选择器，伪类选择器)>标签 伪元素>*

- 如果优先级一样则才采用就近原则
- 设置优先级 !important
- 针对性更高的优先级更强

### 列表CS属性

- List-style-type
- List-style-image
- List-style-position
- list-style  缩写属性

### table border 边框  Cellpadding  单元格内部间距

- tr 行 （table row 简称）  align 可以设置表格居中
- td 列 每一个小格 align 对齐方式
- border 边框 
- Cellpadding  单元格内部间距
- Cellspacing 单元格之间
- width align
- 细线表格 

> 1. 给table设置背景色 设置每个单元格的颜色  设置cellspacing
>
> 2. Td { border: 1px, solid red }  table{ border-collasps:  }

-   thead th 表头  Tbody caption 表格的标题 tfooter 
- Outline 去掉聚焦外边框的颜色
- rowspan 列合并
- Colspan 行合并

### boder-spacing

> boder-spacing {1px, 2px} 水平 和垂直





- Dispaly: block  inline none 隐藏  inline-block
- Visibility: hidden  /// 隐藏还占用空间
- Overflow  内容溢出的行为 Overflow -x  Overflow-y
- 消除内联元素的空格间距（注释掉空格）设置父元素的font-size为0

### 块及元素

独占父元素的一行

### 行内元素

### 替换元素

### 非替换元素

### 行高

- Line-hight  文字高度+上下间距   （ 顶线   底线  文字的真实高度  ）中线  基线 （小写字母x最底部的线）  font-size 就是文字的高度   可以写1.0 - 2.0 用这个值*font-size  设置linheight 可以让文字竖直居中对齐 是个最小行高 不一定是最终行高

### 缩写属性

### 盒子模型

Padding: 上 右 下 左

margin   margin-top 块级元素 子元素也需要是块级元素 如果顶部重合在一起了 就会向上传递  margin-bottom传递  父元素高度是auto 底部重合 让父元素或者子元素变为inlin-block 或者给父元素设置边框 或者设置padding 或者margin



上下matgin折叠   如果margin重叠了 会折叠在一起

无内容的块级元素top 和 bottom 也会折叠在一起





Border  边框  形状问题  transparent 透明 梯形  或者三角行  

Transform： 旋转  正数顺时针 负数逆时针

行内非替换元素   margin-top  margin-bottom 不生效

Padding-top  Padding-bottom border 上下 不占用空间 不会影响到其他元素 左右正常

- 圆角

  Border-radius  圆角  设置 4/1 圆角 

  Border-top-left-redius: 水平值， 垂直值  可以设置百分比  百分比相对于 border+content width

  Border-redius 会变成一个圆

- outline 在border的外边  不占空间 可能会挡住下方的元素 outline 的每个部位都是完整链接在一起的   border 是分开的

- Box-shaow  设置阴影  第一个偏移量 （两个值 整数向右 负数向左）模糊值（px）  颜色  延伸距离

- Transition 动画  可动画属性  可以控制那个属性做动画 提前写好 尽量不要写在 伪元素上面

- Text-shaow 文字加阴影  可以叠加写 适用于:firstline :firstletter

- Box-sizing 可以控制盒子模型中 用来控制width 和 heigth的行为  即是否包含 margin border margin

- 元素的水平居中 text-align 让元素的内容在元素中居中 行内级元素 inline-block 在父元素中水平居中 给父元素设置text-align 属性会继承  块级元素不支持 块级元素的水平居中 margin 左右设置 auto

- Background-image 背景图片 可以设置多张图片 他们一般是叠在一起 后面的在下面 默认不会去压缩图片了  多余的图片会直接拿掉

- Background-repeat  图片重复 

- Background-size   背景大小 (auto 10px)  设置的是图片背景自己的宽高 （10px 宽度按照设置的值  高度自己算）可以设置百分比  百分比参照原图

- Background-position  设置图片的位置 只设置一个值的话另外一个就是居中了 也可以设置多个值

- 滑动门技术 非纯色背景 

- 限制div的最小宽度 min-width: 1000px 如果小于这个值可以拖动查看图片

- css spirite  技术  控制background-positon 位置来显示图片

- Background-attachmnet 背景图片跟随文字一次滚动默认值 fix相对于浏览器固定 local 背景会随着文字滚动 一般和平铺一块使用

- Background 缩写属性  background-size必须放在position后面 其他没有顺序问题

- background 不占用空间 img占用空间  img可以被搜索引擎搜到 alt属性可以搜索到聊天记录

- background 也可以实现图片链接

  ### 特殊元素的背景

  - html 和 body 的背景可以延伸到整个画布
  - ::fitst-line 设置内容的背景

  ## 鼠标

  - Cursor 鼠标 也可以设置图片
  

  
  ### 定位相关
  
  - 标准流 默认从上到下 从到右 margin还可以设置负数
  - Position  定位 relative 相对定位 left right top bottom 需要有个参照对象 默认是参照的自己 设置后原来的元素还在标准流中 也可以设置百分比 乘以父元素 static 默认值（left right top bottom）设置无效  fixed 固定定位会脱离标准流 定位相对于视口
  - Absoulte 脱离标准流 参照最邻近定位的祖先元素 position 不是static的元素为定位元素  如果找不到参照对象是视口  子绝父相  left + rigth == 0 全部宽度 父元素的
  - sub sup可以设置上标和下标
  - Margin-left 和 left可以实现相减的效果
  - 视口和画布
  
  状态伪类 input:disable
  
  
  
  ![image-20210206223715119](/Users/mac/Creative Cloud Files/资料/FangCloudV2/个人文件/笔记/image-20210206223715119.png)
  
  
  
  ![image-20210206223832420](/Users/mac/Creative Cloud Files/资料/FangCloudV2/个人文件/笔记/image-20210206223832420.png)
  
  
  
  ![image-20210206224026087](/Users/mac/Creative Cloud Files/资料/FangCloudV2/个人文件/笔记/image-20210206224026087.png)
  
  

### Z-Index

设置定位元素的显示层级优先级

![image-20210206225545104](/Users/mac/Creative Cloud Files/资料/FangCloudV2/个人文件/笔记/image-20210206225545104.png)

## CSS的定位方案(托裱元素不区分块级元素或者行内元素)

1. 标准流
2. 绝对定位
3. 浮动定位 脱离标准流 

> Float none left right  leift 遇到其他浮动元素会停止  浮动遇到父元素边界会停止
>
> 浮动元素不能与行内及元素重叠 浮动只会向左向右浮动 不会改变上下位置 浮动元素之间不能层叠

BFC CSS Hack