(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{188:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"quickstart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quickstart","aria-hidden":"true"}},[e._v("#")]),e._v(" Quickstart")]),e._v(" "),s("p",[e._v("In this guide we will take you through setting up your Oasis dev environment, testing a simple Rust service using cargo, testing the same service using a locally running blockchain, and finally testing it using our Devnet 2.0.")]),e._v(" "),s("h2",{attrs:{id:"set-up-the-oasis-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-the-oasis-sdk","aria-hidden":"true"}},[e._v("#")]),e._v(" Set Up the Oasis SDK")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://rustup.rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Rust using rustup"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("code",[e._v("rustup default nightly-2019-07-11")])]),e._v(" "),s("li",[s("code",[e._v("rustup target add wasm32-wasi")])]),e._v(" "),s("li",[s("code",[e._v("cargo install oasis-cli oasis-build oasis-chain")])]),e._v(" "),s("li",[e._v("Ensure that the "),s("code",[e._v("$HOME/.cargo/bin")]),e._v(" is in your "),s("code",[e._v("$PATH")])])]),e._v(" "),s("p",[e._v("Note: If you change your Rust toolchain to another nightly, you'll need to "),s("code",[e._v("cargo install --force oasis-build")]),e._v(".\nWe're working on automating this!")]),e._v(" "),s("h2",{attrs:{id:"unit-test-the-hello-world-service-using-cargo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unit-test-the-hello-world-service-using-cargo","aria-hidden":"true"}},[e._v("#")]),e._v(' Unit Test the "Hello World" Service Using Cargo')]),e._v(" "),s("ol",[s("li",[s("code",[e._v("git clone https://github.com/oasislabs/oasis-tutorials")])]),e._v(" "),s("li",[s("code",[e._v("cd oasis-tutorials/hello-world/service")])]),e._v(" "),s("li",[s("code",[e._v("oasis test -- --nocapture")])])]),e._v(" "),s("p",[e._v("The test will do the following:")]),e._v(" "),s("ol",[s("li",[e._v("Retrieve Hello World! in Slovenian")]),e._v(" "),s("li",[e._v("Attempt to retrieve Hello World! in Samoan, but fail")]),e._v(" "),s("li",[e._v("Attempt to insert a duplicate greeting")]),e._v(" "),s("li",[e._v("Insert Hello World! in Samoan")]),e._v(" "),s("li",[e._v("Retrieve Hello World! successfully in Samoan")])]),e._v(" "),s("p",[e._v("You should see the following console output:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('running 1 test\nIn Slovenian: "Pozdravljen, svet!"\nIn Samoan: None\nAdding "Zeno World!" for "en"\nErr(DuplicateEntry)\nAdding "alofa fiafia i le lalolagi!" for "ws"\nIn Samoan: "alofa fiafia i le lalolagi!"\ntest tests::test_paths ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n')])])]),s("p",[e._v("Great! Now that the tests pass, build the service for deployment by runing "),s("code",[e._v("oasis build --release")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"integration-test-using-the-local-chain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration-test-using-the-local-chain","aria-hidden":"true"}},[e._v("#")]),e._v(" Integration Test Using the Local Chain")]),e._v(" "),s("p",[e._v("In this step we will use the Javascript based test in the test directory. This script uses "),s("a",{attrs:{href:"https://github.com/oasislabs/oasis.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("oasis.js"),s("OutboundLink")],1),e._v(" to interact with the local chain or Devnet 2.0.")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("cd ../app")])]),e._v(" "),s("li",[e._v("Install app dependencies using "),s("code",[e._v("npm install")])]),e._v(" "),s("li",[e._v("In a separate terminal, run the local chain using "),s("code",[e._v("oasis-chain")])])]),e._v(" "),s("p",[e._v("You can now test on the local chain using "),s("code",[e._v("npm run test:local")]),e._v(". `cd You will see the following output,")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  Hello World Test\n    ✓ deploy a non-confidential service (1253ms)\nIn slovenian: Pozdravljen, svet!\n    ✓ test known greeting (226ms)\nIn Samoan: null\n    ✓ test unknown greeting (67ms)\nIn Samaon: alofa fiafia i le lalolagi!\n    ✓ insert new greeting in Samoan (130ms)\n")])])]),s("h2",{attrs:{id:"test-using-devnet-2-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-using-devnet-2-0","aria-hidden":"true"}},[e._v("#")]),e._v(" Test Using Devnet 2.0")]),e._v(" "),s("p",[e._v("To test your service on Devnet 2.0, run "),s("code",[e._v("npm run test:devnet")]),e._v(".\nThis will run the test on Devnet 2.0.\nIf everything goes according to plan, you should see the tests pass, once again.")]),e._v(" "),s("h2",{attrs:{id:"where-to-go-from-here"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-to-go-from-here","aria-hidden":"true"}},[e._v("#")]),e._v(" Where to go from here?")]),e._v(" "),s("ul",[s("li",[e._v("Check out the "),s("a",{attrs:{href:"/tutorials"}},[e._v("tutorials")]),e._v("!")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://doc.rust-lang.org/book/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn Rust!"),s("OutboundLink")],1),e._v(" (protip: if you use DuckDuckGo, you can search the Rust docs with "),s("code",[e._v("!rust <query>")]),e._v(")")]),e._v(" "),s("li",[e._v("Browse "),s("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),s("OutboundLink")],1),e._v(" for libraries to use in your services")])])])},[],!1,null,null,null);t.default=n.exports}}]);