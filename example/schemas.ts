export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  __typename?: 'Account';
  ftBalances: Array<FtBalance>;
  id: Scalars['ID'];
  marketRents: Array<MarketRent>;
  marketSales: Array<MarketSale>;
  tokens: Array<Token>;
};

export type AccountFtBalancesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FtBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FtBalance_Filter>;
};

export type AccountMarketRentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketRent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MarketRent_Filter>;
};

export type AccountMarketSalesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketSale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MarketSale_Filter>;
};

export type AccountTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Token_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  ftBalances_?: InputMaybe<FtBalance_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketRents_?: InputMaybe<MarketRent_Filter>;
  marketSales_?: InputMaybe<MarketSale_Filter>;
  tokens_?: InputMaybe<Token_Filter>;
};

export enum Account_OrderBy {
  FtBalances = 'ftBalances',
  Id = 'id',
  MarketRents = 'marketRents',
  MarketSales = 'marketSales',
  Tokens = 'tokens',
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type FtBalance = {
  __typename?: 'FtBalance';
  accountId: Scalars['ID'];
  balance: Scalars['BigInt'];
  contractId: Scalars['ID'];
  id: Scalars['ID'];
  owner: Account;
};

export type FtBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountId?: InputMaybe<Scalars['ID']>;
  accountId_gt?: InputMaybe<Scalars['ID']>;
  accountId_gte?: InputMaybe<Scalars['ID']>;
  accountId_in?: InputMaybe<Array<Scalars['ID']>>;
  accountId_lt?: InputMaybe<Scalars['ID']>;
  accountId_lte?: InputMaybe<Scalars['ID']>;
  accountId_not?: InputMaybe<Scalars['ID']>;
  accountId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contractId?: InputMaybe<Scalars['ID']>;
  contractId_gt?: InputMaybe<Scalars['ID']>;
  contractId_gte?: InputMaybe<Scalars['ID']>;
  contractId_in?: InputMaybe<Array<Scalars['ID']>>;
  contractId_lt?: InputMaybe<Scalars['ID']>;
  contractId_lte?: InputMaybe<Scalars['ID']>;
  contractId_not?: InputMaybe<Scalars['ID']>;
  contractId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum FtBalance_OrderBy {
  AccountId = 'accountId',
  Balance = 'balance',
  ContractId = 'contractId',
  Id = 'id',
  Owner = 'owner',
}

export type MarketRent = {
  __typename?: 'MarketRent';
  conditions: Array<MarketRentCondition>;
  contractId: Scalars['ID'];
  createdAt: Scalars['Int'];
  endedAt?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  maxTime: Scalars['Int'];
  minTime: Scalars['Int'];
  owner: Account;
  ownerId: Scalars['ID'];
  renterId?: Maybe<Scalars['ID']>;
  token: Token;
  tokenId: Scalars['ID'];
};

export type MarketRentConditionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketRentCondition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MarketRentCondition_Filter>;
};

export type MarketRentCondition = {
  __typename?: 'MarketRentCondition';
  ftTokenId: Scalars['ID'];
  id: Scalars['ID'];
  price: Scalars['String'];
  rent: MarketRent;
  rentId: Scalars['ID'];
};

export type MarketRentCondition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  ftTokenId?: InputMaybe<Scalars['ID']>;
  ftTokenId_gt?: InputMaybe<Scalars['ID']>;
  ftTokenId_gte?: InputMaybe<Scalars['ID']>;
  ftTokenId_in?: InputMaybe<Array<Scalars['ID']>>;
  ftTokenId_lt?: InputMaybe<Scalars['ID']>;
  ftTokenId_lte?: InputMaybe<Scalars['ID']>;
  ftTokenId_not?: InputMaybe<Scalars['ID']>;
  ftTokenId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  price?: InputMaybe<Scalars['String']>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rent?: InputMaybe<Scalars['String']>;
  rentId?: InputMaybe<Scalars['ID']>;
  rentId_gt?: InputMaybe<Scalars['ID']>;
  rentId_gte?: InputMaybe<Scalars['ID']>;
  rentId_in?: InputMaybe<Array<Scalars['ID']>>;
  rentId_lt?: InputMaybe<Scalars['ID']>;
  rentId_lte?: InputMaybe<Scalars['ID']>;
  rentId_not?: InputMaybe<Scalars['ID']>;
  rentId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rent_?: InputMaybe<MarketRent_Filter>;
  rent_contains?: InputMaybe<Scalars['String']>;
  rent_contains_nocase?: InputMaybe<Scalars['String']>;
  rent_ends_with?: InputMaybe<Scalars['String']>;
  rent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rent_gt?: InputMaybe<Scalars['String']>;
  rent_gte?: InputMaybe<Scalars['String']>;
  rent_in?: InputMaybe<Array<Scalars['String']>>;
  rent_lt?: InputMaybe<Scalars['String']>;
  rent_lte?: InputMaybe<Scalars['String']>;
  rent_not?: InputMaybe<Scalars['String']>;
  rent_not_contains?: InputMaybe<Scalars['String']>;
  rent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rent_not_ends_with?: InputMaybe<Scalars['String']>;
  rent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rent_not_in?: InputMaybe<Array<Scalars['String']>>;
  rent_not_starts_with?: InputMaybe<Scalars['String']>;
  rent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rent_starts_with?: InputMaybe<Scalars['String']>;
  rent_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum MarketRentCondition_OrderBy {
  FtTokenId = 'ftTokenId',
  Id = 'id',
  Price = 'price',
  Rent = 'rent',
  RentId = 'rentId',
}

export type MarketRent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  conditions_?: InputMaybe<MarketRentCondition_Filter>;
  contractId?: InputMaybe<Scalars['ID']>;
  contractId_gt?: InputMaybe<Scalars['ID']>;
  contractId_gte?: InputMaybe<Scalars['ID']>;
  contractId_in?: InputMaybe<Array<Scalars['ID']>>;
  contractId_lt?: InputMaybe<Scalars['ID']>;
  contractId_lte?: InputMaybe<Scalars['ID']>;
  contractId_not?: InputMaybe<Scalars['ID']>;
  contractId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  endedAt?: InputMaybe<Scalars['Int']>;
  endedAt_gt?: InputMaybe<Scalars['Int']>;
  endedAt_gte?: InputMaybe<Scalars['Int']>;
  endedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  endedAt_lt?: InputMaybe<Scalars['Int']>;
  endedAt_lte?: InputMaybe<Scalars['Int']>;
  endedAt_not?: InputMaybe<Scalars['Int']>;
  endedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  maxTime?: InputMaybe<Scalars['Int']>;
  maxTime_gt?: InputMaybe<Scalars['Int']>;
  maxTime_gte?: InputMaybe<Scalars['Int']>;
  maxTime_in?: InputMaybe<Array<Scalars['Int']>>;
  maxTime_lt?: InputMaybe<Scalars['Int']>;
  maxTime_lte?: InputMaybe<Scalars['Int']>;
  maxTime_not?: InputMaybe<Scalars['Int']>;
  maxTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
  minTime?: InputMaybe<Scalars['Int']>;
  minTime_gt?: InputMaybe<Scalars['Int']>;
  minTime_gte?: InputMaybe<Scalars['Int']>;
  minTime_in?: InputMaybe<Array<Scalars['Int']>>;
  minTime_lt?: InputMaybe<Scalars['Int']>;
  minTime_lte?: InputMaybe<Scalars['Int']>;
  minTime_not?: InputMaybe<Scalars['Int']>;
  minTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
  owner?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['ID']>;
  ownerId_gt?: InputMaybe<Scalars['ID']>;
  ownerId_gte?: InputMaybe<Scalars['ID']>;
  ownerId_in?: InputMaybe<Array<Scalars['ID']>>;
  ownerId_lt?: InputMaybe<Scalars['ID']>;
  ownerId_lte?: InputMaybe<Scalars['ID']>;
  ownerId_not?: InputMaybe<Scalars['ID']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  renterId?: InputMaybe<Scalars['ID']>;
  renterId_gt?: InputMaybe<Scalars['ID']>;
  renterId_gte?: InputMaybe<Scalars['ID']>;
  renterId_in?: InputMaybe<Array<Scalars['ID']>>;
  renterId_lt?: InputMaybe<Scalars['ID']>;
  renterId_lte?: InputMaybe<Scalars['ID']>;
  renterId_not?: InputMaybe<Scalars['ID']>;
  renterId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['ID']>;
  tokenId_gt?: InputMaybe<Scalars['ID']>;
  tokenId_gte?: InputMaybe<Scalars['ID']>;
  tokenId_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId_lt?: InputMaybe<Scalars['ID']>;
  tokenId_lte?: InputMaybe<Scalars['ID']>;
  tokenId_not?: InputMaybe<Scalars['ID']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token_?: InputMaybe<Token_Filter>;
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

export enum MarketRent_OrderBy {
  Conditions = 'conditions',
  ContractId = 'contractId',
  CreatedAt = 'createdAt',
  EndedAt = 'endedAt',
  Id = 'id',
  MaxTime = 'maxTime',
  MinTime = 'minTime',
  Owner = 'owner',
  OwnerId = 'ownerId',
  RenterId = 'renterId',
  Token = 'token',
  TokenId = 'tokenId',
}

export type MarketSale = {
  __typename?: 'MarketSale';
  conditions: Array<MarketSaleCondition>;
  contractId: Scalars['ID'];
  createdAt: Scalars['Int'];
  id: Scalars['ID'];
  isAuction: Scalars['Boolean'];
  owner: Account;
  ownerId: Scalars['ID'];
  token: Token;
  tokenId: Scalars['ID'];
};

export type MarketSaleConditionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketSaleCondition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MarketSaleCondition_Filter>;
};

export type MarketSaleCondition = {
  __typename?: 'MarketSaleCondition';
  ftTokenId: Scalars['ID'];
  id: Scalars['ID'];
  price: Scalars['String'];
  sale: MarketSale;
  saleId: Scalars['ID'];
};

export type MarketSaleCondition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  ftTokenId?: InputMaybe<Scalars['ID']>;
  ftTokenId_gt?: InputMaybe<Scalars['ID']>;
  ftTokenId_gte?: InputMaybe<Scalars['ID']>;
  ftTokenId_in?: InputMaybe<Array<Scalars['ID']>>;
  ftTokenId_lt?: InputMaybe<Scalars['ID']>;
  ftTokenId_lte?: InputMaybe<Scalars['ID']>;
  ftTokenId_not?: InputMaybe<Scalars['ID']>;
  ftTokenId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  price?: InputMaybe<Scalars['String']>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sale?: InputMaybe<Scalars['String']>;
  saleId?: InputMaybe<Scalars['ID']>;
  saleId_gt?: InputMaybe<Scalars['ID']>;
  saleId_gte?: InputMaybe<Scalars['ID']>;
  saleId_in?: InputMaybe<Array<Scalars['ID']>>;
  saleId_lt?: InputMaybe<Scalars['ID']>;
  saleId_lte?: InputMaybe<Scalars['ID']>;
  saleId_not?: InputMaybe<Scalars['ID']>;
  saleId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sale_?: InputMaybe<MarketSale_Filter>;
  sale_contains?: InputMaybe<Scalars['String']>;
  sale_contains_nocase?: InputMaybe<Scalars['String']>;
  sale_ends_with?: InputMaybe<Scalars['String']>;
  sale_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sale_gt?: InputMaybe<Scalars['String']>;
  sale_gte?: InputMaybe<Scalars['String']>;
  sale_in?: InputMaybe<Array<Scalars['String']>>;
  sale_lt?: InputMaybe<Scalars['String']>;
  sale_lte?: InputMaybe<Scalars['String']>;
  sale_not?: InputMaybe<Scalars['String']>;
  sale_not_contains?: InputMaybe<Scalars['String']>;
  sale_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sale_not_ends_with?: InputMaybe<Scalars['String']>;
  sale_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sale_not_in?: InputMaybe<Array<Scalars['String']>>;
  sale_not_starts_with?: InputMaybe<Scalars['String']>;
  sale_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sale_starts_with?: InputMaybe<Scalars['String']>;
  sale_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum MarketSaleCondition_OrderBy {
  FtTokenId = 'ftTokenId',
  Id = 'id',
  Price = 'price',
  Sale = 'sale',
  SaleId = 'saleId',
}

export type MarketSale_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  conditions_?: InputMaybe<MarketSaleCondition_Filter>;
  contractId?: InputMaybe<Scalars['ID']>;
  contractId_gt?: InputMaybe<Scalars['ID']>;
  contractId_gte?: InputMaybe<Scalars['ID']>;
  contractId_in?: InputMaybe<Array<Scalars['ID']>>;
  contractId_lt?: InputMaybe<Scalars['ID']>;
  contractId_lte?: InputMaybe<Scalars['ID']>;
  contractId_not?: InputMaybe<Scalars['ID']>;
  contractId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isAuction?: InputMaybe<Scalars['Boolean']>;
  isAuction_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAuction_not?: InputMaybe<Scalars['Boolean']>;
  isAuction_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  owner?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['ID']>;
  ownerId_gt?: InputMaybe<Scalars['ID']>;
  ownerId_gte?: InputMaybe<Scalars['ID']>;
  ownerId_in?: InputMaybe<Array<Scalars['ID']>>;
  ownerId_lt?: InputMaybe<Scalars['ID']>;
  ownerId_lte?: InputMaybe<Scalars['ID']>;
  ownerId_not?: InputMaybe<Scalars['ID']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['ID']>;
  tokenId_gt?: InputMaybe<Scalars['ID']>;
  tokenId_gte?: InputMaybe<Scalars['ID']>;
  tokenId_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId_lt?: InputMaybe<Scalars['ID']>;
  tokenId_lte?: InputMaybe<Scalars['ID']>;
  tokenId_not?: InputMaybe<Scalars['ID']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token_?: InputMaybe<Token_Filter>;
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

export enum MarketSale_OrderBy {
  Conditions = 'conditions',
  ContractId = 'contractId',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsAuction = 'isAuction',
  Owner = 'owner',
  OwnerId = 'ownerId',
  Token = 'token',
  TokenId = 'tokenId',
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  ftBalance?: Maybe<FtBalance>;
  ftBalances: Array<FtBalance>;
  marketRent?: Maybe<MarketRent>;
  marketRentCondition?: Maybe<MarketRentCondition>;
  marketRentConditions: Array<MarketRentCondition>;
  marketRents: Array<MarketRent>;
  marketSale?: Maybe<MarketSale>;
  marketSaleCondition?: Maybe<MarketSaleCondition>;
  marketSaleConditions: Array<MarketSaleCondition>;
  marketSales: Array<MarketSale>;
  statistic?: Maybe<Statistic>;
  statistics: Array<Statistic>;
  token?: Maybe<Token>;
  tokenMetadata: Array<TokenMetadata>;
  tokenRoyalties: Array<TokenRoyalty>;
  tokenRoyalty?: Maybe<TokenRoyalty>;
  tokenSearch: Array<Token>;
  tokens: Array<Token>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};

export type QueryFtBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFtBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FtBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FtBalance_Filter>;
};

export type QueryMarketRentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMarketRentConditionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMarketRentConditionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketRentCondition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketRentCondition_Filter>;
};

export type QueryMarketRentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketRent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketRent_Filter>;
};

export type QueryMarketSaleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMarketSaleConditionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMarketSaleConditionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketSaleCondition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketSaleCondition_Filter>;
};

export type QueryMarketSalesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketSale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketSale_Filter>;
};

export type QueryStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Statistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Statistic_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenMetadata_Filter>;
};

export type QueryTokenRoyaltiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenRoyalty_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenRoyalty_Filter>;
};

export type QueryTokenRoyaltyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type Statistic = {
  __typename?: 'Statistic';
  accountTotal: Scalars['Int'];
  id: Scalars['ID'];
  marketRentNearFloor: Scalars['String'];
  marketRentNearSum: Scalars['String'];
  marketRentNearTotal: Scalars['Int'];
  marketRentTotal: Scalars['Int'];
  marketSaleNearFloor: Scalars['String'];
  marketSaleNearSum: Scalars['String'];
  marketSaleNearTotal: Scalars['Int'];
  marketSaleTotal: Scalars['Int'];
  nftBurnTotal: Scalars['Int'];
  nftPayTotal: Scalars['Int'];
  nftTotal: Scalars['Int'];
  nftTransferTotal: Scalars['Int'];
  transactionTotal: Scalars['Int'];
};

export type Statistic_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountTotal?: InputMaybe<Scalars['Int']>;
  accountTotal_gt?: InputMaybe<Scalars['Int']>;
  accountTotal_gte?: InputMaybe<Scalars['Int']>;
  accountTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  accountTotal_lt?: InputMaybe<Scalars['Int']>;
  accountTotal_lte?: InputMaybe<Scalars['Int']>;
  accountTotal_not?: InputMaybe<Scalars['Int']>;
  accountTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketRentNearFloor?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_contains?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_contains_nocase?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_ends_with?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_gt?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_gte?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_in?: InputMaybe<Array<Scalars['String']>>;
  marketRentNearFloor_lt?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_lte?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_not?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_not_contains?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_not_ends_with?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketRentNearFloor_not_starts_with?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_starts_with?: InputMaybe<Scalars['String']>;
  marketRentNearFloor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketRentNearSum?: InputMaybe<Scalars['String']>;
  marketRentNearSum_contains?: InputMaybe<Scalars['String']>;
  marketRentNearSum_contains_nocase?: InputMaybe<Scalars['String']>;
  marketRentNearSum_ends_with?: InputMaybe<Scalars['String']>;
  marketRentNearSum_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketRentNearSum_gt?: InputMaybe<Scalars['String']>;
  marketRentNearSum_gte?: InputMaybe<Scalars['String']>;
  marketRentNearSum_in?: InputMaybe<Array<Scalars['String']>>;
  marketRentNearSum_lt?: InputMaybe<Scalars['String']>;
  marketRentNearSum_lte?: InputMaybe<Scalars['String']>;
  marketRentNearSum_not?: InputMaybe<Scalars['String']>;
  marketRentNearSum_not_contains?: InputMaybe<Scalars['String']>;
  marketRentNearSum_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketRentNearSum_not_ends_with?: InputMaybe<Scalars['String']>;
  marketRentNearSum_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketRentNearSum_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketRentNearSum_not_starts_with?: InputMaybe<Scalars['String']>;
  marketRentNearSum_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketRentNearSum_starts_with?: InputMaybe<Scalars['String']>;
  marketRentNearSum_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketRentNearTotal?: InputMaybe<Scalars['Int']>;
  marketRentNearTotal_gt?: InputMaybe<Scalars['Int']>;
  marketRentNearTotal_gte?: InputMaybe<Scalars['Int']>;
  marketRentNearTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  marketRentNearTotal_lt?: InputMaybe<Scalars['Int']>;
  marketRentNearTotal_lte?: InputMaybe<Scalars['Int']>;
  marketRentNearTotal_not?: InputMaybe<Scalars['Int']>;
  marketRentNearTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  marketRentTotal?: InputMaybe<Scalars['Int']>;
  marketRentTotal_gt?: InputMaybe<Scalars['Int']>;
  marketRentTotal_gte?: InputMaybe<Scalars['Int']>;
  marketRentTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  marketRentTotal_lt?: InputMaybe<Scalars['Int']>;
  marketRentTotal_lte?: InputMaybe<Scalars['Int']>;
  marketRentTotal_not?: InputMaybe<Scalars['Int']>;
  marketRentTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  marketSaleNearFloor?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_contains?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_contains_nocase?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_ends_with?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_gt?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_gte?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_in?: InputMaybe<Array<Scalars['String']>>;
  marketSaleNearFloor_lt?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_lte?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_not?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_not_contains?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_not_ends_with?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketSaleNearFloor_not_starts_with?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_starts_with?: InputMaybe<Scalars['String']>;
  marketSaleNearFloor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketSaleNearSum?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_contains?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_contains_nocase?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_ends_with?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_gt?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_gte?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_in?: InputMaybe<Array<Scalars['String']>>;
  marketSaleNearSum_lt?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_lte?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_not?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_not_contains?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_not_ends_with?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketSaleNearSum_not_starts_with?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_starts_with?: InputMaybe<Scalars['String']>;
  marketSaleNearSum_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketSaleNearTotal?: InputMaybe<Scalars['Int']>;
  marketSaleNearTotal_gt?: InputMaybe<Scalars['Int']>;
  marketSaleNearTotal_gte?: InputMaybe<Scalars['Int']>;
  marketSaleNearTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  marketSaleNearTotal_lt?: InputMaybe<Scalars['Int']>;
  marketSaleNearTotal_lte?: InputMaybe<Scalars['Int']>;
  marketSaleNearTotal_not?: InputMaybe<Scalars['Int']>;
  marketSaleNearTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  marketSaleTotal?: InputMaybe<Scalars['Int']>;
  marketSaleTotal_gt?: InputMaybe<Scalars['Int']>;
  marketSaleTotal_gte?: InputMaybe<Scalars['Int']>;
  marketSaleTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  marketSaleTotal_lt?: InputMaybe<Scalars['Int']>;
  marketSaleTotal_lte?: InputMaybe<Scalars['Int']>;
  marketSaleTotal_not?: InputMaybe<Scalars['Int']>;
  marketSaleTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nftBurnTotal?: InputMaybe<Scalars['Int']>;
  nftBurnTotal_gt?: InputMaybe<Scalars['Int']>;
  nftBurnTotal_gte?: InputMaybe<Scalars['Int']>;
  nftBurnTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  nftBurnTotal_lt?: InputMaybe<Scalars['Int']>;
  nftBurnTotal_lte?: InputMaybe<Scalars['Int']>;
  nftBurnTotal_not?: InputMaybe<Scalars['Int']>;
  nftBurnTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nftPayTotal?: InputMaybe<Scalars['Int']>;
  nftPayTotal_gt?: InputMaybe<Scalars['Int']>;
  nftPayTotal_gte?: InputMaybe<Scalars['Int']>;
  nftPayTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  nftPayTotal_lt?: InputMaybe<Scalars['Int']>;
  nftPayTotal_lte?: InputMaybe<Scalars['Int']>;
  nftPayTotal_not?: InputMaybe<Scalars['Int']>;
  nftPayTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nftTotal?: InputMaybe<Scalars['Int']>;
  nftTotal_gt?: InputMaybe<Scalars['Int']>;
  nftTotal_gte?: InputMaybe<Scalars['Int']>;
  nftTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  nftTotal_lt?: InputMaybe<Scalars['Int']>;
  nftTotal_lte?: InputMaybe<Scalars['Int']>;
  nftTotal_not?: InputMaybe<Scalars['Int']>;
  nftTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nftTransferTotal?: InputMaybe<Scalars['Int']>;
  nftTransferTotal_gt?: InputMaybe<Scalars['Int']>;
  nftTransferTotal_gte?: InputMaybe<Scalars['Int']>;
  nftTransferTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  nftTransferTotal_lt?: InputMaybe<Scalars['Int']>;
  nftTransferTotal_lte?: InputMaybe<Scalars['Int']>;
  nftTransferTotal_not?: InputMaybe<Scalars['Int']>;
  nftTransferTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionTotal?: InputMaybe<Scalars['Int']>;
  transactionTotal_gt?: InputMaybe<Scalars['Int']>;
  transactionTotal_gte?: InputMaybe<Scalars['Int']>;
  transactionTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionTotal_lt?: InputMaybe<Scalars['Int']>;
  transactionTotal_lte?: InputMaybe<Scalars['Int']>;
  transactionTotal_not?: InputMaybe<Scalars['Int']>;
  transactionTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Statistic_OrderBy {
  AccountTotal = 'accountTotal',
  Id = 'id',
  MarketRentNearFloor = 'marketRentNearFloor',
  MarketRentNearSum = 'marketRentNearSum',
  MarketRentNearTotal = 'marketRentNearTotal',
  MarketRentTotal = 'marketRentTotal',
  MarketSaleNearFloor = 'marketSaleNearFloor',
  MarketSaleNearSum = 'marketSaleNearSum',
  MarketSaleNearTotal = 'marketSaleNearTotal',
  MarketSaleTotal = 'marketSaleTotal',
  NftBurnTotal = 'nftBurnTotal',
  NftPayTotal = 'nftPayTotal',
  NftTotal = 'nftTotal',
  NftTransferTotal = 'nftTransferTotal',
  TransactionTotal = 'transactionTotal',
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  ftBalance?: Maybe<FtBalance>;
  ftBalances: Array<FtBalance>;
  marketRent?: Maybe<MarketRent>;
  marketRentCondition?: Maybe<MarketRentCondition>;
  marketRentConditions: Array<MarketRentCondition>;
  marketRents: Array<MarketRent>;
  marketSale?: Maybe<MarketSale>;
  marketSaleCondition?: Maybe<MarketSaleCondition>;
  marketSaleConditions: Array<MarketSaleCondition>;
  marketSales: Array<MarketSale>;
  statistic?: Maybe<Statistic>;
  statistics: Array<Statistic>;
  token?: Maybe<Token>;
  tokenMetadata: Array<TokenMetadata>;
  tokenRoyalties: Array<TokenRoyalty>;
  tokenRoyalty?: Maybe<TokenRoyalty>;
  tokens: Array<Token>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};

export type SubscriptionFtBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFtBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FtBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FtBalance_Filter>;
};

export type SubscriptionMarketRentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMarketRentConditionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMarketRentConditionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketRentCondition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketRentCondition_Filter>;
};

export type SubscriptionMarketRentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketRent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketRent_Filter>;
};

export type SubscriptionMarketSaleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMarketSaleConditionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMarketSaleConditionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketSaleCondition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketSaleCondition_Filter>;
};

export type SubscriptionMarketSalesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketSale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketSale_Filter>;
};

export type SubscriptionStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Statistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Statistic_Filter>;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenMetadata_Filter>;
};

export type SubscriptionTokenRoyaltiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenRoyalty_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenRoyalty_Filter>;
};

export type SubscriptionTokenRoyaltyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type Token = {
  __typename?: 'Token';
  bindToOwner?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['Int'];
  id: Scalars['ID'];
  owner: Account;
  ownerId: Scalars['String'];
  rarity?: Maybe<Scalars['Int']>;
  rent?: Maybe<MarketRent>;
  rentId?: Maybe<Scalars['ID']>;
  royalty: Array<TokenRoyalty>;
  sale?: Maybe<MarketSale>;
  saleId?: Maybe<Scalars['ID']>;
  tokenId: Scalars['String'];
  tokenMetadata: TokenMetadata;
  tokenMetadataId: Scalars['String'];
};

export type TokenRoyaltyArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenRoyalty_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenRoyalty_Filter>;
};

export type TokenMetadata = {
  __typename?: 'TokenMetadata';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tokenId: Scalars['String'];
};

export type TokenMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  media?: InputMaybe<Scalars['String']>;
  media_contains?: InputMaybe<Scalars['String']>;
  media_contains_nocase?: InputMaybe<Scalars['String']>;
  media_ends_with?: InputMaybe<Scalars['String']>;
  media_ends_with_nocase?: InputMaybe<Scalars['String']>;
  media_gt?: InputMaybe<Scalars['String']>;
  media_gte?: InputMaybe<Scalars['String']>;
  media_in?: InputMaybe<Array<Scalars['String']>>;
  media_lt?: InputMaybe<Scalars['String']>;
  media_lte?: InputMaybe<Scalars['String']>;
  media_not?: InputMaybe<Scalars['String']>;
  media_not_contains?: InputMaybe<Scalars['String']>;
  media_not_contains_nocase?: InputMaybe<Scalars['String']>;
  media_not_ends_with?: InputMaybe<Scalars['String']>;
  media_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  media_not_in?: InputMaybe<Array<Scalars['String']>>;
  media_not_starts_with?: InputMaybe<Scalars['String']>;
  media_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  media_starts_with?: InputMaybe<Scalars['String']>;
  media_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_contains?: InputMaybe<Scalars['String']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_gt?: InputMaybe<Scalars['String']>;
  tokenId_gte?: InputMaybe<Scalars['String']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_lt?: InputMaybe<Scalars['String']>;
  tokenId_lte?: InputMaybe<Scalars['String']>;
  tokenId_not?: InputMaybe<Scalars['String']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum TokenMetadata_OrderBy {
  Description = 'description',
  Id = 'id',
  Media = 'media',
  Title = 'title',
  TokenId = 'tokenId',
}

export type TokenRoyalty = {
  __typename?: 'TokenRoyalty';
  accountId: Scalars['String'];
  id: Scalars['ID'];
  token: Token;
  tokenId: Scalars['ID'];
  value: Scalars['Int'];
};

export type TokenRoyalty_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountId?: InputMaybe<Scalars['String']>;
  accountId_contains?: InputMaybe<Scalars['String']>;
  accountId_contains_nocase?: InputMaybe<Scalars['String']>;
  accountId_ends_with?: InputMaybe<Scalars['String']>;
  accountId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountId_gt?: InputMaybe<Scalars['String']>;
  accountId_gte?: InputMaybe<Scalars['String']>;
  accountId_in?: InputMaybe<Array<Scalars['String']>>;
  accountId_lt?: InputMaybe<Scalars['String']>;
  accountId_lte?: InputMaybe<Scalars['String']>;
  accountId_not?: InputMaybe<Scalars['String']>;
  accountId_not_contains?: InputMaybe<Scalars['String']>;
  accountId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountId_not_ends_with?: InputMaybe<Scalars['String']>;
  accountId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountId_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountId_not_starts_with?: InputMaybe<Scalars['String']>;
  accountId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountId_starts_with?: InputMaybe<Scalars['String']>;
  accountId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['ID']>;
  tokenId_gt?: InputMaybe<Scalars['ID']>;
  tokenId_gte?: InputMaybe<Scalars['ID']>;
  tokenId_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId_lt?: InputMaybe<Scalars['ID']>;
  tokenId_lte?: InputMaybe<Scalars['ID']>;
  tokenId_not?: InputMaybe<Scalars['ID']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token_?: InputMaybe<Token_Filter>;
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
  value?: InputMaybe<Scalars['Int']>;
  value_gt?: InputMaybe<Scalars['Int']>;
  value_gte?: InputMaybe<Scalars['Int']>;
  value_in?: InputMaybe<Array<Scalars['Int']>>;
  value_lt?: InputMaybe<Scalars['Int']>;
  value_lte?: InputMaybe<Scalars['Int']>;
  value_not?: InputMaybe<Scalars['Int']>;
  value_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum TokenRoyalty_OrderBy {
  AccountId = 'accountId',
  Id = 'id',
  Token = 'token',
  TokenId = 'tokenId',
  Value = 'value',
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  bindToOwner?: InputMaybe<Scalars['Boolean']>;
  bindToOwner_in?: InputMaybe<Array<Scalars['Boolean']>>;
  bindToOwner_not?: InputMaybe<Scalars['Boolean']>;
  bindToOwner_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['String']>;
  ownerId_contains?: InputMaybe<Scalars['String']>;
  ownerId_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerId_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_gt?: InputMaybe<Scalars['String']>;
  ownerId_gte?: InputMaybe<Scalars['String']>;
  ownerId_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_lt?: InputMaybe<Scalars['String']>;
  ownerId_lte?: InputMaybe<Scalars['String']>;
  ownerId_not?: InputMaybe<Scalars['String']>;
  ownerId_not_contains?: InputMaybe<Scalars['String']>;
  ownerId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_not_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rarity?: InputMaybe<Scalars['Int']>;
  rarity_gt?: InputMaybe<Scalars['Int']>;
  rarity_gte?: InputMaybe<Scalars['Int']>;
  rarity_in?: InputMaybe<Array<Scalars['Int']>>;
  rarity_lt?: InputMaybe<Scalars['Int']>;
  rarity_lte?: InputMaybe<Scalars['Int']>;
  rarity_not?: InputMaybe<Scalars['Int']>;
  rarity_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rent?: InputMaybe<Scalars['String']>;
  rentId?: InputMaybe<Scalars['ID']>;
  rentId_gt?: InputMaybe<Scalars['ID']>;
  rentId_gte?: InputMaybe<Scalars['ID']>;
  rentId_in?: InputMaybe<Array<Scalars['ID']>>;
  rentId_lt?: InputMaybe<Scalars['ID']>;
  rentId_lte?: InputMaybe<Scalars['ID']>;
  rentId_not?: InputMaybe<Scalars['ID']>;
  rentId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rent_?: InputMaybe<MarketRent_Filter>;
  rent_contains?: InputMaybe<Scalars['String']>;
  rent_contains_nocase?: InputMaybe<Scalars['String']>;
  rent_ends_with?: InputMaybe<Scalars['String']>;
  rent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rent_gt?: InputMaybe<Scalars['String']>;
  rent_gte?: InputMaybe<Scalars['String']>;
  rent_in?: InputMaybe<Array<Scalars['String']>>;
  rent_lt?: InputMaybe<Scalars['String']>;
  rent_lte?: InputMaybe<Scalars['String']>;
  rent_not?: InputMaybe<Scalars['String']>;
  rent_not_contains?: InputMaybe<Scalars['String']>;
  rent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rent_not_ends_with?: InputMaybe<Scalars['String']>;
  rent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rent_not_in?: InputMaybe<Array<Scalars['String']>>;
  rent_not_starts_with?: InputMaybe<Scalars['String']>;
  rent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rent_starts_with?: InputMaybe<Scalars['String']>;
  rent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  royalty_?: InputMaybe<TokenRoyalty_Filter>;
  sale?: InputMaybe<Scalars['String']>;
  saleId?: InputMaybe<Scalars['ID']>;
  saleId_gt?: InputMaybe<Scalars['ID']>;
  saleId_gte?: InputMaybe<Scalars['ID']>;
  saleId_in?: InputMaybe<Array<Scalars['ID']>>;
  saleId_lt?: InputMaybe<Scalars['ID']>;
  saleId_lte?: InputMaybe<Scalars['ID']>;
  saleId_not?: InputMaybe<Scalars['ID']>;
  saleId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sale_?: InputMaybe<MarketSale_Filter>;
  sale_contains?: InputMaybe<Scalars['String']>;
  sale_contains_nocase?: InputMaybe<Scalars['String']>;
  sale_ends_with?: InputMaybe<Scalars['String']>;
  sale_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sale_gt?: InputMaybe<Scalars['String']>;
  sale_gte?: InputMaybe<Scalars['String']>;
  sale_in?: InputMaybe<Array<Scalars['String']>>;
  sale_lt?: InputMaybe<Scalars['String']>;
  sale_lte?: InputMaybe<Scalars['String']>;
  sale_not?: InputMaybe<Scalars['String']>;
  sale_not_contains?: InputMaybe<Scalars['String']>;
  sale_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sale_not_ends_with?: InputMaybe<Scalars['String']>;
  sale_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sale_not_in?: InputMaybe<Array<Scalars['String']>>;
  sale_not_starts_with?: InputMaybe<Scalars['String']>;
  sale_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sale_starts_with?: InputMaybe<Scalars['String']>;
  sale_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_contains?: InputMaybe<Scalars['String']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_gt?: InputMaybe<Scalars['String']>;
  tokenId_gte?: InputMaybe<Scalars['String']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_lt?: InputMaybe<Scalars['String']>;
  tokenId_lte?: InputMaybe<Scalars['String']>;
  tokenId_not?: InputMaybe<Scalars['String']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenMetadata?: InputMaybe<Scalars['String']>;
  tokenMetadataId?: InputMaybe<Scalars['String']>;
  tokenMetadataId_contains?: InputMaybe<Scalars['String']>;
  tokenMetadataId_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenMetadataId_ends_with?: InputMaybe<Scalars['String']>;
  tokenMetadataId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenMetadataId_gt?: InputMaybe<Scalars['String']>;
  tokenMetadataId_gte?: InputMaybe<Scalars['String']>;
  tokenMetadataId_in?: InputMaybe<Array<Scalars['String']>>;
  tokenMetadataId_lt?: InputMaybe<Scalars['String']>;
  tokenMetadataId_lte?: InputMaybe<Scalars['String']>;
  tokenMetadataId_not?: InputMaybe<Scalars['String']>;
  tokenMetadataId_not_contains?: InputMaybe<Scalars['String']>;
  tokenMetadataId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenMetadataId_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenMetadataId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenMetadataId_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenMetadataId_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenMetadataId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenMetadataId_starts_with?: InputMaybe<Scalars['String']>;
  tokenMetadataId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenMetadata_?: InputMaybe<TokenMetadata_Filter>;
  tokenMetadata_contains?: InputMaybe<Scalars['String']>;
  tokenMetadata_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenMetadata_ends_with?: InputMaybe<Scalars['String']>;
  tokenMetadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenMetadata_gt?: InputMaybe<Scalars['String']>;
  tokenMetadata_gte?: InputMaybe<Scalars['String']>;
  tokenMetadata_in?: InputMaybe<Array<Scalars['String']>>;
  tokenMetadata_lt?: InputMaybe<Scalars['String']>;
  tokenMetadata_lte?: InputMaybe<Scalars['String']>;
  tokenMetadata_not?: InputMaybe<Scalars['String']>;
  tokenMetadata_not_contains?: InputMaybe<Scalars['String']>;
  tokenMetadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenMetadata_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenMetadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenMetadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenMetadata_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenMetadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenMetadata_starts_with?: InputMaybe<Scalars['String']>;
  tokenMetadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Token_OrderBy {
  BindToOwner = 'bindToOwner',
  CreatedAt = 'createdAt',
  Id = 'id',
  Owner = 'owner',
  OwnerId = 'ownerId',
  Rarity = 'rarity',
  Rent = 'rent',
  RentId = 'rentId',
  Royalty = 'royalty',
  Sale = 'sale',
  SaleId = 'saleId',
  TokenId = 'tokenId',
  TokenMetadata = 'tokenMetadata',
  TokenMetadataId = 'tokenMetadataId',
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
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
  Deny = 'deny',
}
