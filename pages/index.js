import Customization from '../components/Customization'
import Apply from '../components/Apply'
import Responsive from '../components/Responsive'
import Utility from '../components/Utility'
import Links from '../components/Links'
import Alert from '../components/Alert'
import PageHeader from '../components/PageHeader'

export default function Home() {
  return (
    <>
      <PageHeader pageTitle="Tailwind Demo" />

      <Utility />
      <Alert />
      <Responsive />
      <Customization />
      <Apply />
      <Links />

    </>
  )
}
