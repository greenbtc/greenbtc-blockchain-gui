import Wallet from '../services/WalletService';
import BigNumber from "bignumber.js";
import Transaction from "../@types/Transaction";
import NFTRecoverInfo from "../@types/NFTRecoverInfo";

export default class StakingWallet extends Wallet {
  async stakingInfo(args: {fingerprint: number}) {
    return this.command<{
      balance: number;
      address: string;
    }>('staking_info', args);
  }

  async stakingSend(args: {amount: BigNumber;fingerprint: number;}) {
    return this.command<{
      transaction: Transaction;
      transactionId: string
    }>('staking_send', args);
  }

  async stakingWithdraw(args: {amount: BigNumber; fingerprint: number;}) {
    return this.command<{
      transaction: Transaction;
      transactionId: string
    }>('staking_withdraw', args);
  }

  async findPoolNFT(args: {launcherId: string, contractAddress: string}) {
    return this.command<NFTRecoverInfo>('find_pool_nft', args);
  }

  async recoverPoolNFT(args: {launcherId: string, contractAddress: string}) {
      return this.command<{
        amount: number;
        total_amount:number;
        contract_address: string;
        status: string;
        error: string;
      }>('recover_pool_nft', args);
  }
}
