import { SyncingStatus } from '@greenbtc-network/api';
import { useGetSyncStatusQuery } from '@greenbtc-network/api-react';

import getWalletSyncingStatus from '../utils/getWalletSyncingStatus';

export default function useWalletState(): {
  isLoading: boolean;
  state?: SyncingStatus;
} {
  const { data: walletState, isLoading } = useGetSyncStatusQuery(
    {},
    {
      pollingInterval: 10_000,
    }
  );

  return {
    isLoading,
    state: walletState && getWalletSyncingStatus(walletState),
  };
}
