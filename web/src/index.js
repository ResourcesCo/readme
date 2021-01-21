import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import { ThemeProvider } from 'theme-ui'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import AppLayout from './layouts/AppLayout/AppLayout'

import theme from './theme'
import Routes from 'src/Routes'

import './index.css'

netlifyIdentity.init()

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={netlifyIdentity} type="netlify">
      <RedwoodProvider>
        <ThemeProvider theme={theme}>
          <AppLayout>
            <Routes />
          </AppLayout>
        </ThemeProvider>
      </RedwoodProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
