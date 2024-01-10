"use strict";(self.webpackChunkdocusaurus_client=self.webpackChunkdocusaurus_client||[]).push([[387],{1831:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var d=s(5893),a=s(1151);const t={},i="Ads Management",o={id:"Usage/ads-management",title:"Ads Management",description:"In this section you can learn on how to load, show and hide/destroy ads.",source:"@site/docs/03-Usage/04-ads-management.md",sourceDirName:"03-Usage",slug:"/Usage/ads-management",permalink:"/ads-kit-docs/Usage/ads-management",draft:!1,unlisted:!1,editUrl:"https://github.com/voxelbusters/ads-kit-docs/tree/main/docs/03-Usage/04-ads-management.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initialisation",permalink:"/ads-kit-docs/Usage/initialisation"},next:{title:"event-handling",permalink:"/ads-kit-docs/Usage/event-handling"}},r={},l=[{value:"Loading Ads",id:"loading-ads",level:2},{value:"Showing Ads",id:"showing-ads",level:2},{value:"Hiding Ads",id:"hiding-ads",level:2},{value:"Destroying Ads",id:"destroying-ads",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"ads-management",children:"Ads Management"}),"\n",(0,d.jsx)(n.p,{children:"In this section you can learn on how to load, show and hide/destroy ads."}),"\n",(0,d.jsx)(n.h2,{id:"loading-ads",children:"Loading Ads"}),"\n",(0,d.jsxs)(n.p,{children:["Load ads using the\xa0",(0,d.jsx)(n.strong,{children:"LoadAd"}),"\xa0method if they are not marked for auto-loading:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-csharp",children:"public void LoadAd(string placementId)\r\n{\r\n    AdsManager.LoadAd(placementId);\r\n}\n"})}),"\n",(0,d.jsx)(n.h2,{id:"showing-ads",children:"Showing Ads"}),"\n",(0,d.jsxs)(n.p,{children:["Display a loaded ad using the\xa0",(0,d.jsx)(n.strong,{children:"ShowAd"}),"\xa0method:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-csharp",children:"public void ShowAd(string placementId)\r\n{\r\n    AdsManager.ShowAd(placementId);\r\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["If the Ad Placement is not marked as Auto Load, Ensure an ad is loaded before calling\xa0",(0,d.jsx)(n.code,{children:"ShowAd"}),"; otherwise, an error will be thrown."]}),"\n",(0,d.jsx)(n.h2,{id:"hiding-ads",children:"Hiding Ads"}),"\n",(0,d.jsxs)(n.p,{children:["Hide a displayed ad, only applicable to banner ads, with the\xa0",(0,d.jsx)(n.strong,{children:"HideAd"}),"\xa0method:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-csharp",children:"public void HideAd(string placementId)\r\n{\r\n    AdsManager.HideAd(placementId);\r\n    // Optionally, destroy the ad by setting destroy parameter to true\r\n    // AdsManager.HideAd(placementId, destroy: true);\r\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"To merely hide the ad without destroying it, omit the destroy parameter."}),"\n",(0,d.jsx)(n.h2,{id:"destroying-ads",children:"Destroying Ads"}),"\n",(0,d.jsx)(n.p,{children:"Passing the destroy parameter as true when hiding an ad releases all resources used by it."}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Destroy Banner Ads only if you no longer need it. Else just hide. Calling Destroy will hit the fill rate as it needs to be loaded again."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var d=s(7294);const a={},t=d.createContext(a);function i(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);