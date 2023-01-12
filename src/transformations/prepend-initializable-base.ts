import { SourceUnit } from 'solidity-ast';
import { findAll } from 'solidity-ast/utils';
import { getNodeBounds } from '../solc/ast-utils';
import { Transformation } from './type';
import { TransformerTools } from '../transform';
import { matchBufferAt } from '../utils/match';

export function* prependInitializableBase(
  sourceUnit: SourceUnit,
  { originalSourceBuf }: TransformerTools,
): Generator<Transformation> {
  for (const contract of findAll('ContractDefinition', sourceUnit)) {
    if (contract.contractKind !== 'contract') {
      continue;
    }

    if (contract.baseContracts.length > 0) {
      const { start } = getNodeBounds(contract.baseContracts[0]);
      yield {
        kind: 'prepend-initializable-base',
        start,
        length: 0,
        text: `Initializable, `,
      };
    } else {
      const bounds = getNodeBounds(contract);
      const re = /(?:abstract\s+)?contract\s+([a-zA-Z0-9$_]+)/;
      const match = matchBufferAt(originalSourceBuf, re, bounds.start);

      if (!match) {
        throw new Error(`Can't find ${contract.name} in ${sourceUnit.absolutePath}`);
      }

      const start = match.start + match.length;

        yield {
          start,
          length: 0,
          kind: 'prepend-initializable-base',
          text: ' is Initializable',
        };
      }
    }
  }
}
