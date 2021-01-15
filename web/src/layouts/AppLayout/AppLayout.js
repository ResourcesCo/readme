import { useAuth } from '@redwoodjs/auth'

const AppLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <div>
      <button onClick={isAuthenticated ? logOut : logIn}>
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {isAuthenticated && <p>Logged in as {currentUser.email}</p>}
      <main>{children}</main>
    </div>
  )
}

export default AppLayout
