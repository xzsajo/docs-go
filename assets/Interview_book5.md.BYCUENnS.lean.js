import{_ as i,c as a,a3 as n,o as l}from"./chunks/framework.CAwIQbWu.js";const o=JSON.parse('{"title":"模拟题五","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/book5.md","filePath":"Interview/book5.md","lastUpdated":1728624842000}'),e={name:"Interview/book5.md"};function t(p,s,h,k,r,E){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="模拟题五" tabindex="-1">模拟题五 <a class="header-anchor" href="#模拟题五" aria-label="Permalink to &quot;模拟题五&quot;">​</a></h1><h2 id="_1-css-选择器有哪些" tabindex="-1">1.CSS 选择器有哪些 <a class="header-anchor" href="#_1-css-选择器有哪些" aria-label="Permalink to &quot;1.CSS 选择器有哪些&quot;">​</a></h2><p>id 选择器、class 选择器、标签选择器、通用选择器、属性选择器、相连选择器、子选择器、后代选择器、伪类选择器</p><h2 id="_2-手写-object-create" tabindex="-1">2. 手写 Object.create <a class="header-anchor" href="#_2-手写-object-create" aria-label="Permalink to &quot;2. 手写 Object.create&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">proto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> F</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    F</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> proto</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> F</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>相关文章：<a href="./../JavaScript/Object.create.html">Object.create</a></p><h2 id="_3-作用域" tabindex="-1">3. 作用域 <a class="header-anchor" href="#_3-作用域" aria-label="Permalink to &quot;3. 作用域&quot;">​</a></h2><p>JavaScript 的作用域是词法作用域，其特点是在那里定义它就作用在那里，与定义位置有关而与调用位置无关</p><p>作用域分为全局作用域、函数作用域、块级作用域</p><p>全局作用域顾名思义，全局中只有一个</p><p>函数作用域只作用于函数中，函数内的变量函数外不能调用。</p><p>块级作用域仅在 let、const 声明时才会形成</p><p>因为函数作用域的特点使得作用域有链状，即作用域链</p><h2 id="_4-es-module-和-commonjs" tabindex="-1">4.ES Module 和 CommonJs <a class="header-anchor" href="#_4-es-module-和-commonjs" aria-label="Permalink to &quot;4.ES Module 和 CommonJs&quot;">​</a></h2><p>类似问题：前端模块化机制有哪些</p><p>顺序：commonJS-ADM/CMD-ES6</p><p>ES6 import 模块引入 ESModule</p><p>node commonJS</p><p>AMD 使用 requireJS 来编写模块化，依赖必须提前申明好；推崇返回值的方式对外输出</p><p>CMD 玉伯提出，使用 seajs 来编写模块化，支持动态引入依赖，推崇通过给 module.exports 赋值的方式对外输出</p><p>CommonJS 与 ES6 模块的区别？</p><p>CommonJS 输出的是一个值的拷贝，ES6 模块输出的是值的引用</p><p>CommonJS 模块是运行时加载，ES6 模块是编译时输出接口</p><h2 id="_5-react-usememo、usecallback是什么" tabindex="-1">5.React： useMemo、useCallback是什么 <a class="header-anchor" href="#_5-react-usememo、usecallback是什么" aria-label="Permalink to &quot;5.React： useMemo、useCallback是什么&quot;">​</a></h2><p>useCallback：缓存函数，结合 memo 能让子组件不重复渲染</p><ul><li>useCallback(() =&gt; {}, [desp])</li></ul><p>useMemo：缓存值，结合 memo 能让子组件不重复渲染</p><ul><li>useMemo(() =&gt; value, [desp])</li></ul><p>衍生问题：除了useCallback和 useMemo，React 还有那些性能优化的点</p><h3 id="除了usecallback和-usememo-react-还有那些性能优化的点" tabindex="-1">除了useCallback和 useMemo，React 还有那些性能优化的点 <a class="header-anchor" href="#除了usecallback和-usememo-react-还有那些性能优化的点" aria-label="Permalink to &quot;除了useCallback和 useMemo，React 还有那些性能优化的点&quot;">​</a></h3><p>React Fiber 的工作流简单来说分为两个阶段：render 和 commit</p><p>render 阶段会进行多次调用（会被打断）</p><p>commit 阶段是将虚拟 DOM 渲染到真实DOM上</p><p>所以优化可以分为三类</p><ul><li><p>render阶段优化。即跳过不必要的组件的渲染更新</p></li><li><p>commit 阶段优化。即减少 commit 阶段耗时</p></li><li><p>非渲染方面的优化</p></li></ul><h4 id="render阶段优化" tabindex="-1">render阶段优化 <a class="header-anchor" href="#render阶段优化" aria-label="Permalink to &quot;render阶段优化&quot;">​</a></h4><p>React.memo</p><p>useMemo、useCallback 实现未定的 props 值</p><p>列表项使用 key 属性</p><h4 id="commit-阶段优化" tabindex="-1">commit 阶段优化 <a class="header-anchor" href="#commit-阶段优化" aria-label="Permalink to &quot;commit 阶段优化&quot;">​</a></h4><p>避免在 didMount、didUpdate 中更新组件 State</p><p>也就是说无不必要不要使用 useLayoutEffect，它和 didMount 一样，会阻塞页面渲染</p><h4 id="非渲染方面的优化" tabindex="-1">非渲染方面的优化 <a class="header-anchor" href="#非渲染方面的优化" aria-label="Permalink to &quot;非渲染方面的优化&quot;">​</a></h4><p>组件按需挂载</p><p>懒加载：webpack 的动态导入+ React.lazy</p><p>懒渲染：即当组件进入或即将进入可视区域时才渲染组件，如Modal、Drawer</p><p>虚拟列表：懒渲染中的一种特殊场景，不渲染所有数据，只渲染可视区域中的数据。当用户滑动时，通过监听 scroll 来判断是上滑还是下拉，从而更新数据。同理 IntersectionObserver（交叉观察者）和 getBoundingClientRect 也能实现</p><h2 id="_6-react-组件库按需加载原理" tabindex="-1">6. React：组件库按需加载原理 <a class="header-anchor" href="#_6-react-组件库按需加载原理" aria-label="Permalink to &quot;6. React：组件库按需加载原理&quot;">​</a></h2><p>通过 <a href="https://github.com/ant-design/babel-plugin-import" target="_blank" rel="noreferrer">babel-plugin-import</a> 插件可以快速配置好自动按需加载组件</p><p>在项目中的 config 文件中，修改 babel 插件配置，如下所示：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;import&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          libraryName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vant&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          libraryDirectory: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;es&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          style: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vant&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	plugins: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;import&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            libraryName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;antd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            libraryDirectory: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;es&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            style: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  	]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>这样，babel-plugin-import 就能自动实现按需加载</p><blockquote><p><code>ElementUI</code>使用的是<code>babel-plugin-component</code></p></blockquote><h3 id="babel-plugin-import-插件的原理" tabindex="-1">babel-plugin-import 插件的原理 <a class="header-anchor" href="#babel-plugin-import-插件的原理" aria-label="Permalink to &quot;babel-plugin-import 插件的原理&quot;">​</a></h3><p>![image-20240919122206758](D:\\Documents\\PicGo Files\\image-20240919122206758.png)</p><p>简单来说，按需加载不过是将 <code>import {Button} from &#39;antd&#39;</code> 的形式转换为 <code>import Button from &#39;antd/es/button&#39; </code>的形式的过程</p><p>对于组件本身来说，要支持按需加载功能，就要在打包时支持以 ES 模块化方式导出</p><p>比如说 rollup，就可以在 <code>rollup.config.js</code> 中配置</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  input: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./src/index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      file: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./dist/my-lib-umd.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;umd&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myLib&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      //当入口文件有export时，&#39;umd&#39;格式必须指定name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      //这样，在通过&lt;script&gt;标签引入时，才能通过name访问到export的内容。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      file: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./dist/my-lib-es.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;es&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      file: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./dist/my-lib-cjs.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cjs&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>衍生问题：按需加载css</p><h3 id="按需加载css" tabindex="-1">按需加载css <a class="header-anchor" href="#按需加载css" aria-label="Permalink to &quot;按需加载css&quot;">​</a></h3><p><code>CSS in JS</code>：</p><ol><li>使用方不存在接入成本;</li><li><ol start="2"><li>配合 sideEffects 可进行 Tree Shaking</li></ol></li></ol><h2 id="_7-html缓存了怎么更新-js和css缓存是怎么更新的" tabindex="-1">7.html缓存了怎么更新，js和css缓存是怎么更新的 <a class="header-anchor" href="#_7-html缓存了怎么更新-js和css缓存是怎么更新的" aria-label="Permalink to &quot;7.html缓存了怎么更新，js和css缓存是怎么更新的&quot;">​</a></h2><p>一般来说，html 不缓存，js、css 缓存，html 中会加载 js 和 css，后两者会以哈希名的方式引入到 html 中</p><p>html 被缓存了就是要让缓存失效，一般有两种解法，一如果资源都在 OSS 或者 CDN 上，那么在 OSS 或者 CDN 上设置过期时间；二在 nginx 中设置过期时间</p><p>衍生问题：HTTP强缓存和协商缓存</p><h3 id="http强缓存和协商缓存" tabindex="-1">HTTP强缓存和协商缓存 <a class="header-anchor" href="#http强缓存和协商缓存" aria-label="Permalink to &quot;HTTP强缓存和协商缓存&quot;">​</a></h3><p>HTTP先走强缓存，Cache-Control失效，走协商缓存ETag，ETag未变，返回 304，变化返回新资源并打上 ETag 标签</p><h2 id="_8-埋点-sdk-设计思路" tabindex="-1">8.埋点 SDK 设计思路 <a class="header-anchor" href="#_8-埋点-sdk-设计思路" aria-label="Permalink to &quot;8.埋点 SDK 设计思路&quot;">​</a></h2><p>设计到日制和埋点</p><ul><li>自动化上报页面PV、UV，记录用户点击路径行为</li><li>自动上报页面异常</li><li>发送埋点信息时，不影响性能，不阻碍页面主流程加载和请求发送</li></ul><h4 id="数据上报" tabindex="-1">数据上报 <a class="header-anchor" href="#数据上报" aria-label="Permalink to &quot;数据上报&quot;">​</a></h4><p>使用 <code>navigator.sendBeacon</code> ，它的优势在于它能异步操作，即使在页面卸载后，该方法也可以继续发送数据，并且这个方法可以实现跨域发送数据</p><p>还有以下几种上报</p><ul><li>ajax、fetch 上报</li><li>image 上报</li><li>jsonp 上报</li></ul><h4 id="上报时机" tabindex="-1">上报时机 <a class="header-anchor" href="#上报时机" aria-label="Permalink to &quot;上报时机&quot;">​</a></h4><p>上报时机有三种：</p><ul><li>requestIdleCallback/setTimeout 延时上报</li><li>beforeUnload 回调函数里上报</li><li>缓存上报数据，达到一定数量后再上报</li></ul><p>先缓存上报数据，缓存到一定数量后，利用 <code>requestIdleCallback/setTimeout</code> 延时上报，在页面离开时统一将未上报数据进行上报</p><h4 id="性能监控" tabindex="-1">性能监控 <a class="header-anchor" href="#性能监控" aria-label="Permalink to &quot;性能监控&quot;">​</a></h4><ul><li>FP、FCP、LCP、onload、DOMContentLoaded</li><li>资源加载时间</li><li>接口请求耗时</li></ul><h4 id="错误监控" tabindex="-1">错误监控 <a class="header-anchor" href="#错误监控" aria-label="Permalink to &quot;错误监控&quot;">​</a></h4><ul><li><p>资源加载错误：<code>addEventListener(&#39;error&#39;)</code></p></li><li><p>JS 错误：<code>window.onerror</code> 或者 <code>window.addEventListener(&#39;error&#39;, callback)</code></p><ul><li><code>window.onerror</code> 无法捕获资源加载错误</li></ul></li><li><p>Promise 错误 error 无法捕获， <code>window.addEventListener(&#39;unhandledrejection&#39;, callback)</code></p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.addEventListener(&#39;error&#39;, event =&gt; {</span></span>
<span class="line"><span>  this.error(error);</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>window.addEventListener(&#39;unhandledrejection&#39;, event =&gt; {</span></span>
<span class="line"><span>  	this.error(new Error(event.reason), { type: &#39;unhandledrejection&#39; })</span></span>
<span class="line"><span>})</span></span></code></pre></div><h4 id="行为监控" tabindex="-1">行为监控 <a class="header-anchor" href="#行为监控" aria-label="Permalink to &quot;行为监控&quot;">​</a></h4><ul><li>UV、PV</li><li>页面停留时长</li><li>用户点击</li></ul><h2 id="_9-进程和线程的区别" tabindex="-1">9.进程和线程的区别 <a class="header-anchor" href="#_9-进程和线程的区别" aria-label="Permalink to &quot;9.进程和线程的区别&quot;">​</a></h2><p>进程是一个应用起来的实例，线程是运行在进程中的最小单位</p><p>浏览器是是多进程架构，其中有一个浏览器主进程，多个渲染进程（一个 Tab 就是一个进程）</p><p>渲染进程中包括多个线程：GUI 渲染线程、JS 引擎线程、事件触发线程、异步线程、定时器线程</p><p>GUI 渲染线程和 JS 引擎线程是互斥的。GUI 负责渲染页面，JS引擎负责执行 JS 脚本，但是 JS 能操作 DOM，所以两者不能同时进行</p><h2 id="_10-算法题-无重复字符的最长子串" tabindex="-1">10. 算法题：无重复字符的最长子串 <a class="header-anchor" href="#_10-算法题-无重复字符的最长子串" aria-label="Permalink to &quot;10. 算法题：无重复字符的最长子串&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lengthOfLongestSubstring</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> memo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> longestLen </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> len </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> slow </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> len; fast</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> char </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s[fast]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(memo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(char) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> slow </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> len) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 删掉重复的字母</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            memo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s[slow])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            slow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        longestLen </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(longestLen, fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> slow </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        memo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(char)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> longestLen;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,94)]))}const c=i(e,[["render",t]]);export{o as __pageData,c as default};