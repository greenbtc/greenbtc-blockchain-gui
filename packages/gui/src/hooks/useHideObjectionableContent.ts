import { usePrefs } from '@greenbtc-network/api-react';

export default function useHideObjectionableContent() {
  return usePrefs<boolean>('hideObjectionableContent', true);
}
