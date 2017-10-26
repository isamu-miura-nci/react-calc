import * as Actions from '../actions/index';
import { OperatorMode, CalcMode } from '../constants/index';

export default (state = {
        // 現在の計算結果
        result: 0,
        // 現在の入力内容
        input: '0',
        // 電卓モード
        mode: CalcMode.Default,
        // 前回の演算子
        operator: null
    }, action) => {
        switch (action.type) {
             // ### 数字入力アクション ###
            case Actions.ADD_INPUT_NUMBER:
            // 数字を設定する
            return setNumber(state, action.value);
        
            // ### 小数点入力アクション ###
            case Actions.ADD_DECIMAL_POINT:        
            // 小数点を設定する
            return setDecimalPoint(state);
            
            // ### 正負反転アクション ###
            case Actions.SWITCH_NEGATIVE:
            return switchNegative(state);

            // ### 全てクリアアクション ###
            case Actions.CLEAR_ALL:
            return clearAll(state);

            // ### 現在の値をクリアアクション ###
            case Actions.CLEAR_CURRENT:
            return clearCurrent(state);

            // ### 演算子設定アクション ###
            case Actions.SET_OPERATOR:
            return setOperator(state, action.operator);

            default:
        }
        return state;
}

/**
 * 入力値を設定する
 * @param {State} state 
 * @param {} func 値の変換関数
 */
const setInput = (state, func) => {
    let copyInput = state.input;
    if (state.mode !== CalcMode.ShowInput) {
        copyInput = '0';
    }
    copyInput = func(copyInput);
    if (copyInput !== state.input || state.mode !== CalcMode.ShowInput) {
        return { ...state, input : copyInput, mode : CalcMode.ShowInput };
    }else {
        return state;
    }
}

/**
 * 数値を設定する
 * @param {State} state State
 * @param {string} input 設定する値
 */
const setNumber = (state, input) => {
    return setInput(state, (copyInput) => {
        if(copyInput === '0') {
            copyInput = input;
        }else{
            // 渡された文字をそのまま連結する
            copyInput += input;
        }
        return copyInput;
    });
}

/**
 * 小数点を設定する
 * @param {State} state 
 */
const setDecimalPoint = (state) => {
    return setInput(state, (copyInput) => {
        if(copyInput.indexOf('.') < 0) {
            // 入力値に小数点がなければ末尾に追加する
            copyInput += '.';
        }
        return copyInput;
    });
}

/**
 * 正負を反転する
 * @param {State} state 
 */
const switchNegative = (state) => {
    return setInput(state, (copyInput) => {
        // 先頭にマイナスがなければ追加、あれば削除する
        if(copyInput.indexOf('-') < 0) {
            copyInput = '-' + copyInput;
        }else {
            copyInput = copyInput.substr(1);
        }
        return copyInput;
    });
}

/**
 * すべてクリアする
 * @param {State} state 
 */
const clearAll = (state) => {
    return { ...state, 
        mode : CalcMode.Default, 
        result : 0, 
        input : '0',
        operator : null
    };
}

/**
 * 現在の入力をクリアする
 * @param {State} state 
 */
const clearCurrent = (state) => {
    return { ...state, input : '0', mode : CalcMode.ShowInput };
}

/**
 * 現在の演算子で計算を行う
 * @param {State} state 
 */
const calcResult = (state) => {
    let result = state.result;
    switch(state.operator) {
        case OperatorMode.Plus:
            result = state.result + parseFloat(state.input);
            break;
        case OperatorMode.Minus:
            result = state.result - parseFloat(state.input);
            break;
        case OperatorMode.Multi:
            result = state.result * parseFloat(state.input);
            break;
        case OperatorMode.Division:
            result = state.result / parseFloat(state.input);
            break;
        default:
            result = parseFloat(state.input);
    }
    return result;
}

/**
 * 演算子を設定する
 * @param {State} state 
 * @param {OperatorMode} operator 
 */
const setOperator = (state, operator) => {
    const newState = { ...state };
    // モードが結果モードに切り替わったとき、または入力された演算子が「=」のとき
    if (state.mode !== CalcMode.ShowResult || operator === OperatorMode.Equal) {
        // 現在の演算子で計算を行う
        newState.result = calcResult(state);
    }
    // 入力された演算子が「=」以外のとき
    if (operator !== OperatorMode.Equal) {
        // 結果を入力値にコピーする
        newState.input = newState.result;
        // 演算子を書き換える
        newState.operator = operator;
        // 結果表示モードに
        newState.mode = CalcMode.ShowResult;
    }else {
        // 演算子が「=」ならデフォルトモードに
        newState.mode = CalcMode.Default;
        newState.operator = operator;
        newState.input = newState.result;
    }
    
    
    return newState;
}