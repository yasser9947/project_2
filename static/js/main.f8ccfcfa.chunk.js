(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/18.8caec97d.PNG"},function(e,t,a){e.exports=a.p+"static/media/4.c946fab5.PNG"},function(e,t,a){e.exports=a.p+"static/media/5.3cd86773.jpg"},function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(11),r=a.n(l),s=(a(20),a(7)),c=a(1),o=a(2),m=a(4),u=a(3),d=a(5),p=function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null)}}]),t}(n.Component),h=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null)}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null)}}]),t}(n.Component),g=a(12),b=a.n(g),w=a(13),E=a.n(w),f=a(14),j=a.n(f),y=a(6),O=a.n(y),H=(a(23),a(24),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={visited:[],willvisit:[],wantvisit:[]},a.changeHandler=function(e){var t=Object(s.a)({},a.state);t[e.target.name]=e.target.value,a.setState(t)},a.newModel=function(e){"East Stroudsburg"===e.target.innerText?O()({title:"PA/East Stroudsburg",text:"lived from 2014 to 2017 - Got My Master Degree from East Stroudsburg University",icon:"http://www.totsandtravel.com/images/hotels/US_PA/pocono_palace_resort_all_inclusive_east_stroudsburg_pennsylvania-main.jpg"}):"Mecca"===e.target.innerText?O()({title:"KSA/Mecca\ud83d\udd4b",text:"Travel in  (11- Ramadan)-stay 23 days ",icon:"https://blog.britishmuseum.org/wp-content/uploads/2017/08/Ka%E2%80%99ba-Mecca-1.jpg"}):"Santorini"===e.target.innerText?O()({title:"santorini",text:"Some day",icon:"https://cdn.thecrazytourist.com/wp-content/uploads/2018/04/ccimage-shutterstock_632387108.jpg"}):"Hawaii"===e.target.innerText?O()({title:"Hawaii/Honolulu",text:" Honeymoon ",icon:"https://www.classicvacations.com/sites/default/files/main-hawaii-pool_0.jpg"}):"Orlando"===e.target.innerText?O()({title:"FL/Orlando",text:"Travel in 8 Aug/2019 -Many things for fun-especially I have lived from 2019 to 2013 __ I miss it\ud83d\ude00",icon:"https://www.paymentsjournal.com/wp-content/uploads/2019/02/disney-2692578_1920.jpg"}):"Turkey"===e.target.innerText&&O()({title:"Turkey",text:"visited in 2010 with my family- 2018 Girls Trip",icon:"https://www.barcelo.com/pinandtravel/wp-content/uploads/2018/11/Ap1-17-1170x532.jpg"})},a.submitHandler=function(e){var t=Object(s.a)({},a.state);console.log(e.target.name),console.log(e.target.previousSibling.value),console.log(e.target.previousElementSibling.value),t[e.target.name].push(e.target.previousSibling.value),a.setState(t)},a.removeTask=function(e){var t=Object(s.a)({},a.state);t[e.target.name].splice(e.target.index,1),a.setState(t)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("h2",null,"  Trips list"),i.a.createElement("div",{className:"image-1"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"container-1"},i.a.createElement("img",{className:"image-1",src:b.a,alt:"visited cities"}),i.a.createElement("h3",null,"Visited City"),i.a.createElement("input",{name:"visited_input",onChange:this.changeHandler,size:"80px"}),i.a.createElement("button",{className:"btn",name:"visited",onClick:this.submitHandler},"Add to List"),this.state.visited.map(function(t){return i.a.createElement("p",null,i.a.createElement("span",{onClick:e.newModel},t),i.a.createElement("button",{name:"visited",onClick:e.removeTask},"X"))}),i.a.createElement(p,{changeHandler:this.changeHandler1,submitHandler:this.submitHandler,removeTas:this.removeTas1})),i.a.createElement("div",{className:"container-2"},i.a.createElement("img",{className:"image-1",src:E.a,alt:"will visit"}),i.a.createElement("h3",null,"Will Visit"),i.a.createElement("input",{name:"willvisit_input",onChange:this.changeHandler}),i.a.createElement("button",{className:"btn",name:"willvisit",onClick:this.submitHandler},"Add to List"),this.state.willvisit.map(function(t){return i.a.createElement("p",null,i.a.createElement("span",{onClick:e.newModel},t),i.a.createElement("button",{name:"willvisit",onClick:e.removeTask},"X"))}),i.a.createElement(h,{changeHandler:this.changeHandler2,submitHandler:this.submitHandler,removeTas:this.removeTas2})),i.a.createElement("div",{className:"container-3"},i.a.createElement("img",{className:"image-1",src:j.a,alt:"want to visit"}),i.a.createElement("h3",null,"Want To visit"),i.a.createElement("input",{name:"wantvisit_input",onChange:this.changeHandler}),i.a.createElement("button",{className:"btn",name:"wantvisit",onClick:this.submitHandler},"Add to List"),this.state.wantvisit.map(function(t){return i.a.createElement("p",null,i.a.createElement("span",{onClick:e.newModel},t),i.a.createElement("button",{name:"wantvisit",onClick:e.removeTask},"X"))}),i.a.createElement(v,{changeHandler:this.changeHandler3,submitHandler:this.submitHandler,removeTas:this.removeTas3}))),i.a.createElement("footer",{className:"footer"},i.a.createElement("p",null,"\u201cIf the plan doesn\u2019t work, change the plan, but never the goal.\ud83d\udcaa \u201d Rehab Alsaadoun\u2764\ufe0f")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(H,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.f8ccfcfa.chunk.js.map