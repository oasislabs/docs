(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{370:function(e,t,a){"use strict";a.r(t);var r=a(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"current-testnet-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-testnet-parameters"}},[e._v("#")]),e._v(" Current Testnet Parameters")]),e._v(" "),a("p",[e._v("This page is meant to be kept up to date with the information from the currently\nreleased Testnet. Use the information here to deploy or upgrade your node on the\nTestnet.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/oasisprotocol/public-testnet-artifacts/releases/download/2020-06-18/genesis.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("Genesis Document"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("sha1: "),a("code",[e._v("f4cd7f02becadddd70c9e954d2a90dde7a924ef8")])]),e._v(" "),a("li",[e._v("sha256: "),a("code",[e._v("bfe72b66b8a2acf82e855978c30fe40372d23e1efb3648fe2aba99868be1ad2a")])])])]),e._v(" "),a("li",[e._v("Oasis Seed Node Address:\n"),a("ul",[a("li",[a("code",[e._v("9FBCA3364885EBC82BF5BE8156BB4DF0A563BBF6@34.86.145.181:26656")])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Feel free to use other seed nodes than the one provided here.")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/oasisprotocol/oasis-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oasis Core"),a("OutboundLink")],1),e._v(" version:\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/oasisprotocol/oasis-core/releases/tag/v20.8.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("20.8.2"),a("OutboundLink")],1)])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("oasis-node")]),e._v(" binary is part of the Oasis Core release.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Don't use a newer version of Oasis Core since it likely contains changes that\nare incompatible with version of Oasis Core used by other nodes in the current\nTestnet.")])])])]),e._v(" "),a("h2",{attrs:{id:"deployment-change-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment-change-log"}},[e._v("#")]),e._v(" Deployment Change Log")]),e._v(" "),a("h3",{attrs:{id:"_2020-07-02-latest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020-07-02-latest"}},[e._v("#")]),e._v(" 2020-07-02 (Latest)")]),e._v(" "),a("p",[e._v("Patch upgrade. This update applies fixes for "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/security/advisories/GHSA-6jqj-f58p-mrw3",target:"_blank",rel:"noopener noreferrer"}},[e._v("CVE-2020-15091"),a("OutboundLink")],1),e._v(" in Tendermint.")]),e._v(" "),a("h4",{attrs:{id:"upgrade-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-procedure"}},[e._v("#")]),e._v(" Upgrade Procedure")]),e._v(" "),a("p",[a("strong",[e._v("DO NOT WIPE STATE. The genesis is still the [2020-06-18] genesis document.")])]),e._v(" "),a("ol",[a("li",[e._v("Shutdown your "),a("code",[e._v("oasis-node")]),e._v(" process")]),e._v(" "),a("li",[e._v("Upgrade your "),a("code",[e._v("oasis-node")]),e._v(" to version "),a("a",{attrs:{href:"https://github.com/oasisprotocol/oasis-core/releases/tag/v20.8.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("20.8.2"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Start your node")])]),e._v(" "),a("h3",{attrs:{id:"_2020-06-18"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020-06-18"}},[e._v("#")]),e._v(" 2020-06-18")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/operators/amber-network.html"}},[e._v("Amber Network")]),e._v(" starts at 2020-06-18T16:00:00Z.")],1),e._v(" "),a("h4",{attrs:{id:"upgrade-procedure-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-procedure-2"}},[e._v("#")]),e._v(" Upgrade Procedure")]),e._v(" "),a("ol",[a("li",[e._v("Download and verify the genesis document published in the "),a("a",{attrs:{href:"https://github.com/oasisprotocol/public-testnet-artifacts/releases/tag/2020-06-18",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020-06-18 release"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Stop your node.")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/operators/maintenance/wiping-node-state.html#state-wipe-and-keep-node-identity"}},[e._v("Wipe Node State")]),e._v(".")],1),e._v(" "),a("li",[e._v("Update your "),a("code",[e._v("/serverdir/etc/config.yml")]),e._v(" with the new seed node address:\n"),a("code",[e._v("9FBCA3364885EBC82BF5BE8156BB4DF0A563BBF6@34.86.145.181:26656")])]),e._v(" "),a("li",[e._v("Upgrade "),a("code",[e._v("oasis-node")]),e._v(" to version "),a("a",{attrs:{href:"https://github.com/oasisprotocol/oasis-core/releases/tag/v20.8",target:"_blank",rel:"noopener noreferrer"}},[e._v("20.8"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Start your node.")])]),e._v(" "),a("p",[e._v("For a more in-depth explanation, see "),a("RouterLink",{attrs:{to:"/operators/maintenance/handling-network-upgrades.html"}},[e._v("Handling Network Upgrades")]),e._v(" guide.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Two "),a("code",[e._v("oasis-core")]),e._v(" releases have occurred since the end of The Quest. If you are\ndoing anything that isn't part of the normal documentation and you see it\nfailing, please check the "),a("a",{attrs:{href:"https://github.com/oasisprotocol/oasis-core/blob/v20.8/CHANGELOG.md#208-2020-06-16",target:"_blank",rel:"noopener noreferrer"}},[e._v("20.8 Changelog"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/oasisprotocol/oasis-core/blob/v20.8/CHANGELOG.md#207-2020-06-08",target:"_blank",rel:"noopener noreferrer"}},[e._v("20.7 Changelog"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"_2020-05-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020-05-11"}},[e._v("#")]),e._v(" 2020-05-11")]),e._v(" "),a("ul",[a("li",[e._v("Block height when network stops: "),a("strong",[e._v("353000")])]),e._v(" "),a("li",[e._v("Upgrade Window:\n"),a("ul",[a("li",[e._v("Start: "),a("strong",[e._v("2020-05-11T16:00:00Z")])]),e._v(" "),a("li",[e._v("End: "),a("strong",[e._v("2020-05-12T15:59:59Z")]),e._v(" "),a("ul",[a("li",[e._v('As with previous deploys, the "'),a("em",[e._v("End")]),e._v('" of the window is not something we\ncan enforce unilaterally, however, if, for whatever reason, not enough\npeople upgrade on the public testnet we '),a("em",[e._v("may")]),e._v(" release and redeploy a new\ngenesis block that removes inactive nodes from the validator set.")])])])])])]),e._v(" "),a("h4",{attrs:{id:"upgrade-procedure-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-procedure-3"}},[e._v("#")]),e._v(" Upgrade Procedure")]),e._v(" "),a("ol",[a("li",[e._v("(Optional) Dump network state at the specified block height.")]),e._v(" "),a("li",[e._v("Download and verify the genesis document published in the "),a("a",{attrs:{href:"https://github.com/oasislabs/public-testnet-artifacts/releases/tag/2020-05-11",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020-05-11 release"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Stop your node.")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/operators/maintenance/wiping-node-state.html#state-wipe-and-keep-node-identity"}},[e._v("Wipe Node State")]),e._v(".")],1),e._v(" "),a("li",[e._v("Upgrade "),a("code",[e._v("oasis-node")]),e._v(" to version "),a("a",{attrs:{href:"https://github.com/oasislabs/oasis-core/releases/tag/v20.6",target:"_blank",rel:"noopener noreferrer"}},[e._v("20.6"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("If you have been using the prometheus metrics on "),a("code",[e._v("oasis-node")]),e._v(", these options\nhave changed. Please see the "),a("a",{attrs:{href:"https://github.com/oasislabs/oasis-core/blob/v20.6/CHANGELOG.md#206-2020-05-07",target:"_blank",rel:"noopener noreferrer"}},[e._v("20.6 Changelog"),a("OutboundLink")],1),e._v(" and update your configuration.")]),e._v(" "),a("li",[e._v("Start your node.")])]),e._v(" "),a("p",[e._v("For a more in-depth explanation, see "),a("RouterLink",{attrs:{to:"/operators/maintenance/handling-network-upgrades.html"}},[e._v("Handling Network Upgrades")]),e._v(" guide.")],1),e._v(" "),a("h3",{attrs:{id:"_2020-04-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020-04-16"}},[e._v("#")]),e._v(" 2020-04-16")]),e._v(" "),a("h4",{attrs:{id:"upgrade-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-parameters"}},[e._v("#")]),e._v(" Upgrade Parameters")]),e._v(" "),a("ul",[a("li",[e._v("Block height when network stops: "),a("strong",[e._v("591600")])]),e._v(" "),a("li",[e._v("Upgrade Window:\n"),a("ul",[a("li",[e._v("Start: "),a("strong",[e._v("2020-04-16T16:00:00Z")])]),e._v(" "),a("li",[e._v("End: "),a("strong",[e._v("2020-04-17T15:59:59Z")]),e._v(" "),a("ul",[a("li",[e._v('As with previous deploys, the "'),a("em",[e._v("End")]),e._v('" of the window is not something we\ncan enforce unilaterally, however, if, for whatever reason, not enough\npeople upgrade on the public testnet we '),a("em",[e._v("may")]),e._v(" release and redeploy a new\ngenesis block that removes inactive nodes from the validator set.")])])])])])]),e._v(" "),a("h4",{attrs:{id:"upgrade-procedure-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-procedure-4"}},[e._v("#")]),e._v(" Upgrade Procedure")]),e._v(" "),a("ol",[a("li",[e._v("(Optional) Dump network state at the specified block height.")]),e._v(" "),a("li",[e._v("Download and verify the genesis document published in the "),a("a",{attrs:{href:"https://github.com/oasislabs/public-testnet-artifacts/releases/tag/2020-04-16",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020-04-16 release"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Stop your node.")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/operators/maintenance/wiping-node-state.html#state-wipe-and-keep-node-identity"}},[e._v("Wipe Node State")]),e._v(".")],1),e._v(" "),a("li",[e._v("Upgrade "),a("code",[e._v("oasis-node")]),e._v(" to version "),a("a",{attrs:{href:"https://github.com/oasislabs/oasis-core/releases/tag/v20.5",target:"_blank",rel:"noopener noreferrer"}},[e._v("20.5"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Start your node.")])]),e._v(" "),a("p",[e._v("For a more in-depth explanation, see "),a("RouterLink",{attrs:{to:"/operators/maintenance/handling-network-upgrades.html"}},[e._v("Handling Network Upgrades")]),e._v(" guide.")],1),e._v(" "),a("h3",{attrs:{id:"_2020-03-05"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020-03-05"}},[e._v("#")]),e._v(" 2020-03-05")]),e._v(" "),a("h4",{attrs:{id:"upgrade-parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-parameters-2"}},[e._v("#")]),e._v(" Upgrade Parameters")]),e._v(" "),a("ul",[a("li",[e._v("Block height to dump: "),a("strong",[e._v("335400")])]),e._v(" "),a("li",[e._v("Upgrade Window\n"),a("ul",[a("li",[e._v("Start: "),a("strong",[e._v("2020-03-05T17:00:00Z")])]),e._v(" "),a("li",[e._v("End: "),a("strong",[e._v("2020-03-06T16:59:59Z")]),e._v(" "),a("ul",[a("li",[e._v('The "'),a("em",[e._v("End")]),e._v('" of the window is not something we can enforce unilaterally,\nhowever, if, for whatever reason, not enough people upgrade on the public\ntestnet we '),a("em",[e._v("may")]),e._v(" release and redeploy a new genesis block that removes\ninactive nodes from the validator set.")])])])])])]),e._v(" "),a("h4",{attrs:{id:"upgrade-procedure-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-procedure-5"}},[e._v("#")]),e._v(" Upgrade Procedure")]),e._v(" "),a("ol",[a("li",[e._v("Dump network state at the specified block height.")]),e._v(" "),a("li",[e._v("Download and verify the genesis document published in the "),a("a",{attrs:{href:"https://github.com/oasislabs/public-testnet-artifacts/releases/tag/2020-03-05",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020-03-05 release"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Stop your node.")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/operators/maintenance/wiping-node-state.html#state-wipe-and-keep-node-identity"}},[e._v("Wipe Node State")]),e._v(".")],1),e._v(" "),a("li",[e._v("Upgrade "),a("code",[e._v("oasis-node")]),e._v(" to version "),a("a",{attrs:{href:"https://github.com/oasislabs/oasis-core/releases/tag/v20.4.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("20.4.1"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Start your node.")])]),e._v(" "),a("p",[e._v("For a more in-depth explanation, see "),a("RouterLink",{attrs:{to:"/operators/maintenance/handling-network-upgrades.html"}},[e._v("Handling Network Upgrades")]),e._v(" guide.")],1),e._v(" "),a("h3",{attrs:{id:"_2020-02-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020-02-11"}},[e._v("#")]),e._v(" 2020-02-11")]),e._v(" "),a("h4",{attrs:{id:"upgrade-parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-parameters-3"}},[e._v("#")]),e._v(" Upgrade Parameters")]),e._v(" "),a("ul",[a("li",[e._v("Block height to dump: "),a("strong",[e._v("270000")])]),e._v(" "),a("li",[e._v("Upgrade Window\n"),a("ul",[a("li",[e._v("Start: "),a("strong",[e._v("2020-02-11T17:00:00Z")])]),e._v(" "),a("li",[e._v("End: "),a("strong",[e._v("2020-02-12T16:59:59Z")]),e._v(" "),a("ul",[a("li",[e._v('The "'),a("em",[e._v("End")]),e._v('" of the window is not something we can enforce unilaterally,\nhowever, if, for whatever reason, not enough people upgrade on the public\ntestnet we '),a("em",[e._v("may")]),e._v(" release and redeploy a new genesis block that removes\ninactive nodes from the validator set.")])])])])])]),e._v(" "),a("h4",{attrs:{id:"upgrade-procedure-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-procedure-6"}},[e._v("#")]),e._v(" Upgrade Procedure")]),e._v(" "),a("ol",[a("li",[e._v("Dump network state at the specified block height.")]),e._v(" "),a("li",[e._v("Download and verify the genesis document published in the "),a("a",{attrs:{href:"https://github.com/oasislabs/public-testnet-artifacts/releases/tag/2020-02-11",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020-02-11 release"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Stop your node.")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/operators/maintenance/wiping-node-state.html#state-wipe-and-keep-node-identity"}},[e._v("Wipe Node State")]),e._v(".")],1),e._v(" "),a("li",[e._v("Delete "),a("code",[e._v("/serverdir/node/tls_identity.pem")]),e._v(" and\n"),a("code",[e._v("/serverdir/node/tls_identity_cert.pem")]),e._v(".\n"),a("ul",[a("li",[e._v("The format for the TLS keys have changed. This will be regenerated on\nrestart.")])])]),e._v(" "),a("li",[e._v("Update your "),a("code",[e._v("/serverdir/etc/config.yml")]),e._v(" per the below instructions.")]),e._v(" "),a("li",[e._v("Upgrade "),a("code",[e._v("oasis-node")]),e._v(" to version "),a("a",{attrs:{href:"https://github.com/oasislabs/oasis-core/releases/tag/v20.3.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("20.3.1"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Start your node.")])]),e._v(" "),a("h4",{attrs:{id:"serverdir-etc-config-yml-required-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverdir-etc-config-yml-required-changes"}},[e._v("#")]),e._v(" "),a("code",[e._v("/serverdir/etc/config.yml")]),e._v(" Required Changes")]),e._v(" "),a("h5",{attrs:{id:"changed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changed"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("tendermint.seed")]),e._v(" field has moved to "),a("code",[e._v("tendermint.p2p.seed")])]),e._v(" "),a("p",[e._v("Old Version:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("tendermint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ... other config")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("seed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{ seed_node_address }}"')]),e._v("\n")])])]),a("p",[e._v("New Version:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("tendermint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ... other config")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("p2p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("seed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{ seed_node_address }}"')]),e._v("\n")])])]),a("h3",{attrs:{id:"_2020-01-23"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020-01-23"}},[e._v("#")]),e._v(" 2020-01-23")]),e._v(" "),a("p",[e._v("You should only need to do an upgrade as detailed in the "),a("RouterLink",{attrs:{to:"/operators/maintenance/handling-network-upgrades.html"}},[e._v("Handling Network\nUpgrades")]),e._v(" guide.")],1),e._v(" "),a("h3",{attrs:{id:"_2020-01-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020-01-15"}},[e._v("#")]),e._v(" 2020-01-15")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("/serverdir/etc/config.yml")]),e._v(" Required Changes")])]),e._v(" "),a("p",[e._v("If you've deployed before, we changed the storage backend from "),a("code",[e._v("boltdb")]),e._v(" to\n"),a("code",[e._v("badger")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"_2019-12-17"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-12-17"}},[e._v("#")]),e._v(" 2019-12-17")]),e._v(" "),a("p",[e._v("You should only need to do an upgrade as detailed in the "),a("RouterLink",{attrs:{to:"/operators/maintenance/handling-network-upgrades.html"}},[e._v("Handling Network\nUpgrades")]),e._v(" guide.")],1),e._v(" "),a("h3",{attrs:{id:"_2019-11-26"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-26"}},[e._v("#")]),e._v(" 2019-11-26")]),e._v(" "),a("h4",{attrs:{id:"serverdir-etc-config-yml-required-changes-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverdir-etc-config-yml-required-changes-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("/serverdir/etc/config.yml")]),e._v(" Required Changes")]),e._v(" "),a("h5",{attrs:{id:"changed-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changed-2"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),a("p",[e._v("Format for seed nodes has changed. Previously it only accepted a string. Now it\nsupports an array of strings.")]),e._v(" "),a("p",[e._v("Old Version:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("tendermint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ... other config")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("seeds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{ seed_node_address }}"')]),e._v("\n")])])]),a("p",[e._v("New Version:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("tendermint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ... other config")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("seed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{ seed_node_address0 }}"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{ seed_node_address1 }}"')]),e._v("\n")])])]),a("h5",{attrs:{id:"removed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removed"}},[e._v("#")]),e._v(" Removed")]),e._v(" "),a("p",[e._v("This temporary configuration on the initial deployment is no longer necessary.\nThese lines have been removed.")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## THESE NEXT 3 LINES ARE TEMPORARY YOU SHOULD NOT EXPOSE THIS PORT IN ANY WAY")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("grpc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"42261"')]),e._v("\n")])])]),a("h4",{attrs:{id:"staking-and-registration-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staking-and-registration-changes"}},[e._v("#")]),e._v(" Staking and Registration Changes")]),e._v(" "),a("p",[e._v("The CLI for creating and submitting staking and registration transactions have\nchanged. If you've already staked and registered your entity, then there's no\nneed to make any changes.")]),e._v(" "),a("h4",{attrs:{id:"docker-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-support"}},[e._v("#")]),e._v(" Docker Support")]),e._v(" "),a("p",[e._v("We no longer document using the Docker container for setup or deployment as we\nnow distribute "),a("code",[e._v("oasis-node")]),e._v(" binaries. You may still use the Docker container,\nand we will, for now, document the current Docker image tag for a given\ndeployment.")]),e._v(" "),a("h3",{attrs:{id:"_2019-11-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-13"}},[e._v("#")]),e._v(" 2019-11-13")]),e._v(" "),a("p",[e._v("This is the initial deployment.")])])}),[],!1,null,null,null);t.default=s.exports}}]);