import{_ as t,c as r,a3 as a,o}from"./chunks/framework.CAwIQbWu.js";const u=JSON.parse('{"title":"H5 营销页面需要注意什么","description":"","frontmatter":{},"headers":[],"relativePath":"WebApp/H5营销页面总结.md","filePath":"WebApp/H5营销页面总结.md","lastUpdated":1657086752000}'),p={name:"WebApp/H5营销页面总结.md"};function c(s,e,l,n,i,d){return o(),r("div",null,e[0]||(e[0]=[a('<h1 id="h5-营销页面需要注意什么" tabindex="-1">H5 营销页面需要注意什么 <a class="header-anchor" href="#h5-营销页面需要注意什么" aria-label="Permalink to &quot;H5 营销页面需要注意什么&quot;">​</a></h1><p>手淘年货节舞龙揭幕动画实战</p><p><a href="https://github.com/amfe/article/issues/36" target="_blank" rel="noreferrer">https://github.com/amfe/article/issues/36</a></p><p>真机调试</p><p><a href="https://segmentfault.com/a/1190000018407990" target="_blank" rel="noreferrer">微信下调试H5页面</a></p><p>最新版的微信已经不支持通过 debugx5.qq.com 打开 vconsole 了。要调试H5可以通过chrome远程：</p><p>① 把手机和电脑用usb连起来 ② 在手机微信中访问 <a href="http://debugxweb.qq.com/?inspector=true" target="_blank" rel="noreferrer">http://debugxweb.qq.com/?inspector=true</a> ③ 在电脑浏览器中访问 chrome://inspect/#devices</p><h2 id="音乐自动播放" tabindex="-1">音乐自动播放 <a class="header-anchor" href="#音乐自动播放" aria-label="Permalink to &quot;音乐自动播放&quot;">​</a></h2><blockquote><p><code>autoplay</code>是个布尔属性值，表示声音是否自动播放，默认不自动播放。然而，随着浏览器的发展，这个属性变得限制越来越多。首先在移动端，<code>autoplay</code>自动播放已经被禁止了，PC 端也已经禁止，18 年的时候，Chrome 这么做了，然后被很多开发者抗议，后来又恢复 autoplay（给大家缓冲时间），现在已经 Chrome 又不支持自动播放了。</p><p>——张鑫旭</p></blockquote><p><a href="https://www.zhangxinxu.com/wordpress/2019/07/html-audio-api-guide/" target="_blank" rel="noreferrer">https://www.zhangxinxu.com/wordpress/2019/07/html-audio-api-guide/</a></p><p><img src="https://s2.loli.net/2021/12/27/F1kX7iAUxwv94pD.png" alt="image-20211227152921543"></p><p>但网易云是不需要点击就能实现的</p><p><a href="https://st.music.163.com/c/yourposter/m1/index.html" target="_blank" rel="noreferrer">https://st.music.163.com/c/yourposter/m1/index.html</a></p><p>this.audioNode = document.createElement(&quot;audio&quot;),</p><p>有人说：</p><blockquote><p>解决方案：监听WeixinJSBridgeReady事件、DOMContentLoaded事件</p><p><a href="https://cloud.tencent.com/developer/article/1033107" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1033107</a></p></blockquote><p>同样的，监听其他 WeixinJSBridgeReady</p><p><a href="https://blog.51cto.com/u_15082402/4531923" target="_blank" rel="noreferrer">https://blog.51cto.com/u_15082402/4531923</a></p>',18)]))}const m=t(p,[["render",c]]);export{u as __pageData,m as default};
