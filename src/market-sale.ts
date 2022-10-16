import { ICultistSdkFetch } from "./index";
import { buildQueryWhere } from "./utils";
import { tokenFragment } from "./nft";

const marketSaleFragment = `fragment MarketSale on MarketSale {
  id
  ownerId
  contractId
  tokenId
  createdAt
  token { ...Token }
  conditions { price ftTokenId }
}

${tokenFragment}`;
const marketSaleQuery = `query($id: ID!) {
  marketSale(id: $id) {
    ...MarketSale
  }
}
${marketSaleFragment}`;
const marketSalesGql = ({ ownerId, rarity }: { ownerId?: string; rarity?: number }) => {
    const where = buildQueryWhere({ ownerId, token_: { rarity } });

    return `query($limit: Int!, $offset: Int!) {
  marketSales(first: $limit, skip: $offset, where: ${where}) {
    ...MarketSale
  }
}
${marketSaleFragment}`;
};

export class CultistMarketSaleSdk {
    protected fetch: ICultistSdkFetch;

    constructor(fetch: ICultistSdkFetch) {
        this.fetch = fetch;
    }

    public async marketSale(id: string) {
        return this.fetch(marketSaleQuery, { id }).then((res) => res.marketSale);
    }

    public async marketSales(variables: {
        limit?: number;
        offset?: number;
        ownerId?: string;
        rarity?: number;
    }) {
        return this.fetch(marketSalesGql(variables), {
            limit: variables.limit,
            offset: variables.offset,
        }).then((res) => res.marketSales);
    }
}
