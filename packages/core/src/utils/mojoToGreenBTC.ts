import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';

import greenbtcFormatter from './greenbtcFormatter';

export default function mojoToGreenBTC(mojo: string | number | BigNumber): BigNumber {
  return greenbtcFormatter(mojo, Unit.MOJO).to(Unit.GREENBTC).toBigNumber();
}
