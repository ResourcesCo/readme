import { readmes } from './readmes'

describe('readmes', () => {
  scenario('returns all readmes', async (scenario) => {
    const result = await readmes()

    expect(result.length).toEqual(Object.keys(scenario.readme).length)
  })
})
