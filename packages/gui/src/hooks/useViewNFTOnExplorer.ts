import type { NFTInfo } from '@greenbtc-network/api';
import { useCurrencyCode } from '@greenbtc-network/core';

import useOpenExternal from './useOpenExternal';

/* ========================================================================== */

function getMintGardenURL(nft: NFTInfo, testnet: boolean) {
  const url = `https://${testnet ? 'testnet.' : ''}mintgarden.io/nfts/${nft.$nftId}`;
  return url;
}

function getSpacescanURL(nft: NFTInfo, testnet: boolean) {
  const url = `https://spacescan.io/${testnet ? 'tgbtc10' : 'gbtc'}/nft/${nft.$nftId}`;
  return url;
}

/* ========================================================================== */

export enum NFTExplorer {
  MintGarden = 'mintgarden',
  Spacescan = 'spacescan',
}

const UrlBuilderMapping = {
  [NFTExplorer.MintGarden]: getMintGardenURL,
  [NFTExplorer.Spacescan]: getSpacescanURL,
};

export default function useViewNFTOnExplorer() {
  const openExternal = useOpenExternal();
  const testnet = useCurrencyCode() === 'TGBTC';

  function handleViewNFTOnExplorer(nft: NFTInfo, explorer: NFTExplorer) {
    const urlBuilder = UrlBuilderMapping[explorer];
    const url = urlBuilder(nft, testnet);

    openExternal(url);
  }

  return handleViewNFTOnExplorer;
}
