import { ICultistSdkFetch } from "./index";

const tokenGql = `query($id: ID!) {
  token(id: $id) {
    id
    tokenMetadata{
      title
      media
      # description
    }
    bindToOwner
    rarity
    ownerId
    royalty {
      accountId
      value
    }
  }
}`;

export class CultistNftSdk {
    protected fetch: ICultistSdkFetch;

    constructor(fetch: ICultistSdkFetch) {
        this.fetch = fetch;
    }

    public async token(id: string) {
        return this.fetch(tokenGql, { id }).then((res) => res.token);
    }
}
