const initialState = {
    orderBook: [],
    Trades: [],
    Ticker: []
}

export default function TradeReducer(state = initialState, action) {
    switch (action.type) {
        case '':
            return {...state}
    
        default:
           return {...state};
    }
}