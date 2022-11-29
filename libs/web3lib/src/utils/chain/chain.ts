import { useCallback } from 'react';
import { ChainConstant, SupportedChain } from './types';
import { useNetwork } from 'wagmi';

export function getChainConstant<T extends ChainConstant<any>>(map: T, chainId?: number) {
  if (!chainId || !SupportedChain[chainId]) {
    return map[SupportedChain.MAINNET];
  }
  return map[chainId];
}

export function useGetChainConstant() {
  const { chain } = useNetwork();
  return useCallback(
    <T extends ChainConstant<any>>(map: T) => getChainConstant(map, chain?.id),
    [chain?.id]
  );
}

export function useChainConstant<T extends ChainConstant<any>>(map: T): T[keyof T] {
  const { chain } = useNetwork();
  return getChainConstant(map, chain?.id);
}
