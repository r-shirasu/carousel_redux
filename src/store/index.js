import { createStore } from "redux";
import { fruitsData } from "../data";

const initialState = {
  fruitsDataNum: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      if (state >= fruitsData.length - 1) {
        return { fruitsDataNum: (state.fruitsDataNum = 0) };
      } else {
        return { fruitsDataNum: state.fruitsDataNum + 1 };
      }

    case "DECREASE_COUNT":
      if (state === 0) {
        return { fruitsDataNum: fruitsData.length - 1 };
      } else {
        return { fruitsDataNum: state.fruitsDataNum - 1 };
      }

    case "RANDOM_EVENT":
      return { fruitsDataNum: Math.floor(Math.random() * fruitsData.length) };
    default:
      return state;
  }
};

// 作成したreducerをcreateStoreの引数として設定し、reducerが保持しているstateをstoreの中に保管する
const store = createStore(reducer);

export default store;
