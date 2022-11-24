import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type AddDeposit = SiloEvent & {
  __typename?: 'AddDeposit';
  /**  Account removing deposit */
  account: Scalars['String'];
  /**  Amount of token removed  */
  amount: Scalars['BigInt'];
  /**  BDV of the deposit  */
  bdv: Scalars['BigInt'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /** addDeposit-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /**  Season of deposit removed  */
  season: Scalars['Int'];
  /**  Token removed */
  token: Scalars['String'];
};

export type AddDeposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bdv?: InputMaybe<Scalars['BigInt']>;
  bdv_gt?: InputMaybe<Scalars['BigInt']>;
  bdv_gte?: InputMaybe<Scalars['BigInt']>;
  bdv_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bdv_lt?: InputMaybe<Scalars['BigInt']>;
  bdv_lte?: InputMaybe<Scalars['BigInt']>;
  bdv_not?: InputMaybe<Scalars['BigInt']>;
  bdv_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum AddDeposit_OrderBy {
  Account = 'account',
  Amount = 'amount',
  Bdv = 'bdv',
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol',
  Season = 'season',
  Token = 'token'
}

export type Alias = {
  __typename?: 'Alias';
  address: Scalars['String'];
  alias: Scalars['String'];
  created: Scalars['Int'];
  id: Scalars['String'];
  ipfs?: Maybe<Scalars['String']>;
};

export type AliasWhere = {
  address?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  alias?: InputMaybe<Scalars['String']>;
  alias_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created?: InputMaybe<Scalars['Int']>;
  created_gt?: InputMaybe<Scalars['Int']>;
  created_gte?: InputMaybe<Scalars['Int']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_lt?: InputMaybe<Scalars['Int']>;
  created_lte?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Bean = {
  __typename?: 'Bean';
  dailySnapshot: Array<BeanDailySnapshot>;
  decimals: Scalars['BigInt'];
  hourlySnapshot: Array<BeanHourlySnapshot>;
  id: Scalars['ID'];
  lastCross: Scalars['BigInt'];
  marketCap: Scalars['BigDecimal'];
  price: Scalars['BigDecimal'];
  totalCrosses: Scalars['Int'];
  totalLiquidity: Scalars['BigInt'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  totalSupply: Scalars['BigInt'];
  totalVolume: Scalars['BigInt'];
  totalVolumeUSD: Scalars['BigDecimal'];
};


export type BeanDailySnapshotArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeanDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BeanDailySnapshot_Filter>;
};


export type BeanHourlySnapshotArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeanHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BeanHourlySnapshot_Filter>;
};

export type BeanDailySnapshot = {
  __typename?: 'BeanDailySnapshot';
  bean: Bean;
  blockNumber: Scalars['BigInt'];
  crosses: Array<Cross>;
  dailyCrosses: Scalars['Int'];
  dailyLiquidity: Scalars['BigInt'];
  dailyLiquidityUSD: Scalars['BigDecimal'];
  dailyVolume: Scalars['BigInt'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  deltaBeans: Scalars['BigInt'];
  id: Scalars['ID'];
  marketCap: Scalars['BigDecimal'];
  price: Scalars['BigDecimal'];
  season: Scalars['Int'];
  timestamp: Scalars['BigInt'];
  totalCrosses: Scalars['Int'];
  totalLiquidity: Scalars['BigInt'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  totalSupply: Scalars['BigInt'];
  totalVolume: Scalars['BigInt'];
  totalVolumeUSD: Scalars['BigDecimal'];
};


export type BeanDailySnapshotCrossesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Cross_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Cross_Filter>;
};

export type BeanDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  bean?: InputMaybe<Scalars['String']>;
  bean_?: InputMaybe<Bean_Filter>;
  bean_contains?: InputMaybe<Scalars['String']>;
  bean_contains_nocase?: InputMaybe<Scalars['String']>;
  bean_ends_with?: InputMaybe<Scalars['String']>;
  bean_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bean_gt?: InputMaybe<Scalars['String']>;
  bean_gte?: InputMaybe<Scalars['String']>;
  bean_in?: InputMaybe<Array<Scalars['String']>>;
  bean_lt?: InputMaybe<Scalars['String']>;
  bean_lte?: InputMaybe<Scalars['String']>;
  bean_not?: InputMaybe<Scalars['String']>;
  bean_not_contains?: InputMaybe<Scalars['String']>;
  bean_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bean_not_ends_with?: InputMaybe<Scalars['String']>;
  bean_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bean_not_in?: InputMaybe<Array<Scalars['String']>>;
  bean_not_starts_with?: InputMaybe<Scalars['String']>;
  bean_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bean_starts_with?: InputMaybe<Scalars['String']>;
  bean_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crosses_?: InputMaybe<Cross_Filter>;
  dailyCrosses?: InputMaybe<Scalars['Int']>;
  dailyCrosses_gt?: InputMaybe<Scalars['Int']>;
  dailyCrosses_gte?: InputMaybe<Scalars['Int']>;
  dailyCrosses_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyCrosses_lt?: InputMaybe<Scalars['Int']>;
  dailyCrosses_lte?: InputMaybe<Scalars['Int']>;
  dailyCrosses_not?: InputMaybe<Scalars['Int']>;
  dailyCrosses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyLiquidity?: InputMaybe<Scalars['BigInt']>;
  dailyLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  dailyLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  dailyLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  dailyLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  dailyLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  dailyLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume?: InputMaybe<Scalars['BigInt']>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_gt?: InputMaybe<Scalars['BigInt']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigInt']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume_lt?: InputMaybe<Scalars['BigInt']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigInt']>;
  dailyVolume_not?: InputMaybe<Scalars['BigInt']>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeans?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_gt?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_gte?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeans_lt?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_lte?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_not?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketCap?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_gt?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_gte?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  marketCap_lt?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_lte?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_not?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price?: InputMaybe<Scalars['BigDecimal']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price_lt?: InputMaybe<Scalars['BigDecimal']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']>;
  price_not?: InputMaybe<Scalars['BigDecimal']>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCrosses?: InputMaybe<Scalars['Int']>;
  totalCrosses_gt?: InputMaybe<Scalars['Int']>;
  totalCrosses_gte?: InputMaybe<Scalars['Int']>;
  totalCrosses_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCrosses_lt?: InputMaybe<Scalars['Int']>;
  totalCrosses_lte?: InputMaybe<Scalars['Int']>;
  totalCrosses_not?: InputMaybe<Scalars['Int']>;
  totalCrosses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalLiquidity?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum BeanDailySnapshot_OrderBy {
  Bean = 'bean',
  BlockNumber = 'blockNumber',
  Crosses = 'crosses',
  DailyCrosses = 'dailyCrosses',
  DailyLiquidity = 'dailyLiquidity',
  DailyLiquidityUsd = 'dailyLiquidityUSD',
  DailyVolume = 'dailyVolume',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DeltaBeans = 'deltaBeans',
  Id = 'id',
  MarketCap = 'marketCap',
  Price = 'price',
  Season = 'season',
  Timestamp = 'timestamp',
  TotalCrosses = 'totalCrosses',
  TotalLiquidity = 'totalLiquidity',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalSupply = 'totalSupply',
  TotalVolume = 'totalVolume',
  TotalVolumeUsd = 'totalVolumeUSD'
}

export type BeanHourlySnapshot = {
  __typename?: 'BeanHourlySnapshot';
  bean: Bean;
  blockNumber: Scalars['BigInt'];
  crosses: Array<Cross>;
  deltaBeans: Scalars['BigInt'];
  hourlyCrosses: Scalars['Int'];
  hourlyLiquidity: Scalars['BigInt'];
  hourlyLiquidityUSD: Scalars['BigDecimal'];
  hourlyVolume: Scalars['BigInt'];
  hourlyVolumeUSD: Scalars['BigDecimal'];
  id: Scalars['ID'];
  marketCap: Scalars['BigDecimal'];
  price: Scalars['BigDecimal'];
  season: Scalars['Int'];
  timestamp: Scalars['BigInt'];
  totalCrosses: Scalars['Int'];
  totalLiquidity: Scalars['BigInt'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  totalSupply: Scalars['BigInt'];
  totalVolume: Scalars['BigInt'];
  totalVolumeUSD: Scalars['BigDecimal'];
};


export type BeanHourlySnapshotCrossesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Cross_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Cross_Filter>;
};

export type BeanHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  bean?: InputMaybe<Scalars['String']>;
  bean_?: InputMaybe<Bean_Filter>;
  bean_contains?: InputMaybe<Scalars['String']>;
  bean_contains_nocase?: InputMaybe<Scalars['String']>;
  bean_ends_with?: InputMaybe<Scalars['String']>;
  bean_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bean_gt?: InputMaybe<Scalars['String']>;
  bean_gte?: InputMaybe<Scalars['String']>;
  bean_in?: InputMaybe<Array<Scalars['String']>>;
  bean_lt?: InputMaybe<Scalars['String']>;
  bean_lte?: InputMaybe<Scalars['String']>;
  bean_not?: InputMaybe<Scalars['String']>;
  bean_not_contains?: InputMaybe<Scalars['String']>;
  bean_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bean_not_ends_with?: InputMaybe<Scalars['String']>;
  bean_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bean_not_in?: InputMaybe<Array<Scalars['String']>>;
  bean_not_starts_with?: InputMaybe<Scalars['String']>;
  bean_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bean_starts_with?: InputMaybe<Scalars['String']>;
  bean_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  crosses_?: InputMaybe<Cross_Filter>;
  deltaBeans?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_gt?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_gte?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeans_lt?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_lte?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_not?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyCrosses?: InputMaybe<Scalars['Int']>;
  hourlyCrosses_gt?: InputMaybe<Scalars['Int']>;
  hourlyCrosses_gte?: InputMaybe<Scalars['Int']>;
  hourlyCrosses_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyCrosses_lt?: InputMaybe<Scalars['Int']>;
  hourlyCrosses_lte?: InputMaybe<Scalars['Int']>;
  hourlyCrosses_not?: InputMaybe<Scalars['Int']>;
  hourlyCrosses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyLiquidity?: InputMaybe<Scalars['BigInt']>;
  hourlyLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  hourlyLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  hourlyLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  hourlyLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  hourlyLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  hourlyLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyVolume?: InputMaybe<Scalars['BigInt']>;
  hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolume_gt?: InputMaybe<Scalars['BigInt']>;
  hourlyVolume_gte?: InputMaybe<Scalars['BigInt']>;
  hourlyVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyVolume_lt?: InputMaybe<Scalars['BigInt']>;
  hourlyVolume_lte?: InputMaybe<Scalars['BigInt']>;
  hourlyVolume_not?: InputMaybe<Scalars['BigInt']>;
  hourlyVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketCap?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_gt?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_gte?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  marketCap_lt?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_lte?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_not?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price?: InputMaybe<Scalars['BigDecimal']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price_lt?: InputMaybe<Scalars['BigDecimal']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']>;
  price_not?: InputMaybe<Scalars['BigDecimal']>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCrosses?: InputMaybe<Scalars['Int']>;
  totalCrosses_gt?: InputMaybe<Scalars['Int']>;
  totalCrosses_gte?: InputMaybe<Scalars['Int']>;
  totalCrosses_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCrosses_lt?: InputMaybe<Scalars['Int']>;
  totalCrosses_lte?: InputMaybe<Scalars['Int']>;
  totalCrosses_not?: InputMaybe<Scalars['Int']>;
  totalCrosses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalLiquidity?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum BeanHourlySnapshot_OrderBy {
  Bean = 'bean',
  BlockNumber = 'blockNumber',
  Crosses = 'crosses',
  DeltaBeans = 'deltaBeans',
  HourlyCrosses = 'hourlyCrosses',
  HourlyLiquidity = 'hourlyLiquidity',
  HourlyLiquidityUsd = 'hourlyLiquidityUSD',
  HourlyVolume = 'hourlyVolume',
  HourlyVolumeUsd = 'hourlyVolumeUSD',
  Id = 'id',
  MarketCap = 'marketCap',
  Price = 'price',
  Season = 'season',
  Timestamp = 'timestamp',
  TotalCrosses = 'totalCrosses',
  TotalLiquidity = 'totalLiquidity',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalSupply = 'totalSupply',
  TotalVolume = 'totalVolume',
  TotalVolumeUsd = 'totalVolumeUSD'
}

export type Bean_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  dailySnapshot_?: InputMaybe<BeanDailySnapshot_Filter>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlySnapshot_?: InputMaybe<BeanHourlySnapshot_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastCross?: InputMaybe<Scalars['BigInt']>;
  lastCross_gt?: InputMaybe<Scalars['BigInt']>;
  lastCross_gte?: InputMaybe<Scalars['BigInt']>;
  lastCross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastCross_lt?: InputMaybe<Scalars['BigInt']>;
  lastCross_lte?: InputMaybe<Scalars['BigInt']>;
  lastCross_not?: InputMaybe<Scalars['BigInt']>;
  lastCross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marketCap?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_gt?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_gte?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  marketCap_lt?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_lte?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_not?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price?: InputMaybe<Scalars['BigDecimal']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price_lt?: InputMaybe<Scalars['BigDecimal']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']>;
  price_not?: InputMaybe<Scalars['BigDecimal']>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalCrosses?: InputMaybe<Scalars['Int']>;
  totalCrosses_gt?: InputMaybe<Scalars['Int']>;
  totalCrosses_gte?: InputMaybe<Scalars['Int']>;
  totalCrosses_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCrosses_lt?: InputMaybe<Scalars['Int']>;
  totalCrosses_lte?: InputMaybe<Scalars['Int']>;
  totalCrosses_not?: InputMaybe<Scalars['Int']>;
  totalCrosses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalLiquidity?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Bean_OrderBy {
  DailySnapshot = 'dailySnapshot',
  Decimals = 'decimals',
  HourlySnapshot = 'hourlySnapshot',
  Id = 'id',
  LastCross = 'lastCross',
  MarketCap = 'marketCap',
  Price = 'price',
  TotalCrosses = 'totalCrosses',
  TotalLiquidity = 'totalLiquidity',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalSupply = 'totalSupply',
  TotalVolume = 'totalVolume',
  TotalVolumeUsd = 'totalVolumeUSD'
}

export type Beanstalk = {
  __typename?: 'Beanstalk';
  /**  Array of the addresses for all active farmers in the silo  */
  activeFarmers: Array<Scalars['String']>;
  /**  Array of the addresses for all farmers that had silo transfers and need stalk/seeds/roots updated  */
  farmersToUpdate: Array<Scalars['String']>;
  /**  Field level data  */
  field: Field;
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ID'];
  /**  Last season called  */
  lastSeason: Scalars['Int'];
  /**  Timestamp of the latest DiamondCut call  */
  lastUpgrade: Scalars['BigInt'];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String'];
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars['String'];
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String'];
  /**  Season specific data  */
  seasons: Array<Season>;
  /**  Silo level data  */
  silo: Silo;
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars['String'];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String'];
};


export type BeanstalkSeasonsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Season_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Season_Filter>;
};

export type Beanstalk_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeFarmers?: InputMaybe<Array<Scalars['String']>>;
  activeFarmers_contains?: InputMaybe<Array<Scalars['String']>>;
  activeFarmers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  activeFarmers_not?: InputMaybe<Array<Scalars['String']>>;
  activeFarmers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  activeFarmers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  farmersToUpdate?: InputMaybe<Array<Scalars['String']>>;
  farmersToUpdate_contains?: InputMaybe<Array<Scalars['String']>>;
  farmersToUpdate_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  farmersToUpdate_not?: InputMaybe<Array<Scalars['String']>>;
  farmersToUpdate_not_contains?: InputMaybe<Array<Scalars['String']>>;
  farmersToUpdate_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  field_?: InputMaybe<Field_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastSeason?: InputMaybe<Scalars['Int']>;
  lastSeason_gt?: InputMaybe<Scalars['Int']>;
  lastSeason_gte?: InputMaybe<Scalars['Int']>;
  lastSeason_in?: InputMaybe<Array<Scalars['Int']>>;
  lastSeason_lt?: InputMaybe<Scalars['Int']>;
  lastSeason_lte?: InputMaybe<Scalars['Int']>;
  lastSeason_not?: InputMaybe<Scalars['Int']>;
  lastSeason_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpgrade?: InputMaybe<Scalars['BigInt']>;
  lastUpgrade_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpgrade_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpgrade_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpgrade_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpgrade_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpgrade_not?: InputMaybe<Scalars['BigInt']>;
  lastUpgrade_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  methodologyVersion?: InputMaybe<Scalars['String']>;
  methodologyVersion_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_gt?: InputMaybe<Scalars['String']>;
  methodologyVersion_gte?: InputMaybe<Scalars['String']>;
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_lt?: InputMaybe<Scalars['String']>;
  methodologyVersion_lte?: InputMaybe<Scalars['String']>;
  methodologyVersion_not?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion?: InputMaybe<Scalars['String']>;
  schemaVersion_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_gt?: InputMaybe<Scalars['String']>;
  schemaVersion_gte?: InputMaybe<Scalars['String']>;
  schemaVersion_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_lt?: InputMaybe<Scalars['String']>;
  schemaVersion_lte?: InputMaybe<Scalars['String']>;
  schemaVersion_not?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seasons_?: InputMaybe<Season_Filter>;
  silo_?: InputMaybe<Silo_Filter>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion?: InputMaybe<Scalars['String']>;
  subgraphVersion_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_gt?: InputMaybe<Scalars['String']>;
  subgraphVersion_gte?: InputMaybe<Scalars['String']>;
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_lt?: InputMaybe<Scalars['String']>;
  subgraphVersion_lte?: InputMaybe<Scalars['String']>;
  subgraphVersion_not?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Beanstalk_OrderBy {
  ActiveFarmers = 'activeFarmers',
  FarmersToUpdate = 'farmersToUpdate',
  Field = 'field',
  Id = 'id',
  LastSeason = 'lastSeason',
  LastUpgrade = 'lastUpgrade',
  MethodologyVersion = 'methodologyVersion',
  Name = 'name',
  SchemaVersion = 'schemaVersion',
  Seasons = 'seasons',
  Silo = 'silo',
  Slug = 'slug',
  SubgraphVersion = 'subgraphVersion'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Chop = SiloEvent & {
  __typename?: 'Chop';
  /**  Amount being chopped */
  amount: Scalars['BigInt'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Address chopping  */
  farmer: Scalars['String'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /** chop-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /**  Underlying token  */
  underlying: Scalars['String'];
  /**  Unripe token being chopped  */
  unripe: Scalars['String'];
};

export type Chop_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmer?: InputMaybe<Scalars['String']>;
  farmer_contains?: InputMaybe<Scalars['String']>;
  farmer_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_ends_with?: InputMaybe<Scalars['String']>;
  farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_gt?: InputMaybe<Scalars['String']>;
  farmer_gte?: InputMaybe<Scalars['String']>;
  farmer_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_lt?: InputMaybe<Scalars['String']>;
  farmer_lte?: InputMaybe<Scalars['String']>;
  farmer_not?: InputMaybe<Scalars['String']>;
  farmer_not_contains?: InputMaybe<Scalars['String']>;
  farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_not_starts_with?: InputMaybe<Scalars['String']>;
  farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_starts_with?: InputMaybe<Scalars['String']>;
  farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  underlying?: InputMaybe<Scalars['String']>;
  underlying_contains?: InputMaybe<Scalars['String']>;
  underlying_contains_nocase?: InputMaybe<Scalars['String']>;
  underlying_ends_with?: InputMaybe<Scalars['String']>;
  underlying_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlying_gt?: InputMaybe<Scalars['String']>;
  underlying_gte?: InputMaybe<Scalars['String']>;
  underlying_in?: InputMaybe<Array<Scalars['String']>>;
  underlying_lt?: InputMaybe<Scalars['String']>;
  underlying_lte?: InputMaybe<Scalars['String']>;
  underlying_not?: InputMaybe<Scalars['String']>;
  underlying_not_contains?: InputMaybe<Scalars['String']>;
  underlying_not_contains_nocase?: InputMaybe<Scalars['String']>;
  underlying_not_ends_with?: InputMaybe<Scalars['String']>;
  underlying_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlying_not_in?: InputMaybe<Array<Scalars['String']>>;
  underlying_not_starts_with?: InputMaybe<Scalars['String']>;
  underlying_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  underlying_starts_with?: InputMaybe<Scalars['String']>;
  underlying_starts_with_nocase?: InputMaybe<Scalars['String']>;
  unripe?: InputMaybe<Scalars['String']>;
  unripe_contains?: InputMaybe<Scalars['String']>;
  unripe_contains_nocase?: InputMaybe<Scalars['String']>;
  unripe_ends_with?: InputMaybe<Scalars['String']>;
  unripe_ends_with_nocase?: InputMaybe<Scalars['String']>;
  unripe_gt?: InputMaybe<Scalars['String']>;
  unripe_gte?: InputMaybe<Scalars['String']>;
  unripe_in?: InputMaybe<Array<Scalars['String']>>;
  unripe_lt?: InputMaybe<Scalars['String']>;
  unripe_lte?: InputMaybe<Scalars['String']>;
  unripe_not?: InputMaybe<Scalars['String']>;
  unripe_not_contains?: InputMaybe<Scalars['String']>;
  unripe_not_contains_nocase?: InputMaybe<Scalars['String']>;
  unripe_not_ends_with?: InputMaybe<Scalars['String']>;
  unripe_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  unripe_not_in?: InputMaybe<Array<Scalars['String']>>;
  unripe_not_starts_with?: InputMaybe<Scalars['String']>;
  unripe_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  unripe_starts_with?: InputMaybe<Scalars['String']>;
  unripe_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Chop_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Farmer = 'farmer',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol',
  Underlying = 'underlying',
  Unripe = 'unripe'
}

export type Cross = {
  __typename?: 'Cross';
  above: Scalars['Boolean'];
  dailySnapshot: BeanDailySnapshot;
  hourlySnapshot: BeanHourlySnapshot;
  id: Scalars['ID'];
  price: Scalars['BigDecimal'];
  timeSinceLastCross: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type Cross_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  above?: InputMaybe<Scalars['Boolean']>;
  above_in?: InputMaybe<Array<Scalars['Boolean']>>;
  above_not?: InputMaybe<Scalars['Boolean']>;
  above_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  dailySnapshot?: InputMaybe<Scalars['String']>;
  dailySnapshot_?: InputMaybe<BeanDailySnapshot_Filter>;
  dailySnapshot_contains?: InputMaybe<Scalars['String']>;
  dailySnapshot_contains_nocase?: InputMaybe<Scalars['String']>;
  dailySnapshot_ends_with?: InputMaybe<Scalars['String']>;
  dailySnapshot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dailySnapshot_gt?: InputMaybe<Scalars['String']>;
  dailySnapshot_gte?: InputMaybe<Scalars['String']>;
  dailySnapshot_in?: InputMaybe<Array<Scalars['String']>>;
  dailySnapshot_lt?: InputMaybe<Scalars['String']>;
  dailySnapshot_lte?: InputMaybe<Scalars['String']>;
  dailySnapshot_not?: InputMaybe<Scalars['String']>;
  dailySnapshot_not_contains?: InputMaybe<Scalars['String']>;
  dailySnapshot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dailySnapshot_not_ends_with?: InputMaybe<Scalars['String']>;
  dailySnapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dailySnapshot_not_in?: InputMaybe<Array<Scalars['String']>>;
  dailySnapshot_not_starts_with?: InputMaybe<Scalars['String']>;
  dailySnapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dailySnapshot_starts_with?: InputMaybe<Scalars['String']>;
  dailySnapshot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hourlySnapshot?: InputMaybe<Scalars['String']>;
  hourlySnapshot_?: InputMaybe<BeanHourlySnapshot_Filter>;
  hourlySnapshot_contains?: InputMaybe<Scalars['String']>;
  hourlySnapshot_contains_nocase?: InputMaybe<Scalars['String']>;
  hourlySnapshot_ends_with?: InputMaybe<Scalars['String']>;
  hourlySnapshot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hourlySnapshot_gt?: InputMaybe<Scalars['String']>;
  hourlySnapshot_gte?: InputMaybe<Scalars['String']>;
  hourlySnapshot_in?: InputMaybe<Array<Scalars['String']>>;
  hourlySnapshot_lt?: InputMaybe<Scalars['String']>;
  hourlySnapshot_lte?: InputMaybe<Scalars['String']>;
  hourlySnapshot_not?: InputMaybe<Scalars['String']>;
  hourlySnapshot_not_contains?: InputMaybe<Scalars['String']>;
  hourlySnapshot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hourlySnapshot_not_ends_with?: InputMaybe<Scalars['String']>;
  hourlySnapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hourlySnapshot_not_in?: InputMaybe<Array<Scalars['String']>>;
  hourlySnapshot_not_starts_with?: InputMaybe<Scalars['String']>;
  hourlySnapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hourlySnapshot_starts_with?: InputMaybe<Scalars['String']>;
  hourlySnapshot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  price?: InputMaybe<Scalars['BigDecimal']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price_lt?: InputMaybe<Scalars['BigDecimal']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']>;
  price_not?: InputMaybe<Scalars['BigDecimal']>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timeSinceLastCross?: InputMaybe<Scalars['BigInt']>;
  timeSinceLastCross_gt?: InputMaybe<Scalars['BigInt']>;
  timeSinceLastCross_gte?: InputMaybe<Scalars['BigInt']>;
  timeSinceLastCross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timeSinceLastCross_lt?: InputMaybe<Scalars['BigInt']>;
  timeSinceLastCross_lte?: InputMaybe<Scalars['BigInt']>;
  timeSinceLastCross_not?: InputMaybe<Scalars['BigInt']>;
  timeSinceLastCross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Cross_OrderBy {
  Above = 'above',
  DailySnapshot = 'dailySnapshot',
  HourlySnapshot = 'hourlySnapshot',
  Id = 'id',
  Price = 'price',
  TimeSinceLastCross = 'timeSinceLastCross',
  Timestamp = 'timestamp'
}

export type DewhitelistToken = SiloEvent & {
  __typename?: 'DewhitelistToken';
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /** dewhitelistToken-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /** Token address dewhitelisted */
  token: Scalars['String'];
};

export type DewhitelistToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum DewhitelistToken_OrderBy {
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol',
  Token = 'token'
}

export type Farmer = {
  __typename?: 'Farmer';
  deposits: Array<SiloDeposit>;
  fertilizers: Array<FertilizerBalance>;
  field?: Maybe<Field>;
  fills: Array<PodFill>;
  /** Address for the farmer */
  id: Scalars['ID'];
  listings: Array<PodListing>;
  orders: Array<PodOrder>;
  plots: Array<Plot>;
  silo?: Maybe<Silo>;
  withdraws: Array<SiloWithdraw>;
};


export type FarmerDepositsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiloDeposit_Filter>;
};


export type FarmerFertilizersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FertilizerBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FertilizerBalance_Filter>;
};


export type FarmerFillsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodFill_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PodFill_Filter>;
};


export type FarmerListingsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PodListing_Filter>;
};


export type FarmerOrdersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PodOrder_Filter>;
};


export type FarmerPlotsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Plot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Plot_Filter>;
};


export type FarmerWithdrawsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloWithdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiloWithdraw_Filter>;
};

export type Farmer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deposits_?: InputMaybe<SiloDeposit_Filter>;
  fertilizers_?: InputMaybe<FertilizerBalance_Filter>;
  field_?: InputMaybe<Field_Filter>;
  fills_?: InputMaybe<PodFill_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  listings_?: InputMaybe<PodListing_Filter>;
  orders_?: InputMaybe<PodOrder_Filter>;
  plots_?: InputMaybe<Plot_Filter>;
  silo_?: InputMaybe<Silo_Filter>;
  withdraws_?: InputMaybe<SiloWithdraw_Filter>;
};

export enum Farmer_OrderBy {
  Deposits = 'deposits',
  Fertilizers = 'fertilizers',
  Field = 'field',
  Fills = 'fills',
  Id = 'id',
  Listings = 'listings',
  Orders = 'orders',
  Plots = 'plots',
  Silo = 'silo',
  Withdraws = 'withdraws'
}

export type Fertilizer = {
  __typename?: 'Fertilizer';
  /** Token address for fert */
  id: Scalars['ID'];
  /** Total overall suppy of fert tokens */
  supply: Scalars['BigInt'];
  tokens: Array<FertilizerToken>;
};


export type FertilizerTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FertilizerToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FertilizerToken_Filter>;
};

export type FertilizerBalance = {
  __typename?: 'FertilizerBalance';
  /** Current balance of token */
  amount: Scalars['BigInt'];
  farmer: Farmer;
  fertilizerToken: FertilizerToken;
  /** Fertilizer Token - Farmer address */
  id: Scalars['ID'];
};

export type FertilizerBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmer?: InputMaybe<Scalars['String']>;
  farmer_?: InputMaybe<Farmer_Filter>;
  farmer_contains?: InputMaybe<Scalars['String']>;
  farmer_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_ends_with?: InputMaybe<Scalars['String']>;
  farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_gt?: InputMaybe<Scalars['String']>;
  farmer_gte?: InputMaybe<Scalars['String']>;
  farmer_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_lt?: InputMaybe<Scalars['String']>;
  farmer_lte?: InputMaybe<Scalars['String']>;
  farmer_not?: InputMaybe<Scalars['String']>;
  farmer_not_contains?: InputMaybe<Scalars['String']>;
  farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_not_starts_with?: InputMaybe<Scalars['String']>;
  farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_starts_with?: InputMaybe<Scalars['String']>;
  farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fertilizerToken?: InputMaybe<Scalars['String']>;
  fertilizerToken_?: InputMaybe<FertilizerToken_Filter>;
  fertilizerToken_contains?: InputMaybe<Scalars['String']>;
  fertilizerToken_contains_nocase?: InputMaybe<Scalars['String']>;
  fertilizerToken_ends_with?: InputMaybe<Scalars['String']>;
  fertilizerToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fertilizerToken_gt?: InputMaybe<Scalars['String']>;
  fertilizerToken_gte?: InputMaybe<Scalars['String']>;
  fertilizerToken_in?: InputMaybe<Array<Scalars['String']>>;
  fertilizerToken_lt?: InputMaybe<Scalars['String']>;
  fertilizerToken_lte?: InputMaybe<Scalars['String']>;
  fertilizerToken_not?: InputMaybe<Scalars['String']>;
  fertilizerToken_not_contains?: InputMaybe<Scalars['String']>;
  fertilizerToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fertilizerToken_not_ends_with?: InputMaybe<Scalars['String']>;
  fertilizerToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fertilizerToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  fertilizerToken_not_starts_with?: InputMaybe<Scalars['String']>;
  fertilizerToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fertilizerToken_starts_with?: InputMaybe<Scalars['String']>;
  fertilizerToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum FertilizerBalance_OrderBy {
  Amount = 'amount',
  Farmer = 'farmer',
  FertilizerToken = 'fertilizerToken',
  Id = 'id'
}

export type FertilizerToken = {
  __typename?: 'FertilizerToken';
  balances: Array<FertilizerBalance>;
  /** Ending BPF on creation */
  endBpf: Scalars['BigInt'];
  fertilizer: Fertilizer;
  /** Humidity paid for this ID */
  humidity: Scalars['BigDecimal'];
  /** Total BPF for purchase */
  id: Scalars['ID'];
  /** Season created */
  season: Scalars['Int'];
  /** Starting BPF on creation */
  startBpf: Scalars['BigInt'];
  /** Total supply for this Humidity */
  supply: Scalars['BigInt'];
};


export type FertilizerTokenBalancesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FertilizerBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FertilizerBalance_Filter>;
};

export type FertilizerToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  balances_?: InputMaybe<FertilizerBalance_Filter>;
  endBpf?: InputMaybe<Scalars['BigInt']>;
  endBpf_gt?: InputMaybe<Scalars['BigInt']>;
  endBpf_gte?: InputMaybe<Scalars['BigInt']>;
  endBpf_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endBpf_lt?: InputMaybe<Scalars['BigInt']>;
  endBpf_lte?: InputMaybe<Scalars['BigInt']>;
  endBpf_not?: InputMaybe<Scalars['BigInt']>;
  endBpf_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fertilizer?: InputMaybe<Scalars['String']>;
  fertilizer_?: InputMaybe<Fertilizer_Filter>;
  fertilizer_contains?: InputMaybe<Scalars['String']>;
  fertilizer_contains_nocase?: InputMaybe<Scalars['String']>;
  fertilizer_ends_with?: InputMaybe<Scalars['String']>;
  fertilizer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fertilizer_gt?: InputMaybe<Scalars['String']>;
  fertilizer_gte?: InputMaybe<Scalars['String']>;
  fertilizer_in?: InputMaybe<Array<Scalars['String']>>;
  fertilizer_lt?: InputMaybe<Scalars['String']>;
  fertilizer_lte?: InputMaybe<Scalars['String']>;
  fertilizer_not?: InputMaybe<Scalars['String']>;
  fertilizer_not_contains?: InputMaybe<Scalars['String']>;
  fertilizer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fertilizer_not_ends_with?: InputMaybe<Scalars['String']>;
  fertilizer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fertilizer_not_in?: InputMaybe<Array<Scalars['String']>>;
  fertilizer_not_starts_with?: InputMaybe<Scalars['String']>;
  fertilizer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fertilizer_starts_with?: InputMaybe<Scalars['String']>;
  fertilizer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  humidity?: InputMaybe<Scalars['BigDecimal']>;
  humidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  humidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  humidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  humidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  humidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  humidity_not?: InputMaybe<Scalars['BigDecimal']>;
  humidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  startBpf?: InputMaybe<Scalars['BigInt']>;
  startBpf_gt?: InputMaybe<Scalars['BigInt']>;
  startBpf_gte?: InputMaybe<Scalars['BigInt']>;
  startBpf_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startBpf_lt?: InputMaybe<Scalars['BigInt']>;
  startBpf_lte?: InputMaybe<Scalars['BigInt']>;
  startBpf_not?: InputMaybe<Scalars['BigInt']>;
  startBpf_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supply?: InputMaybe<Scalars['BigInt']>;
  supply_gt?: InputMaybe<Scalars['BigInt']>;
  supply_gte?: InputMaybe<Scalars['BigInt']>;
  supply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supply_lt?: InputMaybe<Scalars['BigInt']>;
  supply_lte?: InputMaybe<Scalars['BigInt']>;
  supply_not?: InputMaybe<Scalars['BigInt']>;
  supply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum FertilizerToken_OrderBy {
  Balances = 'balances',
  EndBpf = 'endBpf',
  Fertilizer = 'fertilizer',
  Humidity = 'humidity',
  Id = 'id',
  Season = 'season',
  StartBpf = 'startBpf',
  Supply = 'supply'
}

export type Fertilizer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  supply?: InputMaybe<Scalars['BigInt']>;
  supply_gt?: InputMaybe<Scalars['BigInt']>;
  supply_gte?: InputMaybe<Scalars['BigInt']>;
  supply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supply_lt?: InputMaybe<Scalars['BigInt']>;
  supply_lte?: InputMaybe<Scalars['BigInt']>;
  supply_not?: InputMaybe<Scalars['BigInt']>;
  supply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_?: InputMaybe<FertilizerToken_Filter>;
};

export enum Fertilizer_OrderBy {
  Id = 'id',
  Supply = 'supply',
  Tokens = 'tokens'
}

export type Field = {
  __typename?: 'Field';
  /** Contract address of beanstalk */
  beanstalk: Beanstalk;
  /** Link to daily snapshot data */
  dailySnapshots: Array<FieldDailySnapshot>;
  /** Farmer address if applicable */
  farmer?: Maybe<Farmer>;
  /** Current harvestable pods */
  harvestablePods: Scalars['BigInt'];
  /** Cumulative harvested pods */
  harvestedPods: Scalars['BigInt'];
  /** Link to hourly snapshot data */
  hourlySnapshots: Array<FieldHourlySnapshot>;
  /**  Contract address for this field or farmer  */
  id: Scalars['ID'];
  /** Cumulative number of unique sowers */
  numberOfSowers: Scalars['Int'];
  /** Cumulative number of sows */
  numberOfSows: Scalars['Int'];
  /** Array of current non-harvestable plots */
  plotIndexes: Array<Scalars['BigInt']>;
  /** Current pod index */
  podIndex: Scalars['BigInt'];
  /** Current pod rate: Total unharvestable pods / bean supply */
  podRate: Scalars['BigDecimal'];
  /** Rate of return: Temperature / Bean Price */
  realRateOfReturn: Scalars['BigDecimal'];
  /** Current season number */
  season: Scalars['Int'];
  /** Current amount of soil available */
  soil: Scalars['BigInt'];
  /** Cumulative total of sown beans */
  sownBeans: Scalars['BigInt'];
  /** Current temperature */
  temperature: Scalars['Int'];
  /** Current outstanding non-harvestable pods */
  unharvestablePods: Scalars['BigInt'];
};


export type FieldDailySnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FieldDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FieldDailySnapshot_Filter>;
};


export type FieldHourlySnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FieldHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FieldHourlySnapshot_Filter>;
};

export type FieldDailySnapshot = {
  __typename?: 'FieldDailySnapshot';
  /** Timestamp of initial snapshot creation */
  createdAt: Scalars['BigInt'];
  /** Point in time delta harvestable pods */
  deltaHarvestablePods: Scalars['BigInt'];
  /** Point in time delta harvested pods */
  deltaHarvestedPods: Scalars['BigInt'];
  /** Point in time delta number of unique sowers */
  deltaNumberOfSowers: Scalars['Int'];
  /** Point in time delta number of sows */
  deltaNumberOfSows: Scalars['Int'];
  /** Point in time delta total of sown beans */
  deltaSownBeans: Scalars['BigInt'];
  /** Point in time delta non-harvestable pods */
  deltaUnharvestablePods: Scalars['BigInt'];
  /** Field associated with this snapshot */
  field: Field;
  /** Point in time harvestable pods */
  harvestablePods: Scalars['BigInt'];
  /** Point in time delta harvested pods */
  harvestedPods: Scalars['BigInt'];
  /** Field ID - Unix Timestamp */
  id: Scalars['ID'];
  /** Point in time amount of soil issued */
  issuedSoil: Scalars['BigInt'];
  /** Point in time cumulative number of unique sowers */
  numberOfSowers: Scalars['Int'];
  /** Point in time cumulative number of sows */
  numberOfSows: Scalars['Int'];
  /** Point in time pod index */
  podIndex: Scalars['BigInt'];
  /** Point in time pod rate: Total unharvestable pods / bean supply */
  podRate: Scalars['BigDecimal'];
  /** Point in time rate of return: Temperature / Bean Price */
  realRateOfReturn: Scalars['BigDecimal'];
  /** Last season in the snapshot */
  season: Scalars['Int'];
  /** Point in time amount of soil remaining */
  soil: Scalars['BigInt'];
  /** Point in time cumulative total of sown beans */
  sownBeans: Scalars['BigInt'];
  /** Point in time temperature */
  temperature: Scalars['Int'];
  /** Point in time outstanding non-harvestable pods */
  unharvestablePods: Scalars['BigInt'];
  /** Timestamp of last entity update */
  updatedAt: Scalars['BigInt'];
};

export type FieldDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaHarvestablePods?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaHarvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestablePods_not?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaHarvestedPods?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaHarvestedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaNumberOfSowers?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSowers_gt?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSowers_gte?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSowers_in?: InputMaybe<Array<Scalars['Int']>>;
  deltaNumberOfSowers_lt?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSowers_lte?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSowers_not?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deltaNumberOfSows?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSows_gt?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSows_gte?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSows_in?: InputMaybe<Array<Scalars['Int']>>;
  deltaNumberOfSows_lt?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSows_lte?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSows_not?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSows_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deltaSownBeans?: InputMaybe<Scalars['BigInt']>;
  deltaSownBeans_gt?: InputMaybe<Scalars['BigInt']>;
  deltaSownBeans_gte?: InputMaybe<Scalars['BigInt']>;
  deltaSownBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaSownBeans_lt?: InputMaybe<Scalars['BigInt']>;
  deltaSownBeans_lte?: InputMaybe<Scalars['BigInt']>;
  deltaSownBeans_not?: InputMaybe<Scalars['BigInt']>;
  deltaSownBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaUnharvestablePods?: InputMaybe<Scalars['BigInt']>;
  deltaUnharvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaUnharvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaUnharvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaUnharvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaUnharvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaUnharvestablePods_not?: InputMaybe<Scalars['BigInt']>;
  deltaUnharvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  field?: InputMaybe<Scalars['String']>;
  field_?: InputMaybe<Field_Filter>;
  field_contains?: InputMaybe<Scalars['String']>;
  field_contains_nocase?: InputMaybe<Scalars['String']>;
  field_ends_with?: InputMaybe<Scalars['String']>;
  field_ends_with_nocase?: InputMaybe<Scalars['String']>;
  field_gt?: InputMaybe<Scalars['String']>;
  field_gte?: InputMaybe<Scalars['String']>;
  field_in?: InputMaybe<Array<Scalars['String']>>;
  field_lt?: InputMaybe<Scalars['String']>;
  field_lte?: InputMaybe<Scalars['String']>;
  field_not?: InputMaybe<Scalars['String']>;
  field_not_contains?: InputMaybe<Scalars['String']>;
  field_not_contains_nocase?: InputMaybe<Scalars['String']>;
  field_not_ends_with?: InputMaybe<Scalars['String']>;
  field_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  field_not_in?: InputMaybe<Array<Scalars['String']>>;
  field_not_starts_with?: InputMaybe<Scalars['String']>;
  field_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  field_starts_with?: InputMaybe<Scalars['String']>;
  field_starts_with_nocase?: InputMaybe<Scalars['String']>;
  harvestablePods?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_not?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestedPods?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_gt?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_gte?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestedPods_lt?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_lte?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_not?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  issuedSoil?: InputMaybe<Scalars['BigInt']>;
  issuedSoil_gt?: InputMaybe<Scalars['BigInt']>;
  issuedSoil_gte?: InputMaybe<Scalars['BigInt']>;
  issuedSoil_in?: InputMaybe<Array<Scalars['BigInt']>>;
  issuedSoil_lt?: InputMaybe<Scalars['BigInt']>;
  issuedSoil_lte?: InputMaybe<Scalars['BigInt']>;
  issuedSoil_not?: InputMaybe<Scalars['BigInt']>;
  issuedSoil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfSowers?: InputMaybe<Scalars['Int']>;
  numberOfSowers_gt?: InputMaybe<Scalars['Int']>;
  numberOfSowers_gte?: InputMaybe<Scalars['Int']>;
  numberOfSowers_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfSowers_lt?: InputMaybe<Scalars['Int']>;
  numberOfSowers_lte?: InputMaybe<Scalars['Int']>;
  numberOfSowers_not?: InputMaybe<Scalars['Int']>;
  numberOfSowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfSows?: InputMaybe<Scalars['Int']>;
  numberOfSows_gt?: InputMaybe<Scalars['Int']>;
  numberOfSows_gte?: InputMaybe<Scalars['Int']>;
  numberOfSows_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfSows_lt?: InputMaybe<Scalars['Int']>;
  numberOfSows_lte?: InputMaybe<Scalars['Int']>;
  numberOfSows_not?: InputMaybe<Scalars['Int']>;
  numberOfSows_not_in?: InputMaybe<Array<Scalars['Int']>>;
  podIndex?: InputMaybe<Scalars['BigInt']>;
  podIndex_gt?: InputMaybe<Scalars['BigInt']>;
  podIndex_gte?: InputMaybe<Scalars['BigInt']>;
  podIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podIndex_lt?: InputMaybe<Scalars['BigInt']>;
  podIndex_lte?: InputMaybe<Scalars['BigInt']>;
  podIndex_not?: InputMaybe<Scalars['BigInt']>;
  podIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podRate?: InputMaybe<Scalars['BigDecimal']>;
  podRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  podRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  podRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  podRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  podRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  podRate_not?: InputMaybe<Scalars['BigDecimal']>;
  podRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realRateOfReturn?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realRateOfReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  soil?: InputMaybe<Scalars['BigInt']>;
  soil_gt?: InputMaybe<Scalars['BigInt']>;
  soil_gte?: InputMaybe<Scalars['BigInt']>;
  soil_in?: InputMaybe<Array<Scalars['BigInt']>>;
  soil_lt?: InputMaybe<Scalars['BigInt']>;
  soil_lte?: InputMaybe<Scalars['BigInt']>;
  soil_not?: InputMaybe<Scalars['BigInt']>;
  soil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sownBeans?: InputMaybe<Scalars['BigInt']>;
  sownBeans_gt?: InputMaybe<Scalars['BigInt']>;
  sownBeans_gte?: InputMaybe<Scalars['BigInt']>;
  sownBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sownBeans_lt?: InputMaybe<Scalars['BigInt']>;
  sownBeans_lte?: InputMaybe<Scalars['BigInt']>;
  sownBeans_not?: InputMaybe<Scalars['BigInt']>;
  sownBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  temperature?: InputMaybe<Scalars['Int']>;
  temperature_gt?: InputMaybe<Scalars['Int']>;
  temperature_gte?: InputMaybe<Scalars['Int']>;
  temperature_in?: InputMaybe<Array<Scalars['Int']>>;
  temperature_lt?: InputMaybe<Scalars['Int']>;
  temperature_lte?: InputMaybe<Scalars['Int']>;
  temperature_not?: InputMaybe<Scalars['Int']>;
  temperature_not_in?: InputMaybe<Array<Scalars['Int']>>;
  unharvestablePods?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unharvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_not?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum FieldDailySnapshot_OrderBy {
  CreatedAt = 'createdAt',
  DeltaHarvestablePods = 'deltaHarvestablePods',
  DeltaHarvestedPods = 'deltaHarvestedPods',
  DeltaNumberOfSowers = 'deltaNumberOfSowers',
  DeltaNumberOfSows = 'deltaNumberOfSows',
  DeltaSownBeans = 'deltaSownBeans',
  DeltaUnharvestablePods = 'deltaUnharvestablePods',
  Field = 'field',
  HarvestablePods = 'harvestablePods',
  HarvestedPods = 'harvestedPods',
  Id = 'id',
  IssuedSoil = 'issuedSoil',
  NumberOfSowers = 'numberOfSowers',
  NumberOfSows = 'numberOfSows',
  PodIndex = 'podIndex',
  PodRate = 'podRate',
  RealRateOfReturn = 'realRateOfReturn',
  Season = 'season',
  Soil = 'soil',
  SownBeans = 'sownBeans',
  Temperature = 'temperature',
  UnharvestablePods = 'unharvestablePods',
  UpdatedAt = 'updatedAt'
}

export type FieldEvent = {
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  { Event type }-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
};

export type FieldEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum FieldEvent_OrderBy {
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol'
}

export type FieldHourlySnapshot = {
  __typename?: 'FieldHourlySnapshot';
  /** Creation Block Number */
  blockNumber: Scalars['BigInt'];
  /** Number of blocks between sunrise and soil being sold out */
  blocksToSoldOutSoil: Scalars['BigInt'];
  /** Timestamp of initial snapshot creation */
  createdAt: Scalars['BigInt'];
  /** Point in time delta harvestable pods */
  deltaHarvestablePods: Scalars['BigInt'];
  /** Point in time delta harvested pods */
  deltaHarvestedPods: Scalars['BigInt'];
  /** Point in time delta number of unique sowers */
  deltaNumberOfSowers: Scalars['Int'];
  /** Point in time delta number of sows */
  deltaNumberOfSows: Scalars['Int'];
  /** Point in time delta total of sown beans */
  deltaSownBeans: Scalars['BigInt'];
  /** Point in time delta non-harvestable pods */
  deltaUnharvestablePods: Scalars['BigInt'];
  /** Field associated with this snapshot */
  field: Field;
  /** Point in time harvestable pods */
  harvestablePods: Scalars['BigInt'];
  /** Point in time cumulative harvested pods */
  harvestedPods: Scalars['BigInt'];
  /** Field ID - Unix Timestamp */
  id: Scalars['ID'];
  /** Point in time amount of soil issued */
  issuedSoil: Scalars['BigInt'];
  /** Point in time cumulative number of unique sowers */
  numberOfSowers: Scalars['Int'];
  /** Point in time cumulative number of sows */
  numberOfSows: Scalars['Int'];
  /** Point in time pod index */
  podIndex: Scalars['BigInt'];
  /** Point in time pod rate: Total unharvestable pods / bean supply */
  podRate: Scalars['BigDecimal'];
  /** Point in time rate of return: Temperature / Bean Price */
  realRateOfReturn: Scalars['BigDecimal'];
  /** Season */
  season: Scalars['Int'];
  /** Point in time amount of soil remaining */
  soil: Scalars['BigInt'];
  /** Bool flag if soil sold out for the season */
  soilSoldOut: Scalars['Boolean'];
  /** Point in time cumulative total of sown beans */
  sownBeans: Scalars['BigInt'];
  /** Point in time temperature */
  temperature: Scalars['Int'];
  /** Point in time outstanding non-harvestable pods */
  unharvestablePods: Scalars['BigInt'];
  /** Timestamp of last entity update */
  updatedAt: Scalars['BigInt'];
};

export type FieldHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blocksToSoldOutSoil?: InputMaybe<Scalars['BigInt']>;
  blocksToSoldOutSoil_gt?: InputMaybe<Scalars['BigInt']>;
  blocksToSoldOutSoil_gte?: InputMaybe<Scalars['BigInt']>;
  blocksToSoldOutSoil_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blocksToSoldOutSoil_lt?: InputMaybe<Scalars['BigInt']>;
  blocksToSoldOutSoil_lte?: InputMaybe<Scalars['BigInt']>;
  blocksToSoldOutSoil_not?: InputMaybe<Scalars['BigInt']>;
  blocksToSoldOutSoil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaHarvestablePods?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaHarvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestablePods_not?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaHarvestedPods?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaHarvestedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaHarvestedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaNumberOfSowers?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSowers_gt?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSowers_gte?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSowers_in?: InputMaybe<Array<Scalars['Int']>>;
  deltaNumberOfSowers_lt?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSowers_lte?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSowers_not?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deltaNumberOfSows?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSows_gt?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSows_gte?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSows_in?: InputMaybe<Array<Scalars['Int']>>;
  deltaNumberOfSows_lt?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSows_lte?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSows_not?: InputMaybe<Scalars['Int']>;
  deltaNumberOfSows_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deltaSownBeans?: InputMaybe<Scalars['BigInt']>;
  deltaSownBeans_gt?: InputMaybe<Scalars['BigInt']>;
  deltaSownBeans_gte?: InputMaybe<Scalars['BigInt']>;
  deltaSownBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaSownBeans_lt?: InputMaybe<Scalars['BigInt']>;
  deltaSownBeans_lte?: InputMaybe<Scalars['BigInt']>;
  deltaSownBeans_not?: InputMaybe<Scalars['BigInt']>;
  deltaSownBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaUnharvestablePods?: InputMaybe<Scalars['BigInt']>;
  deltaUnharvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaUnharvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaUnharvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaUnharvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaUnharvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaUnharvestablePods_not?: InputMaybe<Scalars['BigInt']>;
  deltaUnharvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  field?: InputMaybe<Scalars['String']>;
  field_?: InputMaybe<Field_Filter>;
  field_contains?: InputMaybe<Scalars['String']>;
  field_contains_nocase?: InputMaybe<Scalars['String']>;
  field_ends_with?: InputMaybe<Scalars['String']>;
  field_ends_with_nocase?: InputMaybe<Scalars['String']>;
  field_gt?: InputMaybe<Scalars['String']>;
  field_gte?: InputMaybe<Scalars['String']>;
  field_in?: InputMaybe<Array<Scalars['String']>>;
  field_lt?: InputMaybe<Scalars['String']>;
  field_lte?: InputMaybe<Scalars['String']>;
  field_not?: InputMaybe<Scalars['String']>;
  field_not_contains?: InputMaybe<Scalars['String']>;
  field_not_contains_nocase?: InputMaybe<Scalars['String']>;
  field_not_ends_with?: InputMaybe<Scalars['String']>;
  field_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  field_not_in?: InputMaybe<Array<Scalars['String']>>;
  field_not_starts_with?: InputMaybe<Scalars['String']>;
  field_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  field_starts_with?: InputMaybe<Scalars['String']>;
  field_starts_with_nocase?: InputMaybe<Scalars['String']>;
  harvestablePods?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_not?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestedPods?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_gt?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_gte?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestedPods_lt?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_lte?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_not?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  issuedSoil?: InputMaybe<Scalars['BigInt']>;
  issuedSoil_gt?: InputMaybe<Scalars['BigInt']>;
  issuedSoil_gte?: InputMaybe<Scalars['BigInt']>;
  issuedSoil_in?: InputMaybe<Array<Scalars['BigInt']>>;
  issuedSoil_lt?: InputMaybe<Scalars['BigInt']>;
  issuedSoil_lte?: InputMaybe<Scalars['BigInt']>;
  issuedSoil_not?: InputMaybe<Scalars['BigInt']>;
  issuedSoil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfSowers?: InputMaybe<Scalars['Int']>;
  numberOfSowers_gt?: InputMaybe<Scalars['Int']>;
  numberOfSowers_gte?: InputMaybe<Scalars['Int']>;
  numberOfSowers_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfSowers_lt?: InputMaybe<Scalars['Int']>;
  numberOfSowers_lte?: InputMaybe<Scalars['Int']>;
  numberOfSowers_not?: InputMaybe<Scalars['Int']>;
  numberOfSowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfSows?: InputMaybe<Scalars['Int']>;
  numberOfSows_gt?: InputMaybe<Scalars['Int']>;
  numberOfSows_gte?: InputMaybe<Scalars['Int']>;
  numberOfSows_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfSows_lt?: InputMaybe<Scalars['Int']>;
  numberOfSows_lte?: InputMaybe<Scalars['Int']>;
  numberOfSows_not?: InputMaybe<Scalars['Int']>;
  numberOfSows_not_in?: InputMaybe<Array<Scalars['Int']>>;
  podIndex?: InputMaybe<Scalars['BigInt']>;
  podIndex_gt?: InputMaybe<Scalars['BigInt']>;
  podIndex_gte?: InputMaybe<Scalars['BigInt']>;
  podIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podIndex_lt?: InputMaybe<Scalars['BigInt']>;
  podIndex_lte?: InputMaybe<Scalars['BigInt']>;
  podIndex_not?: InputMaybe<Scalars['BigInt']>;
  podIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podRate?: InputMaybe<Scalars['BigDecimal']>;
  podRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  podRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  podRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  podRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  podRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  podRate_not?: InputMaybe<Scalars['BigDecimal']>;
  podRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realRateOfReturn?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realRateOfReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  soil?: InputMaybe<Scalars['BigInt']>;
  soilSoldOut?: InputMaybe<Scalars['Boolean']>;
  soilSoldOut_in?: InputMaybe<Array<Scalars['Boolean']>>;
  soilSoldOut_not?: InputMaybe<Scalars['Boolean']>;
  soilSoldOut_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  soil_gt?: InputMaybe<Scalars['BigInt']>;
  soil_gte?: InputMaybe<Scalars['BigInt']>;
  soil_in?: InputMaybe<Array<Scalars['BigInt']>>;
  soil_lt?: InputMaybe<Scalars['BigInt']>;
  soil_lte?: InputMaybe<Scalars['BigInt']>;
  soil_not?: InputMaybe<Scalars['BigInt']>;
  soil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sownBeans?: InputMaybe<Scalars['BigInt']>;
  sownBeans_gt?: InputMaybe<Scalars['BigInt']>;
  sownBeans_gte?: InputMaybe<Scalars['BigInt']>;
  sownBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sownBeans_lt?: InputMaybe<Scalars['BigInt']>;
  sownBeans_lte?: InputMaybe<Scalars['BigInt']>;
  sownBeans_not?: InputMaybe<Scalars['BigInt']>;
  sownBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  temperature?: InputMaybe<Scalars['Int']>;
  temperature_gt?: InputMaybe<Scalars['Int']>;
  temperature_gte?: InputMaybe<Scalars['Int']>;
  temperature_in?: InputMaybe<Array<Scalars['Int']>>;
  temperature_lt?: InputMaybe<Scalars['Int']>;
  temperature_lte?: InputMaybe<Scalars['Int']>;
  temperature_not?: InputMaybe<Scalars['Int']>;
  temperature_not_in?: InputMaybe<Array<Scalars['Int']>>;
  unharvestablePods?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unharvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_not?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum FieldHourlySnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  BlocksToSoldOutSoil = 'blocksToSoldOutSoil',
  CreatedAt = 'createdAt',
  DeltaHarvestablePods = 'deltaHarvestablePods',
  DeltaHarvestedPods = 'deltaHarvestedPods',
  DeltaNumberOfSowers = 'deltaNumberOfSowers',
  DeltaNumberOfSows = 'deltaNumberOfSows',
  DeltaSownBeans = 'deltaSownBeans',
  DeltaUnharvestablePods = 'deltaUnharvestablePods',
  Field = 'field',
  HarvestablePods = 'harvestablePods',
  HarvestedPods = 'harvestedPods',
  Id = 'id',
  IssuedSoil = 'issuedSoil',
  NumberOfSowers = 'numberOfSowers',
  NumberOfSows = 'numberOfSows',
  PodIndex = 'podIndex',
  PodRate = 'podRate',
  RealRateOfReturn = 'realRateOfReturn',
  Season = 'season',
  Soil = 'soil',
  SoilSoldOut = 'soilSoldOut',
  SownBeans = 'sownBeans',
  Temperature = 'temperature',
  UnharvestablePods = 'unharvestablePods',
  UpdatedAt = 'updatedAt'
}

export type Field_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  beanstalk?: InputMaybe<Scalars['String']>;
  beanstalk_?: InputMaybe<Beanstalk_Filter>;
  beanstalk_contains?: InputMaybe<Scalars['String']>;
  beanstalk_contains_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_ends_with?: InputMaybe<Scalars['String']>;
  beanstalk_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_gt?: InputMaybe<Scalars['String']>;
  beanstalk_gte?: InputMaybe<Scalars['String']>;
  beanstalk_in?: InputMaybe<Array<Scalars['String']>>;
  beanstalk_lt?: InputMaybe<Scalars['String']>;
  beanstalk_lte?: InputMaybe<Scalars['String']>;
  beanstalk_not?: InputMaybe<Scalars['String']>;
  beanstalk_not_contains?: InputMaybe<Scalars['String']>;
  beanstalk_not_contains_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_not_ends_with?: InputMaybe<Scalars['String']>;
  beanstalk_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_not_in?: InputMaybe<Array<Scalars['String']>>;
  beanstalk_not_starts_with?: InputMaybe<Scalars['String']>;
  beanstalk_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_starts_with?: InputMaybe<Scalars['String']>;
  beanstalk_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dailySnapshots_?: InputMaybe<FieldDailySnapshot_Filter>;
  farmer?: InputMaybe<Scalars['String']>;
  farmer_?: InputMaybe<Farmer_Filter>;
  farmer_contains?: InputMaybe<Scalars['String']>;
  farmer_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_ends_with?: InputMaybe<Scalars['String']>;
  farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_gt?: InputMaybe<Scalars['String']>;
  farmer_gte?: InputMaybe<Scalars['String']>;
  farmer_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_lt?: InputMaybe<Scalars['String']>;
  farmer_lte?: InputMaybe<Scalars['String']>;
  farmer_not?: InputMaybe<Scalars['String']>;
  farmer_not_contains?: InputMaybe<Scalars['String']>;
  farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_not_starts_with?: InputMaybe<Scalars['String']>;
  farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_starts_with?: InputMaybe<Scalars['String']>;
  farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  harvestablePods?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_not?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestedPods?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_gt?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_gte?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestedPods_lt?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_lte?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_not?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlySnapshots_?: InputMaybe<FieldHourlySnapshot_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numberOfSowers?: InputMaybe<Scalars['Int']>;
  numberOfSowers_gt?: InputMaybe<Scalars['Int']>;
  numberOfSowers_gte?: InputMaybe<Scalars['Int']>;
  numberOfSowers_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfSowers_lt?: InputMaybe<Scalars['Int']>;
  numberOfSowers_lte?: InputMaybe<Scalars['Int']>;
  numberOfSowers_not?: InputMaybe<Scalars['Int']>;
  numberOfSowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfSows?: InputMaybe<Scalars['Int']>;
  numberOfSows_gt?: InputMaybe<Scalars['Int']>;
  numberOfSows_gte?: InputMaybe<Scalars['Int']>;
  numberOfSows_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfSows_lt?: InputMaybe<Scalars['Int']>;
  numberOfSows_lte?: InputMaybe<Scalars['Int']>;
  numberOfSows_not?: InputMaybe<Scalars['Int']>;
  numberOfSows_not_in?: InputMaybe<Array<Scalars['Int']>>;
  plotIndexes?: InputMaybe<Array<Scalars['BigInt']>>;
  plotIndexes_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  plotIndexes_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  plotIndexes_not?: InputMaybe<Array<Scalars['BigInt']>>;
  plotIndexes_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  plotIndexes_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  podIndex?: InputMaybe<Scalars['BigInt']>;
  podIndex_gt?: InputMaybe<Scalars['BigInt']>;
  podIndex_gte?: InputMaybe<Scalars['BigInt']>;
  podIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podIndex_lt?: InputMaybe<Scalars['BigInt']>;
  podIndex_lte?: InputMaybe<Scalars['BigInt']>;
  podIndex_not?: InputMaybe<Scalars['BigInt']>;
  podIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podRate?: InputMaybe<Scalars['BigDecimal']>;
  podRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  podRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  podRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  podRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  podRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  podRate_not?: InputMaybe<Scalars['BigDecimal']>;
  podRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realRateOfReturn?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realRateOfReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  realRateOfReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  soil?: InputMaybe<Scalars['BigInt']>;
  soil_gt?: InputMaybe<Scalars['BigInt']>;
  soil_gte?: InputMaybe<Scalars['BigInt']>;
  soil_in?: InputMaybe<Array<Scalars['BigInt']>>;
  soil_lt?: InputMaybe<Scalars['BigInt']>;
  soil_lte?: InputMaybe<Scalars['BigInt']>;
  soil_not?: InputMaybe<Scalars['BigInt']>;
  soil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sownBeans?: InputMaybe<Scalars['BigInt']>;
  sownBeans_gt?: InputMaybe<Scalars['BigInt']>;
  sownBeans_gte?: InputMaybe<Scalars['BigInt']>;
  sownBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sownBeans_lt?: InputMaybe<Scalars['BigInt']>;
  sownBeans_lte?: InputMaybe<Scalars['BigInt']>;
  sownBeans_not?: InputMaybe<Scalars['BigInt']>;
  sownBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  temperature?: InputMaybe<Scalars['Int']>;
  temperature_gt?: InputMaybe<Scalars['Int']>;
  temperature_gte?: InputMaybe<Scalars['Int']>;
  temperature_in?: InputMaybe<Array<Scalars['Int']>>;
  temperature_lt?: InputMaybe<Scalars['Int']>;
  temperature_lte?: InputMaybe<Scalars['Int']>;
  temperature_not?: InputMaybe<Scalars['Int']>;
  temperature_not_in?: InputMaybe<Array<Scalars['Int']>>;
  unharvestablePods?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unharvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_not?: InputMaybe<Scalars['BigInt']>;
  unharvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Field_OrderBy {
  Beanstalk = 'beanstalk',
  DailySnapshots = 'dailySnapshots',
  Farmer = 'farmer',
  HarvestablePods = 'harvestablePods',
  HarvestedPods = 'harvestedPods',
  HourlySnapshots = 'hourlySnapshots',
  Id = 'id',
  NumberOfSowers = 'numberOfSowers',
  NumberOfSows = 'numberOfSows',
  PlotIndexes = 'plotIndexes',
  PodIndex = 'podIndex',
  PodRate = 'podRate',
  RealRateOfReturn = 'realRateOfReturn',
  Season = 'season',
  Soil = 'soil',
  SownBeans = 'sownBeans',
  Temperature = 'temperature',
  UnharvestablePods = 'unharvestablePods'
}

export type Follow = {
  __typename?: 'Follow';
  created: Scalars['Int'];
  follower: Scalars['String'];
  id: Scalars['String'];
  ipfs?: Maybe<Scalars['String']>;
  space: Space;
};

export type FollowWhere = {
  created?: InputMaybe<Scalars['Int']>;
  created_gt?: InputMaybe<Scalars['Int']>;
  created_gte?: InputMaybe<Scalars['Int']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_lt?: InputMaybe<Scalars['Int']>;
  created_lte?: InputMaybe<Scalars['Int']>;
  follower?: InputMaybe<Scalars['String']>;
  follower_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  space?: InputMaybe<Scalars['String']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Harvest = FieldEvent & {
  __typename?: 'Harvest';
  /**  Total beans harvested  */
  beans: Scalars['BigInt'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Address harvesting beans  */
  farmer: Scalars['String'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /** harvest-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Plots being harvested  */
  plots: Array<Scalars['BigInt']>;
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
};

export type Harvest_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  beans?: InputMaybe<Scalars['BigInt']>;
  beans_gt?: InputMaybe<Scalars['BigInt']>;
  beans_gte?: InputMaybe<Scalars['BigInt']>;
  beans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beans_lt?: InputMaybe<Scalars['BigInt']>;
  beans_lte?: InputMaybe<Scalars['BigInt']>;
  beans_not?: InputMaybe<Scalars['BigInt']>;
  beans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmer?: InputMaybe<Scalars['String']>;
  farmer_contains?: InputMaybe<Scalars['String']>;
  farmer_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_ends_with?: InputMaybe<Scalars['String']>;
  farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_gt?: InputMaybe<Scalars['String']>;
  farmer_gte?: InputMaybe<Scalars['String']>;
  farmer_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_lt?: InputMaybe<Scalars['String']>;
  farmer_lte?: InputMaybe<Scalars['String']>;
  farmer_not?: InputMaybe<Scalars['String']>;
  farmer_not_contains?: InputMaybe<Scalars['String']>;
  farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_not_starts_with?: InputMaybe<Scalars['String']>;
  farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_starts_with?: InputMaybe<Scalars['String']>;
  farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  plots?: InputMaybe<Array<Scalars['BigInt']>>;
  plots_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  plots_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  plots_not?: InputMaybe<Array<Scalars['BigInt']>>;
  plots_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  plots_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Harvest_OrderBy {
  Beans = 'beans',
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Farmer = 'farmer',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Plots = 'plots',
  Protocol = 'protocol'
}

export type Incentive = SiloEvent & {
  __typename?: 'Incentive';
  /**  Amount minted as incentive */
  amount: Scalars['BigInt'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Address incentivized  */
  caller: Scalars['String'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /** incentive-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
};

export type Incentive_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['String']>;
  caller_contains?: InputMaybe<Scalars['String']>;
  caller_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_ends_with?: InputMaybe<Scalars['String']>;
  caller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_gt?: InputMaybe<Scalars['String']>;
  caller_gte?: InputMaybe<Scalars['String']>;
  caller_in?: InputMaybe<Array<Scalars['String']>>;
  caller_lt?: InputMaybe<Scalars['String']>;
  caller_lte?: InputMaybe<Scalars['String']>;
  caller_not?: InputMaybe<Scalars['String']>;
  caller_not_contains?: InputMaybe<Scalars['String']>;
  caller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']>;
  caller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_not_in?: InputMaybe<Array<Scalars['String']>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']>;
  caller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  caller_starts_with?: InputMaybe<Scalars['String']>;
  caller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Incentive_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Caller = 'caller',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol'
}

export type Item = {
  __typename?: 'Item';
  id: Scalars['String'];
  spacesCount?: Maybe<Scalars['Int']>;
};

export enum MarketStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  CancelledPartial = 'CANCELLED_PARTIAL',
  Expired = 'EXPIRED',
  Filled = 'FILLED',
  FilledPartial = 'FILLED_PARTIAL'
}

export type MarketplaceEvent = {
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  { Event type }-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
};

export type MarketplaceEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum MarketplaceEvent_OrderBy {
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol'
}

export type Message = {
  __typename?: 'Message';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  ipfs?: Maybe<Scalars['String']>;
  mci?: Maybe<Scalars['Int']>;
  receipt?: Maybe<Scalars['String']>;
  sig?: Maybe<Scalars['String']>;
  space?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type MessageWhere = {
  mci?: InputMaybe<Scalars['Int']>;
  mci_gt?: InputMaybe<Scalars['Int']>;
  mci_gte?: InputMaybe<Scalars['Int']>;
  mci_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  mci_lt?: InputMaybe<Scalars['Int']>;
  mci_lte?: InputMaybe<Scalars['Int']>;
  space?: InputMaybe<Scalars['String']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MetapoolOracle = SiloEvent & {
  __typename?: 'MetapoolOracle';
  /**  Cumulative balance A */
  balanceA: Scalars['BigInt'];
  /**  Cumulative balance B */
  balanceB: Scalars['BigInt'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  DeltaB for season */
  deltaB: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /** metapoolOracle-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /**  Season of oracle  */
  season: Scalars['Int'];
};

export type MetapoolOracle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  balanceA?: InputMaybe<Scalars['BigInt']>;
  balanceA_gt?: InputMaybe<Scalars['BigInt']>;
  balanceA_gte?: InputMaybe<Scalars['BigInt']>;
  balanceA_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceA_lt?: InputMaybe<Scalars['BigInt']>;
  balanceA_lte?: InputMaybe<Scalars['BigInt']>;
  balanceA_not?: InputMaybe<Scalars['BigInt']>;
  balanceA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceB?: InputMaybe<Scalars['BigInt']>;
  balanceB_gt?: InputMaybe<Scalars['BigInt']>;
  balanceB_gte?: InputMaybe<Scalars['BigInt']>;
  balanceB_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceB_lt?: InputMaybe<Scalars['BigInt']>;
  balanceB_lte?: InputMaybe<Scalars['BigInt']>;
  balanceB_not?: InputMaybe<Scalars['BigInt']>;
  balanceB_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaB?: InputMaybe<Scalars['BigInt']>;
  deltaB_gt?: InputMaybe<Scalars['BigInt']>;
  deltaB_gte?: InputMaybe<Scalars['BigInt']>;
  deltaB_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaB_lt?: InputMaybe<Scalars['BigInt']>;
  deltaB_lte?: InputMaybe<Scalars['BigInt']>;
  deltaB_not?: InputMaybe<Scalars['BigInt']>;
  deltaB_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum MetapoolOracle_OrderBy {
  BalanceA = 'balanceA',
  BalanceB = 'balanceB',
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  DeltaB = 'deltaB',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol',
  Season = 'season'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Plot = {
  __typename?: 'Plot';
  /** Beans used to sow, if any */
  beans: Scalars['BigInt'];
  /** Timestamp of creation */
  createdAt: Scalars['BigInt'];
  /** Creation transaction hash */
  creationHash: Scalars['String'];
  /** Farmer who owns this plot */
  farmer: Farmer;
  /** Field to which this plot belongs */
  field: Field;
  /** Flag for if plot is fully harvested */
  fullyHarvested: Scalars['Boolean'];
  /** Number of pods harvestable */
  harvestablePods: Scalars['BigInt'];
  /** Number of pods harvested */
  harvestedPods: Scalars['BigInt'];
  /** Plot index */
  id: Scalars['ID'];
  /** Plot Index */
  index: Scalars['BigInt'];
  /** Associated plot listing */
  listing?: Maybe<PodListing>;
  /** Total pods in plot */
  pods: Scalars['BigInt'];
  /** Season when created */
  season: Scalars['Int'];
  /** Transaction source for this plot */
  source: PlotSource;
  /** Total pods that were sown, if any */
  sownPods: Scalars['BigInt'];
  /** Temperature when the plot was sown */
  temperature: Scalars['Int'];
  /** Timestamp when updated */
  updatedAt: Scalars['BigInt'];
};

export enum PlotSource {
  Harvest = 'HARVEST',
  Sow = 'SOW',
  Transfer = 'TRANSFER'
}

export type Plot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  beans?: InputMaybe<Scalars['BigInt']>;
  beans_gt?: InputMaybe<Scalars['BigInt']>;
  beans_gte?: InputMaybe<Scalars['BigInt']>;
  beans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beans_lt?: InputMaybe<Scalars['BigInt']>;
  beans_lte?: InputMaybe<Scalars['BigInt']>;
  beans_not?: InputMaybe<Scalars['BigInt']>;
  beans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creationHash?: InputMaybe<Scalars['String']>;
  creationHash_contains?: InputMaybe<Scalars['String']>;
  creationHash_contains_nocase?: InputMaybe<Scalars['String']>;
  creationHash_ends_with?: InputMaybe<Scalars['String']>;
  creationHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creationHash_gt?: InputMaybe<Scalars['String']>;
  creationHash_gte?: InputMaybe<Scalars['String']>;
  creationHash_in?: InputMaybe<Array<Scalars['String']>>;
  creationHash_lt?: InputMaybe<Scalars['String']>;
  creationHash_lte?: InputMaybe<Scalars['String']>;
  creationHash_not?: InputMaybe<Scalars['String']>;
  creationHash_not_contains?: InputMaybe<Scalars['String']>;
  creationHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creationHash_not_ends_with?: InputMaybe<Scalars['String']>;
  creationHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creationHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  creationHash_not_starts_with?: InputMaybe<Scalars['String']>;
  creationHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creationHash_starts_with?: InputMaybe<Scalars['String']>;
  creationHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  farmer?: InputMaybe<Scalars['String']>;
  farmer_?: InputMaybe<Farmer_Filter>;
  farmer_contains?: InputMaybe<Scalars['String']>;
  farmer_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_ends_with?: InputMaybe<Scalars['String']>;
  farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_gt?: InputMaybe<Scalars['String']>;
  farmer_gte?: InputMaybe<Scalars['String']>;
  farmer_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_lt?: InputMaybe<Scalars['String']>;
  farmer_lte?: InputMaybe<Scalars['String']>;
  farmer_not?: InputMaybe<Scalars['String']>;
  farmer_not_contains?: InputMaybe<Scalars['String']>;
  farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_not_starts_with?: InputMaybe<Scalars['String']>;
  farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_starts_with?: InputMaybe<Scalars['String']>;
  farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  field_?: InputMaybe<Field_Filter>;
  field_contains?: InputMaybe<Scalars['String']>;
  field_contains_nocase?: InputMaybe<Scalars['String']>;
  field_ends_with?: InputMaybe<Scalars['String']>;
  field_ends_with_nocase?: InputMaybe<Scalars['String']>;
  field_gt?: InputMaybe<Scalars['String']>;
  field_gte?: InputMaybe<Scalars['String']>;
  field_in?: InputMaybe<Array<Scalars['String']>>;
  field_lt?: InputMaybe<Scalars['String']>;
  field_lte?: InputMaybe<Scalars['String']>;
  field_not?: InputMaybe<Scalars['String']>;
  field_not_contains?: InputMaybe<Scalars['String']>;
  field_not_contains_nocase?: InputMaybe<Scalars['String']>;
  field_not_ends_with?: InputMaybe<Scalars['String']>;
  field_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  field_not_in?: InputMaybe<Array<Scalars['String']>>;
  field_not_starts_with?: InputMaybe<Scalars['String']>;
  field_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  field_starts_with?: InputMaybe<Scalars['String']>;
  field_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fullyHarvested?: InputMaybe<Scalars['Boolean']>;
  fullyHarvested_in?: InputMaybe<Array<Scalars['Boolean']>>;
  fullyHarvested_not?: InputMaybe<Scalars['Boolean']>;
  fullyHarvested_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  harvestablePods?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_not?: InputMaybe<Scalars['BigInt']>;
  harvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestedPods?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_gt?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_gte?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestedPods_lt?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_lte?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_not?: InputMaybe<Scalars['BigInt']>;
  harvestedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listing?: InputMaybe<Scalars['String']>;
  listing_?: InputMaybe<PodListing_Filter>;
  listing_contains?: InputMaybe<Scalars['String']>;
  listing_contains_nocase?: InputMaybe<Scalars['String']>;
  listing_ends_with?: InputMaybe<Scalars['String']>;
  listing_ends_with_nocase?: InputMaybe<Scalars['String']>;
  listing_gt?: InputMaybe<Scalars['String']>;
  listing_gte?: InputMaybe<Scalars['String']>;
  listing_in?: InputMaybe<Array<Scalars['String']>>;
  listing_lt?: InputMaybe<Scalars['String']>;
  listing_lte?: InputMaybe<Scalars['String']>;
  listing_not?: InputMaybe<Scalars['String']>;
  listing_not_contains?: InputMaybe<Scalars['String']>;
  listing_not_contains_nocase?: InputMaybe<Scalars['String']>;
  listing_not_ends_with?: InputMaybe<Scalars['String']>;
  listing_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  listing_not_in?: InputMaybe<Array<Scalars['String']>>;
  listing_not_starts_with?: InputMaybe<Scalars['String']>;
  listing_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  listing_starts_with?: InputMaybe<Scalars['String']>;
  listing_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pods?: InputMaybe<Scalars['BigInt']>;
  pods_gt?: InputMaybe<Scalars['BigInt']>;
  pods_gte?: InputMaybe<Scalars['BigInt']>;
  pods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pods_lt?: InputMaybe<Scalars['BigInt']>;
  pods_lte?: InputMaybe<Scalars['BigInt']>;
  pods_not?: InputMaybe<Scalars['BigInt']>;
  pods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  source?: InputMaybe<PlotSource>;
  source_in?: InputMaybe<Array<PlotSource>>;
  source_not?: InputMaybe<PlotSource>;
  source_not_in?: InputMaybe<Array<PlotSource>>;
  sownPods?: InputMaybe<Scalars['BigInt']>;
  sownPods_gt?: InputMaybe<Scalars['BigInt']>;
  sownPods_gte?: InputMaybe<Scalars['BigInt']>;
  sownPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sownPods_lt?: InputMaybe<Scalars['BigInt']>;
  sownPods_lte?: InputMaybe<Scalars['BigInt']>;
  sownPods_not?: InputMaybe<Scalars['BigInt']>;
  sownPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  temperature?: InputMaybe<Scalars['Int']>;
  temperature_gt?: InputMaybe<Scalars['Int']>;
  temperature_gte?: InputMaybe<Scalars['Int']>;
  temperature_in?: InputMaybe<Array<Scalars['Int']>>;
  temperature_lt?: InputMaybe<Scalars['Int']>;
  temperature_lte?: InputMaybe<Scalars['Int']>;
  temperature_not?: InputMaybe<Scalars['Int']>;
  temperature_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Plot_OrderBy {
  Beans = 'beans',
  CreatedAt = 'createdAt',
  CreationHash = 'creationHash',
  Farmer = 'farmer',
  Field = 'field',
  FullyHarvested = 'fullyHarvested',
  HarvestablePods = 'harvestablePods',
  HarvestedPods = 'harvestedPods',
  Id = 'id',
  Index = 'index',
  Listing = 'listing',
  Pods = 'pods',
  Season = 'season',
  Source = 'source',
  SownPods = 'sownPods',
  Temperature = 'temperature',
  UpdatedAt = 'updatedAt'
}

export type PodFill = {
  __typename?: 'PodFill';
  /** Number of pods filled */
  amount: Scalars['BigInt'];
  /** Total beans used to fill listing/order */
  costInBeans?: Maybe<Scalars['BigInt']>;
  /** Creation timestamp */
  createdAt: Scalars['BigInt'];
  /** Account fulfilling the order */
  from: Scalars['String'];
  /** Beanstalk address - Order/Listing index - transaction hash */
  id: Scalars['ID'];
  /** Index of plot transferred */
  index: Scalars['BigInt'];
  /** Associated listing, if any */
  listing?: Maybe<PodListing>;
  /** Associated order, if any */
  order?: Maybe<PodOrder>;
  /** Marketplace associated with this fill */
  podMarketplace: PodMarketplace;
  /** Start of plot transferred */
  start: Scalars['BigInt'];
  /** Account filling the order */
  to: Farmer;
};

export type PodFill_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  costInBeans?: InputMaybe<Scalars['BigInt']>;
  costInBeans_gt?: InputMaybe<Scalars['BigInt']>;
  costInBeans_gte?: InputMaybe<Scalars['BigInt']>;
  costInBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  costInBeans_lt?: InputMaybe<Scalars['BigInt']>;
  costInBeans_lte?: InputMaybe<Scalars['BigInt']>;
  costInBeans_not?: InputMaybe<Scalars['BigInt']>;
  costInBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['String']>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listing?: InputMaybe<Scalars['String']>;
  listing_?: InputMaybe<PodListing_Filter>;
  listing_contains?: InputMaybe<Scalars['String']>;
  listing_contains_nocase?: InputMaybe<Scalars['String']>;
  listing_ends_with?: InputMaybe<Scalars['String']>;
  listing_ends_with_nocase?: InputMaybe<Scalars['String']>;
  listing_gt?: InputMaybe<Scalars['String']>;
  listing_gte?: InputMaybe<Scalars['String']>;
  listing_in?: InputMaybe<Array<Scalars['String']>>;
  listing_lt?: InputMaybe<Scalars['String']>;
  listing_lte?: InputMaybe<Scalars['String']>;
  listing_not?: InputMaybe<Scalars['String']>;
  listing_not_contains?: InputMaybe<Scalars['String']>;
  listing_not_contains_nocase?: InputMaybe<Scalars['String']>;
  listing_not_ends_with?: InputMaybe<Scalars['String']>;
  listing_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  listing_not_in?: InputMaybe<Array<Scalars['String']>>;
  listing_not_starts_with?: InputMaybe<Scalars['String']>;
  listing_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  listing_starts_with?: InputMaybe<Scalars['String']>;
  listing_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  order_?: InputMaybe<PodOrder_Filter>;
  order_contains?: InputMaybe<Scalars['String']>;
  order_contains_nocase?: InputMaybe<Scalars['String']>;
  order_ends_with?: InputMaybe<Scalars['String']>;
  order_ends_with_nocase?: InputMaybe<Scalars['String']>;
  order_gt?: InputMaybe<Scalars['String']>;
  order_gte?: InputMaybe<Scalars['String']>;
  order_in?: InputMaybe<Array<Scalars['String']>>;
  order_lt?: InputMaybe<Scalars['String']>;
  order_lte?: InputMaybe<Scalars['String']>;
  order_not?: InputMaybe<Scalars['String']>;
  order_not_contains?: InputMaybe<Scalars['String']>;
  order_not_contains_nocase?: InputMaybe<Scalars['String']>;
  order_not_ends_with?: InputMaybe<Scalars['String']>;
  order_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  order_not_in?: InputMaybe<Array<Scalars['String']>>;
  order_not_starts_with?: InputMaybe<Scalars['String']>;
  order_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order_starts_with?: InputMaybe<Scalars['String']>;
  order_starts_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace?: InputMaybe<Scalars['String']>;
  podMarketplace_?: InputMaybe<PodMarketplace_Filter>;
  podMarketplace_contains?: InputMaybe<Scalars['String']>;
  podMarketplace_contains_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_ends_with?: InputMaybe<Scalars['String']>;
  podMarketplace_ends_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_gt?: InputMaybe<Scalars['String']>;
  podMarketplace_gte?: InputMaybe<Scalars['String']>;
  podMarketplace_in?: InputMaybe<Array<Scalars['String']>>;
  podMarketplace_lt?: InputMaybe<Scalars['String']>;
  podMarketplace_lte?: InputMaybe<Scalars['String']>;
  podMarketplace_not?: InputMaybe<Scalars['String']>;
  podMarketplace_not_contains?: InputMaybe<Scalars['String']>;
  podMarketplace_not_contains_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_not_ends_with?: InputMaybe<Scalars['String']>;
  podMarketplace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_not_in?: InputMaybe<Array<Scalars['String']>>;
  podMarketplace_not_starts_with?: InputMaybe<Scalars['String']>;
  podMarketplace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_starts_with?: InputMaybe<Scalars['String']>;
  podMarketplace_starts_with_nocase?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['BigInt']>;
  start_gt?: InputMaybe<Scalars['BigInt']>;
  start_gte?: InputMaybe<Scalars['BigInt']>;
  start_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start_lt?: InputMaybe<Scalars['BigInt']>;
  start_lte?: InputMaybe<Scalars['BigInt']>;
  start_not?: InputMaybe<Scalars['BigInt']>;
  start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Farmer_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum PodFill_OrderBy {
  Amount = 'amount',
  CostInBeans = 'costInBeans',
  CreatedAt = 'createdAt',
  From = 'from',
  Id = 'id',
  Index = 'index',
  Listing = 'listing',
  Order = 'order',
  PodMarketplace = 'podMarketplace',
  Start = 'start',
  To = 'to'
}

export type PodListing = {
  __typename?: 'PodListing';
  /** Amount of pods listed */
  amount: Scalars['BigInt'];
  /** Amount cancelled */
  cancelledAmount: Scalars['BigInt'];
  /** Timestamp created */
  createdAt: Scalars['BigInt'];
  /** Farmer listing the plot */
  farmer: Farmer;
  /** Any associated market fill */
  fill?: Maybe<PodFill>;
  /** Total amount filled from original listing */
  filled: Scalars['BigInt'];
  /** Amount filled on this listing */
  filledAmount: Scalars['BigInt'];
  /**  Historical ID for joins on frontend */
  historyID: Scalars['String'];
  /** Account - Plot Index */
  id: Scalars['ID'];
  /** Current index of plot listed */
  index: Scalars['BigInt'];
  /** Max harvestable index before listing expires */
  maxHarvestableIndex: Scalars['BigInt'];
  /** Minimum amount needed to fill this listing */
  minFillAmount: Scalars['BigInt'];
  /** Sale bean mode (internal/external) */
  mode: Scalars['Int'];
  /** Total amount of original listing */
  originalAmount: Scalars['BigInt'];
  /** Original index of the plot listed */
  originalIndex: Scalars['BigInt'];
  /** Plot being listed */
  plot: Plot;
  /** Marketplace used for listing */
  podMarketplace: PodMarketplace;
  /** Market v1 price per pod */
  pricePerPod: Scalars['Int'];
  /** Market v2 pricing function */
  pricingFunction?: Maybe<Scalars['Bytes']>;
  /** Market v2 pricing type */
  pricingType?: Maybe<Scalars['Int']>;
  /** Remaining amount left to be filled */
  remainingAmount: Scalars['BigInt'];
  /** Start within plot for listing */
  start: Scalars['BigInt'];
  /** Current market status of listing */
  status: MarketStatus;
  /** Timestamp updated */
  updatedAt: Scalars['BigInt'];
};

export type PodListingCancelled = MarketplaceEvent & {
  __typename?: 'PodListingCancelled';
  /**  Account cancelling listing */
  account: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Historical ID for joins */
  historyID: Scalars['String'];
  /** seedChange-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Index of plot listing being cancelled */
  index: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
};

export type PodListingCancelled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID?: InputMaybe<Scalars['String']>;
  historyID_contains?: InputMaybe<Scalars['String']>;
  historyID_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_ends_with?: InputMaybe<Scalars['String']>;
  historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_gt?: InputMaybe<Scalars['String']>;
  historyID_gte?: InputMaybe<Scalars['String']>;
  historyID_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_lt?: InputMaybe<Scalars['String']>;
  historyID_lte?: InputMaybe<Scalars['String']>;
  historyID_not?: InputMaybe<Scalars['String']>;
  historyID_not_contains?: InputMaybe<Scalars['String']>;
  historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_not_starts_with?: InputMaybe<Scalars['String']>;
  historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_starts_with?: InputMaybe<Scalars['String']>;
  historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum PodListingCancelled_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  HistoryId = 'historyID',
  Id = 'id',
  Index = 'index',
  LogIndex = 'logIndex',
  Protocol = 'protocol'
}

export type PodListingCreated = MarketplaceEvent & {
  __typename?: 'PodListingCreated';
  /**  Account creating the listing */
  account: Scalars['String'];
  /** Amount of pods listed */
  amount: Scalars['BigInt'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Historical ID for joins */
  historyID: Scalars['String'];
  /** podListingCreated-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Index of the plot listed */
  index: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /** Max index for listing */
  maxHarvestableIndex: Scalars['BigInt'];
  /** Claim to location */
  mode: Scalars['Int'];
  /** Price per pod */
  pricePerPod: Scalars['Int'];
  /** Pricing Function Data */
  pricingFunction?: Maybe<Scalars['Bytes']>;
  /** Pricing Type */
  pricingType?: Maybe<Scalars['Int']>;
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /**  Start value of the plot listed  */
  start: Scalars['BigInt'];
};

export type PodListingCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID?: InputMaybe<Scalars['String']>;
  historyID_contains?: InputMaybe<Scalars['String']>;
  historyID_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_ends_with?: InputMaybe<Scalars['String']>;
  historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_gt?: InputMaybe<Scalars['String']>;
  historyID_gte?: InputMaybe<Scalars['String']>;
  historyID_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_lt?: InputMaybe<Scalars['String']>;
  historyID_lte?: InputMaybe<Scalars['String']>;
  historyID_not?: InputMaybe<Scalars['String']>;
  historyID_not_contains?: InputMaybe<Scalars['String']>;
  historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_not_starts_with?: InputMaybe<Scalars['String']>;
  historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_starts_with?: InputMaybe<Scalars['String']>;
  historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  maxHarvestableIndex?: InputMaybe<Scalars['BigInt']>;
  maxHarvestableIndex_gt?: InputMaybe<Scalars['BigInt']>;
  maxHarvestableIndex_gte?: InputMaybe<Scalars['BigInt']>;
  maxHarvestableIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxHarvestableIndex_lt?: InputMaybe<Scalars['BigInt']>;
  maxHarvestableIndex_lte?: InputMaybe<Scalars['BigInt']>;
  maxHarvestableIndex_not?: InputMaybe<Scalars['BigInt']>;
  maxHarvestableIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mode?: InputMaybe<Scalars['Int']>;
  mode_gt?: InputMaybe<Scalars['Int']>;
  mode_gte?: InputMaybe<Scalars['Int']>;
  mode_in?: InputMaybe<Array<Scalars['Int']>>;
  mode_lt?: InputMaybe<Scalars['Int']>;
  mode_lte?: InputMaybe<Scalars['Int']>;
  mode_not?: InputMaybe<Scalars['Int']>;
  mode_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pricePerPod?: InputMaybe<Scalars['Int']>;
  pricePerPod_gt?: InputMaybe<Scalars['Int']>;
  pricePerPod_gte?: InputMaybe<Scalars['Int']>;
  pricePerPod_in?: InputMaybe<Array<Scalars['Int']>>;
  pricePerPod_lt?: InputMaybe<Scalars['Int']>;
  pricePerPod_lte?: InputMaybe<Scalars['Int']>;
  pricePerPod_not?: InputMaybe<Scalars['Int']>;
  pricePerPod_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pricingFunction?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_contains?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pricingFunction_not?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_not_contains?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pricingType?: InputMaybe<Scalars['Int']>;
  pricingType_gt?: InputMaybe<Scalars['Int']>;
  pricingType_gte?: InputMaybe<Scalars['Int']>;
  pricingType_in?: InputMaybe<Array<Scalars['Int']>>;
  pricingType_lt?: InputMaybe<Scalars['Int']>;
  pricingType_lte?: InputMaybe<Scalars['Int']>;
  pricingType_not?: InputMaybe<Scalars['Int']>;
  pricingType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['BigInt']>;
  start_gt?: InputMaybe<Scalars['BigInt']>;
  start_gte?: InputMaybe<Scalars['BigInt']>;
  start_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start_lt?: InputMaybe<Scalars['BigInt']>;
  start_lte?: InputMaybe<Scalars['BigInt']>;
  start_not?: InputMaybe<Scalars['BigInt']>;
  start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum PodListingCreated_OrderBy {
  Account = 'account',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  HistoryId = 'historyID',
  Id = 'id',
  Index = 'index',
  LogIndex = 'logIndex',
  MaxHarvestableIndex = 'maxHarvestableIndex',
  Mode = 'mode',
  PricePerPod = 'pricePerPod',
  PricingFunction = 'pricingFunction',
  PricingType = 'pricingType',
  Protocol = 'protocol',
  Start = 'start'
}

export type PodListingFilled = MarketplaceEvent & {
  __typename?: 'PodListingFilled';
  /** Number of pods transferred */
  amount: Scalars['BigInt'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /** Beans paid to fill the listing */
  costInBeans?: Maybe<Scalars['BigInt']>;
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /** Account selling pods */
  from: Scalars['String'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Historical ID for joins */
  historyID: Scalars['String'];
  /** podListingFilled-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /** Index of the plot transferred */
  index: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /** Start of the plot transferred */
  start: Scalars['BigInt'];
  /** Account buying pods */
  to: Scalars['String'];
};

export type PodListingFilled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  costInBeans?: InputMaybe<Scalars['BigInt']>;
  costInBeans_gt?: InputMaybe<Scalars['BigInt']>;
  costInBeans_gte?: InputMaybe<Scalars['BigInt']>;
  costInBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  costInBeans_lt?: InputMaybe<Scalars['BigInt']>;
  costInBeans_lte?: InputMaybe<Scalars['BigInt']>;
  costInBeans_not?: InputMaybe<Scalars['BigInt']>;
  costInBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['String']>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID?: InputMaybe<Scalars['String']>;
  historyID_contains?: InputMaybe<Scalars['String']>;
  historyID_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_ends_with?: InputMaybe<Scalars['String']>;
  historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_gt?: InputMaybe<Scalars['String']>;
  historyID_gte?: InputMaybe<Scalars['String']>;
  historyID_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_lt?: InputMaybe<Scalars['String']>;
  historyID_lte?: InputMaybe<Scalars['String']>;
  historyID_not?: InputMaybe<Scalars['String']>;
  historyID_not_contains?: InputMaybe<Scalars['String']>;
  historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_not_starts_with?: InputMaybe<Scalars['String']>;
  historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_starts_with?: InputMaybe<Scalars['String']>;
  historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['BigInt']>;
  start_gt?: InputMaybe<Scalars['BigInt']>;
  start_gte?: InputMaybe<Scalars['BigInt']>;
  start_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start_lt?: InputMaybe<Scalars['BigInt']>;
  start_lte?: InputMaybe<Scalars['BigInt']>;
  start_not?: InputMaybe<Scalars['BigInt']>;
  start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum PodListingFilled_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  CostInBeans = 'costInBeans',
  CreatedAt = 'createdAt',
  From = 'from',
  Hash = 'hash',
  HistoryId = 'historyID',
  Id = 'id',
  Index = 'index',
  LogIndex = 'logIndex',
  Protocol = 'protocol',
  Start = 'start',
  To = 'to'
}

export type PodListing_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledAmount?: InputMaybe<Scalars['BigInt']>;
  cancelledAmount_gt?: InputMaybe<Scalars['BigInt']>;
  cancelledAmount_gte?: InputMaybe<Scalars['BigInt']>;
  cancelledAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledAmount_lt?: InputMaybe<Scalars['BigInt']>;
  cancelledAmount_lte?: InputMaybe<Scalars['BigInt']>;
  cancelledAmount_not?: InputMaybe<Scalars['BigInt']>;
  cancelledAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmer?: InputMaybe<Scalars['String']>;
  farmer_?: InputMaybe<Farmer_Filter>;
  farmer_contains?: InputMaybe<Scalars['String']>;
  farmer_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_ends_with?: InputMaybe<Scalars['String']>;
  farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_gt?: InputMaybe<Scalars['String']>;
  farmer_gte?: InputMaybe<Scalars['String']>;
  farmer_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_lt?: InputMaybe<Scalars['String']>;
  farmer_lte?: InputMaybe<Scalars['String']>;
  farmer_not?: InputMaybe<Scalars['String']>;
  farmer_not_contains?: InputMaybe<Scalars['String']>;
  farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_not_starts_with?: InputMaybe<Scalars['String']>;
  farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_starts_with?: InputMaybe<Scalars['String']>;
  farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fill?: InputMaybe<Scalars['String']>;
  fill_?: InputMaybe<PodFill_Filter>;
  fill_contains?: InputMaybe<Scalars['String']>;
  fill_contains_nocase?: InputMaybe<Scalars['String']>;
  fill_ends_with?: InputMaybe<Scalars['String']>;
  fill_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fill_gt?: InputMaybe<Scalars['String']>;
  fill_gte?: InputMaybe<Scalars['String']>;
  fill_in?: InputMaybe<Array<Scalars['String']>>;
  fill_lt?: InputMaybe<Scalars['String']>;
  fill_lte?: InputMaybe<Scalars['String']>;
  fill_not?: InputMaybe<Scalars['String']>;
  fill_not_contains?: InputMaybe<Scalars['String']>;
  fill_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fill_not_ends_with?: InputMaybe<Scalars['String']>;
  fill_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fill_not_in?: InputMaybe<Array<Scalars['String']>>;
  fill_not_starts_with?: InputMaybe<Scalars['String']>;
  fill_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fill_starts_with?: InputMaybe<Scalars['String']>;
  fill_starts_with_nocase?: InputMaybe<Scalars['String']>;
  filled?: InputMaybe<Scalars['BigInt']>;
  filledAmount?: InputMaybe<Scalars['BigInt']>;
  filledAmount_gt?: InputMaybe<Scalars['BigInt']>;
  filledAmount_gte?: InputMaybe<Scalars['BigInt']>;
  filledAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledAmount_lt?: InputMaybe<Scalars['BigInt']>;
  filledAmount_lte?: InputMaybe<Scalars['BigInt']>;
  filledAmount_not?: InputMaybe<Scalars['BigInt']>;
  filledAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filled_gt?: InputMaybe<Scalars['BigInt']>;
  filled_gte?: InputMaybe<Scalars['BigInt']>;
  filled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filled_lt?: InputMaybe<Scalars['BigInt']>;
  filled_lte?: InputMaybe<Scalars['BigInt']>;
  filled_not?: InputMaybe<Scalars['BigInt']>;
  filled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  historyID?: InputMaybe<Scalars['String']>;
  historyID_contains?: InputMaybe<Scalars['String']>;
  historyID_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_ends_with?: InputMaybe<Scalars['String']>;
  historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_gt?: InputMaybe<Scalars['String']>;
  historyID_gte?: InputMaybe<Scalars['String']>;
  historyID_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_lt?: InputMaybe<Scalars['String']>;
  historyID_lte?: InputMaybe<Scalars['String']>;
  historyID_not?: InputMaybe<Scalars['String']>;
  historyID_not_contains?: InputMaybe<Scalars['String']>;
  historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_not_starts_with?: InputMaybe<Scalars['String']>;
  historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_starts_with?: InputMaybe<Scalars['String']>;
  historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxHarvestableIndex?: InputMaybe<Scalars['BigInt']>;
  maxHarvestableIndex_gt?: InputMaybe<Scalars['BigInt']>;
  maxHarvestableIndex_gte?: InputMaybe<Scalars['BigInt']>;
  maxHarvestableIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxHarvestableIndex_lt?: InputMaybe<Scalars['BigInt']>;
  maxHarvestableIndex_lte?: InputMaybe<Scalars['BigInt']>;
  maxHarvestableIndex_not?: InputMaybe<Scalars['BigInt']>;
  maxHarvestableIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minFillAmount?: InputMaybe<Scalars['BigInt']>;
  minFillAmount_gt?: InputMaybe<Scalars['BigInt']>;
  minFillAmount_gte?: InputMaybe<Scalars['BigInt']>;
  minFillAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minFillAmount_lt?: InputMaybe<Scalars['BigInt']>;
  minFillAmount_lte?: InputMaybe<Scalars['BigInt']>;
  minFillAmount_not?: InputMaybe<Scalars['BigInt']>;
  minFillAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mode?: InputMaybe<Scalars['Int']>;
  mode_gt?: InputMaybe<Scalars['Int']>;
  mode_gte?: InputMaybe<Scalars['Int']>;
  mode_in?: InputMaybe<Array<Scalars['Int']>>;
  mode_lt?: InputMaybe<Scalars['Int']>;
  mode_lte?: InputMaybe<Scalars['Int']>;
  mode_not?: InputMaybe<Scalars['Int']>;
  mode_not_in?: InputMaybe<Array<Scalars['Int']>>;
  originalAmount?: InputMaybe<Scalars['BigInt']>;
  originalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  originalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  originalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  originalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  originalAmount_not?: InputMaybe<Scalars['BigInt']>;
  originalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originalIndex?: InputMaybe<Scalars['BigInt']>;
  originalIndex_gt?: InputMaybe<Scalars['BigInt']>;
  originalIndex_gte?: InputMaybe<Scalars['BigInt']>;
  originalIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originalIndex_lt?: InputMaybe<Scalars['BigInt']>;
  originalIndex_lte?: InputMaybe<Scalars['BigInt']>;
  originalIndex_not?: InputMaybe<Scalars['BigInt']>;
  originalIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  plot?: InputMaybe<Scalars['String']>;
  plot_?: InputMaybe<Plot_Filter>;
  plot_contains?: InputMaybe<Scalars['String']>;
  plot_contains_nocase?: InputMaybe<Scalars['String']>;
  plot_ends_with?: InputMaybe<Scalars['String']>;
  plot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  plot_gt?: InputMaybe<Scalars['String']>;
  plot_gte?: InputMaybe<Scalars['String']>;
  plot_in?: InputMaybe<Array<Scalars['String']>>;
  plot_lt?: InputMaybe<Scalars['String']>;
  plot_lte?: InputMaybe<Scalars['String']>;
  plot_not?: InputMaybe<Scalars['String']>;
  plot_not_contains?: InputMaybe<Scalars['String']>;
  plot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  plot_not_ends_with?: InputMaybe<Scalars['String']>;
  plot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  plot_not_in?: InputMaybe<Array<Scalars['String']>>;
  plot_not_starts_with?: InputMaybe<Scalars['String']>;
  plot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  plot_starts_with?: InputMaybe<Scalars['String']>;
  plot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace?: InputMaybe<Scalars['String']>;
  podMarketplace_?: InputMaybe<PodMarketplace_Filter>;
  podMarketplace_contains?: InputMaybe<Scalars['String']>;
  podMarketplace_contains_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_ends_with?: InputMaybe<Scalars['String']>;
  podMarketplace_ends_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_gt?: InputMaybe<Scalars['String']>;
  podMarketplace_gte?: InputMaybe<Scalars['String']>;
  podMarketplace_in?: InputMaybe<Array<Scalars['String']>>;
  podMarketplace_lt?: InputMaybe<Scalars['String']>;
  podMarketplace_lte?: InputMaybe<Scalars['String']>;
  podMarketplace_not?: InputMaybe<Scalars['String']>;
  podMarketplace_not_contains?: InputMaybe<Scalars['String']>;
  podMarketplace_not_contains_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_not_ends_with?: InputMaybe<Scalars['String']>;
  podMarketplace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_not_in?: InputMaybe<Array<Scalars['String']>>;
  podMarketplace_not_starts_with?: InputMaybe<Scalars['String']>;
  podMarketplace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_starts_with?: InputMaybe<Scalars['String']>;
  podMarketplace_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pricePerPod?: InputMaybe<Scalars['Int']>;
  pricePerPod_gt?: InputMaybe<Scalars['Int']>;
  pricePerPod_gte?: InputMaybe<Scalars['Int']>;
  pricePerPod_in?: InputMaybe<Array<Scalars['Int']>>;
  pricePerPod_lt?: InputMaybe<Scalars['Int']>;
  pricePerPod_lte?: InputMaybe<Scalars['Int']>;
  pricePerPod_not?: InputMaybe<Scalars['Int']>;
  pricePerPod_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pricingFunction?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_contains?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pricingFunction_not?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_not_contains?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pricingType?: InputMaybe<Scalars['Int']>;
  pricingType_gt?: InputMaybe<Scalars['Int']>;
  pricingType_gte?: InputMaybe<Scalars['Int']>;
  pricingType_in?: InputMaybe<Array<Scalars['Int']>>;
  pricingType_lt?: InputMaybe<Scalars['Int']>;
  pricingType_lte?: InputMaybe<Scalars['Int']>;
  pricingType_not?: InputMaybe<Scalars['Int']>;
  pricingType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  remainingAmount?: InputMaybe<Scalars['BigInt']>;
  remainingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  remainingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  remainingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  remainingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  remainingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  remainingAmount_not?: InputMaybe<Scalars['BigInt']>;
  remainingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start?: InputMaybe<Scalars['BigInt']>;
  start_gt?: InputMaybe<Scalars['BigInt']>;
  start_gte?: InputMaybe<Scalars['BigInt']>;
  start_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start_lt?: InputMaybe<Scalars['BigInt']>;
  start_lte?: InputMaybe<Scalars['BigInt']>;
  start_not?: InputMaybe<Scalars['BigInt']>;
  start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<MarketStatus>;
  status_in?: InputMaybe<Array<MarketStatus>>;
  status_not?: InputMaybe<MarketStatus>;
  status_not_in?: InputMaybe<Array<MarketStatus>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum PodListing_OrderBy {
  Amount = 'amount',
  CancelledAmount = 'cancelledAmount',
  CreatedAt = 'createdAt',
  Farmer = 'farmer',
  Fill = 'fill',
  Filled = 'filled',
  FilledAmount = 'filledAmount',
  HistoryId = 'historyID',
  Id = 'id',
  Index = 'index',
  MaxHarvestableIndex = 'maxHarvestableIndex',
  MinFillAmount = 'minFillAmount',
  Mode = 'mode',
  OriginalAmount = 'originalAmount',
  OriginalIndex = 'originalIndex',
  Plot = 'plot',
  PodMarketplace = 'podMarketplace',
  PricePerPod = 'pricePerPod',
  PricingFunction = 'pricingFunction',
  PricingType = 'pricingType',
  RemainingAmount = 'remainingAmount',
  Start = 'start',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type PodMarketplace = {
  __typename?: 'PodMarketplace';
  /** All historical listings */
  allListings: Array<PodListing>;
  /** All historical orders */
  allOrders: Array<PodOrder>;
  /** Current amount of total pods listed */
  availableListedPods: Scalars['BigInt'];
  /** Cumulative bean volume between listings and orders */
  beanVolume: Scalars['BigInt'];
  /** Current cumulative pod listings that were cancelled */
  cancelledListedPods: Scalars['BigInt'];
  /** Current cumulative pod orders cancelled */
  cancelledOrderedPods: Scalars['BigInt'];
  /** Link to daily snapshot data */
  dailySnapshots: Array<PodMarketplaceDailySnapshot>;
  /** Current cumulative pod listings that expired */
  expiredListedPods: Scalars['BigInt'];
  /** Current cumulative pod listings filled */
  filledListedPods: Scalars['BigInt'];
  /** Current cumulative pod orders filled */
  filledOrderedPods: Scalars['BigInt'];
  /** All historical marketplace fills */
  fills: Array<PodFill>;
  /** Link to hourly snapshot data */
  hourlySnapshots: Array<PodMarketplaceHourlySnapshot>;
  /**  Contract address of beanstalk  */
  id: Scalars['ID'];
  /** Current cumulative pods listed for sale */
  listedPods: Scalars['BigInt'];
  /** Indexes of actively listed plots */
  listingIndexes: Array<Scalars['BigInt']>;
  /** Current cumulative pod orders created */
  orderedPods: Scalars['BigInt'];
  /** Active pod order IDs */
  orders: Array<PodOrder>;
  /** Cumulative pod volume between listings and orders */
  podVolume: Scalars['BigInt'];
  /** Current season of the marketplace */
  season: Scalars['Int'];
};


export type PodMarketplaceAllListingsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PodListing_Filter>;
};


export type PodMarketplaceAllOrdersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PodOrder_Filter>;
};


export type PodMarketplaceDailySnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodMarketplaceDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PodMarketplaceDailySnapshot_Filter>;
};


export type PodMarketplaceFillsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodFill_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PodFill_Filter>;
};


export type PodMarketplaceHourlySnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodMarketplaceHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PodMarketplaceHourlySnapshot_Filter>;
};


export type PodMarketplaceOrdersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PodOrder_Filter>;
};

export type PodMarketplaceDailySnapshot = {
  __typename?: 'PodMarketplaceDailySnapshot';
  /** Point in time current amount of total pods listed */
  availableListedPods: Scalars['BigInt'];
  /** Point in time current cumulative bean volume between listings and orders */
  beanVolume: Scalars['BigInt'];
  /** Point in time current cumulative pod listings that were cancelled */
  cancelledListedPods: Scalars['BigInt'];
  /** Point in time current cumulative pod orders cancelled */
  cancelledOrderedPods: Scalars['BigInt'];
  /** Timestamp of initial snapshot creation */
  createdAt: Scalars['BigInt'];
  /** Point in time current delta of total pods listed */
  deltaAvailableListedPods: Scalars['BigInt'];
  /** Point in time current delta bean volume between listings and orders */
  deltaBeanVolume: Scalars['BigInt'];
  /** Point in time current delta pod listings that were cancelled */
  deltaCancelledListedPods: Scalars['BigInt'];
  /** Point in time current delta pod orders cancelled */
  deltaCancelledOrderedPods: Scalars['BigInt'];
  /** Point in time current delta pod listings that expired */
  deltaExpiredListedPods: Scalars['BigInt'];
  /** Point in time current delta pod listings filled */
  deltaFilledListedPods: Scalars['BigInt'];
  /** Point in time current delta pod orders filled */
  deltaFilledOrderedPods: Scalars['BigInt'];
  /** Point in time current delta pods listed for sale */
  deltaListedPods: Scalars['BigInt'];
  /** Point in time current delta pod orders created */
  deltaOrderedPods: Scalars['BigInt'];
  /** Point in time current delta pod volume between listings and orders */
  deltaPodVolume: Scalars['BigInt'];
  /** Point in time current cumulative pod listings that expired */
  expiredListedPods: Scalars['BigInt'];
  /** Point in time current cumulative pod listings filled */
  filledListedPods: Scalars['BigInt'];
  /** Point in time current cumulative pod orders filled */
  filledOrderedPods: Scalars['BigInt'];
  /** Marketplace ID - Unix Timestamp */
  id: Scalars['ID'];
  /** Point in time current cumulative pods listed for sale */
  listedPods: Scalars['BigInt'];
  /** Point in time current cumulative pod orders created */
  orderedPods: Scalars['BigInt'];
  /** Marketplace associated with snapshot */
  podMarketplace: PodMarketplace;
  /** Point in time current cumulative pod volume between listings and orders */
  podVolume: Scalars['BigInt'];
  /** Point in time latest season */
  season: Scalars['Int'];
  /** Timestamp of last entity update */
  updatedAt: Scalars['BigInt'];
};

export type PodMarketplaceDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  availableListedPods?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_not?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanVolume?: InputMaybe<Scalars['BigInt']>;
  beanVolume_gt?: InputMaybe<Scalars['BigInt']>;
  beanVolume_gte?: InputMaybe<Scalars['BigInt']>;
  beanVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanVolume_lt?: InputMaybe<Scalars['BigInt']>;
  beanVolume_lte?: InputMaybe<Scalars['BigInt']>;
  beanVolume_not?: InputMaybe<Scalars['BigInt']>;
  beanVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledListedPods?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_not?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledOrderedPods?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledOrderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_not?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaAvailableListedPods?: InputMaybe<Scalars['BigInt']>;
  deltaAvailableListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaAvailableListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaAvailableListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaAvailableListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaAvailableListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaAvailableListedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaAvailableListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeanVolume?: InputMaybe<Scalars['BigInt']>;
  deltaBeanVolume_gt?: InputMaybe<Scalars['BigInt']>;
  deltaBeanVolume_gte?: InputMaybe<Scalars['BigInt']>;
  deltaBeanVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeanVolume_lt?: InputMaybe<Scalars['BigInt']>;
  deltaBeanVolume_lte?: InputMaybe<Scalars['BigInt']>;
  deltaBeanVolume_not?: InputMaybe<Scalars['BigInt']>;
  deltaBeanVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaCancelledListedPods?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaCancelledListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledListedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaCancelledOrderedPods?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledOrderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledOrderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledOrderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaCancelledOrderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledOrderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledOrderedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledOrderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaExpiredListedPods?: InputMaybe<Scalars['BigInt']>;
  deltaExpiredListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaExpiredListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaExpiredListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaExpiredListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaExpiredListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaExpiredListedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaExpiredListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaFilledListedPods?: InputMaybe<Scalars['BigInt']>;
  deltaFilledListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaFilledListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaFilledListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaFilledListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaFilledListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaFilledListedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaFilledListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaFilledOrderedPods?: InputMaybe<Scalars['BigInt']>;
  deltaFilledOrderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaFilledOrderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaFilledOrderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaFilledOrderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaFilledOrderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaFilledOrderedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaFilledOrderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaListedPods?: InputMaybe<Scalars['BigInt']>;
  deltaListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaListedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaOrderedPods?: InputMaybe<Scalars['BigInt']>;
  deltaOrderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaOrderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaOrderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaOrderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaOrderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaOrderedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaOrderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaPodVolume?: InputMaybe<Scalars['BigInt']>;
  deltaPodVolume_gt?: InputMaybe<Scalars['BigInt']>;
  deltaPodVolume_gte?: InputMaybe<Scalars['BigInt']>;
  deltaPodVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaPodVolume_lt?: InputMaybe<Scalars['BigInt']>;
  deltaPodVolume_lte?: InputMaybe<Scalars['BigInt']>;
  deltaPodVolume_not?: InputMaybe<Scalars['BigInt']>;
  deltaPodVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiredListedPods?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiredListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_not?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledListedPods?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_not?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledOrderedPods?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledOrderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_not?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  listedPods?: InputMaybe<Scalars['BigInt']>;
  listedPods_gt?: InputMaybe<Scalars['BigInt']>;
  listedPods_gte?: InputMaybe<Scalars['BigInt']>;
  listedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listedPods_lt?: InputMaybe<Scalars['BigInt']>;
  listedPods_lte?: InputMaybe<Scalars['BigInt']>;
  listedPods_not?: InputMaybe<Scalars['BigInt']>;
  listedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderedPods?: InputMaybe<Scalars['BigInt']>;
  orderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  orderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  orderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  orderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  orderedPods_not?: InputMaybe<Scalars['BigInt']>;
  orderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podMarketplace?: InputMaybe<Scalars['String']>;
  podMarketplace_?: InputMaybe<PodMarketplace_Filter>;
  podMarketplace_contains?: InputMaybe<Scalars['String']>;
  podMarketplace_contains_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_ends_with?: InputMaybe<Scalars['String']>;
  podMarketplace_ends_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_gt?: InputMaybe<Scalars['String']>;
  podMarketplace_gte?: InputMaybe<Scalars['String']>;
  podMarketplace_in?: InputMaybe<Array<Scalars['String']>>;
  podMarketplace_lt?: InputMaybe<Scalars['String']>;
  podMarketplace_lte?: InputMaybe<Scalars['String']>;
  podMarketplace_not?: InputMaybe<Scalars['String']>;
  podMarketplace_not_contains?: InputMaybe<Scalars['String']>;
  podMarketplace_not_contains_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_not_ends_with?: InputMaybe<Scalars['String']>;
  podMarketplace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_not_in?: InputMaybe<Array<Scalars['String']>>;
  podMarketplace_not_starts_with?: InputMaybe<Scalars['String']>;
  podMarketplace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_starts_with?: InputMaybe<Scalars['String']>;
  podMarketplace_starts_with_nocase?: InputMaybe<Scalars['String']>;
  podVolume?: InputMaybe<Scalars['BigInt']>;
  podVolume_gt?: InputMaybe<Scalars['BigInt']>;
  podVolume_gte?: InputMaybe<Scalars['BigInt']>;
  podVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podVolume_lt?: InputMaybe<Scalars['BigInt']>;
  podVolume_lte?: InputMaybe<Scalars['BigInt']>;
  podVolume_not?: InputMaybe<Scalars['BigInt']>;
  podVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum PodMarketplaceDailySnapshot_OrderBy {
  AvailableListedPods = 'availableListedPods',
  BeanVolume = 'beanVolume',
  CancelledListedPods = 'cancelledListedPods',
  CancelledOrderedPods = 'cancelledOrderedPods',
  CreatedAt = 'createdAt',
  DeltaAvailableListedPods = 'deltaAvailableListedPods',
  DeltaBeanVolume = 'deltaBeanVolume',
  DeltaCancelledListedPods = 'deltaCancelledListedPods',
  DeltaCancelledOrderedPods = 'deltaCancelledOrderedPods',
  DeltaExpiredListedPods = 'deltaExpiredListedPods',
  DeltaFilledListedPods = 'deltaFilledListedPods',
  DeltaFilledOrderedPods = 'deltaFilledOrderedPods',
  DeltaListedPods = 'deltaListedPods',
  DeltaOrderedPods = 'deltaOrderedPods',
  DeltaPodVolume = 'deltaPodVolume',
  ExpiredListedPods = 'expiredListedPods',
  FilledListedPods = 'filledListedPods',
  FilledOrderedPods = 'filledOrderedPods',
  Id = 'id',
  ListedPods = 'listedPods',
  OrderedPods = 'orderedPods',
  PodMarketplace = 'podMarketplace',
  PodVolume = 'podVolume',
  Season = 'season',
  UpdatedAt = 'updatedAt'
}

export type PodMarketplaceHourlySnapshot = {
  __typename?: 'PodMarketplaceHourlySnapshot';
  /** Point in time current amount of total pods listed */
  availableListedPods: Scalars['BigInt'];
  /** Point in time current cumulative bean volume between listings and orders */
  beanVolume: Scalars['BigInt'];
  /** Point in time current cumulative pod listings that were cancelled */
  cancelledListedPods: Scalars['BigInt'];
  /** Point in time current cumulative pod orders cancelled */
  cancelledOrderedPods: Scalars['BigInt'];
  /** Timestamp of initial snapshot creation */
  createdAt: Scalars['BigInt'];
  /** Point in time current delta of total pods listed */
  deltaAvailableListedPods: Scalars['BigInt'];
  /** Point in time current delta bean volume between listings and orders */
  deltaBeanVolume: Scalars['BigInt'];
  /** Point in time current delta pod listings that were cancelled */
  deltaCancelledListedPods: Scalars['BigInt'];
  /** Point in time current delta pod orders cancelled */
  deltaCancelledOrderedPods: Scalars['BigInt'];
  /** Point in time current delta pod listings that expired */
  deltaExpiredListedPods: Scalars['BigInt'];
  /** Point in time current delta pod listings filled */
  deltaFilledListedPods: Scalars['BigInt'];
  /** Point in time current delta pod orders filled */
  deltaFilledOrderedPods: Scalars['BigInt'];
  /** Point in time current delta pods listed for sale */
  deltaListedPods: Scalars['BigInt'];
  /** Point in time current delta pod orders created */
  deltaOrderedPods: Scalars['BigInt'];
  /** Point in time current delta pod volume between listings and orders */
  deltaPodVolume: Scalars['BigInt'];
  /** Point in time current cumulative pod listings that expired */
  expiredListedPods: Scalars['BigInt'];
  /** Point in time current cumulative pod listings filled */
  filledListedPods: Scalars['BigInt'];
  /** Point in time current cumulative pod orders filled */
  filledOrderedPods: Scalars['BigInt'];
  /** Marketplace ID - Unix Timestamp */
  id: Scalars['ID'];
  /** Point in time current cumulative pods listed for sale */
  listedPods: Scalars['BigInt'];
  /** Point in time current cumulative pod orders created */
  orderedPods: Scalars['BigInt'];
  /** Marketplace associated with snapshot */
  podMarketplace: PodMarketplace;
  /** Point in time current cumulative pod volume between listings and orders */
  podVolume: Scalars['BigInt'];
  /** Point in time latest season */
  season: Scalars['Int'];
  /** Timestamp of last entity update */
  updatedAt: Scalars['BigInt'];
};

export type PodMarketplaceHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  availableListedPods?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_not?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanVolume?: InputMaybe<Scalars['BigInt']>;
  beanVolume_gt?: InputMaybe<Scalars['BigInt']>;
  beanVolume_gte?: InputMaybe<Scalars['BigInt']>;
  beanVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanVolume_lt?: InputMaybe<Scalars['BigInt']>;
  beanVolume_lte?: InputMaybe<Scalars['BigInt']>;
  beanVolume_not?: InputMaybe<Scalars['BigInt']>;
  beanVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledListedPods?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_not?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledOrderedPods?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledOrderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_not?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaAvailableListedPods?: InputMaybe<Scalars['BigInt']>;
  deltaAvailableListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaAvailableListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaAvailableListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaAvailableListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaAvailableListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaAvailableListedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaAvailableListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeanVolume?: InputMaybe<Scalars['BigInt']>;
  deltaBeanVolume_gt?: InputMaybe<Scalars['BigInt']>;
  deltaBeanVolume_gte?: InputMaybe<Scalars['BigInt']>;
  deltaBeanVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeanVolume_lt?: InputMaybe<Scalars['BigInt']>;
  deltaBeanVolume_lte?: InputMaybe<Scalars['BigInt']>;
  deltaBeanVolume_not?: InputMaybe<Scalars['BigInt']>;
  deltaBeanVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaCancelledListedPods?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaCancelledListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledListedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaCancelledOrderedPods?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledOrderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledOrderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledOrderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaCancelledOrderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledOrderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledOrderedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaCancelledOrderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaExpiredListedPods?: InputMaybe<Scalars['BigInt']>;
  deltaExpiredListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaExpiredListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaExpiredListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaExpiredListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaExpiredListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaExpiredListedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaExpiredListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaFilledListedPods?: InputMaybe<Scalars['BigInt']>;
  deltaFilledListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaFilledListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaFilledListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaFilledListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaFilledListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaFilledListedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaFilledListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaFilledOrderedPods?: InputMaybe<Scalars['BigInt']>;
  deltaFilledOrderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaFilledOrderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaFilledOrderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaFilledOrderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaFilledOrderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaFilledOrderedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaFilledOrderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaListedPods?: InputMaybe<Scalars['BigInt']>;
  deltaListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaListedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaOrderedPods?: InputMaybe<Scalars['BigInt']>;
  deltaOrderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  deltaOrderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  deltaOrderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaOrderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  deltaOrderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  deltaOrderedPods_not?: InputMaybe<Scalars['BigInt']>;
  deltaOrderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaPodVolume?: InputMaybe<Scalars['BigInt']>;
  deltaPodVolume_gt?: InputMaybe<Scalars['BigInt']>;
  deltaPodVolume_gte?: InputMaybe<Scalars['BigInt']>;
  deltaPodVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaPodVolume_lt?: InputMaybe<Scalars['BigInt']>;
  deltaPodVolume_lte?: InputMaybe<Scalars['BigInt']>;
  deltaPodVolume_not?: InputMaybe<Scalars['BigInt']>;
  deltaPodVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiredListedPods?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiredListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_not?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledListedPods?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_not?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledOrderedPods?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledOrderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_not?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  listedPods?: InputMaybe<Scalars['BigInt']>;
  listedPods_gt?: InputMaybe<Scalars['BigInt']>;
  listedPods_gte?: InputMaybe<Scalars['BigInt']>;
  listedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listedPods_lt?: InputMaybe<Scalars['BigInt']>;
  listedPods_lte?: InputMaybe<Scalars['BigInt']>;
  listedPods_not?: InputMaybe<Scalars['BigInt']>;
  listedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderedPods?: InputMaybe<Scalars['BigInt']>;
  orderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  orderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  orderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  orderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  orderedPods_not?: InputMaybe<Scalars['BigInt']>;
  orderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podMarketplace?: InputMaybe<Scalars['String']>;
  podMarketplace_?: InputMaybe<PodMarketplace_Filter>;
  podMarketplace_contains?: InputMaybe<Scalars['String']>;
  podMarketplace_contains_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_ends_with?: InputMaybe<Scalars['String']>;
  podMarketplace_ends_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_gt?: InputMaybe<Scalars['String']>;
  podMarketplace_gte?: InputMaybe<Scalars['String']>;
  podMarketplace_in?: InputMaybe<Array<Scalars['String']>>;
  podMarketplace_lt?: InputMaybe<Scalars['String']>;
  podMarketplace_lte?: InputMaybe<Scalars['String']>;
  podMarketplace_not?: InputMaybe<Scalars['String']>;
  podMarketplace_not_contains?: InputMaybe<Scalars['String']>;
  podMarketplace_not_contains_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_not_ends_with?: InputMaybe<Scalars['String']>;
  podMarketplace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_not_in?: InputMaybe<Array<Scalars['String']>>;
  podMarketplace_not_starts_with?: InputMaybe<Scalars['String']>;
  podMarketplace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_starts_with?: InputMaybe<Scalars['String']>;
  podMarketplace_starts_with_nocase?: InputMaybe<Scalars['String']>;
  podVolume?: InputMaybe<Scalars['BigInt']>;
  podVolume_gt?: InputMaybe<Scalars['BigInt']>;
  podVolume_gte?: InputMaybe<Scalars['BigInt']>;
  podVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podVolume_lt?: InputMaybe<Scalars['BigInt']>;
  podVolume_lte?: InputMaybe<Scalars['BigInt']>;
  podVolume_not?: InputMaybe<Scalars['BigInt']>;
  podVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum PodMarketplaceHourlySnapshot_OrderBy {
  AvailableListedPods = 'availableListedPods',
  BeanVolume = 'beanVolume',
  CancelledListedPods = 'cancelledListedPods',
  CancelledOrderedPods = 'cancelledOrderedPods',
  CreatedAt = 'createdAt',
  DeltaAvailableListedPods = 'deltaAvailableListedPods',
  DeltaBeanVolume = 'deltaBeanVolume',
  DeltaCancelledListedPods = 'deltaCancelledListedPods',
  DeltaCancelledOrderedPods = 'deltaCancelledOrderedPods',
  DeltaExpiredListedPods = 'deltaExpiredListedPods',
  DeltaFilledListedPods = 'deltaFilledListedPods',
  DeltaFilledOrderedPods = 'deltaFilledOrderedPods',
  DeltaListedPods = 'deltaListedPods',
  DeltaOrderedPods = 'deltaOrderedPods',
  DeltaPodVolume = 'deltaPodVolume',
  ExpiredListedPods = 'expiredListedPods',
  FilledListedPods = 'filledListedPods',
  FilledOrderedPods = 'filledOrderedPods',
  Id = 'id',
  ListedPods = 'listedPods',
  OrderedPods = 'orderedPods',
  PodMarketplace = 'podMarketplace',
  PodVolume = 'podVolume',
  Season = 'season',
  UpdatedAt = 'updatedAt'
}

export type PodMarketplace_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allListings_?: InputMaybe<PodListing_Filter>;
  allOrders_?: InputMaybe<PodOrder_Filter>;
  availableListedPods?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_not?: InputMaybe<Scalars['BigInt']>;
  availableListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanVolume?: InputMaybe<Scalars['BigInt']>;
  beanVolume_gt?: InputMaybe<Scalars['BigInt']>;
  beanVolume_gte?: InputMaybe<Scalars['BigInt']>;
  beanVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanVolume_lt?: InputMaybe<Scalars['BigInt']>;
  beanVolume_lte?: InputMaybe<Scalars['BigInt']>;
  beanVolume_not?: InputMaybe<Scalars['BigInt']>;
  beanVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledListedPods?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_not?: InputMaybe<Scalars['BigInt']>;
  cancelledListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledOrderedPods?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledOrderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_not?: InputMaybe<Scalars['BigInt']>;
  cancelledOrderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailySnapshots_?: InputMaybe<PodMarketplaceDailySnapshot_Filter>;
  expiredListedPods?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiredListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_not?: InputMaybe<Scalars['BigInt']>;
  expiredListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledListedPods?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_gt?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_gte?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledListedPods_lt?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_lte?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_not?: InputMaybe<Scalars['BigInt']>;
  filledListedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledOrderedPods?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  filledOrderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_not?: InputMaybe<Scalars['BigInt']>;
  filledOrderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fills_?: InputMaybe<PodFill_Filter>;
  hourlySnapshots_?: InputMaybe<PodMarketplaceHourlySnapshot_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  listedPods?: InputMaybe<Scalars['BigInt']>;
  listedPods_gt?: InputMaybe<Scalars['BigInt']>;
  listedPods_gte?: InputMaybe<Scalars['BigInt']>;
  listedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listedPods_lt?: InputMaybe<Scalars['BigInt']>;
  listedPods_lte?: InputMaybe<Scalars['BigInt']>;
  listedPods_not?: InputMaybe<Scalars['BigInt']>;
  listedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listingIndexes?: InputMaybe<Array<Scalars['BigInt']>>;
  listingIndexes_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  listingIndexes_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  listingIndexes_not?: InputMaybe<Array<Scalars['BigInt']>>;
  listingIndexes_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  listingIndexes_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  orderedPods?: InputMaybe<Scalars['BigInt']>;
  orderedPods_gt?: InputMaybe<Scalars['BigInt']>;
  orderedPods_gte?: InputMaybe<Scalars['BigInt']>;
  orderedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderedPods_lt?: InputMaybe<Scalars['BigInt']>;
  orderedPods_lte?: InputMaybe<Scalars['BigInt']>;
  orderedPods_not?: InputMaybe<Scalars['BigInt']>;
  orderedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orders?: InputMaybe<Array<Scalars['String']>>;
  orders_?: InputMaybe<PodOrder_Filter>;
  orders_contains?: InputMaybe<Array<Scalars['String']>>;
  orders_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  orders_not?: InputMaybe<Array<Scalars['String']>>;
  orders_not_contains?: InputMaybe<Array<Scalars['String']>>;
  orders_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  podVolume?: InputMaybe<Scalars['BigInt']>;
  podVolume_gt?: InputMaybe<Scalars['BigInt']>;
  podVolume_gte?: InputMaybe<Scalars['BigInt']>;
  podVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podVolume_lt?: InputMaybe<Scalars['BigInt']>;
  podVolume_lte?: InputMaybe<Scalars['BigInt']>;
  podVolume_not?: InputMaybe<Scalars['BigInt']>;
  podVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum PodMarketplace_OrderBy {
  AllListings = 'allListings',
  AllOrders = 'allOrders',
  AvailableListedPods = 'availableListedPods',
  BeanVolume = 'beanVolume',
  CancelledListedPods = 'cancelledListedPods',
  CancelledOrderedPods = 'cancelledOrderedPods',
  DailySnapshots = 'dailySnapshots',
  ExpiredListedPods = 'expiredListedPods',
  FilledListedPods = 'filledListedPods',
  FilledOrderedPods = 'filledOrderedPods',
  Fills = 'fills',
  HourlySnapshots = 'hourlySnapshots',
  Id = 'id',
  ListedPods = 'listedPods',
  ListingIndexes = 'listingIndexes',
  OrderedPods = 'orderedPods',
  Orders = 'orders',
  PodVolume = 'podVolume',
  Season = 'season'
}

export type PodOrder = {
  __typename?: 'PodOrder';
  /** V2 - Original amount of beans used to order pods */
  beanAmount: Scalars['BigInt'];
  /** Bean Amount Filled */
  beanAmountFilled: Scalars['BigInt'];
  /** Creation timestamp */
  createdAt: Scalars['BigInt'];
  /** Farmer placing the order */
  farmer: Farmer;
  /** Any fill associated with this order */
  fill?: Maybe<PodFill>;
  /**  Historical ID for joins */
  historyID: Scalars['String'];
  /** Order ID emitted by event */
  id: Scalars['ID'];
  /** Max place in line for pods to fulfill the order */
  maxPlaceInLine: Scalars['BigInt'];
  /** Minimum amount needed to fill this order */
  minFillAmount: Scalars['BigInt'];
  /** V1 - Original amount of the ordered pods */
  podAmount: Scalars['BigInt'];
  /** Current filled amount */
  podAmountFilled: Scalars['BigInt'];
  /** Marketplace used for order */
  podMarketplace: PodMarketplace;
  /** Market v1 price per pod */
  pricePerPod: Scalars['Int'];
  /** Market v2 pricing function */
  pricingFunction?: Maybe<Scalars['Bytes']>;
  /** Market v2 pricing type */
  pricingType?: Maybe<Scalars['Int']>;
  /** Current status of order */
  status: MarketStatus;
  /** Timestamp updated */
  updatedAt: Scalars['BigInt'];
};

export type PodOrderCancelled = MarketplaceEvent & {
  __typename?: 'PodOrderCancelled';
  /**  Account cancelling listing */
  account: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Historical ID for joins */
  historyID: Scalars['String'];
  /** podOrderCancelled-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  ID of order cancelled */
  orderId: Scalars['String'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
};

export type PodOrderCancelled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID?: InputMaybe<Scalars['String']>;
  historyID_contains?: InputMaybe<Scalars['String']>;
  historyID_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_ends_with?: InputMaybe<Scalars['String']>;
  historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_gt?: InputMaybe<Scalars['String']>;
  historyID_gte?: InputMaybe<Scalars['String']>;
  historyID_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_lt?: InputMaybe<Scalars['String']>;
  historyID_lte?: InputMaybe<Scalars['String']>;
  historyID_not?: InputMaybe<Scalars['String']>;
  historyID_not_contains?: InputMaybe<Scalars['String']>;
  historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_not_starts_with?: InputMaybe<Scalars['String']>;
  historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_starts_with?: InputMaybe<Scalars['String']>;
  historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  orderId?: InputMaybe<Scalars['String']>;
  orderId_contains?: InputMaybe<Scalars['String']>;
  orderId_contains_nocase?: InputMaybe<Scalars['String']>;
  orderId_ends_with?: InputMaybe<Scalars['String']>;
  orderId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  orderId_gt?: InputMaybe<Scalars['String']>;
  orderId_gte?: InputMaybe<Scalars['String']>;
  orderId_in?: InputMaybe<Array<Scalars['String']>>;
  orderId_lt?: InputMaybe<Scalars['String']>;
  orderId_lte?: InputMaybe<Scalars['String']>;
  orderId_not?: InputMaybe<Scalars['String']>;
  orderId_not_contains?: InputMaybe<Scalars['String']>;
  orderId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  orderId_not_ends_with?: InputMaybe<Scalars['String']>;
  orderId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  orderId_not_in?: InputMaybe<Array<Scalars['String']>>;
  orderId_not_starts_with?: InputMaybe<Scalars['String']>;
  orderId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  orderId_starts_with?: InputMaybe<Scalars['String']>;
  orderId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum PodOrderCancelled_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  HistoryId = 'historyID',
  Id = 'id',
  LogIndex = 'logIndex',
  OrderId = 'orderId',
  Protocol = 'protocol'
}

export type PodOrderCreated = MarketplaceEvent & {
  __typename?: 'PodOrderCreated';
  /**  Account creating the listing */
  account: Scalars['String'];
  /** Amount of pods listed */
  amount: Scalars['BigInt'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Historical ID for joins */
  historyID: Scalars['String'];
  /** podOrderCreated-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /** Max place in line */
  maxPlaceInLine: Scalars['BigInt'];
  /**  ID of the pod order */
  orderId: Scalars['String'];
  /** Price per pod */
  pricePerPod: Scalars['Int'];
  /** Pricing Function Data */
  pricingFunction?: Maybe<Scalars['Bytes']>;
  /** Pricing Type */
  pricingType?: Maybe<Scalars['Int']>;
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
};

export type PodOrderCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID?: InputMaybe<Scalars['String']>;
  historyID_contains?: InputMaybe<Scalars['String']>;
  historyID_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_ends_with?: InputMaybe<Scalars['String']>;
  historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_gt?: InputMaybe<Scalars['String']>;
  historyID_gte?: InputMaybe<Scalars['String']>;
  historyID_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_lt?: InputMaybe<Scalars['String']>;
  historyID_lte?: InputMaybe<Scalars['String']>;
  historyID_not?: InputMaybe<Scalars['String']>;
  historyID_not_contains?: InputMaybe<Scalars['String']>;
  historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_not_starts_with?: InputMaybe<Scalars['String']>;
  historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_starts_with?: InputMaybe<Scalars['String']>;
  historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  maxPlaceInLine?: InputMaybe<Scalars['BigInt']>;
  maxPlaceInLine_gt?: InputMaybe<Scalars['BigInt']>;
  maxPlaceInLine_gte?: InputMaybe<Scalars['BigInt']>;
  maxPlaceInLine_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxPlaceInLine_lt?: InputMaybe<Scalars['BigInt']>;
  maxPlaceInLine_lte?: InputMaybe<Scalars['BigInt']>;
  maxPlaceInLine_not?: InputMaybe<Scalars['BigInt']>;
  maxPlaceInLine_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderId?: InputMaybe<Scalars['String']>;
  orderId_contains?: InputMaybe<Scalars['String']>;
  orderId_contains_nocase?: InputMaybe<Scalars['String']>;
  orderId_ends_with?: InputMaybe<Scalars['String']>;
  orderId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  orderId_gt?: InputMaybe<Scalars['String']>;
  orderId_gte?: InputMaybe<Scalars['String']>;
  orderId_in?: InputMaybe<Array<Scalars['String']>>;
  orderId_lt?: InputMaybe<Scalars['String']>;
  orderId_lte?: InputMaybe<Scalars['String']>;
  orderId_not?: InputMaybe<Scalars['String']>;
  orderId_not_contains?: InputMaybe<Scalars['String']>;
  orderId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  orderId_not_ends_with?: InputMaybe<Scalars['String']>;
  orderId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  orderId_not_in?: InputMaybe<Array<Scalars['String']>>;
  orderId_not_starts_with?: InputMaybe<Scalars['String']>;
  orderId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  orderId_starts_with?: InputMaybe<Scalars['String']>;
  orderId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pricePerPod?: InputMaybe<Scalars['Int']>;
  pricePerPod_gt?: InputMaybe<Scalars['Int']>;
  pricePerPod_gte?: InputMaybe<Scalars['Int']>;
  pricePerPod_in?: InputMaybe<Array<Scalars['Int']>>;
  pricePerPod_lt?: InputMaybe<Scalars['Int']>;
  pricePerPod_lte?: InputMaybe<Scalars['Int']>;
  pricePerPod_not?: InputMaybe<Scalars['Int']>;
  pricePerPod_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pricingFunction?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_contains?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pricingFunction_not?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_not_contains?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pricingType?: InputMaybe<Scalars['Int']>;
  pricingType_gt?: InputMaybe<Scalars['Int']>;
  pricingType_gte?: InputMaybe<Scalars['Int']>;
  pricingType_in?: InputMaybe<Array<Scalars['Int']>>;
  pricingType_lt?: InputMaybe<Scalars['Int']>;
  pricingType_lte?: InputMaybe<Scalars['Int']>;
  pricingType_not?: InputMaybe<Scalars['Int']>;
  pricingType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum PodOrderCreated_OrderBy {
  Account = 'account',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  HistoryId = 'historyID',
  Id = 'id',
  LogIndex = 'logIndex',
  MaxPlaceInLine = 'maxPlaceInLine',
  OrderId = 'orderId',
  PricePerPod = 'pricePerPod',
  PricingFunction = 'pricingFunction',
  PricingType = 'pricingType',
  Protocol = 'protocol'
}

export type PodOrderFilled = MarketplaceEvent & {
  __typename?: 'PodOrderFilled';
  /** Number of pods transferred */
  amount: Scalars['BigInt'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /** Beans paid to fill the order */
  costInBeans?: Maybe<Scalars['BigInt']>;
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /** Account selling pods */
  from: Scalars['String'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Historical ID for joins */
  historyID: Scalars['String'];
  /** podOrderFilled-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /** Index of the plot transferred */
  index: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /** Start of the plot transferred */
  start: Scalars['BigInt'];
  /** Account buying pods */
  to: Scalars['String'];
};

export type PodOrderFilled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  costInBeans?: InputMaybe<Scalars['BigInt']>;
  costInBeans_gt?: InputMaybe<Scalars['BigInt']>;
  costInBeans_gte?: InputMaybe<Scalars['BigInt']>;
  costInBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  costInBeans_lt?: InputMaybe<Scalars['BigInt']>;
  costInBeans_lte?: InputMaybe<Scalars['BigInt']>;
  costInBeans_not?: InputMaybe<Scalars['BigInt']>;
  costInBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['String']>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID?: InputMaybe<Scalars['String']>;
  historyID_contains?: InputMaybe<Scalars['String']>;
  historyID_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_ends_with?: InputMaybe<Scalars['String']>;
  historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_gt?: InputMaybe<Scalars['String']>;
  historyID_gte?: InputMaybe<Scalars['String']>;
  historyID_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_lt?: InputMaybe<Scalars['String']>;
  historyID_lte?: InputMaybe<Scalars['String']>;
  historyID_not?: InputMaybe<Scalars['String']>;
  historyID_not_contains?: InputMaybe<Scalars['String']>;
  historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_not_starts_with?: InputMaybe<Scalars['String']>;
  historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_starts_with?: InputMaybe<Scalars['String']>;
  historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['BigInt']>;
  start_gt?: InputMaybe<Scalars['BigInt']>;
  start_gte?: InputMaybe<Scalars['BigInt']>;
  start_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start_lt?: InputMaybe<Scalars['BigInt']>;
  start_lte?: InputMaybe<Scalars['BigInt']>;
  start_not?: InputMaybe<Scalars['BigInt']>;
  start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum PodOrderFilled_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  CostInBeans = 'costInBeans',
  CreatedAt = 'createdAt',
  From = 'from',
  Hash = 'hash',
  HistoryId = 'historyID',
  Id = 'id',
  Index = 'index',
  LogIndex = 'logIndex',
  Protocol = 'protocol',
  Start = 'start',
  To = 'to'
}

export type PodOrder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  beanAmount?: InputMaybe<Scalars['BigInt']>;
  beanAmountFilled?: InputMaybe<Scalars['BigInt']>;
  beanAmountFilled_gt?: InputMaybe<Scalars['BigInt']>;
  beanAmountFilled_gte?: InputMaybe<Scalars['BigInt']>;
  beanAmountFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanAmountFilled_lt?: InputMaybe<Scalars['BigInt']>;
  beanAmountFilled_lte?: InputMaybe<Scalars['BigInt']>;
  beanAmountFilled_not?: InputMaybe<Scalars['BigInt']>;
  beanAmountFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanAmount_gt?: InputMaybe<Scalars['BigInt']>;
  beanAmount_gte?: InputMaybe<Scalars['BigInt']>;
  beanAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanAmount_lt?: InputMaybe<Scalars['BigInt']>;
  beanAmount_lte?: InputMaybe<Scalars['BigInt']>;
  beanAmount_not?: InputMaybe<Scalars['BigInt']>;
  beanAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmer?: InputMaybe<Scalars['String']>;
  farmer_?: InputMaybe<Farmer_Filter>;
  farmer_contains?: InputMaybe<Scalars['String']>;
  farmer_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_ends_with?: InputMaybe<Scalars['String']>;
  farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_gt?: InputMaybe<Scalars['String']>;
  farmer_gte?: InputMaybe<Scalars['String']>;
  farmer_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_lt?: InputMaybe<Scalars['String']>;
  farmer_lte?: InputMaybe<Scalars['String']>;
  farmer_not?: InputMaybe<Scalars['String']>;
  farmer_not_contains?: InputMaybe<Scalars['String']>;
  farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_not_starts_with?: InputMaybe<Scalars['String']>;
  farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_starts_with?: InputMaybe<Scalars['String']>;
  farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fill?: InputMaybe<Scalars['String']>;
  fill_?: InputMaybe<PodFill_Filter>;
  fill_contains?: InputMaybe<Scalars['String']>;
  fill_contains_nocase?: InputMaybe<Scalars['String']>;
  fill_ends_with?: InputMaybe<Scalars['String']>;
  fill_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fill_gt?: InputMaybe<Scalars['String']>;
  fill_gte?: InputMaybe<Scalars['String']>;
  fill_in?: InputMaybe<Array<Scalars['String']>>;
  fill_lt?: InputMaybe<Scalars['String']>;
  fill_lte?: InputMaybe<Scalars['String']>;
  fill_not?: InputMaybe<Scalars['String']>;
  fill_not_contains?: InputMaybe<Scalars['String']>;
  fill_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fill_not_ends_with?: InputMaybe<Scalars['String']>;
  fill_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fill_not_in?: InputMaybe<Array<Scalars['String']>>;
  fill_not_starts_with?: InputMaybe<Scalars['String']>;
  fill_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fill_starts_with?: InputMaybe<Scalars['String']>;
  fill_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID?: InputMaybe<Scalars['String']>;
  historyID_contains?: InputMaybe<Scalars['String']>;
  historyID_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_ends_with?: InputMaybe<Scalars['String']>;
  historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_gt?: InputMaybe<Scalars['String']>;
  historyID_gte?: InputMaybe<Scalars['String']>;
  historyID_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_lt?: InputMaybe<Scalars['String']>;
  historyID_lte?: InputMaybe<Scalars['String']>;
  historyID_not?: InputMaybe<Scalars['String']>;
  historyID_not_contains?: InputMaybe<Scalars['String']>;
  historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with?: InputMaybe<Scalars['String']>;
  historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
  historyID_not_starts_with?: InputMaybe<Scalars['String']>;
  historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  historyID_starts_with?: InputMaybe<Scalars['String']>;
  historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  maxPlaceInLine?: InputMaybe<Scalars['BigInt']>;
  maxPlaceInLine_gt?: InputMaybe<Scalars['BigInt']>;
  maxPlaceInLine_gte?: InputMaybe<Scalars['BigInt']>;
  maxPlaceInLine_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxPlaceInLine_lt?: InputMaybe<Scalars['BigInt']>;
  maxPlaceInLine_lte?: InputMaybe<Scalars['BigInt']>;
  maxPlaceInLine_not?: InputMaybe<Scalars['BigInt']>;
  maxPlaceInLine_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minFillAmount?: InputMaybe<Scalars['BigInt']>;
  minFillAmount_gt?: InputMaybe<Scalars['BigInt']>;
  minFillAmount_gte?: InputMaybe<Scalars['BigInt']>;
  minFillAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minFillAmount_lt?: InputMaybe<Scalars['BigInt']>;
  minFillAmount_lte?: InputMaybe<Scalars['BigInt']>;
  minFillAmount_not?: InputMaybe<Scalars['BigInt']>;
  minFillAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podAmount?: InputMaybe<Scalars['BigInt']>;
  podAmountFilled?: InputMaybe<Scalars['BigInt']>;
  podAmountFilled_gt?: InputMaybe<Scalars['BigInt']>;
  podAmountFilled_gte?: InputMaybe<Scalars['BigInt']>;
  podAmountFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podAmountFilled_lt?: InputMaybe<Scalars['BigInt']>;
  podAmountFilled_lte?: InputMaybe<Scalars['BigInt']>;
  podAmountFilled_not?: InputMaybe<Scalars['BigInt']>;
  podAmountFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podAmount_gt?: InputMaybe<Scalars['BigInt']>;
  podAmount_gte?: InputMaybe<Scalars['BigInt']>;
  podAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podAmount_lt?: InputMaybe<Scalars['BigInt']>;
  podAmount_lte?: InputMaybe<Scalars['BigInt']>;
  podAmount_not?: InputMaybe<Scalars['BigInt']>;
  podAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  podMarketplace?: InputMaybe<Scalars['String']>;
  podMarketplace_?: InputMaybe<PodMarketplace_Filter>;
  podMarketplace_contains?: InputMaybe<Scalars['String']>;
  podMarketplace_contains_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_ends_with?: InputMaybe<Scalars['String']>;
  podMarketplace_ends_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_gt?: InputMaybe<Scalars['String']>;
  podMarketplace_gte?: InputMaybe<Scalars['String']>;
  podMarketplace_in?: InputMaybe<Array<Scalars['String']>>;
  podMarketplace_lt?: InputMaybe<Scalars['String']>;
  podMarketplace_lte?: InputMaybe<Scalars['String']>;
  podMarketplace_not?: InputMaybe<Scalars['String']>;
  podMarketplace_not_contains?: InputMaybe<Scalars['String']>;
  podMarketplace_not_contains_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_not_ends_with?: InputMaybe<Scalars['String']>;
  podMarketplace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_not_in?: InputMaybe<Array<Scalars['String']>>;
  podMarketplace_not_starts_with?: InputMaybe<Scalars['String']>;
  podMarketplace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  podMarketplace_starts_with?: InputMaybe<Scalars['String']>;
  podMarketplace_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pricePerPod?: InputMaybe<Scalars['Int']>;
  pricePerPod_gt?: InputMaybe<Scalars['Int']>;
  pricePerPod_gte?: InputMaybe<Scalars['Int']>;
  pricePerPod_in?: InputMaybe<Array<Scalars['Int']>>;
  pricePerPod_lt?: InputMaybe<Scalars['Int']>;
  pricePerPod_lte?: InputMaybe<Scalars['Int']>;
  pricePerPod_not?: InputMaybe<Scalars['Int']>;
  pricePerPod_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pricingFunction?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_contains?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pricingFunction_not?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_not_contains?: InputMaybe<Scalars['Bytes']>;
  pricingFunction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pricingType?: InputMaybe<Scalars['Int']>;
  pricingType_gt?: InputMaybe<Scalars['Int']>;
  pricingType_gte?: InputMaybe<Scalars['Int']>;
  pricingType_in?: InputMaybe<Array<Scalars['Int']>>;
  pricingType_lt?: InputMaybe<Scalars['Int']>;
  pricingType_lte?: InputMaybe<Scalars['Int']>;
  pricingType_not?: InputMaybe<Scalars['Int']>;
  pricingType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  status?: InputMaybe<MarketStatus>;
  status_in?: InputMaybe<Array<MarketStatus>>;
  status_not?: InputMaybe<MarketStatus>;
  status_not_in?: InputMaybe<Array<MarketStatus>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum PodOrder_OrderBy {
  BeanAmount = 'beanAmount',
  BeanAmountFilled = 'beanAmountFilled',
  CreatedAt = 'createdAt',
  Farmer = 'farmer',
  Fill = 'fill',
  HistoryId = 'historyID',
  Id = 'id',
  MaxPlaceInLine = 'maxPlaceInLine',
  MinFillAmount = 'minFillAmount',
  PodAmount = 'podAmount',
  PodAmountFilled = 'podAmountFilled',
  PodMarketplace = 'podMarketplace',
  PricePerPod = 'pricePerPod',
  PricingFunction = 'pricingFunction',
  PricingType = 'pricingType',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type PodTransfer = FieldEvent & {
  __typename?: 'PodTransfer';
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Address that sent the pods  */
  from: Scalars['String'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  podtransfer-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Index of the pods sent */
  index: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Total pods being sent */
  pods: Scalars['BigInt'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /**  Address that received the pods  */
  to: Scalars['String'];
};

export type PodTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['String']>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pods?: InputMaybe<Scalars['BigInt']>;
  pods_gt?: InputMaybe<Scalars['BigInt']>;
  pods_gte?: InputMaybe<Scalars['BigInt']>;
  pods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pods_lt?: InputMaybe<Scalars['BigInt']>;
  pods_lte?: InputMaybe<Scalars['BigInt']>;
  pods_not?: InputMaybe<Scalars['BigInt']>;
  pods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum PodTransfer_OrderBy {
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  From = 'from',
  Hash = 'hash',
  Id = 'id',
  Index = 'index',
  LogIndex = 'logIndex',
  Pods = 'pods',
  Protocol = 'protocol',
  To = 'to'
}

export type Pool = {
  __typename?: 'Pool';
  bean: Bean;
  dailySnapshot: Array<PoolDailySnapshot>;
  deltaBeans: Scalars['BigInt'];
  hourlySnapshot: Array<PoolHourlySnapshot>;
  id: Scalars['ID'];
  totalCrosses: Scalars['Int'];
  totalLiquidity: Scalars['BigInt'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  totalVolume: Scalars['BigInt'];
  totalVolumeUSD: Scalars['BigDecimal'];
  utilization: Scalars['BigDecimal'];
};


export type PoolDailySnapshotArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolDailySnapshot_Filter>;
};


export type PoolHourlySnapshotArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolHourlySnapshot_Filter>;
};

export type PoolDailySnapshot = {
  __typename?: 'PoolDailySnapshot';
  blockNumber: Scalars['BigInt'];
  dailyCrosses: Scalars['Int'];
  dailyLiquidity: Scalars['BigInt'];
  dailyLiquidityUSD: Scalars['BigDecimal'];
  dailyVolume: Scalars['BigInt'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  deltaBeans: Scalars['BigInt'];
  id: Scalars['ID'];
  pool: Pool;
  season: Scalars['Int'];
  timestamp: Scalars['BigInt'];
  totalCrosses: Scalars['Int'];
  totalLiquidity: Scalars['BigInt'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  totalVolume: Scalars['BigInt'];
  totalVolumeUSD: Scalars['BigDecimal'];
  utilization: Scalars['BigDecimal'];
};

export type PoolDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyCrosses?: InputMaybe<Scalars['Int']>;
  dailyCrosses_gt?: InputMaybe<Scalars['Int']>;
  dailyCrosses_gte?: InputMaybe<Scalars['Int']>;
  dailyCrosses_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyCrosses_lt?: InputMaybe<Scalars['Int']>;
  dailyCrosses_lte?: InputMaybe<Scalars['Int']>;
  dailyCrosses_not?: InputMaybe<Scalars['Int']>;
  dailyCrosses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyLiquidity?: InputMaybe<Scalars['BigInt']>;
  dailyLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  dailyLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  dailyLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  dailyLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  dailyLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  dailyLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume?: InputMaybe<Scalars['BigInt']>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_gt?: InputMaybe<Scalars['BigInt']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigInt']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume_lt?: InputMaybe<Scalars['BigInt']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigInt']>;
  dailyVolume_not?: InputMaybe<Scalars['BigInt']>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeans?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_gt?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_gte?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeans_lt?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_lte?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_not?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCrosses?: InputMaybe<Scalars['Int']>;
  totalCrosses_gt?: InputMaybe<Scalars['Int']>;
  totalCrosses_gte?: InputMaybe<Scalars['Int']>;
  totalCrosses_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCrosses_lt?: InputMaybe<Scalars['Int']>;
  totalCrosses_lte?: InputMaybe<Scalars['Int']>;
  totalCrosses_not?: InputMaybe<Scalars['Int']>;
  totalCrosses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalLiquidity?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  utilization?: InputMaybe<Scalars['BigDecimal']>;
  utilization_gt?: InputMaybe<Scalars['BigDecimal']>;
  utilization_gte?: InputMaybe<Scalars['BigDecimal']>;
  utilization_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  utilization_lt?: InputMaybe<Scalars['BigDecimal']>;
  utilization_lte?: InputMaybe<Scalars['BigDecimal']>;
  utilization_not?: InputMaybe<Scalars['BigDecimal']>;
  utilization_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum PoolDailySnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  DailyCrosses = 'dailyCrosses',
  DailyLiquidity = 'dailyLiquidity',
  DailyLiquidityUsd = 'dailyLiquidityUSD',
  DailyVolume = 'dailyVolume',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DeltaBeans = 'deltaBeans',
  Id = 'id',
  Pool = 'pool',
  Season = 'season',
  Timestamp = 'timestamp',
  TotalCrosses = 'totalCrosses',
  TotalLiquidity = 'totalLiquidity',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalVolume = 'totalVolume',
  TotalVolumeUsd = 'totalVolumeUSD',
  Utilization = 'utilization'
}

export type PoolHourlySnapshot = {
  __typename?: 'PoolHourlySnapshot';
  blockNumber: Scalars['BigInt'];
  deltaBeans: Scalars['BigInt'];
  hourlyCrosses: Scalars['Int'];
  hourlyLiquidity: Scalars['BigInt'];
  hourlyLiquidityUSD: Scalars['BigDecimal'];
  hourlyVolume: Scalars['BigInt'];
  hourlyVolumeUSD: Scalars['BigDecimal'];
  id: Scalars['ID'];
  pool: Pool;
  season: Scalars['Int'];
  timestamp: Scalars['BigInt'];
  totalCrosses: Scalars['Int'];
  totalLiquidity: Scalars['BigInt'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  totalVolume: Scalars['BigInt'];
  totalVolumeUSD: Scalars['BigDecimal'];
  utilization: Scalars['BigDecimal'];
};

export type PoolHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeans?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_gt?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_gte?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeans_lt?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_lte?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_not?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyCrosses?: InputMaybe<Scalars['Int']>;
  hourlyCrosses_gt?: InputMaybe<Scalars['Int']>;
  hourlyCrosses_gte?: InputMaybe<Scalars['Int']>;
  hourlyCrosses_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyCrosses_lt?: InputMaybe<Scalars['Int']>;
  hourlyCrosses_lte?: InputMaybe<Scalars['Int']>;
  hourlyCrosses_not?: InputMaybe<Scalars['Int']>;
  hourlyCrosses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyLiquidity?: InputMaybe<Scalars['BigInt']>;
  hourlyLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  hourlyLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  hourlyLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  hourlyLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  hourlyLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  hourlyLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyVolume?: InputMaybe<Scalars['BigInt']>;
  hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolume_gt?: InputMaybe<Scalars['BigInt']>;
  hourlyVolume_gte?: InputMaybe<Scalars['BigInt']>;
  hourlyVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyVolume_lt?: InputMaybe<Scalars['BigInt']>;
  hourlyVolume_lte?: InputMaybe<Scalars['BigInt']>;
  hourlyVolume_not?: InputMaybe<Scalars['BigInt']>;
  hourlyVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCrosses?: InputMaybe<Scalars['Int']>;
  totalCrosses_gt?: InputMaybe<Scalars['Int']>;
  totalCrosses_gte?: InputMaybe<Scalars['Int']>;
  totalCrosses_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCrosses_lt?: InputMaybe<Scalars['Int']>;
  totalCrosses_lte?: InputMaybe<Scalars['Int']>;
  totalCrosses_not?: InputMaybe<Scalars['Int']>;
  totalCrosses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalLiquidity?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  utilization?: InputMaybe<Scalars['BigDecimal']>;
  utilization_gt?: InputMaybe<Scalars['BigDecimal']>;
  utilization_gte?: InputMaybe<Scalars['BigDecimal']>;
  utilization_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  utilization_lt?: InputMaybe<Scalars['BigDecimal']>;
  utilization_lte?: InputMaybe<Scalars['BigDecimal']>;
  utilization_not?: InputMaybe<Scalars['BigDecimal']>;
  utilization_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum PoolHourlySnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  DeltaBeans = 'deltaBeans',
  HourlyCrosses = 'hourlyCrosses',
  HourlyLiquidity = 'hourlyLiquidity',
  HourlyLiquidityUsd = 'hourlyLiquidityUSD',
  HourlyVolume = 'hourlyVolume',
  HourlyVolumeUsd = 'hourlyVolumeUSD',
  Id = 'id',
  Pool = 'pool',
  Season = 'season',
  Timestamp = 'timestamp',
  TotalCrosses = 'totalCrosses',
  TotalLiquidity = 'totalLiquidity',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalVolume = 'totalVolume',
  TotalVolumeUsd = 'totalVolumeUSD',
  Utilization = 'utilization'
}

export type Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  bean?: InputMaybe<Scalars['String']>;
  bean_?: InputMaybe<Bean_Filter>;
  bean_contains?: InputMaybe<Scalars['String']>;
  bean_contains_nocase?: InputMaybe<Scalars['String']>;
  bean_ends_with?: InputMaybe<Scalars['String']>;
  bean_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bean_gt?: InputMaybe<Scalars['String']>;
  bean_gte?: InputMaybe<Scalars['String']>;
  bean_in?: InputMaybe<Array<Scalars['String']>>;
  bean_lt?: InputMaybe<Scalars['String']>;
  bean_lte?: InputMaybe<Scalars['String']>;
  bean_not?: InputMaybe<Scalars['String']>;
  bean_not_contains?: InputMaybe<Scalars['String']>;
  bean_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bean_not_ends_with?: InputMaybe<Scalars['String']>;
  bean_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bean_not_in?: InputMaybe<Array<Scalars['String']>>;
  bean_not_starts_with?: InputMaybe<Scalars['String']>;
  bean_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bean_starts_with?: InputMaybe<Scalars['String']>;
  bean_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dailySnapshot_?: InputMaybe<PoolDailySnapshot_Filter>;
  deltaBeans?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_gt?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_gte?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeans_lt?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_lte?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_not?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlySnapshot_?: InputMaybe<PoolHourlySnapshot_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalCrosses?: InputMaybe<Scalars['Int']>;
  totalCrosses_gt?: InputMaybe<Scalars['Int']>;
  totalCrosses_gte?: InputMaybe<Scalars['Int']>;
  totalCrosses_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCrosses_lt?: InputMaybe<Scalars['Int']>;
  totalCrosses_lte?: InputMaybe<Scalars['Int']>;
  totalCrosses_not?: InputMaybe<Scalars['Int']>;
  totalCrosses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalLiquidity?: InputMaybe<Scalars['BigInt']>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  utilization?: InputMaybe<Scalars['BigDecimal']>;
  utilization_gt?: InputMaybe<Scalars['BigDecimal']>;
  utilization_gte?: InputMaybe<Scalars['BigDecimal']>;
  utilization_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  utilization_lt?: InputMaybe<Scalars['BigDecimal']>;
  utilization_lte?: InputMaybe<Scalars['BigDecimal']>;
  utilization_not?: InputMaybe<Scalars['BigDecimal']>;
  utilization_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum Pool_OrderBy {
  Bean = 'bean',
  DailySnapshot = 'dailySnapshot',
  DeltaBeans = 'deltaBeans',
  HourlySnapshot = 'hourlySnapshot',
  Id = 'id',
  TotalCrosses = 'totalCrosses',
  TotalLiquidity = 'totalLiquidity',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalVolume = 'totalVolume',
  TotalVolumeUsd = 'totalVolumeUSD',
  Utilization = 'utilization'
}

export type Proposal = {
  __typename?: 'Proposal';
  app?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  choices: Array<Maybe<Scalars['String']>>;
  created: Scalars['Int'];
  discussion: Scalars['String'];
  end: Scalars['Int'];
  id: Scalars['String'];
  ipfs?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  network: Scalars['String'];
  plugins: Scalars['Any'];
  privacy?: Maybe<Scalars['String']>;
  quorum: Scalars['Float'];
  scores?: Maybe<Array<Maybe<Scalars['Float']>>>;
  scores_by_strategy?: Maybe<Scalars['Any']>;
  scores_state?: Maybe<Scalars['String']>;
  scores_total?: Maybe<Scalars['Float']>;
  scores_updated?: Maybe<Scalars['Int']>;
  snapshot?: Maybe<Scalars['String']>;
  space?: Maybe<Space>;
  start: Scalars['Int'];
  state?: Maybe<Scalars['String']>;
  strategies: Array<Maybe<Strategy>>;
  symbol: Scalars['String'];
  title: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  validation?: Maybe<Validation>;
  votes?: Maybe<Scalars['Int']>;
};

export type ProposalWhere = {
  author?: InputMaybe<Scalars['String']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created?: InputMaybe<Scalars['Int']>;
  created_gt?: InputMaybe<Scalars['Int']>;
  created_gte?: InputMaybe<Scalars['Int']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_lt?: InputMaybe<Scalars['Int']>;
  created_lte?: InputMaybe<Scalars['Int']>;
  end?: InputMaybe<Scalars['Int']>;
  end_gt?: InputMaybe<Scalars['Int']>;
  end_gte?: InputMaybe<Scalars['Int']>;
  end_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  end_lt?: InputMaybe<Scalars['Int']>;
  end_lte?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  network?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  scores_state?: InputMaybe<Scalars['String']>;
  scores_state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  space?: InputMaybe<Scalars['String']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  start?: InputMaybe<Scalars['Int']>;
  start_gt?: InputMaybe<Scalars['Int']>;
  start_gte?: InputMaybe<Scalars['Int']>;
  start_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  start_lt?: InputMaybe<Scalars['Int']>;
  start_lte?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  strategies_contains?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  addDeposit?: Maybe<AddDeposit>;
  addDeposits: Array<AddDeposit>;
  aliases?: Maybe<Array<Maybe<Alias>>>;
  bean?: Maybe<Bean>;
  beanDailySnapshot?: Maybe<BeanDailySnapshot>;
  beanDailySnapshots: Array<BeanDailySnapshot>;
  beanHourlySnapshot?: Maybe<BeanHourlySnapshot>;
  beanHourlySnapshots: Array<BeanHourlySnapshot>;
  beans: Array<Bean>;
  beanstalk?: Maybe<Beanstalk>;
  beanstalks: Array<Beanstalk>;
  chop?: Maybe<Chop>;
  chops: Array<Chop>;
  cross?: Maybe<Cross>;
  crosses: Array<Cross>;
  dewhitelistToken?: Maybe<DewhitelistToken>;
  dewhitelistTokens: Array<DewhitelistToken>;
  farmer?: Maybe<Farmer>;
  farmers: Array<Farmer>;
  fertilizer?: Maybe<Fertilizer>;
  fertilizerBalance?: Maybe<FertilizerBalance>;
  fertilizerBalances: Array<FertilizerBalance>;
  fertilizerToken?: Maybe<FertilizerToken>;
  fertilizerTokens: Array<FertilizerToken>;
  fertilizers: Array<Fertilizer>;
  field?: Maybe<Field>;
  fieldDailySnapshot?: Maybe<FieldDailySnapshot>;
  fieldDailySnapshots: Array<FieldDailySnapshot>;
  fieldEvent?: Maybe<FieldEvent>;
  fieldEvents: Array<FieldEvent>;
  fieldHourlySnapshot?: Maybe<FieldHourlySnapshot>;
  fieldHourlySnapshots: Array<FieldHourlySnapshot>;
  fields: Array<Field>;
  follows?: Maybe<Array<Maybe<Follow>>>;
  harvest?: Maybe<Harvest>;
  harvests: Array<Harvest>;
  incentive?: Maybe<Incentive>;
  incentives: Array<Incentive>;
  marketplaceEvent?: Maybe<MarketplaceEvent>;
  marketplaceEvents: Array<MarketplaceEvent>;
  messages?: Maybe<Array<Maybe<Message>>>;
  metapoolOracle?: Maybe<MetapoolOracle>;
  metapoolOracles: Array<MetapoolOracle>;
  networks?: Maybe<Array<Maybe<Item>>>;
  plot?: Maybe<Plot>;
  plots: Array<Plot>;
  plugins?: Maybe<Array<Maybe<Item>>>;
  podFill?: Maybe<PodFill>;
  podFills: Array<PodFill>;
  podListing?: Maybe<PodListing>;
  podListingCancelled?: Maybe<PodListingCancelled>;
  podListingCancelleds: Array<PodListingCancelled>;
  podListingCreated?: Maybe<PodListingCreated>;
  podListingCreateds: Array<PodListingCreated>;
  podListingFilled?: Maybe<PodListingFilled>;
  podListingFilleds: Array<PodListingFilled>;
  podListings: Array<PodListing>;
  podMarketplace?: Maybe<PodMarketplace>;
  podMarketplaceDailySnapshot?: Maybe<PodMarketplaceDailySnapshot>;
  podMarketplaceDailySnapshots: Array<PodMarketplaceDailySnapshot>;
  podMarketplaceHourlySnapshot?: Maybe<PodMarketplaceHourlySnapshot>;
  podMarketplaceHourlySnapshots: Array<PodMarketplaceHourlySnapshot>;
  podMarketplaces: Array<PodMarketplace>;
  podOrder?: Maybe<PodOrder>;
  podOrderCancelled?: Maybe<PodOrderCancelled>;
  podOrderCancelleds: Array<PodOrderCancelled>;
  podOrderCreated?: Maybe<PodOrderCreated>;
  podOrderCreateds: Array<PodOrderCreated>;
  podOrderFilled?: Maybe<PodOrderFilled>;
  podOrderFilleds: Array<PodOrderFilled>;
  podOrders: Array<PodOrder>;
  podTransfer?: Maybe<PodTransfer>;
  podTransfers: Array<PodTransfer>;
  pool?: Maybe<Pool>;
  poolDailySnapshot?: Maybe<PoolDailySnapshot>;
  poolDailySnapshots: Array<PoolDailySnapshot>;
  poolHourlySnapshot?: Maybe<PoolHourlySnapshot>;
  poolHourlySnapshots: Array<PoolHourlySnapshot>;
  pools: Array<Pool>;
  proposal?: Maybe<Proposal>;
  proposals?: Maybe<Array<Maybe<Proposal>>>;
  removeDeposit?: Maybe<RemoveDeposit>;
  removeDeposits: Array<RemoveDeposit>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  season?: Maybe<Season>;
  seasons: Array<Season>;
  seedChange?: Maybe<SeedChange>;
  seedChanges: Array<SeedChange>;
  silo?: Maybe<Silo>;
  siloAsset?: Maybe<SiloAsset>;
  siloAssetDailySnapshot?: Maybe<SiloAssetDailySnapshot>;
  siloAssetDailySnapshots: Array<SiloAssetDailySnapshot>;
  siloAssetHourlySnapshot?: Maybe<SiloAssetHourlySnapshot>;
  siloAssetHourlySnapshots: Array<SiloAssetHourlySnapshot>;
  siloAssets: Array<SiloAsset>;
  siloDailySnapshot?: Maybe<SiloDailySnapshot>;
  siloDailySnapshots: Array<SiloDailySnapshot>;
  siloDeposit?: Maybe<SiloDeposit>;
  siloDeposits: Array<SiloDeposit>;
  siloEvent?: Maybe<SiloEvent>;
  siloEvents: Array<SiloEvent>;
  siloHourlySnapshot?: Maybe<SiloHourlySnapshot>;
  siloHourlySnapshots: Array<SiloHourlySnapshot>;
  siloWithdraw?: Maybe<SiloWithdraw>;
  siloWithdraws: Array<SiloWithdraw>;
  siloYield?: Maybe<SiloYield>;
  siloYields: Array<SiloYield>;
  silos: Array<Silo>;
  skins?: Maybe<Array<Maybe<Item>>>;
  space?: Maybe<Space>;
  spaces?: Maybe<Array<Maybe<Space>>>;
  stalkChange?: Maybe<StalkChange>;
  stalkChanges: Array<StalkChange>;
  strategies?: Maybe<Array<Maybe<StrategyItem>>>;
  strategy?: Maybe<StrategyItem>;
  subscriptions?: Maybe<Array<Maybe<Subscription>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  validations?: Maybe<Array<Maybe<Item>>>;
  vote?: Maybe<Vote>;
  votes?: Maybe<Array<Maybe<Vote>>>;
  vp?: Maybe<Vp>;
  whitelistToken?: Maybe<WhitelistToken>;
  whitelistTokens: Array<WhitelistToken>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAddDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddDeposit_Filter>;
};


export type QueryAliasesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AliasWhere>;
};


export type QueryBeanArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBeanDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBeanDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeanDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeanDailySnapshot_Filter>;
};


export type QueryBeanHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBeanHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeanHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeanHourlySnapshot_Filter>;
};


export type QueryBeansArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bean_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bean_Filter>;
};


export type QueryBeanstalkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBeanstalksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Beanstalk_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Beanstalk_Filter>;
};


export type QueryChopArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChopsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Chop_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Chop_Filter>;
};


export type QueryCrossArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCrossesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Cross_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Cross_Filter>;
};


export type QueryDewhitelistTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDewhitelistTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DewhitelistToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DewhitelistToken_Filter>;
};


export type QueryFarmerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFarmersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Farmer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Farmer_Filter>;
};


export type QueryFertilizerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFertilizerBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFertilizerBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FertilizerBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FertilizerBalance_Filter>;
};


export type QueryFertilizerTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFertilizerTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FertilizerToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FertilizerToken_Filter>;
};


export type QueryFertilizersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fertilizer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Fertilizer_Filter>;
};


export type QueryFieldArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFieldDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFieldDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FieldDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FieldDailySnapshot_Filter>;
};


export type QueryFieldEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFieldEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FieldEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FieldEvent_Filter>;
};


export type QueryFieldHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFieldHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FieldHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FieldHourlySnapshot_Filter>;
};


export type QueryFieldsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Field_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Field_Filter>;
};


export type QueryFollowsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FollowWhere>;
};


export type QueryHarvestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHarvestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Harvest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Harvest_Filter>;
};


export type QueryIncentiveArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIncentivesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Incentive_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Incentive_Filter>;
};


export type QueryMarketplaceEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketplaceEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketplaceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketplaceEvent_Filter>;
};


export type QueryMessagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhere>;
};


export type QueryMetapoolOracleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMetapoolOraclesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetapoolOracle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetapoolOracle_Filter>;
};


export type QueryPlotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPlotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Plot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Plot_Filter>;
};


export type QueryPodFillArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodFillsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodFill_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodFill_Filter>;
};


export type QueryPodListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodListingCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodListingCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodListingCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodListingCancelled_Filter>;
};


export type QueryPodListingCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodListingCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodListingCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodListingCreated_Filter>;
};


export type QueryPodListingFilledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodListingFilledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodListingFilled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodListingFilled_Filter>;
};


export type QueryPodListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodListing_Filter>;
};


export type QueryPodMarketplaceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodMarketplaceDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodMarketplaceDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodMarketplaceDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodMarketplaceDailySnapshot_Filter>;
};


export type QueryPodMarketplaceHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodMarketplaceHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodMarketplaceHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodMarketplaceHourlySnapshot_Filter>;
};


export type QueryPodMarketplacesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodMarketplace_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodMarketplace_Filter>;
};


export type QueryPodOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodOrderCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodOrderCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodOrderCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodOrderCancelled_Filter>;
};


export type QueryPodOrderCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodOrderCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodOrderCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodOrderCreated_Filter>;
};


export type QueryPodOrderFilledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodOrderFilledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodOrderFilled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodOrderFilled_Filter>;
};


export type QueryPodOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodOrder_Filter>;
};


export type QueryPodTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPodTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodTransfer_Filter>;
};


export type QueryPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolDailySnapshot_Filter>;
};


export type QueryPoolHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHourlySnapshot_Filter>;
};


export type QueryPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type QueryProposalArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryProposalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProposalWhere>;
};


export type QueryRemoveDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRemoveDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoveDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveDeposit_Filter>;
};


export type QueryRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
};


export type QuerySeasonArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySeasonsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Season_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Season_Filter>;
};


export type QuerySeedChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySeedChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SeedChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SeedChange_Filter>;
};


export type QuerySiloArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySiloAssetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySiloAssetDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySiloAssetDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloAssetDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloAssetDailySnapshot_Filter>;
};


export type QuerySiloAssetHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySiloAssetHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloAssetHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloAssetHourlySnapshot_Filter>;
};


export type QuerySiloAssetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloAsset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloAsset_Filter>;
};


export type QuerySiloDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySiloDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloDailySnapshot_Filter>;
};


export type QuerySiloDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySiloDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloDeposit_Filter>;
};


export type QuerySiloEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySiloEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloEvent_Filter>;
};


export type QuerySiloHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySiloHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloHourlySnapshot_Filter>;
};


export type QuerySiloWithdrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySiloWithdrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloWithdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloWithdraw_Filter>;
};


export type QuerySiloYieldArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySiloYieldsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloYield_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloYield_Filter>;
};


export type QuerySilosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Silo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Silo_Filter>;
};


export type QuerySpaceArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySpacesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpaceWhere>;
};


export type QueryStalkChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStalkChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StalkChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StalkChange_Filter>;
};


export type QueryStrategyArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhere>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsersWhere>;
};


export type QueryVoteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhere>;
};


export type QueryVpArgs = {
  proposal?: InputMaybe<Scalars['String']>;
  space: Scalars['String'];
  voter: Scalars['String'];
};


export type QueryWhitelistTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWhitelistTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WhitelistToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WhitelistToken_Filter>;
};

export type RemoveDeposit = SiloEvent & {
  __typename?: 'RemoveDeposit';
  /**  Account removing deposit */
  account: Scalars['String'];
  /**  Amount of token removed  */
  amount: Scalars['BigInt'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /** removeDeposit-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /**  Season of deposit removed  */
  season: Scalars['Int'];
  /**  Token removed */
  token: Scalars['String'];
};

export type RemoveDeposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum RemoveDeposit_OrderBy {
  Account = 'account',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol',
  Season = 'season',
  Token = 'token'
}

export type Reward = SiloEvent & {
  __typename?: 'Reward';
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /** reward-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /**  Season of reward  */
  season: Scalars['Int'];
  /**  Amount minted to fertilizer */
  toFertilizer: Scalars['BigInt'];
  /**  Amount minted to pod line */
  toField: Scalars['BigInt'];
  /**  Amount minted to silo */
  toSilo: Scalars['BigInt'];
};

export type Reward_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  toFertilizer?: InputMaybe<Scalars['BigInt']>;
  toFertilizer_gt?: InputMaybe<Scalars['BigInt']>;
  toFertilizer_gte?: InputMaybe<Scalars['BigInt']>;
  toFertilizer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  toFertilizer_lt?: InputMaybe<Scalars['BigInt']>;
  toFertilizer_lte?: InputMaybe<Scalars['BigInt']>;
  toFertilizer_not?: InputMaybe<Scalars['BigInt']>;
  toFertilizer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  toField?: InputMaybe<Scalars['BigInt']>;
  toField_gt?: InputMaybe<Scalars['BigInt']>;
  toField_gte?: InputMaybe<Scalars['BigInt']>;
  toField_in?: InputMaybe<Array<Scalars['BigInt']>>;
  toField_lt?: InputMaybe<Scalars['BigInt']>;
  toField_lte?: InputMaybe<Scalars['BigInt']>;
  toField_not?: InputMaybe<Scalars['BigInt']>;
  toField_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  toSilo?: InputMaybe<Scalars['BigInt']>;
  toSilo_gt?: InputMaybe<Scalars['BigInt']>;
  toSilo_gte?: InputMaybe<Scalars['BigInt']>;
  toSilo_in?: InputMaybe<Array<Scalars['BigInt']>>;
  toSilo_lt?: InputMaybe<Scalars['BigInt']>;
  toSilo_lte?: InputMaybe<Scalars['BigInt']>;
  toSilo_not?: InputMaybe<Scalars['BigInt']>;
  toSilo_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Reward_OrderBy {
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol',
  Season = 'season',
  ToFertilizer = 'toFertilizer',
  ToField = 'toField',
  ToSilo = 'toSilo'
}

export type Season = {
  __typename?: 'Season';
  /**  Total Bean supply  */
  beans: Scalars['BigInt'];
  /**  Beanstalk Contract Address  */
  beanstalk: Beanstalk;
  /**  Block timestamp when sunrise was called  */
  createdAt: Scalars['BigInt'];
  /**  Time weighted deltaB  */
  deltaB: Scalars['BigInt'];
  /**  Change in Bean supply  */
  deltaBeans: Scalars['BigInt'];
  /**  New harvestable index for the season  */
  harvestableIndex: Scalars['BigInt'];
  /**  Season Number */
  id: Scalars['ID'];
  /**  Amount of Beans paid to sunrise caller  */
  incentiveBeans: Scalars['BigInt'];
  /**  Bean Market Cap  */
  marketCap: Scalars['BigDecimal'];
  /**  Price of BEAN during sunrise  */
  price: Scalars['BigDecimal'];
  /**  Amount of Beans minted during sunrise  */
  rewardBeans: Scalars['BigInt'];
  /**  Season number in Int form for sorting  */
  season: Scalars['Int'];
};

export type Season_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  beans?: InputMaybe<Scalars['BigInt']>;
  beans_gt?: InputMaybe<Scalars['BigInt']>;
  beans_gte?: InputMaybe<Scalars['BigInt']>;
  beans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beans_lt?: InputMaybe<Scalars['BigInt']>;
  beans_lte?: InputMaybe<Scalars['BigInt']>;
  beans_not?: InputMaybe<Scalars['BigInt']>;
  beans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanstalk?: InputMaybe<Scalars['String']>;
  beanstalk_?: InputMaybe<Beanstalk_Filter>;
  beanstalk_contains?: InputMaybe<Scalars['String']>;
  beanstalk_contains_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_ends_with?: InputMaybe<Scalars['String']>;
  beanstalk_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_gt?: InputMaybe<Scalars['String']>;
  beanstalk_gte?: InputMaybe<Scalars['String']>;
  beanstalk_in?: InputMaybe<Array<Scalars['String']>>;
  beanstalk_lt?: InputMaybe<Scalars['String']>;
  beanstalk_lte?: InputMaybe<Scalars['String']>;
  beanstalk_not?: InputMaybe<Scalars['String']>;
  beanstalk_not_contains?: InputMaybe<Scalars['String']>;
  beanstalk_not_contains_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_not_ends_with?: InputMaybe<Scalars['String']>;
  beanstalk_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_not_in?: InputMaybe<Array<Scalars['String']>>;
  beanstalk_not_starts_with?: InputMaybe<Scalars['String']>;
  beanstalk_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_starts_with?: InputMaybe<Scalars['String']>;
  beanstalk_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaB?: InputMaybe<Scalars['BigInt']>;
  deltaB_gt?: InputMaybe<Scalars['BigInt']>;
  deltaB_gte?: InputMaybe<Scalars['BigInt']>;
  deltaB_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaB_lt?: InputMaybe<Scalars['BigInt']>;
  deltaB_lte?: InputMaybe<Scalars['BigInt']>;
  deltaB_not?: InputMaybe<Scalars['BigInt']>;
  deltaB_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeans?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_gt?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_gte?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeans_lt?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_lte?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_not?: InputMaybe<Scalars['BigInt']>;
  deltaBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestableIndex?: InputMaybe<Scalars['BigInt']>;
  harvestableIndex_gt?: InputMaybe<Scalars['BigInt']>;
  harvestableIndex_gte?: InputMaybe<Scalars['BigInt']>;
  harvestableIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestableIndex_lt?: InputMaybe<Scalars['BigInt']>;
  harvestableIndex_lte?: InputMaybe<Scalars['BigInt']>;
  harvestableIndex_not?: InputMaybe<Scalars['BigInt']>;
  harvestableIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  incentiveBeans?: InputMaybe<Scalars['BigInt']>;
  incentiveBeans_gt?: InputMaybe<Scalars['BigInt']>;
  incentiveBeans_gte?: InputMaybe<Scalars['BigInt']>;
  incentiveBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  incentiveBeans_lt?: InputMaybe<Scalars['BigInt']>;
  incentiveBeans_lte?: InputMaybe<Scalars['BigInt']>;
  incentiveBeans_not?: InputMaybe<Scalars['BigInt']>;
  incentiveBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marketCap?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_gt?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_gte?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  marketCap_lt?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_lte?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_not?: InputMaybe<Scalars['BigDecimal']>;
  marketCap_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price?: InputMaybe<Scalars['BigDecimal']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price_lt?: InputMaybe<Scalars['BigDecimal']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']>;
  price_not?: InputMaybe<Scalars['BigDecimal']>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardBeans?: InputMaybe<Scalars['BigInt']>;
  rewardBeans_gt?: InputMaybe<Scalars['BigInt']>;
  rewardBeans_gte?: InputMaybe<Scalars['BigInt']>;
  rewardBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardBeans_lt?: InputMaybe<Scalars['BigInt']>;
  rewardBeans_lte?: InputMaybe<Scalars['BigInt']>;
  rewardBeans_not?: InputMaybe<Scalars['BigInt']>;
  rewardBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Season_OrderBy {
  Beans = 'beans',
  Beanstalk = 'beanstalk',
  CreatedAt = 'createdAt',
  DeltaB = 'deltaB',
  DeltaBeans = 'deltaBeans',
  HarvestableIndex = 'harvestableIndex',
  Id = 'id',
  IncentiveBeans = 'incentiveBeans',
  MarketCap = 'marketCap',
  Price = 'price',
  RewardBeans = 'rewardBeans',
  Season = 'season'
}

export type SeedChange = SiloEvent & {
  __typename?: 'SeedChange';
  /**  Account removing deposit */
  account: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Token removed */
  delta: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /** seedChange-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /**  Season when the change happened  */
  season: Scalars['Int'];
};

export type SeedChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delta?: InputMaybe<Scalars['BigInt']>;
  delta_gt?: InputMaybe<Scalars['BigInt']>;
  delta_gte?: InputMaybe<Scalars['BigInt']>;
  delta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delta_lt?: InputMaybe<Scalars['BigInt']>;
  delta_lte?: InputMaybe<Scalars['BigInt']>;
  delta_not?: InputMaybe<Scalars['BigInt']>;
  delta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum SeedChange_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Delta = 'delta',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol',
  Season = 'season'
}

export type Silo = {
  __typename?: 'Silo';
  /** Current number of active farmers deposited in the silo */
  activeFarmers: Scalars['Int'];
  /** Link to all silo assets currently associated with this silo */
  assets: Array<SiloAsset>;
  /** Cumulative total for bean mints sent to the silo */
  beanMints: Scalars['BigInt'];
  /** Beanstalk diamond address */
  beanstalk: Beanstalk;
  /** Link to daily snapshot data */
  dailySnapshots: Array<SiloDailySnapshot>;
  /** Current BDV of all deposited assets */
  depositedBDV: Scalars['BigInt'];
  /** Farmer address if applicable */
  farmer?: Maybe<Farmer>;
  /** Link to hourly snapshot data */
  hourlySnapshots: Array<SiloHourlySnapshot>;
  /** Address for the farmer or Beanstalk */
  id: Scalars['ID'];
  /** Current plantable stalk for bean seigniorage not yet claimed */
  plantableStalk: Scalars['BigInt'];
  /** Current roots balance */
  roots: Scalars['BigInt'];
  /** Current seeds balance */
  seeds: Scalars['BigInt'];
  /** Current stalk balance */
  stalk: Scalars['BigInt'];
  /** Tokens whitelisted for deposit within the silo */
  whitelistedTokens: Array<Scalars['String']>;
};


export type SiloAssetsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloAsset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiloAsset_Filter>;
};


export type SiloDailySnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiloDailySnapshot_Filter>;
};


export type SiloHourlySnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiloHourlySnapshot_Filter>;
};

export type SiloAsset = {
  __typename?: 'SiloAsset';
  /** Link to daily snapshot data */
  dailySnapshots: Array<SiloAssetDailySnapshot>;
  /** Current Token amount of deposits */
  depositedAmount: Scalars['BigInt'];
  /** Current BDV of deposits */
  depositedBDV: Scalars['BigInt'];
  /** Current internal (farm) balance of the asset */
  farmAmount: Scalars['BigInt'];
  /** Link to hourly snapshot data */
  hourlySnapshots: Array<SiloAssetHourlySnapshot>;
  /** Silo ID - Asset Token Address */
  id: Scalars['ID'];
  /** Silo for this asset */
  silo: Silo;
  /** Token address for this asset */
  token: Scalars['String'];
  /** Current Token amount of silo withdrawals */
  withdrawnAmount: Scalars['BigInt'];
};


export type SiloAssetDailySnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloAssetDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiloAssetDailySnapshot_Filter>;
};


export type SiloAssetHourlySnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloAssetHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiloAssetHourlySnapshot_Filter>;
};

export type SiloAssetDailySnapshot = {
  __typename?: 'SiloAssetDailySnapshot';
  /** Timestamp of initial snapshot creation */
  createdAt: Scalars['BigInt'];
  /** Point in time delta Token amount of deposits */
  deltaDepositedAmount: Scalars['BigInt'];
  /** Point in time delta BDV of deposits */
  deltaDepositedBDV: Scalars['BigInt'];
  /** Point in time delta internal (farm) balance of the asset */
  deltaFarmAmount: Scalars['BigInt'];
  /** Point in time delta Token amount of silo withdrawals */
  deltaWithdrawnAmount: Scalars['BigInt'];
  /** Point in time current Token amount of deposits */
  depositedAmount: Scalars['BigInt'];
  /** Point in time current BDV of deposits */
  depositedBDV: Scalars['BigInt'];
  /** Point in time current internal (farm) balance of the asset */
  farmAmount: Scalars['BigInt'];
  /** Silo Asset ID - Unix Timestamp */
  id: Scalars['ID'];
  /** Last season for the snapshot */
  season: Scalars['Int'];
  /** Silo asset associated with this snapshot */
  siloAsset: SiloAsset;
  /** Timestamp of last entity update */
  updatedAt: Scalars['BigInt'];
  /** Point in time current Token amount of silo withdrawals */
  withdrawnAmount: Scalars['BigInt'];
};

export type SiloAssetDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaDepositedAmount?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaDepositedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedAmount_not?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaDepositedBDV?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaFarmAmount?: InputMaybe<Scalars['BigInt']>;
  deltaFarmAmount_gt?: InputMaybe<Scalars['BigInt']>;
  deltaFarmAmount_gte?: InputMaybe<Scalars['BigInt']>;
  deltaFarmAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaFarmAmount_lt?: InputMaybe<Scalars['BigInt']>;
  deltaFarmAmount_lte?: InputMaybe<Scalars['BigInt']>;
  deltaFarmAmount_not?: InputMaybe<Scalars['BigInt']>;
  deltaFarmAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaWithdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  deltaWithdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  deltaWithdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  deltaWithdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaWithdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  deltaWithdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  deltaWithdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  deltaWithdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedAmount?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_not?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedBDV?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_not?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmAmount?: InputMaybe<Scalars['BigInt']>;
  farmAmount_gt?: InputMaybe<Scalars['BigInt']>;
  farmAmount_gte?: InputMaybe<Scalars['BigInt']>;
  farmAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmAmount_lt?: InputMaybe<Scalars['BigInt']>;
  farmAmount_lte?: InputMaybe<Scalars['BigInt']>;
  farmAmount_not?: InputMaybe<Scalars['BigInt']>;
  farmAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  siloAsset?: InputMaybe<Scalars['String']>;
  siloAsset_?: InputMaybe<SiloAsset_Filter>;
  siloAsset_contains?: InputMaybe<Scalars['String']>;
  siloAsset_contains_nocase?: InputMaybe<Scalars['String']>;
  siloAsset_ends_with?: InputMaybe<Scalars['String']>;
  siloAsset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  siloAsset_gt?: InputMaybe<Scalars['String']>;
  siloAsset_gte?: InputMaybe<Scalars['String']>;
  siloAsset_in?: InputMaybe<Array<Scalars['String']>>;
  siloAsset_lt?: InputMaybe<Scalars['String']>;
  siloAsset_lte?: InputMaybe<Scalars['String']>;
  siloAsset_not?: InputMaybe<Scalars['String']>;
  siloAsset_not_contains?: InputMaybe<Scalars['String']>;
  siloAsset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  siloAsset_not_ends_with?: InputMaybe<Scalars['String']>;
  siloAsset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  siloAsset_not_in?: InputMaybe<Array<Scalars['String']>>;
  siloAsset_not_starts_with?: InputMaybe<Scalars['String']>;
  siloAsset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  siloAsset_starts_with?: InputMaybe<Scalars['String']>;
  siloAsset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum SiloAssetDailySnapshot_OrderBy {
  CreatedAt = 'createdAt',
  DeltaDepositedAmount = 'deltaDepositedAmount',
  DeltaDepositedBdv = 'deltaDepositedBDV',
  DeltaFarmAmount = 'deltaFarmAmount',
  DeltaWithdrawnAmount = 'deltaWithdrawnAmount',
  DepositedAmount = 'depositedAmount',
  DepositedBdv = 'depositedBDV',
  FarmAmount = 'farmAmount',
  Id = 'id',
  Season = 'season',
  SiloAsset = 'siloAsset',
  UpdatedAt = 'updatedAt',
  WithdrawnAmount = 'withdrawnAmount'
}

export type SiloAssetHourlySnapshot = {
  __typename?: 'SiloAssetHourlySnapshot';
  /** Timestamp of initial snapshot creation */
  createdAt: Scalars['BigInt'];
  /** Point in time delta Token amount of deposits */
  deltaDepositedAmount: Scalars['BigInt'];
  /** Point in time delta BDV of deposits */
  deltaDepositedBDV: Scalars['BigInt'];
  /** Point in time delta internal (farm) balance of the asset */
  deltaFarmAmount: Scalars['BigInt'];
  /** Point in time delta Token amount of silo withdrawals */
  deltaWithdrawnAmount: Scalars['BigInt'];
  /** Point in time current Token amount of deposits */
  depositedAmount: Scalars['BigInt'];
  /** Point in time current BDV of deposits */
  depositedBDV: Scalars['BigInt'];
  /** Point in time current internal (farm) balance of the asset */
  farmAmount: Scalars['BigInt'];
  /** Silo Asset ID - Unix Timestamp */
  id: Scalars['ID'];
  /** Season for the snapshot */
  season: Scalars['Int'];
  /** Silo asset associated with this snapshot */
  siloAsset: SiloAsset;
  /** Timestamp of last entity update */
  updatedAt: Scalars['BigInt'];
  /** Point in time current Token amount of silo withdrawals */
  withdrawnAmount: Scalars['BigInt'];
};

export type SiloAssetHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaDepositedAmount?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaDepositedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedAmount_not?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaDepositedBDV?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaFarmAmount?: InputMaybe<Scalars['BigInt']>;
  deltaFarmAmount_gt?: InputMaybe<Scalars['BigInt']>;
  deltaFarmAmount_gte?: InputMaybe<Scalars['BigInt']>;
  deltaFarmAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaFarmAmount_lt?: InputMaybe<Scalars['BigInt']>;
  deltaFarmAmount_lte?: InputMaybe<Scalars['BigInt']>;
  deltaFarmAmount_not?: InputMaybe<Scalars['BigInt']>;
  deltaFarmAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaWithdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  deltaWithdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  deltaWithdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  deltaWithdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaWithdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  deltaWithdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  deltaWithdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  deltaWithdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedAmount?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_not?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedBDV?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_not?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmAmount?: InputMaybe<Scalars['BigInt']>;
  farmAmount_gt?: InputMaybe<Scalars['BigInt']>;
  farmAmount_gte?: InputMaybe<Scalars['BigInt']>;
  farmAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmAmount_lt?: InputMaybe<Scalars['BigInt']>;
  farmAmount_lte?: InputMaybe<Scalars['BigInt']>;
  farmAmount_not?: InputMaybe<Scalars['BigInt']>;
  farmAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  siloAsset?: InputMaybe<Scalars['String']>;
  siloAsset_?: InputMaybe<SiloAsset_Filter>;
  siloAsset_contains?: InputMaybe<Scalars['String']>;
  siloAsset_contains_nocase?: InputMaybe<Scalars['String']>;
  siloAsset_ends_with?: InputMaybe<Scalars['String']>;
  siloAsset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  siloAsset_gt?: InputMaybe<Scalars['String']>;
  siloAsset_gte?: InputMaybe<Scalars['String']>;
  siloAsset_in?: InputMaybe<Array<Scalars['String']>>;
  siloAsset_lt?: InputMaybe<Scalars['String']>;
  siloAsset_lte?: InputMaybe<Scalars['String']>;
  siloAsset_not?: InputMaybe<Scalars['String']>;
  siloAsset_not_contains?: InputMaybe<Scalars['String']>;
  siloAsset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  siloAsset_not_ends_with?: InputMaybe<Scalars['String']>;
  siloAsset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  siloAsset_not_in?: InputMaybe<Array<Scalars['String']>>;
  siloAsset_not_starts_with?: InputMaybe<Scalars['String']>;
  siloAsset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  siloAsset_starts_with?: InputMaybe<Scalars['String']>;
  siloAsset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum SiloAssetHourlySnapshot_OrderBy {
  CreatedAt = 'createdAt',
  DeltaDepositedAmount = 'deltaDepositedAmount',
  DeltaDepositedBdv = 'deltaDepositedBDV',
  DeltaFarmAmount = 'deltaFarmAmount',
  DeltaWithdrawnAmount = 'deltaWithdrawnAmount',
  DepositedAmount = 'depositedAmount',
  DepositedBdv = 'depositedBDV',
  FarmAmount = 'farmAmount',
  Id = 'id',
  Season = 'season',
  SiloAsset = 'siloAsset',
  UpdatedAt = 'updatedAt',
  WithdrawnAmount = 'withdrawnAmount'
}

export type SiloAsset_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  dailySnapshots_?: InputMaybe<SiloAssetDailySnapshot_Filter>;
  depositedAmount?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_not?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedBDV?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_not?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmAmount?: InputMaybe<Scalars['BigInt']>;
  farmAmount_gt?: InputMaybe<Scalars['BigInt']>;
  farmAmount_gte?: InputMaybe<Scalars['BigInt']>;
  farmAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmAmount_lt?: InputMaybe<Scalars['BigInt']>;
  farmAmount_lte?: InputMaybe<Scalars['BigInt']>;
  farmAmount_not?: InputMaybe<Scalars['BigInt']>;
  farmAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlySnapshots_?: InputMaybe<SiloAssetHourlySnapshot_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  silo?: InputMaybe<Scalars['String']>;
  silo_?: InputMaybe<Silo_Filter>;
  silo_contains?: InputMaybe<Scalars['String']>;
  silo_contains_nocase?: InputMaybe<Scalars['String']>;
  silo_ends_with?: InputMaybe<Scalars['String']>;
  silo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  silo_gt?: InputMaybe<Scalars['String']>;
  silo_gte?: InputMaybe<Scalars['String']>;
  silo_in?: InputMaybe<Array<Scalars['String']>>;
  silo_lt?: InputMaybe<Scalars['String']>;
  silo_lte?: InputMaybe<Scalars['String']>;
  silo_not?: InputMaybe<Scalars['String']>;
  silo_not_contains?: InputMaybe<Scalars['String']>;
  silo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  silo_not_ends_with?: InputMaybe<Scalars['String']>;
  silo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  silo_not_in?: InputMaybe<Array<Scalars['String']>>;
  silo_not_starts_with?: InputMaybe<Scalars['String']>;
  silo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  silo_starts_with?: InputMaybe<Scalars['String']>;
  silo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum SiloAsset_OrderBy {
  DailySnapshots = 'dailySnapshots',
  DepositedAmount = 'depositedAmount',
  DepositedBdv = 'depositedBDV',
  FarmAmount = 'farmAmount',
  HourlySnapshots = 'hourlySnapshots',
  Id = 'id',
  Silo = 'silo',
  Token = 'token',
  WithdrawnAmount = 'withdrawnAmount'
}

export type SiloDailySnapshot = {
  __typename?: 'SiloDailySnapshot';
  /** Point in time current number of active farmers deposited in the silo */
  activeFarmers: Scalars['Int'];
  /** Point in time cumulative total for bean mints sent to the silo */
  beanMints: Scalars['BigInt'];
  /** Timestamp of initial snapshot creation */
  createdAt: Scalars['BigInt'];
  /** Point in time delta number of active farmers deposited in the silo */
  deltaActiveFarmers: Scalars['Int'];
  /** Point in time delta total for bean mints sent to the silo */
  deltaBeanMints: Scalars['BigInt'];
  /** Point in time delta BDV of all deposited assets */
  deltaDepositedBDV: Scalars['BigInt'];
  /** Point in time current plantable stalk for bean seigniorage not yet claimed */
  deltaPlantableStalk: Scalars['BigInt'];
  /** Point in time delta roots balance */
  deltaRoots: Scalars['BigInt'];
  /** Point in time delta seeds balance */
  deltaSeeds: Scalars['BigInt'];
  /** Point in time delta stalk balance */
  deltaStalk: Scalars['BigInt'];
  /** Point in time current BDV of all deposited assets */
  depositedBDV: Scalars['BigInt'];
  /** ID of silo-Unix Hour Timestamp */
  id: Scalars['ID'];
  /** Point in time current plantable stalk for bean seigniorage not yet claimed */
  plantableStalk: Scalars['BigInt'];
  /** Point in time current roots balance */
  roots: Scalars['BigInt'];
  /** Last season for the snapshot */
  season: Scalars['Int'];
  /** Point in time current seeds balance */
  seeds: Scalars['BigInt'];
  /** Silo associated with the snapshot */
  silo: Silo;
  /** Point in time current stalk balance */
  stalk: Scalars['BigInt'];
  /** Timestamp of last entity update */
  updatedAt: Scalars['BigInt'];
};

export type SiloDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeFarmers?: InputMaybe<Scalars['Int']>;
  activeFarmers_gt?: InputMaybe<Scalars['Int']>;
  activeFarmers_gte?: InputMaybe<Scalars['Int']>;
  activeFarmers_in?: InputMaybe<Array<Scalars['Int']>>;
  activeFarmers_lt?: InputMaybe<Scalars['Int']>;
  activeFarmers_lte?: InputMaybe<Scalars['Int']>;
  activeFarmers_not?: InputMaybe<Scalars['Int']>;
  activeFarmers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  beanMints?: InputMaybe<Scalars['BigInt']>;
  beanMints_gt?: InputMaybe<Scalars['BigInt']>;
  beanMints_gte?: InputMaybe<Scalars['BigInt']>;
  beanMints_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanMints_lt?: InputMaybe<Scalars['BigInt']>;
  beanMints_lte?: InputMaybe<Scalars['BigInt']>;
  beanMints_not?: InputMaybe<Scalars['BigInt']>;
  beanMints_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaActiveFarmers?: InputMaybe<Scalars['Int']>;
  deltaActiveFarmers_gt?: InputMaybe<Scalars['Int']>;
  deltaActiveFarmers_gte?: InputMaybe<Scalars['Int']>;
  deltaActiveFarmers_in?: InputMaybe<Array<Scalars['Int']>>;
  deltaActiveFarmers_lt?: InputMaybe<Scalars['Int']>;
  deltaActiveFarmers_lte?: InputMaybe<Scalars['Int']>;
  deltaActiveFarmers_not?: InputMaybe<Scalars['Int']>;
  deltaActiveFarmers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deltaBeanMints?: InputMaybe<Scalars['BigInt']>;
  deltaBeanMints_gt?: InputMaybe<Scalars['BigInt']>;
  deltaBeanMints_gte?: InputMaybe<Scalars['BigInt']>;
  deltaBeanMints_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeanMints_lt?: InputMaybe<Scalars['BigInt']>;
  deltaBeanMints_lte?: InputMaybe<Scalars['BigInt']>;
  deltaBeanMints_not?: InputMaybe<Scalars['BigInt']>;
  deltaBeanMints_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaDepositedBDV?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaPlantableStalk?: InputMaybe<Scalars['BigInt']>;
  deltaPlantableStalk_gt?: InputMaybe<Scalars['BigInt']>;
  deltaPlantableStalk_gte?: InputMaybe<Scalars['BigInt']>;
  deltaPlantableStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaPlantableStalk_lt?: InputMaybe<Scalars['BigInt']>;
  deltaPlantableStalk_lte?: InputMaybe<Scalars['BigInt']>;
  deltaPlantableStalk_not?: InputMaybe<Scalars['BigInt']>;
  deltaPlantableStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaRoots?: InputMaybe<Scalars['BigInt']>;
  deltaRoots_gt?: InputMaybe<Scalars['BigInt']>;
  deltaRoots_gte?: InputMaybe<Scalars['BigInt']>;
  deltaRoots_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaRoots_lt?: InputMaybe<Scalars['BigInt']>;
  deltaRoots_lte?: InputMaybe<Scalars['BigInt']>;
  deltaRoots_not?: InputMaybe<Scalars['BigInt']>;
  deltaRoots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaSeeds?: InputMaybe<Scalars['BigInt']>;
  deltaSeeds_gt?: InputMaybe<Scalars['BigInt']>;
  deltaSeeds_gte?: InputMaybe<Scalars['BigInt']>;
  deltaSeeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaSeeds_lt?: InputMaybe<Scalars['BigInt']>;
  deltaSeeds_lte?: InputMaybe<Scalars['BigInt']>;
  deltaSeeds_not?: InputMaybe<Scalars['BigInt']>;
  deltaSeeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaStalk?: InputMaybe<Scalars['BigInt']>;
  deltaStalk_gt?: InputMaybe<Scalars['BigInt']>;
  deltaStalk_gte?: InputMaybe<Scalars['BigInt']>;
  deltaStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaStalk_lt?: InputMaybe<Scalars['BigInt']>;
  deltaStalk_lte?: InputMaybe<Scalars['BigInt']>;
  deltaStalk_not?: InputMaybe<Scalars['BigInt']>;
  deltaStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedBDV?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_not?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  plantableStalk?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_gt?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_gte?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
  plantableStalk_lt?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_lte?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_not?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  roots?: InputMaybe<Scalars['BigInt']>;
  roots_gt?: InputMaybe<Scalars['BigInt']>;
  roots_gte?: InputMaybe<Scalars['BigInt']>;
  roots_in?: InputMaybe<Array<Scalars['BigInt']>>;
  roots_lt?: InputMaybe<Scalars['BigInt']>;
  roots_lte?: InputMaybe<Scalars['BigInt']>;
  roots_not?: InputMaybe<Scalars['BigInt']>;
  roots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  seeds?: InputMaybe<Scalars['BigInt']>;
  seeds_gt?: InputMaybe<Scalars['BigInt']>;
  seeds_gte?: InputMaybe<Scalars['BigInt']>;
  seeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  seeds_lt?: InputMaybe<Scalars['BigInt']>;
  seeds_lte?: InputMaybe<Scalars['BigInt']>;
  seeds_not?: InputMaybe<Scalars['BigInt']>;
  seeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  silo?: InputMaybe<Scalars['String']>;
  silo_?: InputMaybe<Silo_Filter>;
  silo_contains?: InputMaybe<Scalars['String']>;
  silo_contains_nocase?: InputMaybe<Scalars['String']>;
  silo_ends_with?: InputMaybe<Scalars['String']>;
  silo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  silo_gt?: InputMaybe<Scalars['String']>;
  silo_gte?: InputMaybe<Scalars['String']>;
  silo_in?: InputMaybe<Array<Scalars['String']>>;
  silo_lt?: InputMaybe<Scalars['String']>;
  silo_lte?: InputMaybe<Scalars['String']>;
  silo_not?: InputMaybe<Scalars['String']>;
  silo_not_contains?: InputMaybe<Scalars['String']>;
  silo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  silo_not_ends_with?: InputMaybe<Scalars['String']>;
  silo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  silo_not_in?: InputMaybe<Array<Scalars['String']>>;
  silo_not_starts_with?: InputMaybe<Scalars['String']>;
  silo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  silo_starts_with?: InputMaybe<Scalars['String']>;
  silo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stalk?: InputMaybe<Scalars['BigInt']>;
  stalk_gt?: InputMaybe<Scalars['BigInt']>;
  stalk_gte?: InputMaybe<Scalars['BigInt']>;
  stalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stalk_lt?: InputMaybe<Scalars['BigInt']>;
  stalk_lte?: InputMaybe<Scalars['BigInt']>;
  stalk_not?: InputMaybe<Scalars['BigInt']>;
  stalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum SiloDailySnapshot_OrderBy {
  ActiveFarmers = 'activeFarmers',
  BeanMints = 'beanMints',
  CreatedAt = 'createdAt',
  DeltaActiveFarmers = 'deltaActiveFarmers',
  DeltaBeanMints = 'deltaBeanMints',
  DeltaDepositedBdv = 'deltaDepositedBDV',
  DeltaPlantableStalk = 'deltaPlantableStalk',
  DeltaRoots = 'deltaRoots',
  DeltaSeeds = 'deltaSeeds',
  DeltaStalk = 'deltaStalk',
  DepositedBdv = 'depositedBDV',
  Id = 'id',
  PlantableStalk = 'plantableStalk',
  Roots = 'roots',
  Season = 'season',
  Seeds = 'seeds',
  Silo = 'silo',
  Stalk = 'stalk',
  UpdatedAt = 'updatedAt'
}

export type SiloDeposit = {
  __typename?: 'SiloDeposit';
  /** Current token amount deposited */
  amount: Scalars['BigInt'];
  /** Original BDV of the deposit */
  bdv: Scalars['BigInt'];
  /** Timestamp of first deposit */
  createdAt: Scalars['BigInt'];
  /** Original token amount deposited */
  depositedAmount: Scalars['BigInt'];
  /** Farmer address */
  farmer: Farmer;
  /** Transaction hashes for multiple deposits in one season */
  hashes: Array<Scalars['String']>;
  /** Account - Token Address - Season */
  id: Scalars['ID'];
  /** Season of deposit */
  season: Scalars['Int'];
  /** Token Address */
  token: Scalars['String'];
  /** Timestamp when last updated */
  updatedAt: Scalars['BigInt'];
  /** Token amount withdrawn */
  withdrawnAmount: Scalars['BigInt'];
  /** Withdrawn BDV */
  withdrawnBDV: Scalars['BigInt'];
};

export type SiloDeposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bdv?: InputMaybe<Scalars['BigInt']>;
  bdv_gt?: InputMaybe<Scalars['BigInt']>;
  bdv_gte?: InputMaybe<Scalars['BigInt']>;
  bdv_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bdv_lt?: InputMaybe<Scalars['BigInt']>;
  bdv_lte?: InputMaybe<Scalars['BigInt']>;
  bdv_not?: InputMaybe<Scalars['BigInt']>;
  bdv_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedAmount?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_not?: InputMaybe<Scalars['BigInt']>;
  depositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmer?: InputMaybe<Scalars['String']>;
  farmer_?: InputMaybe<Farmer_Filter>;
  farmer_contains?: InputMaybe<Scalars['String']>;
  farmer_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_ends_with?: InputMaybe<Scalars['String']>;
  farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_gt?: InputMaybe<Scalars['String']>;
  farmer_gte?: InputMaybe<Scalars['String']>;
  farmer_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_lt?: InputMaybe<Scalars['String']>;
  farmer_lte?: InputMaybe<Scalars['String']>;
  farmer_not?: InputMaybe<Scalars['String']>;
  farmer_not_contains?: InputMaybe<Scalars['String']>;
  farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_not_starts_with?: InputMaybe<Scalars['String']>;
  farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_starts_with?: InputMaybe<Scalars['String']>;
  farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hashes?: InputMaybe<Array<Scalars['String']>>;
  hashes_contains?: InputMaybe<Array<Scalars['String']>>;
  hashes_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  hashes_not?: InputMaybe<Array<Scalars['String']>>;
  hashes_not_contains?: InputMaybe<Array<Scalars['String']>>;
  hashes_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnBDV?: InputMaybe<Scalars['BigInt']>;
  withdrawnBDV_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnBDV_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnBDV_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnBDV_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnBDV_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum SiloDeposit_OrderBy {
  Amount = 'amount',
  Bdv = 'bdv',
  CreatedAt = 'createdAt',
  DepositedAmount = 'depositedAmount',
  Farmer = 'farmer',
  Hashes = 'hashes',
  Id = 'id',
  Season = 'season',
  Token = 'token',
  UpdatedAt = 'updatedAt',
  WithdrawnAmount = 'withdrawnAmount',
  WithdrawnBdv = 'withdrawnBDV'
}

/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type SiloEvent = {
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  { Event type }-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
};

export type SiloEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum SiloEvent_OrderBy {
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol'
}

export type SiloHourlySnapshot = {
  __typename?: 'SiloHourlySnapshot';
  /** Point in time current number of active farmers deposited in the silo */
  activeFarmers: Scalars['Int'];
  /** Point in time cumulative total for bean mints sent to the silo */
  beanMints: Scalars['BigInt'];
  /** Timestamp of initial snapshot creation */
  createdAt: Scalars['BigInt'];
  /** Point in time delta number of active farmers deposited in the silo */
  deltaActiveFarmers: Scalars['Int'];
  /** Point in time delta total for bean mints sent to the silo */
  deltaBeanMints: Scalars['BigInt'];
  /** Point in time delta BDV of all deposited assets */
  deltaDepositedBDV: Scalars['BigInt'];
  /** Point in time current plantable stalk for bean seigniorage not yet claimed */
  deltaPlantableStalk: Scalars['BigInt'];
  /** Point in time delta roots balance */
  deltaRoots: Scalars['BigInt'];
  /** Point in time delta seeds balance */
  deltaSeeds: Scalars['BigInt'];
  /** Point in time delta stalk balance */
  deltaStalk: Scalars['BigInt'];
  /** Point in time current BDV of all deposited assets */
  depositedBDV: Scalars['BigInt'];
  /** ID of silo-Unix Hour Timestamp */
  id: Scalars['ID'];
  /** Point in time current plantable stalk for bean seigniorage not yet claimed */
  plantableStalk: Scalars['BigInt'];
  /** Point in time current roots balance */
  roots: Scalars['BigInt'];
  /** Season for the snapshot */
  season: Scalars['Int'];
  /** Point in time current seeds balance */
  seeds: Scalars['BigInt'];
  /** Silo associated with the snapshot */
  silo: Silo;
  /** Point in time current stalk balance */
  stalk: Scalars['BigInt'];
  /** Timestamp of last entity update */
  updatedAt: Scalars['BigInt'];
};

export type SiloHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeFarmers?: InputMaybe<Scalars['Int']>;
  activeFarmers_gt?: InputMaybe<Scalars['Int']>;
  activeFarmers_gte?: InputMaybe<Scalars['Int']>;
  activeFarmers_in?: InputMaybe<Array<Scalars['Int']>>;
  activeFarmers_lt?: InputMaybe<Scalars['Int']>;
  activeFarmers_lte?: InputMaybe<Scalars['Int']>;
  activeFarmers_not?: InputMaybe<Scalars['Int']>;
  activeFarmers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  beanMints?: InputMaybe<Scalars['BigInt']>;
  beanMints_gt?: InputMaybe<Scalars['BigInt']>;
  beanMints_gte?: InputMaybe<Scalars['BigInt']>;
  beanMints_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanMints_lt?: InputMaybe<Scalars['BigInt']>;
  beanMints_lte?: InputMaybe<Scalars['BigInt']>;
  beanMints_not?: InputMaybe<Scalars['BigInt']>;
  beanMints_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaActiveFarmers?: InputMaybe<Scalars['Int']>;
  deltaActiveFarmers_gt?: InputMaybe<Scalars['Int']>;
  deltaActiveFarmers_gte?: InputMaybe<Scalars['Int']>;
  deltaActiveFarmers_in?: InputMaybe<Array<Scalars['Int']>>;
  deltaActiveFarmers_lt?: InputMaybe<Scalars['Int']>;
  deltaActiveFarmers_lte?: InputMaybe<Scalars['Int']>;
  deltaActiveFarmers_not?: InputMaybe<Scalars['Int']>;
  deltaActiveFarmers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deltaBeanMints?: InputMaybe<Scalars['BigInt']>;
  deltaBeanMints_gt?: InputMaybe<Scalars['BigInt']>;
  deltaBeanMints_gte?: InputMaybe<Scalars['BigInt']>;
  deltaBeanMints_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaBeanMints_lt?: InputMaybe<Scalars['BigInt']>;
  deltaBeanMints_lte?: InputMaybe<Scalars['BigInt']>;
  deltaBeanMints_not?: InputMaybe<Scalars['BigInt']>;
  deltaBeanMints_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaDepositedBDV?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
  deltaDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaPlantableStalk?: InputMaybe<Scalars['BigInt']>;
  deltaPlantableStalk_gt?: InputMaybe<Scalars['BigInt']>;
  deltaPlantableStalk_gte?: InputMaybe<Scalars['BigInt']>;
  deltaPlantableStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaPlantableStalk_lt?: InputMaybe<Scalars['BigInt']>;
  deltaPlantableStalk_lte?: InputMaybe<Scalars['BigInt']>;
  deltaPlantableStalk_not?: InputMaybe<Scalars['BigInt']>;
  deltaPlantableStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaRoots?: InputMaybe<Scalars['BigInt']>;
  deltaRoots_gt?: InputMaybe<Scalars['BigInt']>;
  deltaRoots_gte?: InputMaybe<Scalars['BigInt']>;
  deltaRoots_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaRoots_lt?: InputMaybe<Scalars['BigInt']>;
  deltaRoots_lte?: InputMaybe<Scalars['BigInt']>;
  deltaRoots_not?: InputMaybe<Scalars['BigInt']>;
  deltaRoots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaSeeds?: InputMaybe<Scalars['BigInt']>;
  deltaSeeds_gt?: InputMaybe<Scalars['BigInt']>;
  deltaSeeds_gte?: InputMaybe<Scalars['BigInt']>;
  deltaSeeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaSeeds_lt?: InputMaybe<Scalars['BigInt']>;
  deltaSeeds_lte?: InputMaybe<Scalars['BigInt']>;
  deltaSeeds_not?: InputMaybe<Scalars['BigInt']>;
  deltaSeeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaStalk?: InputMaybe<Scalars['BigInt']>;
  deltaStalk_gt?: InputMaybe<Scalars['BigInt']>;
  deltaStalk_gte?: InputMaybe<Scalars['BigInt']>;
  deltaStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaStalk_lt?: InputMaybe<Scalars['BigInt']>;
  deltaStalk_lte?: InputMaybe<Scalars['BigInt']>;
  deltaStalk_not?: InputMaybe<Scalars['BigInt']>;
  deltaStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedBDV?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_not?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  plantableStalk?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_gt?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_gte?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
  plantableStalk_lt?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_lte?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_not?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  roots?: InputMaybe<Scalars['BigInt']>;
  roots_gt?: InputMaybe<Scalars['BigInt']>;
  roots_gte?: InputMaybe<Scalars['BigInt']>;
  roots_in?: InputMaybe<Array<Scalars['BigInt']>>;
  roots_lt?: InputMaybe<Scalars['BigInt']>;
  roots_lte?: InputMaybe<Scalars['BigInt']>;
  roots_not?: InputMaybe<Scalars['BigInt']>;
  roots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  seeds?: InputMaybe<Scalars['BigInt']>;
  seeds_gt?: InputMaybe<Scalars['BigInt']>;
  seeds_gte?: InputMaybe<Scalars['BigInt']>;
  seeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  seeds_lt?: InputMaybe<Scalars['BigInt']>;
  seeds_lte?: InputMaybe<Scalars['BigInt']>;
  seeds_not?: InputMaybe<Scalars['BigInt']>;
  seeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  silo?: InputMaybe<Scalars['String']>;
  silo_?: InputMaybe<Silo_Filter>;
  silo_contains?: InputMaybe<Scalars['String']>;
  silo_contains_nocase?: InputMaybe<Scalars['String']>;
  silo_ends_with?: InputMaybe<Scalars['String']>;
  silo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  silo_gt?: InputMaybe<Scalars['String']>;
  silo_gte?: InputMaybe<Scalars['String']>;
  silo_in?: InputMaybe<Array<Scalars['String']>>;
  silo_lt?: InputMaybe<Scalars['String']>;
  silo_lte?: InputMaybe<Scalars['String']>;
  silo_not?: InputMaybe<Scalars['String']>;
  silo_not_contains?: InputMaybe<Scalars['String']>;
  silo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  silo_not_ends_with?: InputMaybe<Scalars['String']>;
  silo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  silo_not_in?: InputMaybe<Array<Scalars['String']>>;
  silo_not_starts_with?: InputMaybe<Scalars['String']>;
  silo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  silo_starts_with?: InputMaybe<Scalars['String']>;
  silo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stalk?: InputMaybe<Scalars['BigInt']>;
  stalk_gt?: InputMaybe<Scalars['BigInt']>;
  stalk_gte?: InputMaybe<Scalars['BigInt']>;
  stalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stalk_lt?: InputMaybe<Scalars['BigInt']>;
  stalk_lte?: InputMaybe<Scalars['BigInt']>;
  stalk_not?: InputMaybe<Scalars['BigInt']>;
  stalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum SiloHourlySnapshot_OrderBy {
  ActiveFarmers = 'activeFarmers',
  BeanMints = 'beanMints',
  CreatedAt = 'createdAt',
  DeltaActiveFarmers = 'deltaActiveFarmers',
  DeltaBeanMints = 'deltaBeanMints',
  DeltaDepositedBdv = 'deltaDepositedBDV',
  DeltaPlantableStalk = 'deltaPlantableStalk',
  DeltaRoots = 'deltaRoots',
  DeltaSeeds = 'deltaSeeds',
  DeltaStalk = 'deltaStalk',
  DepositedBdv = 'depositedBDV',
  Id = 'id',
  PlantableStalk = 'plantableStalk',
  Roots = 'roots',
  Season = 'season',
  Seeds = 'seeds',
  Silo = 'silo',
  Stalk = 'stalk',
  UpdatedAt = 'updatedAt'
}

export type SiloWithdraw = {
  __typename?: 'SiloWithdraw';
  /** Token amount withdrawn */
  amount: Scalars['BigInt'];
  /** Season when withdrawal can be claimed */
  claimableSeason: Scalars['Int'];
  /** Flag for if this has been claimed */
  claimed: Scalars['Boolean'];
  /** Timestamp created */
  createdAt: Scalars['BigInt'];
  /** Farmer address */
  farmer: Farmer;
  /** Transaction hash of withdrawal */
  hashes: Array<Scalars['String']>;
  /** Account - Deposit Token - Current Season */
  id: Scalars['ID'];
  /** Token address */
  token: Scalars['String'];
  /** Season withdrawal initiated */
  withdrawSeason: Scalars['Int'];
};

export type SiloWithdraw_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimableSeason?: InputMaybe<Scalars['Int']>;
  claimableSeason_gt?: InputMaybe<Scalars['Int']>;
  claimableSeason_gte?: InputMaybe<Scalars['Int']>;
  claimableSeason_in?: InputMaybe<Array<Scalars['Int']>>;
  claimableSeason_lt?: InputMaybe<Scalars['Int']>;
  claimableSeason_lte?: InputMaybe<Scalars['Int']>;
  claimableSeason_not?: InputMaybe<Scalars['Int']>;
  claimableSeason_not_in?: InputMaybe<Array<Scalars['Int']>>;
  claimed?: InputMaybe<Scalars['Boolean']>;
  claimed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  claimed_not?: InputMaybe<Scalars['Boolean']>;
  claimed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmer?: InputMaybe<Scalars['String']>;
  farmer_?: InputMaybe<Farmer_Filter>;
  farmer_contains?: InputMaybe<Scalars['String']>;
  farmer_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_ends_with?: InputMaybe<Scalars['String']>;
  farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_gt?: InputMaybe<Scalars['String']>;
  farmer_gte?: InputMaybe<Scalars['String']>;
  farmer_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_lt?: InputMaybe<Scalars['String']>;
  farmer_lte?: InputMaybe<Scalars['String']>;
  farmer_not?: InputMaybe<Scalars['String']>;
  farmer_not_contains?: InputMaybe<Scalars['String']>;
  farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_not_starts_with?: InputMaybe<Scalars['String']>;
  farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_starts_with?: InputMaybe<Scalars['String']>;
  farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hashes?: InputMaybe<Array<Scalars['String']>>;
  hashes_contains?: InputMaybe<Array<Scalars['String']>>;
  hashes_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  hashes_not?: InputMaybe<Array<Scalars['String']>>;
  hashes_not_contains?: InputMaybe<Array<Scalars['String']>>;
  hashes_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawSeason?: InputMaybe<Scalars['Int']>;
  withdrawSeason_gt?: InputMaybe<Scalars['Int']>;
  withdrawSeason_gte?: InputMaybe<Scalars['Int']>;
  withdrawSeason_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawSeason_lt?: InputMaybe<Scalars['Int']>;
  withdrawSeason_lte?: InputMaybe<Scalars['Int']>;
  withdrawSeason_not?: InputMaybe<Scalars['Int']>;
  withdrawSeason_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum SiloWithdraw_OrderBy {
  Amount = 'amount',
  ClaimableSeason = 'claimableSeason',
  Claimed = 'claimed',
  CreatedAt = 'createdAt',
  Farmer = 'farmer',
  Hashes = 'hashes',
  Id = 'id',
  Token = 'token',
  WithdrawSeason = 'withdrawSeason'
}

export type SiloYield = {
  __typename?: 'SiloYield';
  /** Bean EMA for season */
  beansPerSeasonEMA: Scalars['BigDecimal'];
  /** Beta used for EMA */
  beta: Scalars['BigDecimal'];
  /** Unix timestamp of update */
  createdAt: Scalars['BigInt'];
  /** Bean APY for four seeds per BDV */
  fourSeedBeanAPY: Scalars['BigDecimal'];
  /** Stalk APY for four seeds per BDV */
  fourSeedStalkAPY: Scalars['BigDecimal'];
  /** Season of data points */
  id: Scalars['ID'];
  /** Sortable int field for season */
  season: Scalars['Int'];
  /** Bean APY for two seeds per BDV */
  twoSeedBeanAPY: Scalars['BigDecimal'];
  /** Stalk APY for two seeds per BDV */
  twoSeedStalkAPY: Scalars['BigDecimal'];
  /** u used for EMA */
  u: Scalars['Int'];
};

export type SiloYield_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  beansPerSeasonEMA?: InputMaybe<Scalars['BigDecimal']>;
  beansPerSeasonEMA_gt?: InputMaybe<Scalars['BigDecimal']>;
  beansPerSeasonEMA_gte?: InputMaybe<Scalars['BigDecimal']>;
  beansPerSeasonEMA_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  beansPerSeasonEMA_lt?: InputMaybe<Scalars['BigDecimal']>;
  beansPerSeasonEMA_lte?: InputMaybe<Scalars['BigDecimal']>;
  beansPerSeasonEMA_not?: InputMaybe<Scalars['BigDecimal']>;
  beansPerSeasonEMA_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  beta?: InputMaybe<Scalars['BigDecimal']>;
  beta_gt?: InputMaybe<Scalars['BigDecimal']>;
  beta_gte?: InputMaybe<Scalars['BigDecimal']>;
  beta_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  beta_lt?: InputMaybe<Scalars['BigDecimal']>;
  beta_lte?: InputMaybe<Scalars['BigDecimal']>;
  beta_not?: InputMaybe<Scalars['BigDecimal']>;
  beta_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fourSeedBeanAPY?: InputMaybe<Scalars['BigDecimal']>;
  fourSeedBeanAPY_gt?: InputMaybe<Scalars['BigDecimal']>;
  fourSeedBeanAPY_gte?: InputMaybe<Scalars['BigDecimal']>;
  fourSeedBeanAPY_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fourSeedBeanAPY_lt?: InputMaybe<Scalars['BigDecimal']>;
  fourSeedBeanAPY_lte?: InputMaybe<Scalars['BigDecimal']>;
  fourSeedBeanAPY_not?: InputMaybe<Scalars['BigDecimal']>;
  fourSeedBeanAPY_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fourSeedStalkAPY?: InputMaybe<Scalars['BigDecimal']>;
  fourSeedStalkAPY_gt?: InputMaybe<Scalars['BigDecimal']>;
  fourSeedStalkAPY_gte?: InputMaybe<Scalars['BigDecimal']>;
  fourSeedStalkAPY_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fourSeedStalkAPY_lt?: InputMaybe<Scalars['BigDecimal']>;
  fourSeedStalkAPY_lte?: InputMaybe<Scalars['BigDecimal']>;
  fourSeedStalkAPY_not?: InputMaybe<Scalars['BigDecimal']>;
  fourSeedStalkAPY_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
  twoSeedBeanAPY?: InputMaybe<Scalars['BigDecimal']>;
  twoSeedBeanAPY_gt?: InputMaybe<Scalars['BigDecimal']>;
  twoSeedBeanAPY_gte?: InputMaybe<Scalars['BigDecimal']>;
  twoSeedBeanAPY_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  twoSeedBeanAPY_lt?: InputMaybe<Scalars['BigDecimal']>;
  twoSeedBeanAPY_lte?: InputMaybe<Scalars['BigDecimal']>;
  twoSeedBeanAPY_not?: InputMaybe<Scalars['BigDecimal']>;
  twoSeedBeanAPY_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  twoSeedStalkAPY?: InputMaybe<Scalars['BigDecimal']>;
  twoSeedStalkAPY_gt?: InputMaybe<Scalars['BigDecimal']>;
  twoSeedStalkAPY_gte?: InputMaybe<Scalars['BigDecimal']>;
  twoSeedStalkAPY_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  twoSeedStalkAPY_lt?: InputMaybe<Scalars['BigDecimal']>;
  twoSeedStalkAPY_lte?: InputMaybe<Scalars['BigDecimal']>;
  twoSeedStalkAPY_not?: InputMaybe<Scalars['BigDecimal']>;
  twoSeedStalkAPY_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  u?: InputMaybe<Scalars['Int']>;
  u_gt?: InputMaybe<Scalars['Int']>;
  u_gte?: InputMaybe<Scalars['Int']>;
  u_in?: InputMaybe<Array<Scalars['Int']>>;
  u_lt?: InputMaybe<Scalars['Int']>;
  u_lte?: InputMaybe<Scalars['Int']>;
  u_not?: InputMaybe<Scalars['Int']>;
  u_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum SiloYield_OrderBy {
  BeansPerSeasonEma = 'beansPerSeasonEMA',
  Beta = 'beta',
  CreatedAt = 'createdAt',
  FourSeedBeanApy = 'fourSeedBeanAPY',
  FourSeedStalkApy = 'fourSeedStalkAPY',
  Id = 'id',
  Season = 'season',
  TwoSeedBeanApy = 'twoSeedBeanAPY',
  TwoSeedStalkApy = 'twoSeedStalkAPY',
  U = 'u'
}

export type Silo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeFarmers?: InputMaybe<Scalars['Int']>;
  activeFarmers_gt?: InputMaybe<Scalars['Int']>;
  activeFarmers_gte?: InputMaybe<Scalars['Int']>;
  activeFarmers_in?: InputMaybe<Array<Scalars['Int']>>;
  activeFarmers_lt?: InputMaybe<Scalars['Int']>;
  activeFarmers_lte?: InputMaybe<Scalars['Int']>;
  activeFarmers_not?: InputMaybe<Scalars['Int']>;
  activeFarmers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  assets_?: InputMaybe<SiloAsset_Filter>;
  beanMints?: InputMaybe<Scalars['BigInt']>;
  beanMints_gt?: InputMaybe<Scalars['BigInt']>;
  beanMints_gte?: InputMaybe<Scalars['BigInt']>;
  beanMints_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanMints_lt?: InputMaybe<Scalars['BigInt']>;
  beanMints_lte?: InputMaybe<Scalars['BigInt']>;
  beanMints_not?: InputMaybe<Scalars['BigInt']>;
  beanMints_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beanstalk?: InputMaybe<Scalars['String']>;
  beanstalk_?: InputMaybe<Beanstalk_Filter>;
  beanstalk_contains?: InputMaybe<Scalars['String']>;
  beanstalk_contains_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_ends_with?: InputMaybe<Scalars['String']>;
  beanstalk_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_gt?: InputMaybe<Scalars['String']>;
  beanstalk_gte?: InputMaybe<Scalars['String']>;
  beanstalk_in?: InputMaybe<Array<Scalars['String']>>;
  beanstalk_lt?: InputMaybe<Scalars['String']>;
  beanstalk_lte?: InputMaybe<Scalars['String']>;
  beanstalk_not?: InputMaybe<Scalars['String']>;
  beanstalk_not_contains?: InputMaybe<Scalars['String']>;
  beanstalk_not_contains_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_not_ends_with?: InputMaybe<Scalars['String']>;
  beanstalk_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_not_in?: InputMaybe<Array<Scalars['String']>>;
  beanstalk_not_starts_with?: InputMaybe<Scalars['String']>;
  beanstalk_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  beanstalk_starts_with?: InputMaybe<Scalars['String']>;
  beanstalk_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dailySnapshots_?: InputMaybe<SiloDailySnapshot_Filter>;
  depositedBDV?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_not?: InputMaybe<Scalars['BigInt']>;
  depositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  farmer?: InputMaybe<Scalars['String']>;
  farmer_?: InputMaybe<Farmer_Filter>;
  farmer_contains?: InputMaybe<Scalars['String']>;
  farmer_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_ends_with?: InputMaybe<Scalars['String']>;
  farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_gt?: InputMaybe<Scalars['String']>;
  farmer_gte?: InputMaybe<Scalars['String']>;
  farmer_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_lt?: InputMaybe<Scalars['String']>;
  farmer_lte?: InputMaybe<Scalars['String']>;
  farmer_not?: InputMaybe<Scalars['String']>;
  farmer_not_contains?: InputMaybe<Scalars['String']>;
  farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with?: InputMaybe<Scalars['String']>;
  farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
  farmer_not_starts_with?: InputMaybe<Scalars['String']>;
  farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  farmer_starts_with?: InputMaybe<Scalars['String']>;
  farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hourlySnapshots_?: InputMaybe<SiloHourlySnapshot_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  plantableStalk?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_gt?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_gte?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
  plantableStalk_lt?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_lte?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_not?: InputMaybe<Scalars['BigInt']>;
  plantableStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  roots?: InputMaybe<Scalars['BigInt']>;
  roots_gt?: InputMaybe<Scalars['BigInt']>;
  roots_gte?: InputMaybe<Scalars['BigInt']>;
  roots_in?: InputMaybe<Array<Scalars['BigInt']>>;
  roots_lt?: InputMaybe<Scalars['BigInt']>;
  roots_lte?: InputMaybe<Scalars['BigInt']>;
  roots_not?: InputMaybe<Scalars['BigInt']>;
  roots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  seeds?: InputMaybe<Scalars['BigInt']>;
  seeds_gt?: InputMaybe<Scalars['BigInt']>;
  seeds_gte?: InputMaybe<Scalars['BigInt']>;
  seeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  seeds_lt?: InputMaybe<Scalars['BigInt']>;
  seeds_lte?: InputMaybe<Scalars['BigInt']>;
  seeds_not?: InputMaybe<Scalars['BigInt']>;
  seeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stalk?: InputMaybe<Scalars['BigInt']>;
  stalk_gt?: InputMaybe<Scalars['BigInt']>;
  stalk_gte?: InputMaybe<Scalars['BigInt']>;
  stalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stalk_lt?: InputMaybe<Scalars['BigInt']>;
  stalk_lte?: InputMaybe<Scalars['BigInt']>;
  stalk_not?: InputMaybe<Scalars['BigInt']>;
  stalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  whitelistedTokens?: InputMaybe<Array<Scalars['String']>>;
  whitelistedTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistedTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistedTokens_not?: InputMaybe<Array<Scalars['String']>>;
  whitelistedTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistedTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
};

export enum Silo_OrderBy {
  ActiveFarmers = 'activeFarmers',
  Assets = 'assets',
  BeanMints = 'beanMints',
  Beanstalk = 'beanstalk',
  DailySnapshots = 'dailySnapshots',
  DepositedBdv = 'depositedBDV',
  Farmer = 'farmer',
  HourlySnapshots = 'hourlySnapshots',
  Id = 'id',
  PlantableStalk = 'plantableStalk',
  Roots = 'roots',
  Seeds = 'seeds',
  Stalk = 'stalk',
  WhitelistedTokens = 'whitelistedTokens'
}

export type Space = {
  __typename?: 'Space';
  about?: Maybe<Scalars['String']>;
  admins?: Maybe<Array<Maybe<Scalars['String']>>>;
  avatar?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  children?: Maybe<Array<Maybe<Space>>>;
  coingecko?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  filters?: Maybe<SpaceFilters>;
  followersCount?: Maybe<Scalars['Int']>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  parent?: Maybe<Space>;
  plugins?: Maybe<Scalars['Any']>;
  private?: Maybe<Scalars['Boolean']>;
  proposalsCount?: Maybe<Scalars['Int']>;
  skin?: Maybe<Scalars['String']>;
  strategies?: Maybe<Array<Maybe<Strategy>>>;
  symbol?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  treasuries?: Maybe<Array<Maybe<Treasury>>>;
  twitter?: Maybe<Scalars['String']>;
  validation?: Maybe<Validation>;
  voteValidation?: Maybe<Validation>;
  voting?: Maybe<SpaceVoting>;
  website?: Maybe<Scalars['String']>;
};

export type SpaceFilters = {
  __typename?: 'SpaceFilters';
  minScore?: Maybe<Scalars['Float']>;
  onlyMembers?: Maybe<Scalars['Boolean']>;
};

export type SpaceVoting = {
  __typename?: 'SpaceVoting';
  aliased?: Maybe<Scalars['Boolean']>;
  blind?: Maybe<Scalars['Boolean']>;
  delay?: Maybe<Scalars['Int']>;
  hideAbstain?: Maybe<Scalars['Boolean']>;
  period?: Maybe<Scalars['Int']>;
  privacy?: Maybe<Scalars['String']>;
  quorum?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type SpaceWhere = {
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StalkChange = SiloEvent & {
  __typename?: 'StalkChange';
  /**  Account removing deposit */
  account: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Token removed */
  delta: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /** stalkChange-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /**  Season when the change happened  */
  season: Scalars['Int'];
};

export type StalkChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delta?: InputMaybe<Scalars['BigInt']>;
  delta_gt?: InputMaybe<Scalars['BigInt']>;
  delta_gte?: InputMaybe<Scalars['BigInt']>;
  delta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delta_lt?: InputMaybe<Scalars['BigInt']>;
  delta_lte?: InputMaybe<Scalars['BigInt']>;
  delta_not?: InputMaybe<Scalars['BigInt']>;
  delta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
  season_gt?: InputMaybe<Scalars['Int']>;
  season_gte?: InputMaybe<Scalars['Int']>;
  season_in?: InputMaybe<Array<Scalars['Int']>>;
  season_lt?: InputMaybe<Scalars['Int']>;
  season_lte?: InputMaybe<Scalars['Int']>;
  season_not?: InputMaybe<Scalars['Int']>;
  season_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum StalkChange_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Delta = 'delta',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol',
  Season = 'season'
}

export type Strategy = {
  __typename?: 'Strategy';
  name: Scalars['String'];
  network?: Maybe<Scalars['String']>;
  params?: Maybe<Scalars['Any']>;
};

export type StrategyItem = {
  __typename?: 'StrategyItem';
  about?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  examples?: Maybe<Array<Maybe<Scalars['Any']>>>;
  id: Scalars['String'];
  schema?: Maybe<Scalars['Any']>;
  spacesCount?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  addDeposit?: Maybe<AddDeposit>;
  addDeposits: Array<AddDeposit>;
  address: Scalars['String'];
  bean?: Maybe<Bean>;
  beanDailySnapshot?: Maybe<BeanDailySnapshot>;
  beanDailySnapshots: Array<BeanDailySnapshot>;
  beanHourlySnapshot?: Maybe<BeanHourlySnapshot>;
  beanHourlySnapshots: Array<BeanHourlySnapshot>;
  beans: Array<Bean>;
  beanstalk?: Maybe<Beanstalk>;
  beanstalks: Array<Beanstalk>;
  chop?: Maybe<Chop>;
  chops: Array<Chop>;
  created: Scalars['Int'];
  cross?: Maybe<Cross>;
  crosses: Array<Cross>;
  dewhitelistToken?: Maybe<DewhitelistToken>;
  dewhitelistTokens: Array<DewhitelistToken>;
  farmer?: Maybe<Farmer>;
  farmers: Array<Farmer>;
  fertilizer?: Maybe<Fertilizer>;
  fertilizerBalance?: Maybe<FertilizerBalance>;
  fertilizerBalances: Array<FertilizerBalance>;
  fertilizerToken?: Maybe<FertilizerToken>;
  fertilizerTokens: Array<FertilizerToken>;
  fertilizers: Array<Fertilizer>;
  field?: Maybe<Field>;
  fieldDailySnapshot?: Maybe<FieldDailySnapshot>;
  fieldDailySnapshots: Array<FieldDailySnapshot>;
  fieldEvent?: Maybe<FieldEvent>;
  fieldEvents: Array<FieldEvent>;
  fieldHourlySnapshot?: Maybe<FieldHourlySnapshot>;
  fieldHourlySnapshots: Array<FieldHourlySnapshot>;
  fields: Array<Field>;
  harvest?: Maybe<Harvest>;
  harvests: Array<Harvest>;
  id: Scalars['String'];
  incentive?: Maybe<Incentive>;
  incentives: Array<Incentive>;
  ipfs?: Maybe<Scalars['String']>;
  marketplaceEvent?: Maybe<MarketplaceEvent>;
  marketplaceEvents: Array<MarketplaceEvent>;
  metapoolOracle?: Maybe<MetapoolOracle>;
  metapoolOracles: Array<MetapoolOracle>;
  plot?: Maybe<Plot>;
  plots: Array<Plot>;
  podFill?: Maybe<PodFill>;
  podFills: Array<PodFill>;
  podListing?: Maybe<PodListing>;
  podListingCancelled?: Maybe<PodListingCancelled>;
  podListingCancelleds: Array<PodListingCancelled>;
  podListingCreated?: Maybe<PodListingCreated>;
  podListingCreateds: Array<PodListingCreated>;
  podListingFilled?: Maybe<PodListingFilled>;
  podListingFilleds: Array<PodListingFilled>;
  podListings: Array<PodListing>;
  podMarketplace?: Maybe<PodMarketplace>;
  podMarketplaceDailySnapshot?: Maybe<PodMarketplaceDailySnapshot>;
  podMarketplaceDailySnapshots: Array<PodMarketplaceDailySnapshot>;
  podMarketplaceHourlySnapshot?: Maybe<PodMarketplaceHourlySnapshot>;
  podMarketplaceHourlySnapshots: Array<PodMarketplaceHourlySnapshot>;
  podMarketplaces: Array<PodMarketplace>;
  podOrder?: Maybe<PodOrder>;
  podOrderCancelled?: Maybe<PodOrderCancelled>;
  podOrderCancelleds: Array<PodOrderCancelled>;
  podOrderCreated?: Maybe<PodOrderCreated>;
  podOrderCreateds: Array<PodOrderCreated>;
  podOrderFilled?: Maybe<PodOrderFilled>;
  podOrderFilleds: Array<PodOrderFilled>;
  podOrders: Array<PodOrder>;
  podTransfer?: Maybe<PodTransfer>;
  podTransfers: Array<PodTransfer>;
  pool?: Maybe<Pool>;
  poolDailySnapshot?: Maybe<PoolDailySnapshot>;
  poolDailySnapshots: Array<PoolDailySnapshot>;
  poolHourlySnapshot?: Maybe<PoolHourlySnapshot>;
  poolHourlySnapshots: Array<PoolHourlySnapshot>;
  pools: Array<Pool>;
  removeDeposit?: Maybe<RemoveDeposit>;
  removeDeposits: Array<RemoveDeposit>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  season?: Maybe<Season>;
  seasons: Array<Season>;
  seedChange?: Maybe<SeedChange>;
  seedChanges: Array<SeedChange>;
  silo?: Maybe<Silo>;
  siloAsset?: Maybe<SiloAsset>;
  siloAssetDailySnapshot?: Maybe<SiloAssetDailySnapshot>;
  siloAssetDailySnapshots: Array<SiloAssetDailySnapshot>;
  siloAssetHourlySnapshot?: Maybe<SiloAssetHourlySnapshot>;
  siloAssetHourlySnapshots: Array<SiloAssetHourlySnapshot>;
  siloAssets: Array<SiloAsset>;
  siloDailySnapshot?: Maybe<SiloDailySnapshot>;
  siloDailySnapshots: Array<SiloDailySnapshot>;
  siloDeposit?: Maybe<SiloDeposit>;
  siloDeposits: Array<SiloDeposit>;
  siloEvent?: Maybe<SiloEvent>;
  siloEvents: Array<SiloEvent>;
  siloHourlySnapshot?: Maybe<SiloHourlySnapshot>;
  siloHourlySnapshots: Array<SiloHourlySnapshot>;
  siloWithdraw?: Maybe<SiloWithdraw>;
  siloWithdraws: Array<SiloWithdraw>;
  siloYield?: Maybe<SiloYield>;
  siloYields: Array<SiloYield>;
  silos: Array<Silo>;
  space: Space;
  stalkChange?: Maybe<StalkChange>;
  stalkChanges: Array<StalkChange>;
  whitelistToken?: Maybe<WhitelistToken>;
  whitelistTokens: Array<WhitelistToken>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAddDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddDeposit_Filter>;
};


export type SubscriptionBeanArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBeanDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBeanDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeanDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeanDailySnapshot_Filter>;
};


export type SubscriptionBeanHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBeanHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeanHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeanHourlySnapshot_Filter>;
};


export type SubscriptionBeansArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bean_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bean_Filter>;
};


export type SubscriptionBeanstalkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBeanstalksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Beanstalk_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Beanstalk_Filter>;
};


export type SubscriptionChopArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChopsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Chop_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Chop_Filter>;
};


export type SubscriptionCrossArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCrossesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Cross_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Cross_Filter>;
};


export type SubscriptionDewhitelistTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDewhitelistTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DewhitelistToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DewhitelistToken_Filter>;
};


export type SubscriptionFarmerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFarmersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Farmer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Farmer_Filter>;
};


export type SubscriptionFertilizerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFertilizerBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFertilizerBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FertilizerBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FertilizerBalance_Filter>;
};


export type SubscriptionFertilizerTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFertilizerTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FertilizerToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FertilizerToken_Filter>;
};


export type SubscriptionFertilizersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fertilizer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Fertilizer_Filter>;
};


export type SubscriptionFieldArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFieldDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFieldDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FieldDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FieldDailySnapshot_Filter>;
};


export type SubscriptionFieldEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFieldEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FieldEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FieldEvent_Filter>;
};


export type SubscriptionFieldHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFieldHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FieldHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FieldHourlySnapshot_Filter>;
};


export type SubscriptionFieldsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Field_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Field_Filter>;
};


export type SubscriptionHarvestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHarvestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Harvest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Harvest_Filter>;
};


export type SubscriptionIncentiveArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIncentivesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Incentive_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Incentive_Filter>;
};


export type SubscriptionMarketplaceEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketplaceEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketplaceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketplaceEvent_Filter>;
};


export type SubscriptionMetapoolOracleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMetapoolOraclesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetapoolOracle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetapoolOracle_Filter>;
};


export type SubscriptionPlotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPlotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Plot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Plot_Filter>;
};


export type SubscriptionPodFillArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodFillsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodFill_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodFill_Filter>;
};


export type SubscriptionPodListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodListingCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodListingCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodListingCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodListingCancelled_Filter>;
};


export type SubscriptionPodListingCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodListingCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodListingCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodListingCreated_Filter>;
};


export type SubscriptionPodListingFilledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodListingFilledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodListingFilled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodListingFilled_Filter>;
};


export type SubscriptionPodListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodListing_Filter>;
};


export type SubscriptionPodMarketplaceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodMarketplaceDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodMarketplaceDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodMarketplaceDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodMarketplaceDailySnapshot_Filter>;
};


export type SubscriptionPodMarketplaceHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodMarketplaceHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodMarketplaceHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodMarketplaceHourlySnapshot_Filter>;
};


export type SubscriptionPodMarketplacesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodMarketplace_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodMarketplace_Filter>;
};


export type SubscriptionPodOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodOrderCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodOrderCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodOrderCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodOrderCancelled_Filter>;
};


export type SubscriptionPodOrderCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodOrderCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodOrderCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodOrderCreated_Filter>;
};


export type SubscriptionPodOrderFilledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodOrderFilledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodOrderFilled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodOrderFilled_Filter>;
};


export type SubscriptionPodOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodOrder_Filter>;
};


export type SubscriptionPodTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPodTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PodTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PodTransfer_Filter>;
};


export type SubscriptionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolDailySnapshot_Filter>;
};


export type SubscriptionPoolHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHourlySnapshot_Filter>;
};


export type SubscriptionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type SubscriptionRemoveDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRemoveDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoveDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveDeposit_Filter>;
};


export type SubscriptionRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
};


export type SubscriptionSeasonArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSeasonsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Season_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Season_Filter>;
};


export type SubscriptionSeedChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSeedChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SeedChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SeedChange_Filter>;
};


export type SubscriptionSiloArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSiloAssetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSiloAssetDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSiloAssetDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloAssetDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloAssetDailySnapshot_Filter>;
};


export type SubscriptionSiloAssetHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSiloAssetHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloAssetHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloAssetHourlySnapshot_Filter>;
};


export type SubscriptionSiloAssetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloAsset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloAsset_Filter>;
};


export type SubscriptionSiloDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSiloDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloDailySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloDailySnapshot_Filter>;
};


export type SubscriptionSiloDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSiloDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloDeposit_Filter>;
};


export type SubscriptionSiloEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSiloEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloEvent_Filter>;
};


export type SubscriptionSiloHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSiloHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloHourlySnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloHourlySnapshot_Filter>;
};


export type SubscriptionSiloWithdrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSiloWithdrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloWithdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloWithdraw_Filter>;
};


export type SubscriptionSiloYieldArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSiloYieldsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SiloYield_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SiloYield_Filter>;
};


export type SubscriptionSilosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Silo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Silo_Filter>;
};


export type SubscriptionStalkChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStalkChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StalkChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StalkChange_Filter>;
};


export type SubscriptionWhitelistTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWhitelistTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WhitelistToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WhitelistToken_Filter>;
};

export type SubscriptionWhere = {
  address?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created?: InputMaybe<Scalars['Int']>;
  created_gt?: InputMaybe<Scalars['Int']>;
  created_gte?: InputMaybe<Scalars['Int']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_lt?: InputMaybe<Scalars['Int']>;
  created_lte?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  space?: InputMaybe<Scalars['String']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Treasury = {
  __typename?: 'Treasury';
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  created: Scalars['Int'];
  id: Scalars['String'];
  ipfs?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UsersWhere = {
  created?: InputMaybe<Scalars['Int']>;
  created_gt?: InputMaybe<Scalars['Int']>;
  created_gte?: InputMaybe<Scalars['Int']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_lt?: InputMaybe<Scalars['Int']>;
  created_lte?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Validation = {
  __typename?: 'Validation';
  name: Scalars['String'];
  params?: Maybe<Scalars['Any']>;
};

export type Vote = {
  __typename?: 'Vote';
  app?: Maybe<Scalars['String']>;
  choice: Scalars['Any'];
  created: Scalars['Int'];
  id: Scalars['String'];
  ipfs?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['Any']>;
  proposal?: Maybe<Proposal>;
  reason?: Maybe<Scalars['String']>;
  space: Space;
  voter: Scalars['String'];
  vp?: Maybe<Scalars['Float']>;
  vp_by_strategy?: Maybe<Array<Maybe<Scalars['Float']>>>;
  vp_state?: Maybe<Scalars['String']>;
};

export type VoteWhere = {
  created?: InputMaybe<Scalars['Int']>;
  created_gt?: InputMaybe<Scalars['Int']>;
  created_gte?: InputMaybe<Scalars['Int']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_lt?: InputMaybe<Scalars['Int']>;
  created_lte?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  space?: InputMaybe<Scalars['String']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  voter?: InputMaybe<Scalars['String']>;
  voter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vp?: InputMaybe<Scalars['Float']>;
  vp_gt?: InputMaybe<Scalars['Float']>;
  vp_gte?: InputMaybe<Scalars['Float']>;
  vp_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  vp_lt?: InputMaybe<Scalars['Float']>;
  vp_lte?: InputMaybe<Scalars['Float']>;
  vp_state?: InputMaybe<Scalars['String']>;
  vp_state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Vp = {
  __typename?: 'Vp';
  vp?: Maybe<Scalars['Float']>;
  vp_by_strategy?: Maybe<Array<Maybe<Scalars['Float']>>>;
  vp_state?: Maybe<Scalars['String']>;
};

export type WhitelistToken = SiloEvent & {
  __typename?: 'WhitelistToken';
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  createdAt: Scalars['BigInt'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /** whitelistToken-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: Beanstalk;
  /** Seeds per BDV */
  seeds: Scalars['BigInt'];
  /** Selector for token */
  selector: Scalars['String'];
  /** Stalk per BDV */
  stalk: Scalars['BigInt'];
  /** Token address whitelisted */
  token: Scalars['String'];
};

export type WhitelistToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<Beanstalk_Filter>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seeds?: InputMaybe<Scalars['BigInt']>;
  seeds_gt?: InputMaybe<Scalars['BigInt']>;
  seeds_gte?: InputMaybe<Scalars['BigInt']>;
  seeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  seeds_lt?: InputMaybe<Scalars['BigInt']>;
  seeds_lte?: InputMaybe<Scalars['BigInt']>;
  seeds_not?: InputMaybe<Scalars['BigInt']>;
  seeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  selector?: InputMaybe<Scalars['String']>;
  selector_contains?: InputMaybe<Scalars['String']>;
  selector_contains_nocase?: InputMaybe<Scalars['String']>;
  selector_ends_with?: InputMaybe<Scalars['String']>;
  selector_ends_with_nocase?: InputMaybe<Scalars['String']>;
  selector_gt?: InputMaybe<Scalars['String']>;
  selector_gte?: InputMaybe<Scalars['String']>;
  selector_in?: InputMaybe<Array<Scalars['String']>>;
  selector_lt?: InputMaybe<Scalars['String']>;
  selector_lte?: InputMaybe<Scalars['String']>;
  selector_not?: InputMaybe<Scalars['String']>;
  selector_not_contains?: InputMaybe<Scalars['String']>;
  selector_not_contains_nocase?: InputMaybe<Scalars['String']>;
  selector_not_ends_with?: InputMaybe<Scalars['String']>;
  selector_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  selector_not_in?: InputMaybe<Array<Scalars['String']>>;
  selector_not_starts_with?: InputMaybe<Scalars['String']>;
  selector_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  selector_starts_with?: InputMaybe<Scalars['String']>;
  selector_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stalk?: InputMaybe<Scalars['BigInt']>;
  stalk_gt?: InputMaybe<Scalars['BigInt']>;
  stalk_gte?: InputMaybe<Scalars['BigInt']>;
  stalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stalk_lt?: InputMaybe<Scalars['BigInt']>;
  stalk_lte?: InputMaybe<Scalars['BigInt']>;
  stalk_not?: InputMaybe<Scalars['BigInt']>;
  stalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum WhitelistToken_OrderBy {
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Protocol = 'protocol',
  Seeds = 'seeds',
  Selector = 'selector',
  Stalk = 'stalk',
  Token = 'token'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type SeasonalPriceQueryVariables = Exact<{
  season_lte?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type SeasonalPriceQuery = { __typename?: 'Query', seasons: Array<{ __typename?: 'Season', id: string, season: number, createdAt: any, price: any }> };


export const SeasonalPriceDocument = gql`
    query SeasonalPrice($season_lte: Int, $first: Int) {
  seasons: seasons(
    where: {season_lte: $season_lte}
    first: $first
    orderBy: season
    orderDirection: desc
  ) {
    id
    season
    createdAt
    price
  }
}
    `;

/**
 * __useSeasonalPriceQuery__
 *
 * To run a query within a React component, call `useSeasonalPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeasonalPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeasonalPriceQuery({
 *   variables: {
 *      season_lte: // value for 'season_lte'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useSeasonalPriceQuery(baseOptions?: Apollo.QueryHookOptions<SeasonalPriceQuery, SeasonalPriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeasonalPriceQuery, SeasonalPriceQueryVariables>(SeasonalPriceDocument, options);
      }
export function useSeasonalPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeasonalPriceQuery, SeasonalPriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeasonalPriceQuery, SeasonalPriceQueryVariables>(SeasonalPriceDocument, options);
        }
export type SeasonalPriceQueryHookResult = ReturnType<typeof useSeasonalPriceQuery>;
export type SeasonalPriceLazyQueryHookResult = ReturnType<typeof useSeasonalPriceLazyQuery>;
export type SeasonalPriceQueryResult = Apollo.QueryResult<SeasonalPriceQuery, SeasonalPriceQueryVariables>;