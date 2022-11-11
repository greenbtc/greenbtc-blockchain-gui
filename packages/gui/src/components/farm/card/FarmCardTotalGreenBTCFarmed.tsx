import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToGreenBTCLocaleString, CardSimple, useLocale } from '@greenbtc/core';
import { useGetFarmedAmountQuery } from '@greenbtc/api-react';

export default function FarmCardTotalGreenBTCFarmed() {
  const currencyCode = useCurrencyCode();
  const [locale] = useLocale();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalGreenBTCFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToGreenBTCLocaleString(farmedAmount, locale)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount, locale, currencyCode]);

  return (
    <CardSimple
      title={<Trans>Total GreenBTC Farmed</Trans>}
      value={totalGreenBTCFarmed}
      loading={isLoading}
      error={error}
    />
  );
}
