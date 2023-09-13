import{_ as s,o as a,c as o,Q as p}from"./chunks/framework.26d96b30.js";const u=JSON.parse('{"title":"基本命令","description":"","frontmatter":{},"headers":[],"relativePath":"rabbitmq/command.md","filePath":"rabbitmq/command.md"}'),l={name:"rabbitmq/command.md"},e=p('<h1 id="基本命令" tabindex="-1">基本命令 <a class="header-anchor" href="#基本命令" aria-label="Permalink to &quot;基本命令&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">注意：</p><p>如果你更新了MQ消费者的相关代码，必须要重启MQ的消费进程才能生效！</p></div><h2 id="本地环境" tabindex="-1">本地环境 <a class="header-anchor" href="#本地环境" aria-label="Permalink to &quot;本地环境&quot;">​</a></h2><p>以 <code>local</code> 代码为例，其它环境请替换 <code>--user</code> 和 <code>-w</code> 参数。</p><p>进入容器：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--user</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">local</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-w</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/tke/local</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">local</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-w</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/tke/local</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">view</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bash</span></span></code></pre></div><p>创建队列：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sys/libs/logic/Util/MQ/Misc/RabbitMQUtility.php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">QueueName</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">QueueRoute</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sys/libs/logic/Util/MQ/Misc/RabbitMQUtility.php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">QueueName</span><span style="color:#24292E;"> </span><span style="color:#032F62;">QueueRoute</span></span></code></pre></div><p>消费队列：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sys/libs/logic/Util/MQ/MessageProcessor.php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">DemoTopic</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sys/libs/logic/Util/MQ/MessageProcessor.php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">DemoTopic</span></span></code></pre></div><h2 id="测试环境" tabindex="-1">测试环境 <a class="header-anchor" href="#测试环境" aria-label="Permalink to &quot;测试环境&quot;">​</a></h2><blockquote><p>在测试环境中使用 Jenkins 来启动和停止MQ消费进程。</p></blockquote><div class="tip custom-block"><p class="custom-block-title">温馨提示：</p><p>Dev环境的MQ消费进程每天凌晨都会自动停止，所以在Dev环境测试MQ的时候需要手动去开启进程！</p></div><ul><li><a href="https://jenkins.tkeasia.com/job/Dev_For_Once_Scripts/build" target="_blank" rel="noreferrer">Dev环境Jenkins</a></li><li><a href="https://jenkins.tkeasia.com/job/Dev2%20Deploy%20For%20Once%20Scripts/build" target="_blank" rel="noreferrer">Dev2环境Jenkins</a></li></ul><p>打开上面的链接，在 <code>ScriptNameList</code> 输入框中粘贴以下命令并运行（注意替换 Topic）。</p><p>以 Italy 国家为例：</p><p>启动消费进程：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">italy:::sys/libs/logic/Util/MQ/ConsumeMediator.php:start:DemoTopic</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">italy:::sys/libs/logic/Util/MQ/ConsumeMediator.php:start:DemoTopic</span></span></code></pre></div><p>停止消费进程：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">italy:::sys/libs/logic/Util/MQ/ConsumeMediator.php:stop:DemoTopic</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">italy:::sys/libs/logic/Util/MQ/ConsumeMediator.php:stop:DemoTopic</span></span></code></pre></div><p>查看消费进程（使用JumpServer）：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-ef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">DemoTopic</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-ef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">DemoTopic</span></span></code></pre></div>',22),n=[e];function t(c,r,i,y,d,E){return a(),o("div",null,n)}const F=s(l,[["render",t]]);export{u as __pageData,F as default};
