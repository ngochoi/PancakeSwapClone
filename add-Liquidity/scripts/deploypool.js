const Factory = artifacts.require('Factory.sol');
const Router = artifacts.require('Router.sol');
const Pair = artifacts.require('Pair.sol');
const Token1 = artifacts.require('Token1.sol');
const Token2 = artifacts.require('Token2.sol');
//const web3 = require('Web3');

module.exports = async done => {
  try {
    const [admin, _] = await web3.eth.getAccounts();
    const factory = await Factory.at('0xA498C874AB5E98D3103a9218f19Fde7bb15F80b8');
    const router = await Router.at('0x0fe3e905ECD3d11DED8fC1F26255b792Df454a3E');
    const token1 = await Token1.new();
    const token2 = await Token2.new();
    const pairAddress = await factory.createPair.call(token1.address, token2.address);
    const tx = await factory.createPair(token1.address, token2.address);
    await token1.approve(router.address, 10000);
    await token2.approve(router.address, 10000); 
    await router.addLiquidity (
      token1.address,
      token2.address,
      10000,
      10000,
      10000,
      10000,
      admin,
      Math.floor(Date.now() / 1000) + 60 * 10,
      );
    const pair = await Pair.at(pairAddress);
    const balance = await pair.balanceOf(admin); 
    console.log('Pair address ',pairAddress);
    console.log('Token1 address ',token1.address);
    console.log('Token2 address ',token2.address);
    console.log(`balance LP: ${balance.toString()}`);
    } catch(e) {
      console.log(e);
    }
  done();
};