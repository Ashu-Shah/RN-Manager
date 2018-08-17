import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers/index';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

const middleware = () => {
    return applyMiddleware(ReduxThunk, loggerMiddleware)
};

export default createStore(reducers, {}, compose(middleware()));