/** @jsx jsx */
import { jsx } from 'theme-ui'
import MarkdownView from '../MarkdownView/MarkdownView'

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

export const Success = ({ redwood: { currentUser } }) => {
  const markdown = `# Hello, world!

This is rendered using *Remark* and *React*! 🎉

Here is another line to show spacing. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Duis accumsan ullamcorper leo, vel tincidunt libero vehicula
quis. Nulla facilisis sapien ac egestas pretium. Integer dapibus sapien
ultrices orci porttitor elementum. Maecenas auctor sapien non tortor suscipit
tempus. Quisque magna tortor, ultricies et vulputate vel, rutrum ultrices
augue.

## Heading 2

Here is an unordered list:

- list
    - nested

### Heading 3

Here is an ordered list:

1. Item one
2. Item two
    1. Nested

Here is a table:

| table | column |
| ----- | ------ |
| row   | cell   |

[Alert](javascript:alert('🚨'))`

  return (
    <div>
      <MarkdownView value={markdown} />
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>
  )
}
