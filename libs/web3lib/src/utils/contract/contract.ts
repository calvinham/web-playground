import { SupportedChainId } from './../chain/types';
import { useCallback, useMemo } from 'react';
import { Contract, ContractInterface, ethers } from 'ethers';
import { useProvider, useSigner } from 'wagmi';
import { getChainConstant, ChainConstant } from '../chain';
import { AbiOrAbiMap, AddressOrAddressMap } from './types';
import { ERC20 } from '@wb/beanstalk';

type IUseContract<T extends Contract = Contract> = {
  contract: T | null;
  chainId: SupportedChainId;
};

export function useContractReadOnly<T extends Contract = Contract>(
  addressOrAddressMap: AddressOrAddressMap,
  abiOrAbiMap: AbiOrAbiMap
): IUseContract<T> {
  const provider = useProvider();

  const address =
    typeof addressOrAddressMap === 'string'
      ? addressOrAddressMap
      : getChainConstant(addressOrAddressMap, provider.network.chainId);

  const abi = Array.isArray(abiOrAbiMap)
    ? abiOrAbiMap
    : getChainConstant(abiOrAbiMap as ChainConstant<ContractInterface>, provider.network.chainId);

  return useMemo(() => {
    return {
      contract: address && abi ? new ethers.Contract(address, abi, provider) : null,
      chainId: provider.network.chainId,
    } as IUseContract<T>;
  }, [address, provider, abi]);
}

export function useGetContract<T extends Contract = Contract>(
  abiOrAbiMap: AbiOrAbiMap,
  useSignerIfPossible: boolean = true
): (addressOrAddressMap: AddressOrAddressMap) => IUseContract<T> {
  const provider = useProvider();
  const { data: signer } = useSigner();
  const chainId = provider.network.chainId;
  const abi = Array.isArray(abiOrAbiMap)
    ? abiOrAbiMap
    : getChainConstant(abiOrAbiMap as ChainConstant<ContractInterface>, chainId);
  const signerOrProvider = useSignerIfPossible && signer ? signer : provider;

  return useCallback(
    (addressOrAddressMap: AddressOrAddressMap) => {
      const address =
        typeof addressOrAddressMap === 'string'
          ? addressOrAddressMap
          : getChainConstant(addressOrAddressMap as ChainConstant<string>, chainId);

      return {
        contract: address ? new Contract(address, abi, signerOrProvider) : null,
        chainId,
      } as IUseContract<T>;
    },
    [chainId, abi, signerOrProvider]
  );
}

export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: AddressOrAddressMap,
  abiOrAbiMap: AbiOrAbiMap,
  useSignerIfPossible: boolean = true
): IUseContract<T> {
  const getContract = useGetContract(abiOrAbiMap, useSignerIfPossible);
  return getContract(addressOrAddressMap) as IUseContract<T>;
}
