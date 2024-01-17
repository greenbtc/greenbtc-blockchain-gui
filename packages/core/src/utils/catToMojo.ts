import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';

import greenbtcFormatter from './greenbtcFormatter';

export default function catToMojo(cat: string | number | BigNumber): BigNumber {
  return greenbtcFormatter(cat, Unit.CAT).to(Unit.MOJO).toBigNumber();
}
