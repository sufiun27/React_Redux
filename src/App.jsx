
import React from 'react'
import Counter from './components/counters/counter/Counter'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './components/counters/countersSlice'
import CounterDisplay from './components/displays/CounterDisplay/CounterDisplay'

function App() {

const counters = useSelector((state) => state.counters);
const dispatch = useDispatch();

const handleIncrement = (counterId) => { dispatch(increment(counterId)); };
const handleDecrement = (counterId) => { dispatch(decrement(counterId)); };


  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
      {/* <div className="p-6 bg-gray-200 rounded-lg shadow-lg">
        Centered Content
      </div> */}
      <div className='flex flex-col items-center'>
      
      <div>
      {counters.map((counter) => (
                <div key={counter.id}>
                    counterNo: {counter.id} | Value: {counter.value}
                </div>
            ))}
      </div>

    <div>
    {counters.map((counter) => (
      <Counter key={counter.id} counter={counter} onIncrement={handleIncrement} onDecrement={handleDecrement} />
    ))}
    </div>
    
    <div>
    <CounterDisplay />
    </div>
      </div>
    
    </div>

            
    </>
  )
}

export default App

