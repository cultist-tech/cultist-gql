import { CultistNftSdk } from "./nft";
import { CultistMarketSaleSdk } from "./market-sale";
import { CultistMarketRentSdk } from "./market-rent";

const statisticGql = `{
  statistic(id: "_") {
    id
    nftTransferTotal
    nftPayTotal
    nftBurnTotal
    nftTotal
    marketSaleTotal
    marketSaleNearSum
    marketSaleNearFloor
    marketSaleNearTotal
    marketRentTotal
    marketRentNearSum
    marketRentNearFloor
    marketRentNearTotal
    accountTotal
  }
}`;

export type ICultistSdkFetch = (query: string, variables?: object) => Promise<any>;

export class CultistSdk {
    protected fetch: ICultistSdkFetch;
    public nft: CultistNftSdk;
    public marketSale: CultistMarketSaleSdk;
    public marketRent: CultistMarketRentSdk;

    constructor(fetch: ICultistSdkFetch) {
        this.fetch = fetch;
        this.nft = new CultistNftSdk(fetch);
        this.marketSale = new CultistMarketSaleSdk(fetch);
        this.marketRent = new CultistMarketRentSdk(fetch);
    }

    public async statistic() {
        return this.fetch(statisticGql, {}).then((res) => res.statistic);
    }
}
