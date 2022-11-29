import { ContractInterface } from 'ethers';
import { ChainConstant } from '../chain';

export type AddressOrAddressMap = string | ChainConstant<string>;
export type AbiOrAbiMap = ContractInterface | ChainConstant<ContractInterface>;
