import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';

import greenbtcFormatter from './greenbtcFormatter';

export default function mojoToCAT(mojo: string | number | BigNumber): BigNumber {
  return greenbtcFormatter(mojo, Unit.MOJO).to(Unit.CAT).toBigNumber();
}
