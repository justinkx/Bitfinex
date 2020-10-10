import { createSelector } from "reselect";

const getTicker = (state) => state.ticker;
const getOrderBook = (state) => state.orderBook;
const getTrades = (state) => state.trades;
export const tickerSelector = createSelector([getTicker], (ticker) => ticker);
export const orderBookSelector = createSelector(
  [getOrderBook],
  (orderBook) => orderBook
);
export const tradesSelector = createSelector([getTrades], (trades) => trades);
