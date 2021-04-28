pragma solidity >=0.6.5;

interface IUniswapV1Factory {
    function getExchange(address) external view returns (address);
}
