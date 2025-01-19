import{_ as a,c as i,a3 as n,o as e}from"./chunks/framework.CAwIQbWu.js";const r=JSON.parse('{"title":"云服务器初始化脚本","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/云服务器初始化脚本.md","filePath":"Linux/云服务器初始化脚本.md","lastUpdated":1731245960000}'),l={name:"Linux/云服务器初始化脚本.md"};function t(p,s,h,d,o,k){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="云服务器初始化脚本" tabindex="-1">云服务器初始化脚本 <a class="header-anchor" href="#云服务器初始化脚本" aria-label="Permalink to &quot;云服务器初始化脚本&quot;">​</a></h1><p>在本地 hosts 中设置 \`</p><h2 id="ssh免密登录" tabindex="-1">ssh免密登录 <a class="header-anchor" href="#ssh免密登录" aria-label="Permalink to &quot;ssh免密登录&quot;">​</a></h2><ol><li>确保服务器的ssh服务已安装，若没有安装在安装ssh服务。</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssh-server</span></span></code></pre></div><ol><li>设置ssh服务的配置文件。确保一下内容去掉了注释。</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssh/sshd_config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">找到以下内容，并去掉注释符”#“</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=========================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RSAAuthentication</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PubkeyAuthentication</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AuthorizedKeysFile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  .ssh/authorized_keys</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=========================</span></span></code></pre></div><ol><li>配置ssh用户的<code>.ssh/authorized_keys</code>文件。若<code>~/.ssh/authorized_keys</code>不存在,则建立.ssh文件夹和authorized_keys文件。将要免密电脑的<code>id_rsa.pub</code>的内容追加到<code>~/.ssh/authorized_keys</code>中.</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> id_rsa.pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/authorized_keys</span></span></code></pre></div><ol><li>配置文件的权限。</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 600</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/authorized_keys</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置.ssh目录权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 700</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh</span></span></code></pre></div><ol><li>重启sshd服务。</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo systemctl restart sshd</span></span></code></pre></div><p>附录: 要免密电脑的<code>id_rsa.pub</code>的路径通常位置为<code>~/.ssh/id_rsa.pub</code>。 若不存在则需要生成，通常使用的生成ssh公私钥的命令为<code>ssh-keygen -t rsa -C 邮箱地址</code>。<code>ssh-keygen</code>命令在windows11、linux、macos中默认安装，可以直接使用。</p><h3 id="公钥信任" tabindex="-1">公钥信任 <a class="header-anchor" href="#公钥信任" aria-label="Permalink to &quot;公钥信任&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成公钥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[johan@iZuf61fxudjflq5eqyrnwpZ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ ssh-keygen</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fingerprint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SHA256:IeFPfrcQ3hhP64SRTAFzGIHl2ROcopl5HotRi2XNOGk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [johan@iZuf61fxudjflq5eqyrnwpZ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key&#39;s randomart image is:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">+---[RSA 2048]----+</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|      .o*@=o     |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|     ..oEB=o     |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|      o@=+O .    |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|      B=+o @ .   |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|       =So* *    |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|      . o. = .   |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|            o    |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|                 |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|                 |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">+----[SHA256]-----+</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># 查看公钥</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cat .ssh/id_rsa.pub </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># 将公钥拷贝到服务器</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scp ~/.ssh/id_rsa.pub root@47.102.152.XXX:/root</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># 将公钥加入信任列表</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cat id_dsa.pub &gt;&gt; ~/.ssh/authorized_keys</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-copy-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@server1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #</span></span></code></pre></div><p>Node：<a href="https://nodejs.org/zh-cn/download/package-manager" target="_blank" rel="noreferrer">https://nodejs.org/zh-cn/download/package-manager</a></p><p>git：<code>sudo apt install -y git vim</code></p><p>先下载 cnpm，不然下载速度和墙的原因访问不了其他的包</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --registry=https://registry.npmmirror.com</span></span></code></pre></div><p>pnpm（包管理库）</p><p>下载 zsh</p><p>配置 zsh</p><p><a href="https://segmentfault.com/a/1190000020698274" target="_blank" rel="noreferrer">解决 zsh: command not found: node</a></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .zshrc</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span></span></code></pre></div><p>Linux 管理员的一个重要任务是保护服务器免受非法攻击或访问。 默认情况下，Linux 系统带有配置良好的防火墙，比如iptables、Uncomplicated Firewall（UFW），ConfigServer Security Firewall（CSF）等，可以防止多种攻击。</p><ul><li>部署方案规划</li><li>待部署项目分析</li><li>选购及备案域名</li><li>厂商对比与选配阿里云服务器</li><li>初步 SSH 无密码登录连接和配置</li><li>搭建 Nodejs/MongoDB/Nginx 环境</li><li>配置 IPTables/Fail2Ban 防火墙及主动防御</li><li>域名 DNS 转移及 A 记录/CNAME 解析配置</li><li>MongoDB 角色配置与安全规则设置</li><li>线上 MongoDB 单表单库导入导出与跨机迁移备份上传</li><li>PM2 发布环境配置</li><li>服务器与 Git 仓库读写配置</li><li>PM2 一键部署线上 Nodejs 项目</li><li>电影网站/ReactNative App 后台/微信公众号/微信小程序后台等项目实战部署</li><li>SSL 证书申请及 Nginx 证书集成提供 HTTPS 协议</li><li>上线方案复盘总结</li></ul><h3 id="防火墙" tabindex="-1">防火墙 <a class="header-anchor" href="#防火墙" aria-label="Permalink to &quot;防火墙&quot;">​</a></h3><p>下载（firewalld 或者 ufw）</p><p><strong>1、更新软件包</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt update</span></span></code></pre></div><p><strong>2、安装 UFW</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt install ufw</span></span></code></pre></div><p><strong>3、如果你在远程位置连接你的服务器，在启用 UFW 防火墙之前，你必须显式允许进来的 SSH 连接。否则，你将永远都无法连接到机器上。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo ufw allow 22/tcp</span></span></code></pre></div><blockquote><p>如果 SSH 运行在非标准端口，你需要将上述命令中的 22 端口替换为对应的 SSH 端口。</p></blockquote><p><strong>4、放开 1Panel 系统端口。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo ufw allow 8090/tcp</span></span></code></pre></div><blockquote><p>上述命令中的 8090 端口需要替换为安装 1Panel 系统时自定义的端口。</p></blockquote><p><strong>5、启动 UFW</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo ufw enable</span></span></code></pre></div><h3 id="开启-fail2ban" tabindex="-1">开启 Fail2ban <a class="header-anchor" href="#开启-fail2ban" aria-label="Permalink to &quot;开启 Fail2ban&quot;">​</a></h3><p><strong>1、安装 Fail2ban</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt-get install fail2ban</span></span></code></pre></div><p><strong>2、Debian 12 及以上的版本需要手动安装 rsyslog</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt-get install rsyslog</span></span></code></pre></div><p><strong>3、启动 Fail2ban 服务</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo systemctl start fail2ban</span></span></code></pre></div><p><strong>4、开机自启动</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo systemctl enable fail2ban</span></span></code></pre></div><p><strong>5、查看 Fail2ban 服务状态。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo systemctl status fail2ban</span></span></code></pre></div><h3 id="lsof-命令" tabindex="-1">lsof 命令 <a class="header-anchor" href="#lsof-命令" aria-label="Permalink to &quot;lsof 命令&quot;">​</a></h3><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/28423720" target="_blank" rel="noreferrer">SSH 免密登录是怎么玩儿的?</a></li><li><a href="https://zhuanlan.zhihu.com/p/366883774" target="_blank" rel="noreferrer">我的云服务器初始化脚本</a></li></ul>`,57)]))}const g=a(l,[["render",t]]);export{r as __pageData,g as default};
