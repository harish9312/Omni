(this.webpackJsonpomni=this.webpackJsonpomni||[]).push([[5],{159:function(e,a,t){},160:function(e,a,t){"use strict";t.r(a),t.d(a,"ProductListImpl",(function(){return h})),t.d(a,"mapStateToProps",(function(){return g})),t.d(a,"ProductList",(function(){return y}));var l=t(22),s=t.n(l),c=t(27),r=t(12),n=t(16),i=t(15),m=t(14),o=t(28),d=t.n(o),u=t(0),p=t(24),E=t(118),N=t(116),f=t(117),v=t(49),h=(t(159),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_all&sortBy=stock&concepts=H%2526M%20MAN&country=us&lang=en&currentpage=0&pagesize=30",{headers:{"x-rapidapi-host":"apidojo-hm-hennes-mauritz-v1.p.rapidapi.com","x-rapidapi-key":"516a5ecdcemsh2b5192fad8db3b0p12badbjsn10762fa93820",useQueryString:!0}});case 2:e.sent.data.results.forEach((function(e){e.id=e.code,new v.a(e).$save()}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return u.createElement("div",{className:"ProductListPageContainer M-Full-Width"},u.createElement("div",{className:"ProductPath hidden-lg"},"Home / Collections"),u.createElement("div",{className:"FilterMobileContainer hidden-lg"},u.createElement("div",{className:"Category"},"CATEGORY ",u.createElement("i",{className:"fa fa-plus"})),u.createElement("div",{className:"Category"},"REFINE BY ",u.createElement("i",{className:"fa fa-plus"}))),u.createElement("div",{className:"FilterMobileContainer Views hidden-lg"},u.createElement("div",{className:"ViewBy"},u.createElement("span",null,"View By:"),u.createElement("div",{className:"BoxContainer"},u.createElement("div",{className:"ViewType"},u.createElement("i",{className:"fa fa-square","aria-hidden":"true"})),u.createElement("div",{className:"ViewType"},u.createElement("i",{className:"fa fa-square","aria-hidden":"true"}),u.createElement("i",{className:"fa fa-square","aria-hidden":"true"})))),u.createElement("div",{className:"SortBy"},u.createElement("span",null,"Sort By:"),u.createElement("div",{className:"BoxContainer"},u.createElement("select",{className:"SortSelect"},u.createElement("option",null,"New to old"))))),u.createElement("div",{className:"ProductFilters hidden-xs"},u.createElement("div",{className:"FilterOptions"},u.createElement("div",{className:"FilterName"},"Category"),u.createElement("div",{className:"panel-body"},u.createElement("li",null,u.createElement("a",{href:"/shop/beauty"},u.createElement("span",{className:"label_txt"},"Beauty"),u.createElement("span",{className:"count_txt"},"(115)"))),u.createElement("li",null,u.createElement("a",{href:"/collection/gifting-ideas-giftboxes"},u.createElement("span",{className:"label_txt"},"Gift Boxes"),u.createElement("span",{className:"count_txt"},"(21)"))),u.createElement("li",null,u.createElement("a",{href:"/collection/gifting-ideas-for-him"},u.createElement("span",{className:"label_txt"},"Gifts for Him"),u.createElement("span",{className:"count_txt"},"(43)"))),u.createElement("li",null,u.createElement("a",{href:"/collection/gifting-ideas-for-kids"},u.createElement("span",{className:"label_txt"},"Gifts For Kids"),u.createElement("span",{className:"count_txt"},"(157)"))),u.createElement("li",null,u.createElement("a",{href:"/collection/gifting-ideas-home-decor"},u.createElement("span",{className:"label_txt"},"Home Decor"),u.createElement("span",{className:"count_txt"},"(62)"))),u.createElement("li",null,u.createElement("a",{href:"/collection/gifting-ideas-jewellery"},u.createElement("span",{className:"label_txt"},"Jewellery"),u.createElement("span",{className:"count_txt"},"(109)"))),u.createElement("li",null,u.createElement("a",{href:"/collection/gifting-ideas-stoles"},u.createElement("span",{className:"label_txt"},"Stoles"),u.createElement("span",{className:"count_txt"},"(216)"))))),u.createElement("div",{className:"FilterOptions"},u.createElement("div",{className:"FilterName"}," ",u.createElement("i",{className:"fa fa-plus"})," Price")),u.createElement("div",{className:"FilterOptions"},u.createElement("div",{className:"FilterName"}," ",u.createElement("i",{className:"fa fa-plus"})," Color")),u.createElement("div",{className:"FilterOptions"},u.createElement("div",{className:"FilterName"}," ",u.createElement("i",{className:"fa fa-plus"})," Size")),u.createElement("div",{className:"FilterOptions"},u.createElement("div",{className:"FilterName"}," ",u.createElement("i",{className:"fa fa-plus"})," Material")),u.createElement("div",{className:"FilterOptions"},u.createElement("div",{className:"FilterName"}," ",u.createElement("i",{className:"fa fa-plus"})," Sleeves")),u.createElement("div",{className:"FilterOptions"},u.createElement("div",{className:"FilterName"}," ",u.createElement("i",{className:"fa fa-plus"})," Neck")),u.createElement("div",{className:"FilterOptions"},u.createElement("div",{className:"FilterName"}," ",u.createElement("i",{className:"fa fa-plus"})," Pattern")),u.createElement("div",{className:"FilterOptions"},u.createElement("div",{className:"FilterName"}," ",u.createElement("i",{className:"fa fa-plus"})," Craft")),u.createElement("div",{className:"FilterOptions"},u.createElement("div",{className:"FilterName"}," ",u.createElement("i",{className:"fa fa-plus"})," Style"))),u.createElement("div",{className:"DesktopProductListHeader"},u.createElement("div",{className:"ProductHeader hidden-xs"},u.createElement("div",{className:"ProductTitle"},"Gifting Ideas "),u.createElement("div",{className:"FilterContainer"},u.createElement("div",{className:"ViewBy"},u.createElement("span",null,"View By:"),u.createElement("div",{className:"BoxContainer"},u.createElement("div",{className:"ViewType"},u.createElement("i",{className:"fa fa-square","aria-hidden":"true"}),u.createElement("i",{className:"fa fa-square","aria-hidden":"true"}),u.createElement("i",{className:"fa fa-square","aria-hidden":"true"})),u.createElement("div",{className:"ViewType"},u.createElement("i",{className:"fa fa-square","aria-hidden":"true"}),u.createElement("i",{className:"fa fa-square","aria-hidden":"true"}),u.createElement("i",{className:"fa fa-square","aria-hidden":"true"}),u.createElement("i",{className:"fa fa-square","aria-hidden":"true"})))),u.createElement("div",{className:"SortBy"},u.createElement("span",null,"Sort By:"),u.createElement("div",{className:"BoxContainer"},u.createElement("select",{className:"SortSelect"},u.createElement("option",null,"New to old"))))," ")),u.createElement(N.a,{className:"ProductListPage"},this.props.productList.map((function(a,t){return u.createElement(f.a,{xs:6,md:6,sm:3,lg:3,className:"Product"},u.createElement("div",{className:"Image"},a.props.images.map((function(t,l){return u.createElement("img",{onClick:function(){return e.props.history.push("/product-detail/".concat(a.props.id))},className:"ProductImage",alt:a.props.name,src:t.url})}))," ",u.createElement("div",{className:"QuickView"},"Quick View")),u.createElement("div",{onClick:function(){return e.props.history.push("/product-detail/".concat(a.props.id))},className:"ProductConfig"},u.createElement("div",{className:"ProductName"},a.props.name),u.createElement("div",{className:"ProductPrice"},a.props.price.currencyIso,"\xa0",a.props.price.value)))})))))}}]),t}(u.PureComponent));function g(e){return{productList:v.a.list(e)}}var y=Object(E.a)(Object(p.b)(g)(h))}}]);
//# sourceMappingURL=5.377a7959.chunk.js.map