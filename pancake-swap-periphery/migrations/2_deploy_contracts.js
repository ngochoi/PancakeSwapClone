const Router = artifacts.require("PancakeRouter.sol");
const WETH = artifacts.require("Weth.sol");
const Migrator = artifacts.require("PancakeMigrator.sol");
const migrations = artifacts.require("Migrations.sol");
const WBNB = artifacts.require("./WBNB.sol");

module.exports = async function (deployer, network) {
    let weth,wbnb;
    const FACTORY_ADDRESS = '0xD4bF8De16cA79D083dCbA16bE5Df4547A2b80998' ;

    if (network === 'mainnet') {
        weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
    } else {
        await deployer.deploy(WETH);
        weth = await WETH.deployed();
    }

    
    if (network === 'mainnet') {
        wbnb = await WBNB.at('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');
    } else {
        await deployer.deploy(WBNB);
        wbnb = await WBNB.deployed();
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
    const _router = await Router.deployed();
    await deployer.deploy(Migrator, FACTORY_ADDRESS, _router.address);
    await deployer.deploy(migrations);

    console.table({
        PancakeRouter: Router.address,
        PancakeMigrator: Migrator.address,
        Migrations: migrations.address,
        WETH: weth.address,
        WBNB: wbnb.address
    })
};