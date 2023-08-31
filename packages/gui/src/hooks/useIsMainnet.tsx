import { useGetNetworkInfoQuery } from '@greenbtc-network/api-react';

export default function useIsMainnet(): boolean | undefined {
  const { data: networkInfo } = useGetNetworkInfoQuery();
  const networkPrefix = networkInfo?.networkPrefix;

  if (!networkPrefix) {
    return undefined;
  }

  return networkPrefix.toLowerCase() === 'gbtc';
}
