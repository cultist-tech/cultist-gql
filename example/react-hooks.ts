import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
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

/**
 * __useMarketSaleQuery__
 *
 * To run a query within a React component, call `useMarketSaleQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketSaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketSaleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMarketSaleQuery(
  baseOptions: Apollo.QueryHookOptions<Types.MarketSaleQuery, Types.MarketSaleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.MarketSaleQuery, Types.MarketSaleQueryVariables>(MarketSaleDocument, options);
}
export function useMarketSaleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.MarketSaleQuery, Types.MarketSaleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.MarketSaleQuery, Types.MarketSaleQueryVariables>(MarketSaleDocument, options);
}
export type MarketSaleQueryHookResult = ReturnType<typeof useMarketSaleQuery>;
export type MarketSaleLazyQueryHookResult = ReturnType<typeof useMarketSaleLazyQuery>;
export type MarketSaleQueryResult = Apollo.QueryResult<Types.MarketSaleQuery, Types.MarketSaleQueryVariables>;
export const MarketSalesDocument = gql`
  query marketSales($limit: Int!, $offset: Int!, $where: MarketSale_filter!) {
    marketSales(first: $limit, skip: $offset, where: $where) {
      ...MarketSale
    }
  }
  ${MarketSaleFragmentDoc}
`;

/**
 * __useMarketSalesQuery__
 *
 * To run a query within a React component, call `useMarketSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketSalesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMarketSalesQuery(
  baseOptions: Apollo.QueryHookOptions<Types.MarketSalesQuery, Types.MarketSalesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.MarketSalesQuery, Types.MarketSalesQueryVariables>(MarketSalesDocument, options);
}
export function useMarketSalesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.MarketSalesQuery, Types.MarketSalesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.MarketSalesQuery, Types.MarketSalesQueryVariables>(MarketSalesDocument, options);
}
export type MarketSalesQueryHookResult = ReturnType<typeof useMarketSalesQuery>;
export type MarketSalesLazyQueryHookResult = ReturnType<typeof useMarketSalesLazyQuery>;
export type MarketSalesQueryResult = Apollo.QueryResult<Types.MarketSalesQuery, Types.MarketSalesQueryVariables>;
export const TokenDocument = gql`
  query token($id: ID!) {
    token(id: $id) {
      ...Token
    }
  }
  ${TokenFragmentDoc}
`;

/**
 * __useTokenQuery__
 *
 * To run a query within a React component, call `useTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTokenQuery(baseOptions: Apollo.QueryHookOptions<Types.TokenQuery, Types.TokenQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.TokenQuery, Types.TokenQueryVariables>(TokenDocument, options);
}
export function useTokenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.TokenQuery, Types.TokenQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.TokenQuery, Types.TokenQueryVariables>(TokenDocument, options);
}
export type TokenQueryHookResult = ReturnType<typeof useTokenQuery>;
export type TokenLazyQueryHookResult = ReturnType<typeof useTokenLazyQuery>;
export type TokenQueryResult = Apollo.QueryResult<Types.TokenQuery, Types.TokenQueryVariables>;
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

/**
 * __useTokensQuery__
 *
 * To run a query within a React component, call `useTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokensQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *   },
 * });
 */
export function useTokensQuery(baseOptions: Apollo.QueryHookOptions<Types.TokensQuery, Types.TokensQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.TokensQuery, Types.TokensQueryVariables>(TokensDocument, options);
}
export function useTokensLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.TokensQuery, Types.TokensQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.TokensQuery, Types.TokensQueryVariables>(TokensDocument, options);
}
export type TokensQueryHookResult = ReturnType<typeof useTokensQuery>;
export type TokensLazyQueryHookResult = ReturnType<typeof useTokensLazyQuery>;
export type TokensQueryResult = Apollo.QueryResult<Types.TokensQuery, Types.TokensQueryVariables>;
export const MarketRentDocument = gql`
  query marketRent($id: ID!) {
    marketRent(id: $id) {
      ...MarketRent
    }
  }
  ${MarketRentFragmentDoc}
`;

/**
 * __useMarketRentQuery__
 *
 * To run a query within a React component, call `useMarketRentQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketRentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketRentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMarketRentQuery(
  baseOptions: Apollo.QueryHookOptions<Types.MarketRentQuery, Types.MarketRentQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.MarketRentQuery, Types.MarketRentQueryVariables>(MarketRentDocument, options);
}
export function useMarketRentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.MarketRentQuery, Types.MarketRentQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.MarketRentQuery, Types.MarketRentQueryVariables>(MarketRentDocument, options);
}
export type MarketRentQueryHookResult = ReturnType<typeof useMarketRentQuery>;
export type MarketRentLazyQueryHookResult = ReturnType<typeof useMarketRentLazyQuery>;
export type MarketRentQueryResult = Apollo.QueryResult<Types.MarketRentQuery, Types.MarketRentQueryVariables>;
export const MarketRentsDocument = gql`
  query marketRents($limit: Int!, $offset: Int!, $where: MarketRent_filter!) {
    marketRents(first: $limit, skip: $offset, where: $where) {
      ...MarketRent
    }
  }
  ${MarketRentFragmentDoc}
`;

/**
 * __useMarketRentsQuery__
 *
 * To run a query within a React component, call `useMarketRentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketRentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketRentsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMarketRentsQuery(
  baseOptions: Apollo.QueryHookOptions<Types.MarketRentsQuery, Types.MarketRentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.MarketRentsQuery, Types.MarketRentsQueryVariables>(MarketRentsDocument, options);
}
export function useMarketRentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.MarketRentsQuery, Types.MarketRentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.MarketRentsQuery, Types.MarketRentsQueryVariables>(MarketRentsDocument, options);
}
export type MarketRentsQueryHookResult = ReturnType<typeof useMarketRentsQuery>;
export type MarketRentsLazyQueryHookResult = ReturnType<typeof useMarketRentsLazyQuery>;
export type MarketRentsQueryResult = Apollo.QueryResult<Types.MarketRentsQuery, Types.MarketRentsQueryVariables>;
export const StatisticDocument = gql`
  query statistic {
    statistic(id: "_") {
      ...Statistic
    }
  }
  ${StatisticFragmentDoc}
`;

/**
 * __useStatisticQuery__
 *
 * To run a query within a React component, call `useStatisticQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatisticQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatisticQuery({
 *   variables: {
 *   },
 * });
 */
export function useStatisticQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.StatisticQuery, Types.StatisticQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.StatisticQuery, Types.StatisticQueryVariables>(StatisticDocument, options);
}
export function useStatisticLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.StatisticQuery, Types.StatisticQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.StatisticQuery, Types.StatisticQueryVariables>(StatisticDocument, options);
}
export type StatisticQueryHookResult = ReturnType<typeof useStatisticQuery>;
export type StatisticLazyQueryHookResult = ReturnType<typeof useStatisticLazyQuery>;
export type StatisticQueryResult = Apollo.QueryResult<Types.StatisticQuery, Types.StatisticQueryVariables>;
