/** @jsx jsx */
import { useState } from 'react'
import { jsx, Textarea, Button, Flex, Spinner } from 'theme-ui'
import AppLayout from '../../layouts/AppLayout/AppLayout'

const ReadmePage = () => {
  const [loading, setLoading] = useState(false)
  const save = () => {
    setLoading(true)
  }
  return (
    <AppLayout title="New Readme">
      <Textarea sx={{ height: '80vh' }} />
      <Flex sx={{ my: 3 }}>
        <Button mr={2} onClick={save}>
          Save
          {loading && (
            <Spinner sx={{ color: 'white', size: 18, ml: 2, mb: '-3px' }} />
          )}
        </Button>
      </Flex>
    </AppLayout>
  )
}

export default ReadmePage
