import{_ as a,c as t,a3 as s,o as p}from"./chunks/framework.CAwIQbWu.js";const y=JSON.parse('{"title":"TypeScript 是什么","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/TypeScript/TypeScript是什么.md","filePath":"JavaScript/TypeScript/TypeScript是什么.md","lastUpdated":1724059762000}'),e={name:"JavaScript/TypeScript/TypeScript是什么.md"};function r(h,i,l,n,d,k){return p(),t("div",null,i[0]||(i[0]=[s(`<h1 id="typescript-是什么" tabindex="-1">TypeScript 是什么 <a class="header-anchor" href="#typescript-是什么" aria-label="Permalink to &quot;TypeScript 是什么&quot;">​</a></h1><p>在说 TypeScript 是什么之前，先问问自己为什么要去学 TypeScript</p><p>淦，JavaScript 不是蛮好的吗，想怎么写就怎么写，报错了再说一句：别人笑我太疯癫，我笑别人看不穿。当小白请教如何解决报错时，左手一个 sentry 查找错误，右边 source map 跟踪源代码报错位置，小组长位置稳稳把控</p><p>但这是无知做法，笔者这里有三点理由解释前端为什么需要学习 TypeScript，最后一点最重要</p><ul><li>因为 JavaScript 是几天时间开发出来的，是个脚本语言，后端们看不起前端，觉得 js 是门玩具语言，随便写写，怎么能与我大 Java 相提并论，何况它起 JavaScript 直译就是&quot;Java 脚本&quot;，蹭 Java 热度罢了。而 TypeScript 则在此基础上加上类型检测，使前端开发变得更“麻烦”了。后端想学，学习成本就没那么低了...</li><li>大公司或者大型项目中的协同开发，如果遇到不靠谱的代码片段，会让你的应用出现bug，所以我们需要 TypeScript 在写代码时检测代码是否正确</li><li>说到底还是卷，TypeScript 拥有你 JavaScript 所有的优点以及你没有的类型系统，优秀的人会去学。你不去学，就看不懂。企业招聘时，想招优秀的人，你不学就进不去好公司</li></ul><p>以上就是学习 TypeScript 的必要理由，现在回到我们要有 TypeScript 这个话题</p><h2 id="为什么会有-typescript" tabindex="-1">为什么会有 TypeScript ？ <a class="header-anchor" href="#为什么会有-typescript" aria-label="Permalink to &quot;为什么会有 TypeScript ？&quot;">​</a></h2><p>因为 JavaScript 是动态语言，动态语言不适合大型应用的开发。 微软的 Anders Hejlsberg 写了个语言，将 JavaScript 添加上类型，就成了 TypeScript。它是静态语言，可以在编辑时检查写的代码是否有问题。所以现在大型项目都用 TypeScript 来开发</p><h2 id="typescript-是什么-1" tabindex="-1">TypeScript 是什么 <a class="header-anchor" href="#typescript-是什么-1" aria-label="Permalink to &quot;TypeScript 是什么&quot;">​</a></h2><p>简单来说，TypeScript = JavaScript + Type</p><p>TypeScript 是 JavaScript 的超集，也就是说，它包含了 JavaScript 的所有的语法和功能，并在此基础上增加了静态类型系统、接口、枚举类型等特性，使得开发者能够更好地编写和维护代码</p><p>其中，类型系统上 TypeScript 最大的亮点，它可以让开发者在编写代码时自动检测类型错误，减少因为类型错误导致的运行时错误，增加代码的可读性和可维护性</p><h2 id="typescript-vs-javascript" tabindex="-1">TypeScript VS JavaScript <a class="header-anchor" href="#typescript-vs-javascript" aria-label="Permalink to &quot;TypeScript VS JavaScript&quot;">​</a></h2><table tabindex="0"><thead><tr><th></th><th>TypeScript</th><th>JavaScript</th></tr></thead><tbody><tr><td>类型</td><td>静态类型</td><td>动态类型</td></tr><tr><td>编译时</td><td>在编译时检查类型，提示不安全的类型错误</td><td>编译时没有类型信息，不做类型检查</td></tr><tr><td>运行时</td><td>运行时类型安全</td><td>运行时类型检查，类型不安全报错</td></tr><tr><td>其他优点</td><td>在写代码时提示</td><td>没有</td></tr></tbody></table><h2 id="开发技巧" tabindex="-1">开发技巧 <a class="header-anchor" href="#开发技巧" aria-label="Permalink to &quot;开发技巧&quot;">​</a></h2><p>这里笔者收集了在开发中常见的开发技巧，其实如果你熟练 ES6 的开发，对其中的新特性有所了解，也应该有所了解</p><h3 id="空值处理" tabindex="-1">空值处理 <a class="header-anchor" href="#空值处理" aria-label="Permalink to &quot;空值处理&quot;">​</a></h3><p>联合判断是否为空值，可以用 <code>??</code> 来判断</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// JS</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">??</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TS</span></span></code></pre></div><h3 id="可选链" tabindex="-1">可选链 <a class="header-anchor" href="#可选链" aria-label="Permalink to &quot;可选链&quot;">​</a></h3><p>需要连续判断某个对象里面是否存在某个深层次的属性，可以使用 <code>?.</code></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.data.list) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// JS</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result?.data?.list) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TS</span></span></code></pre></div><blockquote><p>PS：空值处理和可选链是 ES11 新增特性</p></blockquote>`,23)]))}const o=a(e,[["render",r]]);export{y as __pageData,o as default};
