import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { WalletType } from '@greenbtc/api';
import { useGetWalletBalanceQuery } from '@greenbtc/api-react';
import {
  FormatLargeNumber,
  mojoToCATLocaleString,
  mojoToGreenBTCLocaleString,
  useLocale,
} from '@greenbtc/core';
import { useWallet } from '@greenbtc/wallets';

export type OfferBuilderWalletBalanceProps = {
  walletId: number;
};

export default function OfferBuilderWalletBalance(
  props: OfferBuilderWalletBalanceProps,
) {
  const { walletId } = props;
  const [locale] = useLocale();
  const { data: walletBalance, isLoading: isLoadingWalletBalance } =
    useGetWalletBalanceQuery({
      walletId,
    });

  const { unit, wallet, loading } = useWallet(walletId);

  const isLoading = isLoadingWalletBalance || loading;

  const gbtcBalance = useMemo(() => {
    if (
      isLoading ||
      !wallet ||
      !walletBalance ||
      !('spendableBalance' in walletBalance)
    ) {
      return undefined;
    }

    if (wallet.type === WalletType.STANDARD_WALLET) {
      return mojoToGreenBTCLocaleString(walletBalance.spendableBalance, locale);
    }

    if (wallet.type === WalletType.CAT) {
      return mojoToCATLocaleString(walletBalance.spendableBalance, locale);
    }

    return undefined;
  }, [
    isLoading,
    wallet,
    walletBalance,
    walletBalance?.spendableBalance,
    locale,
  ]);

  if (!isLoading && gbtcBalance === undefined) {
    return null;
  }

  return (
    <Trans>
      Spendable Balance:{' '}
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          {gbtcBalance}
          &nbsp;
          {unit?.toUpperCase()}
        </>
      )}
    </Trans>
  );
}
