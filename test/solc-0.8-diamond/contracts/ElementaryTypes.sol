// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ElementaryTypes  {
    address public owner = address(0x123);
    bool active = true;
    string hello = "hello";
    int public count = -123;
    uint ucount = 123;
    bytes32 samevar = "stringliteral";
    uint x =
        5;
    uint y=4;

    constructor (uint initNumber) {
        y = initNumber;
    }
}
