(this.webpackJsonpgreen=this.webpackJsonpgreen||[]).push([[36],{1002:function(e,t,s){"use strict";s.r(t);var c=s(47),a=s(14),l=s(17),i=s(16),n=s(15),r=s(3),d=s.n(r),j=s(401),o=s(413),m=s(1012),h=s(143),b=s(409),p=s(396),x=s(397),O=s(427),u=s(436),g=s(439),N=s(629),v=s.n(N),f=s(456),w=s(541),y=s(0),C=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,l=new Array(c),i=0;i<c;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={_id:"id4tooltip_"+(new Date).getUTCMilliseconds(),tooltipOpen:!1},e.toggle=function(t){e.setState({tooltipOpen:!e.state.tooltipOpen})},e}return Object(l.a)(s,[{key:"render",value:function(){return[Object(r.createElement)(m.a,Object(c.a)(Object(c.a)({},this.props),{},{isOpen:this.state.tooltipOpen,toggle:this.toggle,target:this.state._id,key:"1"}),this.props.content),d.a.cloneElement(d.a.Children.only(this.props.children),{id:this.state._id,key:"2"})]}}]),s}(r.Component),P=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,l=new Array(c),i=0;i<c;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={splineData:[{label:"Hours",color:"#23b7e5",data:[["Jan",70],["Feb",20],["Mar",70],["Apr",85],["May",59],["Jun",93],["Jul",66],["Aug",86],["Sep",60],["Oct",60],["Nov",12],["Dec",50]]},{label:"Commits",color:"#7266ba",data:[["Jan",20],["Feb",70],["Mar",30],["Apr",50],["May",85],["Jun",43],["Jul",96],["Aug",36],["Sep",80],["Oct",10],["Nov",72],["Dec",31]]}],splineOptions:{series:{lines:{show:!1},points:{show:!0,radius:4},splines:{show:!0,tension:.4,lineWidth:1,fill:.5}},grid:{borderColor:"#eee",borderWidth:1,hoverable:!0,backgroundColor:"#fcfcfc"},tooltip:!0,tooltipOpts:{content:function(e,t,s){return t+" : "+s}},xaxis:{tickColor:"#fcfcfc",mode:"categories"},yaxis:{min:0,max:150,tickColor:"#eee",tickFormatter:function(e){return e}},shadowSize:0},barStackedData:[{label:"Pending",color:"#9289ca",data:[["Pj1",86],["Pj2",136],["Pj3",97],["Pj4",110],["Pj5",62],["Pj6",85],["Pj7",115],["Pj8",78],["Pj9",104],["Pj10",82],["Pj11",97],["Pj12",110],["Pj13",62]]},{label:"Assigned",color:"#7266ba",data:[["Pj1",49],["Pj2",81],["Pj3",47],["Pj4",44],["Pj5",100],["Pj6",49],["Pj7",94],["Pj8",44],["Pj9",52],["Pj10",17],["Pj11",47],["Pj12",44],["Pj13",100]]},{label:"Completed",color:"#564aa3",data:[["Pj1",29],["Pj2",56],["Pj3",14],["Pj4",21],["Pj5",5],["Pj6",24],["Pj7",37],["Pj8",22],["Pj9",28],["Pj10",9],["Pj11",14],["Pj12",21],["Pj13",5]]}],barStackedOptions:{series:{stack:!0,bars:{align:"center",lineWidth:0,show:!0,barWidth:.6,fill:.9}},grid:{borderColor:"#eee",borderWidth:1,hoverable:!0,backgroundColor:"#fcfcfc"},tooltip:!0,tooltipOpts:{content:function(e,t,s){return t+" : "+s}},xaxis:{tickColor:"#fcfcfc",mode:"categories"},yaxis:{tickColor:"#eee"},shadowSize:0},dropdownTranslateOpen:!1,dropdownCardOpen:!1,dropdownChartOpen:!1},e.toggleDDTranslate=function(){e.setState({dropdownTranslateOpen:!e.state.dropdownTranslateOpen})},e.toggleDD=function(){e.setState({dropdownCardOpen:!e.state.dropdownCardOpen})},e.toggleDDChart=function(){e.setState({dropdownChartOpen:!e.state.dropdownChartOpen})},e.changeLanguage=function(t){e.props.i18n.changeLanguage(t)},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){new v.a(this.refs.easypiechart1,{animate:{duration:800,enabled:!0},barColor:"#23b7e5",trackColor:"#edf2f6",scaleColor:!1,lineWidth:2,lineCap:"round",size:130});new v.a(this.refs.easypiechart2,{animate:{duration:800,enabled:!0},barColor:"#f532e5",trackColor:"#edf2f6",scaleColor:!1,lineWidth:2,lineCap:"round",size:130});new v.a(this.refs.easypiechart3,{animate:{duration:800,enabled:!0},barColor:"#7266ba",trackColor:"#edf2f6",scaleColor:!1,lineWidth:2,lineCap:"round",size:130});new v.a(this.refs.easypiechart4,{animate:{duration:800,enabled:!0},barColor:"#ff902b",trackColor:"#edf2f6",scaleColor:!1,lineWidth:2,lineCap:"round",size:130})}},{key:"render",value:function(){var e=this;return Object(y.jsxs)(o.a,{children:[Object(y.jsxs)("div",{className:"content-heading",children:[Object(y.jsxs)("div",{children:["Dashboard",Object(y.jsx)("small",{children:Object(y.jsx)(j.a,{i18nKey:"dashboard.WELCOME"})})]}),Object(y.jsx)("div",{className:"ml-auto",children:Object(y.jsxs)(h.a,{isOpen:this.state.dropdownTranslateOpen,toggle:this.toggleDDTranslate,children:[Object(y.jsx)(b.a,{children:"English"}),Object(y.jsxs)(p.a,{className:"dropdown-menu-right-forced animated fadeInUpShort",children:[Object(y.jsx)(x.a,{onClick:function(){return e.changeLanguage("en")},children:"English"}),Object(y.jsx)(x.a,{onClick:function(){return e.changeLanguage("es")},children:"Spanish"})]})]})})]}),Object(y.jsxs)(O.a,{children:[Object(y.jsx)(u.a,{xl:4,children:Object(y.jsxs)("div",{className:"list-group mb-3",children:[Object(y.jsx)("div",{className:"list-group-item",children:Object(y.jsxs)("div",{className:"d-flex align-items-center py-3",children:[Object(y.jsxs)("div",{className:"w-50 px-3",children:[Object(y.jsx)("p",{className:"m-0 lead",children:"1204"}),Object(y.jsx)("p",{className:"m-0 text-sm",children:"Commits this month"})]}),Object(y.jsx)("div",{className:"w-50 px-3 text-center",children:Object(y.jsx)(f.a,{options:{barColor:"#23b7e5",height:"60",barWidth:"10",barSpacing:"6",chartRangeMin:"0"},values:"3,6,7,8,4,5"})})]})}),Object(y.jsx)("div",{className:"list-group-item",children:Object(y.jsxs)("div",{className:"d-flex align-items-center py-3",children:[Object(y.jsxs)("div",{className:"w-50 px-3",children:[Object(y.jsx)("p",{className:"m-0 lead",children:"$ 3,200.00"}),Object(y.jsx)("p",{className:"m-0 text-sm",children:"Available budget"})]}),Object(y.jsx)("div",{className:"w-50 px-3 text-center",children:Object(y.jsx)(f.a,{options:{type:"line",height:"60",width:"80%",lineWidth:"2",lineColor:"#7266ba",chartRangeMin:"0",spotColor:"#888",minSpotColor:"#7266ba",maxSpotColor:"#7266ba",fillColor:"",highlightLineColor:"#fff",spotRadius:"3",resize:!0},values:"7,3,4,7,5,9,4,4,7,5,9,6,4"})})]})}),Object(y.jsx)("div",{className:"list-group-item",children:Object(y.jsxs)("div",{className:"d-flex align-items-center py-3",children:[Object(y.jsxs)("div",{className:"w-50 px-3",children:[Object(y.jsx)("p",{className:"m-0 lead",children:"67"}),Object(y.jsx)("p",{className:"m-0 text-sm",children:"New followers"})]}),Object(y.jsx)("div",{className:"w-50 px-3 text-center",children:Object(y.jsxs)("div",{className:"d-flex align-items-center flex-wrap justify-content-center",children:[Object(y.jsx)(C,{placement:"top",content:"Katie",children:Object(y.jsx)("img",{src:"img/user/02.jpg",alt:"Follower",className:"circle thumb24 mx-1"})}),Object(y.jsx)(C,{placement:"top",content:"Cody",children:Object(y.jsx)("img",{src:"img/user/01.jpg",alt:"Follower",className:"circle thumb24 mx-1"})}),Object(y.jsx)(C,{placement:"top",content:"Tamara",children:Object(y.jsx)("img",{src:"img/user/03.jpg",alt:"Follower",className:"circle thumb24 mx-1"})}),Object(y.jsx)(C,{placement:"top",content:"Gene",children:Object(y.jsx)("img",{src:"img/user/04.jpg",alt:"Follower",className:"circle thumb24 mx-1"})}),Object(y.jsx)(C,{placement:"top",content:"Marsha",children:Object(y.jsx)("img",{src:"img/user/04.jpg",alt:"Follower",className:"circle thumb24 mx-1"})}),Object(y.jsx)(C,{placement:"top",content:"Robin",children:Object(y.jsx)("img",{src:"img/user/09.jpg",alt:"Follower",className:"circle thumb24 mx-1"})})]})})]})})]})}),Object(y.jsx)(u.a,{xl:8,children:Object(y.jsxs)("div",{className:"card",id:"cardChart3",children:[Object(y.jsxs)("div",{className:"card-header",children:[Object(y.jsxs)(h.a,{className:"float-right",isOpen:this.state.dropdownCardOpen,toggle:this.toggleDD,children:[Object(y.jsx)(b.a,{className:"btn-sm",children:"Monthly"}),Object(y.jsxs)(p.a,{className:"dropdown-menu-right-forced fadeInLeft animated",children:[Object(y.jsx)(x.a,{children:"Daily"}),Object(y.jsx)(x.a,{children:"Monthly"}),Object(y.jsx)(x.a,{children:"Yearly"})]})]}),Object(y.jsx)("div",{className:"card-title",children:"Projects Hours"})]}),Object(y.jsx)("div",{className:"card-body",children:Object(y.jsx)(w.a,{data:this.state.barStackedData,options:this.state.barStackedOptions,height:"250px"})})]})})]}),Object(y.jsx)("div",{className:"unwrap my-3",children:Object(y.jsxs)("div",{className:"card",children:[Object(y.jsxs)("div",{className:"card-header",children:[Object(y.jsxs)(h.a,{className:"float-right",isOpen:this.state.dropdownChartOpen,toggle:this.toggleDDChart,children:[Object(y.jsx)(b.a,{className:"btn-sm",children:"All time"}),Object(y.jsxs)(p.a,{className:"dropdown-menu-right-forced fadeInLeft animated",children:[Object(y.jsx)(x.a,{children:"Daily"}),Object(y.jsx)(x.a,{children:"Monthly"}),Object(y.jsx)(x.a,{children:"All time"})]})]}),Object(y.jsx)("div",{className:"card-title",children:"Overall progress"})]}),Object(y.jsx)("div",{className:"card-body",children:Object(y.jsx)(w.a,{data:this.state.splineData,options:this.state.splineOptions,height:"250px"})}),Object(y.jsx)("div",{className:"card-body",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col-md-3 col-6 text-center",children:[Object(y.jsx)("p",{children:"Projects"}),Object(y.jsx)("div",{className:"h1",children:"25"})]}),Object(y.jsxs)("div",{className:"col-md-3 col-6 text-center",children:[Object(y.jsx)("p",{children:"Teammates"}),Object(y.jsx)("div",{className:"h1",children:"85"})]}),Object(y.jsxs)("div",{className:"col-md-3 col-6 text-center",children:[Object(y.jsx)("p",{children:"Hours"}),Object(y.jsx)("div",{className:"h1",children:"380"})]}),Object(y.jsxs)("div",{className:"col-md-3 col-6 text-center",children:[Object(y.jsx)("p",{children:"Budget"}),Object(y.jsx)("div",{className:"h1 text-truncate",children:"$ 10,000.00"})]})]})})]})}),Object(y.jsxs)("div",{className:"row mb-3",children:[Object(y.jsxs)("div",{className:"col-lg-3 col-6 text-center",children:[Object(y.jsx)("p",{children:"Current Project"}),Object(y.jsx)("div",{className:"text-center py-4",children:Object(y.jsx)("div",{ref:"easypiechart1","data-percent":"60",className:"easypie-chart easypie-chart-md",children:Object(y.jsx)("span",{children:"60%"})})})]}),Object(y.jsxs)("div",{className:"col-lg-3 col-6 text-center",children:[Object(y.jsx)("p",{children:"Current Progress"}),Object(y.jsx)("div",{className:"text-center py-4",children:Object(y.jsx)("div",{ref:"easypiechart2","data-percent":"30",className:"easypie-chart easypie-chart-md",children:Object(y.jsx)("span",{children:"30%"})})})]}),Object(y.jsxs)("div",{className:"col-lg-3 col-6 text-center",children:[Object(y.jsx)("p",{children:"Space Usage"}),Object(y.jsx)("div",{className:"text-center py-4",children:Object(y.jsx)("div",{ref:"easypiechart3","data-percent":"50",className:"easypie-chart easypie-chart-md",children:Object(y.jsx)("span",{children:"50%"})})})]}),Object(y.jsxs)("div",{className:"col-lg-3 col-6 text-center",children:[Object(y.jsx)("p",{children:"Interactions"}),Object(y.jsx)("div",{className:"text-center py-4",children:Object(y.jsx)("div",{ref:"easypiechart4","data-percent":"75",className:"easypie-chart easypie-chart-md",children:Object(y.jsx)("span",{children:"75%"})})})]})]}),Object(y.jsx)("div",{className:"list-group mb-3",children:Object(y.jsx)("div",{className:"list-group-item list-group-item-action",children:Object(y.jsx)("table",{className:"wd-wide",children:Object(y.jsx)("tbody",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"wd-xs",children:Object(y.jsx)("div",{className:"px-2",children:Object(y.jsx)("img",{className:"img-fluid rounded thumb64",src:"img/dummy.png",alt:"Dummy"})})}),Object(y.jsx)("td",{children:Object(y.jsxs)("div",{className:"px-2",children:[Object(y.jsx)("h4",{className:"mb-2",children:"Project A"}),Object(y.jsx)("small",{className:"text-muted",children:"Vestibulum ante ipsum primis in faucibus orci"})]})}),Object(y.jsx)("td",{className:"wd-sm  d-none d-lg-table-cell",children:Object(y.jsxs)("div",{className:"px-2",children:[Object(y.jsx)("p",{className:"m-0",children:"Last change"}),Object(y.jsx)("small",{className:"text-muted",children:"4 weeks ago"})]})}),Object(y.jsx)("td",{className:"wd-xs d-none d-lg-table-cell",children:Object(y.jsx)("div",{className:"px-2",children:Object(y.jsxs)("p",{className:"m-0 text-muted",children:[Object(y.jsx)("em",{className:"icon-people mr-2 fa-lg"}),"26"]})})}),Object(y.jsx)("td",{className:"wd-xs d-none d-lg-table-cell",children:Object(y.jsx)("div",{className:"px-2",children:Object(y.jsxs)("p",{className:"m-0 text-muted",children:[Object(y.jsx)("em",{className:"icon-doc mr-2 fa-lg"}),"3500"]})})}),Object(y.jsx)("td",{className:"wd-sm",children:Object(y.jsx)("div",{className:"px-2",children:Object(y.jsx)(g.a,{className:"m-0 progress-xs",value:"80",color:"success"})})})]})})})})}),Object(y.jsx)("div",{className:"list-group mb-3",children:Object(y.jsx)("div",{className:"list-group-item list-group-item-action",children:Object(y.jsx)("table",{className:"wd-wide",children:Object(y.jsx)("tbody",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"wd-xs",children:Object(y.jsx)("div",{className:"px-2",children:Object(y.jsx)("img",{className:"img-fluid rounded thumb64",src:"img/dummy.png",alt:"Dummy"})})}),Object(y.jsx)("td",{children:Object(y.jsxs)("div",{className:"px-2",children:[Object(y.jsx)("h4",{className:"mb-2",children:"Project X"}),Object(y.jsx)("small",{className:"text-muted",children:"Vestibulum ante ipsum primis in faucibus orci"})]})}),Object(y.jsx)("td",{className:"wd-sm d-none d-lg-table-cell",children:Object(y.jsxs)("div",{className:"px-2",children:[Object(y.jsx)("p",{className:"m-0",children:"Last change"}),Object(y.jsx)("small",{className:"text-muted",children:"Today at 06:23 am"})]})}),Object(y.jsx)("td",{className:"wd-xs d-none d-lg-table-cell",children:Object(y.jsx)("div",{className:"px-2",children:Object(y.jsxs)("p",{className:"m-0 text-muted",children:[Object(y.jsx)("em",{className:"icon-people mr-2 fa-lg"}),"3"]})})}),Object(y.jsx)("td",{className:"wd-xs d-none d-lg-table-cell",children:Object(y.jsx)("div",{className:"px-2",children:Object(y.jsxs)("p",{className:"m-0 text-muted",children:[Object(y.jsx)("em",{className:"icon-doc mr-2 fa-lg"}),"150"]})})}),Object(y.jsx)("td",{className:"wd-sm",children:Object(y.jsx)("div",{className:"px-2",children:Object(y.jsx)(g.a,{className:"m-0 progress-xs",value:"50",color:"purple"})})})]})})})})}),Object(y.jsx)("div",{className:"list-group mb-3",children:Object(y.jsx)("div",{className:"list-group-item list-group-item-action",children:Object(y.jsx)("table",{className:"wd-wide",children:Object(y.jsx)("tbody",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"wd-xs",children:Object(y.jsx)("div",{className:"px-2",children:Object(y.jsx)("img",{className:"img-fluid rounded thumb64",src:"img/dummy.png",alt:"Dummy"})})}),Object(y.jsx)("td",{children:Object(y.jsxs)("div",{className:"px-2",children:[Object(y.jsx)("h4",{className:"mb-2",children:"Project Z"}),Object(y.jsx)("small",{className:"text-muted",children:"Vestibulum ante ipsum primis in faucibus orci"})]})}),Object(y.jsx)("td",{className:"wd-sm d-none d-lg-table-cell",children:Object(y.jsxs)("div",{className:"px-2",children:[Object(y.jsx)("p",{className:"m-0",children:"Last change"}),Object(y.jsx)("small",{className:"text-muted",children:"Yesterday at 10:20 pm"})]})}),Object(y.jsx)("td",{className:"wd-xs d-none d-lg-table-cell",children:Object(y.jsx)("div",{className:"px-2",children:Object(y.jsxs)("p",{className:"m-0 text-muted",children:[Object(y.jsx)("em",{className:"icon-people mr-2 fa-lg"}),"15"]})})}),Object(y.jsx)("td",{className:"wd-xs d-none d-lg-table-cell",children:Object(y.jsx)("div",{className:"px-2",children:Object(y.jsxs)("p",{className:"m-0 text-muted",children:[Object(y.jsx)("em",{className:"icon-doc mr-2 fa-lg"}),"480"]})})}),Object(y.jsx)("td",{className:"wd-sm",children:Object(y.jsx)("div",{className:"px-2",children:Object(y.jsx)(g.a,{className:"m-0 progress-xs",value:"20",color:"green"})})})]})})})})})]})}}]),s}(r.Component);t.default=P},413:function(e,t,s){"use strict";s(3);var c=s(0),a=function(e){return Object(c.jsx)("div",{className:"content-wrapper",children:e.unwrap?Object(c.jsx)("div",{className:"unwrap",children:e.children}):e.children})};a.defaultProps={unwrap:!1},t.a=a},456:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var c=s(47),a=s(14),l=s(17),i=s(16),n=s(15),r=s(3),d=s(414),j=s.n(d),o=(s(506),s(0)),m="resize.sparkline",h=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,l=new Array(c),i=0;i<c;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={values:e.props.values,options:e.props.options},e.setRef=function(t){e.element=t},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.renderChart(),this.state.options.resize&&j()(window).on(m,(function(){e.renderChart()}))}},{key:"getNormalizedParams",value:function(){var e=this.state,t=e.options,s=e.values;return t.disableHiddenCheck=!0,t.type=t.type||"bar",{options:t,values:s=Array.isArray(s)?s:s.split(",")}}},{key:"renderChart",value:function(){var e=this.getNormalizedParams(),t=e.options,s=e.values;j()(this.element).sparkline(s,t)}},{key:"componentWillUnmount",value:function(){j()(window).off(m),j()(this.element).sparkline("destroy")}},{key:"render",value:function(){var e=this.props.tag;return Object(o.jsx)(e,Object(c.a)({ref:this.setRef},this.props))}}]),s}(r.Component);h.defaultProps={options:{},tag:"div"}},541:function(e,t,s){"use strict";var c=s(14),a=s(17),l=s(16),i=s(15),n=s(414),r=s.n(n),d=s(3),j=s(153),o=s.n(j),m=(s(630),s(631),s(632),s(633),s(634),s(635),s(636),s(0)),h=function(e){Object(l.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).setRef=function(t){e.flotElement=t},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){if("undefined"===typeof r.a.plot)throw new Error("Flot plugin not present.");this.drawChart()}},{key:"componentDidUpdate",value:function(e){o()(e.data,this.props.data)&&o()(e.options,this.props.options)||this.drawChart()}},{key:"componentWillUnmount",value:function(){r()(this.flotElement).data("plot").shutdown()}},{key:"drawChart",value:function(){var e=this.props.data,t=this.props.options;r.a.plot(this.flotElement,e,t)}},{key:"render",value:function(){var e={height:this.props.height,width:this.props.width};return Object(m.jsx)("div",{ref:this.setRef,style:e})}}]),s}(d.Component);h.defaultProps={height:"300px",width:"100%"},t.a=h}}]);
//# sourceMappingURL=36.57910e2c.chunk.js.map