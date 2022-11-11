export const service_wallet = 'greenbtc_wallet';
export const service_full_node = 'greenbtc_full_node';
export const service_farmer = 'greenbtc_farmer';
export const service_harvester = 'greenbtc_harvester';
export const service_simulator = 'greenbtc_full_node_simulator';
export const service_daemon = 'daemon';
export const service_plotter = 'chia_plotter';
export const service_data_layer = 'greenbtc_data_layer';

// Corresponds with outbound_message.py NodeTypes
export const service_connection_types = {
  1: 'Full Node',
  2: 'Harvester',
  3: 'Farmer',
  4: 'Timelord',
  5: 'Introducer',
  6: 'Wallet',
  7: 'Data Layer',
};
