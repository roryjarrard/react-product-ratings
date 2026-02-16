import Products from "./Products"
import { Button } from 'react-bootstrap'
import Rating from "./Rating"

function App() {
  const isValid = true
  return (
    <div className="p-4">
      <Products />
      <Button variant="primary" disabled={isValid}>Default</Button>

      <div>
        <Rating rating='1' />
        <Rating rating='2' />
        <Rating rating='3' />
        <Rating rating='4' />
        <Rating rating='5' />
      </div>
    </div>
  )
}

export default App
