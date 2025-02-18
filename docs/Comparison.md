下面给出一个对比表，着重说明这三种元素在 padding 和 border 上的行为差异：

四种元素对比表：

| 元素类型      | padding 行为                                                         | border 行为                                                          | margin 行为                                                 | width/height 行为                                           | 备注                                    |
| ------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------- |
| inline        | 水平 padding 生效；垂直 padding 影响行高，但不会扩展布局空间            | 边框绘制在文本行内，不会扩大行框高度                                  | 水平 margin 生效；垂直 margin 不影响布局（仅影响行高）        | 无法设置 width/height（设置无效）                           | 适合文本片段，不形成独立块               |
| inline‑block | 上下左右 padding 均生效，影响元素大小                                | 边框完整应用，会影响整体尺寸                                          | 上下左右 margin 均生效，不会发生合并（collapsing）             | 可设置 width/height，有效调整尺寸                           | 内联排列且支持块级布局                 |
| block         | 上下左右 padding 均生效，增大元素占据的空间                           | 边框围绕整个元素绘制，会影响布局尺寸                                  | 上下左右 margin 均生效，垂直 margin 会发生合并（collapsing）     | 可设置 width/height，默认 width 占满一整行（除非设置具体值）   | 独占一行，常用于结构布局                 |
