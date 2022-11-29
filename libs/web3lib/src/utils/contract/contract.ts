import { useCallback } from 'react';
import { Contract, ContractInterface } from 'ethers';
import { useProvider, useSigner } from 'wagmi';
import { getChainConstant, ChainConstant } from '../chain';
import { AbiOrAbiMap, AddressOrAddressMap } from './types';

const useGetContract = <T extends Contract = Contract>(
  abiOrAbiMap: AbiOrAbiMap,
  useSignerIfPossible: boolean = true
) => {
  const provider = useProvider();
  const { data: signer } = useSigner();
  const chainId = provider.network.chainId;
  const abi = Array.isArray(abiOrAbiMap)
    ? abiOrAbiMap
    : getChainConstant(abiOrAbiMap as ChainConstant<ContractInterface>, chainId);
  const signerOrProvider = useSignerIfPossible && signer ? signer : provider;

  return useCallback((addressOrAddressMap: AddressOrAddressMap) => {
    const address =
      typeof addressOrAddressMap === 'string'
        ? addressOrAddressMap
        : getChainConstant(addressOrAddressMap as ChainConstant<string>, chainId);

    if (!address) {
      return [null, chainId];
    }

    return [new Contract(address, abi, signerOrProvider) as T, chainId];
  }, []);
};
