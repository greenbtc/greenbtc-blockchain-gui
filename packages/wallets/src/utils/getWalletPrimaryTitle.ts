import { WalletType } from '@greenbtc-network/api';
import type { Wallet } from '@greenbtc-network/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'GreenBTC';
    default:
      return wallet.meta?.name ?? wallet.name;
  }
}
