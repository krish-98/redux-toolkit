const configureStore = require("@reduxjs/toolkit").configureStore
const reduxLogger = require("redux-logger")
const cakeReducer = require("../features/cake/cakeSlice")
const icecreamReducer = require("../features/icecream/icecreamSlice")

const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  // by default the configure store fn adds some middleware to the redux store setup automatically. so to the list of default middleware, we append the logger middleware.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store
