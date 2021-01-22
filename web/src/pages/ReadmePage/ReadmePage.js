/** @jsx jsx */
import { jsx, Textarea } from 'theme-ui'
import AppLayout from '../../layouts/AppLayout/AppLayout'

const ReadmePage = () => {
  return (
    <AppLayout title="New Readme">
      <Textarea sx={{ height: '80vh' }} />
    </AppLayout>
  )
}

export default ReadmePage
