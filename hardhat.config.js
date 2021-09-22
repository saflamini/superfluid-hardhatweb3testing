require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("unlock", "set up impersonating accounts", async () => {
  //list impersonating accounts here
  const acct = "";
  //method to unlock the accounts
  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [acct],
  });

  console.log("impersonating account: " + acct);
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      forking: {
        //your rpc url here
        url: "",
        blockNumber: 5446693
    },
  },
},
  solidity: "0.7.0",
};
