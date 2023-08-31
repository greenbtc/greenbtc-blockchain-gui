import { type NFTInfo } from '@greenbtc-network/api';

type NFTState = {
  nft?: NFTInfo;
  isLoading: boolean;
  error?: Error;
};

export default NFTState;
