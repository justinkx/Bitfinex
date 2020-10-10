import * as tradeTypes from "./Types";

export const saveTicker = (ticker) => ({
  type: tradeTypes.SAVE_TICKER,
  ticker,
});

export const saveOrderBook = (orderBook) => ({
  type: tradeTypes.SAVE_ORDER_BOOK,
  orderBook,
});
export const saveTrades = (trades) => ({
  type: tradeTypes.SAVE_TRADES,
  trades,
});
