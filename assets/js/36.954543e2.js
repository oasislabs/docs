(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{236:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"deploying-solidity-contracts-on-oasis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-solidity-contracts-on-oasis"}},[t._v("#")]),t._v(" Deploying Solidity Contracts on Oasis")]),t._v(" "),a("p",[t._v("This tutorial will demonstrate how to deploy Solidity contracts to the Oasis platform using Truffle and Web3.js.\nIt should work for "),a("em",[t._v("any")]),t._v(" Solidity contract.\nFor contracts written in Vyper, see the "),a("router-link",{attrs:{to:"/tutorials/deploy-vyper.html"}},[t._v("Uniswap tutorial")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[t._v("This tutorial assumes that you have "),a("router-link",{attrs:{to:"/quickstart.html#set-up-the-oasis-sdk"}},[t._v("already installed the Oasis toolchain")]),t._v(".\nYour installation was successful if the following command works without error:")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("oasis --version\n")])])]),a("p",[t._v("Using the Oasis toolchain, you can run a local blockchain server, just like you can with "),a("a",{attrs:{href:"https://www.trufflesuite.com/docs/truffle/getting-started/using-truffle-develop-and-the-console",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("truffle develop")]),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://github.com/trufflesuite/ganache-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ganache"),a("OutboundLink")],1),t._v(", as follows:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("oasis chain\n")])])]),a("p",[t._v("This command will spawn a local network with 10 accounts (private keys and public addresses) each funded with 100 DEV (Oasis' equivalent of ether).\nThe output will look something like this:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-09-27 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(":54:21,448 INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("oasis_chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting Oasis "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" chain\nAccounts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" DEV each"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0xb8b3666d8fea887d97ab54f571b8e5020c5c8b58\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0xff8c7955506c8f6ae9df7efbc3a26cc9105e1797\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0x0056b9346d9a64dcdd9d7be4ee3f5cf65940167d\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0x4bbbf0653dab1e8abbe603fe3c4300032ff9224e\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0xb99e5a84415e4bf715efd8a390344d7121015920\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0xfa5c64dbcc09bdceaea11ca1f413c40031fa4412\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0x17ef28e540a7cf63a8cbfd533cbbec530eac356f\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0x223b7e8dda3afeb788259de0bc7bf157c8e18888\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0x5e66f3176cb59205d4897509a11d117ed855502e\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0x07b23940821ea777b9a26e3c8dc3027648236bbf\nPrivate Keys\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0xb5144c6bda090723de712e52b92b4c758d78348ddce9aa80ca8ef51125bfb308\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0x7ec6102f6a2786c03b3daf6ac4772491f33925902326a0d2d83521b964a87402\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0x069f89ed3070c73586672b4d64f08dcc0f91d65dbdd201b27d5949a437035e4a\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0x142b968d9b046c5545ed5d0c97c2f4b89c0ed78e19ec600d2ea8c703231d13f4\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0x1a8722ce2d1f296e73a8a0de6ffecea349197188feb32e949f95f0f5d404db5d\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0xf47bf050ec19b8573b32fda50436526e8c3f5b1c7f260bbdb55d4ca39585d78d\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0x2424da82ad906f131674f05f207af85e7f6046fd9e0b6a4d4f37414c4933ab09\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0x133e548822a035a5db2a43a091146db96f10a5c680d2114145493b921df1b19e\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0xb67377abfa1a229ba56826661736ceca99d2b0be055e84498c7b0847431e4d9d\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0xa08930847a93d725a62f6866afac2642eaebb4d0410610822833b0474871b7b8\nHD Wallet\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\nMnemonic:      range drive remove bleak mule satisfy mandate east lion minimum unfold ready\nBase HD Path:  m/44"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/60'")]),t._v("/0'/0/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("account_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-09-27 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(":54:21,491 INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Listening "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" new connections on "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:8546.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-09-27 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(":54:21,492 INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("oasis_chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Oasis "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" chain is running\n")])])]),a("p",[t._v("Save the Mnemonic; you will need it later.")]),t._v(" "),a("p",[a("em",[t._v("Note")]),t._v(": The port :8546 corresponds to ws. You will need to use the port :8545 for http connections. \nYou might also want to save one of the public addresses to serve as your account to deploy contracts with.\nFor example you can copy-paste an account like so:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" my_address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0xb8b3666d8fea887d97ab54f571b8e5020c5c8b58'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"deploy-using-truffle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-using-truffle"}},[t._v("#")]),t._v(" Deploy Using Truffle")]),t._v(" "),a("p",[t._v("The Oasis Network supports the deployment of Solidity contracts using Truffle, a common tool used by Ethereum developers to compile, test, and deploy smart contracts.\nTruffle is the easiest way to deploy a smart contract; all you really need to do is make sure you have Migrations and edit the Truffle configuration file.")]),t._v(" "),a("h3",{attrs:{id:"truffle-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#truffle-configuration-file"}},[t._v("#")]),t._v(" Truffle Configuration File")]),t._v(" "),a("p",[t._v("The configuration file is typically called "),a("code",[t._v("truffle.js")]),t._v(" or "),a("code",[t._v("truffle-config.js")]),t._v(".\nYou need to add the Truffle HDWallet Provider, a Hierarchical Deterministic (HD) Wallet that uses a mnemonic to extract your keys.\nTake the mnemonic you saved earlier from running "),a("code",[t._v("oasis chain")]),t._v(" and input it here.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HDWalletProvider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'truffle-hdwallet-provider'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MNEMONIC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'range drive remove bleak mule satisfy mandate east lion minimum unfold ready'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Make sure you install the HDWallet Provider:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" truffle-hdwallet-provider\n")])])]),a("p",[t._v("Add the Oasis Network as one of the networks (listed under "),a("code",[t._v("module.exports")]),t._v(") in your configuration file.\nIf you want the default network to be the Oasis Network, call it the development network.\nOtherwise, you will need to specify it with a flag later on.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  networks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    development"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HDWalletProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MNEMONIC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://localhost:8545'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      network_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("If you want to use the Oasis Devnet, you will need to use the following URL:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HDWalletProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MNEMONIC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://web3.devnet.oasiscloud.io'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("If it doesn't exist already, you need to include the version of the Solidity compiler, "),a("code",[t._v("solc")]),t._v(", needed for your particular contracts, which is likely not your installed Truffle's configured default.\nYou'll need the highest version used by the contracts, which is stated at the top (e.g."),a("code",[t._v("pragma solidity ^0.4.24")]),t._v("). Add to "),a("code",[t._v("module.exports")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("compilers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  solc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.4.24'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"migrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrations"}},[t._v("#")]),t._v(" Migrations")]),t._v(" "),a("p",[t._v("Migrations are files that help Truffle deploy your contracts.\nIf your repository is lacking Migrations files, you will need to write some - "),a("a",{attrs:{href:"https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations",target:"_blank",rel:"noopener noreferrer"}},[t._v("these docs"),a("OutboundLink")],1),t._v(" detail how to do so.")]),t._v(" "),a("h3",{attrs:{id:"deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[t._v("#")]),t._v(" Deploy")]),t._v(" "),a("p",[t._v("Compile your contracts:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("truffle compile\n")])])]),a("p",[t._v("Run your migrations and deploy:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("truffle migrate\ntruffle deploy\n")])])]),a("h2",{attrs:{id:"deploy-using-web3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-using-web3"}},[t._v("#")]),t._v(" Deploy Using Web3")]),t._v(" "),a("p",[t._v("The Oasis Network also has support for "),a("a",{attrs:{href:"https://web3js.readthedocs.io/en/v1.2.0/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web3.js"),a("OutboundLink")],1),t._v(", a Javascript module to help build frontends for contracts on Ethereum.\nThis method is more involved, but useful in creating your frontend application.\nOasis also supports "),a("a",{attrs:{href:"https://docs.ethers.io/ethers.js/html/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ethers.js")]),a("OutboundLink")],1),t._v(", which is very similar.")]),t._v(" "),a("p",[t._v("First, you'll want to initialize "),a("code",[t._v("web3")]),t._v(" with a URL and "),a("code",[t._v("truffle-hdwallet-provider")]),t._v(" as the provider - the same one used to deploy on Truffle earlier.\nIf you are using a local Oasis chain, your URL will be "),a("code",[t._v("'http://localhost:8545'")]),t._v(".\nIf you want to use the devnet, the URL will be "),a("code",[t._v("'https://web3.devnet.oasiscloud.io'")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Web3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HDWalletProvider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'truffle-hdwallet-provider'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MNEMONIC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'range drive remove bleak mule satisfy mandate east lion minimum unfold ready'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8545'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for reading files")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HDWalletProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MNEMONIC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" web3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Web3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("When you compile your contract, there should be a JSON representation of the contract in your project's "),a("code",[t._v("./build/contracts")]),t._v(" folder.\nYou need the ABI and bytecode of your contract to deploy it; retrieve it like so:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/file.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" abi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bytecode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bytecode'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Initialize the new contract object. Deploy the contract and save its address.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contract "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("web3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Contract")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bytecode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" my_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Deploy failed with error: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("deployment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Factory deployed successfully, at address: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("deployment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("address"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deployment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Now you can deploy any Solidity contract on Oasis!")])])}),[],!1,null,null,null);s.default=e.exports}}]);