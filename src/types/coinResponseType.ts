import { coin } from "./coinType"
export type CoinResponse =
{
    data: coin[],
    info: {
      coins_num: number,
      time: number
    }
  }              