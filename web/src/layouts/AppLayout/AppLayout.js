/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'

const AppLayout = ({ title = 'README', children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <div sx={{ maxWidth: 768, p: 2, mx: 'auto' }}>
      <div sx={{ display: 'flex', alignItems: 'center' }}>
        <div sx={{ flexGrow: 1 }}>
          <Heading as="h1">{title}</Heading>
        </div>
        <div sx={{ textAlign: 'right' }}>
          {isAuthenticated && <span sx={{ mx: 2 }}>{currentUser.email}</span>}
          <button onClick={isAuthenticated ? logOut : logIn}>
            {isAuthenticated ? 'Log Out' : 'Log In'}
          </button>
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default AppLayout
