import { ICultistSdkFetch } from "./index";
import { buildQueryWhere } from "./utils";
import { tokenFragment } from "./nft";

const marketRentFragment = `fragment MarketRent on MarketRent {
  id
  ownerId
  contractId
  tokenId
  createdAt
  token { ...Token }
  conditions { price ftTokenId }
}

${tokenFragment}`;
const marketRentQuery = `query($id: ID!) {
  marketRent(id: $id) {
    ...MarketRent
  }
}
${marketRentFragment}`;
const marketRentsGql = ({ ownerId, rarity }: { ownerId?: string; rarity?: number }) => {
    const where = buildQueryWhere({ ownerId, token_: { rarity } });

    return `query($limit: Int!, $offset: Int!) {
  marketRents(first: $limit, skip: $offset, where: ${where}) {
    ...MarketRent
  }
}
${marketRentFragment}`;
};

export class CultistMarketRentSdk {
    protected fetch: ICultistSdkFetch;

    constructor(fetch: ICultistSdkFetch) {
        this.fetch = fetch;
    }

    public async marketRent(id: string) {
        return this.fetch(marketRentQuery, { id }).then((res) => res.marketRent);
    }

    public async marketRents(variables: {
        limit?: number;
        offset?: number;
        ownerId?: string;
        rarity?: number;
    }) {
        return this.fetch(marketRentsGql(variables), {
            limit: variables.limit,
            offset: variables.offset,
        }).then((res) => res.marketRents);
    }
}
