import { CultistSdk } from "./src";
import { createClient } from "urql";

const API_URL = "https://api.thegraph.com/subgraphs/name/muzikanto/cultist";
const client = createClient({
    url: API_URL,
});
const sdk = new CultistSdk((query, variables = {}) =>
    client
        .query(query, variables)
        .toPromise()
        .then((res) => res.data)
);

sdk.statistic().then(console.log);
sdk.nft.token("1").then(console.log);
