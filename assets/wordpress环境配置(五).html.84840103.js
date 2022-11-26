import{_ as e,o as n,c as r,e as s}from"./app.5c415221.js";const a={},i=s(`<h1 id="搭建web服务器环境" tabindex="-1"><a class="header-anchor" href="#搭建web服务器环境" aria-hidden="true">#</a> 搭建Web服务器环境</h1><h2 id="服务器解决方案" tabindex="-1"><a class="header-anchor" href="#服务器解决方案" aria-hidden="true">#</a> 服务器解决方案</h2><p>LAMP Linux + Apache + Mysql + Php</p><p>LNMP Linux + Nginx + Mysql + Php</p><p>终端工具</p><h2 id="ubuntu-server管理员权限解读" tabindex="-1"><a class="header-anchor" href="#ubuntu-server管理员权限解读" aria-hidden="true">#</a> Ubuntu Server管理员权限解读</h2><p>为了安全考虑，Ubuntu官方不推荐使用root账户远程登录</p><p>普通账户没有管理员权限</p><p>默认情况下root账户密码为空并且在终端中不允许无密码登录，所以默认情况下root账户无法登录</p><h3 id="切换到超级管理员" tabindex="-1"><a class="header-anchor" href="#切换到超级管理员" aria-hidden="true">#</a> 切换到超级管理员</h3><p>su (Switch User) 切换到超级管理员</p><p>sudo (Switch User and DO) 以超级管理员身份执行</p><p><strong>su命令</strong>：当前用户身份完全切换到root账户，使用root账户密码登录，除非执行exit退出登录，否则超级权限将一直有效</p><p><strong>sudo命令</strong>：当前用户身份没有改变，使用自身密码获得授权，超级权限是临时的</p><p><strong>优缺点</strong>： sudo弥补了su产生的多账户安全问题，使用su命令必须得知道root账户的密码，sudo使得普通管理员使用自己的密码也可以获得超级管理员权限</p><h3 id="ubuntu-命令行" tabindex="-1"><a class="header-anchor" href="#ubuntu-命令行" aria-hidden="true">#</a> Ubuntu 命令行</h3><p>登录进终端后，会显示主机信息，下面以root账户为例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@ubuntu:~#

root: 用户名

@ubuntu: 主机名

~: 当前目录，Ubuntu为每一个普通用户创建了一个和账户名称相同的目录作为个人文件夹，只有在当前目录才会显示&quot;~&quot;，处于其他目录会显示真实路径

#: 表示超级管理员，&quot;$&quot; 表示普通用户

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),t=[i];function d(u,o){return n(),r("div",null,t)}const l=e(a,[["render",d],["__file","wordpress环境配置(五).html.vue"]]);export{l as default};
