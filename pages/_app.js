import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {Helmet} from "react-helmet";
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Yusei Magic', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Sotc quiz</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap" rel="stylesheet"/> 
                <meta property="og:image" content="../_docs/capa.png"></meta>
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
