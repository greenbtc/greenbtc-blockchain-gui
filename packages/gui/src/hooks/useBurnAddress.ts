import { useMemo } from 'react';
import { toBech32m } from '@greenbtc/api';
import { useCurrencyCode } from '@greenbtc/core';

export default function useBurnAddress(): string | undefined {
  const feeUnit = useCurrencyCode();

  const retireAddress = useMemo(() => {
    if (!feeUnit) {
      return;
    }

    return toBech32m(
      '000000000000000000000000000000000000000000000000000000000000dead',
      feeUnit,
    );
  }, [feeUnit]);

  return retireAddress;
}
