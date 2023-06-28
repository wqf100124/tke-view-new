import{_ as s,o as a,c as t,R as o}from"./chunks/framework.8b9594d3.js";const y=JSON.parse('{"title":"PHPUnit","description":"","frontmatter":{},"headers":[],"relativePath":"autotest/phpunit.md","filePath":"autotest/phpunit.md"}'),p={name:"autotest/phpunit.md"},e=o('<h1 id="phpunit" tabindex="-1">PHPUnit <a class="header-anchor" href="#phpunit" aria-label="Permalink to &quot;PHPUnit&quot;">​</a></h1><blockquote><p><a href="https://phpunit.de/" target="_blank" rel="noreferrer">PHPUnit</a> 是一个面向PHP程序员的测试框架，这是一个xUnit的体系结构的单元测试框架。</p></blockquote><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>1.修改 <code>dev2</code> 代码的配置信息。请参考：<a href="/tke-view/view/live.html">运行测试环境代码</a></p><p>2.执行初始化脚本。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">autotest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/run/phpunit.sh</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意：</p><p>上面的脚本会修改底层文件 <code>autotest/phpunit/library/BaseBootstrap.php</code>，切勿提交到SVN!</p></div><h2 id="测试命令" tabindex="-1">测试命令 <a class="header-anchor" href="#测试命令" aria-label="Permalink to &quot;测试命令&quot;">​</a></h2><p>1.进入容器</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-w</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/tke/autotest/phpunit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">autotest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sh</span></span></code></pre></div><p>2.执行测试命令</p><p>以 <code>sharp/phpunit.xml</code> 配置为例：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">phpunit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--colors=auto</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sharp/phpunit.xml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--filter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ExampleTest</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div>',13),n=[e];function l(c,r,i,C,h,d){return a(),t("div",null,n)}const D=s(p,[["render",l]]);export{y as __pageData,D as default};
