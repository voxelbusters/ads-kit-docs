"use strict";(self.webpackChunkdocusaurus_client=self.webpackChunkdocusaurus_client||[]).push([[474],{8873:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>s});var o=n(5893),i=n(1151);const d={},a=void 0,t={id:"Troubleshooting/error-codes",title:"error-codes",description:"Handling Error Codes",source:"@site/docs/05-Troubleshooting/01-error-codes.md",sourceDirName:"05-Troubleshooting",slug:"/Troubleshooting/error-codes",permalink:"/Troubleshooting/error-codes",draft:!1,unlisted:!1,editUrl:"https://github.com/voxelbusters/ads-kit-docs/tree/main/docs/05-Troubleshooting/01-error-codes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"best-practices",permalink:"/Privacy Management/best-practices"},next:{title:"known-issues",permalink:"/Troubleshooting/known-issues"}},l={},s=[{value:"Handling Error Codes",id:"handling-error-codes",level:2},{value:"Error Code Guide",id:"error-code-guide",level:3},{value:"AdErrorCode.kUnknown (0)",id:"aderrorcodekunknown-0",level:4},{value:"AdErrorCode.kNotInitialized (1)",id:"aderrorcodeknotinitialized-1",level:4},{value:"AdErrorCode.kConsentNotAvailable (2)",id:"aderrorcodekconsentnotavailable-2",level:4},{value:"AdErrorCode.kNoInternet (3)",id:"aderrorcodeknointernet-3",level:4},{value:"AdErrorCode.kLoadFail (4)",id:"aderrorcodekloadfail-4",level:4},{value:"AdErrorCode.kShowFail (5)",id:"aderrorcodekshowfail-5",level:4},{value:"AdErrorCode.kUserCancelled (6)",id:"aderrorcodekusercancelled-6",level:4},{value:"AdErrorCode.kNotSupported (7)",id:"aderrorcodeknotsupported-7",level:4},{value:"AdErrorCode.kConfigurationNotFound (8)",id:"aderrorcodekconfigurationnotfound-8",level:4},{value:"Implementing Error Handling",id:"implementing-error-handling",level:3}];function c(e){const r={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"handling-error-codes",children:"Handling Error Codes"}),"\n",(0,o.jsx)(r.p,{children:"When integrating ads into your Unity application, it's important to be able to understand and handle errors that may occur during the ad management lifecycle. The Ads Kit plugin provides a structured set of error codes that you'll encounter while using the plugin. Here's what each error code means and how you can handle them in your Unity project."}),"\n",(0,o.jsx)(r.h3,{id:"error-code-guide",children:"Error Code Guide"}),"\n",(0,o.jsx)(r.h4,{id:"aderrorcodekunknown-0",children:"AdErrorCode.kUnknown (0)"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Description: An unknown or unexpected error has occurred. The exact issue is not identifiable."}),"\n",(0,o.jsx)(r.li,{children:"Handling: Log the error and perhaps try reinitializing the ads system after a delay."}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-csharp",children:'if (errorCode== AdErrorCode.kUnknown)\r\n{\r\n    Debug.LogError("An unknown error occurred in the Ads Kit Plugin.");\r\n    // Consider retrying or performing a fallback action\r\n}\n'})}),"\n",(0,o.jsx)(r.h4,{id:"aderrorcodeknotinitialized-1",children:"AdErrorCode.kNotInitialized (1)"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Description: The system failed to initialize, often due to a misconfiguration or an issue in the startup sequence."}),"\n",(0,o.jsx)(r.li,{children:"Handling: Confirm initialization parameters and retry initializing the ads manager."}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-csharp",children:'if (errorCode== AdErrorCode.kNotInitialized)\r\n{\r\n    Debug.LogError("Ads Kit Plugin wasn\'t initialized properly.");\r\n    // Double-check initialization code and parameters\r\n}\n'})}),"\n",(0,o.jsx)(r.h4,{id:"aderrorcodekconsentnotavailable-2",children:"AdErrorCode.kConsentNotAvailable (2)"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Description: Required user consent is not available or consent form has not been agreed upon by the user."}),"\n",(0,o.jsx)(r.li,{children:"Handling: Prompt the user with the consent form."}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-csharp",children:'if (errorCode== AdErrorCode.kConsentNotAvailable)\r\n{\r\n    Debug.LogError("Required user consent not available.");\r\n    // Prompt user for consent or handle non-personalized ads delivery\r\n}\n'})}),"\n",(0,o.jsx)(r.h4,{id:"aderrorcodeknointernet-3",children:"AdErrorCode.kNoInternet (3)"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Description: An internet connection is not available, preventing ad loading and display."}),"\n",(0,o.jsx)(r.li,{children:"Handling: Check the user's internet connectivity and try again once a connection is established."}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-csharp",children:'if (errorCode== AdErrorCode.kNoInternet)\r\n{\r\n    Debug.LogWarning("No internet connection available.");\r\n    // Check internet connectivity and retry later\r\n}\n'})}),"\n",(0,o.jsx)(r.h4,{id:"aderrorcodekloadfail-4",children:"AdErrorCode.kLoadFail (4)"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Description: Failed to load ad content, which may be due to network issues or ad network problems."}),"\n",(0,o.jsx)(r.li,{children:"Handling: Attempt to load the ad again after a brief delay or use fallback content."}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-csharp",children:'if (errorCode== AdErrorCode.kLoadFail)\r\n{\r\n    Debug.LogError("Failed to load ad content.");\r\n    // Retry loading after some time or handle with a fallback\r\n}\n'})}),"\n",(0,o.jsx)(r.h4,{id:"aderrorcodekshowfail-5",children:"AdErrorCode.kShowFail (5)"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Description: The system failed to show ad content, possibly because ads aren't loaded or an internal issue occurred."}),"\n",(0,o.jsx)(r.li,{children:"Handling: Ensure ads are loaded before attempting to show them; if necessary, reload ads."}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-csharp",children:'if (errorCode== AdErrorCode.kShowFail)\r\n{\r\n    Debug.LogError("Failed to show ad content.");\r\n    // Check if the ad is loaded. If not, load it before showing\r\n}\n'})}),"\n",(0,o.jsx)(r.h4,{id:"aderrorcodekusercancelled-6",children:"AdErrorCode.kUserCancelled (6)"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Description: User has cancelled the ad before it could be shown or during its display."}),"\n",(0,o.jsx)(r.li,{children:"Handling: Respect the user cancellation and ensure a smooth user experience."}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-csharp",children:'if (errorCode== AdErrorCode.kUserCancelled)\r\n{\r\n    Debug.LogWarning("User cancelled the ad.");\r\n    // Optionally provide user feedback or resume game/application flow\r\n}\n'})}),"\n",(0,o.jsx)(r.h4,{id:"aderrorcodeknotsupported-7",children:"AdErrorCode.kNotSupported (7)"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Description: This error code indicates that a specific functionality is not supported by the system or platform."}),"\n",(0,o.jsx)(r.li,{children:"Handling: Implement platform-specific checks or provide alternative content if necessary."}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-csharp",children:'if (errorCode== AdErrorCode.kNotSupported)\r\n{\r\n    Debug.LogError("The functionality is not supported on this system.");\r\n    // Provide alternative solutions as per the platform capabilities\r\n}\n'})}),"\n",(0,o.jsx)(r.h4,{id:"aderrorcodekconfigurationnotfound-8",children:"AdErrorCode.kConfigurationNotFound (8)"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Description: The configuration required for the ad system to function is missing or incorrect."}),"\n",(0,o.jsx)(r.li,{children:"Handling: Check the ad network and plugin configurations; ensure they're set up properly."}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-csharp",children:'if (errorCode== AdErrorCode.kConfigurationNotFound)\r\n{\r\n    Debug.LogError("Ad configuration not found or it\'s incorrect.");\r\n    // Review ad network configuration and correct it\r\n}\n'})}),"\n",(0,o.jsx)(r.h3,{id:"implementing-error-handling",children:"Implementing Error Handling"}),"\n",(0,o.jsx)(r.p,{children:"When you integrate ads into your project, you should set up a listener for ad-related events and react accordingly to these error codes. Here's a stub that demonstrates how you can handle different error scenarios:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-csharp",children:'public void OnAdOperationFailed(string placementId, int errorCode)\r\n{\r\n    // Handle based on errorCode\r\n    switch (errorCode)\r\n    {\r\n        case AdErrorCode.kUnknown:\r\n            // Handle unknown error\r\n            break;\r\n        case AdErrorCode.kNotInitialized:\r\n            // Handle not initialized error\r\n            break;\r\n        case AdErrorCode.kConsentNotAvailable:\r\n            // Handle consent not available error\r\n            break;\r\n        // ... handle other error codes similarly\r\n        default:\r\n            Debug.LogError($"Unrecognized error code: {errorCode}");\r\n            break;\r\n    }\r\n}\n'})})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>t,a:()=>a});var o=n(7294);const i={},d=o.createContext(i);function a(e){const r=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(d.Provider,{value:r},e.children)}}}]);