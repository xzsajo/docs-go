import{_ as i,c as a,a3 as n,o as t}from"./chunks/framework.CAwIQbWu.js";const g=JSON.parse('{"title":"Dart 语法","description":"","frontmatter":{},"headers":[],"relativePath":"WebApp/Flutter/Dart语法.md","filePath":"WebApp/Flutter/Dart语法.md","lastUpdated":1722850347000}'),h={name:"WebApp/Flutter/Dart语法.md"};function p(l,s,k,e,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="dart-语法" tabindex="-1">Dart 语法 <a class="header-anchor" href="#dart-语法" aria-label="Permalink to &quot;Dart 语法&quot;">​</a></h1><p>要学习 Flutter，就必须先学会 dart。这就好比你要先会 JavaScript 才能写 React/Vue。因为 Flutter 是基于 dart 来写的</p><p>这里可以看看：</p><p><a href="https://dart.cn/" target="_blank" rel="noreferrer">中文 dart 网站</a></p><p>可以在 DartPad 上练习</p><blockquote><p>DartPad 是 Dart 的一个线上 playground</p></blockquote><h3 id="程序入口" tabindex="-1">程序入口 <a class="header-anchor" href="#程序入口" aria-label="Permalink to &quot;程序入口&quot;">​</a></h3><p>JavaScript 没有预定义的入口函数，但是在 Dart 中，每个 app 都必须有一个顶级的 <code>main()</code> 函数作为应用程序的入口点</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span></code></pre></div><h3 id="控制台输出" tabindex="-1">控制台输出 <a class="header-anchor" href="#控制台输出" aria-label="Permalink to &quot;控制台输出&quot;">​</a></h3><p>想打印到控制台，使用关键字 <code>print</code>：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><blockquote><p>PS：javascript 是 console.log；python 是 print。语法不同罢了</p></blockquote><h3 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h3><p>Dart 的变量必须是明确的，像 TS 那样，需要给一个变量加类型</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dart&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h4 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h4><p><code>final</code></p><p><code>const</code></p><h4 id="内置类型" tabindex="-1">内置类型 <a class="header-anchor" href="#内置类型" aria-label="Permalink to &quot;内置类型&quot;">​</a></h4><ul><li>numbers</li><li>strings</li><li>booleans</li><li>lists(和数组一个概念)</li><li>maps 字典</li><li>runes(Unicode字符串)</li><li>symbols 符号</li></ul><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vord </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;str1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> double1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flag1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lists list1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    maps map1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;age&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="方法-函数" tabindex="-1">方法（函数） <a class="header-anchor" href="#方法-函数" aria-label="Permalink to &quot;方法（函数）&quot;">​</a></h4><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isEvenNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> num</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> num</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isEvenNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="可选参数" tabindex="-1">可选参数 <a class="header-anchor" href="#可选参数" aria-label="Permalink to &quot;可选参数&quot;">​</a></h4><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> printStr1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age]) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Name is </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> age is </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">age</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果形参不写，那个值就会被赋为null</p><h4 id="可选择名称的函数-具名函数" tabindex="-1">可选择名称的函数（具名函数） <a class="header-anchor" href="#可选择名称的函数-具名函数" aria-label="Permalink to &quot;可选择名称的函数（具名函数）&quot;">​</a></h4><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> printStr3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age}) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    print3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Name is </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> age is </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">age</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> printStr3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sex, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> address}) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Name is </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sex is </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sex</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address is </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>printStr3(sex: &quot;男&quot;)</p><p>输出：</p><p>bash Name is null sex is 男 address is null</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>#### 函数参数的默认值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##### 可选参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`dart</span></span>
<span class="line"><span>void printStr1([String name, int age=25]) {</span></span>
<span class="line"><span>    print(&quot;Name is $name age is $age&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>printStr1(&quot;男&quot;)</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>Name is 男 age is 25</span></span></code></pre></div><h5 id="具名函数" tabindex="-1">具名函数 <a class="header-anchor" href="#具名函数" aria-label="Permalink to &quot;具名函数&quot;">​</a></h5><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> printStr3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    print3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Name is </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> age is </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">age</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printStr3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;男&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">输出：</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> is</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 男 age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25</span></span></code></pre></div>`,36)]))}const F=i(h,[["render",p]]);export{g as __pageData,F as default};
