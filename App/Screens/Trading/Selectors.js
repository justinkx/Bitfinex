import { createSelector } from "reselect";

const getTicker = (state) => state.ticker;
const getOrderBook = (state) => state.orderBook;
export const tickerSelector = createSelector([getTicker], (ticker) => ticker);
export const orderBookSelector = createSelector(
  [getOrderBook],
  (orderBook) => orderBook
);
