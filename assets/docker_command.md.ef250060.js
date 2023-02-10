import{_ as s,c as a,o as n,a as l}from"./app.376fd39b.js";const D=JSON.parse('{"title":"常用命令","description":"","frontmatter":{},"headers":[{"level":2,"title":"拉取镜像","slug":"拉取镜像","link":"#拉取镜像","children":[]},{"level":2,"title":"查看镜像列表","slug":"查看镜像列表","link":"#查看镜像列表","children":[]},{"level":2,"title":"删除镜像","slug":"删除镜像","link":"#删除镜像","children":[]},{"level":2,"title":"容器的运行/停止/删除","slug":"容器的运行-停止-删除","link":"#容器的运行-停止-删除","children":[]},{"level":2,"title":"列出正在运行的容器","slug":"列出正在运行的容器","link":"#列出正在运行的容器","children":[]},{"level":2,"title":"进入容器","slug":"进入容器","link":"#进入容器","children":[]}],"relativePath":"docker/command.md"}'),e={name:"docker/command.md"},o=l(`<h1 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-hidden="true">#</a></h1><h2 id="拉取镜像" tabindex="-1">拉取镜像 <a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">image</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="查看镜像列表" tabindex="-1">查看镜像列表 <a class="header-anchor" href="#查看镜像列表" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">images</span></span>
<span class="line"></span></code></pre></div><h2 id="删除镜像" tabindex="-1">删除镜像 <a class="header-anchor" href="#删除镜像" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rmi</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">image</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">I</span><span style="color:#A6ACCD;">D</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="容器的运行-停止-删除" tabindex="-1">容器的运行/停止/删除 <a class="header-anchor" href="#容器的运行-停止-删除" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{start</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">stop</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;">} </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">container ID</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="列出正在运行的容器" tabindex="-1">列出正在运行的容器 <a class="header-anchor" href="#列出正在运行的容器" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span></span>
<span class="line"></span></code></pre></div><h2 id="进入容器" tabindex="-1">进入容器 <a class="header-anchor" href="#进入容器" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">I</span><span style="color:#A6ACCD;">D</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span></span>
<span class="line"></span></code></pre></div>`,13),p=[o];function t(c,r,i,d,C,h){return n(),a("div",null,p)}const A=s(e,[["render",t]]);export{D as __pageData,A as default};
