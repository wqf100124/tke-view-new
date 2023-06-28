import{_ as s,o as a,c as e,R as n}from"./chunks/framework.8b9594d3.js";const D=JSON.parse('{"title":"基础命令","description":"","frontmatter":{},"headers":[],"relativePath":"view/command.md","filePath":"view/command.md"}'),o={name:"view/command.md"},l=n('<h1 id="基础命令" tabindex="-1">基础命令 <a class="header-anchor" href="#基础命令" aria-label="Permalink to &quot;基础命令&quot;">​</a></h1><h2 id="进入容器" tabindex="-1">进入容器 <a class="header-anchor" href="#进入容器" aria-label="Permalink to &quot;进入容器&quot;">​</a></h2><p>进入 view 容器</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">view</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span></span></code></pre></div><p>如果本地使用的是 <a href="https://hub.docker.com/r/rtwadewang/view/tags" target="_blank" rel="noreferrer">alpine</a> 镜像，应该使用 <code>sh</code> 命令</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">view</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sh</span></span></code></pre></div><h2 id="容器的启停" tabindex="-1">容器的启停 <a class="header-anchor" href="#容器的启停" aria-label="Permalink to &quot;容器的启停&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{start</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">stop</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">restart}</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">view</span></span></code></pre></div><h2 id="删除容器" tabindex="-1">删除容器 <a class="header-anchor" href="#删除容器" aria-label="Permalink to &quot;删除容器&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">view</span></span></code></pre></div><h2 id="删除镜像" tabindex="-1">删除镜像 <a class="header-anchor" href="#删除镜像" aria-label="Permalink to &quot;删除镜像&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rmi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rtwadewang/view</span></span></code></pre></div>',12),t=[l];function p(c,r,i,C,d,h){return a(),e("div",null,t)}const A=s(o,[["render",p]]);export{D as __pageData,A as default};
