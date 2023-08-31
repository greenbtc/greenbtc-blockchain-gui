const ServiceName = {
  WALLET: 'greenbtc_wallet',
  FULL_NODE: 'greenbtc_full_node',
  FARMER: 'greenbtc_farmer',
  HARVESTER: 'greenbtc_harvester',
  SIMULATOR: 'greenbtc_full_node_simulator',
  DAEMON: 'daemon',
  PLOTTER: 'chia_plotter',
  TIMELORD: 'greenbtc_timelord',
  INTRODUCER: 'greenbtc_introducer',
  EVENTS: 'wallet_ui',
  DATALAYER: 'greenbtc_data_layer',
  DATALAYER_SERVER: 'greenbtc_data_layer_http',
} as const;

type ObjectValues<T> = T[keyof T];

export type ServiceNameValue = ObjectValues<typeof ServiceName>;

export default ServiceName;
