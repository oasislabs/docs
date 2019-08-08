(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{189:function(e,t,a){"use strict";a.r(t);var s=a(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"quickstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstart","aria-hidden":"true"}},[e._v("#")]),e._v(" Quickstart")]),e._v(" "),a("p",[e._v("In this guide we will take you through setting up your Oasis dev environment, testing a simple Rust service using cargo, testing the same service using a locally running blockchain, and finally testing it using our Devnet 2.0.")]),e._v(" "),a("h2",{attrs:{id:"set-up-the-oasis-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-the-oasis-sdk","aria-hidden":"true"}},[e._v("#")]),e._v(" Set Up the Oasis SDK")]),e._v(" "),a("h3",{attrs:{id:"install-the-oasis-toolchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-oasis-toolchain","aria-hidden":"true"}},[e._v("#")]),e._v(" Install the Oasis Toolchain")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl --proto '=https' --tlsv1.2 -sSL https://get.oasis.dev | python\n")])])]),a("p",[e._v("Alternatively, pipe into "),a("code",[e._v("python - --help")]),e._v(" to see installation options.")]),e._v(" "),a("h2",{attrs:{id:"unit-test-the-hello-world-service-using-cargo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-test-the-hello-world-service-using-cargo","aria-hidden":"true"}},[e._v("#")]),e._v(' Unit Test the "Hello World" Service Using Cargo')]),e._v(" "),a("ol",[a("li",[a("code",[e._v("git clone https://github.com/oasislabs/tutorials")])]),e._v(" "),a("li",[a("code",[e._v("cd tutorials/hello-world/service")])]),e._v(" "),a("li",[a("code",[e._v("oasis test -- --nocapture")])])]),e._v(" "),a("p",[e._v("The test will do the following:")]),e._v(" "),a("ol",[a("li",[e._v('Retrieve "Hello World!" in Slovenian')]),e._v(" "),a("li",[e._v('Attempt to retrieve "Hello World!" in Samoan, but fail because it doesn\'t exist')]),e._v(" "),a("li",[e._v("Attempt to insert a duplicate greeting (this will fail)")]),e._v(" "),a("li",[e._v('Insert "Hello World!" in Samoan')]),e._v(" "),a("li",[e._v('Retrieve "Hello World!"" successfully in Samoan')])]),e._v(" "),a("p",[e._v("You should see the following console output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('running 1 test\nIn Slovenian: "Pozdravljen, svet!"\nIn Samoan: None\nAdding "Zeno World!" for "en"\nErr(DuplicateEntry)\nAdding "alofa fiafia i le lalolagi!" for "ws"\nIn Samoan: "alofa fiafia i le lalolagi!"\ntest tests::test_paths ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n')])])]),a("p",[e._v("Great!\nNow that the tests pass, it's time build the service for deployment and test it on the local chain.")]),e._v(" "),a("h2",{attrs:{id:"integration-test-using-the-local-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integration-test-using-the-local-chain","aria-hidden":"true"}},[e._v("#")]),e._v(" Integration Test Using the Local Chain")]),e._v(" "),a("p",[e._v("In this step we will use the Javascript based test in the test directory.\nThis script uses "),a("a",{attrs:{href:"https://github.com/oasislabs/oasis.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("oasis.js"),a("OutboundLink")],1),e._v(" to interact with the local chain or Devnet 2.0.")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("oasis build")])]),e._v(" "),a("li",[a("code",[e._v("cd ../app")])]),e._v(" "),a("li",[e._v("Install app dependencies using "),a("code",[e._v("npm install")]),e._v(" (or "),a("code",[e._v("yarn install")]),e._v(" if that's more your style)")]),e._v(" "),a("li",[e._v("In a separate terminal, run the local chain using "),a("code",[e._v("oasis chain")])])]),e._v(" "),a("p",[e._v("You can now test on the local chain using "),a("code",[e._v("oasis test")]),e._v(".\nNote that the "),a("code",[e._v("app")]),e._v(" tests will run when in a subdirectory of "),a("code",[e._v("app")]),e._v(". You will see the following output,")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" PASS  test/service.spec.ts (5.965s)\n  HelloWorld Test\n    ✓ deployed (2ms)\n    ✓ known greeting (409ms)\n    ✓ insert new greeting in Samoan (400ms)\n\nTest Suites: 1 passed, 1 total\nTests:       3 passed, 3 total\n")])])]),a("h2",{attrs:{id:"integration-test-using-devnet-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integration-test-using-devnet-2-0","aria-hidden":"true"}},[e._v("#")]),e._v(" Integration Test Using Devnet 2.0")]),e._v(" "),a("ol",[a("li",[e._v("Login to the "),a("a",{attrs:{href:"https://dashboard.oasiscloud.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oasis developer dashboard"),a("OutboundLink")],1),e._v(" and visit "),a("code",[e._v("My Account")]),e._v(". Navigate to the "),a("code",[e._v("Payments")]),e._v(" tab\n"),a("em",[e._v("Note:")]),e._v(" If you are a first-time user, you may be prompted to generate an Oasis-managed wallet, which you should do. Your wallet is what serves as your identity and enables you to interact with Oasis services.")]),e._v(" "),a("li",[e._v("Make sure you are in a secure location, and then "),a("code",[e._v("Click to reveal")]),e._v(". This will reveal your "),a("em",[e._v("private key")]),e._v(", which is used to access your wallet.\nYou must never lose your private key nor share it with anyone unless you want to lose control of your wallet.")]),e._v(" "),a("li",[e._v("Set your private key for use by the client using "),a("code",[e._v('oasis config profile.default.private_key "<private key>"')])])]),e._v(" "),a("h2",{attrs:{id:"where-to-go-from-here"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-go-from-here","aria-hidden":"true"}},[e._v("#")]),e._v(" Where to go from here?")]),e._v(" "),a("ul",[a("li",[e._v("Check out the "),a("a",{attrs:{href:"/tutorials/ballot"}},[e._v("tutorials")]),e._v("!")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://doc.rust-lang.org/book/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn Rust!"),a("OutboundLink")],1),e._v(" (protip: if you use DuckDuckGo, you can search the Rust docs with "),a("code",[e._v("!rust <query>")]),e._v(")")]),e._v(" "),a("li",[e._v("Browse "),a("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),a("OutboundLink")],1),e._v(" for libraries to use in your services")])])])},[],!1,null,null,null);t.default=i.exports}}]);