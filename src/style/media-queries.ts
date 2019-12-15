const breakpoints = [576]

export const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)