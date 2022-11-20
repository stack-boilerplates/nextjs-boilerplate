import Head from 'next/head'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import { lightTheme, darkTheme } from 'styles/theme'

import useDarkMode from 'use-dark-mode'

function App({ Component, pageProps }: AppProps) {
  const dark = useDarkMode(false)
  const theme = dark.value ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="#" />
        <link rel="apple-touch-icon" href="#" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <button onClick={dark.toggle}>Switch Mode</button>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
