(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{f9acdd9a220c831bfd2d:function(e,t,n){"use strict";n.r(t);var a,o=n("8af190b70a6bc55c6f1b"),r=n.n(o),c=(n("8a2d1b95e05b6a321e74"),n("a28fc3c963a1d4d1a2e5")),i=n("ab4cb61bcb2dc161defb"),d=n("d7dd51e1bf6bfc2c9c3d"),s=n("3aced5b508e7389026da"),u=n("4a683f0a5e64e66a8eb9"),l=n.n(u),p=n("b02fe3f80d4238b52f20"),h=n.n(p),f=n("2aea235afd5c55b8b19b"),m=n.n(f),v=n("e799c547a20a503b338f"),b=n.n(v),y=n("435859b6b76fb67a754a"),g=n.n(y),R=n("c7fd554010f79f6c0ef8"),_=n.n(R),A=n("0d329ab684f26e01f269"),S=n.n(A),C=n("e96e82762cfd5fe3a589"),O=n.n(C),k=n("26682d5d4df1c4fdd619"),w=n.n(k),j=n("adc20f99e57c573c589c"),P=n("d95b0cf107403b178365"),x=n("b4092abb20ebe507ce4c"),T=n("a3c3d69eeb745512366a"),M=n("3a16cc0322e2a723929e"),N=n("d6c5c89ff4a0f771f9c3"),V=n("e95a63b25fb92ed15721"),E=n("16c7abd7abc407b9f247"),D=n.n(E),F=n("c09d19c0d058d138126d"),G=n.n(F),W=n("ae9596d86622312bdbac"),z=n.n(W),B=n("63bac7d5ea40ecc9ba06"),q=n.n(B),I=n("e9cb1a74b44c7bf473df"),$=n.n(I),H=n("0d939196e59ed73c94e6");function J(e,t,n,o){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,c=arguments.length-3;if(t||0===c||(t={children:void 0}),t&&r)for(var i in r)void 0===t[i]&&(t[i]=r[i]);else t||(t=r||{});if(1===c)t.children=o;else if(c>1){for(var d=new Array(c),s=0;s<c;s++)d[s]=arguments[s+3];t.children=d}return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var L,U=["GET","POST","PUT","PATCH","DELETE"],K=J($.a,{fontSize:"small"}),Q=J($.a,{fontSize:"small"}),X=l()({cardCategoryWhite:{color:"rgba(255,255,255,.62)",margin:"0",fontSize:"14px",marginTop:"0",marginBottom:"0"},cardTitleWhite:{color:"#FFFFFF",marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none"},box:{padding:20,border:"1px solid #ccc",marginBottom:20,borderRadius:6}}),Y=Object(i.compose)(V.withRouter,X)(function(e){var t=e.each,n=e.classes,a=e.pathIndex,o=e.handleAccessTypeChange,r=e.handleAdminRoutesChange,c=e.handleRemoveAdminRoute,i=e.handleAddAdminRoute,d=e.handleServerRoutesMethodChange,s=e.handleServerRoutesRouteChange,u=e.handleRemoveServerRoute,l=e.handleAddServerRoute,p=e.handleRemovePath;return J("section",{className:n.box},void 0,J(H.Grid,{container:!0,spacing:24},void 0,J(H.Grid,{item:!0,xs:12,md:6},void 0,J(_.a,{fullWidth:!0,margin:"normal",className:"mt-0",label:"Access Type",id:"".concat(t._id,"-access-type-").concat(a),value:t.access_type,onChange:o(a)})),J(H.Grid,{className:"justify-end",item:!0,xs:12,md:6},void 0,J(m.a,{size:"sm",className:"","aria-label":"Delete",onClick:p(a)},void 0,"Delete Access Type"))),J(H.Grid,{container:!0,spacing:24},void 0,J(H.Grid,{item:!0,xs:12,md:5},void 0,(t.admin_routes||[]).map(function(e,n){return J("div",{},"".concat(t._id,"-").concat(a,"-each-admin-route-").concat(n),J(_.a,{fullWidth:!0,margin:"normal",label:"Client Route",id:"".concat(t._id,"-each-admin-route-access-type-").concat(n),value:e,onChange:r(a,n)}),J(b.a,{"aria-label":"Delete client route",onClick:c(a,n)},void 0,K))}),J(m.a,{size:"small","aria-label":"Add Client Route",onClick:i(a)},void 0,"Add Client Route")),J(H.Grid,{item:!0,xs:12,md:5},void 0,(t.server_routes||[]).map(function(e,n){return J("div",{},"".concat(t._id,"-").concat(a,"-").concat(e._id,"-each-server-route-").concat(n),J(D.a,{className:"selectbox methodInput"},void 0,J(G.a,{htmlFor:"".concat(t._id,"-").concat(e._id,"-each-server-route-").concat(n,"-method")},void 0,"Method"),J(z.a,{placeholder:"Method",value:e.method,onChange:d(a,n),inputProps:{name:"Method",id:"".concat(t._id,"-").concat(e._id,"-each-server-route-").concat(n,"-method")}},void 0,U.map(function(t){return J(q.a,{value:t},"".concat(t._id,"-").concat(a,"-").concat(e._id,"-each-server-route-method-").concat(t),t)}))),J(_.a,{label:"Server Route",id:"".concat(t._id,"-").concat(e._id,"-each-admin-server-route-route-access-type-").concat(n),inputProps:{value:e.route,onChange:s(a,n)}}),J(b.a,{"aria-label":"Delete Server Route",onClick:u(a,n)},void 0,Q))}),J(m.a,{size:"small","aria-label":"Add Server Route",onClick:l(a)},void 0,"Add Server Route"))))}),Z=n("d733903be61208652859"),ee=n("5932430beb0c05240602");function te(e){return(te="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t,n,a){L||(L="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});if(1===r)t.children=a;else if(r>1){for(var i=new Array(r),d=0;d<r;d++)i[d]=arguments[d+3];t.children=i}return{$$typeof:L,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){se(e,t,n[t])})}return e}function oe(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function re(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ue=ne(w.a,{}),le=ne(S.a,{}),pe=function(e){function t(){var e,n,a,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return a=this,o=(e=ce(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==te(o)&&"function"!==typeof o?ie(a):o,se(ie(n),"handleChange",function(e){return function(t){t.persist(),n.props.setOneValue({key:e,value:t.target.value})}}),se(ie(n),"handleChecked",function(e){return function(t){t.persist(),n.props.setOneValue({key:e,value:t.target.checked})}}),se(ie(n),"handleAddPath",function(e){e.persist(),n.props.setOneValue({key:"path",value:[].concat(oe(n.props.one.path),[{access_type:"",admin_routes:[],server_routes:[]}])})}),se(ie(n),"handleRemovePath",function(e){return function(t){t.persist(),n.props.setOneValue({key:"path",value:[].concat(oe(n.props.one.path.slice(0,e)),oe(n.props.one.path.slice(e+1)))})}}),se(ie(n),"handleAccessTypeChange",function(e){return function(t){t.persist();var a=oe(n.props.one.path);a[e].access_type=t.target.value,n.props.setOneValue({key:"path",value:a})}}),se(ie(n),"handleAdminRoutesChange",function(e,t){return function(a){a.persist();var o=oe(n.props.one.path);o[e].admin_routes[t]=a.target.value,n.props.setOneValue({key:"path",value:o})}}),se(ie(n),"handleRemoveAdminRoute",function(e,t){return function(a){a.persist();var o=oe(n.props.one.path);o[e].admin_routes=[].concat(oe(o[e].admin_routes.slice(0,t)),oe(o[e].admin_routes.slice(t+1))),n.props.setOneValue({key:"path",value:o})}}),se(ie(n),"handleAddAdminRoute",function(e){return function(t){t.persist();var a=oe(n.props.one.path);a[e].admin_routes=[].concat(oe(a[e].admin_routes),[""]),n.props.setOneValue({key:"path",value:a})}}),se(ie(n),"handleServerRoutesMethodChange",function(e,t){return function(a){a.persist();var o=oe(n.props.one.path);o[e].server_routes[t].method=a.target.value,n.props.setOneValue({key:"path",value:o})}}),se(ie(n),"handleServerRoutesRouteChange",function(e,t){return function(a){a.persist();var o=oe(n.props.one.path);o[e].server_routes[t].route=a.target.value,n.props.setOneValue({key:"path",value:o})}}),se(ie(n),"handleAddServerRoute",function(e){return function(t){t.persist();var a=n.props.one.path,o=oe(a);o[e]=ae({},a[e],{server_routes:[].concat(oe(a[e].server_routes),[{route:"",method:""}])}),n.props.setOneValue({key:"path",value:o})}}),se(ie(n),"handleRemoveServerRoute",function(e,t){return function(a){a.persist();var o=oe(n.props.one.path);o[e].server_routes=[].concat(oe(o[e].server_routes.slice(0,t)),oe(o[e].server_routes.slice(t+1))),n.props.setOneValue({key:"path",value:o})}}),se(ie(n),"handleSave",function(){n.props.addEditRequest()}),se(ie(n),"handleBack",function(){n.props.push("/admin/module-manage")}),n}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(t,r.a.PureComponent),n=t,(a=[{key:"componentDidMount",value:function(){this.props.match.params&&this.props.match.params.id&&this.props.loadOneRequest(this.props.match.params.id)}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.match.params.id,o=t.one;return ne(r.a.Fragment,{},void 0,ne(Z.a,{className:"text-sm"},void 0,ne(b.a,{className:"mr-4",onClick:this.handleBack,"aria-label":"Back"},void 0,ue)," ",a?"Edit":"Add"," Module"),ne(ee.a,{},void 0,ne(h.a,{className:n.paper},void 0,ne(g.a,{container:!0,spacing:24},void 0,ne(g.a,{item:!0,xs:12,sm:6},void 0,ne(_.a,{required:!0,id:"module_name",label:"Module Name",value:o.module_name,onChange:this.handleChange("module_name"),fullWidth:!0})),ne(g.a,{item:!0,xs:12},void 0,ne(_.a,{required:!0,id:"description",label:"Descrition",value:o.description,onChange:this.handleChange("description"),fullWidth:!0})),ne(g.a,{item:!0,xs:12},void 0,o.path.map(function(t,n){return ne(Y,{each:t,pathIndex:n,handleAccessTypeChange:e.handleAccessTypeChange,handleAdminRoutesChange:e.handleAdminRoutesChange,handleRemoveAdminRoute:e.handleRemoveAdminRoute,handleAddAdminRoute:e.handleAddAdminRoute,handleServerRoutesMethodChange:e.handleServerRoutesMethodChange,handleServerRoutesRouteChange:e.handleServerRoutesRouteChange,handleRemoveServerRoute:e.handleRemoveServerRoute,handleAddServerRoute:e.handleAddServerRoute,handleRemovePath:e.handleRemovePath},"".concat(t._id,"-").concat(n))}))),ne(m.a,{onClick:this.handleAddPath},void 0,"Add Access Type"),ne("div",{className:n.buttons},void 0,ne(O.a,{color:"primary","aria-label":"Save",className:n.fab,onClick:this.handleSave},void 0,le),ne(m.a,{variant:"contained",color:"primary",onClick:this.handleSave,className:n.button},void 0,"Save")))))}}])&&re(n.prototype,a),o&&re(n,o),t}(),he=Object(P.a)({key:"adminModuleManage",reducer:x.a}),fe=Object(j.a)({key:"adminModuleManage",saga:T.a}),me=Object(c.b)({one:Object(M.c)()}),ve=Object(d.connect)(me,ae({},N,{push:s.push})),be=l()(function(e){return{fab:{position:"absolute",bottom:3*e.spacing.unit,right:4*e.spacing.unit}}});t.default=Object(i.compose)(he,fe,ve,be)(pe)}}]);