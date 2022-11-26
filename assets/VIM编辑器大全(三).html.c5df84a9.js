import{_ as d,o as n,c as a,f as e,e as i}from"./app.5c415221.js";const l={},s=i(`<h2 id="vim编辑器" tabindex="-1"><a class="header-anchor" href="#vim编辑器" aria-hidden="true">#</a> VIM编辑器</h2><p>vi编辑器是所有Unix及Linux系统下标准的编辑器，vim是vi的升级版。vi可以分为三种状态：命令模式（编辑模式）、插入模式（输入模式）和末行模式（扩展模式） 、可视模式（Visual）</p><ol><li><p>命令模式（编辑模式）<br> 默认模式，可进行各种命令操作和移动，因为大部分操作是浏览而不是编辑，所以vim默认是命令模式（界面表现：左下角显示文件名或为空）</p></li><li><p>插入模式（输入模式）<br> 只有在Insert mode下，才可以做文本编辑，修改文本（界面表现：左下角显示—INSERT–）插入模式下，按ESC按键返回命令模式</p></li><li><p>末行模式（扩展模式）<br> 保存、退出等（界面表现：左下角显示—VISUAL–）末行模式下连续按两次ESC按键返回末行模式。</p></li></ol><p>不过一般我们在使用时把vim简化成两个模式，就是将末行模式（扩展模式）也算入命令模式（编辑模式）</p><ol start="4"><li>可视模式 Normal 模式下使用 <code>v</code> 进入visual 选择 使用 <code>V</code> 选择行 使用 <code>Ctrl + v</code> 进行方块选择</li></ol><p>用vi进行编辑，保存操作：</p><ul><li>进入文件： <code>vi /files/test.cfg</code></li><li>进入编辑状态按<code>i</code>或<code>a</code>,切换到输入状态，这个时候可以改变文件内容</li><li>文件编辑完毕之后，需要退出编辑。退出编辑器又分为4种情况：保存退出、正常退出、不保存退出及强制退出</li><li>按键盘左上角的<code>Esc</code>，左下角的插入状态不见了</li><li>保存退出：输入<code>:wq</code>, w 即 write，写入（保存）, q 即 quit，退出；或者输入<code>x</code> 即 <code>x=wq</code></li><li>正常退出：正常退出有个前提条件是：打开的文本文件在内容上没有被改动过。按了<code>Esc</code>后,输入命令<code>:q</code></li><li>不保存退出： 按了<code>Esc</code>后,输入<code>:q!</code></li><li>强制退出: 输入命令<code>:!</code></li></ul><h2 id="插入模式操作" tabindex="-1"><a class="header-anchor" href="#插入模式操作" aria-hidden="true">#</a> 插入模式操作</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ctrl + h 删除上一个字符，相当于回格键backspace
ctrl + w 删除上一个单词
ctrl + u 删除当前行

# 调整行缩进
ctrl + t 增加缩进
ctrl + d 减少缩进

# 上下行同列复制
ctrl + y 复制上一行的相同列的字符
ctrl + e 复制下一行的相同列的字符

ctrl + a 移动到开头
ctrl + e 移动到结尾
ctrl + b 往前移
ctrl + f 往后移
ctrl + j 向下新建一行

# 快速切换insert和normal模式，ESC的替代方案
使用 ctrl + c 代替 ESC（但是可能中断某些插件）或者 ctrl + [

# 从normal模式快速切换到insert模式
gi 快速跳转到最后一次编辑的地方并进入插入模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=i(`<h2 id="命令模式操作" tabindex="-1"><a class="header-anchor" href="#命令模式操作" aria-hidden="true">#</a> 命令模式操作</h2><h3 id="退出" tabindex="-1"><a class="header-anchor" href="#退出" aria-hidden="true">#</a> 退出</h3><p>按ESC键 跳到命令模式，然后输入：</p><p><code>:w </code>- 保存文件，不退出 vim <code>:w file</code> - 将修改另外保存到 file 中，不退出 vim <code>:w! </code> - 强制保存，不退出 vim <code>:wq </code>- 保存文件，退出 vim <code>:wq!</code> - 强制保存文件，退出 vim <code>:q </code>- 不保存文件，退出 vim <code>:q!</code> - 不保存文件，强制退出 vim <code>:e!</code> - 放弃所有修改，从上次保存文件开始再编辑</p><h3 id="进入插入模式" tabindex="-1"><a class="header-anchor" href="#进入插入模式" aria-hidden="true">#</a> 进入插入模式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a (append)  当前字符的后面插入
i (insert) 当前字符的前面插入
o (open a line below) 向下新建一行插入

A (append after line)  在这一行的最后面插入
I (insert before line)  在这一行的最前面插入
O (append a line above)  向上新建一行插入
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示行号" tabindex="-1"><a class="header-anchor" href="#显示行号" aria-hidden="true">#</a> 显示行号</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>:set nu
</code></pre></div><h3 id="分屏" tabindex="-1"><a class="header-anchor" href="#分屏" aria-hidden="true">#</a> 分屏</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>:vs (vertical split) 竖分屏
:sp (split) 横分屏
使用 \`:q\` 退出
</code></pre></div><h3 id="移动" tabindex="-1"><a class="header-anchor" href="#移动" aria-hidden="true">#</a> 移动</h3><p>使用<code>hjkl</code>来移动，h（左）、j（下）、k（上）、l（右），移动也不会让手指脱离主键盘区</p><h3 id="单词间移动-在单词间飞舞" tabindex="-1"><a class="header-anchor" href="#单词间移动-在单词间飞舞" aria-hidden="true">#</a> 单词间移动，在单词间飞舞</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>w/W 移动到下一个 单词(word/WORD) 开头
e/E 移动到下一个 单词(word/WORD) 尾
b/B 移动到上一个 单词(word/WORD) 开头,可以理解成backword

# word 指的是以非空白符分割的单词，WORD 是以空白符分割的单词
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行间搜索移动" tabindex="-1"><a class="header-anchor" href="#行间搜索移动" aria-hidden="true">#</a> 行间搜索移动</h3><p>同一行快速移动的方式其实是搜索一个字符并且移动到该字符，适用单个字符搜索</p><p>使用<code>f{char}</code> 可以到char字符上，<code>t</code> 移动到char的前一个字符</p><p>如果第一个次没搜索到，可以使用 逗号(,)、分号(😉 继续搜索这一行的 上一个、下一个</p><h3 id="vim水平移动" tabindex="-1"><a class="header-anchor" href="#vim水平移动" aria-hidden="true">#</a> vim水平移动</h3><p>快速移动到一行的行首或行尾</p><p><code>0</code> 快速移动到行首第一个字符，<code>^</code> 移动到第一个非空白字符</p><p><code>$</code> 快速移动到行尾，<code>g_</code> 移动到行尾非空白字符</p><h3 id="翻页-跳转指令" tabindex="-1"><a class="header-anchor" href="#翻页-跳转指令" aria-hidden="true">#</a> 翻页/跳转指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>G 跳转至最后一行
  
gg 跳转至第一行  

H/M/L 跳转至屏幕的开头（Head），中间（Middle），结尾（Lower）

Home键 跳转至行首  

End键 跳转至行末  

ctrl + o 快速返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选中" tabindex="-1"><a class="header-anchor" href="#选中" aria-hidden="true">#</a> 选中</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>v 按字符选择, 经常使用的模式  

V 按行选择  

全选操作：
V + G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h3><p>常用的有三个，r(replace),c(change),s(substitute)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>r 可以替换一个字符。

s 替换并进入插入模式

c 配合文本对象，可以快速进行文本修改，例如： caw，删除并进入插入模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h3><p>使用 <code>/</code> 或 <code>?</code> 进行前向或者反向搜索</p>`,31),c=i(`<h3 id="替换" tabindex="-1"><a class="header-anchor" href="#替换" aria-hidden="true">#</a> 替换</h3><p>语法： <code>:[range]s[ubstitute]/{pattern}/{string}/[flags]</code>,支持正则表达式</p><p>rang 表示范围 比如：<code>1,20</code> 表示1-20行，<code>%</code> 表示全部</p><p>pattern 是要替换的模式</p><p>string 是替换后的文本</p><p>flags表示替换的范围</p><ul><li>g(global) 表示全局范围内执行</li><li>c(confirm) 表示确认，可以确认或者拒绝修改</li><li>n(number) 报告匹配的此次而不替换，可以用来查询匹配的个数</li></ul><p>例子：<br><code>:1,6 s/self/this/g</code>, 全局内执行将1-6行内的self替换成this</p><p><code>:1,6 s/self//n</code>, 查询匹配self字符串的个数</p><h3 id="复制" tabindex="-1"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>y (yank)复制选中的内容（经常使用的模式）  

yy 复制一行 (nyy：复制n行)  

yw/yiw 复制一个词，到空格结束 (nyw或者ynw，复制n个word，n为数字)  

y^ 复制当前到行头的内容；   

y$ 复制当前到行尾的内容；  

yG 复制至档尾（nyG或者ynG，复制到第n行，例如1yG或者y1G，复制到档尾）   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>x 小写的x表示向后删除一个字符,也就是删除光标所在字符  

X 大写的X表示删除光标前的一个字符,不包括光标所在字符

d 配合文本对象快速删除一个单词，例如 daw (d around word),删除一个单词

D 大写的D表示删除这一行的字符，不会删除换行符  

大小写d 和 x 都可以搭配数字来执行，表示多次执行命令。例如：10x表示删除包括光标在内的后面10个字符


d 搭配其他命令操作：

dd 删除一行  

dw  删除一个单词，执行的是daw

daw 删除一个单词并且包含周围的空格

diw 删除一个单词不删除空格

dt[txt] txt表示文本区域结束位置，例如：dt) 表示删除到)位置的内容，不包含) 

d$  删除到行尾

d0  删除到行首的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="剪切" tabindex="-1"><a class="header-anchor" href="#剪切" aria-hidden="true">#</a> 剪切</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>d   剪切选中的内容（经常使用的模式） 

dd  剪切一行(ndd：复制n行)  

ndd n表示数字，剪切光标所在的向下n行  

dw  剪切一个词，到空格结束 (ndw或者dnw，剪切n个word，n为数字)  

d^  剪切当前到行头的内容；   

d$  剪切当前到行尾的内容；       

d0  剪切光标所在到该行第一个字符  

dG  剪切至档尾（ndG或者ynG，剪切到第n行，例如1dG或者d1G，剪切到档尾）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Vim 寄存器</p><p>Vim 里操作的是寄存器而不是剪贴板</p><p>vim有12个寄存器，分别是0,1,2,...,9,a,<code>&quot;</code>,＋; 在命令行模式下用 <code>:reg</code> 命令可以查看各个寄存器里的内容</p><p>vim中用 <code>y</code> 复制，只是简单的复制到 <code>&quot;</code>寄存器中，用 <code>p</code> 粘贴也是粘贴这个寄存器中的内容</p><p>默认我们使用 <code>d</code>删除 <code>y</code>复制的内容都放到了 “无名寄存器中”</p><p>用 <code>x</code> 删除一个字符放到无名寄存器，然后 <code>p</code> 粘贴，可以调换两字符</p><p>通过 <code>&quot;{register}</code> 前缀可以指定寄存器，不指定默认用无名寄存器，例如：<code>&quot;ayiw</code> 复制一个单词到寄存器 a 中，<code>&quot;bdd</code> 删除当前行到寄存器 b 中</p></div><h3 id="粘贴" tabindex="-1"><a class="header-anchor" href="#粘贴" aria-hidden="true">#</a> 粘贴</h3><p><code>p</code> (put)粘贴 //将光标移动到需要粘贴的地方按「 p 」即可<br> shift+Insert: 从外面将将内容粘贴进vim中 //需要在编辑模式下进行操作</p><p>J: 将光标所在的行与下一行的数据合并为一行</p><h3 id="撤销回退" tabindex="-1"><a class="header-anchor" href="#撤销回退" aria-hidden="true">#</a> 撤销回退</h3><p>u:撤销<br> ctrl + r：回退撤销</p><h3 id="屏幕翻页" tabindex="-1"><a class="header-anchor" href="#屏幕翻页" aria-hidden="true">#</a> 屏幕翻页</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ctrl+u 向上翻半屏   

ctrl+f 向上翻一屏   

ctrl+d 向下翻半屏   

ctrl＋b 向下翻一屏  

zz 把屏幕置为中间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="buffer-window-tab" tabindex="-1"><a class="header-anchor" href="#buffer-window-tab" aria-hidden="true">#</a> Buffer &amp; Window &amp; Tab</h2><h3 id="buffer-打开文件的内存缓冲区" tabindex="-1"><a class="header-anchor" href="#buffer-打开文件的内存缓冲区" aria-hidden="true">#</a> Buffer 打开文件的内存缓冲区</h3><ul><li>Vim打开一个文件后会加载内容到缓冲区</li><li>之后的修改都是针对内存中的缓冲区，并不会直接保存到文件</li><li>执行:w(write) 的时候才会把缓冲区的内容写入到文件里</li></ul><h3 id="在vim中-buffer-之间的切换" tabindex="-1"><a class="header-anchor" href="#在vim中-buffer-之间的切换" aria-hidden="true">#</a> 在Vim中，Buffer 之间的切换</h3><ul><li>使用:ls 会列出当前缓冲区</li><li><code>e [filename]</code> 打开文件，会新建缓冲区</li><li>使用:b n 跳转到第n个缓冲区</li><li>:bpre :bnext :bfirst :blast</li><li>也可以使用:b buffer_name 加上tab补全来跳转</li></ul><h3 id="window-窗口是buffer可视化的分割区域" tabindex="-1"><a class="header-anchor" href="#window-窗口是buffer可视化的分割区域" aria-hidden="true">#</a> Window 窗口是Buffer可视化的分割区域</h3><p>当需要同时打开多个文件时可以采用</p><p>一个缓冲区可以分割成多个窗口，每个窗口也可以打开不同的缓冲区</p><p><code>&lt;ctrl + w&gt;s</code> 水平分割，<code>&lt;ctrl + w&gt;v</code> 垂直分割；或者使用 <code>:sp</code> 和 <code>:vs</code></p><h3 id="切换窗口" tabindex="-1"><a class="header-anchor" href="#切换窗口" aria-hidden="true">#</a> 切换窗口</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ctrl + w&gt;w 在窗口间循环切换

&lt;ctrl + w&gt;h 切换到左边的窗口

&lt;ctrl + w&gt;j 切换到上边的窗口

&lt;ctrl + w&gt;k 切换到下边的窗口

&lt;ctrl + w&gt;l 切换到右边的窗口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>移动窗口的位置 <code>&lt;ctrl + w&gt;L</code> 将左边窗口移动到右边 <code>&lt;ctrl + w&gt;H</code> 将右边窗口移动到左边</p></blockquote><h3 id="tab-标签页-将窗口分组" tabindex="-1"><a class="header-anchor" href="#tab-标签页-将窗口分组" aria-hidden="true">#</a> Tab(标签页) 将窗口分组</h3><p>Tab是可以容纳一系列窗口的容器（<code>:h tabpage</code>）</p><p>可以把Vim的Tab想象成Linux的虚拟桌面</p><p>相比窗口，Tab一般用的比较少，Tab太多管理起来也比较麻烦</p><h3 id="tab-标签页-操作" tabindex="-1"><a class="header-anchor" href="#tab-标签页-操作" aria-hidden="true">#</a> Tab（标签页）操作</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:tabe [dit] {filename} 在新标签页打开 filename

&lt;ctrl + w&gt;T 把当前窗口移动到新的标签页

:tabc [lose] 关闭当前标签页和其中所有窗口

:tabo [nly] 只保留活动标签页，关闭其他标签页

:tabp      前一个

:tabn      后一个

也可以使用：
gt , gT 可以直接在tab之间切换
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="批量操作-宏以及其他方式" tabindex="-1"><a class="header-anchor" href="#批量操作-宏以及其他方式" aria-hidden="true">#</a> 批量操作，宏以及其他方式</h2><p>宏可以看成是一系列命令的集合</p><p>我们用宏录制一系列操作，然后用于回放</p><h3 id="宏-使用方式" tabindex="-1"><a class="header-anchor" href="#宏-使用方式" aria-hidden="true">#</a> 宏 使用方式</h3><p>Vim 使用 q{register} 来录制，使用 q 来结束</p><p>使用 q{register}选择要保存的寄存器，把录制的命令保存下来</p><p>使用 @{register} 回放寄存器中保存的一系列命令</p><p>批量操作：例如，给多行文本添加双引号，先录制 &gt; 全选 &gt; 回访 录制完之后，选中需要执行的文本，输入命令<code>:&#39;&lt;,&#39;&gt;normal @a</code>，给选中的文本都执行了宏操作</p><h3 id="不使用宏实现批量操作" tabindex="-1"><a class="header-anchor" href="#不使用宏实现批量操作" aria-hidden="true">#</a> 不使用宏实现批量操作</h3><ol><li>V + G 全选</li><li>命令: <code>:&#39;&lt;,&#39;&gt;normal I&quot;</code></li><li>命令: <code>:&#39;&lt;,&#39;&gt;normal A&quot;</code></li></ol><p>全选之后通过在行首和行尾插入 <code>&quot;</code> 也可以实现同样的效果</p><h2 id="vim-在插入模式中补全" tabindex="-1"><a class="header-anchor" href="#vim-在插入模式中补全" aria-hidden="true">#</a> Vim 在插入模式中补全</h2><ol><li>ctrl + n 和 ctrl + p 补全单词</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>ctrl + n 搜索文档中出现的单词，使用前缀匹配的方式补全
ctrl + p 
</code></pre></div><ol start="2"><li>ctrl + x 和 ctrl + f 补全文件名</li></ol><p>在输入 / 之后，按快捷键 ctrl + x 和 ctrl + f 可以搜索相对文件路径</p><ol start="3"><li><code>:r! echo %</code> 插入当前的文件名</li></ol><h2 id="vim-切换主题色" tabindex="-1"><a class="header-anchor" href="#vim-切换主题色" aria-hidden="true">#</a> Vim 切换主题色</h2><p>使用<code>:colorscheme</code>显示当前主题配色</p><p>使用<code>:colorscheme &lt;ctrl+d&gt;</code> 可以显示所有的配色</p><p>用<code>:colorscheme [schemeName]</code> 可以修改配色</p><div class="custom-container tip"><p class="custom-container-title">同时打开多个文件，分屏显示</p><p><code>vim test.js test2.js -O</code> 横向分屏，跟小写的 o 纵向 <code>vim test.js test2.js -p</code> 打开多个tab页</p></div>`,63);function t(v,o){return n(),a("div",null,[s,e(" ### 插入模式下的复制粘贴 "),e(" 一般会选择用鼠标选中，然后ctrl + v 粘贴\n\n如果设置了 autoindent ，粘贴时代码缩进可能会错乱\n\n这个时候需要使用 `:set paste` 和 `:set nopaste` 解决 "),r,e(" 使用 `N` 或 `n` 跳转上一个或下一个匹配 "),e(" 使用 `*` 或 `#` 进行当前单词的前向或者后向匹配 "),e(" :set incsearch "),c])}const b=d(l,[["render",t],["__file","VIM编辑器大全(三).html.vue"]]);export{b as default};
