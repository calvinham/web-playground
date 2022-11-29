import BN from 'bignumber.js';

import { Logger } from '../common';
import { isNumber, isString } from './utils';

const logger = Logger.from('entity/bignumber');

export type BigNumberish = BN | string | number | bigint;

const MAX_SAFE = 0x1fffffffffffff;

export function parseBigNumberish(value: BigNumberish) {
  // BN
  if (value instanceof BN) {
    return value;
  }

  // string
  if (isString(value)) {
    if (value.match(/^-?[0-9]+$/)) {
      return new BN(value);
    }
    return logger.throwArgumentError('invalid BigNumberish string', 'value', value);
  }

  // number
  if (typeof value === 'number') {
    if (value % 1) {
      return logger.throwArgumentError('BigNumberish number underflow', 'value', value);
    }

    if (value >= MAX_SAFE || value <= -MAX_SAFE) {
      return logger.throwArgumentError('BigNumberish number overflow', 'value', value);
    }

    return new BN(String(value));
  }

  // bigint
  if (typeof value === 'bigint') {
    return new BN(value.toString());
  }

  return logger.throwArgumentError('invalid BigNumberish value', 'value', value);
}
