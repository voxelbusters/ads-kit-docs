"use strict";(self.webpackChunkdocusaurus_client=self.webpackChunkdocusaurus_client||[]).push([[747],{409:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=i(5893),s=i(1151);const r={},a="Ads Kit Settings",d={id:"Setup/settings",title:"Ads Kit Settings",description:"The Ads Kit settings file, known as AdsKitSettings, is a scriptable object asset where the plugin's settings are stored. It serves as a central location for configuring various aspects of the Ads Kit plugin, including ad placements, ad network preferences, test device IDs, and other essential settings.",source:"@site/docs/02-Setup/02-settings.md",sourceDirName:"02-Setup",slug:"/Setup/settings",permalink:"/Setup/settings",draft:!1,unlisted:!1,editUrl:"https://github.com/voxelbusters/ads-kit-docs/tree/main/docs/02-Setup/02-settings.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/Setup/installation"},next:{title:"Ad Networks",permalink:"/category/ad-networks"}},o={},l=[{value:"Access Settings",id:"access-settings",level:2},{value:"General",id:"general",level:2},{value:"Is Enabled",id:"is-enabled",level:5},{value:"Is Debug Build",id:"is-debug-build",level:5},{value:"Ad Network Preferences",id:"ad-network-preferences",level:5},{value:"Configuration",id:"configuration",level:6},{value:"Ad Serving Process",id:"ad-serving-process",level:6},{value:"Ad Placements",id:"ad-placements",level:4},{value:"Configuration",id:"configuration-1",level:5},{value:"Banner Ad Customization",id:"banner-ad-customization",level:5},{value:"Ad Content Default Settings",id:"ad-content-default-settings",level:4},{value:"Test Devices",id:"test-devices",level:4},{value:"Services",id:"services",level:2},{value:"Enable Ad Networks",id:"enable-ad-networks",level:4},{value:"Configure Ad Network",id:"configure-ad-network",level:4},{value:"Help",id:"help",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",h4:"h4",h5:"h5",h6:"h6",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ads-kit-settings",children:"Ads Kit Settings"}),"\n",(0,t.jsx)(n.p,{children:"The Ads Kit settings file, known as AdsKitSettings, is a scriptable object asset where the plugin's settings are stored. It serves as a central location for configuring various aspects of the Ads Kit plugin, including ad placements, ad network preferences, test device IDs, and other essential settings."}),"\n",(0,t.jsx)(n.h2,{id:"access-settings",children:"Access Settings"}),"\n",(0,t.jsx)(n.p,{children:"To configure the Ads Kit settings for  , follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Open your Unity project and navigate to the "Window" menu.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Navigate to Click on "Voxel Busters -> Ads Kit".'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Click on "Open Settings Menu" to access the Ads Kit Settings.'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Once the settings file is accessed, it gets created in Assets/Resources folder"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The settings in the Ads Kit plugin are organized into three sections :"}),"\n",(0,t.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,t.jsx)(n.p,{children:'The "General" section in the Ads Kit plugin has fundamental settings and options that are required for the overall functionality of the plugin.'}),"\n",(0,t.jsx)(n.h5,{id:"is-enabled",children:"Is Enabled"}),"\n",(0,t.jsx)(n.p,{children:"This option enables or disables the plugin."}),"\n",(0,t.jsx)(n.h5,{id:"is-debug-build",children:"Is Debug Build"}),"\n",(0,t.jsxs)(n.p,{children:["It toggles debug mode, which displays logs related to the plugin for debugging purposes. ",(0,t.jsx)("mark",{children:"It should be disabled in release mode."})]}),"\n",(0,t.jsx)(n.h5,{id:"ad-network-preferences",children:"Ad Network Preferences"}),"\n",(0,t.jsx)(n.p,{children:'The "Ad Network Preferences" allows developers to configure ad network preferences for each ad type. This section is essential for serving ads within the app or game.'}),"\n",(0,t.jsx)(n.h6,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ad Type Arrays"}),": Within this section, developers can find arrays for each ad type, including banner, interstitial, video, and rewarded video."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Priority Assignment"}),": For each ad type array, developers can assign an ad network based on priority. This prioritization determines the order in which ad networks are utilized for serving ads."]}),"\n"]}),"\n",(0,t.jsx)(n.h6,{id:"ad-serving-process",children:"Ad Serving Process"}),"\n",(0,t.jsx)(n.p,{children:"When an ad needs to be served at a specific ad placement, the plugin internally retrieves the list of ad network preferences for the ad type and requests an ad from that list. This ensures that the appropriate ad network is utilized for serving ads at the designated ad placements."}),"\n",(0,t.jsx)(n.h4,{id:"ad-placements",children:"Ad Placements"}),"\n",(0,t.jsx)(n.p,{children:"Ad placements are locations within an app or game where ads are displayed, defined and configured."}),"\n",(0,t.jsx)(n.p,{children:"Ad placements encompass banner ads, interstitial ads, video ads, and rewarded ads strategically positioned within an app or game to maximize visibility and user engagement while minimizing disruption to the user experience."}),"\n",(0,t.jsx)(n.p,{children:"For each unique Ad that needs to be displayed, you need to create an Ad Placement entry here."}),"\n",(0,t.jsx)(n.h5,{id:"configuration-1",children:"Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ad Type"}),": Specify the one of the ad types from the drop down."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ad Placement Id"}),": This is the id used to manage ads via code. Give a unique and readable name which you use to refer this ad placement in your codebase."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auto Load Option"}),": Enabling this option initiates automatic loading as soon as the ad networks are initialized or when an ad finishes serving and is ready for the next load."]}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"banner-ad-customization",children:"Banner Ad Customization"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"BannerAdOptionsAsset"}),": For banner ads, developers can utilize the BannerAdOptionsAsset feature to configure the position, size, and offset of the banner ad. This allows for customization of how the banner ad is displayed for a specific ad placement."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"ad-content-default-settings",children:"Ad Content Default Settings"}),"\n",(0,t.jsx)(n.p,{children:"This feature provides the option to set default configurations for ad types. Currently, only banner ad types have options to configure."}),"\n",(0,t.jsx)(n.h4,{id:"test-devices",children:"Test Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Developers can provide a list of test device IDs for iOS and Android platforms, allowing them to test the functionality of ads on specific devices."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"services",children:"Services"}),"\n",(0,t.jsx)(n.p,{children:"The Services section provides an overview of the available ad networks supported by the plugin. This currently includes AdMob, AppLovin, Unity Ads, Vungle(LiftOff), and TapJoy."}),"\n",(0,t.jsx)(n.h4,{id:"enable-ad-networks",children:"Enable Ad Networks"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"For enabling/selecting an Ad Network to be used in the app/game, just turn the toggle on."}),"\n",(0,t.jsxs)(n.li,{children:["Once an Ad Network is enabled, plugin ",(0,t.jsx)(n.strong,{children:"imports"})," the required packages ",(0,t.jsx)(n.strong,{children:"automatically"}),". Wait for the auto import to get finished."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"configure-ad-network",children:"Configure Ad Network"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Once an Ad Network is enabled and auto import got finished, click on the Ad Network to configure it."}),"\n",(0,t.jsx)(n.li,{children:"Enter the API/App Id's which can be obtained from the respective Ad Network's dashboard/portal."}),"\n",(0,t.jsx)(n.li,{children:"If a specific Ad Placement needs to be serviced with an Ad Network, add an entry in Ad Meta Array."}),"\n",(0,t.jsx)(n.li,{children:"In Ad Meta Array, connect the placement id and Ad Unit ids which are different for each platform."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Finish"})," configuring by entering the API/App id's ",(0,t.jsx)(n.strong,{children:"in"})," the ",(0,t.jsx)(n.strong,{children:"original"})," Ad Network ",(0,t.jsx)(n.strong,{children:"settings"})," ",(0,t.jsx)(n.strong,{children:"panel"}),". For example : Ad Mob\u2019s original settings are at Assets \u2192 Google Mobile Ads \u2192 Settings and AppLovin\u2019s original settings are at AppLovin \u2192 Integration Manager etc."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"In further releases, we will automate configuring the original Ad Network Settings panel with the details entered in our plugin."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"help",children:"Help"}),"\n",(0,t.jsx)(n.p,{children:"Access support and other plugin resources from this section."}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"The Ad Kit Settings in the Ads Kit plugin is a valuable tool for setting up Ads Kit. With its user-friendly interface, developers can easily configure and manage ad content."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>a});var t=i(7294);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);