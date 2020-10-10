import * as tradingTypes from "./Types";

const initialState = {
  ticker: {
    BID: "",
    BID_SIZE: "",
    ASK: "",
    ASK_SIZE: "",
    DAILY_CHANGE: "",
    DAILY_CHANGE_RELATIVE: "",
    LAST_PRICE: "",
    VOLUME: "",
    HIGH: "",
    LOW: "",
  },

  orderBook: {},
  trades: [],
};

export default function TradeReducer(state = initialState, action) {
  switch (action.type) {
    case tradingTypes.SAVE_TICKER:
      const radingPairs = [
        "BID",
        "BID_SIZE",
        "ASK",
        "ASK_SIZE",
        "DAILY_CHANGE",
        "DAILY_CHANGE_RELATIVE",
        "LAST_PRICE",
        "VOLUME",
        "HIGH",
        "LOW",
      ];
      let _ticker = {};
      action.ticker.map((item, index) => {
        _ticker[radingPairs[index]] = item;
      });

      return { ...state, ticker: _ticker };
    case tradingTypes.SAVE_ORDER_BOOK:
      const { orderBook } = action;
      let _orderBook = {};
      Object.assign(_orderBook, state.orderBook);

      orderBook.map((order, index) => {
        const PRICE = order[0];
        const COUNT = order[1];
        const AMOUNT = order[2];
        if (COUNT === 0) {
          delete _orderBook[PRICE];
        } else {
          _orderBook[PRICE] = {
            price: PRICE,
            count: COUNT,
            amount: AMOUNT,
          };
        }
      });
      return {
        ...state,
        orderBook: { ..._orderBook },
      };
    case tradingTypes.SAVE_TRADES:
      console.log("action.trades", action.trades);
      return {
        ...state,
      };
    default:
      return { ...state };
  }
}
