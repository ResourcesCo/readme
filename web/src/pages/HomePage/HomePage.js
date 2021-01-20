/** @jsx jsx */
import { jsx } from 'theme-ui'
import AppLayout from '../../layouts/AppLayout/AppLayout'
import ReadmeCell from '../../components/ReadmeCell'

const HomePage = () => {
  return (
    <AppLayout>
      <h1 sx={{ font: 'heading' }}>README</h1>
      <p>Your READMEs</p>
      <p>Explore</p>
      <ReadmeCell />
    </AppLayout>
  )
}

export default HomePage
