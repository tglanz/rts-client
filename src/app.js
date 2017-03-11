import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import { ApolloProvider } from 'react-apollo';

import createApolloClient from './apollo/createApolloClient';
import AppComponent from './AppComponent';

const _apolloClient = createApolloClient();
const _browserHistory = createBrowserHistory();

const _targetDom = document.getElementById('react-target');

const _reactDom = <ApolloProvider client={_apolloClient}>
    <Router history={_browserHistory}>
        <Route path='/' component={AppComponent} />
    </Router>
</ApolloProvider>

ReactDOM.render(_reactDom, _targetDom);