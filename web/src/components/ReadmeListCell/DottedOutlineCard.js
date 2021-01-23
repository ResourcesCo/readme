/** @jsx jsx */
import { jsx, Card } from 'theme-ui'
import { useResizeDetector } from 'react-resize-detector'

const makeBackground = ({ width, height }) => {
  const pi = Math.PI
  const padding = 3
  const radius = (height - padding * 2) / 2
  const sideLength = width - (padding + radius) * 2
  const capLength = pi * radius
  const length = 2 * (sideLength + capLength)
  const topSideStart = 0
  const rightCapStart = sideLength
  const bottomSideStart = rightCapStart + capLength
  const leftCapStart = bottomSideStart + sideLength
  const dotCount = 80
  const spacing = length / dotCount
  const dots = [...Array(dotCount).keys()]
    .map((i) => {
      const distance = i * spacing
      if (distance >= topSideStart && distance < rightCapStart) {
        return [padding + radius + distance, padding]
      } else if (distance >= rightCapStart && distance < bottomSideStart) {
        const segmentDistance = (distance - rightCapStart) / capLength
        const arcPosition = (-0.5 + segmentDistance) * pi
        const circleX = Math.cos(arcPosition) * radius
        const circleY = Math.sin(arcPosition) * radius
        return [
          padding + radius + sideLength + circleX,
          padding + radius + circleY,
        ]
      } else if (distance >= bottomSideStart && distance < leftCapStart) {
        return [
          padding + radius + sideLength - (distance - bottomSideStart),
          padding + 2 * radius,
        ]
      } else if (distance >= leftCapStart && distance <= length) {
        const segmentDistance = (distance - leftCapStart) / capLength
        const arcPosition = (0.5 + segmentDistance) * pi
        const circleX = Math.cos(arcPosition) * radius
        const circleY = Math.sin(arcPosition) * radius
        return [padding + radius + circleX, padding + radius + circleY]
      } else {
        throw new Error('Unexpected error: distance outside bounds')
      }
    })
    .map(([x, y]) => `<circle cx='${x}' cy='${y}' r='1' fill='black' />`)
  const backgroundSvg = `<svg width='100%' height='100%' viewBox='0 0 ${width} ${height}' xmlns='http://www.w3.org/2000/svg'>
    ${dots.join('\n')}
  </svg>`
  const backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(
    backgroundSvg
  )}")`
  return { backgroundImage }
}

export default (props) => {
  const { width, height, ref } = useResizeDetector()
  return (
    <Card
      ref={ref}
      sx={{
        ...(width && height && makeBackground({ width, height })),
        backgroundRepeat: 'no-repeat',
      }}
      {...props}
    />
  )
}
