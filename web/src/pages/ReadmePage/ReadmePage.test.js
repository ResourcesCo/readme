import { render } from '@redwoodjs/testing'

import ReadmePage from './ReadmePage'

describe('ReadmePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReadmePage />)
    }).not.toThrow()
  })
})
