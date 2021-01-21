/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'
import ReadmeListCell from '../../components/ReadmeListCell'
import ReadmeCell from '../../components/ReadmeCell'

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  return (
    <>
      <h1 sx={{ font: 'heading' }}>README</h1>
      {isAuthenticated && (
        <>
          <h2>Your READMEs</h2>
          <ReadmeListCell showCreateNew={true} />
        </>
      )}
      <h2>Explore</h2>
      <ReadmeListCell />
      <ReadmeCell />
    </>
  )
}

export default HomePage
