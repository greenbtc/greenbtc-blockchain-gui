import { useGetBlockchainStateQuery } from '@greenbtc-network/api-react';
import { FormatLargeNumber, CardSimple } from '@greenbtc-network/core';
import { Trans } from '@lingui/macro';
import {Grid} from "@mui/material";
import React from 'react';

export default function FullNodeCardStake() {
  const { data, isLoading, error } = useGetBlockchainStateQuery();
  const stakeFarm = data?.stakeFarm ?? 0;
  const stakeFarmCalc = data?.stakeFarmCalc ?? 0;
  const stakeLock = data?.stakeLock ?? 0;

  return (
    <>
    <Grid xs={12} sm={6} md={4} item>
      <CardSimple
        loading={isLoading}
        valueColor="textPrimary"
        title={<Trans>Total Network Stake</Trans>}
        value={<FormatLargeNumber value={stakeFarmCalc} />}
        error={error}
      />
    </Grid>
    <Grid xs={12} sm={6} md={4} item>
      <CardSimple
        loading={isLoading}
        valueColor="textPrimary"
        title={<Trans>Total Network Real Stake</Trans>}
        value={<FormatLargeNumber value={stakeFarm} />}
        error={error} />
    </Grid>
    <Grid xs={12} sm={6} md={4} item>
      <CardSimple
        loading={isLoading}
        valueColor="textPrimary"
        title={<Trans>Total Network Lock</Trans>}
        value={<FormatLargeNumber value={stakeLock} />}
        error={error}
      />
    </Grid>
    </>
  );
}
