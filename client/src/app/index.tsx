import { FC, JSX } from 'react'

import { WithProviders } from './providers'
import './index.scss'

const Application: FC = (): JSX.Element => (
  <div className="app">
    <WithProviders />
  </div>
)

export default Application
