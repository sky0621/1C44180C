// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract A {
    uint num;

    function setNum(uint num_) public {
        num = num_;
    }

    function getNum() public view returns (uint) {
        return num;
    }
}