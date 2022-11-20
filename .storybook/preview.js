import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
