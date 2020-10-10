import * as tradeTypes from "./Types";

export const saveOrderBook = (order) => ({
  type: tradeTypes.SAVE_ORDER_BOOK,
  order,
});
