import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store";
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <App />
    </BrowserRouter>
    </PersistGate>
      </Provider>
      </ChakraProvider>
    </React.StrictMode>
);
