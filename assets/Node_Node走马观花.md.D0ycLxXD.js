import{_ as i,c as a,a3 as e,o as n}from"./chunks/framework.CAwIQbWu.js";const c=JSON.parse('{"title":"Node 基础","description":"","frontmatter":{},"headers":[],"relativePath":"Node/Node走马观花.md","filePath":"Node/Node走马观花.md","lastUpdated":1686819012000}'),l={name:"Node/Node走马观花.md"};function t(p,s,h,d,k,r){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="node-基础" tabindex="-1">Node 基础 <a class="header-anchor" href="#node-基础" aria-label="Permalink to &quot;Node 基础&quot;">​</a></h1><h2 id="node-是什么" tabindex="-1">Node 是什么 <a class="header-anchor" href="#node-是什么" aria-label="Permalink to &quot;Node 是什么&quot;">​</a></h2><p>Node 是 JavaScript 的一种运行环境，是一个基于 Chrome V8 引擎建立的一个平台。由于采用了事件驱动、非阻塞 I/O 的模型和单线程处理请求，这使得它非常适合处理大量并发连接、实时应用和数据密集类型的应用程序</p><ul><li>后端 Web 服务器开发与网络爬虫开发</li><li>脚手架命令行工具</li><li>图形界面应用程序开发</li></ul><h2 id="node-js-特点" tabindex="-1">Node.js 特点 <a class="header-anchor" href="#node-js-特点" aria-label="Permalink to &quot;Node.js 特点&quot;">​</a></h2><p>非阻塞 I/O</p><p>单线程</p><p>事件驱动</p><p>npm 包管理</p><p>无缓冲</p><p>可扩展</p><h2 id="node-js-发展" tabindex="-1">Node.js 发展 <a class="header-anchor" href="#node-js-发展" aria-label="Permalink to &quot;Node.js 发展&quot;">​</a></h2><ul><li>2008 V8 引擎随 Chrome 浏览器问世</li><li>2009 年 Ryan Dahl，发布了 Node.js 项目</li></ul><p><a href="https://webapplog.com/you-dont-know-node/" target="_blank" rel="noreferrer">https://webapplog.com/you-dont-know-node/</a></p><p><a href="https://github.com/Walikrence/-/blob/master/TODO/you-dont-know-node.md" target="_blank" rel="noreferrer">https://github.com/Walikrence/-/blob/master/TODO/you-dont-know-node.md</a></p><p>（13个基础核心模块）</p><h2 id="node-全局对象" tabindex="-1">Node 全局对象 <a class="header-anchor" href="#node-全局对象" aria-label="Permalink to &quot;Node 全局对象&quot;">​</a></h2><p>在浏览器中，我们有 <code>document</code> 和 <code>window</code> 等全局对象；而 Node 只包含 ECMAScript 和 V8，不包含 BOM 和 DOM，因此 Node 中不存在 <code>document</code> 和 <code>window</code>；取而代之，Node 专属的全局对象是 <code>process</code></p><h3 id="javascript-全局对象的分类" tabindex="-1">JavaScript 全局对象的分类 <a class="header-anchor" href="#javascript-全局对象的分类" aria-label="Permalink to &quot;JavaScript 全局对象的分类&quot;">​</a></h3><p>在此之前，我们先看一下 JavaScript 各个运行环境的全局对象的比较，如下图所示：</p><p><img src="https://i.loli.net/2021/08/22/HfksCreUZlO37Kx.png" alt="各个运行环境的全局对象"></p><p>可以看到 JavaScript 全局对象可以分为四类：</p><ol><li>浏览器专属，例如 <code>window</code>、<code>alert</code> 等等；</li><li>Node 专属，例如 <code>process</code>、<code>__dirname</code> 、<code>__filename</code> 等等</li><li>浏览器和 Node 共有，但是实现方式不同，例如 <code>console</code> 、<code>setTimeout</code> 、<code>setInterval</code></li><li>浏览器和 Node 共有，并且属于 ECMAScript 语言定义的一部分，例如 <code>Date</code>、<code>String</code>、<code>promise</code> 等</li></ol><h3 id="node-专属全局对象解析" tabindex="-1">Node 专属全局对象解析 <a class="header-anchor" href="#node-专属全局对象解析" aria-label="Permalink to &quot;Node 专属全局对象解析&quot;">​</a></h3><h4 id="process-进程" tabindex="-1">process 进程 <a class="header-anchor" href="#process-进程" aria-label="Permalink to &quot;process 进程&quot;">​</a></h4><p>process 全局对象可以说是 Node.js 的灵魂，它是管理当前 Node.js 进程状态的对象，提供了与操作系统的简单接口。</p><h5 id="有哪些属性" tabindex="-1">有哪些属性 <a class="header-anchor" href="#有哪些属性" aria-label="Permalink to &quot;有哪些属性&quot;">​</a></h5><ul><li><code>pid</code>：进程编号</li><li><code>env</code>：系统环境变量</li><li><code>argv</code>：命令行执行此脚本时的输入参数</li><li><code>platform</code>：当前操作系统的平台</li></ul><blockquote><p>提示</p><p>可以在 Node REPL 中尝试一下这些对象。像上面说的那样进入 REPL（你的输出很有可能跟我的不一样）：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Welcome</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Node.js</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v12.10.0.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.help&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> more</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> information.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.pid</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.platform</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;darwin&#39;</span></span></code></pre></div></blockquote><h4 id="buffer" tabindex="-1">Buffer <a class="header-anchor" href="#buffer" aria-label="Permalink to &quot;Buffer&quot;">​</a></h4><p><code>Buffer</code> 全局对象让 JavaScript 也能够轻松地处理二进数据流，结合 Node 的流接口（Stream），能够实现高效的二进制文件处理</p><h4 id="filename-和-dirname" tabindex="-1"><code>__filename</code> 和 <code>__dirname</code> <a class="header-anchor" href="#filename-和-dirname" aria-label="Permalink to &quot;\`__filename\` 和 \`__dirname\`&quot;">​</a></h4><p>分别代表当前所运行 Node 脚本的文件路径和所在目录路径</p><h4 id="module-模块" tabindex="-1">module 模块 <a class="header-anchor" href="#module-模块" aria-label="Permalink to &quot;module 模块&quot;">​</a></h4><p>Node 实现了一个简单模块记在系统。在 Node 中，文件和模块是一一对应的关系，可以理解为一个文件就是一个模块。其模块系统的实现主要依赖于全局对象 module，其中实现了 exports（导出）、require（加载）机制</p><p>简单来说，commonJS 导出的是值的拷贝，而非值的引用，这与 <a href="./../ES6/模块化历程.html">ES6 中的模块化</a>是不一样的</p><h2 id="node-中的模块机制" tabindex="-1">Node 中的模块机制 <a class="header-anchor" href="#node-中的模块机制" aria-label="Permalink to &quot;Node 中的模块机制&quot;">​</a></h2><p>之前没有模块化</p><p>模块化的历程</p><p>简单来说：</p><p>IIFE——CommonJS——AMD/CMD——ES6 模块（mjs）</p><h3 id="什么是-node-模块" tabindex="-1">什么是 Node 模块 <a class="header-anchor" href="#什么是-node-模块" aria-label="Permalink to &quot;什么是 Node 模块&quot;">​</a></h3><p>在正是分析 Node 模块机制之前，我们需要明确定义什么是 Node 模块。通常来说，Node 模块可分为两大类：</p><ul><li>核心模块：Node 提供的内置模块，在安装 Node 时已经被编译成二进制可执行文件</li><li>文件模块：用户编写的模块，可以是自己写的，也可以使通过 npm 安全的</li></ul><p>exports 对象本质上是 module.exports 的引用。也就是说，下面两行代码是等价的</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导出 add 函数</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.add </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> add;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 和上面一行代码是一样的</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.add </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> add;</span></span></code></pre></div><p>module 对象</p><p>module 在每个模块中表示对当前模块的引用。而 module.exports 又可以通过全局对象 exports 来引用。module 并不是一个全局对象，而更像一个模块内部对象</p><h5 id="module-children" tabindex="-1">module.children <a class="header-anchor" href="#module-children" aria-label="Permalink to &quot;module.children&quot;">​</a></h5><p>这个模块引入的所有模块对象</p><h5 id="module-exports" tabindex="-1">module.exports <a class="header-anchor" href="#module-exports" aria-label="Permalink to &quot;module.exports&quot;">​</a></h5><p>module.exports 通过模块系统创建。</p><h3 id="export-与-module-export-的区别" tabindex="-1">export 与 module.export 的区别 <a class="header-anchor" href="#export-与-module-export-的区别" aria-label="Permalink to &quot;export 与 module.export 的区别&quot;">​</a></h3><p>导出多个成员（必须在对象中）</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ccc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    foo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>导出多个成员也可以这样写</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    foo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;aa&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>导出单个成员（拿到的就是：函数，字符串）</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>以下情况会覆盖：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;hello&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 以这个为准，后者会覆盖前者</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 是 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的一个引用</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 等价于</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bar&#39;</span></span></code></pre></div><ul><li></li></ul><h2 id="事件触发器-events-模块" tabindex="-1">事件触发器 Events 模块 <a class="header-anchor" href="#事件触发器-events-模块" aria-label="Permalink to &quot;事件触发器 Events 模块&quot;">​</a></h2><blockquote><p>Node.js 使用了一个<strong>事件驱动</strong>、非阻塞式 I/O 的模型，使其轻量又高效</p></blockquote><p>大多数 Node.js 核心 API 都采用惯用的事件驱动架构，其中某些类型的对象（触发器）会周期性地触发命名事件来调用函数对象（监听器），那么 Node.js 是如何实现事件驱动的</p><h3 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h3><ul><li><a href="https://segmentfault.com/a/1190000021987355" target="_blank" rel="noreferrer">一杯茶的时间，上手 Node.js</a></li><li><a href="https://github.com/tuture-dev/nodejs-roadmap" target="_blank" rel="noreferrer">Node.js 后端工程师学习路径</a></li><li><a href="https://juejin.cn/post/6844904029219192839" target="_blank" rel="noreferrer">「万字整理 」这里有一份 Node.js 入门指南和实践,请注意查收</a></li><li><a href="https://mp.weixin.qq.com/s/wezc-VpKOXilEnsHvSuU9g" target="_blank" rel="noreferrer">一篇文章构建你的 NodeJS 知识体系</a></li><li><a href="https://mp.weixin.qq.com/s?__biz=MzUxNzk1MjQ0Ng==&amp;mid=2247484226&amp;idx=1&amp;sn=19ff9dc40a79d5f6afebc2ba20c1d4f3&amp;chksm=f9910593cee68c850419abfb95f7cc74a00986200fd35345115ee7edd2f203a408d845fe2701&amp;scene=21#wechat_redirect" target="_blank" rel="noreferrer">源码解读：一文彻底搞懂 Events 模块</a></li><li><a href="https://mp.weixin.qq.com/s?__biz=MzI0NTE5NzYyMw==&amp;mid=2247483885&amp;idx=1&amp;sn=eb4dd408d58774dc1587f0d6705eb8a2&amp;chksm=e9537fb5de24f6a310a36b8d46623ec534a94a5ff09d7deb6191124e14c39b0667ef465059e4&amp;mpshare=1&amp;scene=1&amp;srcid=&amp;sharer_sharetime=1575817441587&amp;sharer_shareid=778ad5bf3b27e0078eb105d7277263f6#rd" target="_blank" rel="noreferrer">Node.js 模块系统源码探微</a></li><li><a href="https://segmentfault.com/a/1190000014434944" target="_blank" rel="noreferrer">require 和 import 的区别是什么？看这个你就懂了</a></li><li><a href="https://github.com/azat-co/you-dont-know-node" target="_blank" rel="noreferrer">you-dont-know-node</a></li></ul>`,67)]))}const E=i(l,[["render",t]]);export{c as __pageData,E as default};
