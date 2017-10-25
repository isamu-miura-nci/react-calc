import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CalcMode, OperatorMode } from '../constants/index';

/** 表示部分のコンテナ */
class DisplayPanel extends Component {
	render() {
		let status = '';
		if (this.props.mode !== CalcMode.Default) {
			switch(this.props.operator) {
				case OperatorMode.Plus:
				status = '＋';
				break;
				case OperatorMode.Minus:
				status = '－';
				break;
				case OperatorMode.Multi:
				status = '×';
				break;
				case OperatorMode.Division:
				status = '÷';
				break;
				default:
				status = '';
			}
		}
		return (
		<div className="display-panel">
			<div className="display-number">
				{this.props.mode === CalcMode.ShowInput ? 
					this.props.input : this.props.result }
			</div>
			<div className="display-status">
				<div className="display-operator">{status}</div>
			</div>
		</div>
		);
	}
}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(
    mapStateToProps,
    null
)(DisplayPanel)
