/*! For license information please see 31.aec59d7f.chunk.js.LICENSE.txt */
(this.webpackJsonpgreen=this.webpackJsonpgreen||[]).push([[31],{1013:function(e,s,t){"use strict";t.r(s);var a=t(14),c=t(17),i=t(16),l=t(15),r=t(3),n=t(401),d=t(408),o=t(429),j=t(143),m=t(409),h=t(396),b=t(397),x=t(427),u=t(436),p=t(629),O=t.n(p),f=t(0),g=function(e){Object(i.a)(t,e);var s=Object(l.a)(t);function t(){var e;Object(a.a)(this,t);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(e=s.call.apply(s,[this].concat(i))).handleDismiss=function(s){var t=e.getCardParent(e.element);e.props.onRemove(t,(function(){!function(e,s){"onanimationend"in window?(e.addEventListener("animationend",s.bind(this)),e.className+=" animated bounceOut"):s.call(this)}(t,(function(){t.parentNode.removeChild(t),e.props.onRemoved()}))}))},e.handleRefresh=function(s){var t="whirl",a=e.getCardParent(e.element);!function(e,s){e.classList.add(t),s.forEach((function(s){e.classList.add(s)}))}(a,e.props.spinner.split(" ")),e.props.onRefresh(a,(function(){a.classList.remove(t)}))},e.setRef=function(s){return e.element=s},e}return Object(c.a)(t,[{key:"getCardParent",value:function(e){for(var s=e.parentElement;s&&!s.classList.contains("card");)s=s.parentElement;return s}},{key:"render",value:function(){return Object(f.jsxs)("div",{ref:this.setRef,className:"card-tool float-right",children:[this.props.refresh&&Object(f.jsx)("em",{onClick:this.handleRefresh,className:"fas fa-sync"}),this.props.dismiss&&Object(f.jsx)("em",{onClick:this.handleDismiss,className:"fa fa-times"})]})}}]),t}(r.Component);g.defaultProps={refresh:!1,dismiss:!1,onRemove:function(){},onRemoved:function(){},onRefresh:function(){},spinner:"standard"};var v=g,N=t(456),y=t(471),w=t(541),k=t(47),C=t(473),M=function(e){Object(i.a)(t,e);var s=Object(l.a)(t);function t(){var e;Object(a.a)(this,t);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(e=s.call.apply(s,[this].concat(i))).state={currentTime:null,format:""},e.updateTime=function(){e.setState({currentTime:C(new Date).format(e.props.format)})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateTime(),this.interval=setInterval(this.updateTime,1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return Object(f.jsx)("div",Object(k.a)(Object(k.a)({},this.props),{},{style:{display:"inline-block"},children:this.state.currentTime}))}}]),t}(r.Component),E=function(e){Object(i.a)(t,e);var s=Object(l.a)(t);function t(){var e;Object(a.a)(this,t);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(e=s.call.apply(s,[this].concat(i))).state={flotData:[{label:"Uniques",color:"#768294",data:[["Mar",70],["Apr",85],["May",59],["Jun",93],["Jul",66],["Aug",86],["Sep",60]]},{label:"Recurrent",color:"#1f92fe",data:[["Mar",21],["Apr",12],["May",27],["Jun",24],["Jul",16],["Aug",39],["Sep",15]]}],flotOptions:{series:{lines:{show:!1},points:{show:!0,radius:4},splines:{show:!0,tension:.4,lineWidth:1,fill:.5}},grid:{borderColor:"#eee",borderWidth:1,hoverable:!0,backgroundColor:"#fcfcfc"},tooltip:!0,tooltipOpts:{content:function(e,s,t){return s+" : "+t}},xaxis:{tickColor:"#fcfcfc",mode:"categories"},yaxis:{min:0,max:150,tickColor:"#eee",tickFormatter:function(e){return e}},shadowSize:0},dropdownOpen:!1},e.changeLanguage=function(s){e.props.i18n.changeLanguage(s)},e.toggle=function(){e.setState({dropdownOpen:!e.state.dropdownOpen})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){new O.a(this.refs.easypie,{animate:{duration:800,enabled:!0},barColor:"#23b7e5",trackColor:"rgba(200,200,200,0.4)",scaleColor:!1,lineWidth:10,lineCap:"round",size:145})}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(o.a,{children:[Object(f.jsxs)("div",{className:"content-heading",children:[Object(f.jsxs)("div",{children:["Dashboard",Object(f.jsx)("small",{children:Object(f.jsx)(n.a,{i18nKey:"dashboard.WELCOME"})})]}),Object(f.jsx)("div",{className:"ml-auto",children:Object(f.jsxs)(j.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,children:[Object(f.jsx)(m.a,{children:"English"}),Object(f.jsxs)(h.a,{className:"dropdown-menu-right-forced animated fadeInUpShort",children:[Object(f.jsx)(b.a,{onClick:function(){return e.changeLanguage("en")},children:"English"}),Object(f.jsx)(b.a,{onClick:function(){return e.changeLanguage("es")},children:"Spanish"})]})]})})]}),Object(f.jsxs)(x.a,{children:[Object(f.jsx)(u.a,{xl:3,md:6,children:Object(f.jsxs)("div",{className:"card flex-row align-items-center align-items-stretch border-0",children:[Object(f.jsx)("div",{className:"col-4 d-flex align-items-center bg-primary-dark justify-content-center rounded-left",children:Object(f.jsx)("em",{className:"icon-cloud-upload fa-3x"})}),Object(f.jsxs)("div",{className:"col-8 py-3 bg-primary rounded-right",children:[Object(f.jsx)("div",{className:"h2 mt-0",children:"1700"}),Object(f.jsx)("div",{className:"text-uppercase",children:"Uploads"})]})]})}),Object(f.jsx)(u.a,{xl:3,md:6,children:Object(f.jsxs)("div",{className:"card flex-row align-items-center align-items-stretch border-0",children:[Object(f.jsx)("div",{className:"col-4 d-flex align-items-center bg-purple-dark justify-content-center rounded-left",children:Object(f.jsx)("em",{className:"icon-globe fa-3x"})}),Object(f.jsxs)("div",{className:"col-8 py-3 bg-purple rounded-right",children:[Object(f.jsxs)("div",{className:"h2 mt-0",children:["700",Object(f.jsx)("small",{children:"GB"})]}),Object(f.jsx)("div",{className:"text-uppercase",children:"Quota"})]})]})}),Object(f.jsx)(u.a,{xl:3,lg:6,md:12,children:Object(f.jsxs)("div",{className:"card flex-row align-items-center align-items-stretch border-0",children:[Object(f.jsx)("div",{className:"col-4 d-flex align-items-center bg-green-dark justify-content-center rounded-left",children:Object(f.jsx)("em",{className:"icon-bubbles fa-3x"})}),Object(f.jsxs)("div",{className:"col-8 py-3 bg-green rounded-right",children:[Object(f.jsx)("div",{className:"h2 mt-0",children:"500"}),Object(f.jsx)("div",{className:"text-uppercase",children:"Reviews"})]})]})}),Object(f.jsx)(u.a,{xl:3,lg:6,md:12,children:Object(f.jsxs)("div",{className:"card flex-row align-items-center align-items-stretch border-0",children:[Object(f.jsx)("div",{className:"col-4 d-flex align-items-center bg-green justify-content-center rounded-left",children:Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)(M,{format:"MMMM",className:"text-sm"}),Object(f.jsx)("br",{}),Object(f.jsx)(M,{format:"D",className:"h2 mt0"})]})}),Object(f.jsxs)("div",{className:"col-8 py-3 rounded-right",children:[Object(f.jsx)(M,{format:"dddd",className:"text-uppercase"}),Object(f.jsx)("br",{}),Object(f.jsx)(M,{format:"h:mm",className:"h2 mt0 mr-sm"}),Object(f.jsx)(M,{format:"a",className:"text-muted text-sm"})]})]})})]}),Object(f.jsxs)(x.a,{children:[Object(f.jsxs)(u.a,{xl:9,children:[Object(f.jsx)(x.a,{children:Object(f.jsx)(u.a,{xl:12,children:Object(f.jsxs)("div",{className:"card card-default",children:[Object(f.jsxs)("div",{className:"card-header",children:[Object(f.jsx)(v,{refresh:!0,onRefresh:function(e,s){return setTimeout(s,2e3)}}),Object(f.jsx)("div",{className:"card-title",children:"Inbound visitor statistics"})]}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsx)(w.a,{data:this.state.flotData,options:this.state.flotOptions,height:"250px"})})]})})}),Object(f.jsx)(x.a,{children:Object(f.jsx)(u.a,{xl:12,children:Object(f.jsx)("div",{className:"card border-0",children:Object(f.jsxs)("div",{className:"row row-flush",children:[Object(f.jsx)("div",{className:"col-lg-2 col-md-3 col-6 bg-info py-4 d-flex align-items-center justify-content-center rounded-left",children:Object(f.jsx)("em",{className:"wi wi-day-sunny fa-4x"})}),Object(f.jsx)("div",{className:"col-lg-2 col-md-3 col-6 py-2 br d-flex align-items-center justify-content-center",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"h1 m-0 text-bold",children:"32\xb0"}),Object(f.jsx)("div",{className:"text-uppercase",children:"Clear"})]})}),Object(f.jsxs)("div",{className:"col-lg-2 col-md-3 d-none d-md-block py-2 text-center br",children:[Object(f.jsx)("div",{className:"text-info text-sm",children:"10 AM"}),Object(f.jsx)("div",{className:"text-muted text-md",children:Object(f.jsx)("em",{className:"wi wi-day-cloudy"})}),Object(f.jsx)("div",{className:"text-info",children:Object(f.jsx)("span",{className:"text-muted",children:"20%"})}),Object(f.jsx)("div",{className:"text-muted",children:"27\xb0"})]}),Object(f.jsxs)("div",{className:"col-lg-2 col-md-3 d-none d-md-block py-2 text-center br",children:[Object(f.jsx)("div",{className:"text-info text-sm",children:"11 AM"}),Object(f.jsx)("div",{className:"text-muted text-md",children:Object(f.jsx)("em",{className:"wi wi-day-cloudy"})}),Object(f.jsx)("div",{className:"text-info",children:Object(f.jsx)("span",{className:"text-muted",children:"30%"})}),Object(f.jsx)("div",{className:"text-muted",children:"28\xb0"})]}),Object(f.jsxs)("div",{className:"col-lg-2 py-2 text-center br d-none d-lg-block",children:[Object(f.jsx)("div",{className:"text-info text-sm",children:"12 PM"}),Object(f.jsx)("div",{className:"text-muted text-md",children:Object(f.jsx)("em",{className:"wi wi-day-cloudy"})}),Object(f.jsx)("div",{className:"text-info",children:Object(f.jsx)("span",{className:"text-muted",children:"20%"})}),Object(f.jsx)("div",{className:"text-muted",children:"30\xb0"})]}),Object(f.jsxs)("div",{className:"col-lg-2 py-2 text-center d-none d-lg-block",children:[Object(f.jsx)("div",{className:"text-info text-sm",children:"1 PM"}),Object(f.jsx)("div",{className:"text-muted text-md",children:Object(f.jsx)("em",{className:"wi wi-day-sunny-overcast"})}),Object(f.jsx)("div",{className:"text-info",children:Object(f.jsx)("span",{className:"text-muted",children:"0%"})}),Object(f.jsx)("div",{className:"text-muted",children:"30\xb0"})]})]})})})}),Object(f.jsxs)(x.a,{children:[Object(f.jsx)(u.a,{xl:4,children:Object(f.jsx)("div",{className:"card border-0",children:Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("h3",{className:"text-muted mt-0",children:"300"}),Object(f.jsx)("em",{className:"ml-auto text-muted fa fa-coffee fa-2x"})]}),Object(f.jsx)(N.a,{options:{type:"line",height:80,width:"100%",lineWidth:2,lineColor:"#7266ba",spotColor:"#888",fillColor:"transparent",minSpotColor:"#7266ba",maxSpotColor:"#7266ba",highlightLineColor:"#fff",spotRadius:3,resize:!0},values:[1,3,4,7,5,9,4,4,7,5,9,6,4],className:"pv-lg"}),Object(f.jsx)("p",{children:Object(f.jsx)("small",{className:"text-muted",children:"Actual progress"})}),Object(f.jsx)("div",{className:"progress progress-xs",children:Object(f.jsx)("div",{role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"},className:"progress-bar progress-bar-info progress-bar-striped",children:Object(f.jsx)("span",{className:"sr-only",children:"80% Complete"})})})]})})}),Object(f.jsx)(u.a,{xl:8,children:Object(f.jsxs)("div",{className:"card card-default",children:[Object(f.jsxs)("div",{className:"card-header",children:[Object(f.jsx)("div",{className:"px-2 float-right badge badge-danger",children:"5"}),Object(f.jsx)("div",{className:"px-2 mr-2 float-right badge badge-success",children:"12"}),Object(f.jsx)("div",{className:"card-title",children:"Team messages"})]}),Object(f.jsxs)(y.a,{className:"list-group",height:"180",children:[Object(f.jsx)("div",{className:"list-group-item list-group-item-action",children:Object(f.jsxs)("div",{className:"media",children:[Object(f.jsx)("img",{className:"align-self-start mx-2 circle thumb32",src:"img/user/02.jpg",alt:"Avatar"}),Object(f.jsxs)("div",{className:"media-body text-truncate",children:[Object(f.jsx)("p",{className:"mb-1",children:Object(f.jsxs)("strong",{className:"text-primary",children:[Object(f.jsx)("span",{className:"circle bg-success circle-lg text-left"}),Object(f.jsx)("span",{children:"Catherine Ellis"})]})}),Object(f.jsx)("p",{className:"mb-1 text-sm",children:"Cras sit amet nibh libero, in gravida nulla. Nulla..."})]}),Object(f.jsx)("div",{className:"ml-auto",children:Object(f.jsx)("small",{className:"text-muted ml-2",children:"2h"})})]})}),Object(f.jsx)("div",{className:"list-group-item list-group-item-action",children:Object(f.jsxs)("div",{className:"media",children:[Object(f.jsx)("img",{className:"align-self-start mx-2 circle thumb32",src:"img/user/03.jpg",alt:"Avatar"}),Object(f.jsxs)("div",{className:"media-body text-truncate",children:[Object(f.jsx)("p",{className:"mb-1",children:Object(f.jsxs)("strong",{className:"text-primary",children:[Object(f.jsx)("span",{className:"circle bg-success circle-lg text-left"}),Object(f.jsx)("span",{children:"Jessica Silva"})]})}),Object(f.jsx)("p",{className:"mb-1 text-sm",children:"Cras sit amet nibh libero, in gravida nulla. Nulla..."})]}),Object(f.jsx)("div",{className:"ml-auto",children:Object(f.jsx)("small",{className:"text-muted ml-2",children:"3h"})})]})}),Object(f.jsx)("div",{className:"list-group-item list-group-item-action",children:Object(f.jsxs)("div",{className:"media",children:[Object(f.jsx)("img",{className:"align-self-start mx-2 circle thumb32",src:"img/user/09.jpg",alt:"Avatar"}),Object(f.jsxs)("div",{className:"media-body text-truncate",children:[Object(f.jsx)("p",{className:"mb-1",children:Object(f.jsxs)("strong",{className:"text-primary",children:[Object(f.jsx)("span",{className:"circle bg-danger circle-lg text-left"}),Object(f.jsx)("span",{children:"Jessie Wells"})]})}),Object(f.jsx)("p",{className:"mb-1 text-sm",children:"Cras sit amet nibh libero, in gravida nulla. Nulla..."})]}),Object(f.jsx)("div",{className:"ml-auto",children:Object(f.jsx)("small",{className:"text-muted ml-2",children:"4h"})})]})}),Object(f.jsx)("div",{className:"list-group-item list-group-item-action",children:Object(f.jsxs)("div",{className:"media",children:[Object(f.jsx)("img",{className:"align-self-start mx-2 circle thumb32",src:"img/user/12.jpg",alt:"Avatar"}),Object(f.jsxs)("div",{className:"media-body text-truncate",children:[Object(f.jsx)("p",{className:"mb-1",children:Object(f.jsxs)("strong",{className:"text-primary",children:[Object(f.jsx)("span",{className:"circle bg-danger circle-lg text-left"}),Object(f.jsx)("span",{children:"Rosa Burke"})]})}),Object(f.jsx)("p",{className:"mb-1 text-sm",children:"Cras sit amet nibh libero, in gravida nulla. Nulla..."})]}),Object(f.jsx)("div",{className:"ml-auto",children:Object(f.jsx)("small",{className:"text-muted ml-2",children:"1d"})})]})}),Object(f.jsx)("div",{className:"list-group-item list-group-item-action",children:Object(f.jsxs)("div",{className:"media",children:[Object(f.jsx)("img",{className:"align-self-start mx-2 circle thumb32",src:"img/user/10.jpg",alt:"Avatar"}),Object(f.jsxs)("div",{className:"media-body text-truncate",children:[Object(f.jsx)("p",{className:"mb-1",children:Object(f.jsxs)("strong",{className:"text-primary",children:[Object(f.jsx)("span",{className:"circle bg-danger circle-lg text-left"}),Object(f.jsx)("span",{children:"Michelle Lane"})]})}),Object(f.jsx)("p",{className:"mb-1 text-sm",children:"Mauris eleifend, libero nec cursus lacinia..."})]}),Object(f.jsx)("div",{className:"ml-auto",children:Object(f.jsx)("small",{className:"text-muted ml-2",children:"2d"})})]})})]}),Object(f.jsx)("div",{className:"card-footer clearfix",children:Object(f.jsxs)("div",{className:"input-group",children:[Object(f.jsx)("input",{className:"form-control form-control-sm",type:"text",placeholder:"Search message .."}),Object(f.jsx)("span",{className:"input-group-btn",children:Object(f.jsx)("button",{className:"btn btn-secondary btn-sm",type:"submit",children:Object(f.jsx)("i",{className:"fa fa-search"})})})]})})]})})]})]}),Object(f.jsxs)(u.a,{xl:3,children:[Object(f.jsxs)("div",{className:"card card-default",children:[Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("a",{className:"text-muted float-right",href:"",children:Object(f.jsx)("em",{className:"fa fa-arrow-right"})}),Object(f.jsx)("div",{className:"text-info",children:"Average Monthly Uploads"}),Object(f.jsx)("div",{className:"text-center py-4",children:Object(f.jsx)("div",{ref:"easypie","data-percent":"70",className:"easypie-chart easypie-chart-lg",children:Object(f.jsx)("span",{children:"70%"})})}),Object(f.jsx)(N.a,{options:{barColor:"#23b7e5",height:30,barWidth:5,barSpacing:2},values:"5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7",className:"text-center"})]}),Object(f.jsx)("div",{className:"card-footer",children:Object(f.jsxs)("p",{className:"text-muted",children:[Object(f.jsx)("em",{className:"fa fa-upload fa-fw"}),Object(f.jsx)("span",{children:"This Month"}),Object(f.jsx)("span",{className:"text-dark",children:"1000 Gb"})]})})]}),Object(f.jsxs)("div",{className:"card card-default",children:[Object(f.jsx)("div",{className:"card-header",children:Object(f.jsx)("div",{className:"card-title",children:"Latest activities"})}),Object(f.jsxs)("div",{className:"list-group",children:[Object(f.jsx)("div",{className:"list-group-item",children:Object(f.jsxs)("div",{className:"media",children:[Object(f.jsx)("div",{className:"align-self-start mr-2",children:Object(f.jsxs)("span",{className:"fa-stack",children:[Object(f.jsx)("em",{className:"fa fa-circle fa-stack-2x text-purple"}),Object(f.jsx)("em",{className:"fas fa-cloud-upload-alt fa-stack-1x fa-inverse text-white"})]})}),Object(f.jsxs)("div",{className:"media-body text-truncate",children:[Object(f.jsx)("p",{className:"mb-1",children:Object(f.jsx)("a",{className:"text-purple m-0",href:"",children:"NEW FILE"})}),Object(f.jsx)("p",{className:"m-0",children:Object(f.jsx)("small",{children:Object(f.jsx)("a",{href:"",children:"Bootstrap.xls"})})})]}),Object(f.jsx)("div",{className:"ml-auto",children:Object(f.jsx)("small",{className:"text-muted ml-2",children:"15m"})})]})}),Object(f.jsx)("div",{className:"list-group-item",children:Object(f.jsxs)("div",{className:"media",children:[Object(f.jsx)("div",{className:"align-self-start mr-2",children:Object(f.jsxs)("span",{className:"fa-stack",children:[Object(f.jsx)("em",{className:"fa fa-circle fa-stack-2x text-info"}),Object(f.jsx)("em",{className:"far fa-file-alt fa-stack-1x fa-inverse text-white"})]})}),Object(f.jsxs)("div",{className:"media-body text-truncate",children:[Object(f.jsx)("p",{className:"mb-1",children:Object(f.jsx)("a",{className:"text-info m-0",href:"",children:"NEW DOCUMENT"})}),Object(f.jsx)("p",{className:"m-0",children:Object(f.jsx)("small",{children:Object(f.jsx)("a",{href:"",children:"Bootstrap.doc"})})})]}),Object(f.jsx)("div",{className:"ml-auto",children:Object(f.jsx)("small",{className:"text-muted ml-2",children:"2h"})})]})}),Object(f.jsx)("div",{className:"list-group-item",children:Object(f.jsxs)("div",{className:"media",children:[Object(f.jsx)("div",{className:"align-self-start mr-2",children:Object(f.jsxs)("span",{className:"fa-stack",children:[Object(f.jsx)("em",{className:"fa fa-circle fa-stack-2x text-danger"}),Object(f.jsx)("em",{className:"fa fa-exclamation fa-stack-1x fa-inverse text-white"})]})}),Object(f.jsxs)("div",{className:"media-body text-truncate",children:[Object(f.jsx)("p",{className:"mb-1",children:Object(f.jsx)("a",{className:"text-danger m-0",href:"",children:"BROADCAST"})}),Object(f.jsx)("p",{className:"m-0",children:Object(f.jsx)("a",{href:"",children:"Read"})})]}),Object(f.jsx)("div",{className:"ml-auto",children:Object(f.jsx)("small",{className:"text-muted ml-2",children:"5h"})})]})}),Object(f.jsx)("div",{className:"list-group-item",children:Object(f.jsxs)("div",{className:"media",children:[Object(f.jsx)("div",{className:"align-self-start mr-2",children:Object(f.jsxs)("span",{className:"fa-stack",children:[Object(f.jsx)("em",{className:"fa fa-circle fa-stack-2x text-success"}),Object(f.jsx)("em",{className:"far fa-clock fa-stack-1x fa-inverse text-white"})]})}),Object(f.jsxs)("div",{className:"media-body text-truncate",children:[Object(f.jsx)("p",{className:"mb-1",children:Object(f.jsx)("a",{className:"text-success m-0",href:"",children:"NEW MEETING"})}),Object(f.jsx)("p",{className:"m-0",children:Object(f.jsxs)("small",{children:["On",Object(f.jsx)("em",{children:"10/12/2015 09:00 am"})]})})]}),Object(f.jsx)("div",{className:"ml-auto",children:Object(f.jsx)("small",{className:"text-muted ml-2",children:"15h"})})]})}),Object(f.jsx)("div",{className:"list-group-item",children:Object(f.jsxs)("div",{className:"media",children:[Object(f.jsx)("div",{className:"align-self-start mr-2",children:Object(f.jsxs)("span",{className:"fa-stack",children:[Object(f.jsx)("em",{className:"fa fa-circle fa-stack-2x text-warning"}),Object(f.jsx)("em",{className:"fa fa-tasks fa-stack-1x fa-inverse text-white"})]})}),Object(f.jsxs)("div",{className:"media-body text-truncate",children:[Object(f.jsx)("p",{className:"mb-1",children:Object(f.jsx)("a",{className:"text-warning m-0",href:"",children:"TASKS COMPLETION"})}),Object(f.jsx)("div",{className:"progress progress-xs m-0",children:Object(f.jsx)("div",{className:"progress-bar bg-warning progress-bar-striped",role:"progressbar","aria-valuenow":"22","aria-valuemin":"0","aria-valuemax":"100",style:{width:"22%"},children:Object(f.jsx)("span",{className:"sr-only",children:"22% Complete"})})})]}),Object(f.jsx)("div",{className:"ml-auto",children:Object(f.jsx)("small",{className:"text-muted ml-2",children:"1w"})})]})})]}),Object(f.jsx)("div",{className:"card-footer",children:Object(f.jsx)("a",{className:"text-sm",href:"",children:"Load more"})})]})]})]})]})}}]),t}(r.Component);s.default=Object(d.a)("translations")(E)},429:function(e,s,t){"use strict";t(3);var a=t(0),c=function(e){return Object(a.jsx)("div",{className:"content-wrapper",children:e.unwrap?Object(a.jsx)("div",{className:"unwrap",children:e.children}):e.children})};c.defaultProps={unwrap:!1},s.a=c},456:function(e,s,t){"use strict";t.d(s,"a",(function(){return h}));var a=t(47),c=t(14),i=t(17),l=t(16),r=t(15),n=t(3),d=t(414),o=t.n(d),j=(t(506),t(0)),m="resize.sparkline",h=function(e){Object(l.a)(t,e);var s=Object(r.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=s.call.apply(s,[this].concat(i))).state={values:e.props.values,options:e.props.options},e.setRef=function(s){e.element=s},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.renderChart(),this.state.options.resize&&o()(window).on(m,(function(){e.renderChart()}))}},{key:"getNormalizedParams",value:function(){var e=this.state,s=e.options,t=e.values;return s.disableHiddenCheck=!0,s.type=s.type||"bar",{options:s,values:t=Array.isArray(t)?t:t.split(",")}}},{key:"renderChart",value:function(){var e=this.getNormalizedParams(),s=e.options,t=e.values;o()(this.element).sparkline(t,s)}},{key:"componentWillUnmount",value:function(){o()(window).off(m),o()(this.element).sparkline("destroy")}},{key:"render",value:function(){var e=this.props.tag;return Object(j.jsx)(e,Object(a.a)({ref:this.setRef},this.props))}}]),t}(n.Component);h.defaultProps={options:{},tag:"div"}},471:function(e,s,t){"use strict";var a=t(47),c=(t(3),t(414)),i=t.n(c),l=(t(472),t(0)),r=function(e){return Object(l.jsx)("div",Object(a.a)(Object(a.a)({ref:function(s){return i()(s).slimScroll({height:e.height})}},e),{},{children:e.children}))};r.defaultProps={height:250},s.a=r},472:function(e,s,a){(function(e){var s;(s=e).fn.extend({slimScroll:function(e){var a=s.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},e);return this.each((function(){var c,i,l,r,n,d,o,j,m="<div></div>",h=!1,b=s(this);if(b.parent().hasClass(a.wrapperClass)){var x=b.scrollTop();if(v=b.siblings("."+a.barClass),g=b.siblings("."+a.railClass),k(),s.isPlainObject(e)){if("height"in e&&"auto"==e.height){b.parent().css("height","auto"),b.css("height","auto");var u=b.parent().parent().height();b.parent().css("height",u),b.css("height",u)}else if("height"in e){var p=e.height;b.parent().css("height",p),b.css("height",p)}if("scrollTo"in e)x=parseInt(a.scrollTo);else if("scrollBy"in e)x+=parseInt(a.scrollBy);else if("destroy"in e)return v.remove(),g.remove(),void b.unwrap();w(x,!1,!0)}}else if(!s.isPlainObject(e)||!("destroy"in e)){a.height="auto"==a.height?b.parent().height():a.height;var O=s(m).addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var f,g=s(m).addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),v=s(m).addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),N="right"==a.position?{right:a.distance}:{left:a.distance};g.css(N),v.css(N),b.wrap(O),b.parent().append(v),b.parent().append(g),a.railDraggable&&v.bind("mousedown",(function(e){var a=s(document);return l=!0,t=parseFloat(v.css("top")),pageY=e.pageY,a.bind("mousemove.slimscroll",(function(e){currTop=t+e.pageY-pageY,v.css("top",currTop),w(0,v.position().top,!1)})),a.bind("mouseup.slimscroll",(function(e){l=!1,M(),a.unbind(".slimscroll")})),!1})).bind("selectstart.slimscroll",(function(e){return e.stopPropagation(),e.preventDefault(),!1})),g.hover((function(){C()}),(function(){M()})),v.hover((function(){i=!0}),(function(){i=!1})),b.hover((function(){c=!0,C(),M()}),(function(){c=!1,M()})),b.bind("touchstart",(function(e,s){e.originalEvent.touches.length&&(n=e.originalEvent.touches[0].pageY)})),b.bind("touchmove",(function(e){h||e.originalEvent.preventDefault(),e.originalEvent.touches.length&&(w((n-e.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),n=e.originalEvent.touches[0].pageY)})),k(),"bottom"===a.start?(v.css({top:b.outerHeight()-v.outerHeight()}),w(0,!0)):"top"!==a.start&&(w(s(a.start).position().top,null,!0),a.alwaysVisible||v.hide()),f=this,window.addEventListener?(f.addEventListener("DOMMouseScroll",y,!1),f.addEventListener("mousewheel",y,!1)):document.attachEvent("onmousewheel",y)}function y(e){if(c){var t=0;(e=e||window.event).wheelDelta&&(t=-e.wheelDelta/120),e.detail&&(t=e.detail/3);var i=e.target||e.srcTarget||e.srcElement;s(i).closest("."+a.wrapperClass).is(b.parent())&&w(t,!0),e.preventDefault&&!h&&e.preventDefault(),h||(e.returnValue=!1)}}function w(e,s,t){h=!1;var c=e,i=b.outerHeight()-v.outerHeight();if(s&&(c=parseInt(v.css("top"))+e*parseInt(a.wheelStep)/100*v.outerHeight(),c=Math.min(Math.max(c,0),i),c=e>0?Math.ceil(c):Math.floor(c),v.css({top:c+"px"})),c=(o=parseInt(v.css("top"))/(b.outerHeight()-v.outerHeight()))*(b[0].scrollHeight-b.outerHeight()),t){var l=(c=e)/b[0].scrollHeight*b.outerHeight();l=Math.min(Math.max(l,0),i),v.css({top:l+"px"})}b.scrollTop(c),b.trigger("slimscrolling",~~c),C(),M()}function k(){d=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30),v.css({height:d+"px"});var e=d==b.outerHeight()?"none":"block";v.css({display:e})}function C(){if(k(),clearTimeout(r),o==~~o){if(h=a.allowPageScroll,j!=o){var e=0==~~o?"top":"bottom";b.trigger("slimscroll",e)}}else h=!1;j=o,d>=b.outerHeight()?h=!0:(v.stop(!0,!0).fadeIn("fast"),a.railVisible&&g.stop(!0,!0).fadeIn("fast"))}function M(){a.alwaysVisible||(r=setTimeout((function(){a.disableFadeOut&&c||i||l||(v.fadeOut("slow"),g.fadeOut("slow"))}),1e3))}})),this}}),s.fn.extend({slimscroll:s.fn.slimScroll})}).call(this,a(414))},541:function(e,s,t){"use strict";var a=t(14),c=t(17),i=t(16),l=t(15),r=t(414),n=t.n(r),d=t(3),o=t(153),j=t.n(o),m=(t(630),t(631),t(632),t(633),t(634),t(635),t(636),t(0)),h=function(e){Object(i.a)(t,e);var s=Object(l.a)(t);function t(){var e;Object(a.a)(this,t);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(e=s.call.apply(s,[this].concat(i))).setRef=function(s){e.flotElement=s},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){if("undefined"===typeof n.a.plot)throw new Error("Flot plugin not present.");this.drawChart()}},{key:"componentDidUpdate",value:function(e){j()(e.data,this.props.data)&&j()(e.options,this.props.options)||this.drawChart()}},{key:"componentWillUnmount",value:function(){n()(this.flotElement).data("plot").shutdown()}},{key:"drawChart",value:function(){var e=this.props.data,s=this.props.options;n.a.plot(this.flotElement,e,s)}},{key:"render",value:function(){var e={height:this.props.height,width:this.props.width};return Object(m.jsx)("div",{ref:this.setRef,style:e})}}]),t}(d.Component);h.defaultProps={height:"300px",width:"100%"},s.a=h}}]);
//# sourceMappingURL=31.aec59d7f.chunk.js.map