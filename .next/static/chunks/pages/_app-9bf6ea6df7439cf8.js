(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9597)}])},3579:function(e,t,n){"use strict";n.d(t,{w:function(){return AppProvider},b:function(){return useAppContext}});var r=n(5893),u=n(7294);let appReducer=(e,t)=>"SET_ACTIVE_CATEGORY"===t.type?{...e,activeCategory:t.payload}:e,p=(0,u.createContext)(void 0),useAppContext=()=>{let e=(0,u.useContext)(p);if(!e)throw Error("useAppContext must be used within an AppProvider");return e},AppProvider=e=>{let{children:t}=e,[n,c]=(0,u.useReducer)(appReducer,{activeCategory:null});return(0,r.jsx)(p.Provider,{value:{state:n,dispatch:c},children:t})}},9597:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(9140),n(415);var u=n(3579);function MyApp(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(u.w,{children:(0,r.jsx)(t,{...n})})}t.default=MyApp},415:function(){},9140:function(){}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(1118),__webpack_exec__(9974)}),_N_E=e.O()}]);