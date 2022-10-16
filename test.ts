import { CultistSdk } from "./src";
import { createClient } from "urql";

const API_URL = "https://api.thegraph.com/subgraphs/name/muzikanto/cultist";
const client = createClient({
    url: API_URL,
});
const sdk = new CultistSdk(
    (query, variables = {}): Promise<any> =>
        client
            .query(query, variables)
            .toPromise()
            .then((res) => {
                if (res.error) {
                    console.log(res.error);
                    throw new Error(res.error.message);
                }

                return res.data;
            })
);

// sdk.statistic().then(console.log);
// sdk.nft.token("1").then(console.log);
// sdk.nft.tokens({ limit: 2, offset: 0, rarity: 3 }).then(console.log);
sdk.marketSale.marketSales({ limit: 2, offset: 0, rarity: 3 }).then(console.log);
sdk.marketRent.marketRents({ limit: 2, offset: 0, rarity: 3 }).then(console.log);
