function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Wlq6:function(e,n,t){"use strict";t.r(n),t.d(n,"SearchModule",(function(){return f}));var o,r,i,a=t("ofXK"),c=t("tyNb"),s=t("mrSG"),l=t("fXoL"),u=t("TEn/"),b=t("3Pt+"),p=[{path:"",component:(o=function(){function e(n){_classCallCheck(this,e),this._router=n}return _createClass(e,[{key:"search",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(this.searchInput),this._router.navigate(["../tabs/list/"+this.searchInput]),this.searchInput="";case 1:case"end":return e.stop()}}),e,this)})))}}]),e}(),o.\u0275fac=function(e){return new(e||o)(l.Jb(c.e))},o.\u0275cmp=l.Db({type:o,selectors:[["app-search-page"]],decls:14,vars:1,consts:[["color","light"],[1,"ion-text-center","ion-align-self-center"],["type","search",3,"ngModel","ngModelChange"],["fill","outline","size","large",1,"ion-padding",3,"click"]],template:function(e,n){1&e&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title",0),l.jc(3,"Search test upd"),l.Lb(),l.Lb(),l.Lb(),l.Mb(4,"ion-content"),l.Mb(5,"ion-grid"),l.Mb(6,"ion-row"),l.Mb(7,"ion-col",1),l.Mb(8,"ion-item"),l.Mb(9,"ion-label"),l.jc(10,"E"),l.Lb(),l.Mb(11,"ion-input",2),l.Ub("ngModelChange",(function(e){return n.searchInput=e})),l.Lb(),l.Lb(),l.Mb(12,"ion-button",3),l.Ub("click",(function(){return n.search()})),l.jc(13,"search"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.zb(11),l.bc("ngModel",n.searchInput))},directives:[u.k,u.y,u.x,u.i,u.j,u.r,u.h,u.n,u.o,u.m,u.C,b.d,b.e,u.d],styles:["app-search-page ion-item{font-size:3rem;--background:transparent;max-width:200px;margin:auto;--color:var(--ion-color-light)!important;border-bottom:3px solid var(--ion-color-light)}"],encapsulation:2}),o)}],h=((i=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:i}),i.\u0275inj=l.Gb({factory:function(e){return new(e||i)},imports:[[c.g.forChild(p)],c.g]}),i),f=((r=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:r}),r.\u0275inj=l.Gb({factory:function(e){return new(e||r)},imports:[[b.a,u.z,a.c,h]]}),r)}}]);