import { FC, JSX } from 'react'
import { BrowserRouter as BrowserRouterProvider } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'

import { RouteProvider } from './route'
import i18n from '@/common/i18n'

export const WithProviders: FC = (): JSX.Element => (
  <BrowserRouterProvider>
    <I18nextProvider i18n={i18n}>
      <RouteProvider />
    </I18nextProvider>
  </BrowserRouterProvider>
)
