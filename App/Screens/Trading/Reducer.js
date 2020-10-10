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
  trades: {},
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
      if (Array.isArray(orderBook[0])) {
        orderBook.map((order, index) => {
          const PRICE = order[0];
          const COUNT = order[1];
          const AMOUNT = order[2];
          if (COUNT === 0 && _orderBook[PRICE]) {
            delete _orderBook[PRICE];
          } else {
            _orderBook[PRICE] = {
              price: PRICE,
              count: COUNT,
              amount: AMOUNT,
            };
          }
        });
      } else {
        const PRICE = orderBook[0];
        const COUNT = orderBook[1];
        const AMOUNT = orderBook[2];
        if (COUNT === 0 && _orderBook[PRICE]) {
          delete _orderBook[PRICE];
        } else {
          _orderBook[PRICE] = {
            price: PRICE,
            count: COUNT,
            amount: AMOUNT,
          };
        }
      }

      return {
        ...state,
        orderBook: _orderBook,
      };
    case tradingTypes.SAVE_TRADES:
      let _trades = { ...state.trades };
      action.trades.map((trade, index) => {
        const ID = trade[0];
        const MTS = trade[1];
        const AMOUNT = trade[2];
        const PRICE = trade[3];
        _trades[ID] = {
          ID,
          MTS,
          AMOUNT,
          PRICE,
        };
      });

      return {
        ...state,
        trades: { ..._trades },
      };
    default:
      return { ...state };
  }
}
