import{_ as e,o as a,c as s,e as n}from"./app.5c415221.js";const i={},d=n(`<h1 id="express应用" tabindex="-1"><a class="header-anchor" href="#express应用" aria-hidden="true">#</a> express应用</h1><h2 id="记录一次express应用的开发" tabindex="-1"><a class="header-anchor" href="#记录一次express应用的开发" aria-hidden="true">#</a> 记录一次Express应用的开发</h2><p>这个时代每天都在变化，随着大前端时代的来临，前端框架三足鼎立，还有各种类库，预编译语言，打包工具的应用等等，越来越多的应用基于Node.js环境构建，一直以来都是使用Node.js进行前端工程化开发，但是这肯定满足不了程序员的追求，是时候来开发后台部分的应用了。 我选择使用express框架来构建项目，开始。</p><h2 id="express" tabindex="-1"><a class="header-anchor" href="#express" aria-hidden="true">#</a> Express</h2><p>官方对它的介绍是“基于nodejs平台，快速、开放、极简的web开发框架”.</p><h3 id="安裝" tabindex="-1"><a class="header-anchor" href="#安裝" aria-hidden="true">#</a> 安裝</h3><h4 id="安装express" tabindex="-1"><a class="header-anchor" href="#安装express" aria-hidden="true">#</a> 安装express</h4><div class="language-cmd" data-ext="cmd"><pre class="language-cmd"><code>npm install express --save
</code></pre></div><h4 id="使用express生成器工具" tabindex="-1"><a class="header-anchor" href="#使用express生成器工具" aria-hidden="true">#</a> 使用express生成器工具</h4><ul><li>Express 应用程序生成器</li></ul><div class="language-cmd" data-ext="cmd"><pre class="language-cmd"><code>npm install express-generator -g
</code></pre></div><ul><li>利用脚手架工具快速生成 Express 应用</li></ul><div class="language-cmd" data-ext="cmd"><pre class="language-cmd"><code>express appName
</code></pre></div><ul><li>安装依赖</li></ul><div class="language-cmd" data-ext="cmd"><pre class="language-cmd"><code>cd expressProject  
npm install
</code></pre></div><ul><li>运行</li></ul><div class="language-cmd" data-ext="cmd"><pre class="language-cmd"><code>npm start 或 node ./bin/www
</code></pre></div><ul><li>查看 在浏览器输入<code>http://localhost:3000</code>,页面显示： Express<br> Welcome to Express</li></ul><p>在终端中，会打印HTTP请求日志（该打印日志与模块morgan有关）</p><blockquote><p>其中200表明请求被正常处理，304表明服务器允许请求访问资源；<br> 如果想要更改访问的端口号，找到目录 bin/www 修改 port 变量的端口号</p></blockquote><h4 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>expressProject/
├── app.js               # 入口文件
├── bin                  # 命令文件
│   └── www
├── package.json         # 工程依赖配置文件
├── public               # 静态资源目录
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes               # 路由文件
│   ├── index.js
│   └── users.js
└── views                # 视图模板文件
    ├── error.jade
    ├── index.jade
    └── layout.jade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>package.json<br> 通过package.json来管理整个项目的依赖以及一些信息的初始化</p></li><li><p>中间件<br> 在express中，通常在收到请求后和发送响应之前这个阶段执行的一些函数，这个叫做中间件。中间件将处理过程进行划分，并且使用多个函数构成一个完整的处理流程。在app.js中我们可以使用<code>app.use</code>来使用某个中间件。其原型如下：</p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span>path<span class="token punctuation">,</span><span class="token punctuation">]</span> <span class="token keyword">function</span> <span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><ul><li><p>路由<br> 在express中，提供一个Router对象来针对GET、POST等处理路由，通常把它传给<code>app.use</code></p></li><li><p>模板渲染<br> 上面介绍了使用路由来对路径的解析和拦截，但是如何在拦截到请求路径的时候，将界面渲染出来呢，这个时候就需要使用模版引擎了。express初始化的时候给我们设置了使用 jade 的模版引擎进行渲染，如index.jade。</p></li></ul><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><h4 id="app对象方法" tabindex="-1"><a class="header-anchor" href="#app对象方法" aria-hidden="true">#</a> app对象方法</h4><ul><li>路由HTTP请求；例如，app.METHOD和app.param</li><li>配置中间件；app.router</li><li>渲染HTML视图；app.render</li><li>注册模板引擎；app.engine</li></ul>`,28),l=[d];function r(p,c){return a(),s("div",null,l)}const o=e(i,[["render",r],["__file","express应用.html.vue"]]);export{o as default};
