(this.webpackJsonpomni=this.webpackJsonpomni||[]).push([[5,6],{137:function(e,t,a){e.exports=a.p+"static/media/1.80eb678f.jpg"},138:function(e,t,a){e.exports=a.p+"static/media/2.5fa59804.jpg"},139:function(e,t,a){e.exports=a.p+"static/media/3.48d29d21.jpg"},148:function(e,t,a){"use strict";a.r(t),a.d(t,"Home",(function(){return M}));var n=a(100),i=a.n(n),r=a(102),s=a(12),c=a(13),o=a(15),l=a(14),u=a(103),d=a.n(u),m=a(0),h=a.n(m),p=a(16),f=a(121),v=a(145),g=a(146),E=a(147),x=a(141),C=a(20),w=a(10),b=a(11),y=function(){function e(t){var a=this;Object(s.a)(this,e),this.props=t,this.resource=void 0,this.id=void 0,this.getStoreKey=function(e){return"".concat(a.resource).concat(e)},this.props=t,this.id=t.id,this.resource=this.constructor.resource}return Object(c.a)(e,[{key:"$save",value:function(){var e,t,a;return e=this.resource,t=this.getStoreKey(this.props.id||this.props._id),a=this,Object(C.a)({type:"".concat(e,"/").concat(w.d),id:t,instance:a}),this}},{key:"$saveAll",value:function(){var e,t,a=this,n={};return E.a((function(e){return n[a.getStoreKey(e.id)]={props:e,resource:a.resource}}),this.props),e=this.resource,t=n,Object(C.a)({type:"".concat(e,"/").concat(w.c),instances:t}),[this]}}],[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.a.getState();return t.model.get(this.getStoreKey(e,this))}},{key:"list",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.a.getState();return x.a(t.model.filter((function(t){return t.resource===e.resource?t.props:""})).toJS())}},{key:"delete",value:function(e){var t;return t=this.getStoreKey(e.props.id||e.props._id,e),Object(C.a)({type:w.b,key:t}),this}}]),e}();y.resource=void 0,y.getStoreKey=function(e,t){return"".concat(t.resource).concat(e)};var S=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).props=e,n}return a}(y);S.resource="user";var F=a(142),D=a(143),j=a(144),k=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={activeIndex:0,animating:!1},e.next=function(){var t=e.state,a=t.activeIndex;if(!t.animating){var n=a===e.props.items.length-1?0:a+1;e.setState({activeIndex:n}),e.props.onNext&&e.props.onNext(n)}},e.previous=function(){var t=e.state,a=t.activeIndex;if(!t.animating){var n=0===a?e.props.items.length-1:a-1;e.setState({activeIndex:n}),e.props.onPre&&e.props.onPre(n)}},e.goToIndex=function(t){e.state.animating||e.setState({activeIndex:t})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.activeIndex;return h.a.createElement(F.a,{activeIndex:e,next:this.next,previous:this.previous},h.a.createElement(D.a,{items:this.props.items,activeIndex:e,onClickHandler:this.goToIndex}),this.props.slides,h.a.createElement(j.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),h.a.createElement(j.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),a}(h.a.Component),N=a(94),O=a(137),A=a.n(O),I=a(138),T=a.n(I),B=a(139),H=a.n(B),R=[{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 1",caption:"Slide 1"},{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 2",caption:"Slide 2"},{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 3",caption:"Slide 3"}],_=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).slides=[1,2,3,4,5,6,7,8].map((function(t,a){var n=[A.a,T.a,H.a,A.a,T.a,H.a,A.a,T.a,H.a];return m.createElement(f.a,{onExiting:function(){return e.setState({animating:!0})},onExited:function(){return e.setState({animating:!1})},key:t},m.createElement("div",{className:""},m.createElement("img",{width:"100%",height:"400px",src:n[a],alt:"",key:t}))," ")})),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://api.github.com/users");case 2:t=e.sent,new S(t.data).$saveAll();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return m.createElement("div",null,m.createElement("div",{className:"CarouselContainer"},m.createElement(k,{items:R,slides:this.slides})),m.createElement(N.SideCarousel,null),m.createElement(v.a,{className:"bg-wheat"},m.createElement(g.a,{xs:12,md:6,lg:6,className:"flex j-center fd-col"},m.createElement("h1",null,"Malhar Collection Rhythm of life!"),m.createElement("div",null,"Spread the joy with our celebratory wardrobe with splashes of colour, natural hues and gentle handcrafted motifs and patterns. Discover beautiful hand-woven fabrics perfect for the festivities around the corner. Take a look at these curated looks we put together just for you!")),m.createElement(g.a,{xs:12,md:6,lg:6},m.createElement("div",{className:"image"},m.createElement("img",{alt:" col-1",width:"100%",src:"https://www.fabindia.com/file/general/look-front-30-07.jpg"})))),m.createElement(v.a,null,m.createElement(g.a,{xs:12,md:6,lg:6},m.createElement("div",{className:"image"},m.createElement("img",{alt:" col-1",width:"100%",src:"https://www.fabindia.com/file/general/look-front-30-07.jpg"})))," ",m.createElement(g.a,{xs:12,md:6,lg:6,className:"flex j-center fd-col"},m.createElement("h1",null," The Home Edition!"),m.createElement("div",null,"It's good to be home Home is a place for Love and happiness. Make it a beautiful space with our home furnishings. Experiment with soothing pastels and contrasting accents to make it your own. Sit back & relax. Get those creative juices flowing..It's time for some TLC. #WFM #InThisTogether"))),m.createElement(v.a,null,m.createElement(g.a,{xs:12,className:"flex j-center fd-col HomeSignup"},m.createElement("h2",null,"Be the First to know!"),m.createElement("p",null,"Join our mailing list for exclusive access to the latest fashion trends, tips, and more."),m.createElement("div",{className:"SignupInput"},m.createElement("div",{className:"Inner"},m.createElement("input",{className:"SearchInput",placeholder:"Enter email here"}),m.createElement("button",{className:"SingupButton"},"Sign Me Up!"))))))}}]),a}(m.Component),M=Object(p.b)((function(){return{users:S.list()}}))(_)},82:function(e,t,a){},83:function(e,t,a){e.exports=a.p+"static/media/f1.a94e7f00.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/f2.ac434b7f.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/f3.612eb0a6.jpg"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"SideCarousel",(function(){return g}));var n=a(12),i=a(13),r=a(15),s=a(14),c=a(0),o=a(95),l=a.n(o),u=(a(97),a(98),a(82),a(20)),d=a(83),m=a.n(d),h=a(84),p=a.n(h),f=a(85),v=a.n(f),g=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={activeSlide:1},e.carRef1=c.createRef(),e}return Object(i.a)(a,[{key:"getRandomNumber",value:function(){return Math.floor(10*Math.random())}},{key:"render",value:function(){var e=this,t={dots:!0,infinite:!0,speed:500,slidesToShow:Object(u.b)()?1:3,slidesToScroll:1};return c.createElement("div",{className:"Side-Carousel"},!Object(u.b)()&&c.createElement("div",{className:"Controls"},c.createElement("div",{onClick:function(){e.setState({activeSlide:1===e.state.activeSlide?8:e.state.activeSlide-1}),e.carRef1.current.slickPrev()}},c.createElement("i",{className:"fa font-50 fa-arrow-circle-left"})),c.createElement("div",{className:"SlideNumber"}," ",this.state.activeSlide," / 8"),c.createElement("div",{onClick:function(){e.setState({activeSlide:8===e.state.activeSlide?1:e.state.activeSlide+1}),e.carRef1.current.slickNext()}},c.createElement("i",{className:"fa font-50 fa-arrow-circle-right"}))),c.createElement("div",{className:"Carousel-Items"},c.createElement(l.a,Object.assign({ref:this.carRef1},t),[1,2,3,4,5,6,7,8].map((function(e,t){var a=[m.a,p.a,v.a,m.a,p.a,v.a,m.a,p.a,v.a];return c.createElement("div",{className:"SlideImage"},c.createElement("div",null,c.createElement("img",{width:"208px",height:"260px",src:a[t],alt:"",key:e,className:"SideImage"}),c.createElement("div",{className:"sub_tit"},"Gifting Ideas")),c.createElement("div",{className:"MiniSlideContent"},c.createElement("span",null,"Experience the"),c.createElement("span",{className:"h1-text"},"Joy of Gifting")))})))))}}]),a}(c.Component)}}]);
//# sourceMappingURL=5.9db1d549.chunk.js.map