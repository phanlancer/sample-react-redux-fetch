import { createStore, applyMiddleware } from "redux";
import { middleware as fetchMiddleware } from "react-redux-fetch";

import reducer from "../reducers";

function configureStore() {
  const store = createStore(reducer, applyMiddleware(fetchMiddleware));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require("../reducers"); // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return { store };
}

export default configureStore;
