(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{18:function(n,e,t){n.exports=t(26)},26:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(13),o=t.n(c),i=t(2),s=t(3),u=t.n(s),l=t(8),m=t(1),f=t(17),d=function(){var n=Object(l.a)(u.a.mark((function n(e,t,r){var a,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=").concat(r),n.next=3,fetch(a);case 3:return n.next=5,n.sent.json();case 5:return c=n.sent,n.abrupt("return",c.results.map((function(n){return Object(f.a)({},n,{answers:(e=[].concat(Object(i.a)(n.incorrect_answers),[n.correct_answer]),Object(i.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),b=t(4),p=t(5);function g(){var n=Object(b.a)(["\n  transition: all 0.3s ease;\n  :hover {\n    opacity: 0.8;\n  }\n\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 2rem;\n    width: 100%;\n    height: 6rem;\n    margin: 0.5rem 0;\n    background-color: ","; // linear-gradient(90deg, #56ccff, #6eafb4)\n    border: 0.3rem solid #fff;\n    box-shadow: 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.1);\n    border-radius: 1rem;\n    color: #fff;\n    text-shadow: 0 0.1rem 0 rgba(0, 0, 0, 0.25);\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(b.a)(["\n  border: 0.2rem solid #a38600;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);\n  max-width: 100vw;\n  background: #ecece2;\n  border-radius: 1rem;\n  text-align: center;\n  padding: 2rem;\n  margin: 0 4rem;\n\n  p {\n    font-size: 1.8rem;\n    margin-bottom: 1.4rem;\n  }\n"]);return h=function(){return n},n}var v,w,E=p.b.div(h()),j=p.b.div(g(),(function(n){var e=n.correct,t=n.userClicked;return e?"#2bda4a":!e&&t?"#ff0f0f":"#5ecac9"})),x=function(n){var e=n.question,t=n.answers,r=n.callback,c=n.userAnswer,o=n.questionNr,i=n.totalQuestions;return a.a.createElement(E,null,a.a.createElement("p",{className:"number"},"Question: ",o," / ",i),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:e}}),a.a.createElement("div",null,t.map((function(n){return a.a.createElement(j,{key:n,correct:(null===c||void 0===c?void 0:c.correctAnswer)===n,userClicked:(null===c||void 0===c?void 0:c.answer)===n},a.a.createElement("button",{disabled:!!c,value:n,onClick:r},a.a.createElement("span",{dangerouslySetInnerHTML:{__html:n}})))}))))};function O(){var n=Object(b.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n\n  > p {\n    color: white;\n  }\n\n  .score {\n    color: white;\n    font-size: 3rem;\n    margin: 2rem auto;\n  }\n\n  h1 {\n    font-family: PT Mono, sans-serif;\n\n    background-size: 100%;\n    font-size: 7rem;\n    font-weight: 400;\n    text-align: center;\n    margin: 2rem;\n  }\n\n  .start,\n  .next {\n    border: none;\n    font-size: 2rem;\n    padding: 2rem 4rem;\n    margin: 2rem 0;\n    border-radius: 0.7rem;\n    background: linear-gradient(180deg, #fff, #ffcc91);\n    border: 0.2rem solid #d38558;\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);\n    cursor: pointer;\n  }\n\n  .start {\n    max-width: 20rem;\n  }\n"]);return O=function(){return n},n}function k(){var n=Object(b.a)(["\n  * {\n        margin: 0;\n        padding: 0;\n        box-sizing: inherit;\n      }\n      html {\n        font-size: 62.5%;\n        box-sizing: border-box;\n      }\n\n      body {\n        font-family: PT Mono, sans-serif;\n        color: #555;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        background: linear-gradient(\n          to top left,\n          #d3954f,\n          hsla(64, 55%, 64%, 0.89)\n        );\n      }\n   \n"]);return k=function(){return n},n}!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(v||(v={})),function(n){n.MULTIPLE="multiple",n.TRUEORFALSE="boolean"}(w||(w={}));var y=Object(p.a)(k()),S=p.b.div(O()),z=function(){var n=Object(r.useState)(!1),e=Object(m.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)([]),s=Object(m.a)(o,2),f=s[0],b=s[1],p=Object(r.useState)(0),g=Object(m.a)(p,2),h=g[0],E=g[1],j=Object(r.useState)([]),O=Object(m.a)(j,2),k=O[0],z=O[1],q=Object(r.useState)(0),M=Object(m.a)(q,2),A=M[0],L=M[1],T=Object(r.useState)(!0),_=Object(m.a)(T,2),N=_[0],I=_[1],C=function(){var n=Object(l.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),I(!1),n.next=4,d(10,v.EASY,w.MULTIPLE);case 4:e=n.sent,b(e),L(0),z([]),E(0),c(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return a.a.createElement(r.Fragment,null,a.a.createElement(y,null),a.a.createElement(S,null,a.a.createElement("h1",null,"Quiz"),(N||10===k.length)&&a.a.createElement("button",{className:"start",onClick:C},"Start Game"),!N&&a.a.createElement("p",{className:"score"},"Score:",A),t&&a.a.createElement("p",null,"Loading Questions ..."),!t&&!N&&a.a.createElement(x,{questionNr:h+1,totalQuestions:10,question:f[h].question,answers:f[h].answers,userAnswer:k&&k[h],callback:function(n){if(!N){var e=n.currentTarget.value,t=f[h].correct_answer===e;t&&L((function(n){return n+1}));var r={question:f[h].question,answer:e,correct:t,correctAnswer:f[h].correct_answer};z((function(n){return[].concat(Object(i.a)(n),[r])}))}}}),N||t||k.length!==h+1||9===h?null:a.a.createElement("button",{className:"next",onClick:function(){var n=h+1;10===n?I(!0):E(n)}},"Next question")))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(z,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a68571e1.chunk.js.map