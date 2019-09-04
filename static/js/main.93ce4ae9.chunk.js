(window["webpackJsonpethereum-delegated-tx-widget"]=window["webpackJsonpethereum-delegated-tx-widget"]||[]).push([[0],{21:function(e,t,n){e.exports=n(37)},26:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),o=n.n(c),s=(n(26),n(8)),i=n(2),l=n.n(i),u=n(3),d=n(12),p=n(13),f=n(17),m=n(14),g=n(18),b=n(1),h=n(19),v=(n(29),n(5)),w=Object.freeze({chainId:-1,name:"unknown-network"}),k={1:{chainId:1,ensAddress:"0x314159265dd8dbb310642f98f50c066173c1259b",name:"homestead"},3:{chainId:3,ensAddress:"0x112234455c3a32fd11230c42e7bccd4a84e02010",name:"ropsten"},2:{chainId:2,name:"morden"},4:{chainId:4,ensAddress:"0xe7410170f87102DF0055eB195163A03B7F2Bff4A",name:"rinkeby"},5:{chainId:5,ensAddress:"0x112234455c3a32fd11230c42e7bccd4a84e02010",name:"goerli"},42:{chainId:42,name:"kovan"},61:{chainId:61,name:"classic"},62:{chainId:62,name:"classicTestnet"}},E=["http://localhost:8088","https://dapp.ml/delegated-tx-mainnet","https://dapp.ml/delegated-tx"];function O(e){return e?e.slice(0,6)+".."+e.slice(-4):"0x????..????"}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;if(e=e.toString(),/e\+[0-9]+$/.test(e)){var n=+e.match(/[0-9]+$/)[0];e=(e=e.replace(/\./,"").replace(/e\+[0-9]+$/,"")).padEnd(1+n,"0")}return((e=e.padStart(t+1,"0")).substring(0,e.length-t).replace(/^0+/,"")||"0")+"."+e.substr(-t,2)}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=e.split("."),r=n[0]+n[1].padEnd(2,"0");return r.padEnd(r.length+t-2,"0").replace(/^0+/,"")||"0"}function R(e,t,n){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(l.a.mark(function e(t,n,r){var a,c,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.ethersProvider,e.prev=1,"eth_signTypedData"!==n){e.next=9;break}return e.next=5,a.send("eth_signTypedData",[r,t.currentEthereumAccount.toString()]);case 5:return c=e.sent,e.abrupt("return",c);case 9:if("eth_personalSign"!==n){e.next=14;break}return e.next=12,a.send("eth_sign",[r,t.currentEthereumAccount.toString()]);case 12:return o=e.sent,e.abrupt("return",o);case 14:e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(1),e.abrupt("return","");case 19:case"end":return e.stop()}},e,null,[[1,16]])}))).apply(this,arguments)}var N=a.a.createElement("span",null,"In order to use this delegated transactions service, you need to browse this page with"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://metamask.io"},"Metamask wallet")," ","extension or from your"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://trustwallet.com"},"mobile wallet's")," ","embedded DApp browser (if supported)."),A=function(e,t){return a.a.createElement("span",null,"Please, switch your wallet to"," ",a.a.createElement("strong",null,"homestead"===e?"mainnet":e," network")," ","(it is currently on ",t," network).")},D=function(e){return a.a.createElement("span",null,"Unknown network selected in your wallet (",e,"). Please, switch to main network or known testnets (ropsten/kovan)")},C=function(e){return a.a.createElement("span",null,e)},M=function(e){return a.a.createElement("span",null,"Unable to connect to your wallet. ",e)},P=function(e,t){return a.a.createElement("span",null,'Configuration error: unknown or wrong URL parameter "',e,'"="',t,'".')},I=function(e,t){return a.a.createElement("span",null,"Delegated back end error (",e,"): ",t,a.a.createElement("br",null),a.a.createElement("strong",null,a.a.createElement("u",null,"Check your token balance or switch to another account in your wallet")))},q=function(e,t){return a.a.createElement("span",null,"Delegated back end ",e," invalid response: ",t)},S=a.a.createElement("span",null,"Processing, please wait...");function W(e){return B.apply(this,arguments)}function B(){return(B=Object(u.a)(l.a.mark(function e(t){var n,r,a=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",r=a.length>2&&void 0!==a[2]?a[2]:void 0,e.abrupt("return",new Promise(function(e,a){var c=new XMLHttpRequest;c.open(n,t,!0),r&&c.setRequestHeader("Content-Type","application/json"),c.onload=function(){if(4===c.readyState&&c.status>=200&&c.status<300)e(JSON.parse(c.responseText));else{if(!c.responseText)return void a("HTTPCODE ".concat(c.status));try{var t=JSON.parse(c.responseText);return void a(t&&(t.error||t)||"HTTPCODE ".concat(c.status,", ").concat(c.responseText))}catch(n){a(c.responseText)}}},c.onerror=function(){return a("request failed")},c.send(r&&JSON.stringify(r))}));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var T=function(){var e=Object(u.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(l.a.mark(function e(t,n){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(t,"POST",n));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),L=function(e){return e.backEndsByContractReadOnly[e.contractAddress]&&e.backEndsByContractReadOnly[e.contractAddress].length&&e.backEndsByContractReadOnly[e.contractAddress].filter(function(t){return t.networkChainId===e.selectedNetwork.chainId})||[]},_=Object(b.d)(function(e){window.history.replaceState({},document.title,"".concat(window.location.pathname,"?contractAddress=").concat(e.contractAddress,"&functionName=").concat(e.functionName,"&functionArguments=").concat(e.functionArguments.join(",")).concat(e.customBackEndsList.length?"&customBackEnds=".concat(e.customBackEndsList.join(",")):"").concat(e.successRedirectUrl?"&successRedirectUrl=".concat(e.successRedirectUrl):"").concat(e.fixed?"&fixed":""))}),F=Object(b.l)({currentEthereumAccount:"",targetNetwork:k[1],selectedNetwork:w,selectedNetworkNameReadOnly:w.name,ethersProvider:null,globalInfoMessage:null,globalWarningMessage:null,initWarningMessage:N,networkWarningMessage:null,backendWarningMessage:null,contractAddress:"0x82f4ded9cec9b5750fbff5c2185aee35afc16587",contractSymbolReadOnly:"DREAM",contractDecimalsReadOnly:6,functionName:"transfer",functionArguments:["0x17A813dF7322F8AAC5cAc75eB62c0d13B8aea29D","9990000"],fixed:!1,successRedirectUrl:"",customBackEndsList:[],backEndsMeta:[],backEndsByContractReadOnly:{},approvedDelegationRequest:null,approvedDelegationResponse:null,delegationConfirmationRequestPending:!1,get warningMessageReadOnly(){return F.globalWarningMessage||F.initWarningMessage||F.networkWarningMessage||F.backendWarningMessage||!F.backEndsByContractReadOnly[F.contractAddress]&&(e=F.contractAddress,a.a.createElement("span",null,"There is no back end for contract ",O(e)," ","found which supports delegated transactions. If this contract indeed supports delegated transactions, you may add it by contributing to"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ZitRos/ethereum-delegated-tx-widget"},"this project"),"."))||!F.backEndsByContractReadOnly[F.contractAddress].find(function(e){return e.networkChainId===F.selectedNetwork.chainId})&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a.a.createElement("span",null,"Configured back ends support only"," ",a.a.createElement("strong",null,t.map(function(e){return"homestead"===e?"mainnet":e}).join(" or "))," ","network",t.length>1?"s":""," for this contract. Please,"," ","switch your wallet to ",t.length>1?"these":"this"," network",t.length>1?"s":""," (it is currently on ",e," ","network).")}(F.selectedNetwork.name,Array.from(new Set(F.backEndsByContractReadOnly[F.contractAddress].map(function(e){return e.networkName}))));var e}});console.log("state",F);var H=F,z=!1,J=0,Y=Object(b.d)(Object(u.a)(l.a.mark(function e(){var t,n,r,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!H.warningMessageReadOnly&&!z){e.next=2;break}return e.abrupt("return");case 2:return z=!0,t=++J,n=[],e.next=7,Promise.all(L(H).map(function(){var e=Object(u.a)(l.a.mark(function e(t){var r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.url&&t.functions&&t.functions.find(function(e){return e.name===H.functionName})){e.next=3;break}return console.warn("Weird back end ".concat(t.url,", ").concat(JSON.stringify(t,null,4))),e.abrupt("return",null);case 3:return e.prev=3,e.next=6,U("".concat(t.url,"/request"),{contractAddress:H.contractAddress,from:H.currentEthereumAccount,functionName:H.functionName,functionArguments:H.functionArguments});case 6:r=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),n.push([t.url,e.t0]),console.warn("Weird back end, POST ".concat(t.url,"/request:"),e.t0),e.abrupt("return",null);case 14:if(r&&r.request&&r.request.id&&r.request.signatureOptions instanceof Array&&0!==r.request.signatureOptions.length){e.next=17;break}return console.warn("Weird back end ".concat(t.url," response, ").concat(JSON.stringify(r))),e.abrupt("return",null);case 17:return e.abrupt("return",[r.request,t]);case 18:case"end":return e.stop()}},e,null,[[3,9]])}));return function(t){return e.apply(this,arguments)}}()));case 7:if(e.t0=function(e){return!!e},r=e.sent.filter(e.t0),J===t){e.next=11;break}return e.abrupt("return");case 11:if(!(n.length>0&&!H.backendWarningMessage||0===r.length)){e.next=14;break}return Object(b.n)(function(){var e=n.length>0?n[0]:["*","silence"],t=Object(v.a)(e,2),r=t[0],a=t[1];H.backendWarningMessage=I(r,a.toString())}),e.abrupt("return");case 14:a=r.reduce(function(e,t){return t[0].fee<e[0].fee?t:e},r[0]),Object(b.n)(function(){H.backendWarningMessage&&(H.backendWarningMessage=null),a&&(H.approvedDelegationRequest=Object.assign(a[0],{meta:Object(b.p)(a[1])}))});case 16:case"end":return e.stop()}},e)}))),$=Object(b.d)(function(){z=!1,H.backendWarningMessage&&(H.backendWarningMessage=null),H.approvedDelegationRequest&&(H.approvedDelegationRequest=null),Y()});Object(b.m)(H,"warningMessageReadOnly",Y),Object(b.m)(H,"contractAddress",$),Object(b.m)(H,"currentEthereumAccount",$),Object(b.m)(H,"functionArguments",$),Object(b.m)(H,"delegationConfirmationRequestPending",Object(b.d)(Object(u.a)(l.a.mark(function e(){var t,n,r,c,o,s,i,u;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!0===H.delegationConfirmationRequestPending&&H.approvedDelegationRequest){e.next=2;break}return e.abrupt("return");case 2:t=H.fixed,Object(b.n)(function(){return H.fixed=!0}),n=["eth_signTypedData","eth_personalSign"],r=Object(b.p)(H.approvedDelegationRequest.signatureOptions).sort(function(e,t){return(n.indexOf(t.standard)+1||999)-(n.indexOf(e.standard)+1||999)}),o="",s="",i=l.a.mark(function e(){var t,n,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t=c).standard,i=t.dataToSign,e.prev=1,e.next=4,new Promise(function(e,t){Object(b.n)(function(){return H.globalInfoMessage=(e=r.length?function(){return t(new Error("Skipped by user"))}:null,a.a.createElement("span",null,"Please, confirm the signature in your wallet. If nothing happens, try re-opening your wallet.",e?a.a.createElement("span",null," ","You can also try using the"," ",a.a.createElement("a",{href:"#",onClick:e},a.a.createElement("b",null,"next signature standard")),"."):null));var e});try{R(H,n,i).then(e).catch(t)}catch(c){t(c)}});case 4:o=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:if(s=n,!o){e.next=12;break}return e.abrupt("return","break");case 12:case"end":return e.stop()}},e,null,[[1,7]])});case 9:if(!(c=r.pop())){e.next=16;break}return e.delegateYield(i(),"t0",11);case 11:if("break"!==e.t0){e.next=14;break}return e.abrupt("break",16);case 14:e.next=9;break;case 16:if(o){e.next=21;break}return Object(b.n)(function(){var e;H.globalInfoMessage=(e=Object(b.p)(H.approvedDelegationRequest.signatureOptions).map(function(e){return e.standard}),a.a.createElement("span",null,"For some reason, we were unable to get a signature from you. Please, try again. Available signature standards: ",e.join(", "))),H.delegationConfirmationRequestPending=!1,H.fixed=t}),e.abrupt("return");case 21:Object(b.n)(function(){return H.globalInfoMessage=S});case 22:return e.prev=22,e.next=25,U("".concat(H.approvedDelegationRequest.meta.url,"/confirm"),{requestId:H.approvedDelegationRequest.id,signatureStandard:s,signature:o});case 25:u=e.sent,e.next=33;break;case 28:return e.prev=28,e.t1=e.catch(22),Object(b.n)(function(){var n,r;H.globalInfoMessage="",H.globalWarningMessage=(n=H.approvedDelegationRequest.meta.url,r=e.t1+"",a.a.createElement("span",null,"Unable to confirm delegated request. Delegated back end ",n," responds with this error: ",r,a.a.createElement("br",null),a.a.createElement("strong",null,a.a.createElement("u",null,"Check your token balance or switch to another account in your wallet")))),H.delegationConfirmationRequestPending=!1,H.fixed=t}),console.error(e.t1),e.abrupt("return");case 33:Object(b.n)(function(){if(u&&u.result){var e=u.result;e.meta=H.approvedDelegationRequest.meta,H.approvedDelegationResponse=e}else H.globalWarningMessage=I(H.approvedDelegationRequest.meta.url,"Weird back end response: ".concat(JSON.stringify(u)))});case 34:case"end":return e.stop()}},e,null,[[22,28]])}))));var V=Object(b.d)(function(){var e=H.backEndsByContractReadOnly[H.contractAddress];if(e&&0!==e.length&&e[0].constants){var t=e[0].constants;H.contractSymbolReadOnly=t.symbol||H.contractSymbolReadOnly,H.contractDecimalsReadOnly=t.decimals||H.contractDecimalsReadOnly}});Object(b.m)(H,"contractAddress",V),Object(b.m)(H,"backEndsByContractReadOnly",V);var Z=0;function G(){return X.apply(this,arguments)}function X(){return(X=Object(u.a)(l.a.mark(function e(){var t,n,r,a,c,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=H.approvedDelegationResponse,n=t.id,r=t.status,a=t.meta,e.prev=1,e.next=4,T("".concat(a.url,"/status/").concat(n));case 4:c=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),H.globalWarningMessage=q(a.url,e.t0.toString()),e.abrupt("return");case 11:if(c&&c.result){e.next=14;break}return H.globalWarningMessage=q(a.url,"weird response ".concat(c)),e.abrupt("return");case 14:if((o=c.result).status!==r){e.next=17;break}return e.abrupt("return");case 17:o.meta=a,Object(b.d)(function(){H.approvedDelegationResponse=o})();case 19:case"end":return e.stop()}},e,null,[[1,7]])}))).apply(this,arguments)}Object(b.m)(H,"approvedDelegationResponse",Object(b.d)(function(){if(clearInterval(Z),H.approvedDelegationResponse)return"mined"===H.approvedDelegationResponse.status?(H.globalInfoMessage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mainnet";return a.a.createElement("span",null,"Done! Your transaction is mined:"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat("mainnet"===t?"":t+".","etherscan.io/tx/").concat(e)},O(e)))}(H.approvedDelegationResponse.transactionHash,H.selectedNetworkNameReadOnly),void(H.successRedirectUrl&&"string"===typeof H.successRedirectUrl&&window.location.replace(H.successRedirectUrl))):void("failed"!==H.approvedDelegationResponse.status?(H.globalInfoMessage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mainnet";return a.a.createElement("span",null,"Your transaction"," ",e?a.a.createElement("span",{key:"span-swan"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat("mainnet"===t?"":t+".","etherscan.io/tx/").concat(e)},O(e))," "):null,"is on its way! Please wait until it is mined, it might take some time.")}(H.approvedDelegationResponse.transactionHash,H.selectedNetworkNameReadOnly),Z=setInterval(G,1e4)):H.globalWarningMessage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a.a.createElement("span",null,"Unfortunately, delegated transaction ",e," has failed."," ",t?"".concat(t):"This could happen due to request expiration, network conditions or due to failing delegated back end. However, you can retry.")}(H.approvedDelegationResponse.id,H.approvedDelegationResponse.reason))})),Object(b.m)(H,"selectedNetwork",Object(b.d)(function(){H.selectedNetworkNameReadOnly="homestead"===H.selectedNetwork.name?"mainnet":H.selectedNetwork.name}));["contractAddress","functionName","functionArguments","fixed","customBackEndsList","successRedirectUrl"].forEach(function(e){return Object(b.m)(H,e,function(){return _(H)})});var K=n(7),Q=n(15);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach(function(t){Object(K.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ne=Object(Q.parse)(window.location.search.slice(1));Object(b.d)(function(){var e;ne.network&&("mainnet"===ne.network&&(ne.network="homestead"),parseInt(ne.network)===+ne.network?H.targetNetwork=k[ne.network]:H.targetNetwork=Object.values(k).find(function(e){return e.name===ne.network}),H.targetNetwork||(H.targetNetwork=w,H.globalWarningMessage=P("network",ne.network))),ne.contractAddress&&("string"===typeof(e=ne.contractAddress)&&/0x[0-9a-f]{40}/i.test(e)?H.contractAddress=ne.contractAddress:H.globalWarningMessage=P("contractAddress",ne.contractAddress)),ne.functionName&&(H.functionName=ne.functionName),ne.functionArguments&&(H.functionArguments=ne.functionArguments.split(",")),"undefined"!==typeof ne.fixed&&(H.fixed=!0),ne.customBackEnds&&(H.customBackEndsList=ne.customBackEnds.split(",")),"string"===typeof ne.successRedirectUrl&&0!==ne.successRedirectUrl.indexOf("java")&&(H.successRedirectUrl=ne.successRedirectUrl),_(H)})(),Object(b.d)(Object(u.a)(l.a.mark(function e(){var t,n,r,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=function(){Object(b.n)(function(){for(var e,n;r=t.pop()||[],e=(a=Object(v.a)(r,2))[0],n=a[1],r&&e;){var r,a;H.backEndsMeta.push(e),e.contracts&&e.contracts instanceof Array||console.warn("Back end endpoint GET ".concat(n," does not provide contracts[]"));var c=!0,o=!1,s=void 0;try{for(var i,l=(e.contracts||[])[Symbol.iterator]();!(c=(i=l.next()).done);c=!0){var u=i.value;H.backEndsByContractReadOnly=te({},H.backEndsByContractReadOnly,Object(K.a)({},u.address,(H.backEndsByContractReadOnly[u.address]||[]).concat(te({},u,{url:n,networkChainId:e.networkChainId,networkName:e.networkName}))))}}catch(d){o=!0,s=d}finally{try{c||null==l.return||l.return()}finally{if(o)throw s}}}})},r=setInterval(n,250),a=E.concat(H.customBackEndsList).filter(function(e,t,n){return n.indexOf(e)===t}),e.next=6,Promise.all(a.map(function(){var e=Object(u.a)(l.a.mark(function e(n){var r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n;case 2:return n=e.sent,e.prev=3,e.next=6,T(n);case 6:r=e.sent,t.push([r,n]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Back end ".concat(n," responds with error."),e.t0);case 13:case"end":return e.stop()}},e,null,[[3,10]])}));return function(t){return e.apply(this,arguments)}}()));case 6:clearInterval(r),n();case 8:case"end":return e.stop()}},e)})))();n(32);function re(){return a.a.createElement("div",{className:"round"},a.a.createElement("div",{className:"cta"},a.a.createElement("span",{className:"arrow arr1 next"}),a.a.createElement("span",{className:"arrow arr2 next"})))}n(33);function ae(e){var t=e.tokenAddress||"0x82f4ded9cec9b5750fbff5c2185aee35afc16587",n="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/".concat(t,"/logo.png");return a.a.createElement("img",{className:"token-logo-img",src:n,alt:""})}n(34);function ce(){return a.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"16px",height:"16px",viewBox:"0 0 554.2 554.199",className:"warning-icon"},a.a.createElement("path",{fill:"currentColor",d:"M538.5,386.199L356.5,70.8c-16.4-28.4-46.7-45.9-79.501-45.9c-32.8,0-63.1,17.5-79.5,45.9L12.3,391.6 c-16.4,28.4-16.4,63.4,0,91.8C28.7,511.8,59,529.3,91.8,529.3H462.2c0.101,0,0.2,0,0.2,0c50.7,0,91.8-41.101,91.8-91.8 C554.2,418.5,548.4,400.8,538.5,386.199z M316.3,416.899c0,21.7-16.7,38.3-39.2,38.3s-39.2-16.6-39.2-38.3V416 c0-21.601,16.7-38.301,39.2-38.301S316.3,394.3,316.3,416V416.899z M317.2,158.7L297.8,328.1c-1.3,12.2-9.4,19.8-20.7,19.8 s-19.4-7.7-20.7-19.8L237,158.6c-1.3-13.1,5.801-23,18-23H299.1C311.3,135.7,318.5,145.6,317.2,158.7z"}))}n(35);function oe(){return a.a.createElement("svg",{version:"1.1",x:"0px",y:"0px",width:"16px",height:"16px",viewBox:"0 0 23.625 23.625",className:"info-icon"},a.a.createElement("g",null,a.a.createElement("path",{fill:"currentColor",d:"M11.812,0C5.289,0,0,5.289,0,11.812s5.289,11.813,11.812,11.813s11.813-5.29,11.813-11.813 S18.335,0,11.812,0z M14.271,18.307c-0.608,0.24-1.092,0.422-1.455,0.548c-0.362,0.126-0.783,0.189-1.262,0.189 c-0.736,0-1.309-0.18-1.717-0.539s-0.611-0.814-0.611-1.367c0-0.215,0.015-0.435,0.045-0.659c0.031-0.224,0.08-0.476,0.147-0.759 l0.761-2.688c0.067-0.258,0.125-0.503,0.171-0.731c0.046-0.23,0.068-0.441,0.068-0.633c0-0.342-0.071-0.582-0.212-0.717 c-0.143-0.135-0.412-0.201-0.813-0.201c-0.196,0-0.398,0.029-0.605,0.09c-0.205,0.063-0.383,0.12-0.529,0.176l0.201-0.828 c0.498-0.203,0.975-0.377,1.43-0.521c0.455-0.146,0.885-0.218,1.29-0.218c0.731,0,1.295,0.178,1.692,0.53 c0.395,0.353,0.594,0.812,0.594,1.376c0,0.117-0.014,0.323-0.041,0.617c-0.027,0.295-0.078,0.564-0.152,0.811l-0.757,2.68 c-0.062,0.215-0.117,0.461-0.167,0.736c-0.049,0.275-0.073,0.485-0.073,0.626c0,0.356,0.079,0.599,0.239,0.728 c0.158,0.129,0.435,0.194,0.827,0.194c0.185,0,0.392-0.033,0.626-0.097c0.232-0.064,0.4-0.121,0.506-0.17L14.271,18.307z M14.137,7.429c-0.353,0.328-0.778,0.492-1.275,0.492c-0.496,0-0.924-0.164-1.28-0.492c-0.354-0.328-0.533-0.727-0.533-1.193 c0-0.465,0.18-0.865,0.533-1.196c0.356-0.332,0.784-0.497,1.28-0.497c0.497,0,0.923,0.165,1.275,0.497 c0.353,0.331,0.53,0.731,0.53,1.196C14.667,6.703,14.49,7.101,14.137,7.429z"})))}var se=n(20);n(36);function ie(e){var t=e.loading,n=Object(se.a)(e,["loading"]);return a.a.createElement("button",n,[t?a.a.createElement("div",{className:"la-ball-spin-clockwise la-sm",key:"la-first"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)):null].concat(e.children))}var le=n(16);function ue(){return de.apply(this,arguments)}function de(){return(de=Object(u.a)(l.a.mark(function e(){var t,n,r=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:null,n=r.length>1&&void 0!==r[1]?r[1]:function(){},t){e.next=6;break}return e.next=5,pe(n);case 5:t=e.sent;case 6:return e.abrupt("return",new le.providers.Web3Provider(t.currentProvider));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function pe(e){return fe.apply(this,arguments)}function fe(){return(fe=Object(u.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return window.web3=new window.Web3(window.ethereum),e.prev=2,t("Please, allow an access to this page in your wallet"),e.next=6,window.ethereum.enable();case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(2),new Error("You've denied the access to see your account address.");case 11:e.next=18;break;case 13:if(!window.web3){e.next=17;break}window.web3=new window.Web3(window.web3.currentProvider),e.next=18;break;case 17:return e.abrupt("return",null);case 18:return e.abrupt("return",window.web3);case 19:case"end":return e.stop()}},e,null,[[2,8]])}))).apply(this,arguments)}var me=function(){return L(H).map(function(e){return k[e.networkChainId]})},ge=function(){return H.selectedNetwork.chainId===H.targetNetwork.chainId},be=function(){return!H.warningMessageReadOnly&&H.approvedDelegationRequest&&!H.delegationConfirmationRequestPending},he=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={tick:0},n.accountUpdateTimeout=1,n.web3Provider=null,n.tickerInterval=0,n.ticker=function(){H.approvedDelegationRequest&&n.setState({tick:n.state.tick+1})},n.updateFromProvider=Object(b.d)(Object(u.a)(l.a.mark(function e(){var t,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(H.ethersProvider){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,H.ethersProvider.listAccounts();case 4:t=e.sent[0];case 5:return e.next=7,new Promise(function(e,t){return n.web3Provider.version.getNetwork(function(n,r){return n?t(n):e(r)})});case 7:if(r=e.sent,k[r]){e.next=12;break}return Object(b.n)(function(){return H.networkWarningMessage=D(r)}),e.next=12,new Promise(function(e){return setTimeout(e,5e3)});case 12:if(!k[r]){e.next=5;break}case 13:Object(b.n)(function(){H.currentEthereumAccount!==t&&(H.currentEthereumAccount=t),+r!==H.selectedNetwork.chainId&&(H.selectedNetwork=k[r]||w);var e=me().filter(function(e){return e.chainId!==H.targetNetwork.chainId});e.length&&H.targetNetwork.chainId!==e[0].chainId&&(H.targetNetwork=e[0]),ge()?H.networkWarningMessage=null:H.networkWarningMessage||(H.networkWarningMessage=A(H.targetNetwork.name,H.selectedNetwork.name))}),n.accountUpdateTimeout>0&&(n.accountUpdateTimeout=setTimeout(n.updateFromProvider,100));case 15:case"end":return e.stop()}},e)}))),n.componentDidMount=Object(b.d)(Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.tickerInterval=setInterval(n.ticker,1e3),e.prev=1,e.next=4,pe(function(e){return Object(b.n)(function(){return H.initWarningMessage=C(e)})});case 4:if(n.web3Provider=e.sent,n.web3Provider){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,ue(n.web3Provider);case 9:return t=e.sent,Object(b.n)(function(){H.initWarningMessage=null,H.ethersProvider=t}),e.next=13,n.updateFromProvider();case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),Object(b.n)(function(){return H.initWarningMessage=M(e.t0.toString())}),console.error(e.t0);case 19:case"end":return e.stop()}},e,null,[[1,15]])}))),n.actionButtonClick=Object(b.d)(Object(u.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(be()){e.next=2;break}return e.abrupt("return");case 2:Object(b.n)(function(){return H.delegationConfirmationRequestPending=!0});case 3:case"end":return e.stop()}},e)}))),n.onRecipientChange=Object(b.d)(function(e){var t=e.target.value;return H.functionArguments=[t].concat(Object(s.a)(H.functionArguments.slice(1)))}),n.onValueChange=Object(b.d)(function(e){var t=e.target.value;return H.functionArguments=[H.functionArguments[0],x(t,H.contractDecimalsReadOnly)].concat(Object(s.a)(H.functionArguments.slice(2)))}),n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.accountUpdateTimeout),clearInterval(this.tickerInterval),this.accountUpdateTimeout=0}},{key:"render",value:function(){var e=O(H.currentEthereumAccount),t=H.contractAddress,n=H.contractSymbolReadOnly,r=H.functionName,c=H.functionArguments,o=H.contractDecimalsReadOnly,s=H.approvedDelegationRequest,i=c&&c.length&&c[0]||"0x6f8103606b649522aF9687e8f1e7399eff8c4a6B",l=y(c&&c.length&&c[1]||Math.pow(10,o).toString(),o),u=s&&s.fees&&s.fees.length&&s.fees[0]||{},d=y(u.value||"0",u.decimals||o),p=H.warningMessageReadOnly,f=!p&&(!H.approvedDelegationRequest||H.delegationConfirmationRequestPending),m=60*(new Date).getTimezoneOffset()*1e3,g=Date.now()-m,b=H.approvedDelegationRequest?new Date(Math.max(m,new Date(H.approvedDelegationRequest.expiresAt).getTime()-g)).toTimeString().replace(/\s.*$/,"").replace(/^00:/,""):"";return a.a.createElement("div",{className:"app"},a.a.createElement("section",null),a.a.createElement("section",{className:"app-body"},a.a.createElement("h1",{className:"head-title"},"transfer"===r?"Transfer":"approveAndCall"===r?"Approve and Call":r),a.a.createElement("div",{className:"token-info"},H.fixed?l:a.a.createElement("input",{value:l,onChange:this.onValueChange,className:"bold",style:{width:"".concat(17*(l.length-1)+5,"px")}})," ",a.a.createElement(ae,{tokenAddress:t})," ",n),a.a.createElement("div",{className:"sender-and-recipient-block"},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{value:e,disabled:!0})),a.a.createElement("div",{className:"address-sub"},"Sender (You)")),a.a.createElement(re,null),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{value:i,onChange:this.onRecipientChange,disabled:H.fixed,className:"expandable"}),a.a.createElement("div",{className:"address-sub"},"approveAndCall"===r?"Contract":"Recipient")))),a.a.createElement("div",{className:"spec-table"},a.a.createElement("div",{className:"spec-table-row"},a.a.createElement("div",null,"Fee for Sender"),a.a.createElement("div",{className:"strong"},d," ",a.a.createElement(ae,{tokenAddress:t})," ",n)),H.approvedDelegationRequest?a.a.createElement("div",{className:"spec-table-row"},a.a.createElement("div",null,"Fee Expires In"),a.a.createElement("div",null,b)):null,a.a.createElement("div",{className:"spec-table-row"},a.a.createElement("div",null,"Confirmation Time"),a.a.createElement("div",null,"~3 minutes"))),(p||H.globalInfoMessage)&&a.a.createElement("div",{className:"warning-message"+(!p&&H.globalInfoMessage?" info":"")},p?a.a.createElement(ce,null):a.a.createElement(oe,null)," ",p||H.globalInfoMessage),H.approvedDelegationResponse&&"mined"===H.approvedDelegationResponse.status?null:a.a.createElement("div",{className:"center"},a.a.createElement(ie,{className:be()?"":"unavailable",loading:f,onClick:this.actionButtonClick},!H.approvedDelegationResponse||"new"!==H.approvedDelegationResponse.status&&"mining"!==H.approvedDelegationResponse.status&&"confirmed"!==H.approvedDelegationResponse.status?"Confirm":"Waiting"))),a.a.createElement("section",{className:"app-footer"},"Universal Delegated Transactions for Ethereum",a.a.createElement("br",null),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ZitRos/ethereum-delegated-tx-widget"},"Source Code")," ","|"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ZitRos/ethereum-delegated-tx-widget/LICENSE"},"License")))}}]),t}(a.a.PureComponent),ve=Object(h.a)(he);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.93ce4ae9.chunk.js.map