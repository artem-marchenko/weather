(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,a){e.exports={weatherMini:"WeatherMini_weatherMini__2ytq6",time:"WeatherMini_time__2J1PU",info:"WeatherMini_info__kDFdl",description:"WeatherMini_description__38F2J",temp:"WeatherMini_temp__yw7y-"}},14:function(e,t,a){e.exports={main:"Main_main__2pBZY",modal:"Main_modal__2IQCg",show:"Main_show__1KZQX",modal__inner:"Main_modal__inner__lj196",modalButton:"Main_modalButton__QNCjM",form:"Main_form__ILKv7",input:"Main_input__9GnDt",button:"Main_button__1wMhg"}},15:function(e,t,a){e.exports={modal:"Searching_modal__2--iL",show:"Searching_show__1Eh4E",modal__inner:"Searching_modal__inner__dJs8h",modalButton:"Searching_modalButton__237xp",form:"Searching_form__1agIb",input:"Searching_input__2RAIX",button:"Searching_button__3JvOF"}},16:function(e,t,a){e.exports={weeksForecast:"WeeksForecast_weeksForecast__3z5K2",title:"WeeksForecast_title__2T7yx",dayTitle:"WeeksForecast_dayTitle__3rsRb"}},25:function(e,t,a){e.exports={wrapper:"Loader_wrapper__31iDg",lds_ellipsis:"Loader_lds_ellipsis__37aWF","lds-ellipsis1":"Loader_lds-ellipsis1___IXiu","lds-ellipsis2":"Loader_lds-ellipsis2__1BHRS","lds-ellipsis3":"Loader_lds-ellipsis3__o_JNa"}},45:function(e,t,a){},46:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(36),c=a.n(i),r=(a(45),a(19)),s=a(3),o=(a(46),a(0)),l=function(){return Object(o.jsx)("nav",{className:"#1a237e indigo darken-4",children:Object(o.jsxs)("div",{className:"nav-wrapper wrap",children:[Object(o.jsx)("span",{className:"brand-logo logo left",children:"Weather"}),Object(o.jsx)("ul",{id:"nav-mobile",className:"right",children:Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/",children:"Home"})})})]})})},d=function(){return Object(o.jsx)("footer",{className:"page-footer",children:Object(o.jsxs)("span",{className:"date",children:["\xa9 ",(new Date).getFullYear()," Copyright Text"]})})},u=a(40),_=a(11),m=a(39),j=Object({NODE_ENV:"production",PUBLIC_URL:"/weather",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,h=m.create({baseURL:"https://api.openweathermap.org/data/2.5/"}),b=function(e,t){return h.get("weather?lat=".concat(e,"&lon=").concat(t,"&units=metric&lang=ru&appid=").concat(j))},f=function(e){return h.get("weather?q=".concat(e,"&units=metric&lang=").concat(j))},p=function(e){return h.get("forecast?q=".concat(e,"&lang=ru&units=metric&appid=").concat(j)).then((function(e){return e.data.list}))},O=a(9),x=a.n(O),g=a.p+"static/media/cloudy-night.4a43954d.svg",w=a.p+"static/media/thunder.19ff3c30.svg",v=a.p+"static/media/drizzle.44fb8223.svg",k=a.p+"static/media/rainy.130d6250.svg",y=a.p+"static/media/snowy.dce3f5e7.svg",N=a.p+"static/media/day.c33ef664.svg",S=function(e){var t;switch(e.icon){case"Clouds":t=g;break;case"Thunderstorm":t=w;break;case"Drizzle":t=v;break;case"Rain":t=k;break;case"Snow":t=y;break;default:t=N}return Object(o.jsx)("div",{className:x.a.weatherBlock,onClick:function(){return e.setWeekForecast({isOpen:!0,city:e.name})},children:Object(o.jsxs)("div",{className:x.a.weather,children:[" ",e.deleteCity&&Object(o.jsx)("div",{className:x.a.delete,children:Object(o.jsx)("button",{className:x.a.button,onClick:function(){return e.deleteCity(e.name)},children:"X"})}),Object(o.jsx)("div",{className:x.a.location,children:e.name}),Object(o.jsxs)("div",{className:x.a.mainInfo,children:[Object(o.jsx)("div",{className:x.a.img,children:Object(o.jsx)("img",{src:t,alt:""})}),Object(o.jsx)("div",{className:x.a.temp,children:Math.round(e.temp)+"\xb0C"})]}),Object(o.jsx)("div",{className:x.a.weatherType,children:e.weather}),Object(o.jsxs)("div",{className:x.a.feelsLike,children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a: ",Math.round(e.feels_like),"\xb0C"]})]})})},W=a(14),F=a.n(W),C=function(e){var t=e.isFixed?"".concat(F.a.main," ").concat(F.a.fixed):"".concat(F.a.main);return Object(o.jsxs)("div",{className:t,children:[Object(o.jsx)(S,{name:e.currentGeo.name,temp:e.currentGeo.temp,weather:e.currentGeo.weather,feels_like:e.currentGeo.feels_like,icon:e.currentGeo.icon,setWeekForecast:e.setWeekForecast}),e.locations.map((function(t){return Object(o.jsx)(S,{deleteCity:e.deleteCity,name:t.name,temp:t.temp,weather:t.weather,feels_like:t.feels_like,icon:t.icon,setWeekForecast:e.setWeekForecast})})),e.isSearching?Object(o.jsx)("button",{className:F.a.modalButton,onClick:function(){return e.setIsSearching(!1)},children:"-"}):Object(o.jsx)("button",{className:F.a.modalButton,onClick:function(){return e.setIsSearching(!0)},children:"+"})]})},M=a(25),I=a.n(M),E=function(){return Object(o.jsx)("div",{className:I.a.wrapper,children:Object(o.jsxs)("div",{className:I.a.lds_ellipsis,children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})})},T=a(15),B=a.n(T),L=function(e){return Object(o.jsx)("div",{className:B.a.modal,children:Object(o.jsx)("div",{className:B.a.modal__inner,children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=t.target.cityName.value.trim();a&&(e.getWeatherByName(a),t.target.cityName.value="",e.setIsSearching(!1))},className:B.a.form,children:[Object(o.jsx)("input",{name:"cityName",type:"text",className:B.a.input,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e..."}),Object(o.jsx)("button",{type:"submit",className:B.a.button,children:"\u041f\u043e\u0438\u0441\u043a"})]})})})},D=a(16),P=a.n(D),R=a(10),A=a.n(R),G=(a.p,function(e){var t;switch(e.data.weather.main){case"Clouds":t=g;break;case"Thunderstorm":t=w;break;case"Drizzle":t=v;break;case"Rain":t=k;break;case"Snow":t=y;break;default:t=N}return Object(o.jsxs)("div",{className:A.a.weatherMini,children:[Object(o.jsx)("div",{className:A.a.time,children:e.data.time}),Object(o.jsxs)("div",{className:A.a.info,children:[Object(o.jsx)("div",{className:A.a.img,children:Object(o.jsx)("img",{src:t,alt:""})}),Object(o.jsx)("div",{className:A.a.temp,children:Math.round(e.data.temp)+"\xb0C"})]}),Object(o.jsxs)("div",{className:A.a.weather,children:[Object(o.jsx)("p",{className:A.a.description,children:e.data.weather.description}),Object(o.jsx)("p",{className:A.a.description,children:"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a: "+Math.round(e.data.feels_like)})]})]})}),J=a(76),z=a(75),K=(a(72),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:P.a.weeksForecast,children:e.week.length>0?Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:P.a.title,children:e.city}),e.week.map((function(e){return e.data.length>0&&e.day!=(new Date).toLocaleString("ru",{weekday:"long"})?Object(o.jsxs)("div",{className:P.a.day,children:[Object(o.jsx)("div",{className:P.a.dayTitle,children:e.day}),Object(o.jsx)("div",{className:P.a.dayItems,children:Object(o.jsx)(J.a,{spaceBetween:50,slidesPerView:1,initialSlide:4,breakpoints:{600:{slidesPerView:2}},children:e.data.map((function(e){return Object(o.jsx)(z.a,{children:Object(o.jsx)(G,{data:e})})}))})})]}):null}))]}):Object(o.jsx)(E,{})})})}),H=function(e,t){return new Date(e.dt_txt).toLocaleString("ru",{weekday:"long"})==t},X=function(e){return e.map((function(e){return{time:new Date(e.dt_txt).toLocaleString("ru",{month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric"}),temp:e.main.temp,feels_like:e.main.feels_like,weather:e.weather[0]}}))},Y=function(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),i=a[0],c=a[1];return Object(n.useEffect)((function(){p(e.city).then((function(e){var t=[{day:"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",data:X(e.filter((function(e){return H(e,"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a")})))},{day:"\u0432\u0442\u043e\u0440\u043d\u0438\u043a",data:X(e.filter((function(e){return H(e,"\u0432\u0442\u043e\u0440\u043d\u0438\u043a")})))},{day:"\u0441\u0440\u0435\u0434\u0430",data:X(e.filter((function(e){return H(e,"\u0441\u0440\u0435\u0434\u0430")})))},{day:"\u0447\u0435\u0442\u0432\u0435\u0440\u0433",data:X(e.filter((function(e){return H(e,"\u0447\u0435\u0442\u0432\u0435\u0440\u0433")})))},{day:"\u043f\u044f\u0442\u043d\u0438\u0446\u0430",data:X(e.filter((function(e){return H(e,"\u043f\u044f\u0442\u043d\u0438\u0446\u0430")})))},{day:"\u0441\u0443\u0431\u0431\u043e\u0442\u0430",data:X(e.filter((function(e){return H(e,"\u0441\u0443\u0431\u0431\u043e\u0442\u0430")})))},{day:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",data:X(e.filter((function(e){return H(e,"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435")})))}];c(t)}))}),[]),Object(o.jsx)(K,{city:e.city,week:i})},U=function(){var e=Object(n.useState)(!0),t=Object(_.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)({}),r=Object(_.a)(c,2),s=r[0],l=r[1],d=Object(n.useState)(!1),m=Object(_.a)(d,2),j=m[0],h=m[1],p=Object(n.useState)({isOpen:!1,city:null}),O=Object(_.a)(p,2),x=O[0],g=O[1],w=Object(n.useState)([]),v=Object(_.a)(w,2),k=v[0],y=v[1];Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){b(e.coords.latitude,e.coords.longitude).then((function(e){var t=e.data.main,a=t.temp,n=t.feels_like,c=e.data.name,r=e.data.weather[0],s=r.description,o=r.main;l({temp:a,feels_like:n,name:c,description:s,icon:o}),i(!1)}),(function(){alert("\u041e\u0448\u0438\u0431\u043a\u0430! \u0412\u044b \u043d\u0435 \u0434\u0430\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0433\u0435\u043e-\u043f\u043e\u0437\u0438\u0446\u0438\u0438!")}))}))}),[]),Object(n.useEffect)((function(){(JSON.parse(localStorage.getItem("locations"))||[]).forEach((function(e){return N(e)}))}),[]),Object(n.useEffect)((function(){localStorage.setItem("locations",JSON.stringify(k.map((function(e){return e.name}))))}),[k]);var N=function(e){k.some((function(t){return t.name===e}))?alert("\u0412\u044b \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0433\u043e\u0440\u043e\u0434 ".concat(e)):(i(!0),f(e).then((function(t){var a=t.data.main,n=a.temp,c=a.feels_like,r=t.data.weather[0],s=r.description,o=r.main;y((function(t){return[{temp:n,feels_like:c,name:e,description:s,icon:o,id:1}].concat(Object(u.a)(t))})),i(!1)})).catch((function(t){alert("\u0413\u043e\u0440\u043e\u0434 ".concat(e," \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d :("))})))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(o.Fragment,{children:[a?Object(o.jsx)(E,{}):Object(o.jsx)(C,{currentGeo:s,setIsSearching:h,isSearching:j,locations:k,deleteCity:function(e){y((function(t){return t.filter((function(t){return t.name!==e}))}))},setWeekForecast:g,isFixed:x.isOpen}),j&&Object(o.jsx)(L,{setIsSearching:h,getWeatherByName:N}),x.isOpen&&Object(o.jsx)(Y,{city:x.city,isOpen:x.isOpen})]})})},V=function(){return Object(o.jsx)("h1",{children:"Page not found"})},Z=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(r.a,{basename:"/weather",children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{className:"container content",children:Object(o.jsxs)(s.c,{children:[Object(o.jsx)(s.a,{exact:!0,path:"/",component:U}),Object(o.jsx)(s.a,{component:V})]})}),Object(o.jsx)(d,{})]})})};c.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(Z,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={weatherBlock:"Weather_weatherBlock__1Ydp5",cold:"Weather_cold__G_vYZ",warm:"Weather_warm__2oEaH",hot:"Weather_hot__2d59y",weather:"Weather_weather__39I_z",location:"Weather_location__2XTW6",mainInfo:"Weather_mainInfo__2FbEA",img:"Weather_img__30-l_",temp:"Weather_temp__Md9VW",weatherType:"Weather_weatherType__1yOrA",feelsLike:"Weather_feelsLike__2rZhF",delete:"Weather_delete__2b2dF",button:"Weather_button__1_0AK",close:"Weather_close__2GaI1"}}},[[73,1,2]]]);
//# sourceMappingURL=main.08f8b964.chunk.js.map