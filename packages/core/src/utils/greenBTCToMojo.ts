import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';
import greenbtcFormatter from './greenbtcFormatter';

export default function greenbtcToMojo(greenbtc: string | number | BigNumber): BigNumber {
  return greenbtcFormatter(greenbtc, Unit.GREENBTC).to(Unit.MOJO).toBigNumber();
}
