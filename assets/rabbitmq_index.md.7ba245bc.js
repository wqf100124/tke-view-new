import{_ as e,c as a,o as t,a as r}from"./app.ccf9cb68.js";const m=JSON.parse('{"title":"RabbitMQ","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFAMQ\u670D\u52A1","slug":"\u521B\u5EFAmq\u670D\u52A1","link":"#\u521B\u5EFAmq\u670D\u52A1","children":[]}],"relativePath":"rabbitmq/index.md"}'),s={name:"rabbitmq/index.md"},o=r(`<h1 id="rabbitmq" tabindex="-1">RabbitMQ <a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a></h1><blockquote><p>RabbitMQ\u662F\u5B9E\u73B0\u4E86\u9AD8\u7EA7\u6D88\u606F\u961F\u5217\u534F\u8BAE\uFF08AMQP\uFF09\u7684\u5F00\u6E90\u6D88\u606F\u4EE3\u7406\u8F6F\u4EF6\uFF08\u4EA6\u79F0\u9762\u5411\u6D88\u606F\u7684\u4E2D\u95F4\u4EF6\uFF09</p></blockquote><h2 id="\u521B\u5EFAmq\u670D\u52A1" tabindex="-1">\u521B\u5EFAMQ\u670D\u52A1 <a class="header-anchor" href="#\u521B\u5EFAmq\u670D\u52A1" aria-hidden="true">#</a></h2><p>\u5B98\u65B9\u955C\u50CF\uFF1A<a href="https://hub.docker.com/_/rabbitmq" target="_blank" rel="noreferrer">https://hub.docker.com/_/rabbitmq</a></p><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u793A</p><p>\u5982\u679C\u4F60\u7684\u672C\u5730\u6CA1\u6709\u4F7F\u7528<a href="./view.html">Local\u73AF\u5883</a>\uFF0C\u8BF7\u5148\u6267\u884C<code>docker network create --subnet=172.16.1.0/24 tke</code>\u547D\u4EE4\u6765\u521B\u5EFA\u7F51\u7EDC\u3002</p></div><p>\u521B\u5EFArabbitmq\u670D\u52A1\u5BB9\u5668</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d --name rabbitmq --restart no --network tke --ip 172.16.1.56 -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management-alpine</span></span>
<span class="line"></span></code></pre></div><p>\u7BA1\u7406\u7AEF: <a href="http://localhost:15672" target="_blank" rel="noreferrer">http://localhost:15672</a><br> \u8D26\u53F7\uFF1A<code>guest</code><br> \u5BC6\u7801\uFF1A<code>guest</code></p>`,8),c=[o];function n(i,l,d,p,b,h){return t(),a("div",null,c)}const u=e(s,[["render",n]]);export{m as __pageData,u as default};
