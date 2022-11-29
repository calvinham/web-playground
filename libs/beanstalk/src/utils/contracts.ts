import {
  AddressOrAddressMap,
  ChainConstant,
  SupportedChainId,
  useChainConstant,
  useContractReadOnly,
  useGetContract
} from '@wb/web3lib';
import { ethers } from 'ethers';
import { useContract as useWagmiContract, useProvider } from 'wagmi';
import BEANSTALK_ABI from '../constants/abi/beanstalk/Beanstalk.json';
import BEANSTALK_PRICE_ABI from '../constants/abi/beanstalk/BeanstalkPrice.json';
import AGGREGATOR_V3_ABI from '../constants/abi/chainlink/AggregatorV3.json';
import ERC20_ABI from '../constants/abi/ERC20.json';
import { BEANSTALK_ADDRESSES, BEANSTALK_PRICE_ADDRESSES } from '../constants/addresses';
import { AggregatorV3, Beanstalk, BeanstalkPrice, ERC20 } from '../generated';

const BEANSTALK_PRICE_ABIS = {
  [SupportedChainId.MAINNET]: BEANSTALK_PRICE_ABI
};

export function useBeanstalkPriceContract() {
  return useContractReadOnly<BeanstalkPrice>(BEANSTALK_PRICE_ADDRESSES, BEANSTALK_PRICE_ABIS);
}

export function useBeanstalkContract(signer?: ethers.Signer | null) {
  const address = useChainConstant(BEANSTALK_ADDRESSES);
  const provider = useProvider();
  return useWagmiContract({
    address,
    abi: BEANSTALK_ABI,
    signerOrProvider: signer || provider
  }) as Beanstalk;
}

export function useGetERC20Contract() {
  return useGetContract<ERC20>(ERC20_ABI, true);
}

export function useERC20Contract(addressOrAddressMap: AddressOrAddressMap) {
  const get = useGetERC20Contract();
  return get(addressOrAddressMap);
}

/** used to access chainlink price data feeds */
export function useAggregatorV3Contract(
  chainConstant: ChainConstant<string>,
  signer?: ethers.Signer | null
) {
  const address = useChainConstant(chainConstant);
  const provider = useProvider();
  return useWagmiContract({
    address,
    abi: AGGREGATOR_V3_ABI,
    signerOrProvider: signer || provider
  }) as AggregatorV3;
}
