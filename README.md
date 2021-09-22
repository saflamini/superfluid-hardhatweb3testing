Test a super app using Hardhat + the web3/truffle plugin.

NOTE: This was designed for the Goerli Ethereum testnet. Several address values are hardcoded with this assumption.

Step 1: npm install.

Step 2:

In hardhat.config, make sure to:
1) Add your own account to impersonate in the first task.
2) Add your own RPC URL in the network settings & choose your own block to pin if needed.

Both of these should be done in a .env file

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
