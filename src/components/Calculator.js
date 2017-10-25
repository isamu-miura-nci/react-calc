import React, { Component } from 'react';
import { Card } from 'material-ui/Card';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';

import DisplayPanel from './DisplayPanel';
import CommandPanel from './CommandPanel';
import OperatorPanel from './OperatorPanel';
import NumberInputPanel from './NumberInputPanel';

let store = createStore(reducer);

/** 電卓アプリケーションコンテナ */
class Calculator extends Component {
    render() {
        return (
            <Provider store={store}>
                <Card className="calculator">
                        <DisplayPanel/>
                        <div className="button-panel">
                            <div className="button-panel-left">
                                <CommandPanel />
                                <NumberInputPanel/>
                            </div>
                            <div className="button-panel-right">
                                <OperatorPanel />
                            </div>
                        </div>
                </Card>
            </Provider>
        );
    }
}

export default Calculator;
