import { usePrefs } from '@greenbtc-network/api-react';

export default function useEnableAutoLogin() {
  return usePrefs<boolean>('enableAutoLogin', true);
}
