_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{O3sk:function(e,t,n){"use strict";n.r(t);var s=n("nKUr"),a=n("vJKn"),r=n.n(a),c=n("rg98"),i=n("Ie8z"),o=n("Ji2X"),l=n("ofer"),j=n("tRbT"),m=n("iae6"),d=n("R/WZ"),u=n("q1tI"),h=n("J3NM"),b=n.n(h),x=n("5Yp1"),p=(n("vTTe"),n("FKgC"),Object(d.a)({subtitleStyle:{fontSize:"1.5rem",color:"white",textAlign:"center"},eventBodyStyle:{fontSize:"1.5rem",color:"white",textAlign:"left",marginTop:"1em",marginBottom:"1em"},spinnerTextStyle:{textAlign:"center",color:"#7cb342"}})),O=function(e){var t=e.img;return Object(s.jsx)(i.a,{className:"sliderImage",image:t})};t.default=function(){var e=p(),t=Object(u.useState)({events:[]}),n=t[0],a=t[1],i=Object(u.useState)(!1),d=i[0],h=i[1];return Object(u.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data/events/internship.json");case 2:return t=e.sent,e.next=5,t.status;case 5:if(e.t0=e.sent,200===e.t0){e.next=10;break}alert("API Error. Try again later"),e.next=14;break;case 10:return e.next=12,t.json();case 12:n=e.sent,a({events:n});case 14:h(!0);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.jsxs)(x.a,{title:"PIL | Summer Internship",active:"Summer",children:[Object(s.jsx)("div",{className:"hashCodeHeadSection",children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(l.a,{className:"pageHeader",children:"Summer Internship"}),Object(s.jsx)(l.a,{className:e.subtitleStyle,children:"Work on an exciting project over your summer vacations!"}),Object(s.jsx)(l.a,{className:e.subtitleStyle,style:{marginTop:40},children:"1st year and 2nd year students work on exciting projects over their summer vacations."})]})}),Object(s.jsx)("div",{className:"hashCodeContainer",children:d?n.events.map((function(e){return Object(s.jsx)("div",{className:"hashCodeSection",children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(l.a,{className:"hashCodeTitle",children:e.event_name}),Object(s.jsx)(l.a,{className:"hashCodeDate",children:e.event_date+" "+e.year}),Object(s.jsx)(l.a,{className:"hashCodeSponsors",children:e.sponsor_text}),Object(s.jsx)(l.a,{className:"hashCodeDescription",children:e.description}),Object(s.jsxs)(j.a,{container:!0,spacing:3,style:{marginTop:20},justify:"center",children:[Object(s.jsx)(j.a,{item:!0,xs:12,sm:4,children:Object(s.jsx)("img",{style:{width:"95%"},src:"".concat(e.poster_link)})}),Object(s.jsx)(j.a,{item:!0,xs:12,sm:8,children:Object(s.jsx)(b.a,{autoPlay:!0,autoPlayInterval:"3000",buttonsDisabled:!0,children:e.image_links.map((function(e){return Object(s.jsx)(O,{img:"".concat(e)},e)}))})})]})]})},e.event_name)})):Object(s.jsxs)("div",{className:e.spinnerTextStyle,children:[Object(s.jsx)(l.a,{style:{fontSize:"1.5rem"},children:"Loading Data"})," ",Object(s.jsx)(m.a,{style:{color:"#7cb342",marginTop:"1em"}})]})})]})}},UH9t:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/summer",function(){return n("O3sk")}])}},[["UH9t",0,2,1,3,5,6,7,4]]]);