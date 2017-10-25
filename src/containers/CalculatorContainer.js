import { connect } from 'react-redux'
import Actions from '../actions/index'

import Calculator from '../components/Calculator';

const mapStateToProps = state => {
    return state
}
  
const mapDispatchToProps = dispatch => {
    return {
        // 数値入力
        onNumberInput: value => {
            dispatch(Actions.addInputNumber(value))
        },
        // 小数点入力
        onDecimalPointInput: () => {
            dispatch(Actions.addDecimalPoint())
        },
        // 正負反転
        onSwitchNegative: () => {
            dispatch(Actions.switchNegative());
        },
        // 全てクリア
        onClearAll : () => {
            dispatch(Actions.clearAll());
        },
        // 入力内容をクリア
        onClearCurrent : () => {
            dispatch(Actions.clearCurrent());
        },
        // √値計算
        onCalcRoot : () => {
            dispatch(Actions.calcRoot());
        },
        // 演算子設定
        onSetOperator : (operator) => {
            dispatch(Actions.setOperator(operator));
        }
    }
}

export default CalculatorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator)