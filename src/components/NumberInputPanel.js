import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';

import * as Actions from '../actions/index';
import { InputCharMode } from '../constants/index';

/** 数値入力部分のコンテナ */
class NumberInputPanel extends Component {

    buttonList = [
        { label : '7' }, 
        { label : '8' }, 
        { label : '9' }, 
        { label : '4' }, 
        { label : '5' }, 
        { label : '6' }, 
        { label : '1' },
        { label : '2' }, 
        { label : '3' },
        { label : '±', code : InputCharMode.SwitchNegative }, 
        { label : '0' },
        { label : '.', code : InputCharMode.DecimalPoint },      
    ];

    /**
     * クリックイベントハンドラ
     */
    handleClick = (value) => {
        if (value === InputCharMode.SwitchNegative) {
            // 正負反転
            this.props.onSwitchNegative();
        }else if (value === InputCharMode.DecimalPoint) {
            // 小数点追加
            this.props.onDecimalPointInput();
        }else {
            // 数値入力
            this.props.onNumberInput(value);
        }
    }

	render() {
        const buttonList = this.buttonList.map(button => (
            <RaisedButton label={button.label} key={button.label}
                onClick={(e) => this.handleClick(button.code || button.label)} className="calc-button"/>
        ));
		return (
			<div className="number-panel">
				{buttonList}
			</div>
		);
	}
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
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(NumberInputPanel)
