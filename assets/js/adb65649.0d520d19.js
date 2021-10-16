"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45385],{88449:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=t(74034),o=t(79973),s=(t(67294),t(3905)),i=["components"],l={keywords:["IOTA Node","Hornet Node","storage","configuration","spammer","snapshots"],description:"Key concepts to consider for Node maintenance. Configuring storage, plugins, spammer and how to work with snapshots.",image:"/img/logo/HornetLogo.png"},r="Managing a Node",p={unversionedId:"post_installation/managing_a_node",id:"post_installation/managing_a_node",isDocsHomePage:!1,title:"Managing a Node",description:"Key concepts to consider for Node maintenance. Configuring storage, plugins, spammer and how to work with snapshots.",source:"@site/external/hornet/documentation/docs/post_installation/managing_a_node.md",sourceDirName:"post_installation",slug:"/post_installation/managing_a_node",permalink:"/hornet/post_installation/managing_a_node",tags:[],version:"current",frontMatter:{keywords:["IOTA Node","Hornet Node","storage","configuration","spammer","snapshots"],description:"Key concepts to consider for Node maintenance. Configuring storage, plugins, spammer and how to work with snapshots.",image:"/img/logo/HornetLogo.png"},sidebar:"mySidebar",previous:{title:"Post-installation",permalink:"/hornet/post_installation/post_installation"},next:{title:"Core Configuration",permalink:"/hornet/post_installation/configuration"}},d=[{value:"Storage",id:"storage",children:[],level:2},{value:"Plugins",id:"plugins",children:[],level:2},{value:"Spammer",id:"spammer",children:[],level:2},{value:"Snapshots",id:"snapshots",children:[{value:"Snapshot Pruning",id:"snapshot-pruning",children:[{value:"Delta snapshots",id:"delta-snapshots",children:[],level:4},{value:"Full snapshots",id:"full-snapshots",children:[],level:4}],level:3},{value:"How to Work With Snapshots",id:"how-to-work-with-snapshots",children:[],level:3}],level:2}],u={toc:d};function h(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"managing-a-node"},"Managing a Node"),(0,s.kt)("p",null,"In this section, you can find an overview of the key concepts that you should consider during your node's maintenance cycle."),(0,s.kt)("h2",{id:"storage"},"Storage"),(0,s.kt)("p",null,"Hornet uses embedded database engine that stores its data in a directory on file system. You can manage the location using the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.json")," file, under the ",(0,s.kt)("inlineCode",{parentName:"p"},"db")," section, with the ",(0,s.kt)("inlineCode",{parentName:"p"},"path")," key:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json{3}"},'"db": {\n    "engine": "rocksdb",\n    "path": "mainnetdb",\n    "autoRevalidation": false\n  }\n')),(0,s.kt)("p",null,"By convention, you should name that directory after the network type: ",(0,s.kt)("inlineCode",{parentName:"p"},"mainnet")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"testnet"),"."),(0,s.kt)("p",null,"Another important directory is the ",(0,s.kt)("inlineCode",{parentName:"p"},"snapshots")," directory.  You can control the ",(0,s.kt)("inlineCode",{parentName:"p"},"snapshots")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"snapshots")," section of the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.json")," file, specifically the ",(0,s.kt)("inlineCode",{parentName:"p"},"fullPath")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"deltaPath")," keys:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"snapshots": {\n    "interval": 50,\n    "fullPath": "snapshots/mainnet/full_snapshot.bin",\n    "deltaPath": "snapshots/mainnet/delta_snapshot.bin",\n    "deltaSizeThresholdPercentage": 50.0,\n    "downloadURLs": [\n      {\n        "full": "https://chrysalis-dbfiles.iota.org/snapshots/hornet/latest-full_snapshot.bin",\n        "delta": "https://chrysalis-dbfiles.iota.org/snapshots/hornet/latest-delta_snapshot.bin"\n      },\n      {\n        "full": "https://cdn.tanglebay.com/snapshots/mainnet/full_snapshot.bin",\n        "delta": "https://cdn.tanglebay.com/snapshots/mainnet/delta_snapshot.bin"\n      }\n    ]\n')),(0,s.kt)("p",null,"You should apply the same convention as with the database engine, and name the directories after the network type: ",(0,s.kt)("inlineCode",{parentName:"p"},"mainnet")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"testnet"),"."),(0,s.kt)("p",null,"Here is the full overview of all files and directories that are leveraged by the Hornet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},".\n\u251c\u2500\u2500 config.json\n\u251c\u2500\u2500 hornet              <EXECUTABLE>\n\u251c\u2500\u2500 p2pstore\n\u2502\xa0\xa0 \u251c\u2500\u2500 [...files]\n\u251c\u2500\u2500 snapshots           <SNAPSHOT DIR>\n\u2502\xa0\xa0 \u2514\u2500\u2500 testnet\n\u2502\xa0\xa0     \u251c\u2500\u2500 delta_snapshot.bin\n\u2502\xa0\xa0     \u2514\u2500\u2500 full_snapshot.bin\n\u2514\u2500\u2500 testnetdb           <DB DIR>\n    \u251c\u2500\u2500 [...db files]\n")),(0,s.kt)("h2",{id:"plugins"},"Plugins"),(0,s.kt)("p",null,"Hornet can be extended by plugins. You can control plugins using the ",(0,s.kt)("inlineCode",{parentName:"p"},"node")," section in the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.json")," file, specifically ",(0,s.kt)("inlineCode",{parentName:"p"},"disablePlugins")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"enablePlugins")," keys:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"node": {\n    "alias": "Mainnet",\n    "profile": "auto",\n    "disablePlugins": [],\n    "enablePlugins": []\n  },\n')),(0,s.kt)("p",null,"You can also control plugins using the ",(0,s.kt)("a",{parentName:"p",href:"/hornet/post_installation/post_installation#Dashboard"},"Dashboard/web interface"),"."),(0,s.kt)("h2",{id:"spammer"},"Spammer"),(0,s.kt)("p",null,"Hornet integrates a lightweight spamming plugin that spams the network with messages. The IOTA network is based on Directed Acyclic Graph. Therefore, new incoming messages are connected to previous messages (tips). It is healthy for the network to maintain some level of message rate."),(0,s.kt)("p",null,"The Spammer plugin allows your node to send a number of data messages at regular interval. You can set the interval with the ",(0,s.kt)("inlineCode",{parentName:"p"},"mpsRateLimit")," key, which is the number of messages per second (TPS) that the plugin should try to send."),(0,s.kt)("p",null,"For example, value ",(0,s.kt)("inlineCode",{parentName:"p"},'"mpsRateLimit": 0.1')," would mean to send 1 message every 10 seconds."),(0,s.kt)("p",null,"To enable this plugin, you will need to change the default configuration, as it is disabled by default."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},' "spammer": {\n    "message": "IOTA - A new dawn",\n    "index": "HORNET Spammer",\n    "indexSemiLazy": "HORNET Spammer Semi-Lazy",\n    "cpuMaxUsage": 0.8,\n    "mpsRateLimit": 0.0,\n    "workers": 0,\n    "autostart": false\n  }\n')),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This plugin can be also leveraged during a spamming event during which the community tests the throughput of the network."))),(0,s.kt)("h2",{id:"snapshots"},"Snapshots"),(0,s.kt)("p",null,"Your node's ledger accumulates many messages, which uses a significant disk capacity over time. This section discusses how to configure local snapshots to prune old transactions from your node's database and create backup snapshot files."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},' "snapshots": {\n    "interval": 50,\n    "fullPath": "snapshots/mainnet/full_snapshot.bin",\n    "deltaPath": "snapshots/mainnet/delta_snapshot.bin",\n    "deltaSizeThresholdPercentage": 50.0,\n    "downloadURLs": [\n      {\n        "full": "https://chrysalis-dbfiles.iota.org/snapshots/hornet/latest-full_snapshot.bin",\n        "delta": "https://chrysalis-dbfiles.iota.org/snapshots/hornet/latest-delta_snapshot.bin"\n      },\n      {\n        "full": "https://cdn.tanglebay.com/snapshots/mainnet/full_snapshot.bin",\n        "delta": "https://cdn.tanglebay.com/snapshots/mainnet/delta_snapshot.bin"\n      }\n    ]\n  },\n  "pruning": {\n    "milestones": {\n      "enabled": false,\n      "maxMilestonesToKeep": 60480\n    },\n    "size": {\n      "enabled": true,\n      "targetSize": "30GB",\n      "thresholdPercentage": 10.0,\n      "cooldownTime": "5m"\n    },\n    "pruneReceipts": false\n  },\n')),(0,s.kt)("h3",{id:"snapshot-pruning"},"Snapshot Pruning"),(0,s.kt)("p",null,"During a snapshot, Hornet may delete messages from the ledger if they were confirmed by an old milestone. In other words, the term ",(0,s.kt)("em",{parentName:"p"},"pruning")," means the deletion of the old history from the node database."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If you want to enable pruning, you should set the ",(0,s.kt)("inlineCode",{parentName:"li"},"pruning.milestones.enabled")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"pruning.size.enabled")," keys to ",(0,s.kt)("em",{parentName:"li"},"enabled"),"."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"pruning.milestones.maxMilestonesToKeep")," defines how far back from the current confirmed milestone should be pruned."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"pruning.size.targetSize")," defines the maximum database size.  Old data will be pruned.")),(0,s.kt)("p",null,"There are two types of snapshots:"),(0,s.kt)("h4",{id:"delta-snapshots"},"Delta snapshots"),(0,s.kt)("p",null,"A delta snapshot points to a specific full snapshot, meaning a delta snapshot consists of the changes since the last full snapshot."),(0,s.kt)("h4",{id:"full-snapshots"},"Full snapshots"),(0,s.kt)("p",null,"The full snapshot includes the whole ledger state to a specific milestone, and a solid entry point."),(0,s.kt)("h3",{id:"how-to-work-with-snapshots"},"How to Work With Snapshots"),(0,s.kt)("p",null,"If you are running a Hornet node for the first time, you will need to start it with a full-snapshot. Hornet downloads it for you automatically from trusted sources."),(0,s.kt)("p",null,"Additionally, you can start Hornet with a specific delta snapshot using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Hornet")," tools:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"hornet tool\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"snap-gen")," Generates an initial snapshot for a private network."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"snap-merge")," Merges a full and delta snapshot into an updated full snapshot."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"snap-info")," Outputs information about a snapshot file.")))}h.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=a.createContext({}),p=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(r.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(t),m=o,c=h["".concat(r,".").concat(m)]||h[m]||u[m]||s;return t?a.createElement(c,i(i({ref:n},d),{},{components:t})):a.createElement(c,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=h;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<s;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);