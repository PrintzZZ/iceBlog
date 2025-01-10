import{L as s,_ as a,s as e}from"./chunks/theme.Do1YC2u1.js";import{_ as i,b as t,J as n,D as l,c as o,F as r,H as c,e as d,B as p,f as h,E as u,C as m,T as g,p as k,u as b,G as y}from"./chunks/framework.CoKB2z99.js";const v={key:0,class:"link-list"},f={class:"title"},E={class:"name"},F={class:"name-text"},L={key:0,class:"name-count"},_={class:"tip"},D={key:0,class:"all-link"},w=["href"],q={class:"cover"},C=["src","alt"],x={class:"data"},B={class:"desc"},A={key:1,class:"no-data"},I=i({__name:"LinkList",props:{listData:{type:[Array,String],default:()=>[]},showCount:{type:Boolean,default:!0},useFriendsLink:{type:Boolean,default:!1}},setup:a=>(e,i)=>{const k=s;return t(),n(g,{name:"fade",mode:"out-in"},{default:l((()=>{var s;return[(null==(s=a.listData)?void 0:s.length)?(t(),o("div",v,[(t(!0),o(r,null,c(a.listData,((s,e)=>{var n;return t(),o("div",{key:e,class:"link-type-list"},[d("div",f,[d("h2",E,[d("span",F,p((null==s?void 0:s.typeName)||"未知分组"),1),a.showCount?(t(),o("span",L,"（"+p((null==(n=null==s?void 0:s.typeList)?void 0:n.length)||0)+"）",1)):h("",!0)]),d("span",_,p((null==s?void 0:s.typeDesc)||"分组暂无简介"),1)]),(null==s?void 0:s.typeList)?(t(),o("div",D,[(t(!0),o(r,null,c(s.typeList,((e,n)=>(t(),o("a",{class:u(["link-card","s-card",{loss:"loss"===(null==s?void 0:s.type),"cf-friends-link":"loss"!==(null==s?void 0:s.type)&&a.useFriendsLink}]),key:n,href:"loss"!==(null==s?void 0:s.type)?e.url:null,target:"_blank"},[d("div",q,[m(k,{useFriendsLink:e.avatar||e.ico},{default:l((()=>[d("img",{src:e.avatar||e.ico,class:u(["cover-img",{"cf-friends-avatar":a.useFriendsLink}]),alt:(null==e?void 0:e.name)||"cover",onLoad:i[0]||(i[0]=s=>s.target.classList.add("loaded"))},null,42,C)])),_:2},1032,["useFriendsLink"])]),d("div",x,[d("span",{class:u(["name",{"cf-friends-name":a.useFriendsLink}])},p(e.name),3),d("span",B,p(e.desc),1)])],10,w)))),128))])):h("",!0)])})),128))])):(t(),o("div",A,"暂无友链数据"))]})),_:1})}},[["__scopeId","data-v-3c82cc0e"]]),P=[{type:"rec",typeName:"推荐",typeDesc:"都是大佬，推荐关注",typeList:[{name:"無名小栈",avatar:"https://pic.imgdb.cn/item/65bc52b0871b83018a06699d.png",desc:"分享技术与科技生活，本站curve主题作者",url:"https://blog.imsyy.top/"},{name:"张洪 Heo",avatar:"https://bu.dusays.com/2022/12/28/63ac2812183aa.png",desc:"产品设计师，独立开发者，设计与科技分享",url:"https://blog.zhheo.com/"},{name:"安知鱼",avatar:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",desc:"生活明朗，万物可爱",url:"https://blog.anheyu.com/"},{name:"风记星辰",avatar:"https://weavatar.com/avatar/8546cf1694037de5905abc62aeadf5e9?s=200&d=mm&r=g",desc:"有着非常优秀的设计与交互的博客",url:"https://www.thyuu.com/"},{name:"DIYgod",avatar:"https://ipfs.crossbell.io/ipfs/bafybeibefx2tyow77m2wcnsh5anaaxfy7ypxbcuapb52c4h255onqp72ye?img-quality=75&img-format=auto&img-onerror=redirect&img-width=256",desc:"写代码是热爱，写到世界充满爱！ 30k Stars巨佬",url:"https://diygod.cc/"}]},{type:"friends",typeName:"小伙伴们",typeDesc:"我们在一起，共同进步",typeList:[]}],j={class:"link"},N={class:"menu"},X=i({__name:"Link",setup(s){const i=k((()=>P.flatMap((s=>s.typeList)))),n=()=>{try{const s=i.value,a=s[Math.floor(Math.random()*s.length)];$message.warning(`您即将前往 ${null==a?void 0:a.name}，请注意链接是否安全`,{close:!0,duration:2e3},(()=>{(null==a?void 0:a.url)&&window.open(a.url,"_blank")}))}catch(s){console.error("友链随机访问时出错：",s),$message.error("友链随机访问时出错，请重试")}};return(s,i)=>{const r=a,c=I;return t(),o("div",j,[m(r,{type:"page",title:"友情链接",desc:"与各位博主无限进步"},{"header-slot":l((()=>[d("div",N,[d("div",{class:"menu-item random",onClick:n},i[1]||(i[1]=[d("i",{class:"iconfont icon-shuffle"},null,-1),d("span",{class:"name"},"随机访问",-1)])),d("div",{class:"menu-item add",onClick:i[0]||(i[0]=s=>b(e)("#友情链接申请"))},i[2]||(i[2]=[d("i",{class:"iconfont icon-right-round"},null,-1),d("span",{class:"name"},"申请友链",-1)]))])])),_:1}),m(c,{listData:b(P),useFriendsLink:!0},null,8,["listData"])])}}},[["__scopeId","data-v-fba4ce51"]]),M=JSON.parse('{"title":"友情链接","description":"","frontmatter":{"title":"友情链接","aside":false,"comment":true,"head":[["link",{"rel":"canonical","href":"https://blog.iceooh.com/pages/link"}]]},"headers":[],"relativePath":"pages/link.md","filePath":"pages/link.md","lastUpdated":1736473176000}'),S={name:"pages/link.md"},$=Object.assign(S,{setup:s=>(s,a)=>(t(),o("div",null,[m(X),a[0]||(a[0]=y('<h1 id="友情链接申请" tabindex="-1">友情链接申请 <a class="header-anchor" href="#友情链接申请" aria-label="Permalink to &quot;友情链接申请&quot;">​</a></h1><p>很高兴能和各位优秀的朋友们交流，本站友链目前采用<strong>手动添加</strong>，如果你想加入友链，可以在下方留言，我会在不忙的时候统一添加。</p><h3 id="友链相关须知" tabindex="-1">友链相关须知 <a class="header-anchor" href="#友链相关须知" aria-label="Permalink to &quot;友链相关须知&quot;">​</a></h3><ul><li>为了友链相关页面和组件的统一性和美观性，可能会对你的部分信息进行缩短处理，例如昵称包含 <code>博客</code>、<code>XX的XX</code> 等内容或形式<strong>将被简化</strong>。</li><li>为了图片加载速度和内容安全性考虑，头像或其他信息中的图片均使用本站图床，<strong>所以无法收到贵站自己的头像更新</strong>，如果有迫切的更改信息需求，<strong>请在本页的评论中评论说明</strong>。</li></ul><h3 id="我的友链信息" tabindex="-1">我的友链信息 <a class="header-anchor" href="#我的友链信息" aria-label="Permalink to &quot;我的友链信息&quot;">​</a></h3><ul><li>名称：<code>Iceooh</code></li><li>描述：<code>分享技术与科技生活</code></li><li>地址：<code>https://blog.iceooh.com/</code></li><li>头像：<code>https://pic.imgdb.cn/item/65bc52b0871b83018a06699d.png</code></li><li>站点图片：<code>https://pic.imgdb.cn/item/65dc47009f345e8d030b65ba.png</code></li></ul><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Iceooh</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">desc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">分享技术与科技生活</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://blog.iceooh.com/</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">avatar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://pic.imgdb.cn/item/65bc52b0871b83018a06699d.png</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">screenshot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://pic.imgdb.cn/item/65dc47009f345e8d030b65ba.png</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="申请友链" tabindex="-1">申请友链 <a class="header-anchor" href="#申请友链" aria-label="Permalink to &quot;申请友链&quot;">​</a></h3><ul><li>我已添加 <a href="https://blog.iceooh.com/" target="_blank" rel="noreferrer">Iceooh</a> 的友情链接。</li><li><strong>请多多进行互动后再来进行友链添加</strong>，若为首次评论直接申请友链，将不会通过。</li><li>本站不添加 <strong>采集站</strong>、<strong>纯搬运站点</strong>、<strong>论坛类站点</strong> 等非 <strong>个人博客</strong> 类型的站点。</li><li>站点目前可以在 <strong>中国大陆区域</strong> 正常访问。</li><li>需要是独立域名，不接受 <code>github.io</code>、<code>vercel.app</code> 等第三方域名。</li><li>网站内容符合 <strong>中国大陆法律法规</strong>。</li></ul><blockquote><p>若申请时或日后有违反上述规定的站点，博主有权<strong>自行删除且不进行通知！</strong></p></blockquote>',10))]))});export{M as __pageData,$ as default};
