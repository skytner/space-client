import { useTranslation } from 'react-i18next'

const ExamplePage = () => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      {t('exampleee')}
      <button onClick={() => i18n.changeLanguage('ru')}>change lang</button>
    </div>
  )
}

export default ExamplePage
