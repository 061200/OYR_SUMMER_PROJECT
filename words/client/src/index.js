import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
/**  리듀서 사용으로 인한 코드 수정  */
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
/**  리듀서 사용으로 인한 코드 수정  */
import rootReducer, { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

/**  리듀서 사용으로 인한 코드 수정  */
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
