import { usePrefs } from '@greenbtc-network/api-react';

export default function useEnableDataLayerService() {
  return usePrefs<boolean>('enableDataLayerService', false);
}
