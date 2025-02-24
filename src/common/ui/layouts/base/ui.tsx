import { FC, Fragment, JSX } from 'react'

import { BaseLayoutProps } from './model'

export const BaseLayout: FC<BaseLayoutProps> = ({ heading, main }): JSX.Element => (
  <Fragment>
    <header>{heading}</header>
    <main>{main}</main>
  </Fragment>
)
