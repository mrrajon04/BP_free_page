(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2131:function(e,t,r){Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,9197)),Promise.resolve().then(r.bind(r,4680)),Promise.resolve().then(r.bind(r,4238)),Promise.resolve().then(r.bind(r,6393)),Promise.resolve().then(r.bind(r,6027)),Promise.resolve().then(r.bind(r,8363))},4680:function(e,t,r){"use strict";r.d(t,{SignUpForm:function(){return o}});var n=r(7437);r(2265);var i=r(7138),l=r(4839);function s(e){let{arrow:t=!1,children:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"bg-indigo absolute inset-0 rounded-md opacity-10 transition-opacity group-hover:opacity-15"}),(0,n.jsx)("span",{className:"absolute inset-0 rounded-md opacity-75 shadow-[inset_0_1px_1px_white] transition-opacity group-hover:opacity-100"}),r," ",t?(0,n.jsx)("span",{"aria-hidden":"true",children:"→"}):null]})}function a(e){let{className:t,arrow:r,children:a,...o}=e;return t=(0,l.Z)(t,"group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white",r?"pl-2.5 pr-[calc(9/16*1rem)]":"px-2.5","shadow-[0_0_10px_rgba(0,153,255,0.4)] transition-all duration-300 ease-in-out transform hover:shadow-[0_0_20px_rgba(0,153,255,0.6),0_0_25px_rgba(0,153,255,0.4)]"),void 0===o.href?(0,n.jsx)("button",{className:t,...o,children:(0,n.jsx)(s,{arrow:r,children:a})}):(0,n.jsx)(i.default,{className:t,...o,children:(0,n.jsx)(s,{arrow:r,children:a})})}function o(){return(0,n.jsx)("div",{className:"relative isolate mt-8 flex items-center pr-1",children:(0,n.jsx)(a,{onClick:()=>{let e=encodeURIComponent("Request for Demo"),t=encodeURIComponent(`Hello,

I would like to book a demo.

Thank you.`),r=`mailto:ns3mathe@uwaterloo.ca?subject=${e}&body=${t}`;window.location.href=r},arrow:!0,children:"Book a Demo!"})})}},4238:function(e,t,r){"use strict";r.d(t,{StarField:function(){return m}});var n=r(7437),i=r(2265),l=r(4839),s=r(9988),a=r(6030);let o=[[4,4,!0,!0],[4,44,!0],[36,22],[50,146,!0,!0],[64,43,!0,!0],[76,30,!0],[101,116],[140,36,!0],[149,134],[162,74,!0],[171,96,!0,!0],[210,56,!0,!0],[235,90],[275,82,!0,!0],[306,6],[307,64,!0,!0],[380,68,!0],[380,108,!0,!0],[391,148,!0,!0],[405,18,!0],[412,86,!0,!0],[426,210,!0,!0],[427,56,!0,!0],[538,138],[563,88,!0,!0],[611,154,!0,!0],[637,150],[651,146,!0],[682,70,!0,!0],[683,128],[781,82,!0,!0],[785,158,!0],[832,146,!0,!0],[852,89]],c=[[[247,103],[261,86],[307,104],[357,36]],[[586,120],[516,100],[491,62],[440,107],[477,180],[516,100]],[[733,100],[803,120],[879,113],[823,164],[803,120]]];function u(e){let{blurId:t,point:[r,l,a,o]}=e,c=(0,i.useRef)(null),u=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!c.current||!u.current)return;let e=2*Math.random(),t=[(0,s.j)(c.current,{opacity:1},{duration:4,delay:e}),(0,s.j)(u.current,{opacity:a?[.2,.5]:[1,.6],scale:a?[1,1.2]:[1.2,1]},{delay:e,duration:2*Math.random()+2,direction:"alternate",repeat:1/0})];return()=>{for(let e of t)e.cancel()}},[a]),(0,n.jsx)("g",{ref:c,className:"opacity-0",children:(0,n.jsx)("circle",{ref:u,cx:r,cy:l,r:1,style:{transformOrigin:`${r/16}rem ${l/16}rem`,opacity:a?.2:1,transform:`scale(${a?1:1.2})`},filter:o?`url(#${t})`:void 0})})}function d(e){let{points:t,blurId:r}=e,l=(0,i.useRef)(null),s=t.filter((e,r)=>t.findIndex(t=>String(t)===String(e))===r),o=s.length!==t.length;return(0,i.useEffect)(()=>{if(!l.current)return;let e=[[l.current,{strokeDashoffset:0,visibility:"visible"},{duration:5,delay:3*Math.random()+2}]];o&&e.push([l.current,{fill:"rgb(255 255 255 / 0.02)"},{duration:1}]);let t=(0,a.Z)(e);return()=>{t.cancel()}},[o]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{ref:l,stroke:"white",strokeOpacity:"0.2",strokeDasharray:1,strokeDashoffset:1,pathLength:1,fill:"transparent",d:`M ${t.join("L")}`,className:"invisible"}),s.map((e,t)=>(0,n.jsx)(u,{point:e,blurId:r},t))]})}function m(e){let{className:t}=e,r=(0,i.useId)();return(0,n.jsxs)("svg",{viewBox:"0 0 881 211",fill:"white","aria-hidden":"true",className:(0,l.Z)("pointer-events-none absolute w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70",t),children:[(0,n.jsx)("defs",{children:(0,n.jsx)("filter",{id:r,children:(0,n.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:".5"})})}),c.map((e,t)=>(0,n.jsx)(d,{points:e,blurId:r},t)),o.map((e,t)=>(0,n.jsx)(u,{point:e,blurId:r},t))]})}},6393:function(e,t,r){"use strict";r.d(t,{ThemeToggle:function(){return a}});var n=r(7437),i=r(2265),l=r(5169);function s(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"})})}function a(){let[e,t]=(0,i.useState)(!1),{resolvedTheme:r,setTheme:a}=(0,l.F)(),o="dark"===r?"light":"dark";return((0,i.useEffect)(()=>{t(!0)},[]),e)?(0,n.jsxs)("button",{type:"button",className:"group absolute right-4 top-4 z-50 -m-2.5 p-2.5",onClick:()=>a(o),children:[(0,n.jsxs)("span",{className:"sr-only",children:["Switch to ",o," theme"]}),(0,n.jsx)(s,{className:"h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100 lg:fill-gray-900 lg:dark:fill-white"})]}):null}},9197:function(e,t,r){"use strict";r.r(t),r.d(t,{a:function(){return c},article:function(){return h},code:function(){return x},img:function(){return u}});var n=r(7437),i=r(2265),l=r(6648),s=r(7138),a=r(4839);function o(e){let{text:t,...r}=e;return(0,n.jsx)("span",{...r,children:t})}new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"});let c=s.default,u=function(e){return(0,n.jsxs)("div",{className:"relative mt-8 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900 [&+*]:mt-8",children:[(0,n.jsx)(l.default,{alt:"",sizes:"(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw",...e}),(0,n.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10"})]})};function d(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:"mx-auto max-w-7xl px-6 lg:flex lg:px-8",children:(0,n.jsx)("div",{className:"lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32",children:(0,n.jsx)("div",{className:(0,a.Z)("mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto",t),...r})})})}function m(e){let{id:t,date:r}=e;return(0,n.jsxs)("header",{className:"relative mb-10 xl:mb-0",children:[(0,n.jsxs)("div",{className:"pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8",children:[(0,n.jsx)(s.default,{href:`#${t}`,className:"inline-flex",children:(0,n.jsx)(o,{text:r,className:"hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"})}),(0,n.jsx)("div",{className:"h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300"})]}),(0,n.jsx)(d,{children:(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)(s.default,{href:`#${t}`,className:"inline-flex",children:(0,n.jsx)(o,{text:r,className:"text-2xs/4 font-medium text-gray-500 xl:hidden dark:text-white/50"})})})})]})}let h=function(e){let{id:t,date:r,children:l}=e,s=(0,i.useRef)(null),[a,o]=(0,i.useState)(0);return(0,i.useEffect)(()=>{if(!s.current)return;let e=new window.ResizeObserver(()=>{if(!s.current)return;let{height:e}=s.current.getBoundingClientRect();o(8*Math.ceil(e/8)-e)});return e.observe(s.current),()=>{e.disconnect()}},[]),(0,n.jsx)("article",{id:t,className:"scroll-mt-16",style:{paddingBottom:`${a}px`},children:(0,n.jsxs)("div",{ref:s,children:[(0,n.jsx)(m,{id:t,date:r}),(0,n.jsx)(d,{className:"typography","data-mdx-content":!0,children:l})]})})},x=function(e){let{highlightedCode:t,...r}=e;return t?(0,n.jsx)("code",{...r,dangerouslySetInnerHTML:{__html:t}}):(0,n.jsx)("code",{...r})}},6027:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/benefits.c983cca3.png",height:476,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEVCQUBESEtJSEZSUU87OjhFUVt/ujKMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVR4nBXBgQ0AMAzCsJCy/1+esCEvA0allGnxRj8DlAA6eqH5VgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},8363:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fuzzslice.a804dd1d.png",height:647,width:916,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAGFBMVEU8GjRFIztLK0IzEC1YJyCERiqLUjp0OSQ5YsmNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBnbm9tZS1zY3JlZW5zaG907wO/PgAAACpJREFUeJw9ycENADAIw0AnENh/44pPf2cZ25ZoLKCquRYH8XGvSTKzmwcI3gBuu+bbAAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}}},function(e){e.O(0,[167,626,971,23,744],function(){return e(e.s=2131)}),_N_E=e.O()}]);