import { Button, Flex, Loading } from '@greenbtc-network/core';
import { Trans } from '@lingui/macro';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

import usePlotNFTs from '../../hooks/usePlotNFTs';
import useUnconfirmedPlotNFTs from '../../hooks/useUnconfirmedPlotNFTs';
import PlotExternalNFTCard from '../plotNFT/PlotExternalNFTCard';
import PlotNFTCard from '../plotNFT/PlotNFTCard';
import PlotNFTUnconfirmedCard from '../plotNFT/PlotNFTUnconfirmedCard';

import PoolHero from './PoolHero';

export default function PoolOverview() {
  const navigate = useNavigate();
  const { nfts, external, loading } = usePlotNFTs();
  const { unconfirmed } = useUnconfirmedPlotNFTs();

  const hasNFTs = (!!nfts && !!nfts?.length) || !!external?.length || unconfirmed.length;

  function handleAddPool() {
    navigate('/dashboard/pool/add');
  }

  if (loading) {
    return <Loading center />;
  }

  if (!hasNFTs) {
    return <PoolHero />;
  }

  return (
    <Flex flexDirection="column" gap={1}>
      <Flex gap={1}>
        <Flex flexGrow={1}>
          <Flex flexDirection="column" gap={1}>
            <Typography variant="h5" gutterBottom>
              <Trans>Your Pool Overview</Trans>
            </Typography>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap={1}>
          <Flex alignItems="center" justifyContent="flex-end" gap={1}>
            <Button variant="outlined" color="primary" onClick={handleAddPool}>
              + Add a Plot NFT
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap={1}>
        <Grid spacing={3} alignItems="stretch" container>
          {unconfirmed.map((unconfirmedPlotNFT) => (
            <Grid key={unconfirmedPlotNFT.transactionId} xs={12} md={6} item>
              <PlotNFTUnconfirmedCard unconfirmedPlotNFT={unconfirmedPlotNFT} />
            </Grid>
          ))}
          {nfts?.map((item) => (
            <Grid key={item.poolState.p2SingletonPuzzleHash} xs={12} md={6} item>
              <PlotNFTCard nft={item} />
            </Grid>
          ))}
          {external?.map((item) => (
            <Grid key={item.poolState.p2SingletonPuzzleHash} xs={12} md={6} item>
              <PlotExternalNFTCard nft={item} />
            </Grid>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}
