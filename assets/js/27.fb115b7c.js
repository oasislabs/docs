(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{226:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"handling-network-upgrades"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handling-network-upgrades"}},[t._v("#")]),t._v(" Handling Network Upgrades")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("Starting at 00:00 UTC Wednesday, January 23 (2020-01-23T00:00:00Z) the\nOasis Testnet will run through the first coordinated upgrade of The Quest. Steps\non how to upgrade your node during this window are below.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Following this guide when there is no network upgrade will result in you\nlosing your place on the current network.")])]),t._v(" "),s("p",[t._v("The following guide should be used when the network has agreed to do a software\nupgrade.")]),t._v(" "),s("h2",{attrs:{id:"dumping-blockchain-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dumping-blockchain-state"}},[t._v("#")]),t._v(" Dumping Blockchain State")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("Do not stop your "),s("code",[t._v("oasis-node")]),t._v(" process just yet.")])]),t._v(" "),s("p",[t._v("Before an upgrade we will update the "),s("RouterLink",{attrs:{to:"/operators/current-testnet-parameters.html#upgrade-parameters"}},[t._v("Upgrade Parameters")]),t._v(" to specify the block\nheight at which to dump.")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("You must only run the following command "),s("em",[t._v("after")]),t._v(" the "),s("code",[t._v("HEIGHT_TO_DUMP")]),t._v(" block\nheight has been reached on the network.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HEIGHT_TO_DUMP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("height_to_dump"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\noasis-node genesis dump "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -a unix:/serverdir/node/internal.sock "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --genesis.file /serverdir/etc/upgrade-dump.json "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --height "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HEIGHT_TO_DUMP")]),t._v("\n")])])]),s("h2",{attrs:{id:"stopping-your-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stopping-your-node"}},[t._v("#")]),t._v(" Stopping Your Node")]),t._v(" "),s("p",[t._v("This will depend on your process manager. You should kill your "),s("code",[t._v("oasis-node")]),t._v("\nprocess however this is done for your setup.")]),t._v(" "),s("h2",{attrs:{id:"patching-dumped-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#patching-dumped-state"}},[t._v("#")]),t._v(" Patching Dumped State")]),t._v(" "),s("p",[t._v("We will provide a state patch in the "),s("RouterLink",{attrs:{to:"/operators/current-testnet-parameters.html#upgrade-parameters"}},[t._v("Upgrade Parameters")]),t._v(" document that you\ncan apply using the "),s("code",[t._v("jq")]),t._v(" tool. We suggest that you install this on your server\nso that you can do all the upgrade process without having to transfer anything\nonto your local machine. The patched state will update at least the following\nfields:")],1),t._v(" "),s("ul",[s("li",[s("code",[t._v("chain_id")]),t._v(" - This is the chain ID of the network")]),t._v(" "),s("li",[s("code",[t._v("genesis_time")]),t._v(" - We will set this so that the genesis time is consistent\nacross all genesis.json files")]),t._v(" "),s("li",[s("code",[t._v("halt_epoch")]),t._v(" - This is the epoch that the node will stop functioning. We set\nthis to intentionally force an upgrade.")])]),t._v(" "),s("h3",{attrs:{id:"downloading-the-patch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downloading-the-patch"}},[t._v("#")]),t._v(" Downloading the Patch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PATCH_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("url_to_patch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --proto "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=https'")]),t._v(" --tlsv1.2 -sSL "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PATCH_URL")]),t._v(" -o /serverdir/etc/patch.json\n")])])]),s("h3",{attrs:{id:"applying-the-patch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#applying-the-patch"}},[t._v("#")]),t._v(" Applying the Patch")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTICE")]),t._v(" "),s("p",[t._v("There used to be instructions here to upgrade using "),s("code",[t._v("jq")]),t._v(". However, since jq has\na "),s("a",{attrs:{href:"https://github.com/stedolan/jq/issues/369",target:"_blank",rel:"noopener noreferrer"}},[t._v("bug"),s("OutboundLink")],1),t._v(" where it does not handle very\nlarge integers correctly, this method no longer works. We will be posting an\nupdated genesis document during upgrades until we have a better solution.")])]),t._v(" "),s("h2",{attrs:{id:"wiping-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wiping-state"}},[t._v("#")]),t._v(" Wiping State")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("We do not suggest that you wipe "),s("em",[t._v("all")]),t._v(" state. You might lose node identities and\nkeys if you do it this way.")])]),t._v(" "),s("p",[t._v("Before restarting your node you should wipe tendermint state. The process for\nthis is described "),s("RouterLink",{attrs:{to:"/operators/maintenance/wiping-node-state.html#state-wipe-and-keep-node-identity"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"upgrading-oasis-core"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-oasis-core"}},[t._v("#")]),t._v(" Upgrading Oasis Core")]),t._v(" "),s("p",[t._v("Before starting your node again, make sure you upgrade your "),s("code",[t._v("oasis-node")]),t._v(" binary\nto the current version specified in the "),s("RouterLink",{attrs:{to:"/operators/current-testnet-parameters.html"}},[t._v("Current Testnet Parameters")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"restarting-the-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restarting-the-node"}},[t._v("#")]),t._v(" Restarting the Node")]),t._v(" "),s("p",[t._v("This will depend on your process manager. If you don't have a process manager\nyou should use one. However, to start the node without a process manager you can\nstart the "),s("code",[t._v("oasis-node")]),t._v(" like so:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("oasis-node --config /serverdir/etc/config.yml\n")])])]),s("h2",{attrs:{id:"cleaning-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cleaning-up"}},[t._v("#")]),t._v(" Cleaning Up")]),t._v(" "),s("p",[t._v("After you're comfortable with your node deployment you should clean up the\n"),s("code",[t._v("upgrade-dump.json")]),t._v(" file. This isn't strictly required, but it is good to keep\nyour workspace free of unnecessary files.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /serverdir/etc/upgrade-dump.json\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);