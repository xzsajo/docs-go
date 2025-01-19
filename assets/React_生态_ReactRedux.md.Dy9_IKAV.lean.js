import{_ as a,c as t,a3 as c,o as r}from"./chunks/framework.CAwIQbWu.js";const u=JSON.parse('{"title":"React Redux 源码解析","description":"","frontmatter":{},"headers":[],"relativePath":"React/生态/ReactRedux.md","filePath":"React/生态/ReactRedux.md","lastUpdated":1697170132000}'),o={name:"React/生态/ReactRedux.md"};function d(p,e,s,i,n,l){return r(),t("div",null,e[0]||(e[0]=[c('<h1 id="react-redux-源码解析" tabindex="-1">React Redux 源码解析 <a class="header-anchor" href="#react-redux-源码解析" aria-label="Permalink to &quot;React Redux 源码解析&quot;">​</a></h1><p>使用过<code>redux</code>的同学都知道，<code>redux</code>作为<code>react</code>公共状态管理工具，配合<code>react-redux</code>可以很好的管理数据，派发更新，更新视图渲染的作用，那么对于 <code>react-redux</code> 是如何做到根据 <code>state</code> 的改变，而更新组件，促使视图渲染的呢，让我们一起来探讨一下，<code>react-redux</code> 源码的奥妙所在</p><p>在正式分析之前我们不妨来想几个问题:</p><p>React-redux</p><p>主要是两个组件，connect 高阶组件 和 Provider 组件</p><p>connect</p><ol><li>从 <code>store</code> 里面获取读和写的 API</li><li>对拿到的接口进行封装。根据 <code>mapStateToProps</code> 和 <code>mapDispatchToProps</code> 进行封装</li><li>在恰当的时候进行更新（精准更新）。只有<code>store</code> 发生变化，才对页面进行更新</li><li>渲染组件（订阅 redux，数据改变后广播通知）</li></ol><p>connect 就是一个高阶组件</p><p>Provider 其实就是一个使用 context 上下文后的组件</p><p>把 context 和 store 结合起来，组件中只能通过 <code>dispatch</code> 来进行修改，这样的话，每个组件既可以去 context 里面获取 store 从而获取状态，又不用担心它们乱改数据</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://mp.weixin.qq.com/s/oEvs6qzUbf4Lb5pvftKZIQ" target="_blank" rel="noreferrer">「源码解析」一文吃透 react-redux 源码（useMemo 经典源码级案例）</a></li><li><a href="https://mp.weixin.qq.com/s?__biz=Mzg5ODA5NTM1Mw==&amp;mid=2247485220&amp;idx=2&amp;sn=74811cf3a61baf1a883fe1c7a76b88fa&amp;chksm=c06686b2f7110fa4211871572ae52b08b0cc045741540e28e7c026f441b7c7f26e454aecd1b0&amp;mpshare=1&amp;scene=1&amp;srcid=&amp;sharer_sharetime=1585194811446&amp;sharer_shareid=778ad5bf3b27e0078eb105d7277263f6#rd" target="_blank" rel="noreferrer">【干货】从零实现 react-redux</a></li></ul>',12)]))}const x=a(o,[["render",d]]);export{u as __pageData,x as default};
