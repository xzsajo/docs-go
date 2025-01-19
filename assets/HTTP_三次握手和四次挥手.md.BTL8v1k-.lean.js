import{_ as a,c as p,a3 as i,o as l}from"./chunks/framework.CAwIQbWu.js";const _=JSON.parse('{"title":"三次握手和四次挥手","description":"","frontmatter":{},"headers":[],"relativePath":"HTTP/三次握手和四次挥手.md","filePath":"HTTP/三次握手和四次挥手.md","lastUpdated":1677131045000}'),t={name:"HTTP/三次握手和四次挥手.md"};function s(r,e,c,d,o,n){return l(),p("div",null,e[0]||(e[0]=[i('<h1 id="三次握手和四次挥手" tabindex="-1">三次握手和四次挥手 <a class="header-anchor" href="#三次握手和四次挥手" aria-label="Permalink to &quot;三次握手和四次挥手&quot;">​</a></h1><p>之前的<a href="./TCPIP协议及网络分层模型.html">TCP/IP 协议</a> 从网络分层模型讲解，介绍了 TCP/IP 协议的分层模型。介绍了网络通信需要进行网络底层协议的层层嵌套。其中链路层离我们比较远，网络层的具体功能是提供了 IP 地址，传输层的代表是 TCP，它确保了传输的稳定可靠性，应用层则提供各种网络应用能力</p><p>在 HTTP 协议是基于传输层（TCP）的，在建立连接传输数据之前先有三次握手，等断开连接后，TCP 又会进行四次挥手</p><p>本文来讲讲 TCP 为什么要进行三次握手和四次挥手</p><p><img src="https://s2.loli.net/2022/04/08/x4yNbSPtHfwDILX.png" alt="http-tcp-three-handshakes"></p><p>为什么要进行三次握手？</p><p>主要是为了确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备</p><p>步骤为：</p><ul><li>客户端提出建立连接，发出客户端 seq：<code>seq=client_isn</code></li><li>服务端收到消息后返回 <code>ack=client_isn+1</code> 和服务端 seq：<code>seq=server_isn</code></li><li>客户端收到后返回<code>ack=server_isn+1</code> 表示收到了</li></ul><p>可以理解为男女双方确认关系，男女双方要结婚，怎么办？先见父母得到父母认同，之前听过这样一句话：得不到父母祝福的婚姻是不幸福的（当然，不见父母直接结婚的也有，但不主流）</p><ul><li>男方提出去女方家，带上见面礼 seq：<code>seq=男方的诚意</code></li><li>女方家收到见面礼后返回（给男方）红包 <code>ack=我们认可你啦</code> 以及女方去男方家也带上见面礼 seq：<code>seq=女方的诚意</code></li><li>男方家收到见面礼后返回（给女方的）红包 <code>ack=server_isn+1</code></li></ul><p>这个叫确定关系。所以要又来又回三次，双方都确保知道对方的诚意和自己的诚意</p><p>那什么是四次挥手呢？</p><p>在断开之前，需要进行四次挥手</p><p><img src="https://s2.loli.net/2022/04/08/x947eG5YtwPpzsH.png" alt="http-tcp-four-handshakes"></p><p>为什么要有四次挥手？</p><p>主要是为了确保双方都知道对方断开连接</p><p>具体步骤为：</p><ul><li>客户端第一次发送消息给服务端告诉它需要断开连接</li><li>服务端收到消息后返回消息告诉客户端：知道了，为了确保服务端收到了之前所有的 HTTP 请求，服务端需要等一等再断开连接</li><li>服务端确认所有的 HTTP 请求都收到了，主动发消息给客户端：我这边所有的请求都处理完了，我也可以断开连接了</li><li>客户端收到这个请求后，返回消息告诉服务端：我知道，断开连接吧</li></ul><p>主要是为了确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备</p><p>可以理解为一对男女要分手</p><ul><li>女方提出分手，说你对我不好，我要分手</li><li>男方觉得需求合理，同意分手，但分手之前要把联系方式、合照、各种乱七八糟的帐啊、人情啊算清楚再分手</li><li>男方理清楚后，主动发消息给女方，说这边都处理清楚了，以后你是你，我是我，我们可以分手了</li><li>女方收到消息后，返回告诉男方：我知道了，分手吧</li></ul><p>于是乎，它们就断了，分手手续完成</p><p>至于要往深了理解，可以看看猿人谷的<a href="https://mp.weixin.qq.com/s?__biz=MzA5MTk4MzgzNA==&amp;mid=2453246617&amp;idx=1&amp;sn=0057c76375e6343672fe1665483dd236&amp;chksm=87b9282cb0cea13a222aaa2ba40dd029484d6e2e192e8d627363a308b353b0108971b15d1c0b&amp;mpshare=1&amp;scene=1&amp;srcid=&amp;sharer_sharetime=1570232506816&amp;sharer_shareid=778ad5bf3b27e0078eb105d7277263f6#rd" target="_blank" rel="noreferrer">面试官，不要再问我三次握手和四次挥手</a>，一个字：细</p>',24)]))}const h=a(t,[["render",s]]);export{_ as __pageData,h as default};
