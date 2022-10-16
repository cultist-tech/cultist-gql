import * as Types from './schemas';

import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
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

export const TokenPartFragmentDoc = gql`
  fragment TokenPart on Token {
    id
    tokenId
    ownerId
    bindToOwner
    rarity
    tokenMetadata {
      title
      media
      description
    }
    royalty {
      accountId
      value
    }
  }
`;
export const MarketSaleFragmentDoc = gql`
  fragment MarketSale on MarketSale {
    id
    ownerId
    contractId
    tokenId
    createdAt
    token {
      ...TokenPart
    }
    conditions {
      price
      ftTokenId
    }
  }
  ${TokenPartFragmentDoc}
`;
export const MarketSalePartFragmentDoc = gql`
  fragment MarketSalePart on MarketSale {
    id
    ownerId
    contractId
    tokenId
    createdAt
    conditions {
      price
      ftTokenId
    }
  }
`;
export const MarketRentPartFragmentDoc = gql`
  fragment MarketRentPart on MarketRent {
    id
    ownerId
    contractId
    tokenId
    createdAt
    conditions {
      price
      ftTokenId
    }
  }
`;
export const TokenFragmentDoc = gql`
  fragment Token on Token {
    id
    tokenId
    ownerId
    bindToOwner
    rarity
    tokenMetadata {
      title
      media
      description
    }
    royalty {
      accountId
      value
    }
    sale {
      ...MarketSalePart
    }
    rent {
      ...MarketRentPart
    }
  }
  ${MarketSalePartFragmentDoc}
  ${MarketRentPartFragmentDoc}
`;
export const MarketRentFragmentDoc = gql`
  fragment MarketRent on MarketRent {
    id
    ownerId
    contractId
    tokenId
    createdAt
    token {
      ...TokenPart
    }
    conditions {
      price
      ftTokenId
    }
  }
  ${TokenPartFragmentDoc}
`;
export const StatisticFragmentDoc = gql`
  fragment Statistic on Statistic {
    id
    nftTransferTotal
    nftPayTotal
    nftBurnTotal
    nftTotal
    marketSaleTotal
    marketSaleNearSum
    marketSaleNearTotal
    marketRentTotal
    marketRentNearSum
    marketRentNearTotal
    accountTotal
  }
`;
export const MarketSaleDocument = gql`
  query marketSale($id: ID!) {
    marketSale(id: $id) {
      ...MarketSale
    }
  }
  ${MarketSaleFragmentDoc}
`;
export const MarketSalesDocument = gql`
  query marketSales($limit: Int!, $offset: Int!, $where: MarketSale_filter!) {
    marketSales(first: $limit, skip: $offset, where: $where) {
      ...MarketSale
    }
  }
  ${MarketSaleFragmentDoc}
`;
export const TokenDocument = gql`
  query token($id: ID!) {
    token(id: $id) {
      ...Token
    }
  }
  ${TokenFragmentDoc}
`;
export const TokensDocument = gql`
  query tokens(
    $limit: Int!
    $offset: Int!
    $where: Token_filter!
    $orderBy: Token_orderBy!
    $orderDirection: OrderDirection!
  ) {
    tokens(first: $limit, skip: $offset, where: $where, orderBy: $orderBy, orderDirection: $orderDirection) {
      ...Token
    }
  }
  ${TokenFragmentDoc}
`;
export const MarketRentDocument = gql`
  query marketRent($id: ID!) {
    marketRent(id: $id) {
      ...MarketRent
    }
  }
  ${MarketRentFragmentDoc}
`;
export const MarketRentsDocument = gql`
  query marketRents($limit: Int!, $offset: Int!, $where: MarketRent_filter!) {
    marketRents(first: $limit, skip: $offset, where: $where) {
      ...MarketRent
    }
  }
  ${MarketRentFragmentDoc}
`;
export const StatisticDocument = gql`
  query statistic {
    statistic(id: "_") {
      ...Statistic
    }
  }
  ${StatisticFragmentDoc}
`;
export type Requester<C = {}, E = unknown> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C
) => Promise<R> | AsyncIterable<R>;
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    marketSale(variables: MarketSaleQueryVariables, options?: C): Promise<MarketSaleQuery> {
      return requester<MarketSaleQuery, MarketSaleQueryVariables>(
        MarketSaleDocument,
        variables,
        options
      ) as Promise<MarketSaleQuery>;
    },
    marketSales(variables: MarketSalesQueryVariables, options?: C): Promise<MarketSalesQuery> {
      return requester<MarketSalesQuery, MarketSalesQueryVariables>(
        MarketSalesDocument,
        variables,
        options
      ) as Promise<MarketSalesQuery>;
    },
    token(variables: TokenQueryVariables, options?: C): Promise<TokenQuery> {
      return requester<TokenQuery, TokenQueryVariables>(TokenDocument, variables, options) as Promise<TokenQuery>;
    },
    tokens(variables: TokensQueryVariables, options?: C): Promise<TokensQuery> {
      return requester<TokensQuery, TokensQueryVariables>(TokensDocument, variables, options) as Promise<TokensQuery>;
    },
    marketRent(variables: MarketRentQueryVariables, options?: C): Promise<MarketRentQuery> {
      return requester<MarketRentQuery, MarketRentQueryVariables>(
        MarketRentDocument,
        variables,
        options
      ) as Promise<MarketRentQuery>;
    },
    marketRents(variables: MarketRentsQueryVariables, options?: C): Promise<MarketRentsQuery> {
      return requester<MarketRentsQuery, MarketRentsQueryVariables>(
        MarketRentsDocument,
        variables,
        options
      ) as Promise<MarketRentsQuery>;
    },
    statistic(variables?: StatisticQueryVariables, options?: C): Promise<StatisticQuery> {
      return requester<StatisticQuery, StatisticQueryVariables>(
        StatisticDocument,
        variables,
        options
      ) as Promise<StatisticQuery>;
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
