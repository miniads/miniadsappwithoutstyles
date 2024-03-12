import { FC, PropsWithChildren } from 'react'
import 'styled-components'


declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      bg: string
      bgSecondary: string
      text: string
      hint: string
      link: string
      btn: string
      btnText: string
    }
  }
}
export type FCWithChildren<T = {}> = FC<PropsWithChildren<T>>
