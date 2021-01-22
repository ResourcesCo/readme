/** @jsx jsx */
import { jsx, Themed, Heading } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const AppLayout = ({ title = 'README', children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <Themed.root>
      <div sx={{ maxWidth: 768, p: 2, mx: 'auto' }}>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <div sx={{ flexGrow: 1 }}>
            <Heading as="h1">{title}</Heading>
          </div>
          <div sx={{ textAlign: 'right' }}>
            {isAuthenticated && <span sx={{ mx: 2 }}>{currentUser.email}</span>}
            {isAuthenticated ? (
              <button
                onClick={async () => {
                  await logOut()
                  navigate(routes.home())
                }}
              >
                Log Out
              </button>
            ) : (
              <button
                onClick={async () => {
                  await logIn()
                  navigate(routes.home())
                }}
              >
                Log In
              </button>
            )}
          </div>
        </div>
        <main>{children}</main>
      </div>
    </Themed.root>
  )
}

export default AppLayout
