import{_ as e,o as a,c as i,e as d}from"./app.5c415221.js";const n={},r=d(`<h2 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h2><h3 id="创建文件夹或文件" tabindex="-1"><a class="header-anchor" href="#创建文件夹或文件" aria-hidden="true">#</a> 创建文件夹或文件</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>mkdir html
</code></pre></div><h3 id="移动文件" tabindex="-1"><a class="header-anchor" href="#移动文件" aria-hidden="true">#</a> 移动文件</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>mv dist/* /var/www/html/
</code></pre></div><p>mv可以移动文件也可重命名，例如：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// 将/a目录移动到/b下，并重命名为c
mv /a /b/c
</code></pre></div><h3 id="rename重命名" tabindex="-1"><a class="header-anchor" href="#rename重命名" aria-hidden="true">#</a> rename重命名</h3><p>rename命令用字符串替换的方式批量改变文件名</p><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>rename (参数)
</code></pre></div><h4 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h4><ul><li><p>将main1.c重命名为main.c rename main1.c main.c main1.c</p></li><li><p>原字符串：将文件名需要替换的字符串；</p></li><li><p>目标字符串：将文件名中含有的原字符替换成目标字符串；</p></li><li><p>文件：指定要改变文件名的文件列表。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rename [ -v ] [ -n ] [ -f ] perlexpr [ files ]

-v(verbose)打印被成功重命名的文件
-n(no-act)只是显示将被重命名的文件，而不重命名(重命名之前可以用-n确认需要重命名的文件)
-f(force)覆盖已经存在的文件
perlexprPerl语言格式的正则表达式
files需要被替换的文件(比如*.c、*.h)，如果没给出文件名，将从标准输入读
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除文件夹或文件" tabindex="-1"><a class="header-anchor" href="#删除文件夹或文件" aria-hidden="true">#</a> 删除文件夹或文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 删除文件夹
rm -rf dist

// 删除文件
rm -f dist.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>// 解压zip文件
unzip dist.zip -d /var/www/html/
</code></pre></div>`,18),t=[r];function s(l,c){return a(),i("div",null,t)}const v=e(n,[["render",s],["__file","文件操作.html.vue"]]);export{v as default};
