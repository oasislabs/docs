(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{240:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started-with-web3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-web3"}},[t._v("#")]),t._v(" Getting Started with Web3")]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("p",[t._v("This document will walk you through how to use Web3 on Oasis, including how to connect your Web3-enabled wallet and interact with smart contracts through Web3.\nFor tutorials on deploying contracts on Web3, visit our other docs ("),a("RouterLink",{attrs:{to:"/tutorials/tutorials/deploy-solidity.html"}},[t._v("Solidity")]),t._v(" and "),a("RouterLink",{attrs:{to:"/tutorials/tutorials/deploy-vyper.html"}},[t._v("Vyper")]),t._v(").")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#intro-to-web3"}},[t._v("Intro to Web3")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#connecting-wallets"}},[t._v("Connecting Wallets")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#getting-funded"}},[t._v("Getting Funded")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#connecting-to-oasisjs"}},[t._v("Connecting to Oasis.js")])])]),t._v(" "),a("h2",{attrs:{id:"intro-to-web3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro-to-web3"}},[t._v("#")]),t._v(" Intro to Web3")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web3.js"),a("OutboundLink")],1),t._v(" is a Javascript module used by many Ethereum developers to deploy and interact with deployed smart contracts on various Ethereum networks.\nThe Oasis network fully supports Web3 interactions, so you can use it to deploy your contracts (read the docs for deploying "),a("RouterLink",{attrs:{to:"/tutorials/tutorials/deploy-solidity.html"}},[t._v("Solidity")]),t._v(" and "),a("RouterLink",{attrs:{to:"/tutorials/tutorials/deploy-vyper.html"}},[t._v("Vyper")]),t._v(" contracts) and interact with them.")],1),t._v(" "),a("h3",{attrs:{id:"using-web3-in-an-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-web3-in-an-application"}},[t._v("#")]),t._v(" Using Web3 in an Application")]),t._v(" "),a("p",[t._v("To use Web3, install it as you would any other module.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install web3\n")])])]),a("p",[t._v("You're ready to create an application that interacts with the Oasis network.\nIn your application, you'll need to include two new dependencies.\nThe first is Web3, obviously.\nSecondly, Web3 requires you to specify a "),a("a",{attrs:{href:"https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html#providers",target:"_blank",rel:"noopener noreferrer"}},[t._v("provider"),a("OutboundLink")],1),t._v(".\nA provider can be a "),a("code",[t._v("WebsocketProvider")]),t._v(", "),a("code",[t._v("IpcProvider")]),t._v(" or, in our case, a Hierarchical Deterministic Wallet Provider "),a("code",[t._v("truffle-hdwallet-provider")]),t._v(".\nThis particular provider manages a set of keys derived from a seed.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Web3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HDWalletProvider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'truffle-hdwallet-provider'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Connecting to Local Oasis Chain:")]),t._v(" Initializing the HD Wallet provider requires a seed phrase (or mnemonic) from which it extracts your accounts (private keys and public addresses).\nIt also requires a URL to create a connection through which all communication to the network will be done.\nTo connect to your local "),a("code",[t._v("oasis chain")]),t._v(", use "),a("code",[t._v("http://localhost:8545")]),t._v(" and the "),a("code",[t._v("mnemonic")]),t._v(" provided to you there.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MNEMONIC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'range drive remove bleak mule satisfy mandate east lion minimum unfold ready'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8545'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HDWalletProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MNEMONIC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Connecting to Oasis Devnet:")]),t._v(" To connect to the Oasis Devnet, use the link "),a("code",[t._v("wss://web3.devnet.oasiscloud.io/ws")]),t._v(".\nYou will likely want to connect your own account; do this by providing your mnemonic (if you're using an HD wallet), private key, or array of private keys.\nThe "),a("a",{attrs:{href:"https://dashboard.oasiscloud.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oasis Dashboard"),a("OutboundLink")],1),t._v(" accounts are not compatible with Web3.")]),t._v(" "),a("p",[t._v("To keep your mnemonic or private key secret, instead of including them in your code, you may want to input them at runtime as  environment variables.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MNEMONIC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MNEMONIC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wss://web3.devnet.oasiscloud.io/ws'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HDWalletProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MNEMONIC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('MNEMONIC="<MNEMONIC>" node my_web3_project.js\n')])])]),a("p",[t._v("Finally, create your Web3 instance.\nConventionally, we call it (lowercase) "),a("code",[t._v("web3")]),t._v(", not to be confused with the (uppercase) module "),a("code",[t._v("Web3")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" web3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Web3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Test your connection:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("web3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isListening")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Web3 is connected.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Something went wrong.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("With your web3 instance, you should be able to sign and send transactions without the laborious process of calculating a nonce, creating a raw transaction object, signing it, etc.\nFor example, try querying an account balance and sending tokens from one account to the other:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("web3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendTransaction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" my_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" other_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    web3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBalance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("other_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"connecting-wallets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-wallets"}},[t._v("#")]),t._v(" Connecting Wallets")]),t._v(" "),a("p",[t._v("Oasis supports Web3, so any wallet compatible with Web3 (such as the "),a("a",{attrs:{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Metamask"),a("OutboundLink")],1),t._v(" browser extension) can be used to sign and send transactions.")]),t._v(" "),a("p",[t._v("If you want to use your Metamask wallet, just use your seed phrase as the "),a("code",[t._v("MNEMONIC")]),t._v(" when setting up your provider.\nYou can obtain your seed phrase by going to Settings > Security and Privacy > Reveal Seed Words.\nYou can also send a transaction on a local "),a("code",[t._v("oasis chain")]),t._v(" network directly from the Metamask interface.\nJust select "),a("code",[t._v("Localhost 8545")]),t._v(" from the Networks dropdown menu, then send a transaction like you would normally on the Ethereum network.")]),t._v(" "),a("p",[t._v("For any other wallet, just make sure you are able to provide a mnemonic (if you're using an HD wallet), private key, or array of private keys.\nMost wallets will tell you your mnemonic or private key when you first create your account, and/or let you view it later.\nCheck your wallet provider's docs to see what options you have.")]),t._v(" "),a("p",[t._v("Here is an example with a private key, represented as a string (no need to make it a "),a("code",[t._v("Buffer")]),t._v(").\nNote that your private key should not have the '0x' in front.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// single private key")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" priv_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" provider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HDWalletProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("priv_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// multiple private keys")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" private_keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num_keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" provider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HDWalletProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("private_keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num_keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("h2",{attrs:{id:"getting-funded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-funded"}},[t._v("#")]),t._v(" Getting Funded")]),t._v(" "),a("p",[t._v("Our faucet is now deprecated.\nThe best way to get funded is to email "),a("a",{attrs:{href:"mailto:support@oasislabs.com"}},[t._v("support@oasislabs.com")]),t._v(" with your public address.")]),t._v(" "),a("h2",{attrs:{id:"connecting-to-oasisjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-oasisjs"}},[t._v("#")]),t._v(" Connecting to Oasisjs")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://oasis-labs-oasis-client.readthedocs-hosted.com/en/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("oasis.js")]),a("OutboundLink")],1),t._v(" is our version of Web3, a Javascript SDK for building applications on top of Oasis platform services.\nIt features confidentiality and support for confidential Rust contracts built on the Oasis platform; Web3 does not.\nIn "),a("code",[t._v("oasis.js")]),t._v(", you use a "),a("code",[t._v("wallet")]),t._v(" and a "),a("code",[t._v("gateway")]),t._v(", similarly to how you needed a "),a("code",[t._v("MNEMONIC")]),t._v(" and "),a("code",[t._v("URL")]),t._v(" in Web3.\nAn example using "),a("code",[t._v("oasis.js")]),t._v(" can be found "),a("a",{attrs:{href:"https://oasis-labs-oasis-client.readthedocs-hosted.com/en/latest/examples.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Once you've deployed contracts or sent transactions on an Oasis network via "),a("code",[t._v("Web3")]),t._v(" or "),a("code",[t._v("oasis.js")]),t._v(", everything is accessible from either endpoint, but remember that Web3 interactions do not make the same confidentiality guarantees.")])])}),[],!1,null,null,null);s.default=n.exports}}]);