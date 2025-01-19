import{_ as a,c as i,a3 as e,o as t}from"./chunks/framework.CAwIQbWu.js";const c=JSON.parse('{"title":"前端学 Ruby：安装Ruby、Rails","description":"","frontmatter":{},"headers":[],"relativePath":"BackEnd/Ruby/前端学Ruby：安装Ruby、Rails.md","filePath":"BackEnd/Ruby/前端学Ruby：安装Ruby、Rails.md","lastUpdated":1689215901000}'),n={name:"BackEnd/Ruby/前端学Ruby：安装Ruby、Rails.md"};function l(p,s,h,r,d,k){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="前端学-ruby-安装ruby、rails" tabindex="-1">前端学 Ruby：安装Ruby、Rails <a class="header-anchor" href="#前端学-ruby-安装ruby、rails" aria-label="Permalink to &quot;前端学 Ruby：安装Ruby、Rails&quot;">​</a></h1><h2 id="ruby-是什么" tabindex="-1">Ruby 是什么 <a class="header-anchor" href="#ruby-是什么" aria-label="Permalink to &quot;Ruby 是什么&quot;">​</a></h2><p>Ruby 是一个注重均衡的语言，它的发明者<a href="https://matz.rubyist.net/" target="_blank" rel="noreferrer">松本行弘</a>，混合了他喜欢的多门语言（Perl、Smalltalk、Eiffel、Ada 和 Lisp），创造出了一种兼具函数式编程和命令式编程特色的新语言</p><p>他“试着让 Ruby 更自然，而不是更简单”，让一切符合生活常规</p><p>除此之外，他还提到：</p><blockquote><p>Ruby 就像人的身体一样，表面上看来简单，但是内部却相当复杂</p></blockquote><h2 id="如何安装-ruby" tabindex="-1">如何安装 ruby <a class="header-anchor" href="#如何安装-ruby" aria-label="Permalink to &quot;如何安装 ruby&quot;">​</a></h2><p>笔者所用的电脑是 window，在此基础上有多种方法安装、使用 ruby，一是直接下载 window 版的 ruby；二是先安装 docker，后下载 Linux 镜像，在 Linux 环境中安装 ruby；三是安装 docker 后，直接下载 ruby 镜像</p><p>如果是在 Window 中，可以在<a href="https://rubyinstaller.org/downloads/" target="_blank" rel="noreferrer">官网</a>或者<a href="https://rubyinstaller.cn/" target="_blank" rel="noreferrer">国内镜像源</a>处下载使用</p><p>如果是在 Linux 中，可以在<a href="http://www.ruby-lang.org/zh_cn/downloads/" target="_blank" rel="noreferrer">官网</a>里下载</p><ol><li>下载最新版的 Ruby 压缩文件</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://cache.ruby-lang.org/pub/ruby/3.1/ruby-3.1.3.tar.xz</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># curl https://cache.ruby-lang.org/pub/ruby/3.1/ruby-3.1.3.tar.xz</span></span></code></pre></div><ol start="2"><li>下载 Ruby 之后，使用下面的命令解压：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruby-3.1.3.tgz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruby-3.1.3</span></span></code></pre></div><ol start="3"><li>配置并编译源代码</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./configure</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><ol start="4"><li>安装后，通过在命令行中输入以下命令来确保一切工作正常</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruby</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruby</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.1.3</span></span></code></pre></div><p>如果用 docker</p><ol><li>拉取 ruby 镜像</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruby</span></span></code></pre></div><ol start="2"><li>基于 ruby 镜像生产一个容器</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span></span></code></pre></div><p>当然，也可以用 <a href="https://blog.azhubaby.com/2022/12/10/2022-12-10-%E6%8F%90%E9%AB%98%E5%BC%80%E5%8F%91%E4%BD%93%E9%AA%8C%EF%BC%9Adev-container/" target="_blank" rel="noreferrer">vscode + dev-container</a> 来在 vscode 中生成一个 Linux，Linux 安装 ruby 来做开发</p><p>除了直接下载 ruby 外，还可以下载 RVM，它可以管理多个版本的 Ruby，就像前端概念里的 nvm</p><h2 id="rvm" tabindex="-1">RVM <a class="header-anchor" href="#rvm" aria-label="Permalink to &quot;RVM&quot;">​</a></h2><p><a href="http://rvm.io/" target="_blank" rel="noreferrer">RVM</a> 能在系统中安装和管理多个 Ruby 版本。同时还能管理不同的 gem 集。支持 macOS、Linux 和其它类 UNIX 操作系统</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --keyserver</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keyserver.ubuntu.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recv-keys</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 409B6B1796C275462A1703113804BB82D39DC0E3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 7D2BAF1CF37B13E2069D6956105BD0E739499BDB</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://get.rvm.io</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stable</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当 rvm 安装好后，看下图的提示操作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> usermod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -G</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> johan</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 将当前用户添加到 rvm 组中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">su</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 切换到root，相当于先注销 johan</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">su</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> johan</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 切换会johan，相当于登录 johan</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/profile.d/rvm.sh</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 让命令生效</span></span></code></pre></div><p><img src="https://s2.loli.net/2023/03/08/59NaFCtPhqEinXR.png" alt="安装完rvm后的提示"></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为系统默认版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --default</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.2.3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在其他版本之前切换</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.2.1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载一个指定版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.2.1</span></span></code></pre></div><h2 id="gems" tabindex="-1">Gems <a class="header-anchor" href="#gems" aria-label="Permalink to &quot;Gems&quot;">​</a></h2><p>RubyGems 是 Ruby 项目的包管理工具。有很多有用的代码库（包括 Rails）都可以通过包（或叫做 gem）的形式获取</p><p>因为下载了 ruby，自带了 gem，就好比下载了 node，自带了 npm</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gem</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#3.3.26</span></span></code></pre></div><blockquote><p>有意思的是：ruby 的英语意思是红宝石，gem 的意思是宝石</p></blockquote><h3 id="ruby镜像源替换" tabindex="-1">Ruby镜像源替换 <a class="header-anchor" href="#ruby镜像源替换" aria-label="Permalink to &quot;Ruby镜像源替换&quot;">​</a></h3><p>添加镜像的目的是为了下载依赖包的时候速度更快，就好比 npm 的国内镜像 cnpm</p><p>查看当前镜像</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gem</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> l</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 或者 gem source</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 结果</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *** CURRENT SOURCES ***</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://rubygems.org/</span></span></code></pre></div><p>添加国内镜像：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gem</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sources</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gems.ruby-china.com/</span></span></code></pre></div><p>再次查看镜像：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gem</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sources</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *** CURRENT SOURCES ***</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://rubygems.org/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://gems.ruby-china.com/</span></span></code></pre></div><p>用 --add 添加地址，--remove 删除地址</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gem</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sources</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gems.ruby-china.com/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --remove</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rubygems.org/</span></span></code></pre></div><h3 id="国内其他镜像源" tabindex="-1">国内其他镜像源 <a class="header-anchor" href="#国内其他镜像源" aria-label="Permalink to &quot;国内其他镜像源&quot;">​</a></h3><blockquote><p>在部署时，ruby-china 的源会抖动连接不上，可以通过换源或者在开发时将源下载下来，用本地源来代替（唐诗项目遇到的坑）</p></blockquote><p>中科大：<a href="http://mirrors.ustc.edu.cn/help/rubygems.html" target="_blank" rel="noreferrer">http://mirrors.ustc.edu.cn/help/rubygems.html</a></p><p>清华：<a href="https://mirrors.tuna.tsinghua.edu.cn/help/rubygems/" target="_blank" rel="noreferrer">https://mirrors.tuna.tsinghua.edu.cn/help/rubygems/</a></p><p>阿里：<a href="https://mirrors.aliyun.com/rubygems/" target="_blank" rel="noreferrer">https://mirrors.aliyun.com/rubygems/</a></p><h3 id="gem-命令" tabindex="-1">gem 命令 <a class="header-anchor" href="#gem-命令" aria-label="Permalink to &quot;gem 命令&quot;">​</a></h3><ul><li>gem list：查看所有的包</li><li>gem install xx：下载应用包</li><li>gem uninstall：卸载应用包</li><li>gem sources：查看当前镜像</li></ul><h3 id="命令行" tabindex="-1">命令行 <a class="header-anchor" href="#命令行" aria-label="Permalink to &quot;命令行&quot;">​</a></h3><p>当安装完 ruby 后，打开命令行输入 irb，即可进入irb 运行环境，这就像输入 node 进入 node 运行环境，输入 python ，进入 python 运行环境</p><h2 id="安装-rails" tabindex="-1">安装 Rails <a class="header-anchor" href="#安装-rails" aria-label="Permalink to &quot;安装 Rails&quot;">​</a></h2><p>Rails 是什么？</p><p>Rails 是使用 Ruby 语言写的 Web 应用框架。它有两大指导“思想”</p><ul><li>不要自我重复（DRY）</li><li>多约定，少配置（约定大于配置）</li></ul><p>因为有包管理工具，所以下载就可以</p><p>github 源码地址：<a href="https://github.com/rails/rails" target="_blank" rel="noreferrer">https://github.com/rails/rails</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gem</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rails</span></span></code></pre></div><p>安装完毕后，执行 <code>rails -v</code> 检查是否安装成功</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rails</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Rails 7.0.4</span></span></code></pre></div><p>当然， rails 还有很多命令，如</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rails</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blog</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 生成一个 blog 项目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rails</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --api</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blog</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 以 API 形式生成一 blog 项目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rails</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --css</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bootstrap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blog</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 以 bootstrap 作为css生成一 blog 项目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rails</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --database</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postgresql</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blog</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 以 postgressql 作为数据库生成项目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rails</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 查看所有命令行选项</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rails</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --api</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --database=postgresql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --skip-test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blog</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 创建一个数据库为 postgresql 的跳过测试的 api 博客（blog）项目</span></span></code></pre></div><h2 id="第一个程序" tabindex="-1">第一个程序 <a class="header-anchor" href="#第一个程序" aria-label="Permalink to &quot;第一个程序&quot;">​</a></h2><p>使用 rails 新建项目，它就像 <a href="https://expressjs.com/en/starter/generator.html" target="_blank" rel="noreferrer">express-generator</a> 一样，所有的配置都帮你弄好，你要写代码就可以</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rails</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> first_app</span></span></code></pre></div><p>目录结构</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ app </span></span>
<span class="line"><span>│  bin</span></span>
<span class="line"><span>│  config</span></span>
<span class="line"><span>│  config.ru</span></span>
<span class="line"><span>│  db</span></span>
<span class="line"><span>│  Gemfile</span></span>
<span class="line"><span>│  Gemfile.lock</span></span>
<span class="line"><span>│  lib</span></span>
<span class="line"><span>│  log</span></span>
<span class="line"><span>│  public</span></span>
<span class="line"><span>│  Rakefile</span></span>
<span class="line"><span>│  README.md</span></span>
<span class="line"><span>│  test</span></span>
<span class="line"><span>│  tmp</span></span>
<span class="line"><span>│  vendor</span></span>
<span class="line"><span>└─ .gitignore</span></span></code></pre></div><table tabindex="0"><thead><tr><th>文件/文件夹</th><th>作用</th></tr></thead><tbody><tr><td><code>app/</code></td><td>包含应用的控制器、模型、视图、辅助方法、邮件程序、频道、作业和静态资源文件。这个文件夹是本文剩余内容关注的重点。</td></tr><tr><td><code>bin/</code></td><td>包含用于启动应用的 rails 脚本，以及用于安装、更新、部署或运行应用的其他脚本。</td></tr><tr><td><code>config/</code></td><td>配置应用的路由、数据库等。详情请参阅<a href="https://ruby-china.github.io/rails-guides/configuring.html" target="_blank" rel="noreferrer">配置 Rails 应用</a>。</td></tr><tr><td><code>config.ru</code></td><td>基于 Rack 的服务器所需的 Rack 配置，用于启动应用。</td></tr><tr><td><code>db/</code></td><td>包含当前数据库的模式，以及数据库迁移文件。</td></tr><tr><td><code>Gemfile</code>, <code>Gemfile.lock</code></td><td>这两个文件用于指定 Rails 应用所需的 gem 依赖。Bundler gem 需要用到这两个文件。关于 Bundler 的更多介绍，请访问 <a href="http://bundler.io/" target="_blank" rel="noreferrer">Bundler 官网</a>。</td></tr><tr><td><code>lib/</code></td><td>应用的扩展模块。</td></tr><tr><td><code>log/</code></td><td>应用日志文件。</td></tr><tr><td><code>public/</code></td><td>仅有的可以直接从外部访问的文件夹，包含静态文件和编译后的静态资源文件。</td></tr><tr><td><code>Rakefile</code></td><td>定位并加载可在命令行中执行的任务。这些任务在 Rails 的各个组件中定义。如果要添加自定义任务，请不要修改 Rakefile，直接把自定义任务保存在 <code>lib/tasks</code> 文件夹中即可。</td></tr><tr><td><code>README.md</code></td><td>应用的自述文件，说明应用的用途、安装方法等。</td></tr><tr><td><code>test/</code></td><td>单元测试、固件和其他测试装置。详情请参阅<a href="https://ruby-china.github.io/rails-guides/testing.html" target="_blank" rel="noreferrer">Rails 应用测试指南</a>。</td></tr><tr><td><code>tmp/</code></td><td>临时文件（如缓存和 PID 文件）。</td></tr><tr><td><code>vendor/</code></td><td>包含第三方代码，如第三方 gem。</td></tr><tr><td><code>.gitignore</code></td><td>告诉 Git 要忽略的文件（或模式）。详情参见 <a href="https://help.github.com/articles/ignoring-files" target="_blank" rel="noreferrer">GitHub 帮助文档</a>。</td></tr></tbody></table><p>其中 <code>Gemfile</code> 相当于前端中的 <code>package.json</code>，<code>Gemfile.lock</code>相当于<code>package.lock</code></p><p>但当你使用初始化项目时，会报错：</p><p><img src="https://s2.loli.net/2022/12/27/x1WtoDhczqUaAYT.png" alt="初始化项目报错"></p><p><a href="https://stackoverflow.com/questions/74685832/command-rails-server-doesnt-work-cmd-throws-error-with-bootsnap" target="_blank" rel="noreferrer">其原因</a>是在路径中使用了中文，所以换个路径就好</p><p>下载依赖是通过 <code>bundle install</code> ，相当于前端的 <code>npm install</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bundle</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><blockquote><p>可以使用 bundle --help 查看 bundle 的其他命令行，笔者会用 <code>bundle install --verbose</code> 查看下载过程</p></blockquote><p>如何启动项目呢，在前端开发中，有 package.json，能在 script 中写命令。而 rails 不同，它的 <code>Gemfile</code> 没有运行文件的命令，但它自带了很多命令行，如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rails</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 启动服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rails</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8080</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # s 为 server 缩写，-p 8080 表示指定8080的端口</span></span></code></pre></div><p>如此， rails 应用就启动了</p><p><img src="https://s2.loli.net/2022/12/27/uFNbqIgzw8PEtL5.png" alt="ruby on rails运行成功"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>本文的主要目的是让 Ruby on Rails 能运行，在 window 上运行确实还有坑，即使没有几年前那么多，但还是有个坑让我踩进去了，这里作记录</p><p>我们现在已经安装了 ruby、rails，并且启动项目，但到现在一行代码都不会写，下一篇，我们熟悉 ruby 的语法</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://ruby-china.github.io/rails-guides/getting_started.html" target="_blank" rel="noreferrer">Rails 入门</a></li></ul>`,89)]))}const g=a(n,[["render",l]]);export{c as __pageData,g as default};
