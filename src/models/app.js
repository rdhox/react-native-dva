import { NavigationActions, delay, createAction, Storage } from "../utils";

export default {
  namespace: "app",
  state: {
    loading: true,
    fetching: false
  },
  subscriptions: {
    setup({ dispatch }) {}
  },
  effects: {
    //  *loadStorage(action, { call, put }) {
    //     const login = yield call(Storage.get, "login", false);
    //     yield put({ type: "updateState", payload: { login, loading: false } });
    //   }
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
