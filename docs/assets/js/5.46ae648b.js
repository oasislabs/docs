(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{190:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("span",{staticStyle:{display:"block","font-size":"1.5em"}},[e._v("Welcome to the Oasis developer documentation!")])]),e._v(" "),a("h2",{attrs:{id:"what-s-new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new","aria-hidden":"true"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),a("p",[e._v("At Oasis Labs we’re building a platform that brings the benefits of confidentiality and decentralized computing to developers irrespective of their experience with blockchain technology.\nTo make our platform more accessible, our next release, includes a few fundamental changes to the core experience with our new Oasis Development SDK.\nAlong with this release, we're also launching an upgraded developer network: Devnet 2.0.")]),e._v(" "),a("p",[e._v("Our new development experience allows seasoned blockchain developers, developers learning to build on blockchain platforms, and even cloud developers, to seamlessly build and take advantage of integrity, confidentiality, and privacy built into the Oasis Network.")]),e._v(" "),a("p",[e._v("Thanks to all the developers who provided meaningful feedback via phone calls, Gitter, GitHub and more—your feedback  has been critical to understanding how we can make the platform better.")]),e._v(" "),a("p",[e._v("Here’s a summary of what’s changing:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Features")]),e._v(" "),a("th",[e._v("Devnet 1.0")]),e._v(" "),a("th",[e._v("Devnet 2.0")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Nomenclature")]),e._v(" "),a("td",[e._v("Smart Contract")]),e._v(" "),a("td",[e._v("Service")])]),e._v(" "),a("tr",[a("td",[e._v("Runtime")]),e._v(" "),a("td",[e._v("WASM, EVM")]),e._v(" "),a("td",[e._v("WASM (+WASI), EVM")])]),e._v(" "),a("tr",[a("td",[e._v("Solidity")]),e._v(" "),a("td",[e._v("Ethereum standard")]),e._v(" "),a("td",[e._v("Ethereum standard")])]),e._v(" "),a("tr",[a("td",[e._v("Rust")]),e._v(" "),a("td",[e._v("–")]),e._v(" "),a("td",[e._v("oasis-rs v0.2")])]),e._v(" "),a("tr",[a("td",[e._v("Local dev tools")]),e._v(" "),a("td",[e._v("contract-kit, Truffle")]),e._v(" "),a("td",[e._v("oasis-cli")])]),e._v(" "),a("tr",[a("td",[e._v("Deployment tools")]),e._v(" "),a("td",[e._v("Web3 gatway")]),e._v(" "),a("td",[e._v("oasis-gateway")])]),e._v(" "),a("tr",[a("td",[e._v("Platform credits")]),e._v(" "),a("td",[e._v("Faucet")]),e._v(" "),a("td",[e._v("Auto-funding via"),a("br"),e._v("Oasis Dashboard")])]),e._v(" "),a("tr",[a("td",[e._v("Dashboard")]),e._v(" "),a("td",[e._v("• External block explorer"),a("br"),e._v("• Per-contract analytics"),a("br"),e._v("• Google SSO")]),e._v(" "),a("td",[e._v("• Oasis Explorer"),a("br"),e._v("• Project-wide analytics"),a("br"),e._v("• SSO with Google,"),a("br"),e._v("   Github, and WeChat")])])])]),e._v(" "),a("h3",{attrs:{id:"from-smart-contracts-to-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-smart-contracts-to-services","aria-hidden":"true"}},[e._v("#")]),e._v(" From Smart Contracts to Services")]),e._v(" "),a("p",[e._v("Throughout our updated documentation you’ll notice that we now refer to contracts as services, starting in this release.\nWe would like to think of smart contracts as services that can be deployed and interacted with.\nA service provides a well-defined piece of functionality with application backends composed of a single service or multiple interacting services.\nFor example, a service may be a single-use smart contract to execute an atomic trade between two tokens, or a set of interacting smart contracts that support holding collateralized debt positions.")]),e._v(" "),a("h3",{attrs:{id:"new-devnet-new-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-devnet-new-tools","aria-hidden":"true"}},[e._v("#")]),e._v(" New Devnet, New Tools")]),e._v(" "),a("p",[a("img",{attrs:{src:"/whats_new/system_diagram.png",alt:"New devnet flow"}})]),e._v(" "),a("p",[e._v("Oasis Dashboard and Oasis CLI are frontend tools to manage services on the Oasis Network.\nWe are introducing Oasis Client SDK and Oasis Gateway to simplify interacting with the Oasis Network and the services deployed on the Oasis Network.")]),e._v(" "),a("h4",{attrs:{id:"write-services-using-rust"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-services-using-rust","aria-hidden":"true"}},[e._v("#")]),e._v(" Write Services Using Rust")]),e._v(" "),a("p",[e._v("With the new SDK, developers will be able to use "),a("a",{attrs:{href:"https://github.com/oasislabs/oasis-rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("oasis-rs"),a("OutboundLink")],1),e._v(" to write and test their contracts using the Rust toolchain.\noasis-rs hides mostly hides blockchain specific programming patterns, so that developers can focus on rapid, safe application development.")]),e._v(" "),a("h4",{attrs:{id:"build-apps-using-oasis-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-apps-using-oasis-js","aria-hidden":"true"}},[e._v("#")]),e._v(" Build Apps Using Oasis.js")]),e._v(" "),a("p",[e._v("We have a new client, "),a("a",{attrs:{href:"https://github.com/oasislabs/oasis.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("oasis.js"),a("OutboundLink")],1),e._v(", for deploying and interacting with services.\nThe new client works with the new developer gateway to support confidential transactions and replaces web3c that was used prior to this release.\nCompared to previous client libraries, oasis.js is easier to use because it is a simpler RPC API and more secure because it uses Deoxys II, a constant-time authenticated encryption primitive that provides stronger security properties than those provided by web3c (and is faster, to boot!).")]),e._v(" "),a("h4",{attrs:{id:"platform-credits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platform-credits","aria-hidden":"true"}},[e._v("#")]),e._v(" Platform Credits")]),e._v(" "),a("p",[e._v("Prior to this release, the developer flow for funds to deploy and run transactions was by visiting our faucet and funding a wallet.\nThis has been replaced by an auto-funding model that automatically funds each developer up to 1 DEV a day with automatic top-off.\nThis reduces friction, taking us a step closer to making our platform accessible to both blockchain and non-blockchain developers.\nDevelopers who need more additional funds can send a request to "),a("a",{attrs:{href:"mailto:support@oasislabs.com"}},[e._v("support@oasislabs.com")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"streamline-deployment-with-the-developer-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#streamline-deployment-with-the-developer-gateway","aria-hidden":"true"}},[e._v("#")]),e._v(" Streamline Deployment With the Developer Gateway")]),e._v(" "),a("p",[e._v("The new developer gateway supports the new client and exposes an API that can be used by developers to create a public API to consume their deployed services.")]),e._v(" "),a("h4",{attrs:{id:"byo-llvm-frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#byo-llvm-frontend","aria-hidden":"true"}},[e._v("#")]),e._v(" BYO LLVM Frontend")]),e._v(" "),a("p",[e._v("Starting with this release we have a new WASM runtime with support for the WebAssembly System Interface (WASI).\nUsing a WASI-based WASM environment not only gives us the sandboxing abilities inherent to WASM, but also allows developers to port \"legacy\" applications as long as they can use the WASI libc.\nDon't like Rust? That's okay ("),a("em",[e._v("sob")]),e._v(") you can use C, C++, Zig, and others!")]),e._v(" "),a("h4",{attrs:{id:"gain-insight-through-the-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gain-insight-through-the-dashboard","aria-hidden":"true"}},[e._v("#")]),e._v(" Gain Insight Through the Dashboard")]),e._v(" "),a("p",[e._v("With this release, we have made multiple refinements to improve user experience on the Dashboard:")]),e._v(" "),a("ul",[a("li",[e._v("simpler flow to upload and deploy new services")]),e._v(" "),a("li",[e._v("project-level analytics of active users and cost based on recent usage")]),e._v(" "),a("li",[e._v("a new Oasis Explorer to debug transactions within the dashboard")])]),e._v(" "),a("p",[e._v("This is the first step in a series of releases that will turn the dashboard into a one-stop shop for understanding the usage of developers' deployed services.")]),e._v(" "),a("h4",{attrs:{id:"bid-farewell-to-confidential-solidity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bid-farewell-to-confidential-solidity","aria-hidden":"true"}},[e._v("#")]),e._v(" Bid Farewell to Confidential Solidity")]),e._v(" "),a("p",[e._v("In this release we are deprecating web3c.\nAs a result, Solidity contracts will no longer have the same confidentiality guarantees going forward.\nOtherwise, all Solidity contracts will be non-confidential while continuing to benefit from better performance compared to other Solidity platforms.\nExisting services and clients using web3 will continue to work in Devnet 2.0 against the web3 gateway.\nFor future Ethereum contracts, we recommend either web3.js or ether.js.")]),e._v(" "),a("h3",{attrs:{id:"migrating-existing-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-existing-services","aria-hidden":"true"}},[e._v("#")]),e._v(" Migrating Existing Services")]),e._v(" "),a("ul",[a("li",[e._v("After Devnet 2.0 is launched, migrate your contracts to use the new runtime and re-deploy on Devnet 2.0 by September 30.")]),e._v(" "),a("li",[e._v("Devnet 1.0 will no longer be supported after September 30.")]),e._v(" "),a("li",[e._v("Devnet 2.0 deployment and our new flow will work end-to-end starting July 19, our Beta release.")]),e._v(" "),a("li",[e._v("For all new development, use our new libraries.")])]),e._v(" "),a("h4",{attrs:{id:"migration-timelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-timelines","aria-hidden":"true"}},[e._v("#")]),e._v(" Migration Timelines")]),e._v(" "),a("h5",{attrs:{id:"july"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#july","aria-hidden":"true"}},[e._v("#")]),e._v(" July")]),e._v(" "),a("ul",[a("li",[e._v("Beta Release in July")]),e._v(" "),a("li",[e._v("Provide early feedback on this latest release.")]),e._v(" "),a("li",[e._v("Use the new toolchain to build and deploy services.")])]),e._v(" "),a("h5",{attrs:{id:"august"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#august","aria-hidden":"true"}},[e._v("#")]),e._v(" August")]),e._v(" "),a("ul",[a("li",[e._v("Launch Devnet 2.0 in August.")]),e._v(" "),a("li",[e._v("Dashboard upgrade supporting Devnet 2.0 runtime. Dashboard 2.0 will support deploying services using new runtime only")])]),e._v(" "),a("p",[a("strong",[e._v("Legacy support for 60 days")]),e._v(":\nLegacy contracts are served through the old Dashboard. A link will be available from the main Dashboard for up to 2 months.\nDuring this time, contracts deployed on Devnet 1.0 and their state will remain accessible.\nWe encourage developers to migrate their contracts to our new platform in this time\nDevnet 2.0 will have fresh state and state maintained in Devnet 1.0 is non-portable")]),e._v(" "),a("h5",{attrs:{id:"september-30"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#september-30","aria-hidden":"true"}},[e._v("#")]),e._v(" September 30")]),e._v(" "),a("ul",[a("li",[e._v("Old Dashboard is sunset.")]),e._v(" "),a("li",[e._v("Devnet 1.0 is sunset.")])]),e._v(" "),a("h3",{attrs:{id:"looking-forward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#looking-forward","aria-hidden":"true"}},[e._v("#")]),e._v(" Looking Forward")]),e._v(" "),a("p",[e._v("Over the next few months, we are heavily focusing on increasing ease of use and efficiency for developers.\nHere are a few things that are on our priority list to drive this goal.")]),e._v(" "),a("h4",{attrs:{id:"additional-language-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-language-support","aria-hidden":"true"}},[e._v("#")]),e._v(" Additional Language Support")]),e._v(" "),a("p",[e._v("With the change to WASI for the system interface in our WASM runtime, we have the ability to support languages that can be compiled to WASI.\nhis opens the possibility to support languages like C, C++, JavaScript, and Go.\nIf you have a specific need for your use-case, please send us a note at "),a("a",{attrs:{href:"mailto:devrel@oasislabs.com"}},[e._v("devrel@oasislabs.com")]),e._v(" to help us prioritize.")]),e._v(" "),a("h3",{attrs:{id:"enhancements-to-the-local-developer-toolchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enhancements-to-the-local-developer-toolchain","aria-hidden":"true"}},[e._v("#")]),e._v(" Enhancements to the Local Developer Toolchain")]),e._v(" "),a("p",[e._v("The local chain enables testing of services with state. We have a number of additions planned for the future including,")]),e._v(" "),a("ul",[a("li",[e._v("more precise cost profiling of services")]),e._v(" "),a("li",[e._v("enhancements to measure additional cost for confidential services")])]),e._v(" "),a("h3",{attrs:{id:"wallet-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wallet-management","aria-hidden":"true"}},[e._v("#")]),e._v(" Wallet Management")]),e._v(" "),a("p",[e._v("Current end-user flows in blockchain have been clunky and limited because of existing wallets. Typically, users end up self-authenticating to the blockchain and paying for usage by signing the transaction with a single wallet key.\ne are exploring new models that help developers build better end-user engagement.")]),e._v(" "),a("p",[e._v("We're working on updates to the oasis-gateway, where the identity for the end-user would be separated from the identity for transaction payment.\nhis allows hybrid models where different wallets can be used to identify the end user and to pay for the transaction.")]),e._v(" "),a("p",[e._v("Stay tuned for more on this feature soon.")]),e._v(" "),a("h3",{attrs:{id:"launching-a-public-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launching-a-public-testnet","aria-hidden":"true"}},[e._v("#")]),e._v(" Launching a Public Testnet")]),e._v(" "),a("p",[e._v("Over the course of the next two quarters we expect to deploy a Public Testnet and allow more developers to deploy nodes on our network.\nore on this to come in future releases and blog posts.")]),e._v(" "),a("h3",{attrs:{id:"feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feedback","aria-hidden":"true"}},[e._v("#")]),e._v(" Feedback")]),e._v(" "),a("p",[e._v("Lastly, our priorities are driven by developer needs and would love to hear from you.\nIf there are any particular needs for your use-cases that you would like to see in future releases, please reach out to us at "),a("a",{attrs:{href:"mailto:devrel@oasislabs.com"}},[e._v("devrel@oasislabs.com")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"where-next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-next","aria-hidden":"true"}},[e._v("#")]),e._v(" Where Next")]),e._v(" "),a("ul",[a("li",[e._v("**"),a("strong",[e._v("NEW**")]),e._v(" "),a("a",{attrs:{href:"https://coinlist.co/build/ideo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Join the Oasis + IDEO + CoinList Hackathon"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"/overview"}},[e._v("Understand the Oasis Platfom")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/quickstart"}},[e._v("Run through the Quickstart")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/tutorials/ballot"}},[e._v("Complete the tutorials")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/channel/UC35UFPcZ2F1wjPxhPrSsESQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("Watch some Oasis videos"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=s.exports}}]);