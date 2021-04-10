/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import type {
  AppProps,
  // AppContext
} from 'next/app';
// import { SWRConfig } from 'swr';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { wrapper } from '../features/common/store';
// import fetch from '../lib/fetchJson';

const GlobalStyle = createGlobalStyle`
  height: 100vh;
  display: flex;
  flex-direction: row;

  * {
    font-family: 'Lato', system-ui, Tahoma, sans-serif;
    color: #1F1F1F;
  }
  body {
    margin: 0;
    padding: 0;
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  button {
    padding: 6px;
  }

  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* <SWRConfig
            value={{
              fetcher: fetch,
              onError: (err) => {
                console.error(err);
              },
            }}
          > */}
        <Component {...pageProps} />
        {/* </SWRConfig> */}
      </ThemeProvider>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
        `}
      </style>
    </>
  );
}

export default wrapper.withRedux(App);
