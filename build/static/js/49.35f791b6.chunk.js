(this.webpackJsonpgreen=this.webpackJsonpgreen||[]).push([[49],{996:function(e,t,a){"use strict";a.r(t);var o=a(150),n=a(36),s=a(47),l=a(14),r=a(17),i=a(16),c=a(15),u=a(3),d=a(147),h=a.n(d),m=a(148),f=a(412),p=a(432),b=a(653),g=a(430),v=a(69),j=a.n(v),O=a(0),S=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).swalCallback=function(){r.props.history.push("/list_machine/")},r.toggleStep=function(e){return function(){var t=r.formMachineRef,a=document.getElementById("tabPane"+r.state.activeStep),o=[].slice.call(a.querySelectorAll("input,select")),l=p.a.bulkValidate(o),i=l.errors,c=l.hasError;if(r.setState(Object(n.a)({},t.name,Object(s.a)(Object(s.a)({},r.state[t.name]),{},{errors:i}))),!c){switch(r.state.activeStep!==e&&r.setState({activeStep:e}),e){case"1":r.setState({progressValue:[100,0,0]});break;case"2":r.setState({progressValue:[0,100,0]});break;case"3":r.setState({progressValue:[0,0,100]});break;default:console.log("default")}}}},r.getModele=function(){h.a.get(m.f).then((function(e){var t=e.data.data.modeles;console.log(t),r.setState({modeles:t,isLoading:!1}),console.log(r.state.modeles)})).catch((function(e){console.log("get modele failed!"),console.log(e)}))},r.getMachine=function(e){h.a.get("".concat(m.d).concat(e)).then((function(e){var t=e.data.data.machine,a=t.modele,o=a.libelle,n=t.nom,s=t.zone,l=t.createdAt,i=t.level,c=t.status,u=t.localite,d=t.coordonnees,h=new Object(u),m=h.pays,f=h.rue,p=h.ville,b=h.quartier,g=new Object(d),v=g.latitude,j=g.longitude;console.log(v),console.log(e),r.setState({formMachine:{nom:n,zone:s,level:i,status:c,pays:m,ville:p,quartier:b,rue:f,libelle:o,latitude:v,longitude:j,key:t.key},selectedModele:a,createdAt:l}),r.state.path.push({label:n,value:""})})).catch((function(e){console.log("No such machine!",e),j()("Erreur","Cher GreenManager, veillez selectionner une GreenBox pour obtenir ses informations ".concat(e),"warning").then((function(e){r.props.history.push("/dashboard_machine/")}))}))},r.editMachine=function(){var e=r.state.formMachine,t=e.key,a=e.nom,o=e.zone,n=e.pays,s=e.rue,l=e.ville,i=e.quartier,c=e.latitude,u=e.longitude,d=r.state.selectedModele.key;console.log(d);var f={pays:n,rue:s,ville:l,quartier:i},p={latitude:c,longitude:u};console.log(r.state.formMachine),h.a.put("".concat(m.d).concat(t),{nom:a,zone:o,localite:f,id_modele:d,coordonnees:p}).then((function(e){r.setState({formMachine:{nom:"",zone:"",pays:"",ville:"",quartier:"",rue:"",libelle:"",latitude:"",longitude:"",key:""},selectedModele:{}}),console.log("Une GreenBox modifi\xe9e!"),j()("Super!","Les modifications de la GreenBox ont bien \xe9t\xe9 prise en compte","success").then((function(e){r.props.history.push("/list_machine/")}))})).catch((function(e){console.error("Error editing document: ",e),j()("Desol\xe9e!","Les informations de cette GreenBox n'ont pas pu \xeatre modifi\xe9e, veuillez v\xe9rifier vos param\xe8tres de connexion","success")}))},r.validateOnChange=function(e){var t,a=e.target,o=a.form,l="checkbox"===a.type?a.checked:a.value,i=p.a.validate(a);if(r.setState(Object(n.a)({},o.name,Object(s.a)(Object(s.a)({},r.state[o.name]),{},(t={},Object(n.a)(t,a.name,l),Object(n.a)(t,"errors",Object(s.a)(Object(s.a)({},r.state[o.name].errors),{},Object(n.a)({},a.name,i))),t)))),"libelle"==a.name){var c=r.state.modeles.find((function(e){return e.libelle==l}));console.log(c),r.setState({selectedModele:c})}},r.hasError=function(e,t,a){return r.state[e]&&r.state[e].errors&&r.state[e].errors[t]&&r.state[e].errors[t][a]},r.handleSubmit=function(e){var t=e.target,a=Object(o.a)(t.elements).filter((function(e){return["INPUT","SELECT"].includes(e.nodeName)})),l=p.a.bulkValidate(a),i=l.errors,c=l.hasError;r.setState(Object(n.a)({},t.name,Object(s.a)(Object(s.a)({},r.state[t.name]),{},{errors:i}))),console.log(c?"Form has errors. Check!":"Form Submitted!"),e.preventDefault(),r.editMachine(),r.setState({isFinish:!0})},r.formRef=function(e){return r.formMachineRef=e},r.unsubscribe=null,r.state={formMachine:{nom:"",zone:"",level:"",status:"",pays:"",ville:"",quartier:"",rue:"",libelle:"",latitude:"",longitude:"",key:""},createdAt:"",modeles:[],isLoading:!0,isUpdated:!1,isFinish:!1,selectedModele:{},activeStep:"1",progressValue:[100,0,0],path:[{label:"Home",value:"/dashboard_machine"},{label:"Machine",value:"/list_machine"},{label:"Editer",value:""}],swalSuccess:{title:"Good Job",text:"Les modifications apport\xe9es \xe0 la machine ont \xe9t\xe9 prise en compte !",icon:"success"},swalError:{title:"D\xe9sol\xe9...",text:"Les modifications n'ont pas \xe9t\xe9 effectu\xe9es",icon:"danger"}},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;console.log(e),this.getModele(),this.getMachine(e)}},{key:"render",value:function(){return console.log(this.state.formMachine),Object(O.jsxs)(f.a,{children:[Object(O.jsx)(g.a,{path:this.state.path}),Object(O.jsx)(b.a,{machine:this.state,formRef:this.formRef,toggleStep:this.toggleStep,validateOnChange:this.validateOnChange,hasError:this.hasError,handleSubmit:this.handleSubmit,swalCallback:this.swalCallback})]})}}]),a}(u.Component);t.default=S}}]);
//# sourceMappingURL=49.35f791b6.chunk.js.map