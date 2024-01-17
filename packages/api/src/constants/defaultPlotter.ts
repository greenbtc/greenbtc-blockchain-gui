import defaultsForPlotter from '../utils/defaultsForPlotter';
import optionsForPlotter from '../utils/optionsForPlotter';

import PlotterName from './PlotterName';

export default {
  displayName: 'GreenBTC Proof of Space',
  options: optionsForPlotter(PlotterName.GREENBTCPOS),
  defaults: defaultsForPlotter(PlotterName.GREENBTCPOS),
  installInfo: { installed: true },
};
