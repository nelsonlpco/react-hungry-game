(this["webpackJsonphungry-game"]=this["webpackJsonphungry-game"]||[]).push([[0],{24:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);n(24);var r,o=n(1),c=n.n(o),a=n(13),i=n.n(a),s=n(7),u=n(11),O=n(23),l=n(9),d=n.n(l),b=n(21),j=n(5),f=n(16),h=n(17);!function(e){e.yes="yes",e.no="no"}(r||(r={}));var v,p=function(){function e(t){Object(f.a)(this,e),this.question=void 0,this.right=void 0,this.left=void 0,this.question=t}return Object(h.a)(e,[{key:"Question",get:function(){return this.question},set:function(e){this.question=e}},{key:"RightOption",get:function(){return this.right},set:function(e){this.right=e}},{key:"LeftOption",get:function(){return this.left},set:function(e){this.left=e}},{key:"hasChildren",value:function(){return!!this.right&&!!this.left}},{key:"addQuestion",value:function(t,n){this.right=new e(this.question),this.question=n,this.left=new e(t)}}]),e}(),E=function(){function e(t,n,r){Object(f.a)(this,e),this.root=void 0,this.emptyOptions=!1,this.root=new p(t),this.root.LeftOption=new p(n),this.root.RightOption=new p(r)}return Object(h.a)(e,[{key:"isEnptyOptions",get:function(){return this.emptyOptions}},{key:"Root",get:function(){return this.emptyOptions=!1,this.root}},{key:"addFavoriteFood",value:function(e,t,n){e.addQuestion(t,n)}},{key:"runCases",value:function(e,t){var n=t;return(null===n||void 0===n?void 0:n.hasChildren())?e===r.yes?this.runCases(e,n.LeftOption):this.runCases(e,n.RightOption):(this.emptyOptions=!(null===n||void 0===n?void 0:n.hasChildren()),n)}},{key:"runCase",value:function(e,t){var n=t;return(null===n||void 0===n?void 0:n.hasChildren())?e===r.yes?n.LeftOption:n.RightOption:(this.emptyOptions=!(null===n||void 0===n?void 0:n.hasChildren()),n)}}]),e}();!function(e){e.slidIn="slid_down",e.slidLeft="slid_left",e.slidRight="slid_right"}(v||(v={}));var S,y={colors:{primaryBg:"#2E2E2E",secondaryBg:"#E9E9E1",ok:"#66E093",cancel:"#F55F57",off:"#737082"}};!function(e){e.START="@GAME/START",e.ANSWER_ASYNC="@GAME/ANSWER_ASYNC",e.SET_USER_FAVORITE_FOOD_ASYNC="@GAME/SET_USER_FAVORITE_FOOD_ASYNC",e.SET_RESPONSE="@GAME/SET_RESPONSE",e.SHOW_WINNER_MODAL="@GAME/SHOW_WINNER_MODAL",e.SHOW_QUESTION_MODAL="@GAME/SHOW_QUESTION_MODAL",e.SET_ANIMATION="@GAME/SET_ANIMATION"}(S||(S={}));var _={start:function(){return{type:S.START,payload:void 0}},setResponse:function(e){return{type:S.SET_RESPONSE,payload:e}},showQuestionModal:function(e){return{type:S.SHOW_QUESTION_MODAL,payload:e}},showWinnerModal:function(e){return{type:S.SHOW_WINNER_MODAL,payload:e}},setAnimation:function(e){return{type:S.SET_ANIMATION,payload:e}},answerAsync:function(e){return{type:S.ANSWER_ASYNC,payload:e}},setUserFavoriteFoodAsync:function(){return{type:S.SET_USER_FAVORITE_FOOD_ASYNC,payload:void 0}}},x="Sim",A="N\xe3o",T="Qual a sua comida favorita?",C=function(e,t){return"O que ".concat(e," \xe9 que ").concat(t," n\xe3o \xe9?")},g=function(e){return"A comida \xe9 ".concat(e,"?")};function N(e){return e.game}var m=function(e){var t,n;return g(null!==(t=null===(n=N(e).question)||void 0===n?void 0:n.Question)&&void 0!==t?t:"")},w=function(e){return N(e).question},k=function(e){return N(e).showWinnerModal},R=function(e){return N(e).showQuestionModal},F=function(e){return N(e).animation};function I(e){return e.question}var M,Q=function(e){return I(e).currentQuestion},L=function(e){return I(e).food},U=function(e){return I(e).quality},D=function(e){return I(e).showFoodModal};!function(e){e.SET_FOOD_ASYNC="@QUESTION/SET_FOOD_ASYNC",e.SET_QUALITY_ASYNC="@QUESTION/SET_QUALITY_ASYNC",e.SET_FOOD="@QUESTION/SET_FOOD",e.SET_QUALITY="@QUESTION/SET_QUALITY",e.SET_CURRENT_QUESTION="@QUESTION/SET_CURRENT_QUESTION",e.SET_SHOW_FOOD_MODAL="@QUESTION/SET_SHOW_FOOD_MODAL",e.CLEAR="@QUESTION/CLEAR"}(M||(M={}));var W={setFoodAsync:function(e){return{type:M.SET_FOOD_ASYNC,payload:e}},setQualityAsync:function(e){return{type:M.SET_QUALITY_ASYNC,payload:e}},setFood:function(e){return{type:M.SET_FOOD,payload:e}},setQuality:function(e){return{type:M.SET_QUALITY,payload:e}},setCurrentQuestion:function(e){return{type:M.SET_CURRENT_QUESTION,payload:e}},setShowFoodModal:function(e){return{type:M.SET_SHOW_FOOD_MODAL,payload:e}},clear:function(){return{type:M.CLEAR,payload:void 0}}},Y=d.a.mark(B),q=d.a.mark(G),H=d.a.mark(V),P=new E("Massa","Lasanha","Bolo de chocolate");function B(e){var t,n,o,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.payload,!(n=t===r.yes)){a.next=7;break}return a.next=5,Object(j.c)(_.setAnimation(v.slidRight));case 5:a.next=9;break;case 7:return a.next=9,Object(j.c)(_.setAnimation(v.slidLeft));case 9:return a.next=11,Object(j.d)(w);case 11:return o=a.sent,a.next=14,P.runCase(t,o);case 14:return c=a.sent,a.next=17,Object(j.c)(_.setResponse(c));case 17:return a.next=19,Object(j.b)(300);case 19:if(!P.isEnptyOptions){a.next=27;break}if(!n){a.next=25;break}return a.next=23,Object(j.c)(_.showWinnerModal(!0));case 23:a.next=27;break;case 25:return a.next=27,Object(j.c)(_.showQuestionModal(!0));case 27:return a.next=29,Object(j.c)(_.setAnimation(v.slidIn));case 29:case"end":return a.stop()}}),Y)}function G(){var e,t,n;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(j.d)(w);case 2:return e=r.sent,r.next=5,Object(j.d)(L);case 5:return t=r.sent,r.next=8,Object(j.d)(U);case 8:return n=r.sent,r.next=11,P.addFavoriteFood(e,t,n);case 11:return r.next=13,Object(j.c)(_.start());case 13:case"end":return r.stop()}}),q)}function V(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)(_.showWinnerModal(!1));case 2:return e.next=4,Object(j.c)(_.showQuestionModal(!1));case 4:return e.next=6,Object(j.c)(_.setResponse(P.Root));case 6:return e.next=8,Object(j.c)(W.clear());case 8:case"end":return e.stop()}}),H)}var J=[Object(j.e)(S.START,V),Object(j.e)(S.ANSWER_ASYNC,B),Object(j.e)(S.SET_USER_FAVORITE_FOOD_ASYNC,G)],X=d.a.mark(z),K=d.a.mark(Z);function z(e){var t,n;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(j.d)(w);case 3:return n=r.sent,r.next=6,Object(j.c)(W.setFood(t));case 6:return r.next=8,Object(j.c)(W.setShowFoodModal(!1));case 8:return r.next=10,Object(j.c)(_.setAnimation(v.slidRight));case 10:return r.next=12,Object(j.c)(W.setCurrentQuestion(C(t,n.Question)));case 12:return r.next=14,Object(j.b)(300);case 14:return r.next=16,Object(j.c)(_.setAnimation(v.slidIn));case 16:case"end":return r.stop()}}),X)}function Z(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(j.c)(W.setQuality(t));case 3:return n.next=5,Object(j.b)(300);case 5:return n.next=7,Object(j.c)(_.setUserFavoriteFoodAsync());case 7:case"end":return n.stop()}}),K)}var $=[Object(j.e)(M.SET_FOOD_ASYNC,z),Object(j.e)(M.SET_QUALITY_ASYNC,Z)],ee=d.a.mark(te);function te(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)([].concat(Object(b.a)(J),Object(b.a)($)));case 2:case"end":return e.stop()}}),ee)}var ne=te,re=n(6),oe={showWinnerModal:!1,showQuestionModal:!1,animation:v.slidIn};function ce(e,t){var n=t.payload;return Object(re.a)(Object(re.a)({},e),{},{question:n})}function ae(e,t){var n=t.payload;return Object(re.a)(Object(re.a)({},e),{},{showWinnerModal:n})}function ie(e,t){var n=t.payload;return Object(re.a)(Object(re.a)({},e),{},{showQuestionModal:n})}function se(e,t){var n=t.payload;return Object(re.a)(Object(re.a)({},e),{},{animation:n})}var ue={food:"",quality:"",currentQuestion:T,showFoodModal:!0};function Oe(){return Object(re.a)({},ue)}function le(e,t){var n=t.payload;return Object(re.a)(Object(re.a)({},e),{},{food:n})}function de(e,t){var n=t.payload;return Object(re.a)(Object(re.a)({},e),{},{quality:n})}function be(e,t){var n=t.payload;return Object(re.a)(Object(re.a)({},e),{},{currentQuestion:n})}function je(e,t){var n=t.payload;return Object(re.a)(Object(re.a)({},e),{},{showFoodModal:n})}var fe=Object(u.b)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.SET_RESPONSE:return ce(e,t);case S.SHOW_QUESTION_MODAL:return ie(e,t);case S.SHOW_WINNER_MODAL:return ae(e,t);case S.SET_ANIMATION:return se(e,t);default:return e}},question:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.CLEAR:return Oe();case M.SET_FOOD:return le(e,t);case M.SET_QUALITY:return de(e,t);case M.SET_CURRENT_QUESTION:return be(e,t);case M.SET_SHOW_FOOD_MODAL:return je(e,t);default:return e}}}),he=Object(O.a)(),ve=u.c;"development"==="production".trim()&&(ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c);var pe=Object(u.d)(fe,ve(Object(u.a)(he)));he.run(ne);var Ee=n(2),Se={display:"flex",flexDirection:"column",padding:"10px",justifyContent:"center",alignItems:"center"};function ye(e){var t=e.children,n=e.height,r=e.width,o=e.bgColor;return Object(Ee.jsx)("div",{style:Object(re.a)(Object(re.a)({},Se),{},{height:n,width:r,background:o}),children:t})}ye.defaultProps={height:"100vh",width:"100vw"};var _e=ye;function xe(e){var t=e.body,n=e.footer,r=e.bgColor,o=e.animation;return Object(Ee.jsxs)("div",{className:"card ".concat(o),style:{background:r},children:[Object(Ee.jsx)("div",{className:"card__body",children:t}),Object(Ee.jsx)("div",{className:"card__footer",children:n})]})}xe.defaultProps={footer:Object(Ee.jsx)(Ee.Fragment,{})};var Ae=xe;function Te(e){var t=e.children,n=e.color,r=e.width,o=e.onClickHandler;return Object(Ee.jsx)("div",{className:"pill-button",role:"button",tabIndex:0,onClick:o,style:{backgroundColor:n,width:r},children:t})}Te.defaultProps={width:"110px"};var Ce=Te,ge=Object(o.createContext)(y);var Ne=function(e){var t=e.children;return Object(Ee.jsx)(ge.Provider,{value:Object(re.a)({},y),children:t})};var me=function(){return Object(o.useContext)(ge)};var we=function(){var e=Object(s.b)(),t=me(),n=Object(o.useCallback)((function(){e(_.start())}),[e]);return Object(Ee.jsx)(Ce,{width:"100%",color:t.colors.ok,onClickHandler:n,children:"Tentar novamente"})};var ke=function(){var e=me(),t=Object(s.c)(F);return Object(s.c)(k)&&Object(Ee.jsx)(Ae,{animation:t,bgColor:e.colors.secondaryBg,body:Object(Ee.jsx)("div",{children:"Acertei novamente!"}),footer:Object(Ee.jsx)(we,{})})||Object(Ee.jsx)(Ee.Fragment,{})},Re=n(18);function Fe(e){var t=e.placeholder,n=e.value,r=e.onChange,c=e.onEnterPressed,a=Object(o.useCallback)((function(e){r(e.target.value)}),[onchange]),i=Object(o.useCallback)((function(e){"Enter"===e.key&&(c(),e.preventDefault())}),[c]);return Object(Ee.jsx)("input",{autoFocus:!0,type:"text",placeholder:t,value:n,onChange:a,onKeyPress:i})}Fe.defaultProps={placeholder:""};var Ie=Fe;var Me=function(e){var t=e.question,n=e.placeholder,r=e.onChange,c=e.value,a=e.onEnter,i=Object(o.useCallback)((function(){a()}),[]);return Object(Ee.jsxs)("form",{children:[Object(Ee.jsx)("label",{htmlFor:t,children:Object(Ee.jsx)("b",{children:t})}),Object(Ee.jsx)(Ie,{placeholder:n,onChange:r,onEnterPressed:i,value:c})]})};var Qe=function(){var e=Object(s.b)(),t=me(),n=Object(s.c)(F),r=Object(s.c)(Q),c=Object(o.useState)(""),a=Object(Re.a)(c,2),i=a[0],u=a[1],O=Object(o.useCallback)((function(e){u(e)}),[]),l=Object(o.useCallback)((function(){i.length>3&&e(W.setFoodAsync(i))}),[e,i]),d=Object(o.useMemo)((function(){return Object(Ee.jsx)(Ce,{width:"100%",color:i.length>3?t.colors.ok:t.colors.off,onClickHandler:l,children:"Pr\xf3ximo"})}),[l,i]);return Object(Ee.jsx)(Ae,{animation:n,bgColor:t.colors.secondaryBg,body:Object(Ee.jsx)(Me,{question:r,placeholder:"comida",onChange:O,value:i,onEnter:l}),footer:d})};var Le=function(){var e=Object(s.b)(),t=me(),n=Object(s.c)(F),r=Object(s.c)(Q),c=Object(o.useState)(""),a=Object(Re.a)(c,2),i=a[0],u=a[1],O=Object(o.useCallback)((function(e){u(e)}),[]),l=Object(o.useCallback)((function(){i.length>3&&e(W.setQualityAsync(i))}),[e,i]),d=Object(o.useMemo)((function(){return Object(Ee.jsx)(Ce,{width:"100%",color:i.length>3?t.colors.ok:t.colors.off,onClickHandler:l,children:"Pr\xf3ximo"})}),[l,i]);return Object(Ee.jsx)(Ae,{animation:n,bgColor:t.colors.secondaryBg,body:Object(Ee.jsx)(Me,{question:r,placeholder:"Caracteristica",onChange:O,value:i,onEnter:l}),footer:d})};var Ue=function(){var e=Object(s.c)(R),t=Object(s.c)(D);return e&&t&&Object(Ee.jsx)(Qe,{})||e&&!t&&Object(Ee.jsx)(Le,{})||Object(Ee.jsx)(Ee.Fragment,{})};var De=function(){var e=Object(s.b)(),t=me(),n=Object(s.c)(m),c=Object(s.c)(F),a=Object(s.c)(k),i=Object(s.c)(R);Object(o.useEffect)((function(){e(_.start())}),[e]);var u=Object(o.useCallback)((function(){e(_.answerAsync(r.yes))}),[e]),O=Object(o.useCallback)((function(){e(_.answerAsync(r.no))}),[e]);return Object(Ee.jsxs)(_e,{bgColor:t.colors.primaryBg,children:[!a&&!i&&Object(Ee.jsx)(Ae,{animation:c,bgColor:t.colors.secondaryBg,body:Object(Ee.jsx)("div",{children:Object(Ee.jsx)("b",{children:n})}),footer:[Object(Ee.jsx)(Ce,{color:t.colors.cancel,onClickHandler:O,children:A}),Object(Ee.jsx)(Ce,{color:t.colors.ok,onClickHandler:u,children:x})]}),Object(Ee.jsx)(ke,{}),Object(Ee.jsx)(Ue,{})]})};var We=function(){return Object(Ee.jsx)(Ne,{children:Object(Ee.jsx)(De,{})})},Ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),c(e),a(e)}))};i.a.render(Object(Ee.jsx)(c.a.StrictMode,{children:Object(Ee.jsx)(s.a,{store:pe,children:Object(Ee.jsx)(We,{})})}),document.getElementById("root")),Ye()}},[[37,1,2]]]);
//# sourceMappingURL=main.fc437a29.chunk.js.map