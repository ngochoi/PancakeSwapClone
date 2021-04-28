var Factory = artifacts.require("./PancakeFactory.sol");
var Pair = artifacts.require("./PancakePair.sol");
var migration = artifacts.require("./Migrations.sol");
var pancakeerc20 = artifacts.require("./PancakeERC20.sol");
var ptoken1 = artifacts.require("./token1.sol");
var ptoken2 = artifacts.require("./token2.sol");

module.exports = async function (deployer, network, addresses) {

  console.log("You are using network ", network);
  //The factory function's constructor sets the address which will receive trading fee
  await deployer.deploy(Factory, "0xe95745a8F4E3cDb1cF5bfFD4A94F0B249e99f489"); //deployer sends the transaction for deployment

  const factory = await Factory.deployed(); // waits for the above transaction to be mined

  let token1Address, token2Address;
  if (network === 'mainnet') {
    token1Address = '';
    token2Address = '';
  } else {
    await deployer.deploy(ptoken1);
    await deployer.deploy(ptoken2);
    const _Token1 = await ptoken1.deployed();
    const _Token2 = await ptoken2.deployed();
    token1Address = _Token1.address;
    token2Address = _Token2.address;
  }

  await factory.createPair(token1Address, token2Address);
  await deployer.deploy(pancakeerc20);
  await deployer.deploy(Pair);
  await deployer.deploy(migration);


  console.table({
    PancakeFactory: Factory.address,
    PancakePair: Pair.address,
    Migration: migration.address,
    PancakeERC20: pancakeerc20.address,
    token1: token1Address,
    token2: token2Address
  })
};