import { render } from '@redwoodjs/testing'
import { Loading, Empty, Failure, Success } from './ReadmeCell'
import { standard } from './ReadmeCell.mock'

describe('ReadmeCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  //   expect(screen.getByText('Hello, world')).toBeInTheDocument()

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success redwood={standard().redwood} />)
    }).not.toThrow()
  })

  it('sanitizes alert', async () => {
    const link = await render(
      <Success redwood={standard().redwood} />
    ).findByText('Alert')
    expect(link.outerHTML).not.toContain('javascript:')
  })
})
