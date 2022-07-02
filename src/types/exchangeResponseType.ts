import { Exchange } from "./exchangeType"

export type ExchangeResponse =
{
    data: Exchange[],
    info: {
      coins_num: number,
      time: number
    }
  }              