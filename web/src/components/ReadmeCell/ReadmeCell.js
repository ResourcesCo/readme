export const QUERY = gql`
  query ReadmesQuery {
    redwood {
      currentUser
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ redwood }) => {
  return <pre>{JSON.stringify(redwood, null, 2)}</pre>
}
