import{_ as i,c as a,a3 as n,o as l}from"./chunks/framework.CAwIQbWu.js";const g=JSON.parse('{"title":"模拟题九","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/book9.md","filePath":"Interview/book9.md","lastUpdated":1728624842000}'),t={name:"Interview/book9.md"};function h(p,s,k,e,E,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="模拟题九" tabindex="-1">模拟题九 <a class="header-anchor" href="#模拟题九" aria-label="Permalink to &quot;模拟题九&quot;">​</a></h1><h2 id="_1-css-样式隔离手段" tabindex="-1">1.CSS 样式隔离手段 <a class="header-anchor" href="#_1-css-样式隔离手段" aria-label="Permalink to &quot;1.CSS 样式隔离手段&quot;">​</a></h2><p>BEM</p><ul><li>BEM 命名法，不用的项目加上前缀，通过命名规则避免冲突</li></ul><p><a href="https://github.com/css-modules/css-modules" target="_blank" rel="noreferrer">CSS Modules</a></p><ul><li><p>webpack 中 开启 css modules</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;style-loader&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            modules: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 启用 CSS 模块</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div></li><li><p>通过编译生成不冲突的选择器类名</p></li><li><p><code>import styles from &quot;./styles.css&quot;; &lt;h1 class=&quot;\${styles.title}&quot;&gt;&lt;/h1&gt;</code></p></li></ul><p>CSS in JS</p><ul><li>CSS 写进 JS 中</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fstyled-components.com%2F" target="_blank" rel="noreferrer">styled-components</a></li></ul><p>预处理器</p><ul><li>同 BEM，人为规范，第三方库不受影响</li></ul><p>Shadow DOM（影子DOM）</p><ul><li>CSS 沙箱，原声支持</li></ul><p>Scroped</p><ul><li>scroped css</li><li>对所有样式加了一层 data-xxx=“应用名” 的选择器来隔离</li></ul><p>衍生问题：qiankun 微前端的CSS隔离</p><h3 id="qiankun-微前端的css隔离" tabindex="-1">qiankun 微前端的CSS隔离 <a class="header-anchor" href="#qiankun-微前端的css隔离" aria-label="Permalink to &quot;qiankun 微前端的CSS隔离&quot;">​</a></h3><p>qiankun 主要用 shadow DOM 和 scoped css 实现样式隔离</p><ul><li>shadow dom 自带样式隔离，但是 shadow dom 内的样式和外界不影响，导致挂在弹窗的样式会加不上。父应用也没法设置子应用的样式</li><li>scoped 的方案是给选择器加上一个 data-qiankun =&#39;应用名&#39; 的选择器，这样父应用能设置子应用样式，也能隔离样式，但是同样有挂在 body 的弹窗样式设置不上的问题，因为 qiankun 的 scoped 不支持全局样式</li></ul><h2 id="_2-手写柯里化" tabindex="-1">2. 手写柯里化 <a class="header-anchor" href="#_2-手写柯里化" aria-label="Permalink to &quot;2. 手写柯里化&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> curry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> argLength</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fn.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (args.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> argLength) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args2)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inner</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>用法：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> curriedAdd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> curry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(add)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curriedAdd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 6</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curriedAdd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 6</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curriedAdd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 6</span></span></code></pre></div><p>衍生：实现 add(1)(2)(3)</p><h3 id="实现-add-1-2-3" tabindex="-1">实现 add(1)(2)(3) <a class="header-anchor" href="#实现-add-1-2-3" aria-label="Permalink to &quot;实现 add(1)(2)(3)&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inner2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 6</span></span></code></pre></div><p>更多实现方法：<a href="https://github.com/lgwebdream/FE-Interview/issues/21" target="_blank" rel="noreferrer">实现 add(1)(2)(3)</a></p><h2 id="_3-javascript-基础-数据类型有哪些" tabindex="-1">3.JavaScript 基础：数据类型有哪些 <a class="header-anchor" href="#_3-javascript-基础-数据类型有哪些" aria-label="Permalink to &quot;3.JavaScript 基础：数据类型有哪些&quot;">​</a></h2><p>基本类型和引用类型</p><p>基本类型：string、number、boolean、undefined、null、symbol、bigint</p><p>应用类型：object</p><p>衍生问题：基本类型和引用类型的区别、判断数据类型的方法</p><h3 id="基本类型和引用类型的区别" tabindex="-1">基本类型和引用类型的区别 <a class="header-anchor" href="#基本类型和引用类型的区别" aria-label="Permalink to &quot;基本类型和引用类型的区别&quot;">​</a></h3><p>基本类型存在栈内存中</p><p>引用类型存在堆内存中</p><h3 id="判断数据类型的方法" tabindex="-1">判断数据类型的方法 <a class="header-anchor" href="#判断数据类型的方法" aria-label="Permalink to &quot;判断数据类型的方法&quot;">​</a></h3><ul><li>typeof</li><li>instanceof</li><li>constructor</li><li>Object.prototype.toString.call()</li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">能检测</th><th style="text-align:left;">不能检测</th></tr></thead><tbody><tr><td style="text-align:left;">typeof</td><td style="text-align:left;">string、number、boolean、undefined 以及 function</td><td style="text-align:left;">null 以及除 function 外的对象，结果都为 object</td></tr><tr><td style="text-align:left;">instanceof</td><td style="text-align:left;">能判断引用数据类型</td><td style="text-align:left;">不能判断基础数据类型</td></tr><tr><td style="text-align:left;">constructor</td><td style="text-align:left;">string、number、boolean、array、object、function 以及 构造函数</td><td style="text-align:left;">undefined、null。不安全，因为指向可以改变</td></tr><tr><td style="text-align:left;">Object.prototype.toString()</td><td style="text-align:left;">内置（原生）构造函数</td><td style="text-align:left;">自定义构造函数</td></tr></tbody></table><h2 id="_4-es6至es12的新特性" tabindex="-1">4. ES6至ES12的新特性 <a class="header-anchor" href="#_4-es6至es12的新特性" aria-label="Permalink to &quot;4. ES6至ES12的新特性&quot;">​</a></h2><ul><li>ES7 的 <code>Array.prototype.includes()</code> 、 <code>**</code> （指数运算符）</li><li>ES8 的 async/await 、String padding: <code>padStart()</code>和<code>padEnd()</code> 、 <code>Object.values()</code></li><li>ES9 的 Rest/Spread 属性、for await of、 <code>Promise.finally()</code></li><li>ES10 的 <code>Array.prototype.flat()</code> 、 <code>Array.prototype.flatMap()</code> 、String 的 <code>trimStart()</code> <code>trimEnd()</code></li><li>ES11 的 <code>Promise.allSettled</code> 、空值处理及可选链</li><li>ES12 的逻辑赋值操作符、数字分隔符、 <code>Promise.any()</code></li></ul><p>空值处理及可选链重点关注</p><h2 id="_5-说说react-router有几种模式-实现原理" tabindex="-1">5.说说React Router有几种模式？实现原理？ <a class="header-anchor" href="#_5-说说react-router有几种模式-实现原理" aria-label="Permalink to &quot;5.说说React Router有几种模式？实现原理？&quot;">​</a></h2><p>共三种。</p><ul><li>HashRouter</li><li>HistoryRouter</li><li>MemoryRouter <ul><li>适用于测试以及非浏览器环境（如React Native）</li></ul></li></ul><p>React Router实现原理：</p><ul><li>监听记录路由变化 <ul><li>通过 <code>history</code> 库来屏蔽不同模式下载监听实现上的差异，并将路由信息以 <code>context</code> 的形式，传入给被<code>&lt;Router&gt;</code> 包裹的组件</li></ul></li><li>匹配路由变化并渲染内容 <ul><li>通过 <code>path-to-regexp</code> 来实现匹配和渲染，<code>&lt;Route&gt;</code> 作为高阶组件包裹业务组件，通过比较当前路由和传入的 path，以不同的优先级来渲染对应组件</li></ul></li></ul><p>其中被问的最多的是如何监听路由变化，在此之前要普及一个知识点，就是在单页面应用中，项目只有一个 HTML，其页面路由由前端实现，即我们需要监听路由并展示不同的页面模块，而要实现改变 url 且不刷新的方法有1.ajax；2.hash；3.history。其中 ajax 实现起来比较麻烦，所以在应用中使用最多的是 hash 和 history 方案</p><p>其两种方案对比</p><p>hash 模式</p><ul><li>通过监听 hashchange 事件，匹配 hash 值并渲染页面模块</li></ul><p>history 模式</p><ul><li>利用 <code>history.pushState</code> + <code>popState</code> 实现</li><li><code>history.pushState</code> 能实现不刷新页面，但往历史栈中新增一个记录</li><li><code>popState</code> 则会在历史记录条目被更改时，触发</li><li><code>pushState</code> 只会改变历史栈，修改它没有什么API可以监听，所以要与 <code>popState</code>配合</li></ul><p>衍生问题：手写订阅发布、使用 history 模式服务器需要做什么</p><h3 id="手写订阅发布" tabindex="-1">手写订阅发布 <a class="header-anchor" href="#手写订阅发布" aria-label="Permalink to &quot;手写订阅发布&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eventEmitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.event </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.event[type]) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.event[type] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [callback]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.event[type].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(callback)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.event[type]) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.event[type] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.event[type].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.event[type]) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.event[type].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            callback.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, args)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    once</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(type, f)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(type, f)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>示例：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> eventEmitter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventEmitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 订阅事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">eventEmitter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;公众号&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`我订阅了\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 发布事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">eventEmitter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;公众号&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">， </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;随朱波流&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="使用-history-模式服务器需要做什么" tabindex="-1">使用 history 模式服务器需要做什么 <a class="header-anchor" href="#使用-history-模式服务器需要做什么" aria-label="Permalink to &quot;使用 history 模式服务器需要做什么&quot;">​</a></h3><p>nginx 需要配合，遇到任何 404 页面，都重定向首页，相当于把路由权限给前端做判断。必须依赖服务器让 url 都映射到 index.html</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_6-react-如何实现-react-的-keep-alive" tabindex="-1">6.React：如何实现 React 的 keep-alive <a class="header-anchor" href="#_6-react-如何实现-react-的-keep-alive" aria-label="Permalink to &quot;6.React：如何实现 React 的 keep-alive&quot;">​</a></h2><p>什么是 keep-alive：</p><p>在 Vue 中，keep-alive 用于缓存不活跃的组件实例，避免在路由切换时重新请求数据或重置状态</p><p>React 中如何实现</p><p>目前 React 没有官方的 keep-alive 解决方案（说是在后续的 React19 中会更新），做粗暴的解决方案是 <code>display：none</code> 隐藏组件</p><p>行之有效的方法：使用 Portals 实现 keep-alive</p><ul><li>通过创建一个内容中的 DOM 元素，并使用 React.DOM.createPortal 将子节点渲染到这个元素上，可以实现不显示组件的同时，保持组件状态</li><li>封转一个 Conditional 组件，通过控制 active 属性，动态将字组件添加和移除出 DOM</li><li>为了避免初次渲染时无论<code>active</code>状态如何都渲染子组件，引入了<code>activatedRef</code>来记录组件是否被激活过，只有在激活后才渲染子组件（懒加载）</li></ul><h2 id="_7-前端安全-xss攻击是什么" tabindex="-1">7.前端安全：XSS攻击是什么 <a class="header-anchor" href="#_7-前端安全-xss攻击是什么" aria-label="Permalink to &quot;7.前端安全：XSS攻击是什么&quot;">​</a></h2><p>XSS 攻击，即跨站脚本攻击（Cross-Site Scripting），是一种网络安全漏洞</p><p>前端最熟悉的攻击方式</p><p>攻击方式：在页面展示内容中掺杂 JS 代码，以获得页面信息</p><ul><li>url参数注入</li><li>输入框注入 <ul><li>例如，在评论区插入恶意 JS 代码，当其他用户查看这些评论时，代码就会在他们的浏览器中执行</li></ul></li></ul><p>预防措施</p><ul><li>对输入进行格式校验</li><li>过滤 <code>&lt;script&gt;, &lt;iframe&gt;</code> 等特殊标签，过滤 onclick，onerror，onfocus 等 js 事件属性</li><li>对要渲染的内容做编码转译</li><li>限制输入长度，cookie 设置成 http only</li></ul><p>攻击危害：窃取 cookie、劫持流量、插入广告、植入木马、获取用户信息</p><p>衍生问题：crsf 是什么</p><h3 id="crsf-是什么" tabindex="-1">crsf 是什么 <a class="header-anchor" href="#crsf-是什么" aria-label="Permalink to &quot;crsf 是什么&quot;">​</a></h3><p>Crsf 攻击，即跨站请求伪造（Cross-Site request forgery），攻击者利用用户身份，在用户不知情的情况下，诱导浏览器向受信任的网站发送未授权的请求</p><p>防御措施</p><p>为了防止CSRF攻击，开发者可以采取以下措施：</p><ul><li><strong>使用CSRF Token</strong>：在表单提交时生成一个唯一的token，并在服务端进行验证，确保请求的合法性。</li><li><strong>设置HTTP Referer检查</strong>：验证请求的来源，确保请求是来自信任的域名。</li><li><strong>使用双重确认操作</strong>：在进行关键操作时要求用户进行额外的确认，以确保是用户的真实意图。</li></ul><h3 id="xss-和-crsf-的区别" tabindex="-1">xss 和 crsf 的区别 <a class="header-anchor" href="#xss-和-crsf-的区别" aria-label="Permalink to &quot;xss 和 crsf 的区别&quot;">​</a></h3><p>XSS 侧重于脚本，千方百计的注入并执行恶意脚本</p><p>CSRF 不注入恶意脚本，侧重于请求伪造，在用户不知情的情况下，借用户的名义干坏事</p><h2 id="_8-tree-shaking-是什么" tabindex="-1">8.tree shaking 是什么 <a class="header-anchor" href="#_8-tree-shaking-是什么" aria-label="Permalink to &quot;8.tree shaking 是什么&quot;">​</a></h2><p>Tree shaking字面意就是“摇树”，将没有使用到的代码全部抖落下来，删除没有使用的代码，从而减少代码体积</p><p>如何开启</p><ul><li>配置 <code>optimization.usedExports</code> 为 <code>true</code>，启动 tree shaking 功能</li></ul><h3 id="原理是什么" tabindex="-1">原理是什么 <a class="header-anchor" href="#原理是什么" aria-label="Permalink to &quot;原理是什么&quot;">​</a></h3><p>简单来说，根据 ES Modules 的静态分析。通过 AST 将用不到的函数进行移除，从而减小打包体积。</p><p>ES6 模块依赖关系是确定的，和运行时的状态无关，它会进行静态分析</p><h2 id="_9-webpack-工作原理是什么-工作流程是怎么样的" tabindex="-1">9.webpack 工作原理是什么，工作流程是怎么样的 <a class="header-anchor" href="#_9-webpack-工作原理是什么-工作流程是怎么样的" aria-label="Permalink to &quot;9.webpack 工作原理是什么，工作流程是怎么样的&quot;">​</a></h2><h2 id="_10-算法题-爬楼梯" tabindex="-1">10.算法题：爬楼梯 <a class="header-anchor" href="#_10-算法题-爬楼梯" aria-label="Permalink to &quot;10.算法题：爬楼梯&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> climbStairs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, q </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> q;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        q </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> q;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,93)]))}const y=i(t,[["render",h]]);export{g as __pageData,y as default};
