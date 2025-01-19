import{_ as a,c as s,a3 as n,o as l}from"./chunks/framework.CAwIQbWu.js";const g=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"DevOps/Nginx/index.md","filePath":"DevOps/Nginx/index.md","lastUpdated":1689129965000}'),e={name:"DevOps/Nginx/index.md"};function t(p,i,h,r,o,d){return l(),s("div",null,i[0]||(i[0]=[n(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><blockquote><p>学习一个东西之前，首先在大脑中积累充分的”疑惑感“。即弄清面临的问题到底是什么，在浏览方法本身之前，最好先使劲问问自己都想到什么方法。一个公认的事实是，你对问题的疑惑越大，在之前做的自己的思考越多，当看到解答之后印象就越深刻 ——李未鹏</p></blockquote><p>在写这篇文章之前，我已经做过一些 Nginx 配置了，已经在服务器上倒腾了一些时间，知道反向代理，负载均衡</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localhost;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/usr/share/nginx/html/dist;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$uri $uri/ /index.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /rest </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://127.0.0.1:8000/rest;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这是很简单的 Nginx 配置，</p><p>我的疑问也有很多，如</p><ul><li>Nginx 还有那些未尝试的好用的配置，如 gzip 压缩</li><li>https 和 http2 的配置是怎么样</li><li>如何在 Nginx 做缓存，其中 http 缓存知识请移步 http 系列文章</li><li>强缓存怎么配，协议缓存怎么配？最佳实践是什么？</li><li>Nginx 的架构是怎么样的？一直说它是轻架构的服务器，那么它的源码难吗（好像是用 C 写的）</li><li>如何做到前端代码部署上去后（使用 ftp 形式上传到指定文件），能访问到最新代码，js、css 打 hash？（移步部署）</li><li>如果在代码部署后，在微信中打开清楚缓存，等稳定了关闭缓存</li></ul><h2 id="nginx-是什么" tabindex="-1">Nginx 是什么？ <a class="header-anchor" href="#nginx-是什么" aria-label="Permalink to &quot;Nginx 是什么？&quot;">​</a></h2><p>nginx 教程</p><p><a href="https://github.com/jaywcjlove/nginx-tutorial" target="_blank" rel="noreferrer">https://github.com/jaywcjlove/nginx-tutorial</a></p><h2 id="nginx-报错" tabindex="-1">nginx 报错 <a class="header-anchor" href="#nginx-报错" aria-label="Permalink to &quot;nginx 报错&quot;">​</a></h2><p>去 <code>error.log</code> 里查看日志</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tail</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error.log</span></span></code></pre></div><p>Nginx 是主流的、开源的、高性能的 HTTP 和反向代理 web 服务器，可以用于挂载网站、请求转发、负载均衡、网关路由等。前后端开发同学都需要学习，在后端开发的面试中有时会考到。</p><h4 id="知识" tabindex="-1"><a href="https://luxian.yupi.icu/#/roadmap/Java%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF?id=%E7%9F%A5%E8%AF%86-16" target="_blank" rel="noreferrer">知识</a> <a class="header-anchor" href="#知识" aria-label="Permalink to &quot;[知识](https://luxian.yupi.icu/#/roadmap/Java学习路线?id=知识-16)&quot;">​</a></h4><ul><li>Nginx 作用</li><li>正向代理</li><li>反向代理（负载均衡）</li><li>常用命令</li><li>配置</li><li>动静分离（网站部署）</li><li>集群搭建</li><li>相关技术：HAProxy、Apache</li></ul><h4 id="学习建议" tabindex="-1"><a href="https://luxian.yupi.icu/#/roadmap/Java%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF?id=%E5%AD%A6%E4%B9%A0%E5%BB%BA%E8%AE%AE-17" target="_blank" rel="noreferrer">学习建议</a> <a class="header-anchor" href="#学习建议" aria-label="Permalink to &quot;[学习建议](https://luxian.yupi.icu/#/roadmap/Java学习路线?id=学习建议-17)&quot;">​</a></h4><p>Nginx 的基本使用非常简单，甚至不需要看任何的视频，跟着一篇文章就能够用它来提供网站访问能力、实现反向代理。</p><p>但是在企业中，Nginx 的使用往往没那么简单，作为负载均衡、请求转发的重要组件，往往需要针对实际场景去写一些特定的配置。因此建议有时间的话，实践下 Nginx 的配置方法，了解 Nginx 基本的设计思想，对今后自己设计系统时也有帮助。</p><h4 id="经典面试题" tabindex="-1"><a href="https://luxian.yupi.icu/#/roadmap/Java%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF?id=%E7%BB%8F%E5%85%B8%E9%9D%A2%E8%AF%95%E9%A2%98-12" target="_blank" rel="noreferrer">经典面试题</a> <a class="header-anchor" href="#经典面试题" aria-label="Permalink to &quot;[经典面试题](https://luxian.yupi.icu/#/roadmap/Java学习路线?id=经典面试题-12)&quot;">​</a></h4><ol><li>Nginx 有哪些作用？</li><li>Nginx 为什么支持高并发？</li><li>Nginx 有哪些负载均衡策略？</li><li>什么是 Nginx 惊群问题，如何解决它？</li></ol><h4 id="资源" tabindex="-1"><a href="https://luxian.yupi.icu/#/roadmap/Java%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF?id=%E8%B5%84%E6%BA%90-17" target="_blank" rel="noreferrer">资源</a> <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;[资源](https://luxian.yupi.icu/#/roadmap/Java学习路线?id=资源-17)&quot;">​</a></h4><ul><li>视频 <ul><li>⭐ 尚硅谷 - Nginx 教程由浅入深：<a href="https://www.bilibili.com/video/BV1zJ411w7SV" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1zJ411w7SV</a> （讲的比较全面）</li><li>⭐ Nginx 鱼皮 - 手把手带你从0搭建个人网站：<a href="https://www.bilibili.com/video/BV1rU4y1J785/" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1rU4y1J785/</a> （简单演示 Nginx 部署网站）</li></ul></li><li>文档 <ul><li>Nginx 中文文档：<a href="https://www.nginx.cn/doc/index.html" target="_blank" rel="noreferrer">https://www.nginx.cn/doc/index.html</a></li></ul></li><li>工具 <ul><li>Nginx 配置在线生成：<a href="https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN" target="_blank" rel="noreferrer">https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN</a></li></ul></li></ul><p><a href="https://www.yuque.com/aceld/fpknid/avhs14" target="_blank" rel="noreferrer">https://www.yuque.com/aceld/fpknid/avhs14</a></p>`,24)]))}const c=a(e,[["render",t]]);export{g as __pageData,c as default};
