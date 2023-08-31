import BigNumber from 'bignumber.js';
import React from 'react';

import useCurrencyCode from '../../hooks/useCurrencyCode';
import mojoToGreenBTC from '../../utils/mojoToGreenBTCLocaleString';
import FormatLargeNumber from '../FormatLargeNumber';

export type MojoToGreenBTCProps = {
  value: number | BigNumber;
};

export default function MojoToGreenBTC(props: MojoToGreenBTCProps) {
  const { value } = props;
  const currencyCode = useCurrencyCode();
  const updatedValue = mojoToGreenBTC(value);

  return (
    <>
      <FormatLargeNumber value={updatedValue} />
      &nbsp;{currencyCode ?? ''}
    </>
  );
}
