(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{221:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"creating-an-entity-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-entity-package"}},[t._v("#")]),t._v(" Creating an Entity Package")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("Entity Packages are only required at the beginning of a network. If the network\nis already running then this will no longer be used")])]),t._v(" "),s("p",[t._v("In order to join at the beginning of The Quest (our staking competition), or at\nthe beginning of any network (including Oasis Mainnet), we require that you send\nan Entity Package so that we can create the genesis document for a either\nnetwork.")]),t._v(" "),s("h2",{attrs:{id:"details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#details"}},[t._v("#")]),t._v(" Details")]),t._v(" "),s("p",[t._v("To create an Entity Package you must create a tarball ("),s("code",[t._v(".tar.gz")]),t._v(") that contains\nthe following files:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("entity/entity_genesis.json")]),t._v(" - This is the "),s("code",[t._v("entity_genesis.json")]),t._v(" from the\nentity you initialized.")]),t._v(" "),s("li",[s("code",[t._v("entity/entity.json")]),t._v(" - This is the "),s("code",[t._v("entity.json")]),t._v(" file from the entity you\ninitialized.")]),t._v(" "),s("li",[s("code",[t._v("node/node_genesis.json")]),t._v(" - This is the "),s("code",[t._v("node_genesis.json")]),t._v(" from the node you\ninitialized."),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("During genesis creation we will only accept a single node.")])])])]),t._v(" "),s("p",[t._v("The following commands should be executed on your local system, where you\n"),s("RouterLink",{attrs:{to:"/operators/joining-the-testnet.html#creating-your-entity"}},[t._v("initialized your Entity and Node")]),t._v(":")],1),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p package/entity package/node\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /localhostdir/entity/*.json package/entity\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /localhostdir/node/node_genesis.json package/node\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" package "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zcvf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("YOUR-GITHUB-USERNAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("-entity.tar.gz entity node\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("If possible, please use the same GitHub handle to submit your Entity Package as\nyou used to "),s("RouterLink",{attrs:{to:"/operators/the-quest-rules.html"}},[t._v("sign the waiver to join The Quest")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"submitting-your-entity-package-for-the-quest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submitting-your-entity-package-for-the-quest"}},[t._v("#")]),t._v(" Submitting Your Entity Package (For The Quest)")]),t._v(" "),s("p",[t._v("To submit your Entity Package, we've created a repository that will consume and\nvalidate the Entity packages used in The Quest.")]),t._v(" "),s("ol",[s("li",[t._v("Fork the "),s("a",{attrs:{href:"https://github.com/oasislabs/the-quest-entities",target:"_blank",rel:"noopener noreferrer"}},[t._v("oasislabs/the-quest-entities"),s("OutboundLink")],1),t._v(" repository.")]),t._v(" "),s("li",[t._v("Add your Entity Package to the "),s("code",[t._v("entities/")]),t._v(" directory of the repository.")]),t._v(" "),s("li",[t._v("Create a pull request against the "),s("code",[t._v("master")]),t._v(" branch of the\n"),s("a",{attrs:{href:"https://github.com/oasislabs/the-quest-entities",target:"_blank",rel:"noopener noreferrer"}},[t._v("oasislabs/the-quest-entities"),s("OutboundLink")],1),t._v(" repository.\nOnce your Entity Package passes all validation checks we will handle the\nmerging of your pull request.")])]),t._v(" "),s("p",[t._v("You can see an example of a submission in "),s("a",{attrs:{href:"https://github.com/oasislabs/the-quest-entities/pull/2",target:"_blank",rel:"noopener noreferrer"}},[t._v("this\nPR"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("If there are any issues, you can always resubmit your entity package.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);