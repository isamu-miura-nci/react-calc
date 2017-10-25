/**
 * Reducerを作成する
 * @param {object} initialState Stateの初期状態
 * @param {[Function]} handlers ハンドラリスト
 */
export const createReducer = (initialState, handlers) => {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state;
        }
    }
}