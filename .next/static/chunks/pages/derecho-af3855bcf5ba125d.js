(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[313],{6229:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/derecho",function(){return a(1071)}])},4844:function(e,s,a){"use strict";a.d(s,{Z:function(){return navbar_sidebar}});var t=a(5893),r=a(7294),l=a(4657),i=a(1664),n=a.n(i),c=a(1163),u=a(3579),years_side_bar=()=>{let{state:e}=(0,u.b)(),[s,a]=(0,r.useState)(null),[l,i]=(0,r.useState)([]),[d,o]=(0,r.useState)([]),x=(0,c.useRouter)(),f=[{id:0,year:2023,subcategories:[{subId:0,subTitle:"ONU y los Derechos Humanos"},{subId:1,subTitle:"Derechos humanos y democracia"},{subId:2,subTitle:"Derecho a la Sanidad"}]},{id:1,year:2022,subcategories:[{subId:0,subTitle:"Subcategor\xeda 5"}]},{id:3,year:2021,subcategories:[{subId:0,subTitle:"Subcategor\xeda 5"},{subId:1,subTitle:"Subcategor\xeda 6"}]}];(0,r.useEffect)(()=>{i([{year:2023},{year:2022},{year:2021}]),handleYearClick(2023)},[e]);let handleYearClick=e=>(a(e),o(f.filter(s=>e===s.year)));return(0,t.jsxs)("div",{className:" overflow-y-scroll  flex justify-between items-start  pl-[150px]  gap-10  scroll-transparent",children:[(0,t.jsx)("div",{className:"min-w-[300px] col-span-1 h-full flex flex-col justify-start",children:d.length>0&&(0,t.jsx)("ul",{children:d.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/".concat(x.pathname,"/").concat(e.id),children:e.subcategories.map(e=>(0,t.jsx)("p",{className:"h-full text-2xl text-gray-600",children:e.subTitle},e.subTitle))})},e.id))})}),(0,t.jsx)("div",{className:"w-[120px] flex flex-col items-end",children:l.map(e=>(0,t.jsx)("p",{className:" col-span-1".concat(s===e.year&&"font-playfairExtraBold text-5xl "," text-4xl font-playfair  w-auto cursor-pointer"),onClick:()=>handleYearClick(e.year),children:e.year},e.year))})]})},d=a(5705),navbar_sidebar=e=>{let{children:s,sideBar:a}=e;return(0,t.jsxs)("div",{className:"flex flex-col justify-between min-h-screen ",children:[(0,t.jsx)(l.Z,{}),(0,t.jsxs)("div",{className:"flex w-9/12  items-start justify-end pt-[5%]   mx-auto max-w-7xl h-[60vh]",children:[s,a&&(0,t.jsx)(years_side_bar,{})]}),(0,t.jsx)(d.Z,{})]})}},3160:function(e,s,a){"use strict";var t=a(5893);a(7294),s.Z=e=>{let{children:s}=e;return(0,t.jsx)("div",{className:"flex flex-col justify-between min-h-screen",children:s})}},1071:function(e,s,a){"use strict";a.r(s);var t=a(5893);a(7294);var r=a(4844),l=a(3160);s.default=()=>(0,t.jsx)(l.Z,{children:(0,t.jsx)(r.Z,{sideBar:!0})})},1163:function(e,s,a){e.exports=a(9974)}},function(e){e.O(0,[664,953,774,888,179],function(){return e(e.s=6229)}),_N_E=e.O()}]);