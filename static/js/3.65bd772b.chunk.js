(this.webpackJsonpomni=this.webpackJsonpomni||[]).push([[3,5],{168:function(e,t,a){},169:function(e,t,a){e.exports=a.p+"static/media/arrow.cf8decb0.svg"},170:function(e,t,a){"use strict";a.r(t),a.d(t,"SideCarousel",(function(){return h}));var n=a(16),r=a(21),i=a(20),o=a(19),s=a(0),c=a(47),l=a.n(c),d=(a(168),a(22)),u=a(169),m=a.n(u),h=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={activeSlide:1},e.carRef1=s.createRef(),e}return Object(r.a)(a,[{key:"getRandomNumber",value:function(){return Math.floor(10*Math.random())}},{key:"render",value:function(){var e=this,t={dots:Object(d.c)()&&!0,infinite:!0,speed:500,slidesToShow:Object(d.b)()||Object(d.c)()?2:3,slidesToScroll:1},a=this.props.slideImages;return s.createElement("div",{className:"Side-Carousel"},!Object(d.c)()&&s.createElement(s.Fragment,null,s.createElement("div",{className:"Controls"},s.createElement("div",{onClick:function(){e.setState({activeSlide:1===e.state.activeSlide?8:e.state.activeSlide-1}),e.carRef1.current.slickPrev()}},s.createElement("img",{style:{height:"45px",transform:"rotate(180deg)"},src:m.a,alt:""})),s.createElement("div",{className:"SlideNumber"}," ",this.state.activeSlide," / 8"),s.createElement("div",{onClick:function(){e.setState({activeSlide:8===e.state.activeSlide?1:e.state.activeSlide+1}),e.carRef1.current.slickNext()}},s.createElement("img",{style:{height:"45px"},src:m.a,alt:""}))),s.createElement("div",{className:"fab-featured-wrapper"},s.createElement("div",{className:"fab-featured"},s.createElement("h2",null,s.createElement("span",null,"Featured"),s.createElement("div",{className:"f_products"},"Products"))))),s.createElement("div",{className:"Carousel-Items"},s.createElement(l.a,Object.assign({ref:this.carRef1},t),[1,2,3,4,5,6,7,8].map((function(t,n){return s.createElement("div",{className:"SlideImage",onClick:e.props.onClickSlide},s.createElement("div",null,s.createElement("img",{width:"",height:"",src:a[n],alt:"",key:t,className:"SideImage"}),s.createElement("div",{className:"sub_tit"},"Gifting Ideas")),s.createElement("div",{className:"MiniSlideContent"},s.createElement("span",null,"Experience the"),s.createElement("span",{className:"h1-text"},"Joy of Gifting")))})))))}}]),a}(s.Component)},171:function(e,t,a){e.exports=a.p+"static/media/1.80eb678f.jpg"},172:function(e,t,a){e.exports=a.p+"static/media/2.5fa59804.jpg"},173:function(e,t,a){e.exports=a.p+"static/media/3.48d29d21.jpg"},174:function(e,t,a){e.exports=a.p+"static/media/f1.a94e7f00.jpg"},175:function(e,t,a){e.exports=a.p+"static/media/f2.ac434b7f.jpg"},176:function(e,t,a){e.exports=a.p+"static/media/f3.612eb0a6.jpg"},177:function(e,t,a){e.exports=a.p+"static/media/p1.7868f933.jpg"},178:function(e,t,a){e.exports=a.p+"static/media/p2.2ec5a88b.jpg"},179:function(e,t,a){e.exports=a.p+"static/media/p3.0eabea65.jpg"},180:function(e,t,a){},185:function(e,t,a){"use strict";a.r(t),a.d(t,"Home",(function(){return be}));var n=a(16),r=a(21),i=a(20),o=a(19),s=a(0),c=a.n(s),l=a(28),d=a(163),u=a(34),m=a.n(u),h=a(35),p=a.n(h),f=a(36),v=a.n(f),E=a(47),g=a.n(E),b=a(18),x=a(4),y=a(7),C=a(12),N=a(27),S=a(1),j=a.n(S),k=a(6),w=a.n(k),T=a(23),I=a(3),O=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={startAnimation:!1},a.onEnter=a.onEnter.bind(Object(C.a)(a)),a.onEntering=a.onEntering.bind(Object(C.a)(a)),a.onExit=a.onExit.bind(Object(C.a)(a)),a.onExiting=a.onExiting.bind(Object(C.a)(a)),a.onExited=a.onExited.bind(Object(C.a)(a)),a}Object(N.a)(t,e);var a=t.prototype;return a.onEnter=function(e,t){this.setState({startAnimation:!1}),this.props.onEnter(e,t)},a.onEntering=function(e,t){var a=e.offsetHeight;return this.setState({startAnimation:!0}),this.props.onEntering(e,t),a},a.onExit=function(e){this.setState({startAnimation:!1}),this.props.onExit(e)},a.onExiting=function(e){this.setState({startAnimation:!0}),e.dispatchEvent(new CustomEvent("slide.bs.carousel")),this.props.onExiting(e)},a.onExited=function(e){e.dispatchEvent(new CustomEvent("slid.bs.carousel")),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.in,n=t.children,r=t.cssModule,i=t.slide,o=t.tag,s=t.className,l=Object(y.a)(t,["in","children","cssModule","slide","tag","className"]);return c.a.createElement(T.Transition,Object(x.a)({},l,{enter:i,exit:i,in:a,onEnter:this.onEnter,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var a=e.context.direction,i=t===I.b.ENTERED||t===I.b.EXITING,l=(t===I.b.ENTERING||t===I.b.EXITING)&&e.state.startAnimation&&("right"===a?"carousel-item-left":"carousel-item-right"),d=t===I.b.ENTERING&&("right"===a?"carousel-item-next":"carousel-item-prev"),u=Object(I.k)(w()(s,"carousel-item",i&&"active",l,d),r);return c.a.createElement(o,{className:u},n)}))},t}(c.a.Component);O.propTypes=Object(b.a)({},T.Transition.propTypes,{tag:I.o,in:j.a.bool,cssModule:j.a.object,children:j.a.node,slide:j.a.bool,className:j.a.string}),O.defaultProps=Object(b.a)({},T.Transition.defaultProps,{tag:"div",timeout:I.c.Carousel,slide:!0}),O.contextTypes={direction:j.a.string};var D=O,F=a(153),R=a(155),P=a(22),A=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).props=e,r}return a}(a(64).a);A.resource="user";var M=a(171),H=a.n(M),B=a(172),q=a.n(B),_=a(173),L=a.n(_),K=a(174),X=a.n(K),G=a(175),Y=a.n(G),U=a(176),V=a.n(U),J=a(177),z=a.n(J),W=a(178),Q=a.n(W),Z=a(179),$=a.n(Z),ee=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleKeyPress=a.handleKeyPress.bind(Object(C.a)(a)),a.renderItems=a.renderItems.bind(Object(C.a)(a)),a.hoverStart=a.hoverStart.bind(Object(C.a)(a)),a.hoverEnd=a.hoverEnd.bind(Object(C.a)(a)),a.handleTouchStart=a.handleTouchStart.bind(Object(C.a)(a)),a.handleTouchEnd=a.handleTouchEnd.bind(Object(C.a)(a)),a.touchStartX=0,a.touchStartY=0,a.state={activeIndex:a.props.activeIndex,direction:"right",indicatorClicked:!1},a}Object(N.a)(t,e);var a=t.prototype;return a.getChildContext=function(){return{direction:this.state.direction}},a.componentDidMount=function(){"carousel"===this.props.ride&&this.setInterval(),document.addEventListener("keyup",this.handleKeyPress)},t.getDerivedStateFromProps=function(e,t){var a=null,n=t.activeIndex,r=t.direction,i=t.indicatorClicked;return e.activeIndex!==n&&(e.activeIndex===n+1?r="right":e.activeIndex===n-1?r="left":e.activeIndex<n?r=i?"left":"right":e.activeIndex!==n&&(r=i?"right":"left"),a={activeIndex:e.activeIndex,direction:r,indicatorClicked:!1}),a},a.componentDidUpdate=function(e,t){t.activeIndex!==this.state.activeIndex&&this.setInterval(this.props)},a.componentWillUnmount=function(){this.clearInterval(),document.removeEventListener("keyup",this.handleKeyPress)},a.setInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){void 0===e&&(e=this.props),this.clearInterval(),e.interval&&(this.cycleInterval=setInterval((function(){e.next()}),parseInt(e.interval,10)))})),a.clearInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.cycleInterval)})),a.hoverStart=function(){var e;("hover"===this.props.pause&&this.clearInterval(),this.props.mouseEnter)&&(e=this.props).mouseEnter.apply(e,arguments)},a.hoverEnd=function(){var e;("hover"===this.props.pause&&this.setInterval(),this.props.mouseLeave)&&(e=this.props).mouseLeave.apply(e,arguments)},a.handleKeyPress=function(e){this.props.keyboard&&(37===e.keyCode?this.props.previous():39===e.keyCode&&this.props.next())},a.handleTouchStart=function(e){this.props.enableTouch&&(this.touchStartX=e.changedTouches[0].screenX,this.touchStartY=e.changedTouches[0].screenY)},a.handleTouchEnd=function(e){if(this.props.enableTouch){var t=e.changedTouches[0].screenX,a=e.changedTouches[0].screenY,n=Math.abs(this.touchStartX-t);n<Math.abs(this.touchStartY-a)||n<40||(t<this.touchStartX?this.props.next():this.props.previous())}},a.renderItems=function(e,t){var a=this,n=this.props.slide;return c.a.createElement("div",{className:t},e.map((function(e,t){var r=t===a.state.activeIndex;return c.a.cloneElement(e,{in:r,slide:n})})))},a.render=function(){var e=this,t=this.props,a=t.cssModule,n=t.slide,r=t.className,i=Object(I.k)(w()(r,"carousel",n&&"slide"),a),o=Object(I.k)(w()("carousel-inner"),a),s=this.props.children.filter((function(e){return null!==e&&void 0!==e&&"boolean"!==typeof e}));if(s.every((function(e){return e.type===D})))return c.a.createElement("div",{className:i,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(s,o));if(s[0]instanceof Array){var l=s[0],d=s[1],u=s[2];return c.a.createElement("div",{className:i,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(l,o),d,u)}var m=s[0],h=c.a.cloneElement(m,{onClickHandler:function(t){"function"===typeof m.props.onClickHandler&&e.setState({indicatorClicked:!0},(function(){return m.props.onClickHandler(t)}))}}),p=s[1],f=s[2],v=s[3];return c.a.createElement("div",{className:i,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},h,this.renderItems(p,o),f,v)},t}(c.a.Component);ee.propTypes={activeIndex:j.a.number,next:j.a.func.isRequired,previous:j.a.func.isRequired,keyboard:j.a.bool,pause:j.a.oneOf(["hover",!1]),ride:j.a.oneOf(["carousel"]),interval:j.a.oneOfType([j.a.number,j.a.string,j.a.bool]),children:j.a.array,mouseEnter:j.a.func,mouseLeave:j.a.func,slide:j.a.bool,cssModule:j.a.object,className:j.a.string,enableTouch:j.a.bool},ee.defaultProps={interval:5e3,pause:"hover",keyboard:!0,slide:!0,enableTouch:!0},ee.childContextTypes={direction:j.a.string};var te=ee,ae=function(e){var t=e.items,a=e.activeIndex,n=e.cssModule,r=e.onClickHandler,i=e.className,o=Object(I.k)(w()(i,"carousel-indicators"),n),s=t.map((function(e,t){var i=Object(I.k)(w()({active:a===t}),n);return c.a.createElement("li",{key:""+(e.key||Object.values(e).join("")),onClick:function(e){e.preventDefault(),r(t)},className:i})}));return c.a.createElement("ol",{className:o},s)};ae.propTypes={items:j.a.array.isRequired,activeIndex:j.a.number.isRequired,cssModule:j.a.object,onClickHandler:j.a.func.isRequired,className:j.a.string};var ne=ae,re=function(e){var t=e.direction,a=e.onClickHandler,n=e.cssModule,r=e.directionText,i=e.className,o=Object(I.k)(w()(i,"carousel-control-"+t),n),s=Object(I.k)(w()("carousel-control-"+t+"-icon"),n),l=Object(I.k)(w()("sr-only"),n);return c.a.createElement("a",{className:o,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:function(e){e.preventDefault(),a()}},c.a.createElement("span",{className:s,"aria-hidden":"true"}),c.a.createElement("span",{className:l},r||t))};re.propTypes={direction:j.a.oneOf(["prev","next"]).isRequired,onClickHandler:j.a.func.isRequired,cssModule:j.a.object,directionText:j.a.string,className:j.a.string};var ie=re,oe=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={activeIndex:0,animating:!1},e.next=function(){var t=e.state,a=t.activeIndex;if(!t.animating){var n=a===e.props.items.length-1?0:a+1;e.setState({activeIndex:n}),e.props.onNext&&e.props.onNext(n)}},e.previous=function(){var t=e.state,a=t.activeIndex;if(!t.animating){var n=0===a?e.props.items.length-1:a-1;e.setState({activeIndex:n}),e.props.onPre&&e.props.onPre(n)}},e.goToIndex=function(t){e.state.animating||e.setState({activeIndex:t})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.activeIndex;return c.a.createElement(te,{activeIndex:e,next:this.next,previous:this.previous},c.a.createElement(ne,{items:this.props.items,activeIndex:e,onClickHandler:this.goToIndex}),this.props.slides,c.a.createElement(ie,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),c.a.createElement(ie,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),a}(c.a.Component),se=a(170),ce=(a(180),a(29)),le=a.n(ce),de=a(63),ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function me(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function he(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var pe=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},fe=function(e){function t(){var a,n;me(this,t);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return a=n=he(this,e.call.apply(e,[this].concat(i))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!pe(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,i=a.to;r?t.replace(i):t.push(i)}},he(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);le()(this.context.router,"You should not use <Link> outside a <Router>"),le()(void 0!==t,'You must specify the "to" property');var r=this.context.router.history,i="string"===typeof t?Object(de.b)(t,null,null,r.location):t,o=r.createHref(i);return c.a.createElement("a",ue({},n,{onClick:this.handleClick,href:o,ref:a}))},t}(c.a.Component);fe.propTypes={onClick:j.a.func,target:j.a.string,replace:j.a.bool,to:j.a.oneOfType([j.a.string,j.a.object]).isRequired,innerRef:j.a.oneOfType([j.a.string,j.a.func])},fe.defaultProps={replace:!1},fe.contextTypes={router:j.a.shape({history:j.a.shape({push:j.a.func.isRequired,replace:j.a.func.isRequired,createHref:j.a.func.isRequired}).isRequired}).isRequired};var ve=fe,Ee=[{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 1",caption:"Slide 1"},{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 2",caption:"Slide 2"},{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 3",caption:"Slide 3"}],ge=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).promoSliderRef=void 0,e.state={activeSlide:1},e.slides=[1,2,3,4,5,6,7,8].map((function(t,a){var n=[H.a,q.a,L.a,H.a,q.a,L.a,H.a,q.a,L.a];return s.createElement(D,{onExiting:function(){return e.setState({animating:!0})},onExited:function(){return e.setState({animating:!1})},key:t},s.createElement("div",{className:""},s.createElement("img",{width:"100%",className:"HomeSlideImage",height:"",src:n[a],alt:"",key:t}))," ")})),e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t={infinite:!0,speed:5e3,slidesToShow:Object(P.b)()?2:Object(P.c)()?1:3,slidesToScroll:1},a={infinite:!0,speed:500,slidesToShow:Object(P.b)()||Object(P.c)()?1:3,slidesToScroll:1},n=[m.a,p.a,v.a,m.a,p.a,v.a,m.a,p.a,v.a];return s.createElement("div",{className:"main"},Object(P.c)()&&s.createElement("div",{className:"SearchInp"}," ",s.createElement("input",{className:"SearchInput",placeholder:"Enter your search text here..."}),s.createElement("i",{className:"fa fa-search","aria-hidden":"true"})),s.createElement("div",{className:"CarouselContainer"},s.createElement(oe,{items:Ee,slides:this.slides})),s.createElement(se.SideCarousel,{slideImages:[X.a,Y.a,V.a,X.a,Y.a,V.a,X.a,Y.a,V.a],onClickSlide:function(){return e.props.history.push("/product-list")}}),s.createElement(F.a,{className:"bg-wheat home-row"},s.createElement(R.a,{xs:12,md:6,lg:6,className:"flex j-center fd-col"},s.createElement("div",{className:"Hometext"},s.createElement("h1",null,"Malhar Collection"),s.createElement("span",null," Rhythm of life!")),s.createElement("div",{className:"HomeParagraph"},"Spread the joy with our celebratory wardrobe with splashes of colour, natural hues and gentle handcrafted motifs and patterns. Discover beautiful hand-woven fabrics perfect for the festivities around the corner. Take a look at these curated looks we put together just for you!"),s.createElement("div",{className:"btn_desc d-none d-md-block"},s.createElement(ve,{to:"/"},"Explore"))),s.createElement(R.a,{xs:12,md:6,lg:6},s.createElement("div",{className:"image"},s.createElement("img",{className:"home-img",alt:"col-1",width:"100%",src:"https://www.fabindia.com/file/general/look-front-30-07.jpg"})))),s.createElement(F.a,{className:"home-row home-bottom"},s.createElement(R.a,{xs:12,md:6,lg:6},s.createElement("div",{className:"image home-img"},s.createElement("img",{className:"home-img",alt:" col-1",width:"100%",src:"https://www.fabindia.com/file/general/look-front-30-07.jpg"})))," ",s.createElement(R.a,{xs:12,md:6,lg:6,className:"flex j-center fd-col"},s.createElement("div",{className:"Hometext"},s.createElement("h1",null," The Home Edition!"),s.createElement("span",null,"It's good to be home")),s.createElement("div",{className:"HomeParagraph"},"It's good to be home Home is a place for Love and happiness. Make it a beautiful space with our home furnishings. Experiment with soothing pastels and contrasting accents to make it your own. Sit back & relax. Get those creative juices flowing..It's time for some TLC. #WFM #InThisTogether"),s.createElement("div",{className:"btn_desc d-none d-md-block"},s.createElement(ve,{to:"/"},"Explore")))),s.createElement(F.a,null,s.createElement(R.a,{xs:12,lg:12,md:12},s.createElement("div",{className:"promo-featured"},s.createElement("h2",null,s.createElement("span",null,"Promo Previews"),s.createElement("div",{className:"promo-text"},"A glimpse at all things new at Fabindia")))),s.createElement(R.a,{xs:12,md:12,lg:12},s.createElement(F.a,{className:"MobileBlock hidden-ipad"},s.createElement(R.a,{lg:8,md:8,className:"mb-20"},s.createElement("img",{alt:"",src:z.a,width:"100%",height:"87%"}),s.createElement("div",{className:"VideoText"},s.createElement("h4",null,"Malhar Collection"),s.createElement("span",null," ","The rhythm of life, the wonder of colours, the passion of nature, all embodied in our new Malhar collection!"))),s.createElement(R.a,{lg:4,md:4},s.createElement("div",{className:"VideoRight"},s.createElement("img",{alt:"",src:Q.a,width:"100%"}),s.createElement("div",{className:"VideoText"},s.createElement("h4",null,"Chikankari Collection"),s.createElement("span",null,"Chikankari is the fine and intricate embroidery tr"))),s.createElement("div",null,s.createElement("img",{alt:"",src:$.a,width:"100%"}),s.createElement("div",{className:"VideoText"},s.createElement("h4",null,"Rajwada Collection"),s.createElement("span",null,"Let the festivities begin with Rajwada: All that is opulen"))))))),s.createElement(F.a,{className:"MobilePromoSlider visible-ipad"},s.createElement(R.a,{xs:12,md:9,lg:10,className:"SliderCol"},s.createElement(g.a,Object.assign({},a,{ref:function(t){return e.promoSliderRef=t}}),[1,2,3].map((function(e,t){var a=[z.a,Q.a,$.a,z.a],n=[{text:"Malhar Collection",desc:"The rhythm of life, the wonder of colours, the passion of nature"},{text:"Chikankari Collection",desc:"Chikankari is the fine and intricate embroidery tr"},{text:"Rajwada Collection",desc:"Let the festivities begin with Rajwada: All that is opulen          "},{text:"Malhar Collection",desc:"The rhythm of life, the wonder of colours, the passion of nature, all embodied in our new Malhar collection!"}];return s.createElement("div",{key:t,className:"PromoSlideImage"},s.createElement("img",{src:a[t],alt:"",className:"SlideImagePromo"}),s.createElement("div",{className:"VideoText"},s.createElement("h4",null,n[t].text),s.createElement("span",null,n[t].desc," ")))}))),s.createElement("div",{className:"PromoControls "},s.createElement("button",{className:"PromoButton",onClick:function(){e.setState({activeSlide:1===e.state.activeSlide?3:e.state.activeSlide-1}),e.promoSliderRef.slickPrev()}},s.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"}),"Previous"),s.createElement("div",{className:"SlideNumber"},this.state.activeSlide," / 3 "),s.createElement("button",{className:"PromoButton",onClick:function(){e.setState({activeSlide:3===e.state.activeSlide?1:e.state.activeSlide+1}),e.promoSliderRef.slickNext()}},"Next",s.createElement("i",{className:"fa fa-arrow-right","aria-hidden":"true"}))))),s.createElement(F.a,null,s.createElement(R.a,{xs:12,md:12,lg:12},s.createElement("div",{className:"traditionalTitle"},s.createElement("h2",null,s.createElement("span",null,"Traditional Crafts"),s.createElement("div",{className:"traditional-product"},"Take a quick peek into all things Fabindia")))),s.createElement(R.a,{xs:12,md:9,lg:10,className:"SliderCol"},s.createElement(g.a,t,[1,2,3,4,5,6,7,8].map((function(e,t){return s.createElement("div",{key:t,className:"TradCarouselSlide"},s.createElement("img",{src:n[t],alt:"",className:"SlideImageTrad"}),s.createElement("div",{className:"TradText"},s.createElement("span",null,"Bagru Print"),s.createElement("p",null,"The art of traditional hand block printing\u0192")))}))))),s.createElement(F.a,{className:"HomeBottom"},s.createElement(R.a,{xs:12,md:12,lg:8,className:"flex j-center fd-col HomeSignup"},s.createElement("h2",null,"Be the First to know!"),s.createElement("p",null,"Join our mailing list for exclusive access to the latest fashion trends, tips, and more."),s.createElement("div",{className:"SignupInput"},s.createElement("div",{className:"Inner"},s.createElement("input",{className:"SearchInput",placeholder:"Enter email here"}),s.createElement("button",{className:"SingupButton"},"Sign Me Up!"))))))}}]),a}(s.Component),be=Object(d.a)(Object(l.b)((function(){return{users:A.list()}}))(ge))}}]);
//# sourceMappingURL=3.65bd772b.chunk.js.map