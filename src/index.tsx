import * as React from 'react';
import { render } from 'react-dom';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { Global, css } from '@emotion/core';
import { config } from './overmind';

import App from './App';

const overmind = createOvermind(config);

render((
  <Provider value={overmind}>
    <Global
      styles={css`
        :root {
          --background-dark: #222831;
          --background-gray: #393E46;
          --highlight: #00ADB5;
          --text: #EEEEEE;

          height: 100%;
          width: 100%;
        }

        body {
          height: 100%;
          width: 100%;
          background: var(--background-dark);
        }

        .container {
          color: var(--text);
          height: 100vh;
        }
      `}
    />
    <App />
  </Provider>
), document.getElementById('root'));
