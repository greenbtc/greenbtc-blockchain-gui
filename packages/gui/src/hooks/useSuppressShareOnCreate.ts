import { usePrefs } from '@greenbtc-network/api-react';

export default function useSuppressShareOnCreate() {
  return usePrefs<boolean>('suppressShareOnCreate', false);
}
