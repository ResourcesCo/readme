/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'
import AppLayout from '../../layouts/AppLayout/AppLayout'
import ReadmeListCell from '../../components/ReadmeListCell'
import ReadmeCell from '../../components/ReadmeCell'

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  return (
    <AppLayout title="README">
      {isAuthenticated && (
        <>
          <Heading as="h2">Your READMEs</Heading>
          <ReadmeListCell showCreateNew={true} />
        </>
      )}
      <Heading as="h2">Explore</Heading>
      <ReadmeListCell />
      <ReadmeCell />
    </AppLayout>
  )
}

export default HomePage
