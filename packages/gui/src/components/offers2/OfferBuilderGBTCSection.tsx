import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useFieldArray, useWatch } from 'react-hook-form';
import { Farming } from '@greenbtc/icons';
import {
  Loading,
  greenBTCToMojo,
  mojoToGreenBTCLocaleString,
  useCurrencyCode,
} from '@greenbtc/core';
import OfferBuilderSection from './OfferBuilderSection';
import OfferBuilderWalletAmount from './OfferBuilderWalletAmount';
import useOfferBuilderContext from '../../hooks/useOfferBuilderContext';
import useStandardWallet from '../../hooks/useStandardWallet';

export type OfferBuilderGBTCSectionProps = {
  name: string;
  offering?: boolean;
  muted?: boolean;
};

export default function OfferBuilderGBTCSection(
  props: OfferBuilderGBTCSectionProps,
) {
  const { name, offering, muted = false } = props;
  const { wallet, loading: isLoadingWallet } = useStandardWallet();
  const currencyCode = useCurrencyCode();
  const { fields, append, remove } = useFieldArray({
    name,
  });
  const amount =
    useWatch({
      name,
    })?.[0]?.amount ?? 0; // Assume there's only 1 GBTC field per trade side
  const {
    readOnly,
    requestedRoyalties,
    offeredRoyalties,
    isCalculatingRoyalties,
  } = useOfferBuilderContext();

  // Yes, this is correct. Fungible (GBTC) assets used to pay royalties are from the opposite side of the trade.
  const allRoyalties = offering ? requestedRoyalties : offeredRoyalties;

  const loading = isLoadingWallet || isCalculatingRoyalties;

  const [amountWithRoyalties, royaltyPayments] = useMemo(() => {
    if (!readOnly || !allRoyalties) {
      return [];
    }

    let amountWithRoyalties = greenBTCToMojo(amount);
    const rows: Record<string, any>[] = [];
    Object.entries(allRoyalties).forEach(([nftId, royaltyPayments]) => {
      const matchingPayment = royaltyPayments?.find(
        (payment) => payment.asset === 'gbtc',
      );
      if (matchingPayment) {
        amountWithRoyalties = amountWithRoyalties.plus(matchingPayment.amount);
        rows.push({
          nftId,
          payment: {
            ...matchingPayment,
            displayAmount: mojoToGreenBTCLocaleString(matchingPayment.amount),
          },
        });
      }
    });

    return [mojoToGreenBTCLocaleString(amountWithRoyalties), rows];
  }, [readOnly, allRoyalties]);

  function handleAdd() {
    if (!fields.length) {
      append({
        amount: '',
      });
    }
  }

  function handleRemove(index: number) {
    remove(index);
  }

  return (
    <OfferBuilderSection
      icon={<Farming />}
      title={currencyCode}
      subtitle={
        <Trans>
          GreenBTC ({currencyCode}) is a digital currency that is secure and
          sustainable
        </Trans>
      }
      onAdd={!fields.length ? handleAdd : undefined}
      expanded={!!fields.length}
      muted={muted}
    >
      {loading ? (
        <Loading />
      ) : (
        fields.map((field, index) => (
          <OfferBuilderWalletAmount
            key={field.id}
            walletId={wallet.id}
            name={`${name}.${index}.amount`}
            onRemove={() => handleRemove(index)}
            hideBalance={!offering}
            amountWithRoyalties={amountWithRoyalties}
            royaltyPayments={royaltyPayments}
          />
        ))
      )}
    </OfferBuilderSection>
  );
}
