/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'

const AppLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <div sx={{ maxWidth: 768, p: 3, mx: 'auto' }}>
      <div sx={{ textAlign: 'right' }}>
        {isAuthenticated && <span sx={{ mx: 2 }}>{currentUser.email}</span>}
        <button onClick={isAuthenticated ? logOut : logIn}>
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </button>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default AppLayout
