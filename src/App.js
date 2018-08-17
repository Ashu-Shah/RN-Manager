import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/CreateStore';
import Settings from '../settings.json';
import Router from './Router';

export default class App extends Component<Props> {
    constructor() {
        super();
        YellowBox.ignoreWarnings([
            'Warning: isMounted(...) is deprecated',
            "Module RCTImageLoader",
            'Remote debugger is in a background tab',
            'Setting a timer for a long period'
        ]);
    }

    componentWillMount() {
        const firebase = require('firebase');
        const config = {
            apiKey: Settings.apiKey,
            authDomain: Settings.authDomain,
            databaseURL: Settings.databaseURL,
            projectId: Settings.projectId,
            storageBucket: Settings.storageBucket,
            messagingSenderId: Settings.messagingSenderId
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}