import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';
import greenbtcFormatter from './greenbtcFormatter';

export default function mojoToCATLocaleString(mojo: string | number | BigNumber, locale?: string) {
  return greenbtcFormatter(mojo, Unit.MOJO).to(Unit.CAT).toLocaleString(locale);
}
