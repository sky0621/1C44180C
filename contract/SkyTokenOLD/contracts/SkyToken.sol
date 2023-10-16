// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SkyToken {
    function decimals() public view virtual override returns (uint8) {
        return 2;
    }
}
