import React from 'react';
import { Trans } from '@lingui/macro';
import { FormatLargeNumber, CardSimple } from '@greenbtc/core';
import { useGetTotalHarvestersSummaryQuery } from '@greenbtc/api-react';

export default function PlotCardTotalHarvesters() {
  const { harvesters, isLoading } = useGetTotalHarvestersSummaryQuery();

  return (
    <CardSimple
      title={<Trans>Total Harvesters</Trans>}
      value={<FormatLargeNumber value={harvesters} />}
      loading={isLoading}
    />
  );
}
