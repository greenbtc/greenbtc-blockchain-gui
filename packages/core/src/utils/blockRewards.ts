import BigNumber from 'bignumber.js';

const MOJO_PER_GREENBTC = new BigNumber('1000000000000');
const POOL_REWARD = '0.875'; // 7 / 8
const FARMER_REWARD = '0.125'; // 1 /8

export function calculatePoolReward(height: number): BigNumber {
  if (height === 0) {
    return MOJO_PER_GREENBTC.times('3000000').times(POOL_REWARD);
  }
  if (height < 1_000_000) {
    return MOJO_PER_GREENBTC.times('1').times(POOL_REWARD);
  }
  if (height < 2_000_000) {
    return MOJO_PER_GREENBTC.times('0.6').times(POOL_REWARD);
  }
  if (height < 3_000_000) {
    return MOJO_PER_GREENBTC.times('0.4').times(POOL_REWARD);
  }
  if (height < 4_000_000) {
    return MOJO_PER_GREENBTC.times('0.2').times(POOL_REWARD);
  }
  if (height < 20_000_000) {
    return MOJO_PER_GREENBTC.times('0.1').times(POOL_REWARD);
  }

  return MOJO_PER_GREENBTC.times('0.05').times(POOL_REWARD);
}

export function calculateBaseFarmerReward(height: number): BigNumber {
  if (height === 0) {
    return MOJO_PER_GREENBTC.times('3000000').times(FARMER_REWARD);
  }
  if (height < 1_000_000) {
    return MOJO_PER_GREENBTC.times('1').times(FARMER_REWARD);
  }
  if (height < 2_000_000) {
    return MOJO_PER_GREENBTC.times('0.6').times(FARMER_REWARD);
  }
  if (height < 3_000_000) {
    return MOJO_PER_GREENBTC.times('0.4').times(FARMER_REWARD);
  }
  if (height < 4_000_000) {
    return MOJO_PER_GREENBTC.times('0.2').times(FARMER_REWARD);
  }
  if (height < 20_000_000) {
    return MOJO_PER_GREENBTC.times('0.1').times(FARMER_REWARD);
  }

  return MOJO_PER_GREENBTC.times('0.05').times(FARMER_REWARD);
}
