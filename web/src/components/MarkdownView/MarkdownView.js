/** @jsx jsx */
import { Themed, jsx } from 'theme-ui'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeReact from 'rehype-react'

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeSanitize)
  .use(rehypeReact, {
    createElement: jsx,
    components: {
      h1: Themed.h1,
      h2: Themed.h2,
      h3: Themed.h3,
      p: Themed.p,
      ul: Themed.ul,
      ol: Themed.ol,
    },
  })

const MarkdownView = ({ value }) => (
  <div>{processor.processSync(value).result}</div>
)

export default MarkdownView
