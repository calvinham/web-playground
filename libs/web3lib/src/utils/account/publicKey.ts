import { useAccount as useWagmiAccount } from 'wagmi';

export function getPublicKey(pubkey: string) {
  return pubkey.toLowerCase();
}

export function useAccountPublicKey() {
  const account = useWagmiAccount();
  return account?.address && getPublicKey(account.address);
}

export function trimPublicKey(address: string, showSuffix: boolean = true) {
  return `${address.substring(0, 6)}${showSuffix ? `..${address.slice(-4)}` : ''}`;
}

// alias
export const getPubkey = getPublicKey;

// alias
export const useAccountPubkey = useAccountPublicKey;
