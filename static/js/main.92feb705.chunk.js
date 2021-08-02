(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(9),s=n.n(i),o=(n(16),n(2)),r=(n(17),n(0)),l=function(e){var t=e.screenView,n=e.getStateValues,c=Object(a.useState)(""),i=Object(o.a)(c,2),s=i[0],l=i[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),j=d[0],b=d[1],O=Object(a.useState)(""),m=Object(o.a)(O,2),h=m[0],v=m[1],x=Object(a.useState)(""),p=Object(o.a)(x,2),f=p[0],g=p[1],w=function(e){switch(e.target.name){default:case"firstName":l(e.target.value);break;case"lastName":b(e.target.value);break;case"email":v(e.target.value);break;case"telephone":g(e.target.value)}};return Object(a.useEffect)((function(){n([{firstName:s,lastName:j,email:h,telephone:f}],"infoPersonal")}),[s,j,h,f]),0===t?Object(r.jsxs)("div",{className:"edit-section-container",children:[Object(r.jsx)("h3",{className:"edit-section-header",children:"Personal Information"}),Object(r.jsx)("input",{type:"text",name:"firstName",placeholder:"First name",value:s,onChange:w}),Object(r.jsx)("input",{type:"text",name:"lastName",placeholder:"Last name",value:j,onChange:w}),Object(r.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:h,onChange:w}),Object(r.jsx)("input",{type:"tel",name:"telephone",placeholder:"Telephone",value:f,onChange:w})]}):Object(r.jsxs)("div",{className:"preview-personal-container",children:[Object(r.jsxs)("h3",{className:"preview-section-header",children:[Object(r.jsx)("label",{children:s}),"\xa0",Object(r.jsx)("label",{children:j})]}),Object(r.jsxs)("div",{className:"contact-telephone",children:[Object(r.jsx)("label",{className:"contact",children:"Telephone: "}),Object(r.jsx)("label",{className:"contact-detail",children:f})]}),Object(r.jsxs)("div",{className:"contact-email",children:[Object(r.jsx)("label",{className:"contact",children:"Email: "}),Object(r.jsx)("label",{className:"contact-detail",children:h})]}),Object(r.jsx)("div",{className:"grey-line"})]})},u=n(3),d=n(23);var j=function(e){var t;return t=""===e.valueStartDate||""===e.valueEndDate?" ":"".concat(Object(d.a)(new Date(e.valueStartDate),"MMMM yyyy")," - ").concat(Object(d.a)(new Date(e.valueEndDate),"MMMM yyyy")),0===e.screenView?Object(r.jsxs)("div",{className:"edit-section-container",children:[Object(r.jsx)("input",{type:"text",name:"titleAwarded",placeholder:"Name of title",value:e.valueTitle,onChange:function(t){return e.showInput(e.elementId,t)}}),Object(r.jsx)("input",{type:"text",name:"nameOrganization",placeholder:"Name of organization",value:e.valueOrganization,onChange:function(t){return e.showInput(e.elementId,t)}}),Object(r.jsx)("input",{type:e.inputType,name:"startDate",placeholder:"Start date",onFocus:e.focus,onBlur:e.blur,onChange:function(t){return e.showInput(e.elementId,t)},value:e.valueStartDate}),Object(r.jsx)("input",{type:e.inputType,name:"endDate",placeholder:"End date",onFocus:e.focus,onBlur:e.blur,onChange:function(t){return e.showInput(e.elementId,t)},value:e.valueEndDate}),Object(r.jsx)("button",{className:"edit-buttons buttons",onClick:function(){return e.deleteEducation(e.elementId)},onChange:function(t){return e.showInput(e.elementId,t)},children:"Delete"})]},e.elementId):Object(r.jsxs)("div",{className:"preview-education-container",children:[Object(r.jsx)("div",{className:"title",children:e.valueTitle}),Object(r.jsx)("div",{className:"name-organization",children:e.valueOrganization}),Object(r.jsx)("div",{className:"start-end",children:Object(r.jsx)("label",{children:t})})]})},b=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),d=l[0],b=l[1],O=Object(a.useState)(""),m=Object(o.a)(O,2),h=m[0],v=m[1],x=Object(a.useState)(""),p=Object(o.a)(x,2),f=p[0],g=p[1],w=Object(a.useState)(0),y=Object(o.a)(w,2),D=y[0],S=y[1],N=Object(a.useState)([]),C=Object(o.a)(N,2),M=C[0],I=C[1],F=Object(a.useState)("text"),E=Object(o.a)(F,2),z=E[0],V=E[1],T=function(){V("date")},k=function(){V("text")},A=function(t){var n=M.filter((function(e){return t!==e.id}));e.getStateValues(n,"infoEducation"),I(n)},P=function(t,n){var a=Object(u.a)(M),c=a.findIndex((function(e){return t===e.id}));a[c][n.target.name]=n.target.value,e.getStateValues(a,"infoEducation"),I(a)},B=function(){i(""),b(""),v(""),g(""),S(D+1),I([].concat(Object(u.a)(M),[{titleAwarded:c,nameOrganization:d,startDate:h,endDate:f,id:D}]))},W=0===e.screenView?"edit-section":"preview-section",G=0===e.screenView?"edit-section-header":"preview-education-header",J=0===e.screenView?"edit-buttons buttons":"no-display";return Object(r.jsxs)("div",{className:W,children:[Object(r.jsx)("h3",{className:G,children:"Education and training"}),function(){0===M.length&&B();for(var t=[],n=0;n<M.length;n++)t.push(Object(r.jsx)(j,{valueTitle:M[n].titleAwarded,valueOrganization:M[n].nameOrganization,valueStartDate:M[n].startDate,valueEndDate:M[n].endDate,elementId:M[n].id,deleteEducation:A,screenView:e.screenView,showInput:P,blur:k,focus:T,inputType:z},M[n].id));return Object(r.jsx)("div",{className:"education-section",children:t})}(),Object(r.jsx)("button",{className:J,onClick:B,children:"Add education "})]})};var O=function(e){var t;return t=""===e.valueStartDate||""===e.valueEndDate?" ":"".concat(Object(d.a)(new Date(e.valueStartDate),"MMMM yyyy")," - ").concat(Object(d.a)(new Date(e.valueEndDate),"MMMM yyyy")),0===e.screenView?Object(r.jsxs)("div",{className:"edit-section-container",children:[Object(r.jsx)("input",{type:"text",name:"titleOcupation",placeholder:"Name of title",value:e.valueTitle,onChange:function(t){return e.showInput(e.elementId,t)}}),Object(r.jsx)("input",{type:"text",name:"nameOrganization",placeholder:"Name of organization",value:e.valueOrganization,onChange:function(t){return e.showInput(e.elementId,t)}}),Object(r.jsx)("input",{type:e.inputType,name:"startDate",placeholder:"Start date",onFocus:e.focus,onBlur:e.blur,onChange:function(t){return e.showInput(e.elementId,t)},value:e.valueStartDate}),Object(r.jsx)("input",{type:e.inputType,name:"endDate",placeholder:"End date",onFocus:e.focus,onBlur:e.blur,onChange:function(t){return e.showInput(e.elementId,t)},value:e.valueEndDate}),Object(r.jsx)("textarea",{name:"mainActivities",placeholder:"Main activities",value:e.mainActivities,onChange:function(t){return e.showInput(e.elementId,t)}}),Object(r.jsx)("button",{className:"edit-buttons buttons",onClick:function(){return e.deleteExperience(e.elementId)},children:"Delete"})]},e.elementId):Object(r.jsxs)("div",{className:"preview-work-container",children:[Object(r.jsx)("div",{className:"title",children:e.valueTitle}),Object(r.jsx)("div",{className:"name-organization",children:e.valueOrganization}),Object(r.jsx)("div",{className:"start-end",children:Object(r.jsx)("label",{children:t})}),e.mainActivities?Object(r.jsx)("ul",{className:"main-responsabilities",children:e.mainActivities.split("\n").map((function(e,t){return Object(r.jsx)("li",{children:e},t)}))}):null]})},m=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),d=l[0],j=l[1],b=Object(a.useState)(""),m=Object(o.a)(b,2),h=m[0],v=m[1],x=Object(a.useState)(""),p=Object(o.a)(x,2),f=p[0],g=p[1],w=Object(a.useState)(""),y=Object(o.a)(w,2),D=y[0],S=y[1],N=Object(a.useState)(0),C=Object(o.a)(N,2),M=C[0],I=C[1],F=Object(a.useState)([]),E=Object(o.a)(F,2),z=E[0],V=E[1],T=Object(a.useState)("text"),k=Object(o.a)(T,2),A=k[0],P=k[1],B=function(){P("date")},W=function(){P("text")},G=function(t){var n=z.filter((function(e){return t!==e.id}));e.getStateValues(n,"infoExperience"),V(n)},J=function(t,n){var a=Object(u.a)(z),c=a.findIndex((function(e){return t===e.id}));a[c][n.target.name]=n.target.value,e.getStateValues(a,"infoExperience"),V(a)},L=function(){i(""),j(""),v(""),g(""),S(""),I(M+1),V([].concat(Object(u.a)(z),[{titleOcupation:c,nameOrganization:d,startDate:h,endDate:f,mainActivities:D,id:M}]))},q=0===e.screenView?"edit-section":"preview-section",H=0===e.screenView?"edit-section-header":"preview-work-header",K=0===e.screenView?"edit-buttons buttons":"no-display";return Object(r.jsxs)("div",{className:q,children:[Object(r.jsx)("h3",{className:H,children:"Work experience"}),function(){0===z.length&&L();for(var t=[],n=0;n<z.length;n++)t.push(Object(r.jsx)(O,{valueTitle:z[n].titleOcupation,valueOrganization:z[n].nameOrganization,valueStartDate:z[n].startDate,valueEndDate:z[n].endDate,mainActivities:z[n].mainActivities,elementId:z[n].id,deleteExperience:G,screenView:e.screenView,showInput:J,blur:W,focus:B,inputType:A},z[n].id));return Object(r.jsx)("div",{className:"experience-section",children:t})}(),Object(r.jsx)("button",{className:K,onClick:L,children:"Add experience "})]})},h=n(10),v="#3D85C6",x="#444444",p="#666666",f="#999999",g="Courier",w=function(){var e=new h.a,t=20,n=20,a=function(t){(n+=t)>=280&&(e.addPage(),n=20)};return{addPersInfo:function(c){e.setFont(g,"bold"),e.setFontSize(18),e.setTextColor(v),e.setFont(g,"bold"),e.text(t,n,"".concat(c[0].firstName," ").concat(c[0].lastName)),a(5),e.setTextColor(p),e.setFontSize(10),e.text(t,n,"Telephone:"),e.setFont(g,"normal"),e.setTextColor(f),e.text(42,n,"".concat(c[0].telephone)),a(5),e.setFont(g,"bold"),e.setTextColor(p),e.text(t,n,"Email:"),e.setFont(g,"normal"),e.setTextColor(f),e.text(34,n,"".concat(c[0].email)),a(2),e.setDrawColor(f),e.line(t,n,200,n,"FD"),a(10),a(5)},addEducation:function(c){e.setFont(g,"bold"),e.setTextColor(v),e.setFontSize(14),e.text(t,n,"Education and training"),a(10),e.setTextColor(x),e.setFontSize(12),e.setFont(g,"normal");for(var i=0;i<c.length;i++)e.setFont(g,"bold"),e.setFontSize(12),e.text(t,n,"".concat(c[i].titleAwarded)),e.setFont(g,"normal"),a(5),e.setFontSize(11),e.text(t,n,"".concat(c[i].nameOrganization)),a(5),""!==c[i].startDate&&""!==c[i].endDate&&(e.text(t,n,"".concat(Object(d.a)(new Date(c[i].startDate),"MMMM yyyy")," - ").concat(Object(d.a)(new Date(c[i].endDate),"MMMM yyyy"))),a(10));a(5)},addWorkExperience:function(c){e.setFont(g,"bold"),e.setTextColor(v),e.setFontSize(14),e.text(t,n,"Work experience"),a(10),e.setTextColor(x),e.setFontSize(12),e.setFont(g,"normal");for(var i=0;i<c.length;i++){e.setFont(g,"bold"),e.setFontSize(12),e.text(t,n,"".concat(c[i].titleOcupation,",")),a(5),e.text(t,n,"".concat(c[i].nameOrganization)),a(5),""!==c[i].startDate&&""!==c[i].endDate&&(e.text(t,n,"".concat(Object(d.a)(new Date(c[i].startDate),"MMMM yyyy")," - ").concat(Object(d.a)(new Date(c[i].endDate),"MMMM yyyy"))),e.setFont(g,"normal"),e.setFontSize(11),a(5));var s=c[i].mainActivities.split("\n");if(s)for(var o=0;o<s.length;o++){var r=Math.floor(s[o].length/74);e.text("- ".concat(s[o]),30,n,{maxWidth:170}),a(r>0?5*(r+1):5)}a(10)}},savePDF:function(t){e.save(t)}}},y=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)("Preview"),s=Object(o.a)(i,2),u=s[0],d=s[1],j=Object(a.useState)([]),O=Object(o.a)(j,2),h=O[0],v=O[1],x=Object(a.useState)([]),p=Object(o.a)(x,2),f=p[0],g=p[1],y=Object(a.useState)([]),D=Object(o.a)(y,2),S=D[0],N=D[1],C=function(e,t){switch(t){default:case"infoExperience":N(e);break;case"infoEducation":g(e);break;case"infoPersonal":v(e)}};return Object(r.jsxs)("div",{children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Create your CV"})}),Object(r.jsxs)("main",{children:[Object(r.jsx)(l,{screenView:n,getStateValues:C}),Object(r.jsx)(b,{screenView:n,getStateValues:C}),Object(r.jsx)(m,{screenView:n,getStateValues:C}),Object(r.jsxs)("div",{className:"bottom-buttons",children:[Object(r.jsx)("button",{className:"preview-button buttons",onClick:function(){0===n?(c(1),d("Go back to editing")):(c(0),d("Preview"))},children:u}),Object(r.jsx)("button",{className:"generatePDF-button buttons",onClick:function(){var e=w();e.addPersInfo(h),e.addEducation(f),e.addWorkExperience(S),e.savePDF("".concat(h[0].firstName," ").concat(h[0].lastName," CV.pdf"))},children:"Generate PDF"})]})]}),Object(r.jsx)("footer",{})]})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[19,1,3]]]);
//# sourceMappingURL=main.92feb705.chunk.js.map