(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{121:function(e,t,c){},122:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},132:function(e,t,c){},234:function(e,t,c){},235:function(e,t,c){},236:function(e,t,c){},254:function(e,t,c){},255:function(e,t,c){},256:function(e,t,c){},264:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c.n(s),n=c(39),a=c.n(n),r=(c(121),c(6)),l=c(7),o=(c(122),c(1)),j=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Error 404"}),Object(o.jsx)("h2",{children:"Page not found \ud83d\ude16"})]})},d=(c(124),function(){return Object(o.jsx)("div",{className:"loader"})}),b=c(41),h=c(4),u=c(5),O=c(9),m=c(10),x=(c(125),c.p+"static/media/Yeva_Terteryan_CV.0b034da6.pdf"),p=function(){var e=["Developer","Programmer","Coder","Problem Solver","Creator"],t=Object(s.useState)(0),c=Object(r.a)(t,2),i=c[0],n=c[1],a=Object(s.useState)(0),l=Object(r.a)(a,2),j=l[0],d=l[1],b=Object(s.useState)(!1),h=Object(r.a)(b,2),u=h[0],O=h[1];return Object(s.useEffect)((function(){if(j!==e[i].length+1||u){if(0===j&&u)return O(!1),void(i===e.length-1?n(0):n((function(e){return e+1})));var t=setTimeout((function(){d((function(e){return e+(u?-1:1)}))}),u?70:j===e[i].length?1e3:150);return function(){return clearTimeout(t)}}O(!0)}),[j,i,u]),Object(o.jsxs)("div",{className:"cvWrapper",id:"home",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:[Object(o.jsx)("span",{children:"y"}),"Eva Terteryan"]}),Object(o.jsxs)("p",{children:["The  ",e[i].substring(0,j),Object(o.jsx)("span",{children:"|"})]})]}),Object(o.jsx)("button",{children:Object(o.jsx)("a",{href:x,target:"_blank",children:"Download my CV"})})]})},v=(c(126),c(127),c(108)),f=c.n(v),g=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(p,{}),Object(o.jsxs)("div",{id:"about",children:[Object(o.jsx)("div",{className:"cover"}),Object(o.jsx)(f.a,{right:!0,children:Object(o.jsxs)("div",{className:"about",children:[Object(o.jsx)("h2",{children:"Who am I"}),Object(o.jsx)("p",{children:"Hi, I am a future Web developer. I have worked in the banking sector for several years, but I have been also interested in the programming for a long time. Now I'm on childcare leave. During this period, I have taken the opportunity to learn and acquire a new profession. I'm always in for learning new stuff, seeking to improve and grow as a professional and as a person. I enjoy solving complex problems. As an energetic and imaginative young web developer I am able to work alongside another talented IT professionals for creating websites. Right now I am in the seek of an internship position or an entry level position with an exciting company."})]})}),Object(o.jsx)("div",{className:"bgImage"})]})]})},y=c(116),N=(c(132),c(13)),w=c(18),k=c(60),S=(c(135),c(45)),C={required:"Required field"},T=S.a().shape({name:S.b().required(C.required),message:S.b().required(C.required),email:S.b().email(C.emailFormat).required(C.required)}),E=function(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)({name:"",email:"",message:""}),a=Object(r.a)(n,2),l=a[0],j=(a[1],Object(s.useRef)(null)),d=Object(s.useRef)(null),b=Object(s.useRef)(null),h=function(){i(!c)};return Object(o.jsx)(y.a,{initialValues:{name:"",email:"",message:""},validationSchema:T,onSubmit:function(e){!function(e){fetch("https://portfolio-yevaeva.herokuapp.com/form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){if(e.error)throw e.error;return k.b.dark("Your message was sent",{position:"bottom-left"}),e})).catch((function(e){console.log(e.message),k.b.dark(e.message+". Please try again later",{position:"bottom-left"})}))}(e)},children:function(e){var t=e.values,s=e.handleChange,i=e.handleSubmit,n=e.errors;return Object(o.jsxs)("div",{id:"contact",children:[Object(o.jsxs)("div",{className:"mapContact",children:[Object(o.jsx)("button",{onClick:h,children:"CLICK ME"}),Object(o.jsx)("div",{className:"map",children:!c&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"heart"}),Object(o.jsx)("p",{children:"I'll be waiting for your call."})]})}),c&&Object(o.jsx)("div",{className:"contactModal",children:Object(o.jsxs)("div",{className:"flexwrap",children:[Object(o.jsx)("h2",{children:"Contact me"}),Object(o.jsxs)("div",{className:"addressWraper",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(N.a,{icon:w.d,size:"2x",color:"white"}),Object(o.jsx)("h5",{children:"ADDRESS"}),Object(o.jsx)("p",{children:"Armenia, Echmiadzin"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(N.a,{icon:w.e,size:"2x",color:"white"}),Object(o.jsx)("h5",{children:"TELEPHONE"}),Object(o.jsx)("p",{children:"+374 95208442"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(N.a,{icon:w.a,size:"2x",color:"white"}),Object(o.jsx)("h5",{children:"EMAIL"}),Object(o.jsx)("a",{href:"mailto:yeva.terteryan@gmail.com",children:"yeva.terteryan@gmail.com"})]})]}),Object(o.jsxs)("div",{className:"form",children:[Object(o.jsxs)("div",{className:"side",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"nameWrapper",children:[Object(o.jsx)("input",{ref:j,value:t.name,onChange:s,type:"text",name:"name"}),Object(o.jsx)("label",{onClick:function(){return j.current.focus()},className:"".concat(l.name?"label fill":"label"),children:"Name *"})]}),Object(o.jsx)("div",{className:"required",children:n.name})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"emailWrapper",children:[Object(o.jsx)("input",{ref:d,value:t.email,onChange:s,type:"email",name:"email"}),Object(o.jsx)("label",{onClick:function(){return d.current.focus()},className:"".concat(l.email?"label fill":"label"),children:"Email *"})]}),Object(o.jsx)("div",{className:"required",children:n.email})]})]}),Object(o.jsxs)("div",{className:"messageWrapper",children:[Object(o.jsx)("input",{ref:b,value:t.message,onChange:s,type:"text",name:"message"}),Object(o.jsx)("label",{onClick:function(){return b.current.focus()},className:"".concat(l.message?"label fill":"label"),children:"Massage *"}),Object(o.jsx)("div",{className:"required",children:n.message})]}),Object(o.jsx)("button",{type:"submit",onClick:i,children:"Send"})]})]})})]}),Object(o.jsx)(k.a,{position:"bottom-left",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}})},I=(c(234),c(78)),R=c.n(I),P=c(58),M=function(){var e=Object(P.useMediaQuery)({query:"(max-width:600px)"});return Object(o.jsxs)("div",{id:"education",className:"edu",children:[Object(o.jsx)("h2",{children:"Education & Experience"}),Object(o.jsx)("div",{className:"timeline",children:[{year:"01.07.2021-Present",where:"Preezma",about:"Full Stack Developer"},{year:"01.12.2020-01.03.2021",where:'"Bitschool" IT and business school',about:"React.JS"},{year:"01.11.2020-01.02.2021",where:'"Sunny School" Training Center',about:"Node js"},{year:"01.07.2020-01.09.2020",where:"RUSSIAN-ARMENIAN UNIVERSITY",about:"Fundamentals of Programming, basics of programming"},{year:"01.05.2020-01.09.2020",where:"UNDP IMPACTAIM ACCELERATOR #5",about:"Basics of programming, HTML/CSS, Javascript"},{year:"2009-2013",where:"Armenian State University of Economics ",about:"Regulation of Economy & International Economic Relation"}].map((function(t,c){return c%2===0||e?Object(o.jsx)("div",{className:"container contLeft",children:Object(o.jsx)(R.a,{right:!0,children:Object(o.jsx)("div",{className:"left",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h2",{children:t.year}),Object(o.jsx)("h4",{children:t.where.toUpperCase()}),Object(o.jsx)("p",{children:t.about})]})})})},c):Object(o.jsx)("div",{className:"container contRight",children:Object(o.jsx)(R.a,{left:!0,children:Object(o.jsx)("div",{className:"right",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h2",{children:t.year}),Object(o.jsx)("h4",{children:t.where.toUpperCase()}),Object(o.jsx)("p",{children:t.about})]})})})},c)}))})]})},L=(c(235),c(33)),q=function(){var e=(new Date).getFullYear();return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"\xa9 "}),e]}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)("a",{href:"https://github.com/Yevaeva?tab=repositories",target:"_blank",children:Object(o.jsx)(N.a,{icon:L.c,size:"lg"})}),Object(o.jsx)("a",{href:"https://codepen.io/yevaeva/pens/public",target:"_blank",children:Object(o.jsx)(N.a,{icon:L.a,size:"lg"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/yeva-terteryan-05a47176/",target:"_blank",children:Object(o.jsx)(N.a,{icon:L.d,size:"lg"})}),Object(o.jsx)("a",{href:"https://www.facebook.com/yeva.terteryan/",target:"_blank",children:Object(o.jsx)(N.a,{icon:L.b,size:"lg"})})]})]})},F=(c(236),c(114)),z=c(59),Y=function(e){var t=Object(s.useState)(!1),c=Object(r.a)(t,2),i=c[0],n=c[1],a=Object(s.useState)(!1),l=Object(r.a)(a,2),j=l[0],d=l[1];Object(s.useEffect)((function(){document.addEventListener("scroll",(function(){window.scrollY>50?n(!0):n(!1)}))}));var h=Object(P.useMediaQuery)({query:"(max-width: 1024px)"}),u=[{label:"Home",value:"/#home"},{label:"About",value:"/#about"},{label:"Education",value:"/#education"},{label:"Skills & Knowledge",value:"/#skills"},{label:"Projects",value:"/#projects"},{label:"Contact",value:"/#contact"}],O=function(e){var t=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t+-80,behavior:"smooth"})},m=function(){d(!1)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{style:e.disabled?{pointerEvents:"none",filter:"blur(0.7px)"}:{},className:i&&!h?"nav navShadow":"nav",children:[Object(o.jsx)(z.a,{smooth:!0,to:"/#home",children:Object(o.jsx)("span",{className:"logo",children:"y"})}),h?Object(o.jsx)(F.elastic,Object(b.a)(Object(b.a)({},e),{},{right:!0,isOpen:j,onStateChange:function(e){return function(e){d(e.isOpen)}(e)},children:u.map((function(e,t){return Object(o.jsx)(z.a,{onClick:m,scroll:function(e){return O(e)},className:"menu-item",smooth:!0,to:e.value,children:e.label},t)}))})):Object(o.jsx)("div",{className:"desktopNav",children:u.map((function(e,t){return Object(o.jsx)(z.a,{scroll:function(e){return O(e)},className:"menu-item",smooth:!0,to:e.value,children:e.label},t)}))})]})})},A=(c(254),c.p+"static/media/img1.f65e7b9b.jpg"),D=c.p+"static/media/tictac.adf9934a.jpg",W=c.p+"static/media/todo.1146c340.jpg",B=(c.p,c(255),c(81)),_=function(e){var t=Object(s.useState)({}),c=Object(r.a)(t,2),i=c[0],n=c[1],a=Object(s.useRef)(null),l=Object(B.b)({opacity:1,from:{opacity:0}}),j=[{id:1,title:"To Do List",about:"This is a task managment tool in React, with the abilities of searching, sorting and filtering options. You can sort tasks or filter tasks by status(done, active) and date. There are options for deleting tasks one by one, as well as deleting several at a time.There is an opportunity to edit the task, which is organized through the modal window.You can change the task done or active. If you enter non-existent pages on the site, you will be redirected to 404 page, which contain a message that the desired page does not exist.",skills:"React.js, Redux, React Bootstrap, RESTful APIs",github:"https://github.com/Yevaeva/ToDoList",link:"https://todolistfortasks.netlify.app/"},{id:2,title:"Messanger",about:"This is a class chat. You can register and log in, then  select or create a class and join a group chat \u2024You can see who are in the selected room online. It shows you when someone is typing. I write the front-end of a website and the back-end is a team work.",skills:"React.js, Node.js, Express, Mongo db, Socket.io",github:"https://github.com/Yevaeva/Messanger",link:"https://yevaeva.github.io/Messanger/"},{id:3,title:"Tic Tac Toe",about:'Tic-tac-toe is a game in which two players take turns in drawing either an "O" or an "X" in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row.',skills:"JavaScript, HTML, CSS",github:"https://codepen.io/yevaeva/pen/poRvqxr",link:"https://codepen.io/yevaeva/full/poRvqxr"},{id:4,title:"Portfolio",about:"This is a project",skills:"React",github:"https://github.com/Yevaeva/Portfolio",link:"https://yevaeva.github.io/Portfolio/"}];return Object(s.useEffect)((function(){var t=j.filter((function(t){return t.id==e.id}));n(t[0])}),[]),Object(o.jsx)(B.a.div,{style:l,className:"modal",onClick:function(t){return function(t){a.current.contains(t.target)||e.handleToggle()}(t)},children:Object(o.jsxs)("div",{ref:a,className:"modal-content",children:[Object(o.jsx)("span",{onClick:function(){return e.handleToggle()},className:"close",children:"\xd7"}),Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)("h2",{className:"title",children:i.title}),Object(o.jsx)("p",{className:"aboutProject",children:i.about}),Object(o.jsxs)("div",{className:"projectSkills",children:["Used stack: ",i.skills]}),Object(o.jsx)("div",{className:"githubContainer",children:Object(o.jsx)("a",{href:i.github,target:"_blank",children:Object(o.jsx)(N.a,{icon:L.c,size:"2x"})})}),Object(o.jsx)("button",{children:Object(o.jsx)("a",{href:i.link,target:"_blank",children:"Visit Website"})})]})]})})},H=function(e){var t=Object(s.useState)(!1),c=Object(r.a)(t,2),i=c[0],n=c[1],a=Object(s.useState)(""),l=Object(r.a)(a,2),j=l[0],d=l[1],b=function(t){n(!i),i?(document.body.style.overflow="unset",e.disableFunc(i)):(d(t.currentTarget.id),e.disableFunc(i),document.body.style.overflow="hidden")};return Object(o.jsxs)("div",{id:"projects",children:[Object(o.jsx)("h2",{children:"Projects"}),Object(o.jsxs)("div",{className:"projWrapper",children:[Object(o.jsxs)("div",{style:{position:"relative"},children:[Object(o.jsxs)("div",{className:"item big",children:[Object(o.jsxs)("div",{className:"imgWrap",id:"1",onClick:function(e){return b(e)},children:[Object(o.jsx)("img",{src:W}),Object(o.jsx)("div",{className:"overlay",children:Object(o.jsx)("div",{className:"text",children:Object(o.jsx)(N.a,{icon:w.g,size:"2x",color:"white"})})})]}),Object(o.jsx)("p",{children:"To Do List"})]}),Object(o.jsx)("div",{className:"also",children:Object(o.jsxs)("p",{children:["You can also see my mini projects \n and experiments in",Object(o.jsx)("a",{href:"https://codepen.io/yevaeva/pens/public",target:"_blanck",children:" Codepen"})]})})]}),Object(o.jsxs)("div",{className:"item",children:[Object(o.jsxs)("div",{className:"imgWrap",id:"2",onClick:function(e){return b(e)},children:[Object(o.jsx)("img",{src:A}),Object(o.jsx)("div",{className:"overlay",children:Object(o.jsx)("div",{className:"text",children:Object(o.jsx)(N.a,{icon:w.g,size:"2x",color:"white"})})})]}),Object(o.jsx)("p",{children:"Messanger"})]}),Object(o.jsxs)("div",{className:"item",children:[Object(o.jsxs)("div",{className:"imgWrap",id:"3",onClick:function(e){return b(e)},children:[Object(o.jsx)("img",{src:D}),Object(o.jsx)("div",{className:"overlay",children:Object(o.jsx)("div",{className:"text",children:Object(o.jsx)(N.a,{icon:w.g,size:"2x",color:"white"})})})]}),Object(o.jsx)("p",{children:"Tic Tac Toe"})]})]}),i&&Object(o.jsx)(_,{id:j,handleToggle:b})]})},J=(c(256),c(44)),U=function(e){var t=Object(s.useRef)(null),c=Object(s.useState)(!1),i=Object(r.a)(c,2),n=i[0],a=i[1];return Object(s.useEffect)((function(){window.addEventListener("wheel",(function(e){window.scrollY>t.current.offsetTop-200&&a(!0)}))}),[]),Object(o.jsxs)("div",{ref:t,className:"skills",id:"skills",children:[Object(o.jsx)("h2",{children:"Skills & Knowledge"}),Object(o.jsxs)("div",{className:"skillsWrapper",children:[Object(o.jsxs)("section",{children:[Object(o.jsxs)("div",{className:"circle-wrapper",children:[Object(o.jsx)("div",{className:"circle"}),Object(o.jsx)("div",{className:"icon",children:Object(o.jsx)(N.a,{icon:w.c,size:"3x",color:"white"})})]}),Object(o.jsx)("h3",{children:"Software skills"}),[{type:"HTML, CSS",level:85},{type:"JavaScript",level:65},{type:"TypeScript",level:40},{type:"SCSS, BootStrap",level:70},{type:"React.js, Redux",level:60},{type:"Node.js, Express",level:30},{type:"MongoDB",level:40},{type:"Git",level:45}].map((function(e,t){return Object(o.jsx)(J.Motion,{style:{x:Object(J.spring)(n?e.level:0)},children:function(t){var c=t.x;return Object(o.jsxs)("div",{className:"skillContainer",children:[Object(o.jsx)("div",{className:"skillText",children:Object(o.jsx)("p",{children:e.type})}),Object(o.jsx)("div",{className:"skillLoader",children:Object(o.jsx)("div",{className:"bar",style:{width:"".concat(c,"%")}})})]})}},t)}))]}),Object(o.jsxs)("section",{children:[Object(o.jsxs)("div",{className:"circle-wrapper",children:[Object(o.jsx)("div",{className:"circle"}),Object(o.jsx)("div",{className:"icon",children:Object(o.jsx)(N.a,{icon:w.b,size:"3x",color:"white"})})]}),Object(o.jsx)("h3",{children:"Languages"}),[{type:"Armenian",level:99},{type:"English",level:50},{type:"Russian",level:50}].map((function(e,t){return Object(o.jsx)(J.Motion,{style:{x:Object(J.spring)(n?e.level:0)},children:function(t){var c=t.x;return Object(o.jsxs)("div",{className:"skillContainer",children:[Object(o.jsx)("div",{className:"skillText",children:Object(o.jsx)("p",{children:e.type})}),Object(o.jsx)("div",{className:"skillLoader",children:Object(o.jsx)("div",{className:"bar",style:{width:"".concat(c,"%")}})})]})}},t)}))]}),Object(o.jsxs)("section",{children:[Object(o.jsxs)("div",{className:"circle-wrapper",children:[Object(o.jsx)("div",{className:"circle"}),Object(o.jsx)("div",{className:"icon",children:Object(o.jsx)(N.a,{icon:w.f,size:"3x",color:"white"})})]}),Object(o.jsx)("h3",{children:"Soft skills"}),["Communicative","Punctuality","Flexibility","Willingness to learn","Problem solving","Sense of humor","Sociable","Functions well under pressure"].map((function(e,t){return Object(o.jsx)("div",{className:"skillContainer",children:Object(o.jsx)("div",{className:"skillText",children:Object(o.jsx)("p",{children:e})})},t)}))]})]})]})};var V,K=(V=function(e){var t=Object(s.useState)(!1),c=Object(r.a)(t,2),i=c[0],n=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Y,{disabled:i}),Object(o.jsx)(g,{}),Object(o.jsx)(M,{}),Object(o.jsx)(U,{}),Object(o.jsx)(H,{disableFunc:function(e){n(!e)},props:e}),Object(o.jsx)(E,{}),Object(o.jsx)(q,{})]})},function(e){Object(O.a)(c,e);var t=Object(m.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=this.props.match.params.section;if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}}},{key:"render",value:function(){return Object(o.jsx)(V,Object(b.a)({},this.props))}}]),c}(i.a.Component));var Q=function(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){setTimeout((function(){return i(!1)}),1e3)}),[]),Object(o.jsx)(o.Fragment,{children:c?Object(o.jsx)(d,{}):Object(o.jsx)("div",{id:"app",children:Object(o.jsxs)(l.d,{children:[Object(o.jsx)(l.b,{path:"/",exact:!0,component:K}),Object(o.jsx)(l.b,{path:"/404",exact:!0,children:Object(o.jsx)(j,{})}),Object(o.jsx)(l.a,{to:"/404"})]})})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,266)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))},X=c(21);a.a.render(Object(o.jsx)(X.a,{basename:"/Portfolio",children:Object(o.jsx)(Q,{})}),document.getElementById("root")),G()}},[[264,1,2]]]);
//# sourceMappingURL=main.55a7475e.chunk.js.map