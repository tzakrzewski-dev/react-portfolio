(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(157)},105:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var o=a(16),l=a(23),r=a(17),i=a(29),n=a(1),s=a.n(n),c=a(40),m=a.n(c),p=a(14),d=a(15),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(105);var f=a(159),E=a(160),v=a(30),h=a(25),b=a(31),w=a.n(b),k=a(19),N=a(24),y=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).menuTrigger=l.menuTrigger.bind(Object(N.a)(l)),l.CLoseMenuTrigger=l.CLoseMenuTrigger.bind(Object(N.a)(l)),window.addEventListener("load",function(){console.log("All assets are loaded")}),l}return Object(l.a)(a,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"render",value:function(){var e=document.querySelectorAll(".has-droupdown > a");for(var t in e)e.hasOwnProperty(t)&&(e[t].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});return s.a.createElement("header",{className:"header-area formobile-menu header--transparent"},s.a.createElement("div",{className:"header-wrapper",id:"header-wrapper"},s.a.createElement("div",{className:"header-left"},s.a.createElement("div",{className:"logo"},s.a.createElement("a",{href:"/"},s.a.createElement("h3",{className:"title",style:{color:"#1da1f2"}},"Teddy ",s.a.createElement("strong",null," Zakrzewski"))))),s.a.createElement("div",{className:"header-right"},s.a.createElement("nav",{className:"mainmenunav d-lg-block"},s.a.createElement("ul",{className:"mainmenu"},s.a.createElement("li",{className:"has-droupdown"},s.a.createElement(p.b,{to:"#"},"Mes Projets"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/2")},"Mika Piscine")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/3")},"ArteNobilia")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/4")},"Ecommerce")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/5")},"Cannes Is Up")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/6")},"Application m\xe9t\xe9o")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/7")},"Application Mercedes")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/8")},"Configurateur 3008")))),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/presentation")},"A propos")),s.a.createElement("li",null,s.a.createElement("a",{href:"/assets/models/cv.pdf",download:!0},s.a.createElement("span",{className:"txtmenu "},"Mon CV"))),s.a.createElement("li",null,s.a.createElement("a",{href:"mailto:contact@cannesisup.com"}," ",s.a.createElement("span",{className:"txtmenu "},"Contact"))))),s.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},s.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},s.a.createElement(k.b,null))),s.a.createElement("div",{className:"close-menu d-block d-lg-none"},s.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},s.a.createElement(k.c,null))))))}}]),a}(n.Component),_=[{Social:s.a.createElement(v.b,{size:30}),link:"https://github.com/tzakrzewski-dev"},{Social:s.a.createElement(v.c,{size:30}),link:"https://www.linkedin.com/in/teddy-zakrzewski/"},{Social:s.a.createElement(v.a,{size:30}),link:"mailto:teddy.zakrzewski@outlook.fr"}],S=function(){return s.a.createElement("div",{className:"footer-style-2 ptb--30 bg_image bg_image--1","data-black-overlay":"6"},s.a.createElement("div",{className:"wrapper plr--50 plr_sm--20"},s.a.createElement("div",{className:"row align-items-center justify-content-between"},s.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},s.a.createElement("div",{className:"inner text-center"},s.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle"},_.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("a",{href:"".concat(e.link)},e.Social))})))),s.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 col-12"},s.a.createElement("div",{className:"inner text-lg-right text-center mt_md--20 mt_sm--20"},s.a.createElement("div",{className:"text"},s.a.createElement("p",null,"Copyright \xa9 2020 Teddy Zakrzewski.")))))))},j=a(93),T=a(95),x=a.n(T),C={dots:!0,infinite:!0,slidesToShow:2,slidesToScroll:1,autoplay:!0,speed:2e3,arrow:!0,autoplaySpeed:2e3,cssEase:"linear",pauseOnHover:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},M=[{Social:s.a.createElement(v.b,null),link:"https://github.com/tzakrzewski-dev"},{Social:s.a.createElement(v.c,null),link:"https://www.linkedin.com/in/teddy-zakrzewski/"}],A=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){var e=h.PortfolioList.filter(function(e){return e.id===parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1))}).map(function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(y,{headertransparent:"header--transparent",colorblack:"color--black",logoname:"logo.png"}),s.a.createElement("div",{className:"rn-page-title-area pt--120 pb--190 bg_image bg_image--".concat(e.id),"data-black-overlay":"7"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"rn-page-title text-center pt--100"},s.a.createElement("h2",{className:"title theme-gradient"},e.header_title),s.a.createElement("p",{style:{color:"#f7f7f7"}},e.header_paragraphe)))))),s.a.createElement("div",{className:"rn-portfolio-details ptb--120 bg_color--1"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"portfolio-details"},s.a.createElement("div",{className:"inner"},s.a.createElement("h2",{className:"title"},e.customer),s.a.createElement("p",{className:"subtitle"},e.subtitle),s.a.createElement("p",null,e.title),s.a.createElement("div",{className:"portfolio-view-list d-flex flex-wrap"},s.a.createElement("div",{className:"port-view"},s.a.createElement("span",null,"Date"),s.a.createElement("h4",null,e.date)),s.a.createElement("div",{className:"port-view"},s.a.createElement("span",null,"Type de projet"),s.a.createElement("h4",null,e.category)),s.a.createElement("div",{className:"port-view"},s.a.createElement("span",null,"Logiciels"),s.a.createElement("h4",null,e.logiciels)),s.a.createElement("div",{className:"port-view"},s.a.createElement("span",null,"Technos"),s.a.createElement("h4",null,e.technos)),s.a.createElement("div",{className:"port-view"},s.a.createElement("span",null,"Framework"),s.a.createElement("h4",null,e.framework))),s.a.createElement("div",{className:"portfolio-share-link mt--20 pb--70 pb_sm--40"},s.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-start liststyle mt--15"},M.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("a",{href:"".concat(e.link)},e.Social))})))),s.a.createElement("div",{className:"portfolio-thumb-inner"},s.a.createElement("div",{className:"thumb position-relative mb--30"},e.videolink&&s.a.createElement(j.Player,{playsInline:!0,poster:e.poster_video,src:e.videolink})),s.a.createElement("div",{className:"thumb mb--30"},e.images_1&&s.a.createElement("img",{src:e.images_1,alt:"Portfolio Images"})),s.a.createElement("div",{className:"thumb mb--30"},e.images_2&&s.a.createElement("img",{src:e.images_2,alt:"Portfolio Images"})),s.a.createElement("div",{className:"thumb mb--30"},e.images_3&&s.a.createElement("img",{src:e.images_3,alt:"Portfolio Images"})))))))),s.a.createElement(f.a,{className:"portfolio-related-work pb--120 bg_color--1"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"section-title service-style--3 text-center mb--15"},s.a.createElement("h3",{className:"title"},"Mes r\xe9alisations"),s.a.createElement("p",null,"Quelques projets r\xe9alis\xe9s avec diff\xe9rentes technos")))),s.a.createElement(f.a,null,s.a.createElement(E.a,{className:"col-lg-12"},s.a.createElement(x.a,C,h.PortfolioList.map(function(e){return s.a.createElement("div",null,s.a.createElement("h3",{style:{textAlign:"center"}},e.category," "),s.a.createElement("a",{className:"rn-btn text-black",href:"".concat("/react-portfolio","/portfolio-detail/").concat(e.id)},s.a.createElement("img",{key:e.id,src:e.images_1,alt:""})))})))))),s.a.createElement("div",{className:"backto-top",style:{fontSize:50}},s.a.createElement(w.a,{showUnder:160,style:{bottom:"100px"}},s.a.createElement(k.a,null))),s.a.createElement(S,null))});return s.a.createElement("div",null,e)}}]),a}(n.Component),P=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).menuTrigger=l.menuTrigger.bind(Object(N.a)(l)),l.CLoseMenuTrigger=l.CLoseMenuTrigger.bind(Object(N.a)(l)),window.addEventListener("load",function(){console.log("All assets are loaded")}),l}return Object(l.a)(a,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"render",value:function(){var e=document.querySelectorAll(".has-droupdown > a");for(var t in e)e.hasOwnProperty(t)&&(e[t].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var a=this.props,o=a.logo,l=a.color,r=a.headerPosition;return"light"===o?s.a.createElement("img",{src:"/assets/images/logo/logo-light.png",alt:"Teddy Zakrzewski"}):"dark"===o?s.a.createElement("img",{src:"/assets/images/logo/logo-dark.png",alt:"Teddy Zakrzewski"}):"symbol-dark"===o?s.a.createElement("img",{src:"/assets/images/logo/logo-symbol-dark.png",alt:"Teddy Zakrzewski"}):"all-dark"===o?s.a.createElement("img",{src:"/assets/images/logo/logo-all-dark.png",alt:"Teddy Zakrzewski"}):"symbol-light"===o?s.a.createElement("img",{src:"/assets/images/logo/logo-symbol-light.png",alt:"Teddy Zakrzewski"}):s.a.createElement("img",{src:"/assets/images/logo/logo.png",alt:"Teddy Zakrzewski"}),s.a.createElement("header",{className:"header-area formobile-menu ".concat(r," ").concat(l)},s.a.createElement("div",{className:"header-wrapper",id:"header-wrapper"},s.a.createElement("div",{className:"header-left"},s.a.createElement("div",{className:"logo"},s.a.createElement("a",{href:"/"},s.a.createElement("h3",{className:"title",style:{color:"#1da1f2"}},"Teddy ",s.a.createElement("strong",null," Zakrzewski"))))),s.a.createElement("div",{className:"header-right"},s.a.createElement("nav",{className:"mainmenunav d-lg-block"},s.a.createElement("ul",{className:"mainmenu"},s.a.createElement("li",{className:"has-droupdown"},s.a.createElement(p.b,{to:"#"},"Mes Projets"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/2")},"Mika Piscine")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/3")},"ArteNobilia")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/4")},"Ecommerce")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/5")},"Cannes Is Up")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/6")},"Application m\xe9t\xe9o")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/7")},"Application Mercedes")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/portfolio-detail/8")},"Configurateur 3008")))),s.a.createElement("li",null,s.a.createElement(p.b,{to:"".concat("/react-portfolio","/presentation")},"A propos")),s.a.createElement("li",null,s.a.createElement("a",{href:"/assets/models/cv.pdf",download:!0},s.a.createElement("span",{className:"txtmenu "},"Mon CV"))),s.a.createElement("li",null,s.a.createElement("a",{href:"mailto:contact@cannesisup.com"}," ",s.a.createElement("span",{className:"txtmenu "},"Contact"))))),s.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},s.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},s.a.createElement(k.b,null))),s.a.createElement("div",{className:"close-menu d-block d-lg-none"},s.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},s.a.createElement(k.c,null))))))}}]),a}(n.Component),z=a(97),L={duration:5e3,transitionDuration:500,infinite:!0,indicators:!0,scale:.4,arrows:!0},O=function(){return s.a.createElement("div",{className:"creative-portfolio"},s.a.createElement(P,{headerPosition:"header--static",logo:"symbol-dark",color:"color-black"}),s.a.createElement(z.Zoom,L,h.imageSlide.map(function(e,t){return s.a.createElement("img",{key:t,src:e.images,alt:""})})),s.a.createElement("div",{className:"creative-portfolio-wrapper bg_color--1"},s.a.createElement("div",{className:"creative-portfolio-wrapper plr--10"},s.a.createElement("div",{className:"row row--5"},h.PortfolioList.map(function(e,t){return s.a.createElement("div",{className:"col-lg-3 col-md-6 col-12",key:t},s.a.createElement("div",{className:"portfolio-style--3"},s.a.createElement("div",{className:"thumbnail"},s.a.createElement("a",{href:"/portefolio-detail/".concat(e.id)},s.a.createElement("img",{className:"w-100",src:"".concat("/react-portfolio","/assets/images/portfolio/portfolio-").concat(e.images,".png"),alt:"Portfolio Images"}))),s.a.createElement("div",{className:"content"},s.a.createElement("p",{className:"portfoliotype"},e.category),s.a.createElement("h4",{className:"title"},s.a.createElement("a",{href:"".concat("/react-portfolio","/portfolio-detail/").concat(e.id)},e.title)),s.a.createElement("div",{className:"portfolio-btn"},s.a.createElement("a",{className:"rn-btn text-white",href:"".concat("/react-portfolio","/portfolio-detail/").concat(e.id)},"En savoir plus")))))})))),s.a.createElement(S,null),s.a.createElement("div",{className:"backto-top",style:{fontSize:50}},s.a.createElement(w.a,{showUnder:160,style:{bottom:"100px"}},s.a.createElement(k.a,null))))},R=a(32),W=a(27),q=a(2);a(148),a(149);function I(e){return function(){var t,a=Object(W.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var o=Object(W.a)(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return Object(R.a)(this,t)}}var B=function(e){Object(r.a)(a,e);var t=I(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=new q.bb,t=new q.R(75,window.innerWidth/window.innerHeight,.1,1e3),a=new q.pb;a.setSize(window.innerWidth,window.innerHeight),this.mount.appendChild(a.domElement);var o=new q.d(1,1,1),l=new q.H({color:65280}),r=new q.G(o,l);e.add(r),t.position.z=5;!function o(){requestAnimationFrame(o),r.rotation.x+=.01,r.rotation.y+=.01,a.render(e,t)}()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{ref:function(t){return e.mount=t}})}}]),a}(n.Component),D=a(99),V=function(){return s.a.createElement("div",null,s.a.createElement(P,{headerPosition:"header--static",logo:"symbol-dark",color:"color-black"}),s.a.createElement("div",{className:"slider-wrapper"},h.presentation.map(function(e,t){return s.a.createElement("div",{className:"slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height",key:t},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-lg-5"},s.a.createElement("div",{className:"designer-thumbnail text-center"},s.a.createElement("img",{src:"/assets/images/apropos/teddy.jpg",alt:"Teddy Zakrzewski"}))),s.a.createElement("div",{className:"col-lg-7 mt_md--40 mt_sm--40"},s.a.createElement("div",{className:"inner ".concat(e.textPosition)},e.category?s.a.createElement("span",null,e.category):"",s.a.createElement("h1",{className:"title",style:{fontSize:"40px"}},"Bonjour, je m'appelle Teddy.",s.a.createElement("br",null),s.a.createElement(D.a,null,s.a.createElement("span",null,"Developpeur Full Stack JavaScript."),s.a.createElement("span",null,"Front-End & Back-End. "),s.a.createElement("span",null,"Je r\xe9side sur la C\xf4te d'Azur."))," "),e.description?s.a.createElement("p",{className:"description"},e.description):"",e.description2?s.a.createElement("p",{className:"description"},e.description2):"",e.buttonText?s.a.createElement("div",{className:"slide-btn"},s.a.createElement("a",{className:"rn-button-style--2 btn-primary-color",href:"".concat(e.buttonLink)},e.buttonText)):"")))))})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"section-title service-style--3 text-center mb--15"},s.a.createElement("h3",{className:"title",style:{paddingTop:"50px"}},"Mes skills"," ")))),s.a.createElement("div",{className:"creative-portfolio-wrapper bg_color--1"},s.a.createElement("div",{className:"creative-portfolio-wrapper plr--10"},s.a.createElement("div",{className:"row row--5"},h.imageSkills.map(function(e,t){return s.a.createElement("div",{className:"col-lg-3 col-md-6 col-12",key:t},s.a.createElement("div",{className:"portfolio-style--3"},s.a.createElement("div",{className:"thumbnail"},s.a.createElement("a",{href:e.link},s.a.createElement("img",{className:"w-100",src:"".concat(e.images),alt:"Portfolio Images"}))),s.a.createElement("div",{className:"content"},s.a.createElement("h3",{style:{color:"#f7f7f7"}},e.category),s.a.createElement("h4",null,e.name),s.a.createElement("h5",{className:"title ",style:{color:"#f7f7f7"}},s.a.createElement("a",{href:e.link},e.use)),s.a.createElement("div",{className:"portfolio-btn"},s.a.createElement("a",{className:"rn-btn text-white",href:e.link},"En savoir plus")))))})))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"section-title service-style--3 text-center mb--15"},s.a.createElement("h3",{className:"title",style:{paddingTop:"50px"}},"Skills en cours d'apprentissage"," ")))),s.a.createElement("div",{className:"creative-portfolio-wrapper bg_color--1"},s.a.createElement("div",{className:"creative-portfolio-wrapper plr--10"},s.a.createElement("div",{className:"row row--5"},h.imageNewTechnos.map(function(e,t){return s.a.createElement("div",{className:"col-lg-3 col-md-6 col-12",key:t},s.a.createElement("div",{className:"portfolio-style--3"},s.a.createElement("div",{className:"thumbnail"},s.a.createElement("a",{href:e.link},s.a.createElement("img",{className:"w-100",src:"".concat(e.images),alt:"Portfolio Images"}))),s.a.createElement("div",{className:"content"},s.a.createElement("h3",{style:{color:"#f7f7f7"}},e.category),s.a.createElement("h4",null,e.name),s.a.createElement("h5",{className:"title",style:{color:"#f7f7f7"}},s.a.createElement("a",{href:e.link},e.use)),s.a.createElement("div",{className:"portfolio-btn"},s.a.createElement("a",{className:"rn-btn text-white",href:e.link},"En savoir plus")))))})))),s.a.createElement(S,null),s.a.createElement("div",{className:"backto-top"},s.a.createElement(w.a,{showUnder:160},s.a.createElement(k.a,null))))},F=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(d.c,null,s.a.createElement(d.a,{exact:!0,path:"".concat("/react-portfolio","/"),component:O}),s.a.createElement(d.a,{exact:!0,path:"".concat("/react-portfolio","/portfolio-detail/:id"),component:A}),s.a.createElement(d.a,{exact:!0,path:"".concat("/react-portfolio","/presentation"),component:V}),s.a.createElement(d.a,{exact:!0,path:"".concat("/react-portfolio","/three"),component:B})))}}]),a}(n.Component);m.a.render(s.a.createElement(F,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-portfolio","/service-worker.js");u?(function(e,t){fetch(e).then(function(a){var o=a.headers.get("content-type");404===a.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):g(t,e)})}}()},25:function(e){e.exports={PortfolioList:[{id:2,images:1,category:"Site vitrine",title:"Landing Page Site Mika piscine",header_title:"Mika Piscines",header_paragraphe:"Le sp\xe9cialiste de la r\xe9novation de piscine ",customer:"Mika Piscines",title_theme_gradient:"",subtitle:"Cr\xe9ation d'une landing page responsive",date:"Mars 2020",logiciels:"Vscode/Git",technos:"Html,Css",framework:"Aucun",poster_video:"/assets/images/portfolio/portfolio-video-01.png",videolink:"/assets/video/mika-piscine.webm",images_1:"/assets/images/portfolio/portfolio-big-01.png",images_2:"/assets/images/portfolio/portfolio-ipad-01.png",images_3:"/assets/images/portfolio/portfolio-iphone11-01.png"},{id:3,images:"2",category:"Site vitrine",title:"Landing Page Site Artenobilia",header_title:"Artenobilia",header_paragraphe:"Design & M\xe9tiers d'art ",customer:"Artenobilia",title_theme_gradient:"",subtitle:"Cr\xe9ation d'une landing page responsive pour une galerie d'art avec respecter de la charte graphique. Structure de la page avec un header, une mosa\xefque \xab catalogue \xbb, les nouveaux produits, une pr\xe9sentation de l'exposition , un footer avec formulaire de contact",date:"Mars 2020",logiciels:"Vscode/Git",technos:"Html,Css",framework:"Aucun",poster_video:"/assets/images/portfolio/portfolio-video-02.png",videolink:"/assets/video/artenobilia.webm",images_1:"/assets/images/portfolio/portfolio-big-02.png",images_2:"/assets/images/portfolio/portfolio-ipad-02.png",images_3:"/assets/images/portfolio/portfolio-iphone11-02.png"},{id:4,images:"3",category:"Application Web",title:"Site Ecommerce",header_title:"Amazon pas cher",header_paragraphe:"Site Ecommerce",customer:"Amazon pas cher",title_theme_gradient:"",subtitle:"Cr\xe9ation d'un site ecommerce en stack MERN ,avec cot\xe9 front-end fiches produit, pages cat\xe9gories, mise au panier avec ajout & suppression de produits. Cot\xe9 back-end, cr\xe9ation d'une base de donn\xe9e sous MongoDb,Express & Mangoose pour la partie MVC, fetch des datas dans le front",date:"Avril 2020",logiciels:"Vscode/Git",technos:"React",framework:"Bootstrap/Redux",poster_video:"/assets/images/portfolio/portfolio-video-03.png",videolink:"/assets/video/amazon.webm",images_1:"/assets/images/portfolio/portfolio-big-03.png",images_2:"/assets/images/portfolio/portfolio-ipad-03.png",images_3:"/assets/images/portfolio/portfolio-big-03-1.png"},{id:5,images:"4",category:"Application Web",title:"Site Cannes Is Up",header_title:"Cannes Is Up",header_paragraphe:"Application Web",customer:"Cannes Is Up",title_theme_gradient:"",subtitle:"Cr\xe9ation d'un annuaire avec barre de recherche et finscroll, d'une fiche d\xe9taill\xe9e , d'un backoffice adh\xe9rent & admin pour g\xe9rer les informations et status. Les adh\xe9rents ont \xe9t\xe9 remplac\xe9s par des personnages de la saga Harry Potter pour des raisons de confidentialit\xe9",date:"Mai 2020",logiciels:"Vscode/Git",technos:"React",framework:"Bootstrap/SyncFusion",poster_video:"/assets/images/portfolio/portfolio-video-04.png",videolink:"/assets/video/cannesisup.webm",images_1:"/assets/images/portfolio/portfolio-big-04.png",images_2:"/assets/images/portfolio/portfolio-ipad-04.png",images_3:"/assets/images/portfolio/portfolio-big-04-1.png"},{id:6,images:"5",category:"Application Mobile",title:"Application m\xe9t\xe9o",header_title:"Openweather",header_paragraphe:"Application Mobile Native Cross-Platforme Android",customer:"Application M\xe9t\xe9o",title_theme_gradient:"",subtitle:"R\xe9alisation d\u2019une application mobile m\xe9t\xe9o en Cross-Platforme sur ReactNative avec pr\xe9vision m\xe9t\xe9o du jour & 5 jours aliment\xe9s par l\u2019API openweather",date:"Mai 2020",logiciels:"Vscode/Git",technos:"ReactNative",framework:"NativeBase",poster_video:"",videolink:"/assets/video/meteo.webm",images_1:"/assets/images/portfolio/portfolio-big-05.png",images_2:"",images_3:""},{id:7,images:"6",category:"Application Mobile",title:"Configurateur Mercedes",header_title:"Mercedes",header_paragraphe:"Application Mobile Native Cross-Platforme Android",customer:"Mercedes",title_theme_gradient:"",subtitle:"R\xe9alisation d\u2019une application mobile comportant la liste des mod\xe8les de v\xe9hicule Mercedes par l\u2019API Mercedes pour developpeur",date:"Mai 2020",logiciels:"Vscode/Git",technos:"ReactNative",framework:"NativeBase",poster_video:"",videolink:"/assets/video/mercedes.webm",images_1:"/assets/images/portfolio/portfolio-big-06.png",images_2:"/assets/images/portfolio/portfolio-big-06-1.png",images_3:"/assets/images/portfolio/portfolio-big-06-2.png"},{id:8,images:"7",category:"Application Web",title:"Configurateur Peugeot Three.js",header_title:"Peugeot",header_paragraphe:"Application Web",customer:"Peugeot",title_theme_gradient:"",subtitle:"R\xe9alisation d'un configurateur de v\xe9hicule pour choisir la  couleur des \xe9l\xe9ments. Travail du mod\xe8le 3D sous Blender pour identifier les \xe9lements sur lesquels on souhaite agir ",date:"Mai 2020",logiciels:"Vscode/Git",technos:"React,",framework:"Three.js",poster_video:"",videolink:"/assets/video/configurateur.webm",images_1:"/assets/images/portfolio/portfolio-big-07.png",images_2:"/assets/images/portfolio/portfolio-big-07-1.png",images_3:"/assets/images/portfolio/portfolio-big-07-2.png"}],imageSlide:[{id:1,images:"/assets/images/portfolio/slide1.png"},{id:2,images:"/assets/images/portfolio/slide2.png"},{id:3,images:"/assets/images/portfolio/slide3.png"},{id:4,images:"/assets/images/portfolio/slide4.png"},{id:5,images:"/assets/images/portfolio/slide5.png"}],presentation:[{textPosition:"text-left",category:"Bienvenue sur mon portfolio d\xe9velopp\xe9 en React ",description:"Passionn\xe9 par le web, les nouvelles technologies, le rendu 3D et les configurateurs produits, je prends plaisir chaque jour \xe0 coder et relever des challenges.",description2:"Je suis en veille technologique r\xe9guli\xe8re afin de tester de nombreuses technos dans le but d'\xe9valuer leurs maturit\xe9es, forces et faiblesses. Ceci permet de pouvoir proposer les meilleures solutions pour r\xe9pondre aux cahiers des charges.",buttonText:"",buttonLink:""}],imageSkills:[{id:1,images:"/assets/images/skills/git.png",category:"Versionning / Collaboratif",name:"Git & Github",use:"Syst\xe8mes de gestion de version distribu\xe9e",link:"https://git-scm.com/"},{id:2,images:"/assets/images/skills/html.png",name:"Html5/Css3/JavaScript",category:"Langages",use:"Langages du developpeur Web pour concevoir un projet",link:"https://developer.mozilla.org/fr/docs/Web/JavaScript"},{id:3,images:"/assets/images/skills/mern.png",name:"MERN",category:"Technologies",use:"Technologies pour d\xe9velopper et faire fonctionner un programme",link:"https://www.bocasay.com/fr/comment-fonctionne-mern-stack/"},{id:4,images:"/assets/images/skills/framework.png",name:"Bootstrap/Material UI/MDB/Materialize",category:"Frameworks Web JavaScript",use:"Biblioth\xe8ques d'outils et m\xe9thodes pour le d\xe9veloppement Web",link:"https://getbootstrap.com/"},{id:5,images:"/assets/images/skills/nativebase.png",name:"NativeBase",category:"Framework Mobile JavaScript",use:"Biblioth\xe8ques d'outils et m\xe9thodes pour le d\xe9veloppement Mobile Natif",link:"https://nativebase.io/"},{id:6,images:"/assets/images/skills/reactnative.png",name:"ReactNative",category:"Technologies",use:"Framework pour d\xe9veloppement d'applications mobiles natives",link:"https://reactnative.dev/"},{id:7,images:"/assets/images/skills/scrum.png",name:"Trello/Scrum",category:"Gestion de projets",use:"Outil & m\xe9thode Agile de gestion de projets informatiques",link:"https://www.scrum.org/"},{id:8,images:"/assets/images/skills/opquast.png",name:"Opquast",category:"Certification",use:"Certification de comp\xe9tences des m\xe9tiers du Web",link:"https://www.scrum.org/"}],imageNewTechnos:[{id:1,images:"/assets/images/skills/vuejs.png",name:"Vue.js",category:"Framework Web JavaScript",use:"  Framework javascript utilisable en int\xe9gration ou seul",link:"https://vuejs.org/"},{id:2,images:"/assets/images/skills/php.png",name:"PHP",category:"Langage",use:"Langage de scripts int\xe9grable au Html pour le develeppement d'applications Web",link:"https://www.php.net/"},{id:3,images:"/assets/images/skills/threejs.png",name:"Three.js",category:"Framework Web JavaScript",use:"Biblioth\xe8que JavaScript pour cr\xe9er des sc\xe8nes 3D dans un navigateur web",link:"https://threejs.org/"},{id:4,images:"/assets/images/skills/verge3d.png",name:"Verge3D",category:"Rendu 3D",use:"Moteur de rendu pour cr\xe9er des exp\xe9riences 3D dans un navigateur web",link:"https://www.soft8soft.com/"}]}}},[[100,1,2]]]);
//# sourceMappingURL=main.80bed454.chunk.js.map