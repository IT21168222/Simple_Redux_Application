import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './app/slice/counterSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();


  return (
    <>
    <button onClick={() => dispatch(increment())} >Increment</button>
    <span>{count}</span>
    <button onClick={() => dispatch(decrement())} >Decrement</button>
     
    </>
  )
}

export default App
