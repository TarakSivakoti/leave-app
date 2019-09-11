import React from 'react';
import ReactDOM from 'react-dom';
import '..//css/index.css';
import Container from '../components/container';
import * as serviceWorker from '../serviceWorker';
import { Provider } from "@stardust-ui/react";

ReactDOM.render(
  <Provider>
    <Container />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
