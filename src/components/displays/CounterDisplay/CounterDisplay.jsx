import React from 'react'
import { useSelector } from 'react-redux'
function CounterDisplay() {
    const counters = useSelector((state) => state.counters)
    const totalCount = counters.reduce((acc, counter) => acc + counter.value, 0)
    return (
        <>
        <h1>totalCount: {totalCount}</h1>
        </>
    )
}

export default CounterDisplay
