import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import * as Actions from '../actions/index';
import { OperatorMode } from '../constants/index';

/** 演算子部分のコンテナ */
class OperatorPanel extends Component {

	buttonList = [
		{ label : '÷', code : OperatorMode.Division },  
		{ label : '×', code : OperatorMode.Multi },  
        { label : '＋', code : OperatorMode.Plus }, 
		{ label : '－', code : OperatorMode.Minus },
		{ label : '＝', code : OperatorMode.Equal },  
	];

	/**
     * クリックイベントハンドラ
     */
    handleClick = (operator) => {
		// 演算子設定
		this.props.onSetOperator(operator);
    }
	
	render() {
		const buttonList = this.buttonList.map(button => (
            <RaisedButton label={button.label} key={button.label}
            	onClick={(e) => this.handleClick(button.code)} className="calc-button"/>
        ));
		return (
			<div className="operator-panel">
				{buttonList}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
    return {
        // 演算子設定
        onSetOperator : (operator) => {
            dispatch(Actions.setOperator(operator));
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(OperatorPanel)
