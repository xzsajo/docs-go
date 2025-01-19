import{_ as i,c as a,a3 as t,o as e}from"./chunks/framework.CAwIQbWu.js";const o=JSON.parse('{"title":"软键盘问题汇总以及解决方案","description":"","frontmatter":{},"headers":[],"relativePath":"WebApp/软键盘问题汇总以及解决方案.md","filePath":"WebApp/软键盘问题汇总以及解决方案.md","lastUpdated":1657266063000}'),l={name:"WebApp/软键盘问题汇总以及解决方案.md"};function h(n,s,p,r,k,d){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="软键盘问题汇总以及解决方案" tabindex="-1">软键盘问题汇总以及解决方案 <a class="header-anchor" href="#软键盘问题汇总以及解决方案" aria-label="Permalink to &quot;软键盘问题汇总以及解决方案&quot;">​</a></h1><h3 id="唤起纯数字软键盘" tabindex="-1">唤起纯数字软键盘 <a class="header-anchor" href="#唤起纯数字软键盘" aria-label="Permalink to &quot;唤起纯数字软键盘&quot;">​</a></h3><p>不同的手机系统采用不同 type</p><p>ios端，直接 type=”number“ 即可唤起ios数字键盘</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;number&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>android 端</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tel&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[0-9]*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>如何让其只能输入数字，关键在 onChange，输入的时候对其做正则，不符合条件不赋值</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 只能输入数字</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.target.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 首字不能为0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (value[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6961757804491178014" target="_blank" rel="noreferrer">移动端那些戳中你痛点的软键盘问题及解决方法</a></li><li><a href="https://setcina.github.io/2020/01/20/WebView%E4%B8%8A%E8%BD%AF%E9%94%AE%E7%9B%98%E7%9A%84%E5%85%BC%E5%AE%B9%E6%96%B9%E6%A1%88/" target="_blank" rel="noreferrer">WebView 上软键盘的兼容方案</a></li><li><a href="http://www.alloyteam.com/2020/02/14265/" target="_blank" rel="noreferrer">iOS 键盘难题与可见视口(VisualViewport) API</a></li><li><a href="https://mp.weixin.qq.com/s?__biz=MjM5MDc4MzgxNA==&amp;mid=2458454398&amp;idx=1&amp;sn=df9c1a3a5783bf30bf415a8a460869c5&amp;chksm=b1c2295786b5a0414abcd8164145ea025cfa812d0029a7ebaf37ec8f4b53ffe9b1a0d0959725&amp;mpshare=1&amp;scene=1&amp;srcid=&amp;sharer_sharetime=1586267698031&amp;sharer_shareid=778ad5bf3b27e0078eb105d7277263f6#rd" target="_blank" rel="noreferrer">【适配】555- H5 手机键盘弹出收起的处理</a></li><li><a href="https://github.com/yongheng2016/blog/issues/123" target="_blank" rel="noreferrer">移动端 input 输入框 键盘 遮挡 遮盖</a></li><li><a href="https://futu.im/article/input-pwd-on-mobile-browser-dialog/" target="_blank" rel="noreferrer">移动端弹窗输入密码的那些事</a></li><li><a href="https://segmentfault.com/a/1190000018959389" target="_blank" rel="noreferrer">可能这些是你想要的H5软键盘兼容方案</a></li></ul>`,11)]))}const g=i(l,[["render",h]]);export{o as __pageData,g as default};
