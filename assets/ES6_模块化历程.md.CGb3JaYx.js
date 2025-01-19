import{_ as i,c as a,a3 as n,o as l}from"./chunks/framework.CAwIQbWu.js";const o=JSON.parse('{"title":"前端模块化历程","description":"","frontmatter":{},"headers":[],"relativePath":"ES6/模块化历程.md","filePath":"ES6/模块化历程.md","lastUpdated":1724906363000}'),p={name:"ES6/模块化历程.md"};function h(t,s,e,k,r,E){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="前端模块化历程" tabindex="-1">前端模块化历程 <a class="header-anchor" href="#前端模块化历程" aria-label="Permalink to &quot;前端模块化历程&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在李录的《文明、现代化、价值投资与中国》里，他把人类的文明史分为三大跃升阶段：即 1.0 狩猎采集文明、2.0 农业文明和 3.0 科技文明。针对 JavaScript 的模块化，笔者认为模块化历程也可类比为这样的历程。在前端页面不复杂的情况下，我们只需引入需要的库、js 文件或模块，这就像“狩猎采集文明”时，饿了去打猎、摘果子一样，及时反馈，速度 NO1；后来NodeJS 兴起，让前端有了操作文件的能力，这时候就进入了农业文明时代，这里有两个标准最为突出，一是 NodeJS 社区推崇的 CommonJS，一个是浏览器推崇的 AMD，两个之所以有所不同，是因为两者所处的位置（环境）不同；之后发展演变，ECMAScript 提出了统一标准 ESM 标准，这也是前端模块化的终点，也就是“3.0 科技文明”时代</p><p>我会在每个阶段中讲解这个时代代表性的解决方案和对应的库，让你清晰地了解前端模块化的发展历程</p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><p>狩猎采集阶段——IIFE 统治前端工程化</p><ul><li>文件、注释划分方式</li><li>函数方式</li><li>命名空间方式</li><li>IIFE（立即执行函数）</li></ul><p>农业文明阶段——CommonJS 与 AMD</p><ul><li>CommonJS（NodeJS社区定义）</li><li>AMD（异步模块定义）</li></ul><p>科技文明阶段——ESM 延续至今</p><ul><li>ESM</li><li>前端打包库的兴起</li></ul><h2 id="狩猎采集阶段——iife-统治前端工程化" tabindex="-1">狩猎采集阶段——IIFE 统治前端工程化 <a class="header-anchor" href="#狩猎采集阶段——iife-统治前端工程化" aria-label="Permalink to &quot;狩猎采集阶段——IIFE 统治前端工程化&quot;">​</a></h2><p>最开始前端是没有模块化这一说法的，但网站脚本变多后，有规模后以及要多人协助开发后才有了模块化开发</p><h3 id="文件、注释划分方式" tabindex="-1">文件、注释划分方式 <a class="header-anchor" href="#文件、注释划分方式" aria-label="Permalink to &quot;文件、注释划分方式&quot;">​</a></h3><p>字面意义，通过文件名、注释来规划你的JS代码</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 某某A模块</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 某某B模块</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span></code></pre></div><p>优点：极简</p><p>缺点：</p><ul><li>有些功能可能忘了加注释</li><li>JS 文件会越来越大</li></ul><h3 id="函数方式" tabindex="-1">函数方式 <a class="header-anchor" href="#函数方式" aria-label="Permalink to &quot;函数方式&quot;">​</a></h3><p>既然用文件和注释解决不了，那么按照功能点将它划分为多个函数方法，然后在总 main.js 中引入调用方法即可</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">signInAndOut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">userModule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">frinedModule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">feedsModule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>但一个问题：全局变量过多，也许引入的第三方脚本会和你命名的全局变量冲突，所以我们需要减少全局变量</p><p>优点：简单</p><p>缺点：</p><ul><li>全局函数名太多了</li><li>调用关系复杂，难以调整顺序</li><li>JS 文件会越来越大</li></ul><h3 id="命名空间方式" tabindex="-1">命名空间方式 <a class="header-anchor" href="#命名空间方式" aria-label="Permalink to &quot;命名空间方式&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">module1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.user.module1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">submodule1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">module2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">feeds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app. </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">signInAndOut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">friends</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>大概2010-2012年的时候有这样写代码的，现在没人这样写了</p><p>优点：占用的全局变量少（只有一个 app）</p><p>缺点：</p><ul><li>名字越来越长</li><li>依赖关系不清晰</li></ul><h3 id="iife-立即执行函数" tabindex="-1">IIFE（立即执行函数） <a class="header-anchor" href="#iife-立即执行函数" aria-label="Permalink to &quot;IIFE（立即执行函数）&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 没有名字直接执行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">axios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 内部代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}(dom, axios, time)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 有名字通过闭包导出代码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">axios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 内部代码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getUser</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        user </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;johan&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> updateUser</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        user.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;elaine&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 暴露 API</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        getUser,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        updateUser</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}(dom, axios, time)</span></span></code></pre></div><p>优点：</p><ul><li>可以有名字，也可以没有名字</li><li>可以声明<strong>依赖</strong></li><li>可以选择<strong>导出</strong>内容</li></ul><p>缺点：</p><ul><li>无法处理循环依赖</li></ul><p>在 NodeJS 出现之前，前端库都是通过 IIFE（立即执行函数）来实现的。关于 IIFE，我们之前在 JavaScript 篇的 <a href="./../JavaScript/立即执行函数（IIFE）.html">立即执行函数（IIFE）</a> 中提到过。他已经完成了一个模块化方案的基本功能，也是现代模块化实现的基石</p><h2 id="农业文明阶段——commonjs-与-amd" tabindex="-1">农业文明阶段——CommonJS 与 AMD <a class="header-anchor" href="#农业文明阶段——commonjs-与-amd" aria-label="Permalink to &quot;农业文明阶段——CommonJS 与 AMD&quot;">​</a></h2><p>在上文说了IIFE（立即执行函数）除了无法处理循环依赖外，没有什么大问题，所以在前端（浏览器端）只要不去循环依赖就没有问题（IIFE很好用不需要改革），但是在 NodeJS 社区不能这样，因为 NodeJS 没有 HTML，它不像前端在 HTML 入口处引入 JS 模块就可以，它需要在 main.js 中使用其他js文件的方法，所以 NodeJS 社区就有了 CommonJS，即自己的引入导出功能</p><h3 id="commonjs" tabindex="-1">CommonJS <a class="header-anchor" href="#commonjs" aria-label="Permalink to &quot;CommonJS&quot;">​</a></h3><p>导出模块</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUser</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果要导出整个模块</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;hi&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>引入模块</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./user.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user.x</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果导出整个模块的情况下</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// hi</span></span></code></pre></div><blockquote><p>exports 指向 <code>module.exports</code>，即 <code>exports = module.exports</code></p></blockquote><p>优点：</p><ul><li>用文件名当名字，不用全局变量</li><li>可以声明依赖</li><li>可以选择导出内容</li><li>可以循环依赖</li></ul><p>缺点：</p><ul><li>不支持异步</li></ul><p>它只能适用于 NodeJS，不适用浏览器，为什么因为引入依赖是同步的，而JS是单线程，但引入依赖时间过长时，页面会有卡顿现象</p><h3 id="amd-异步模块定义" tabindex="-1">AMD（异步模块定义） <a class="header-anchor" href="#amd-异步模块定义" aria-label="Permalink to &quot;AMD（异步模块定义）&quot;">​</a></h3><p>翻译：Async Module Definition</p><p>AMD 规范是异步加载模块，允许指定回调函数，代表函数库：<code>require.js</code></p><p><code>require.js</code> 主要解决两个问题：</p><ul><li>异步加载模块</li><li>模块之间依赖模糊</li></ul><p>特点：<strong>依赖必须提前声明好</strong></p><p>导出模块</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;require&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;exports&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;dom&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;axios&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;time&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">axios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dom.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#x&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    time.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUser</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>引入模块</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;require&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;exports&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user.getUser</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>优点：</p><ul><li>用字符串当名字，不用全局变量</li><li>可以声明依赖</li><li>可以选择导出内容</li><li>可以循环依赖</li><li>可以异步</li></ul><p>缺点：</p><ul><li>对同步的支持不如 CommonJS</li><li>没有写入 ECMAScript 文档</li></ul><h3 id="cmd" tabindex="-1">CMD <a class="header-anchor" href="#cmd" aria-label="Permalink to &quot;CMD&quot;">​</a></h3><p>CMD 是阿里的玉伯提出的，js 的函数为 <code>sea.js</code> 。它与 <code>require.js</code> 最主要的区别是实现了按需加载，推崇依赖就近原则，模块延迟执行</p><p>特点： <strong>支持动态引入依赖</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">moduke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> indexCode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./index.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>AMD 和 CMD 最大的区别是对依赖模块的执行时机处理不同</p><p>AMD：依赖前置，提前执行</p><p>CMD：依赖就近，延迟执行</p><h3 id="amd-cmd-背后的实现原理" tabindex="-1">AMD &amp;&amp; CMD 背后的实现原理 <a class="header-anchor" href="#amd-cmd-背后的实现原理" aria-label="Permalink to &quot;AMD &amp;&amp; CMD 背后的实现原理&quot;">​</a></h3><p>一种解决方 案是采用 UMD（Universal Module Definition, <a href="https://github.com/umdjs/umd%EF%BC%89%EF%BC%8C%E8%BF%99%E7%A7%8D%E6%A8%A1%E5%BC%8F%E7%9A%84%E8%AF%AD%E6%B3%95%E6%9C%89%E7%82%B9%E5%A4%8D%E6%9D%82%EF%BC%8C%E5%AE%83%E5%90%8C%E6%97%B6%E6%94%AF%E6%8C%81" target="_blank" rel="noreferrer">https://github.com/umdjs/umd），这种模式的语法有点复杂，它同时支持</a> AMD 和 CommonJS</p><h2 id="科技文明阶段——esm-延续至今" tabindex="-1">科技文明阶段——ESM 延续至今 <a class="header-anchor" href="#科技文明阶段——esm-延续至今" aria-label="Permalink to &quot;科技文明阶段——ESM 延续至今&quot;">​</a></h2><h3 id="es-modules-es-模块" tabindex="-1">ES Modules（ES 模块） <a class="header-anchor" href="#es-modules-es-模块" aria-label="Permalink to &quot;ES Modules（ES 模块）&quot;">​</a></h3><p>导入模块</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;	</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>导出模块</p><p>main.js</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { a } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./user.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a)</span></span></code></pre></div><p>user.js</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><p>优点：</p><ul><li>该支持的都支持</li><li>支持静态分析（tree-shaking）</li><li>支持按需加载（import()）</li></ul><p>缺点：</p><ul><li>不支持拼接字符串 <ul><li>与静态分析冲突</li></ul></li><li>不支持模块加载 <ul><li>与静态分析冲突</li></ul></li><li>不兼容 Node 的 CommonJS <ul><li>使用 .mjs 后缀</li></ul></li></ul><p>其模块功能主要由两个命令构成：<code>export</code>和<code>import</code></p><h3 id="前端打包库的兴起" tabindex="-1">前端打包库的兴起 <a class="header-anchor" href="#前端打包库的兴起" aria-label="Permalink to &quot;前端打包库的兴起&quot;">​</a></h3><p>Webpack-集大成者，使用 webpack 进行统一打包</p><p>对标的有 Rollup</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>笔者这里按照重点梳理</p><p>IIFE(声明即执行的函数表达式)，特点：<strong>在一个单独的函数作用于中执行代码，避免变量冲突</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})();</span></span></code></pre></div><p>CommonJS： NodeJS 中自带的模块化</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span></span></code></pre></div><p>AMD：使用 requireJS 来编写模块化，特点：<strong>依赖必须提前声明好</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./index.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // code 就是index.Js 返回的内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>CMD：使用 seaJS 来编写模块化，特点： <strong>支持动态引入依赖</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">moduke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> indexCode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./index.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>UMD：是 AMD 和 CommonJS 的糅合，跨平台的解决方案</p><p>ES Modules：现代浏览器的最终解。可以使用 <code>import</code> 关键字引入模块， 通过<code>export</code> 关键字导出模块</p><h2 id="常见面试题" tabindex="-1">常见面试题 <a class="header-anchor" href="#常见面试题" aria-label="Permalink to &quot;常见面试题&quot;">​</a></h2><h3 id="q-es-modules与-commonjs-模块的差异" tabindex="-1">Q：ES Modules与 CommonJS 模块的差异 <a class="header-anchor" href="#q-es-modules与-commonjs-模块的差异" aria-label="Permalink to &quot;Q：ES Modules与 CommonJS 模块的差异&quot;">​</a></h3><p>A：CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用</p><p>CommonJS 模块是运行时加载，ES6 模块是编译时加载（懒加载的核心）</p><h3 id="q-老浏览器-ie6之类-是不认识-es-modules-的-那-webpack-编译后的产物-es-modules-动态引入会变成什么样子" tabindex="-1">Q：老浏览器（IE6之类）是不认识 ES Modules 的，那 webpack 编译后的产物 ES Modules 动态引入会变成什么样子 <a class="header-anchor" href="#q-老浏览器-ie6之类-是不认识-es-modules-的-那-webpack-编译后的产物-es-modules-动态引入会变成什么样子" aria-label="Permalink to &quot;Q：老浏览器（IE6之类）是不认识 ES Modules 的，那 webpack 编译后的产物 ES Modules 动态引入会变成什么样子&quot;">​</a></h3><p>A：IE6 不支持 ES Modules，所以需要 Babel 将 ES6+ 代码转译成 ES5。动态引入也是 Babel 转译成其他代码（通过将动态引入转化为一个普通的脚本加载调用）</p><p>CommonJS 是同步的，因为它适用的地方是服务器端，读取文件都是毫秒级别，不需要等待多久时间，而AMD 适用的场景是浏览器端，它必须异步，因为JS是单线程，如果引入的依赖时间过长，页面会出现卡顿现象，不利于交互。所以 AMD 代码看起来很丑（因为有回调）</p><p>而 ES Modules 它虽然写的是同步的<code>import a from &#39;./a&#39;</code>，但它执行时浏览器引擎知道你是 module 代码的话就等你加载完在执行，那为什么它不会慢呢？它按需加载以及会进行静态分析</p><p>静态分析减少了不用用到的代码</p><p>按需加载，只执行这个页面所需要的代码模块</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><p><a href="https://huangxuan.me/js-module-7day/#/" target="_blank" rel="noreferrer">JavaScript 模块化七日谈</a></p></li><li><p><a href="https://zhuanlan.zhihu.com/p/265632724" target="_blank" rel="noreferrer">前端模块化的十年征程</a></p></li><li><p><a href="https://github.com/seajs/seajs/issues/269" target="_blank" rel="noreferrer">从 CommonJS 到 Sea.js</a></p></li><li><p><a href="https://github.com/seajs/seajs/issues/588" target="_blank" rel="noreferrer">前端模块化开发那点历史</a></p></li><li><p><a href="https://mp.weixin.qq.com/s?__biz=MzA4ODUzNTE2Nw==&amp;mid=2451046624&amp;idx=1&amp;sn=5e148a4785b54730e3673ba709882a24&amp;chksm=87c419f0b0b390e61fc91695c663e27ed130c28e30307d4576c43023b4bf6964ef2f56645d61&amp;mpshare=1&amp;scene=1&amp;srcid=&amp;sharer_sharetime=1576713268652&amp;sharer_shareid=778ad5bf3b27e0078eb105d7277263f6#rd" target="_blank" rel="noreferrer">JS 模块化规范总结(面试必备良药)</a></p></li><li><p><a href="https://juejin.cn/post/6844903829448687624" target="_blank" rel="noreferrer">[前端漫谈_5] 从 IIFE 聊到 Babel 带你深入了解前端模块化发展体系</a></p></li><li><p><a href="https://github.com/mqyqingfeng/Blog/issues/108" target="_blank" rel="noreferrer">ES6 系列之模块加载方案</a></p></li><li><p><a href="https://mp.weixin.qq.com/s/y4A6Wc00fmdWRWmuj0ae5g" target="_blank" rel="noreferrer">【THE LAST TIME】深入浅出 JavaScript 模块化</a></p></li><li><p><a href="https://mp.weixin.qq.com/s/XmwfKLQrRlZ4z0niz5mLJg" target="_blank" rel="noreferrer">ESModule 系列 ㈠ ：演进</a></p></li><li><p><a href="https://mp.weixin.qq.com/s/JZW6S6LLIOGrBGfbD173rQ" target="_blank" rel="noreferrer">浏览器中的 ESM</a></p></li></ul>`,116)]))}const g=i(p,[["render",h]]);export{o as __pageData,g as default};
