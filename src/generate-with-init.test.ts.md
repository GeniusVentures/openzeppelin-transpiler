# Snapshot report for `src/generate-with-init.test.ts`

The actual snapshot is saved in `generate-with-init.test.ts.snap`.

Generated by [AVA](https://avajs.dev).

## simple

> Snapshot 1

    `// SPDX-License-Identifier: MIT␊
    pragma solidity >=0.6 <0.9;␊
    pragma experimental ABIEncoderV2;␊
    ␊
    import "./GenerateWithInitUpgradeable.sol";␊
    ␊
    contract Foo1UpgradeableWithInit is Foo1Upgradeable {␊
        constructor() public payable initializer {␊
            __Foo1_init();␊
        }␊
    }␊
    import "./GenerateWithInitUpgradeable.sol";␊
    ␊
    contract Foo2UpgradeableWithInit is Foo2Upgradeable {␊
        constructor(uint x, string memory y) public payable initializer {␊
            __Foo2_init(x, y);␊
        }␊
    }␊
    `
