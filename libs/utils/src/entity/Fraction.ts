import { ONE_BN, Rounding } from './constants';
import BN from 'bignumber.js';
import { BigNumberish, parseBigNumberish } from './bigNumber';
import { Numberish } from './primitives';
import { logger } from 'ethers';
import _Big from 'big.js';
import _Decimal from 'decimal.js-light';
import toFormat, { WrappedBig } from './to-format';

function getParsed(other: Numberish): Fraction {
  return other instanceof Fraction ? other : new Fraction(parseBigNumberish(other));
}

const Big = toFormat(_Big);
type Big = WrappedBig;
const Decimal = toFormat(_Decimal);

const toSignificantRounding = {
  [Rounding.ROUND_DOWN]: Decimal.ROUND_DOWN,
  [Rounding.ROUND_HALF_UP]: Decimal.ROUND_HALF_UP,
  [Rounding.ROUND_UP]: Decimal.ROUND_UP,
};

const toFixedRounding = {
  [Rounding.ROUND_DOWN]: Big.roundDown,
  [Rounding.ROUND_HALF_UP]: Big.roundHalfUp,
  [Rounding.ROUND_UP]: Big.roundUp,
};

class Fraction {
  public readonly numerator: BN;
  public readonly denominator: BN;

  public constructor(numerator: BigNumberish, denominator: BigNumberish = ONE_BN) {
    this.numerator = parseBigNumberish(numerator);
    this.denominator = parseBigNumberish(denominator);
  }

  // performs floor division
  public get quotient() {
    return this.numerator.div(this.denominator);
  }

  public invert(): Fraction {
    return new Fraction(this.denominator, this.numerator);
  }

  public add(other: Numberish): Fraction {
    const otherParsed = getParsed(other);

    if (this.denominator.eq(otherParsed.denominator)) {
      return new Fraction(this.numerator.plus(otherParsed.numerator), this.denominator);
    }

    return new Fraction(
      this.numerator
        .times(otherParsed.denominator)
        .plus(otherParsed.numerator.times(this.denominator)),
      this.denominator.times(otherParsed.denominator)
    );
  }

  public sub(other: Numberish): Fraction {
    const otherParsed = getParsed(other);

    if (this.denominator.eq(otherParsed.denominator)) {
      return new Fraction(this.numerator.minus(otherParsed.numerator), this.denominator);
    }

    return new Fraction(
      this.numerator
        .times(otherParsed.denominator)
        .minus(otherParsed.numerator.times(this.denominator)),
      this.denominator.times(otherParsed.denominator)
    );
  }

  public mul(other: Fraction | BigNumberish) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigNumberish(other));

    return new Fraction(
      this.numerator.times(otherParsed.numerator),
      this.denominator.times(otherParsed.denominator)
    );
  }

  public div(other: Fraction | BigNumberish) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigNumberish(other));

    return new Fraction(
      this.numerator.times(otherParsed.denominator),
      this.denominator.times(otherParsed.numerator)
    );
  }

  public toSignificant(
    significantDigits: number,
    format: object = { groupSeparator: '' },
    rounding: Rounding = Rounding.ROUND_HALF_UP
  ): string {
    logger.assert(Number.isInteger(significantDigits), `${significantDigits} is not an integer.`);
    logger.assert(significantDigits > 0, `${significantDigits} is not positive.`);

    Decimal.set({ precision: significantDigits + 1, rounding: toSignificantRounding[rounding] });
    const quotient = new Decimal(this.numerator.toString())
      .div(this.denominator.toString())
      .toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  }

  public toFixed(
    decimalPlaces: number,
    format: object = { groupSeparator: '' },
    rounding: Rounding = Rounding.ROUND_HALF_UP
  ): string {
    logger.assert(Number.isInteger(decimalPlaces), `${decimalPlaces} is not an integer.`);
    logger.assert(decimalPlaces >= 0, `${decimalPlaces} is negative.`);

    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString())
      .div(this.denominator.toString())
      .toFormat(decimalPlaces, format);
  }
}

export default Fraction;
