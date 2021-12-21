import ReactDOM from 'react-dom'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <ChakraProvider>
  <App title={"ToDo List"} />
</ChakraProvider>,
  document.getElementById('root')
)
