import { ICultistSdkFetch } from "./index";
import { buildQueryWhere } from "./utils";

export const tokenFragment = `fragment Token on Token {
  id
  tokenMetadata{
    title
    media
    description
  }
  bindToOwner
  rarity
  ownerId
  royalty {
    accountId
    value
  }
}`;
const tokenQuery = `query($id: ID!) {
  token(id: $id) {
    ...Token
  }
}
${tokenFragment}`;
const tokensGql = ({ ownerId, rarity }: { ownerId?: string; rarity?: number }) => {
    const where = buildQueryWhere({ ownerId, rarity });

    return `query($limit: Int!, $offset: Int!) {
  tokens(first: $limit, skip: $offset, where: ${where}) {
    ...Token
  }
}
${tokenFragment}`;
};

export class CultistNftSdk {
    protected fetch: ICultistSdkFetch;

    constructor(fetch: ICultistSdkFetch) {
        this.fetch = fetch;
    }

    public async token(id: string) {
        return this.fetch(tokenQuery, { id }).then((res) => res.token);
    }

    public async tokens(variables: {
        limit?: number;
        offset?: number;
        ownerId?: string;
        rarity?: number;
    }) {
        return this.fetch(tokensGql(variables), {
            limit: variables.limit,
            offset: variables.offset,
            where: { rarity: variables.rarity, ownerId: variables.ownerId },
        }).then((res) => res.tokens);
    }
}
