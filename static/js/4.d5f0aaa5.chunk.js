(this.webpackJsonpomni=this.webpackJsonpomni||[]).push([[4],{167:function(e,t,a){},168:function(e,t,a){e.exports=a.p+"static/media/arrow.cf8decb0.svg"},169:function(e,t,a){"use strict";a.r(t),a.d(t,"SideCarousel",(function(){return f}));var c=a(16),n=a(21),i=a(20),r=a(19),l=a(0),s=a(47),m=a.n(s),o=(a(167),a(22)),d=a(168),u=a.n(d),f=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={activeSlide:1},e.carRef1=l.createRef(),e}return Object(n.a)(a,[{key:"getRandomNumber",value:function(){return Math.floor(10*Math.random())}},{key:"render",value:function(){var e=this,t={dots:Object(o.c)()&&!0,infinite:!0,speed:500,slidesToShow:Object(o.b)()?2:Object(o.c)()?1:3,slidesToScroll:1},a=this.props.slideImages;return l.createElement("div",{className:"Side-Carousel"},!Object(o.c)()&&l.createElement(l.Fragment,null,l.createElement("div",{className:"Controls"},l.createElement("div",{onClick:function(){e.setState({activeSlide:1===e.state.activeSlide?8:e.state.activeSlide-1}),e.carRef1.current.slickPrev()}},l.createElement("img",{style:{height:"45px",transform:"rotate(180deg)"},src:u.a,alt:""})),l.createElement("div",{className:"SlideNumber"}," ",this.state.activeSlide," / 8"),l.createElement("div",{onClick:function(){e.setState({activeSlide:8===e.state.activeSlide?1:e.state.activeSlide+1}),e.carRef1.current.slickNext()}},l.createElement("img",{style:{height:"45px"},src:u.a,alt:""}))),l.createElement("div",{className:"fab-featured-wrapper"},l.createElement("div",{className:"fab-featured"},l.createElement("h2",null,l.createElement("span",null,"Featured"),l.createElement("div",{className:"f_products"},"Products"))))),l.createElement("div",{className:"Carousel-Items"},l.createElement(m.a,Object.assign({ref:this.carRef1},t),[1,2,3,4,5,6,7,8].map((function(t,c){return l.createElement("div",{className:"SlideImage",onClick:e.props.onClickSlide},l.createElement("div",null,l.createElement("img",{width:"",height:"",src:a[c],alt:"",key:t,className:"SideImage"}),l.createElement("div",{className:"sub_tit"},"Gifting Ideas")),l.createElement("div",{className:"MiniSlideContent"},l.createElement("span",null,"Experience the"),l.createElement("span",{className:"h1-text"},"Joy of Gifting")))})))))}}]),a}(l.Component)}}]);
//# sourceMappingURL=4.d5f0aaa5.chunk.js.map