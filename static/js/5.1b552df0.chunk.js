(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{164:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(36),o=n(174),s=n(153),i=Object(s.a)({item:{}});t.a=function(e){var t=i(),n=e.title,a=e.location;return r.a.createElement(o.a,{item:!0,classes:{item:t.item}},r.a.createElement(c.b,{className:"book-link",to:a},n))}},202:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(175),o=n.n(c),s=n(179),i=n.n(s),u=n(50),l=n.n(u),m=n(174),p=n(153),b=n(37),f=n(164),d=n(180),h=n.n(d),w=n(54),k=n(182),v=n(183),E=n.n(v),O=n(40),j="".concat("https://ethodoxy.herokuapp.com/api/v1","/books/"),x={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"PUT, GET, PATCH, POST","Access-Control-Allow-Headers":"Content-Type","Access-Control-Max-Age":"3000"},y=function(){var e=Object(k.a)(h.a.mark(function e(){var t,n,a,r,c,o,s;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=j,a={headers:Object(w.a)({},x)};case 3:if(!n){e.next=13;break}return e.next=6,E.a.get(n,a);case 6:r=e.sent,c=r.data,o=c.results,s=c.next,t=t.concat(o),n=s,e.next=3;break;case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),g=Object(p.a)({container:{paddingTop:"20px"}});t.default=function(){var e=g(),t=Object(b.useDispatch)();Object(a.useEffect)(function(){t(function(){var e=Object(k.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(u.showLoading)()),e.next=3,y();case 3:n=e.sent,t((a=n,{type:O.a,booklist:a})),t(Object(u.hideLoading)());case 6:case"end":return e.stop()}var a},e)}));return function(t){return e.apply(this,arguments)}}())},[t]);var n=Object(b.useSelector)(function(e){return e.drbReducer});return r.a.createElement(a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement("h2",null,"Douay-Rheims Bible"),r.a.createElement("h3",null,"Old Testament"),r.a.createElement(m.a,{container:!0,spacing:2,classes:{root:e.container}},n.books.filter(function(e){return"old testament"===e.testament}).map(function(e){return r.a.createElement(f.a,{key:e.id,title:o()(e.name),location:"/douay-rheims-bible/".concat(i()(e.name))})})),r.a.createElement("h3",null,"New Testament"),r.a.createElement(m.a,{container:!0,spacing:2,classes:{root:e.container}},n.books.filter(function(e){return"new testament"===e.testament}).map(function(e){return r.a.createElement(f.a,{key:e.id,title:o()(e.name),location:"/douay-rheims-bible/".concat(i()(e.name))})})))}}}]);
//# sourceMappingURL=5.1b552df0.chunk.js.map