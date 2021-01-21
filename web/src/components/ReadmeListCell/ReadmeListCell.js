/** @jsx jsx */
import { jsx, Card, Flex, Box } from 'theme-ui'
import { MdNoteAdd } from 'react-icons/md'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query ReadmeListQuery {
    readmes {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ readmes, showCreateNew }) => {
  return (
    <div sx={{}}>
      {showCreateNew && (
        <Link to={routes.new()}>
          <Card
            sx={{
              border: '2px dotted #888',
              borderRadius: 1000,
              p: 2,
              cursor: 'pointer',
            }}
          >
            <Flex>
              <MdNoteAdd sx={{ pr: 1 }} />
              <Box>New README</Box>
            </Flex>
          </Card>
        </Link>
      )}
      {readmes.map(() => ({ title, description }) => (
        <div>
          <div sx={{}}>
            <h2 sx={{}}>{title}</h2>
            <p sx={{}}>{description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
