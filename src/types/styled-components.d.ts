import { lightTheme } from 'styles/theme'

//InferĂȘncia de tipos
type Theme = typeof lightTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
