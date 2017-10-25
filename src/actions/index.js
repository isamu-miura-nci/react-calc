/** 数字の設定 */
export const ADD_INPUT_NUMBER = 'ADD_INPUT_NUMBER';
/** 小数点の追加 */
export const ADD_DECIMAL_POINT = 'ADD_DECIMAL_POINT';
/** 正負の反転 */
export const SWITCH_NEGATIVE = 'SWITCH_NEGATIVE';
/** 演算子の設定 */
export const SET_OPERATOR = 'SET_OPERATOR';
/** 計算実行 */
export const CALCULATION = 'CALCULATION';
/** 入力内容のクリア */
export const CLEAR_CURRENT = 'CLEAR_CURRENT';
/** 全てクリア */
export const CLEAR_ALL = 'CLEAR_ALL';
/** √値の計算 */
export const CALC_ROOT = 'CALC_ROOT';


/**
 * 入力数字の追加
 * @param value 数字 
 */
export const addInputNumber = value => {
    return {
        type: ADD_INPUT_NUMBER,
        value,
    }
}

/**
 * 小数点の追加
 */
export const addDecimalPoint = () => {
    return {
        type: ADD_DECIMAL_POINT
    }
}

/**
 * 正負の反転
 */
export const switchNegative = () => {
    return {
        type: SWITCH_NEGATIVE
    }
}

/**
 * 演算子の設定
 * @param operator 演算子 
 */
export const setOperator = operator => {
    return {
        type: SET_OPERATOR,
        operator,
    }
}

/**
 * 入力内容のクリア 
 */
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

/**
 * 全てクリア 
 */
export const clearAll = () => {
    return {
        type: CLEAR_ALL
    }
}

/**
 * √値の計算 
 */
export const calcRoot = () => {
    return {
        type: CALC_ROOT
    }
}