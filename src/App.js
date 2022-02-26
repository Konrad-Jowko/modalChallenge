import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import Modal from './components/views/Modal/ModalContainer';

const App = () => (
  <Provider store={store}>
    <Modal />
  </Provider>
);

export default App;
