import{_ as s,c as a,o as n,a as l}from"./app.376fd39b.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"在Docker中下载并运行View镜像","slug":"在docker中下载并运行view镜像","link":"#在docker中下载并运行view镜像","children":[]}],"relativePath":"view/backup.md"}'),p={name:"view/backup.md"},o=l(`<h2 id="在docker中下载并运行view镜像" tabindex="-1">在Docker中下载并运行View镜像 <a class="header-anchor" href="#在docker中下载并运行view镜像" aria-hidden="true">#</a></h2><p>1.打开一个终端窗口</p><p>2.使用下面的 <code>docker network create</code> 命令在Docker中创建类型为 <code>bridge</code> 的网络:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">network</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--subnet=172.16.1.0/24</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tke</span></span>
<span class="line"></span></code></pre></div><p>3.使用下面的 <code>docker run</code> 命令将其作为Docker中的容器运行:</p><p>Windows</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">view</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">--network</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tke</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">--ip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">172.16.1.80</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">--restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">本机local代码目</span><span style="color:#A6ACCD;">录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">:/home/tke/local</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">本机preview代码目</span><span style="color:#A6ACCD;">录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">:/home/tke/preview</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">本机dev2代码目</span><span style="color:#A6ACCD;">录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">:/home/tke/dev2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">本机rc代码目</span><span style="color:#A6ACCD;">录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">:/home/tke/rc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">本机live代码目</span><span style="color:#A6ACCD;">录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">:/home/tke/live</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">rtwadewang/view:1.0.2</span></span>
<span class="line"></span></code></pre></div><p>MacOS/Linux</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">view</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--network</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tke</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--ip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">172.16.1.80</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">本机local代码目</span><span style="color:#A6ACCD;">录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">:/home/tke/local</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">本机preview代码目</span><span style="color:#A6ACCD;">录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">:/home/tke/preview</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">本机dev2代码目</span><span style="color:#A6ACCD;">录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">:/home/tke/dev2</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">本机rc代码目</span><span style="color:#A6ACCD;">录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">:/home/tke/rc</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">本机live代码目</span><span style="color:#A6ACCD;">录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">:/home/tke/live</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">rtwadewang/view:1.0.2</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function t(c,C,r,y,D,A){return n(),a("div",null,e)}const E=s(p,[["render",t]]);export{F as __pageData,E as default};
