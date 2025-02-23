import { FC, PropsWithChildren, Suspense } from 'react'

import { Loader } from '../../loader'

export const SuspenseLayout: FC<PropsWithChildren> = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
)