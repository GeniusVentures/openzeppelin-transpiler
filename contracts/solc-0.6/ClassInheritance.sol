// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract CIA {
    uint256 public foo;
    uint256 public foo2;
    event log(string);
    constructor(uint bar) public {
        foo = bar;
        emit log("SIA");
    }
}

contract CIB is CIA(324) {
    uint256 public val = 123;

    constructor() public {
        foo2 = 456;
    }

}
