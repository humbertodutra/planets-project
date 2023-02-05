(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(6),l=a.n(n),c=(a(4),a(2)),m=Object(r.createContext)(),i=[{name:"Mercury",mass:174e-6,radius:.0341,period:88,semi_major_axis:.387098,temperature:400,distance_light_year:11e-6,host_star_mass:1,host_star_temperature:6e3},{name:"Venus",mass:.00257,radius:.0847,period:224.7,semi_major_axis:.723332,temperature:737,distance_light_year:4e-6,host_star_mass:1,host_star_temperature:6e3},{name:"Earth",mass:.00315,radius:.0892,period:365.2,semi_major_axis:1,temperature:288,distance_light_year:0,host_star_mass:1,host_star_temperature:6e3},{name:"Mars",mass:338e-6,radius:.0488,period:687,semi_major_axis:1.542,temperature:210,distance_light_year:37e-6,host_star_mass:1,host_star_temperature:6e3},{name:"Jupiter",mass:1,radius:1,period:4331,semi_major_axis:5.204,temperature:165,distance_light_year:88e-6,host_star_mass:1,host_star_temperature:6e3},{name:"Saturn",mass:.299,radius:.843,period:10747,semi_major_axis:9.537,temperature:134,distance_light_year:17e-5,host_star_mass:1,host_star_temperature:6e3},{name:"Uranus",mass:.0457,radius:.358,period:30589,semi_major_axis:19.191,temperature:76,distance_light_year:304e-6,host_star_mass:1,host_star_temperature:6e3},{name:"Neptune",mass:.0537,radius:.346,period:59800,semi_major_axis:30.07,temperature:72,distance_light_year:478e-6,host_star_mass:1,host_star_temperature:6e3}];var u=function(e){var t=e.children,a=i,n=Object(r.useState)(a),l=Object(c.a)(n,2),u=l[0],o=l[1];Object(r.useEffect)((function(){}));var p={planets:u,setPlanets:o};return s.a.createElement(m.Provider,{value:p},t)};var o=function(){var e=Object(r.useContext)(m).planets,t=e.map((function(e,t){return s.a.createElement("tr",{className:"tr",key:t},s.a.createElement("td",{className:"td"},e.name),s.a.createElement("td",{className:"td"},e.mass),s.a.createElement("td",{className:"td"},e.radius),s.a.createElement("td",{className:"td"},e.period),s.a.createElement("td",{className:"td"},e.semi_major_axis),s.a.createElement("td",{className:"td"},e.temperature),s.a.createElement("td",{className:"td"},e.distance_light_year),s.a.createElement("td",{className:"td"},e.host_star_mass),s.a.createElement("td",{className:"td"},e.host_star_temperature))})),a=s.a.createElement("div",{className:"tableDiv"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",{className:"th"},s.a.createElement("tr",{className:"trHead"},s.a.createElement("th",{className:"tableH"},"Name"),s.a.createElement("th",{className:"tableH"},"Mass"),s.a.createElement("th",{className:"tableH"},"Radius"),s.a.createElement("th",{className:"tableH"},"Period"),s.a.createElement("th",{className:"tableH"},"Semi-major Axis"),s.a.createElement("th",{className:"tableH"},"Temperature"),s.a.createElement("th",{className:"tableH"},"Distance from Light Year"),s.a.createElement("th",{className:"tableH"},"Host Star Mass"),s.a.createElement("th",{className:"tableH"},"Host Star Temperature"))),s.a.createElement("tbody",null,t)));return s.a.createElement("div",null,e.length>0?a:s.a.createElement("p",null,"Loading... If the Api response takes a long time, try with new filters "))},p=a(1),_=a.n(p),d=a(3),h=a(7),E=h.a.API_KEY,f=function(){var e=Object(d.a)(_.a.mark((function e(t){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){var e=Object(d.a)(_.a.mark((function e(){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.api-ninjas.com/v1/planets","?").concat(t),{headers:{"X-Api-Key":E}});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,console.log(r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=3,a();case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var b=function(){var e=Object(r.useState)("min_mass"),t=Object(c.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(1),i=Object(c.a)(l,2),u=i[0],o=i[1],p=Object(r.useContext)(m).setPlanets,h=Object(r.useState)(!1),E=Object(c.a)(h,2),b=E[0],v=E[1],x=function(){var e=Object(d.a)(_.a.mark((function e(t){var r,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),setTimeout((function(){v(!1)}),500),t.preventDefault(),r="".concat(a,"=").concat(u),e.next=5,f(r);case 5:s=e.sent,p(s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement("form",{className:"filter-form"},s.a.createElement("h3",{className:"filter-title"},"Space Filter"),s.a.createElement("div",{className:"filter-container"},s.a.createElement("label",{htmlFor:"select-option",className:"filter-label"},"Option:",s.a.createElement("select",{id:"select-option",value:a,onChange:function(e){return n(e.target.value)},className:"filter-select"},s.a.createElement("option",{value:"min_mass"},"Min Mass"),s.a.createElement("option",{value:"max_mass"},"Max Mass"),s.a.createElement("option",{value:"min_radius"},"Min Radius"),s.a.createElement("option",{value:"max_radius"},"Max Radius"),s.a.createElement("option",{value:"min_period"},"Min Period"),s.a.createElement("option",{value:"max_period"},"Max Period"),s.a.createElement("option",{value:"min_temperature"},"Min Temperature"),s.a.createElement("option",{value:"max_temperature"},"Max Temperature"),s.a.createElement("option",{value:"min_distance_light_year"},"Min Distance Light Year"),s.a.createElement("option",{value:"max_distance_light_year"},"Max Distance Light Year"),s.a.createElement("option",{value:"min_semi_major_axis"},"Min Semi Major Axis"),s.a.createElement("option",{value:"max_semi_major_axis"},"Max Semi Major Axis")),s.a.createElement("br",null)),s.a.createElement("label",{htmlFor:"value",className:"filter-label"},"Value:",s.a.createElement("input",{type:"number",id:"value",value:u,onChange:function(e){return o(e.target.value)},className:"filter-input"})),s.a.createElement("br",null),s.a.createElement("button",{className:"filter-submit",onClick:x,type:"submit",disabled:b},"Filter")))},v=function(){var e=Object(r.useContext)(m).setPlanets,t=Object(r.useState)("Earth"),a=Object(c.a)(t,2),n=a[0],l=a[1],i=Object(r.useState)(!1),u=Object(c.a)(i,2),o=u[0],p=u[1],h=function(){var t=Object(d.a)(_.a.mark((function t(a){var r,s;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),setTimeout((function(){p(!1)}),500),a.preventDefault(),r="name".concat("=",n),t.next=5,f(r);case 5:s=t.sent,e(s);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement("form",{className:"filter-form"},s.a.createElement("label",{className:"filter-label",htmlFor:"filter-input"},"Planet Name:",s.a.createElement("input",{className:"filter-input",type:"text",value:n,onChange:function(e){return l(e.target.value)}})),s.a.createElement("button",{color:"black",type:"submit",className:"filter-submit",disabled:o,onClick:h}," ","Filter by name (Enslish)"," "))},x=function(){return s.a.createElement("main",{className:"Main"},s.a.createElement("div",{className:"title-div"},s.a.createElement("h1",{className:"title"},"Galaxy System"),s.a.createElement("p",{className:"description"}," ","This project is using the api to fetch the list of planets https://api-ninjas.com/api/planets"," ")),s.a.createElement(b,null),s.a.createElement(v,null),s.a.createElement(o,null))};var N=function(){return s.a.createElement(u,null,s.a.createElement(x,null))};l.a.render(s.a.createElement(N,null),document.getElementById("root"))},4:function(e,t,a){},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9cf9cf8b.chunk.js.map