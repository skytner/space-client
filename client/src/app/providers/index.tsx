import { FC, JSX } from 'react'
import { BrowserRouter as BrowserRouterProvider } from 'react-router-dom'

import { RouteProvider } from './router'

export const WithProviders: FC = (): JSX.Element => (
  <BrowserRouterProvider>
    <RouteProvider />
  </BrowserRouterProvider>
)
