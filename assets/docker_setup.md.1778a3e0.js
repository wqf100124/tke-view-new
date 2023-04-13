import{_ as e,o as t,c as o,Q as r}from"./chunks/framework.db0ccc71.js";const k=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"docker/setup.md"}'),a={name:"docker/setup.md"},i=r('<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="docker-desktop" tabindex="-1">Docker Desktop <a class="header-anchor" href="#docker-desktop" aria-label="Permalink to &quot;Docker Desktop&quot;">​</a></h2><blockquote><p>Docker Desktop 是适用于 MacOS 和 Windows 机器的应用程序，用于构建和共享容器化应用程序和微服务。</p></blockquote><p>下载安装包: <a href="https://www.docker.com/get-started" target="_blank" rel="noreferrer">Docker Desktop (Windows/MacOs/Linux)</a></p><h2 id="运行方式" tabindex="-1">运行方式 <a class="header-anchor" href="#运行方式" aria-label="Permalink to &quot;运行方式&quot;">​</a></h2><p>在Windows下的两种运行方式:</p><ul><li><a href="https://docs.microsoft.com/zh-cn/windows/wsl/setup/environment" title="设置 WSL 开发环境的最佳做法" target="_blank" rel="noreferrer">WSL 2 (Linux 的 Windows 子系统)</a><ul><li>启用可选的 WSL 和虚拟机平台组件</li><li>下载并安装最新 Linux 内核</li><li>将 WSL 2 设置为默认值</li><li>下载并安装 Ubuntu/Centos/Alpine 等Linux分发</li></ul></li><li><a href="https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v" title="在 Windows 10 上安装 Hyper-V" target="_blank" rel="noreferrer">Hyper-V (Windows自带的虚拟机)</a><ul><li>Windows 10 企业版、专业版或教育版</li><li>具有二级地址转换 (SLAT) 的 64 位处理器</li><li>CPU 支持 VM 监视器模式扩展（Intel CPU 上的 VT-c）</li><li>最少 4 GB 内存</li></ul></li></ul><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>推荐使用 <code>WSL2</code> 的运行方式，可以显著地提高代码运行效率，同时对代码中的文件区分大小写。</p></div>',8),l=[i];function s(n,c,d,p,u,h){return t(),o("div",null,l)}const m=e(a,[["render",s]]);export{k as __pageData,m as default};
