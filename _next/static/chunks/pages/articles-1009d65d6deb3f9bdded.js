_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{E8kk:function(e,t,a){"use strict";var i=a("TqRt"),o=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,i(a("8/g6")).default)(n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=r},Ji2X:function(e,t,a){"use strict";var i=a("wx14"),o=a("Ff2n"),n=a("rePB"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("NqtD"),d=r.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.component,d=void 0===c?"div":c,p=e.disableGutters,u=void 0!==p&&p,m=e.fixed,f=void 0!==m&&m,h=e.maxWidth,b=void 0===h?"lg":h,g=Object(o.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return r.createElement(d,Object(i.a)({className:Object(s.a)(a.root,n,f&&a.fixed,u&&a.disableGutters,!1!==b&&a["maxWidth".concat(Object(l.a)(String(b)))]),ref:t},g))}));t.a=Object(c.a)((function(e){return{root:Object(n.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var i=e.breakpoints.values[a];return 0!==i&&(t[e.breakpoints.up(a)]={maxWidth:i}),t}),{}),maxWidthXs:Object(n.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(n.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(n.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(n.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(n.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},hDBf:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return a("yRol")}])},iae6:function(e,t,a){"use strict";var i=a("wx14"),o=a("Ff2n"),n=a("q1tI"),r=(a("17x9"),a("iuhU")),s=a("H2TA"),c=a("NqtD"),l=44,d=n.forwardRef((function(e,t){var a=e.classes,s=e.className,d=e.color,p=void 0===d?"primary":d,u=e.disableShrink,m=void 0!==u&&u,f=e.size,h=void 0===f?40:f,b=e.style,g=e.thickness,v=void 0===g?3.6:g,x=e.value,y=void 0===x?0:x,j=e.variant,O=void 0===j?"indeterminate":j,w=Object(o.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),k={},E={},S={};if("determinate"===O||"static"===O){var T=2*Math.PI*((l-v)/2);k.strokeDasharray=T.toFixed(3),S["aria-valuenow"]=Math.round(y),k.strokeDashoffset="".concat(((100-y)/100*T).toFixed(3),"px"),E.transform="rotate(-90deg)"}return n.createElement("div",Object(i.a)({className:Object(r.a)(a.root,s,"inherit"!==p&&a["color".concat(Object(c.a)(p))],{determinate:a.determinate,indeterminate:a.indeterminate,static:a.static}[O]),style:Object(i.a)({width:h,height:h},E,b),ref:t,role:"progressbar"},S,w),n.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},n.createElement("circle",{className:Object(r.a)(a.circle,m&&a.circleDisableShrink,{determinate:a.circleDeterminate,indeterminate:a.circleIndeterminate,static:a.circleStatic}[O]),style:k,cx:l,cy:l,r:(l-v)/2,fill:"none",strokeWidth:v})))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},kfFl:function(e,t,a){"use strict";var i=a("wx14"),o=a("Ff2n"),n=a("rePB"),r=a("q1tI"),s=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("NqtD"),d=a("Xt1q"),p=a("+Isj"),u=a("kKU3"),m=a("wpWl"),f=a("kKAo"),h={enter:m.b.enteringScreen,exit:m.b.leavingScreen},b=r.forwardRef((function(e,t){var a=e.BackdropProps,n=e.children,c=e.classes,m=e.className,b=e.disableBackdropClick,g=void 0!==b&&b,v=e.disableEscapeKeyDown,x=void 0!==v&&v,y=e.fullScreen,j=void 0!==y&&y,O=e.fullWidth,w=void 0!==O&&O,k=e.maxWidth,E=void 0===k?"sm":k,S=e.onBackdropClick,T=e.onClose,D=e.onEnter,z=e.onEntered,M=e.onEntering,W=e.onEscapeKeyDown,N=e.onExit,P=e.onExited,C=e.onExiting,_=e.open,L=e.PaperComponent,I=void 0===L?f.a:L,B=e.PaperProps,F=void 0===B?{}:B,R=e.scroll,A=void 0===R?"paper":R,X=e.TransitionComponent,H=void 0===X?u.a:X,Y=e.transitionDuration,Z=void 0===Y?h:Y,K=e.TransitionProps,q=e["aria-describedby"],U=e["aria-labelledby"],G=Object(o.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),$=r.useRef();return r.createElement(d.a,Object(i.a)({className:Object(s.a)(c.root,m),BackdropComponent:p.a,BackdropProps:Object(i.a)({transitionDuration:Z},a),closeAfterTransition:!0},g?{disableBackdropClick:g}:{},{disableEscapeKeyDown:x,onEscapeKeyDown:W,onClose:T,open:_,ref:t},G),r.createElement(H,Object(i.a)({appear:!0,in:_,timeout:Z,onEnter:D,onEntering:M,onEntered:z,onExit:N,onExiting:C,onExited:P,role:"none presentation"},K),r.createElement("div",{className:Object(s.a)(c.container,c["scroll".concat(Object(l.a)(A))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===$.current&&($.current=null,S&&S(e),!g&&T&&T(e,"backdropClick"))},onMouseDown:function(e){$.current=e.target}},r.createElement(I,Object(i.a)({elevation:24,role:"dialog","aria-describedby":q,"aria-labelledby":U},F,{className:Object(s.a)(c.paper,c["paperScroll".concat(Object(l.a)(A))],c["paperWidth".concat(Object(l.a)(String(E)))],F.className,j&&c.paperFullScreen,w&&c.paperFullWidth)}),n))))}));t.a=Object(c.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(n.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(n.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(n.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(n.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(n.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(b)},rg98:function(e,t,a){"use strict";function i(e,t,a,i,o,n,r){try{var s=e[n](r),c=s.value}catch(l){return void a(l)}s.done?t(c):Promise.resolve(c).then(i,o)}function o(e){return function(){var t=this,a=arguments;return new Promise((function(o,n){var r=e.apply(t,a);function s(e){i(r,o,n,s,c,"next",e)}function c(e){i(r,o,n,s,c,"throw",e)}s(void 0)}))}}a.d(t,"a",(function(){return o}))},vTTe:function(e,t,a){},yRol:function(e,t,a){"use strict";a.r(t);var i=a("nKUr"),o=a("vJKn"),n=a.n(o),r=a("rg98"),s=a("Ji2X"),c=a("ofer"),l=a("kfFl"),d=a("wx14"),p=a("Ff2n"),u=a("q1tI"),m=a.n(u),f=(a("17x9"),a("iuhU")),h=a("H2TA"),b=u.forwardRef((function(e,t){var a=e.classes,i=e.className,o=e.dividers,n=void 0!==o&&o,r=Object(p.a)(e,["classes","className","dividers"]);return u.createElement("div",Object(d.a)({className:Object(f.a)(a.root,i,n&&a.dividers),ref:t},r))})),g=Object(h.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(b),v=u.forwardRef((function(e,t){var a=e.disableSpacing,i=void 0!==a&&a,o=e.classes,n=e.className,r=Object(p.a)(e,["disableSpacing","classes","className"]);return u.createElement("div",Object(d.a)({className:Object(f.a)(o.root,n,!i&&o.spacing),ref:t},r))})),x=Object(h.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(v),y=a("Z3vd"),j=a("iae6"),O=(a("TOwV"),u.forwardRef((function(e,t){var a=e.cellHeight,i=void 0===a?180:a,o=e.children,n=e.classes,r=e.className,s=e.cols,c=void 0===s?2:s,l=e.component,m=void 0===l?"ul":l,h=e.spacing,b=void 0===h?4:h,g=e.style,v=Object(p.a)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return u.createElement(m,Object(d.a)({className:Object(f.a)(n.root,r),ref:t,style:Object(d.a)({margin:-b/2},g)},v),u.Children.map(o,(function(e){if(!u.isValidElement(e))return null;var t=e.props.cols||1,a=e.props.rows||1;return u.cloneElement(e,{style:Object(d.a)({width:"".concat(100/c*t,"%"),height:"auto"===i?"auto":i*a+b,padding:b/2},e.props.style)})})))}))),w=Object(h.a)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(O),k=a("KQm4"),E=a("l3Wi"),S=a("ucBr"),T=function(e,t){var a,i,o,n;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((a=e.classList).remove.apply(a,Object(k.a)(t.imgFullWidth.split(" "))),(i=e.classList).add.apply(i,Object(k.a)(t.imgFullHeight.split(" ")))):((o=e.classList).remove.apply(o,Object(k.a)(t.imgFullHeight.split(" "))),(n=e.classList).add.apply(n,Object(k.a)(t.imgFullWidth.split(" ")))))};var D=u.forwardRef((function(e,t){var a=e.children,i=e.classes,o=e.className,n=(e.cols,e.component),r=void 0===n?"li":n,s=(e.rows,Object(p.a)(e,["children","classes","className","cols","component","rows"])),c=u.useRef(null);return u.useEffect((function(){!function(e,t){e&&(e.complete?T(e,t):e.addEventListener("load",(function(){T(e,t)})))}(c.current,i)})),u.useEffect((function(){var e=Object(E.a)((function(){T(c.current,i)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[i]),u.createElement(r,Object(d.a)({className:Object(f.a)(i.root,o),ref:t},s),u.createElement("div",{className:i.tile},u.Children.map(a,(function(e){return u.isValidElement(e)?"img"===e.type||Object(S.a)(e,["Image"])?u.cloneElement(e,{ref:c}):e:null}))))})),z=Object(h.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(D),M=u.forwardRef((function(e,t){var a=e.actionIcon,i=e.actionPosition,o=void 0===i?"right":i,n=e.classes,r=e.className,s=e.subtitle,c=e.title,l=e.titlePosition,m=void 0===l?"bottom":l,h=Object(p.a)(e,["actionIcon","actionPosition","classes","className","subtitle","title","titlePosition"]),b=a&&o;return u.createElement("div",Object(d.a)({className:Object(f.a)(n.root,r,"top"===m?n.titlePositionTop:n.titlePositionBottom,s&&n.rootSubtitle),ref:t},h),u.createElement("div",{className:Object(f.a)(n.titleWrap,{left:n.titleWrapActionPosLeft,right:n.titleWrapActionPosRight}[b])},u.createElement("div",{className:n.title},c),s?u.createElement("div",{className:n.subtitle},s):null),a?u.createElement("div",{className:Object(f.a)(n.actionIcon,"left"===b&&n.actionIconActionPosLeft)},a):null)})),W=Object(h.a)((function(e){return{root:{position:"absolute",left:0,right:0,height:48,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},titlePositionBottom:{bottom:0},titlePositionTop:{top:0},rootSubtitle:{height:68},titleWrap:{flexGrow:1,marginLeft:16,marginRight:16,color:e.palette.common.white,overflow:"hidden"},titleWrapActionPosLeft:{marginLeft:0},titleWrapActionPosRight:{marginRight:0},title:{fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},subtitle:{fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},actionIcon:{},actionIconActionPosLeft:{order:-1}}}),{name:"MuiGridListTileBar"})(M),N=a("5Yp1"),P=a("PsDL"),C=a("R/WZ"),_=a("E8kk"),L=a.n(_),I=function(e){var t=e.src,a=e.srcSet,i=e.sizes,o=e.sources,n=e.alt,r=e.isZoomed,s=e.fadeDuration;return m.a.createElement(u.Fragment,null,o&&o.length>0?m.a.createElement("picture",null,o.map((function(e,t){return m.a.createElement(u.Fragment,{key:t},e.srcSet&&m.a.createElement("source",{srcSet:e.srcSet,sizes:e.sizes,media:e.media,type:e.type}))})),m.a.createElement("img",{className:"iiz__img "+(r?"iiz__img--invisible":""),style:{transition:"linear 0ms opacity "+(r?s:0)+"ms, linear "+s+"ms visibility "+(r?s:0)+"ms"},src:t,srcSet:a,sizes:i,alt:n})):m.a.createElement("img",{className:"iiz__img "+(r?"iiz__img--invisible":""),style:{transition:"linear 0ms opacity "+(r?s:0)+"ms, linear "+s+"ms visibility "+(r?s:0)+"ms"},src:t,srcSet:a,sizes:i,alt:n}))};I.propTypes={};var B=I,F=function(e){var t=e.src,a=e.fadeDuration,i=e.top,o=e.left,n=e.isZoomed,r=e.onLoad,s=e.onDragStart,c=e.onDragEnd,l=e.onClose;return m.a.createElement(u.Fragment,null,m.a.createElement("img",{className:"iiz__zoom-img "+(n?"iiz__zoom-img--visible":""),style:{top:i,left:o,transition:"linear "+a+"ms opacity, linear "+a+"ms visibility"},src:t,onLoad:r,onTouchStart:s,onTouchEnd:c,onMouseDown:s,onMouseUp:c,alt:""}),l&&m.a.createElement("button",{className:"iiz__btn iiz__close "+(n?"iiz__close--visible":""),style:{transition:"linear "+a+"ms opacity, linear "+a+"ms visibility"},onClick:l,"aria-label":"Zoom Out"}))};F.propTypes={};var R=F,A=a("i8i4");var X=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,a));return i.el=document.createElement("div"),i.el.classList.add(a.className),i}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){document.body.appendChild(this.el)},t.prototype.componentWillUnmount=function(){document.body.removeChild(this.el)},t.prototype.render=function(){return Object(A.createPortal)(this.props.children,this.el)},t}(u.Component);X.propTypes={};var H=X;var Y=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,a));return i.handleMouseEnter=function(e){i.setState({isActive:!0}),"hover"!==i.props.zoomType||i.state.isZoomed||i.handleClick(e)},i.handleTouchStart=function(){var e=i.props.fullscreenOnMobile&&window.matchMedia&&window.matchMedia("(max-width: "+i.props.mobileBreakpoint+"px)").matches;i.setState({isTouch:!0,isFullscreen:e,currentMoveType:"drag"})},i.handleClick=function(e){i.state.isZoomed?i.state.isTouch||i.state.isDragging||i.zoomOut():(i.state.isTouch&&i.setState({isActive:!0}),i.isLoaded?i.zoomIn(e.pageX,e.pageY):i.onLoadCallback=i.zoomIn.bind(i,e.pageX,e.pageY))},i.handleLoad=function(e){i.isLoaded=!0,i.zoomImg=e.target,i.zoomImg.setAttribute("width",i.zoomImg.offsetWidth*i.props.zoomScale),i.zoomImg.setAttribute("height",i.zoomImg.offsetHeight*i.props.zoomScale),i.bounds=i.getBounds(i.img,!1),i.ratios=i.getRatios(i.bounds,i.zoomImg),i.onLoadCallback&&(i.onLoadCallback(),i.onLoadCallback=null)},i.handleMouseMove=function(e){var t=e.pageX-i.offsets.x,a=e.pageY-i.offsets.y;t=Math.max(Math.min(t,i.bounds.width),0),a=Math.max(Math.min(a,i.bounds.height),0),i.setState({left:t*-i.ratios.x,top:a*-i.ratios.y})},i.handleDragStart=function(e){i.offsets=i.getOffsets(e.pageX||e.changedTouches[0].pageX,e.pageY||e.changedTouches[0].pageY,i.zoomImg.offsetLeft,i.zoomImg.offsetTop),i.zoomImg.addEventListener(i.state.isTouch?"touchmove":"mousemove",i.handleDragMove,{passive:!1}),i.state.isTouch||(i.eventPosition={x:e.pageX,y:e.pageY})},i.handleDragMove=function(e){e.preventDefault(),e.stopPropagation();var t=(e.pageX||e.changedTouches[0].pageX)-i.offsets.x,a=(e.pageY||e.changedTouches[0].pageY)-i.offsets.y;t=Math.max(Math.min(t,0),-1*(i.zoomImg.offsetWidth-i.bounds.width)),a=Math.max(Math.min(a,0),-1*(i.zoomImg.offsetHeight-i.bounds.height)),i.setState({left:t,top:a})},i.handleDragEnd=function(e){if(i.zoomImg.removeEventListener(i.state.isTouch?"touchmove":"mousemove",i.handleDragMove),!i.state.isTouch){var t=Math.abs(e.pageX-i.eventPosition.x),a=Math.abs(e.pageY-i.eventPosition.y);i.setState({isDragging:t>5||a>5})}},i.handleMouseLeave=function(e){"drag"===i.state.currentMoveType&&i.state.isZoomed?i.handleDragEnd(e):i.handleClose()},i.handleClose=function(){i.zoomOut((function(){setTimeout((function(){i.setDefaults(),i.setState({isActive:!1,isTouch:!1,isFullscreen:!1,currentMoveType:i.props.moveType})}),i.props.fadeDuration)}))},i.initialMove=function(e,t){i.offsets=i.getOffsets(window.pageXOffset,window.pageYOffset,-i.bounds.left,-i.bounds.top),i.handleMouseMove({pageX:e,pageY:t})},i.initialDragMove=function(e,t){var a=(e-(window.pageXOffset+i.bounds.left))*-i.ratios.x,o=(t-(window.pageYOffset+i.bounds.top))*-i.ratios.y;i.bounds=i.getBounds(i.img,i.state.isFullscreen),i.offsets=i.getOffsets(0,0,0,0),i.handleDragMove({changedTouches:[{pageX:a,pageY:o}],preventDefault:function(){},stopPropagation:function(){}})},i.zoomIn=function(e,t){i.setState({isZoomed:!0},(function(){("drag"===i.state.currentMoveType?i.initialDragMove:i.initialMove)(e,t),i.props.afterZoomIn&&i.props.afterZoomIn()}))},i.zoomOut=function(e){i.setState({isZoomed:!1},(function(){i.props.afterZoomOut&&i.props.afterZoomOut(),e&&e()}))},i.setDefaults=function(){i.isLoaded=!1,i.onLoadCallback=null,i.zoomImg=null,i.bounds={},i.offsets={},i.ratios={},i.eventPosition={}},i.getBounds=function(e,t){return t?{width:window.innerWidth,height:window.innerHeight,left:0,top:0}:e.getBoundingClientRect()},i.getOffsets=function(e,t,a,i){return{x:e-a,y:t-i}},i.getRatios=function(e,t){return{x:(t.offsetWidth-e.width)/e.width,y:(t.offsetHeight-e.height)/e.height}},i.state={isActive:!0===a.startsActive,isTouch:!1,isZoomed:!1,isFullscreen:!1,isDragging:!1,currentMoveType:a.moveType,left:0,top:0},i.setDefaults(),i}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.src,i=t.srcSet,o=t.sizes,n=t.sources,r=t.zoomSrc,s=t.alt,c=t.fadeDuration,l=t.className,d={src:r||a,fadeDuration:this.state.isFullscreen?0:c,top:this.state.top,left:this.state.left,isZoomed:this.state.isZoomed,onLoad:this.handleLoad,onDragStart:this.handleDragStart,onDragEnd:this.handleDragEnd,onClose:this.state.isTouch?this.handleClose:null};return m.a.createElement("figure",{className:"iiz "+("drag"===this.state.currentMoveType?"iiz--drag":"")+" "+(l||""),ref:function(t){e.img=t},onTouchStart:this.handleTouchStart,onClick:this.handleClick,onMouseEnter:this.state.isTouch?null:this.handleMouseEnter,onMouseMove:"drag"!==this.state.currentMoveType&&this.state.isZoomed?this.handleMouseMove:null,onMouseLeave:this.state.isTouch?null:this.handleMouseLeave},m.a.createElement(B,{src:a,srcSet:i,sizes:o,sources:n,alt:s,fadeDuration:this.props.fadeDuration,isZoomed:this.state.isZoomed}),this.state.isActive&&m.a.createElement(u.Fragment,null,this.state.isFullscreen?m.a.createElement(H,{className:"iiz__zoom-portal"},m.a.createElement(R,d)):m.a.createElement(R,d)),!this.state.isZoomed&&m.a.createElement("span",{className:"iiz__btn iiz__hint"}))},t}(u.Component);Y.propTypes={},Y.defaultProps={moveType:"pan",zoomType:"click",zoomScale:1,fadeDuration:150,mobileBreakpoint:640};var Z=Y,K=(a("zYDt"),a("vTTe"),Object(C.a)({gridList:{width:"70%"},icon:{color:"rgba(255, 255, 255, 0.54)"},spinnerTextStyle:{textAlign:"center",color:"#7cb342"},subtitleStyle:{fontSize:"1.5rem",color:"white",textAlign:"center"}}));t.default=function(){var e=K(),t=Object(u.useState)({articles:[]}),a=t[0],o=t[1],d=Object(u.useState)(!1),p=d[0],m=d[1],f=Object(u.useState)(!1),h=f[0],b=f[1],v=Object(u.useState)(""),O=v[0],k=v[1];return Object(u.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data/articles.json");case 2:return t=e.sent,e.next=5,t.status;case 5:if(e.t0=e.sent,200===e.t0){e.next=10;break}alert("API Error. Try again later"),e.next=14;break;case 10:return e.next=12,t.json();case 12:a=e.sent,o({articles:a});case 14:m(!0);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.jsxs)(N.a,{title:"PIL | Articles",children:[Object(i.jsx)("div",{className:"hashCodeHeadSection",children:Object(i.jsxs)(s.a,{children:[Object(i.jsx)(c.a,{className:"pageHeader",children:"PES Innovation Lab in the news"}),Object(i.jsx)(c.a,{className:e.subtitleStyle,children:"A collection of media articles about us"}),Object(i.jsx)(c.a,{className:e.subtitleStyle,style:{marginTop:40},children:"Click an article to read more"})]})}),Object(i.jsxs)(s.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[p?Object(i.jsx)(w,{cellHeight:400,className:e.gridList,children:a.articles.map((function(t){return Object(i.jsxs)(z,{onClick:function(){return e=t.image_link,console.log(e),k(e),void b(!0);var e},children:[Object(i.jsx)("img",{src:t.thumbnail_link,alt:t.article_name}),Object(i.jsx)(W,{title:t.article_name,subtitle:t.article_date,actionIcon:Object(i.jsx)(P.a,{"aria-label":"Read more ... ",className:e.icon,children:Object(i.jsx)(L.a,{})})})]},t.thumbnail_link)}))}):Object(i.jsxs)("div",{className:e.spinnerTextStyle,children:[Object(i.jsx)(c.a,{style:{fontSize:"1.5rem"},children:"Loading Data"})," ",Object(i.jsx)(j.a,{style:{color:"#7cb342",marginTop:"1em"}})]}),Object(i.jsxs)(l.a,{open:h,onClose:function(){b(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(i.jsx)(g,{children:Object(i.jsx)(Z,{src:O,zoomScale:6})}),Object(i.jsx)(x,{children:Object(i.jsx)(y.a,{onClick:function(){b(!1)},color:"primary",children:"Close"})})]})]})]})}}},[["hDBf",0,2,1,3,5,4]]]);