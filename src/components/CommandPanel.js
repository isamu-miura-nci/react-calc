import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { CommandMode } from '../constants/index';
import * as Actions from '../actions/index';

/** コマンド部分のコンテナ */
class CommandPanel extends Component {

	buttonList = [
        { label : 'C', code : CommandMode.ClearCurrent }, 
		{ label : 'AC', code : CommandMode.ClearAll }   
	];
	
	/**
     * クリックイベントハンドラ
     */
    handleClick = (value) => {
        if (value === CommandMode.ClearCurrent) {
            // 入力内容をクリア
            this.props.onClearCurrent();
        }else if (value === CommandMode.ClearAll) {
            // 全てクリア
            this.props.onClearAll();
        }
    }
	
	render() {
		const buttonList = this.buttonList.map(button => (
            <RaisedButton label={button.label} key={button.label}
            	onClick={(e) => this.handleClick(button.code)} className="calc-button"/>
        ));
		return (
			<div className="command-panel">
				{buttonList}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
    return {
        // 全てクリア
        onClearAll : () => {
            dispatch(Actions.clearAll());
        },
        // 入力内容をクリア
        onClearCurrent : () => {
            dispatch(Actions.clearCurrent());
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(CommandPanel)
