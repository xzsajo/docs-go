import{_ as e,c as t,a3 as o,o as i}from"./chunks/framework.CAwIQbWu.js";const r="/assets/%E7%9B%91%E5%90%AC%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6.JQX1iL-J.png",m=JSON.parse('{"title":"微信服务端开发","description":"","frontmatter":{},"headers":[],"relativePath":"WebApp/WeChat/微信服务端开发.md","filePath":"WebApp/WeChat/微信服务端开发.md","lastUpdated":1677131045000}'),s={name:"WebApp/WeChat/微信服务端开发.md"};function d(p,a,c,n,l,h){return i(),t("div",null,a[0]||(a[0]=[o('<h1 id="微信服务端开发" tabindex="-1">微信服务端开发 <a class="header-anchor" href="#微信服务端开发" aria-label="Permalink to &quot;微信服务端开发&quot;">​</a></h1><blockquote><p>这里的笔记比较杂</p></blockquote><p>起服务，例如用 Koa 起个服务，后端请求微信提供的方法...</p><h2 id="什么是-access-token" tabindex="-1">什么是 access_token <a class="header-anchor" href="#什么是-access-token" aria-label="Permalink to &quot;什么是 access_token&quot;">​</a></h2><blockquote><p>access_token 是公众号的全局唯一票据，公众号调用各接口时都需使用 access_token。有效期为 2 小时，且一天最多只能调用 2000 次</p></blockquote><p>这样的话，access_token 必须缓存起来（不然它只有 2000 次调用）</p><p>我们定时每 1 个小时刷新一次，一天也就调用 24 次，搓搓有余了</p><p>思路是这样，调用 XX 方法，如果有缓存，用缓存的；如果没有，去调用接口</p><p>做法：每一个小时去调用一次接口</p><h2 id="什么是-jsapi-ticket" tabindex="-1">什么是 jsapi_ticket <a class="header-anchor" href="#什么是-jsapi-ticket" aria-label="Permalink to &quot;什么是 jsapi_ticket&quot;">​</a></h2><p>jsapi_ticket 是公众号用于调用微信 JS 接口的临时票据。一般为 2 小时，通过 access_token 获取。</p><p>无论是 access_token 还是 jsapi_ticket ，都需要进行缓存</p><h2 id="如何监听消息管理" tabindex="-1">如何监听消息管理？ <a class="header-anchor" href="#如何监听消息管理" aria-label="Permalink to &quot;如何监听消息管理？&quot;">​</a></h2><p>如何监听自定义菜单的点击事件？</p><p><img src="'+r+'" alt="1597714990796"></p><p>需要配置“接口配置信息”，这个配通了，就是说，微信会发消息给你</p><p>但是因为翻墙的原因，本机的 ip 获取不到，只能通过内网穿透来实现，找了 natappfree 来实现</p><p>使用 <code>koa-xml-body</code> 来解析 xml 格式文件</p><p>但是需要注意的是，<code>app.use(xmlParser());</code> 要放在 <code>app.use(bodyParser());</code> 前面</p><h2 id="内网穿透" tabindex="-1">内网穿透 <a class="header-anchor" href="#内网穿透" aria-label="Permalink to &quot;内网穿透&quot;">​</a></h2><p>为了在本机调试，需要内网穿透，本来用 natapp，但是偶尔会连接不上，又查了查，找到最好的内网穿透的工具：<strong>ngrok</strong></p><h2 id="关于-media-id" tabindex="-1">关于 media_id <a class="header-anchor" href="#关于-media-id" aria-label="Permalink to &quot;关于 media_id&quot;">​</a></h2><p>想在公众号里回复图片，视频或者图文，就要有 media_id。找了半圈，新增临时素材能获取 media_id。有效期是 3 天</p><h3 id="坑点-axios-请求怎么样也上传不了照片" tabindex="-1">坑点：axios 请求怎么样也上传不了照片 <a class="header-anchor" href="#坑点-axios-请求怎么样也上传不了照片" aria-label="Permalink to &quot;坑点：axios 请求怎么样也上传不了照片&quot;">​</a></h3><p>这里的常见错误：<a href="https://developers.weixin.qq.com/community/develop/doc/00000ef32dc64883d9d93f31f56800" target="_blank" rel="noreferrer">公众号开发 调用【上传图文消息内的图片获取 URL】接口时，返回 412 错误？</a></p><h3 id="坑点-2-微信测试号不能上传-永久-media-id-但是文档没写" tabindex="-1">坑点 2：微信测试号不能上传 永久 media_id，但是文档没写 <a class="header-anchor" href="#坑点-2-微信测试号不能上传-永久-media-id-但是文档没写" aria-label="Permalink to &quot;坑点 2：微信测试号不能上传 永久 media_id，但是文档没写&quot;">​</a></h3><p>永久素材可以一般要在有素材内容的公众号里直接拿过来</p><p><a href="https://segmentfault.com/q/1010000012972666" target="_blank" rel="noreferrer">微信公众号上传的永久素材得到的 media_id 无效</a></p><h2 id="如何让在-koa-中使用-redis-让-redis-同步" tabindex="-1">如何让在 koa 中使用 redis ，让 redis 同步 <a class="header-anchor" href="#如何让在-koa-中使用-redis-让-redis-同步" aria-label="Permalink to &quot;如何让在 koa 中使用 redis ，让 redis 同步&quot;">​</a></h2><p>加入一个库 async-redis</p><p>让它支持异步</p><h2 id="定时功能" tabindex="-1">定时功能 <a class="header-anchor" href="#定时功能" aria-label="Permalink to &quot;定时功能&quot;">​</a></h2><p>定时 node-schedule 接入，每一小时定时获取 access_token</p>',33)]))}const _=e(s,[["render",d]]);export{m as __pageData,_ as default};
