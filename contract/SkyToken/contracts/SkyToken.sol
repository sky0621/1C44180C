// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract SkyToken is ERC20Upgradeable {
    function initialize(uint256 initialSupply) public initializer {
        __ERC20_init("SkyToken", "SKYT");
        _mint(msg.sender, initialSupply);
    }

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function decimals() public view virtual override returns (uint8) {
        return 2;
    }

    function mint(address account, uint256 amount) external {
        _mint(account, amount);
    }
}
