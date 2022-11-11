import PlotterName from './PlotterName';
import optionsForPlotter from '../utils/optionsForPlotter';
import defaultsForPlotter from '../utils/defaultsForPlotter';

export default {
  displayName: 'GreenBTC Proof of Space',
  options: optionsForPlotter(PlotterName.GREENBTCPOS),
  defaults: defaultsForPlotter(PlotterName.GREENBTCPOS),
  installInfo: { installed: true },
};
