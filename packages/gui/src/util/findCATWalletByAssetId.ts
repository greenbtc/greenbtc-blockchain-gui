import type { Wallet } from '@greenbtc/api';
import { WalletType } from '@greenbtc/api';

export default function findCATWalletByAssetId(
  wallets: Wallet[],
  assetId: string,
) {
  return wallets.find(
    (wallet) =>
      wallet.type === WalletType.CAT &&
      wallet.meta?.assetId?.toLowerCase() === assetId.toLowerCase(),
  );
}
