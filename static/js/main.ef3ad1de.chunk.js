(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{14:function(t,n,o){"use strict";o.r(n);var e=o(4),s=o.n(e),c=o(5),r=o(6),i=o(8),u=o(7),d=o(1),a=o.n(d),h=(o(3),o(0)),l=function(t){var n=t.goods;return Object(h.jsx)("ul",{children:n.map((function(t){return Object(h.jsx)("li",{children:t.name},t.id)}))})};function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}function j(){return f().then((function(t){return t.filter((function(t,n){return n<5}))}))}function b(){return f().then((function(t){return t.filter((function(t){return"red"===t.color}))}))}var g=function(t){Object(i.a)(o,t);var n=Object(u.a)(o);function o(){var t;Object(c.a)(this,o);for(var e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];return(t=n.call.apply(n,[this].concat(s))).state={goods:[]},t.allGoods=function(){f().then((function(n){t.setState({goods:n})}))},t.showGoods=function(){j().then((function(n){t.setState({goods:n})}))},t.showRedGoods=function(){b().then((function(n){t.setState({goods:n})}))},t}return Object(r.a)(o,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Dynamic list of Goods"}),Object(h.jsx)("button",{type:"button",onClick:this.allGoods,children:"Load All goods"}),Object(h.jsx)("button",{type:"button",onClick:this.showGoods,children:"Load 5 first goods"}),Object(h.jsx)("button",{type:"button",onClick:this.showRedGoods,children:"Load red goods"}),0!==this.state.goods.length&&Object(h.jsx)(l,{goods:this.state.goods})]})}}]),o}(a.a.Component),p=g;s.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))},3:function(t,n,o){}},[[14,1,2]]]);
//# sourceMappingURL=main.ef3ad1de.chunk.js.map