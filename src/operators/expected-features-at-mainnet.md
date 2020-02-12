# Expected Features of Mainnet at Launch

Since we first conceived of the network, technological development, research, and community contributions have all been focused on one goal -- creating a better internet. An internet that’s privacy-first and decentralized -- putting users back in control of their data and respects individual privacy, while still providing the apps and service we’ve all learned to love.

Now as Mainnet approaches, we’re one step closer to actualizing this vision. Our goal has been to release a network that is both decentralized and gives developers access to confidentiality as smoothly as possible, making it easy for node operators to onboard while at the same time providing app developers the tools they need to build new, privacy-preserving applications.

Below is the proposed Oasis Network architecture at Mainnet. We welcome input on how to adjust this architecture as Mainnet approaches. 

## Key features at Mainnet launch
All features at Mainnet launch should help enable and foster the growth of (1) a decentralized proof of stake network; (2) privacy-first applications; and (3) organic transaction volume as a result of developers and end users. To achieve this, core components of the network at launch include:
* Decentralized Consensus Layer (including staking and delegation features)
* Decentralized Parallel Runtimes


## Decentralized Consensus Layer

The Oasis Network is based on a Proof-of-Stake (PoS) consensus model. Tokens can be self-delegated directly by each node operator or delegated to a node operator by other token holders. While the Oasis Network is designed with a modular architecture that can use any consensus system that satisfies these properties, it currently uses [Tendermint](https://github.com/tendermint/tendermint) as its consensus algorithm. To run a node yourself you can find information on joining the testnet [here](https://docs.oasis.dev/operators/joining-the-testnet.html).

At Mainnet launch, participating in consensus is one of two critical ways that node operators can help run and be part of the network. Validators will be able to sign blocks, earn transaction fees, stake, and receive delegation. Similar to the PoS design implemented by Cosmos, up to 100 validators with the most stake can participate in the consensus process.

The system will disincentivize bad behavior via slashing for double-signing, as well as via the cost to dominate the network, in terms of the number of staked tokens. 

A complete proposal of staking, delegation and the incentives that align to both on the consensus layer can be found [here](https://docs.oasis.dev/operators/incentives-proposal.html).

## Oasis Network Parallel-Runtimes (ParaTimes)
In addition to a decentralized Consensus Layer, Oasis will also allow for anyone to add their own runtime to the Network. We’ve developed the system this way in order to achieve the highest degree of decentralization and also to support as many versions of confidential networks as quickly as possible.

In this model, any runtime developer can use the open-sourced [Oasis Runtime](https://github.com/oasislabs/oasis-runtime) or any other runtime they choose to use. Given the privacy and confidentiality technologies baked into the Oasis Runtime, the Network is optimized for confidential smart contract transactions and the use to TEEs including Intel SGX and others, but can be used for non-confidential smart contracts as well.

Key highlights of the Oasis Network ParaTimes:
* Who can manage a runtime: Anyone. We welcome you to use the Oasis Runtime code as a base,copy, or add your own existing runtime.
* How can validators participate in these runtime: At launch this will really be up to each runtime developer. Nodes could run their own version of a runtime which would include compute and storage nodes or they can work with an existing runtime developer to run on their network. We encourage all runtime developers to use the [Node Operator Leaderboards](https://github.com/oasislabs/oasis-runtime) as a way to identify potential partners.
* Paying for transactions: In order to pay for consensus layer transactions, runtime developers will need to provide a deposit used (1) to reserve a spot on the network; and (2) as a drawdown mechanism to pay for consensus-layer transactions. 

## An Example of ParaTime: Oasis Labs’ Data Sovereignty Runtime
While anyone can build a runtime and add it to the Oasis consensus layer at any time, we also expect that there will be a few up and running at the time of Mainnet launch as well. 

For example, Oasis Labs plans to use the Oasis Network and the open-sourced Oasis Runtime in order to provide a confidential compute and storage layer for developers who plan to run confidential smart contracts on the Oasis Network. Through a [set of APIs and other confidentiality tooling](https://www.oasislabs.com/data-privacy), developers big and small will be able to take advantage of confidential computation and secure computing techniques while the blockchain technology is abstracted away.

Early use cases of this in action include developers in the genomics, hospital management, credit scoring, and financial services industries that Oasis Labs expects to provide organic transaction volume to the Oasis Network.