(this.webpackJsonpgreen=this.webpackJsonpgreen||[]).push([[43],{424:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i="AIzaSyB2gRtnm_h3PmxB6ZhZ1ZBpvwAYiQheb1Y"},990:function(e,t,n){"use strict";n.r(t);var i=n(14),o=n(17),r=n(16),a=n(15),s=n(3),c=n(440),l=n(424),p=n(0),g=function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={directions:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new google.maps.DirectionsService,n=this.props.origin?this.props.origin:{lat:4.0004737,lng:9.8057055},i=this.props.destination?this.props.destination:{lat:4.000474,lng:9.8057055};t.route({origin:n,destination:i,waypoints:[{location:new google.maps.LatLng(4.0004937,9.8757055)},{location:new google.maps.LatLng(4.0018558,9.762441)}],travelMode:google.maps.TravelMode.DRIVING},(function(t,n){n===google.maps.DirectionsStatus.OK?e.setState({directions:t}):console.error("error fetching directions ".concat(t))}))}},{key:"render",value:function(){var e=this,t=Object(c.withGoogleMap)((function(t){return Object(p.jsx)(c.GoogleMap,{defaultCenter:{lat:40.756795,lng:-73.954298},defaultZoom:13,children:Object(p.jsx)(c.DirectionsRenderer,{directions:e.state.directions})})})),n=Object(c.withScriptjs)((function(){return Object(p.jsx)(t,{containerElement:Object(p.jsx)("div",{style:{height:"400px"}}),mapElement:Object(p.jsx)("div",{style:{height:"100%"}})})}));return Object(p.jsx)("div",{children:Object(p.jsx)(n,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat(l.a,"&v=3.exp&libraries=geometry,drawing,places"),loadingElement:Object(p.jsx)("div",{style:{height:"100%"}})})})}}]),n}(s.Component);t.default=g}}]);
//# sourceMappingURL=43.47c08817.chunk.js.map