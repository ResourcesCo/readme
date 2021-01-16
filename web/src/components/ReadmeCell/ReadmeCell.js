import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeReact from 'rehype-react'

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

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeSanitize)
  .use(rehypeReact, { createElement: React.createElement })

export const Success = ({ redwood: { currentUser } }) => {
  const text = `# Hello, world!

This is rendered using Remark and React! 🎉

[Alert](javascript:alert('🚨'))`

  return (
    <div>
      <div>{processor.processSync(text).result}</div>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>
  )
}
