(this.webpackJsonpomni=this.webpackJsonpomni||[]).push([[1],{10:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n="SAVE_INSTANCE",r="SAVE_ALL_INSTANCE",c="UPDATE_INSTANCE",i="DELETE_INSTANCE",o="DELETE_ALL_INSTANCE"},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),o=(a(66),a(18)),s=a(15),l=a(11),u=a(14),d=a(13),m=a(12),p=a(118),h=a(56),f=a(120),v=a(20),E=a(53),b=a(108),g=a(109),N=a(110),y=a(111),S=a(112),w=a(113),j=(a(71),function(){var e=n.useState(!1),t=Object(v.a)(e,2),a=t[0],r=t[1],c=n.useState({className:"flags-India",name:"INR"}),i=Object(v.a)(c,2),o=i[0],s=i[1];return n.createElement("div",{className:"doubly-wrapper"},n.createElement("select",{className:"currency-switcher right",name:"doubly-currencies"},n.createElement("option",{value:"INR","data-country":"India","data-currency-symbol":"\u20b9","data-display":"INR"},"Indian Rupee"),n.createElement("option",{value:"USD","data-country":"United-States","data-currency-symbol":"$","data-display":"USD"},"US Dollar")),n.createElement("div",{className:"nice-select currency-switcher right slim ".concat(a&&"open"),onClick:function(){return r(!a)},tabIndex:0,id:"switcher"},n.createElement("span",{className:"current notranslate"},n.createElement("span",{className:"flags ".concat(o.className)})," \xa0",o.name),n.createElement("ul",{className:"list"},n.createElement("li",{className:"option notranslate selected","data-value":"INR","data-country":"India","data-currency-symbol":"\u20b9","data-display":"INR",onClick:function(){return s({className:"flags-India",name:"INR"})}},n.createElement("span",{className:"flags flags-India"})," \xa0INR"),n.createElement("li",{className:"option notranslate ","data-value":"USD","data-country":"United-States","data-currency-symbol":"$","data-display":"USD",onClick:function(){return s({className:"flags-United-States",name:"USD"})}},n.createElement("span",{className:"flags flags-United-States"})," \xa0USD"))))}),O=a(54),k=a.n(O),C=(a(72),[{key:"first-level-node-1",label:"Node 1 at the first level",nodes:[{key:"second-level-node-1",label:"Node 1 at the second level",nodes:[{key:"third-level-node-1",label:"Last node of the branch",nodes:[]}]}]},{key:"first-level-node-2",label:"Node 2 at the first level"}]),P=function(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),o=Object(v.a)(i,2),s=o[0],l=o[1];return r.a.createElement(b.a,{color:"light",light:!0,fixed:"top",expand:"md"},r.a.createElement(g.a,null,r.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true",onClick:function(){return l(!0)}}," "),r.a.createElement("img",{width:"120px",src:k.a,alt:"Logo"})),r.a.createElement("div",{className:"HambburgerSideMenu ".concat(s?"HM-open":"HM-close")},r.a.createElement("h1",null,"Close"),r.a.createElement("i",{onClick:function(){return l(!1)},className:"fa fa-times","aria-hidden":"true"})),r.a.createElement(N.a,{onClick:function(){return c(!a)}}),r.a.createElement("div",{className:"MyNavContainer"},r.a.createElement(y.a,{isOpen:a,navbar:!0},r.a.createElement(S.a,{className:"mr-auto",navbar:!0},r.a.createElement(w.a,null,r.a.createElement("div",{className:"SearchInp"}," ",r.a.createElement("input",{className:"SearchInput",placeholder:"Enter your search text here..."}),r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"}))),r.a.createElement("div",{className:"TreeNode hidden-lg"},r.a.createElement(E.a,{data:C,hasSearch:!1}))),r.a.createElement(j,null))))},D=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.createElement("div",{className:"BasePage"},n.createElement(P,null),this.props.children)}}]),a}(n.PureComponent);var A=Object(o.b)((function(){return{}}))(D),I=a(27),x=a.n(I),R=a(30),T=a(38),L=a(117),U=a(39),_=a.n(U),W=a(48),z=a(115),K=a(116),M=(a(98),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={productDetails:{name:"",code:"",sizeScaleProductType:"",whitePrice:{price:"",value:""},images:[{url:""}],description:""}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(T.a)(x.a.mark((function e(){var t,a,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.id,a=W.a.get(t)){e.next=5;break}return this.props.history.push("/product-list"),e.abrupt("return");case 5:return n=t.split("_")[0]+t.split("_")[2],e.next=8,_.a.get("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?country=us&lang=en&productcode=".concat(n),{headers:{"x-rapidapi-host":"apidojo-hm-hennes-mauritz-v1.p.rapidapi.com","x-rapidapi-key":"516a5ecdcemsh2b5192fad8db3b0p12badbjsn10762fa93820",useQueryString:!0}});case 8:r=e.sent,this.setState({productDetails:Object(R.a)(Object(R.a)({},r.data.product),null===a||void 0===a?void 0:a.props)});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(console.log(">> this.state.productData",this.state.productDetails),!this.state.productDetails)return"";var e=this.state.productDetails;return n.createElement("div",{className:"ProductDetails"},n.createElement(z.a,null,n.createElement(K.a,{xs:12,md:12,lg:6},n.createElement("div",{className:"ProductImage"},n.createElement("img",{alt:"",src:e.images[0].url}))),n.createElement(K.a,{xs:12,md:12,lg:6,className:"Details"},n.createElement("div",{className:"ProductRow ProductName padding-20"},e.name),n.createElement("div",{className:"ProductRow ProductCode"},"Code: \xa0 ",e.code),n.createElement("div",{className:"padding-20"},n.createElement("div",{className:"ProductRow ProductPrice"},"$",e.whitePrice.price||e.whitePrice.value),n.createElement("div",null," ",n.createElement("div",{className:"Quantity"},n.createElement("i",{className:"fa qty fa-plus"}),n.createElement("span",{className:"qty"},"10"),n.createElement("i",{className:"fa qty fa-minus"})),n.createElement("div",null,n.createElement("button",{className:"add"},"ADD TO CART")))),n.createElement("div",{className:"padding-20"},n.createElement("div",{className:"head"},"Check Delivery Service Availability"),n.createElement("div",{className:"detail-data pro-details"}," ",n.createElement("div",null,"Check Delivery Service Availability"),n.createElement("input",{className:"input",placeholder:"Enter Pincode"})," ",n.createElement("button",{className:"check"},"Check"))),n.createElement("div",{className:"padding-20"},n.createElement("div",{className:"head"},"Connect To A Store"),n.createElement("div",{className:"detail-data pro-details"},n.createElement("input",{className:"input",placeholder:"Enter a Pincode or Store Name"})," ",n.createElement("button",{className:"add"},"Connect To A Store"))),n.createElement("div",{className:"ProductRow padding-20 ProductDesc"},n.createElement("div",{className:"head"},"Details"),n.createElement("div",{className:"pro-details"},e.description)))))}}]),a}(n.PureComponent));var $=Object(L.a)(Object(o.b)((function(e,t){return{state:e}}))(M)),V=r.a.lazy((function(){return Promise.all([a.e(0),a.e(5),a.e(4)]).then(a.bind(null,164)).then((function(e){return{default:e.Home}}))})),H=r.a.lazy((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,125)).then((function(e){return{default:e.SideCarousel}}))})),q=r.a.lazy((function(){return a.e(6).then(a.bind(null,163)).then((function(e){return{default:e.ProductList}}))})),B=function(e){return function(t){Object(d.a)(n,t);var a=Object(m.a)(n);function n(){return Object(l.a)(this,n),a.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(A,null,r.a.createElement(e,null))}}]),n}(r.a.Component)},J=function(){return r.a.createElement(f.a,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("h1",null,"Loading...")},r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{exact:!0,path:"/",component:B(V)}),r.a.createElement(h.a,{exact:!0,path:"/lib/docs",component:B(H)}),r.a.createElement(h.a,{exact:!0,path:"/product-list",component:B(q)}),r.a.createElement(h.a,{exact:!0,path:"/product-detail/:id",component:B($)})))))},Q=(a(100),a(101),a(102),a(103),function(){return r.a.createElement(o.a,{store:s.a},r.a.createElement(J,null))}),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(Q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):G(t,e)}))}}()},15:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(16),r=a(51),c=a(52),i=a(10),o=Object(n.combineReducers)({model:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(c.a)({}),t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.instances,r=t.instance,o=t.id,s=o;switch(a.split("/")[1]){case i.d:return e.set(s,r);case i.c:return e.merge(n);case i.e:return e.set(s,r);case i.b:return e.delete(s);case i.a:return e.deleteAll(s);default:return e}}});var s=Object(n.createStore)(o,Object(r.devToolsEnhancer)({name:"ReactORM"}))},21:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return i}));var n=a(15);function r(e){return e&&n.a.dispatch(e),n.a.dispatch(e)}var c=function(){return navigator.appVersion.toString().toLowerCase().includes("iphone")||navigator.appVersion.toString().toLowerCase().includes("android")},i=function(){return navigator.appVersion.toString().toLowerCase().includes("ipad")}},48:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(11),r=a(13),c=a(12),i=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).props=e,r}return a}(a(49).a);i.resource="product"},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(11),r=a(14),c=a(119),i=a(114),o=a(21),s=a(10),l=a(15),u=function(){function e(t){var a=this;Object(n.a)(this,e),this.props=t,this.resource=void 0,this.id=void 0,this.getStoreKey=function(e){return"".concat(a.resource).concat(e)},this.props=t,this.id=t.id,this.resource=this.constructor.resource}return Object(r.a)(e,[{key:"$save",value:function(){var e,t,a;return e=this.resource,t=this.getStoreKey(this.props.id||this.props._id),a=this,Object(o.a)({type:"".concat(e,"/").concat(s.d),id:t,instance:a}),this}},{key:"$saveAll",value:function(){var e,t,a=this,n={};return c.a((function(e){return n[a.getStoreKey(e.id)]={props:e,resource:a.resource}}),this.props),e=this.resource,t=n,Object(o.a)({type:"".concat(e,"/").concat(s.c),instances:t}),[this]}}],[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.a.getState();return t.model.get(this.getStoreKey(e,this))}},{key:"list",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.a.getState();return i.a(t.model.filter((function(t){return t.resource===e.resource?t.props:""})).toJS())}},{key:"delete",value:function(e){var t;return t=this.getStoreKey(e.props.id||e.props._id,e),Object(o.a)({type:s.b,key:t}),this}}]),e}();u.resource=void 0,u.getStoreKey=function(e,t){return"".concat(t.resource).concat(e)}},54:function(e,t,a){e.exports=a.p+"static/media/fabLogo.cfcdb977.png"},61:function(e,t,a){e.exports=a(104)},66:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},98:function(e,t,a){}},[[61,2,3]]]);
//# sourceMappingURL=main.967eca8d.chunk.js.map