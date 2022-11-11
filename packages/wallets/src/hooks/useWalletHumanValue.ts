import { useMemo } from 'react';
import type { Wallet } from '@greenbtc/api';
import { WalletType } from '@greenbtc/api';
import BigNumber from 'bignumber.js';
import { mojoToCATLocaleString, mojoToGreenBTCLocaleString, useLocale } from '@greenbtc/core';

export default function useWalletHumanValue(wallet: Wallet, value?: string | number | BigNumber, unit?: string): string {
  const [locale] = useLocale();
  
  return useMemo(() => {
    if (wallet && value !== undefined) {
      const localisedValue = wallet.type === WalletType.CAT
        ? mojoToCATLocaleString(value, locale)
        : mojoToGreenBTCLocaleString(value, locale);

      return `${localisedValue} ${unit}`;
    }

    return '';
  }, [wallet, value, unit, locale]);
}
