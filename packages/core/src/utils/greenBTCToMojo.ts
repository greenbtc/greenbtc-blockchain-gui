import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import greenBTCFormatter from './greenBTCFormatter';

export default function greenBTCToMojo(greenbtc: string | number | BigNumber): BigNumber {
  return greenBTCFormatter(greenbtc, Unit.GREENBTC)
    .to(Unit.MOJO)
    .toBigNumber();
}
