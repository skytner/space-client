import { FC, JSX, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useUnit } from 'effector-react'

import { $session, createSession } from '@/entities/session'
import { Loader } from '@/shared/ui'
import { getPermissionsByRole } from '@/entities/session/lib'

const ExamplePage: FC = (): JSX.Element => {
  const { t, i18n } = useTranslation()

  const session = useUnit($session)

  useEffect(() => {
    createSession({
      role: 'moder',
      permissions: getPermissionsByRole('moder'),
    })
  }, [])

  if (!session) {
    return <Loader />
  }

  const { permissions } = session
  return (
    <div>
      {t('exampleee')}
      <button onClick={() => i18n.changeLanguage('ru')}>change lang</button>
      <div>
        {permissions.view && <p>You can view this content.</p>}
        {permissions.add && <button>Add</button>}
        {permissions.edit && <button>Edit</button>}
        {permissions.delete && <button>Delete</button>}
      </div>
    </div>
  )
}

export default ExamplePage
