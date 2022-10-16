import * as Types from './schemas';

export type MarketSaleFragment = {
  __typename?: 'MarketSale';
  id: string;
  ownerId: string;
  contractId: string;
  tokenId: string;
  createdAt: number;
  token: {
    __typename?: 'Token';
    id: string;
    tokenId: string;
    ownerId: string;
    bindToOwner?: boolean | null;
    rarity?: number | null;
    tokenMetadata: {
      __typename?: 'TokenMetadata';
      title?: string | null;
      media?: string | null;
      description?: string | null;
    };
    royalty: Array<{ __typename?: 'TokenRoyalty'; accountId: string; value: number }>;
  };
  conditions: Array<{ __typename?: 'MarketSaleCondition'; price: string; ftTokenId: string }>;
};

export type MarketSalePartFragment = {
  __typename?: 'MarketSale';
  id: string;
  ownerId: string;
  contractId: string;
  tokenId: string;
  createdAt: number;
  conditions: Array<{ __typename?: 'MarketSaleCondition'; price: string; ftTokenId: string }>;
};

export type MarketSaleQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type MarketSaleQuery = {
  __typename?: 'Query';
  marketSale?: {
    __typename?: 'MarketSale';
    id: string;
    ownerId: string;
    contractId: string;
    tokenId: string;
    createdAt: number;
    token: {
      __typename?: 'Token';
      id: string;
      tokenId: string;
      ownerId: string;
      bindToOwner?: boolean | null;
      rarity?: number | null;
      tokenMetadata: {
        __typename?: 'TokenMetadata';
        title?: string | null;
        media?: string | null;
        description?: string | null;
      };
      royalty: Array<{ __typename?: 'TokenRoyalty'; accountId: string; value: number }>;
    };
    conditions: Array<{ __typename?: 'MarketSaleCondition'; price: string; ftTokenId: string }>;
  } | null;
};

export type MarketSalesQueryVariables = Types.Exact<{
  limit: Types.Scalars['Int'];
  offset: Types.Scalars['Int'];
  where: Types.MarketSale_Filter;
}>;

export type MarketSalesQuery = {
  __typename?: 'Query';
  marketSales: Array<{
    __typename?: 'MarketSale';
    id: string;
    ownerId: string;
    contractId: string;
    tokenId: string;
    createdAt: number;
    token: {
      __typename?: 'Token';
      id: string;
      tokenId: string;
      ownerId: string;
      bindToOwner?: boolean | null;
      rarity?: number | null;
      tokenMetadata: {
        __typename?: 'TokenMetadata';
        title?: string | null;
        media?: string | null;
        description?: string | null;
      };
      royalty: Array<{ __typename?: 'TokenRoyalty'; accountId: string; value: number }>;
    };
    conditions: Array<{ __typename?: 'MarketSaleCondition'; price: string; ftTokenId: string }>;
  }>;
};

export type TokenFragment = {
  __typename?: 'Token';
  id: string;
  tokenId: string;
  ownerId: string;
  bindToOwner?: boolean | null;
  rarity?: number | null;
  tokenMetadata: {
    __typename?: 'TokenMetadata';
    title?: string | null;
    media?: string | null;
    description?: string | null;
  };
  royalty: Array<{ __typename?: 'TokenRoyalty'; accountId: string; value: number }>;
  sale?: {
    __typename?: 'MarketSale';
    id: string;
    ownerId: string;
    contractId: string;
    tokenId: string;
    createdAt: number;
    conditions: Array<{ __typename?: 'MarketSaleCondition'; price: string; ftTokenId: string }>;
  } | null;
  rent?: {
    __typename?: 'MarketRent';
    id: string;
    ownerId: string;
    contractId: string;
    tokenId: string;
    createdAt: number;
    conditions: Array<{ __typename?: 'MarketRentCondition'; price: string; ftTokenId: string }>;
  } | null;
};

export type TokenPartFragment = {
  __typename?: 'Token';
  id: string;
  tokenId: string;
  ownerId: string;
  bindToOwner?: boolean | null;
  rarity?: number | null;
  tokenMetadata: {
    __typename?: 'TokenMetadata';
    title?: string | null;
    media?: string | null;
    description?: string | null;
  };
  royalty: Array<{ __typename?: 'TokenRoyalty'; accountId: string; value: number }>;
};

export type TokenQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type TokenQuery = {
  __typename?: 'Query';
  token?: {
    __typename?: 'Token';
    id: string;
    tokenId: string;
    ownerId: string;
    bindToOwner?: boolean | null;
    rarity?: number | null;
    tokenMetadata: {
      __typename?: 'TokenMetadata';
      title?: string | null;
      media?: string | null;
      description?: string | null;
    };
    royalty: Array<{ __typename?: 'TokenRoyalty'; accountId: string; value: number }>;
    sale?: {
      __typename?: 'MarketSale';
      id: string;
      ownerId: string;
      contractId: string;
      tokenId: string;
      createdAt: number;
      conditions: Array<{ __typename?: 'MarketSaleCondition'; price: string; ftTokenId: string }>;
    } | null;
    rent?: {
      __typename?: 'MarketRent';
      id: string;
      ownerId: string;
      contractId: string;
      tokenId: string;
      createdAt: number;
      conditions: Array<{ __typename?: 'MarketRentCondition'; price: string; ftTokenId: string }>;
    } | null;
  } | null;
};

export type TokensQueryVariables = Types.Exact<{
  limit: Types.Scalars['Int'];
  offset: Types.Scalars['Int'];
  where: Types.Token_Filter;
  orderBy: Types.Token_OrderBy;
  orderDirection: Types.OrderDirection;
}>;

export type TokensQuery = {
  __typename?: 'Query';
  tokens: Array<{
    __typename?: 'Token';
    id: string;
    tokenId: string;
    ownerId: string;
    bindToOwner?: boolean | null;
    rarity?: number | null;
    tokenMetadata: {
      __typename?: 'TokenMetadata';
      title?: string | null;
      media?: string | null;
      description?: string | null;
    };
    royalty: Array<{ __typename?: 'TokenRoyalty'; accountId: string; value: number }>;
    sale?: {
      __typename?: 'MarketSale';
      id: string;
      ownerId: string;
      contractId: string;
      tokenId: string;
      createdAt: number;
      conditions: Array<{ __typename?: 'MarketSaleCondition'; price: string; ftTokenId: string }>;
    } | null;
    rent?: {
      __typename?: 'MarketRent';
      id: string;
      ownerId: string;
      contractId: string;
      tokenId: string;
      createdAt: number;
      conditions: Array<{ __typename?: 'MarketRentCondition'; price: string; ftTokenId: string }>;
    } | null;
  }>;
};

export type MarketRentPartFragment = {
  __typename?: 'MarketRent';
  id: string;
  ownerId: string;
  contractId: string;
  tokenId: string;
  createdAt: number;
  conditions: Array<{ __typename?: 'MarketRentCondition'; price: string; ftTokenId: string }>;
};

export type MarketRentFragment = {
  __typename?: 'MarketRent';
  id: string;
  ownerId: string;
  contractId: string;
  tokenId: string;
  createdAt: number;
  token: {
    __typename?: 'Token';
    id: string;
    tokenId: string;
    ownerId: string;
    bindToOwner?: boolean | null;
    rarity?: number | null;
    tokenMetadata: {
      __typename?: 'TokenMetadata';
      title?: string | null;
      media?: string | null;
      description?: string | null;
    };
    royalty: Array<{ __typename?: 'TokenRoyalty'; accountId: string; value: number }>;
  };
  conditions: Array<{ __typename?: 'MarketRentCondition'; price: string; ftTokenId: string }>;
};

export type MarketRentQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type MarketRentQuery = {
  __typename?: 'Query';
  marketRent?: {
    __typename?: 'MarketRent';
    id: string;
    ownerId: string;
    contractId: string;
    tokenId: string;
    createdAt: number;
    token: {
      __typename?: 'Token';
      id: string;
      tokenId: string;
      ownerId: string;
      bindToOwner?: boolean | null;
      rarity?: number | null;
      tokenMetadata: {
        __typename?: 'TokenMetadata';
        title?: string | null;
        media?: string | null;
        description?: string | null;
      };
      royalty: Array<{ __typename?: 'TokenRoyalty'; accountId: string; value: number }>;
    };
    conditions: Array<{ __typename?: 'MarketRentCondition'; price: string; ftTokenId: string }>;
  } | null;
};

export type MarketRentsQueryVariables = Types.Exact<{
  limit: Types.Scalars['Int'];
  offset: Types.Scalars['Int'];
  where: Types.MarketRent_Filter;
}>;

export type MarketRentsQuery = {
  __typename?: 'Query';
  marketRents: Array<{
    __typename?: 'MarketRent';
    id: string;
    ownerId: string;
    contractId: string;
    tokenId: string;
    createdAt: number;
    token: {
      __typename?: 'Token';
      id: string;
      tokenId: string;
      ownerId: string;
      bindToOwner?: boolean | null;
      rarity?: number | null;
      tokenMetadata: {
        __typename?: 'TokenMetadata';
        title?: string | null;
        media?: string | null;
        description?: string | null;
      };
      royalty: Array<{ __typename?: 'TokenRoyalty'; accountId: string; value: number }>;
    };
    conditions: Array<{ __typename?: 'MarketRentCondition'; price: string; ftTokenId: string }>;
  }>;
};

export type StatisticFragment = {
  __typename?: 'Statistic';
  id: string;
  nftTransferTotal: number;
  nftPayTotal: number;
  nftBurnTotal: number;
  nftTotal: number;
  marketSaleTotal: number;
  marketSaleNearSum: string;
  marketSaleNearTotal: number;
  marketRentTotal: number;
  marketRentNearSum: string;
  marketRentNearTotal: number;
  accountTotal: number;
};

export type StatisticQueryVariables = Types.Exact<{ [key: string]: never }>;

export type StatisticQuery = {
  __typename?: 'Query';
  statistic?: {
    __typename?: 'Statistic';
    id: string;
    nftTransferTotal: number;
    nftPayTotal: number;
    nftBurnTotal: number;
    nftTotal: number;
    marketSaleTotal: number;
    marketSaleNearSum: string;
    marketSaleNearTotal: number;
    marketRentTotal: number;
    marketRentNearSum: string;
    marketRentNearTotal: number;
    accountTotal: number;
  } | null;
};
