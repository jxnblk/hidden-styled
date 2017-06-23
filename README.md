
# hidden-styled

Responsive CSS hiding utility component built with [styled-components](https://github.com/styled-components/styled-components)

```sh
npm i hidden-styled
```

```jsx
import React from 'react'
import Hide from 'hidden-styled'

const App = props => (
  <div>
    <Hide xs>I‘m hidden on extra small screens</Hide>
    <Hide sm>I‘m hidden on small screens</Hide>
    <Hide md>I‘m hidden on medium screens</Hide>
    <Hide lg>I‘m hidden on large screens</Hide>
    <Hide md lg>I‘m hidden on medium and large screens</Hide>
  </div>
)
```

MIT License
