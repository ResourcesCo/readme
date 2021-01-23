/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { MdNoteAdd } from 'react-icons/md'
import { Link, routes } from '@redwoodjs/router'
import DottedOutlineCard from './DottedOutlineCard'

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
        <DottedOutlineCard>
          <Link
            to={routes.new()}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              p: 3,
              textDecoration: 'none',
              color: 'text',
            }}
          >
            <MdNoteAdd sx={{ pr: 1, fontSize: 4 }} />
            <Box>New README</Box>
          </Link>
        </DottedOutlineCard>
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
