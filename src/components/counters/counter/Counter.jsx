import React from 'react'

function Counter({ counter, onIncrement, onDecrement }) {
    return (
        <>
            <hr />
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                <button
                    type="button"
                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    onClick={() => onIncrement(counter.id)}
                >
                    Increment
                </button>

                <button
                    type="button"
                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    onClick={() => onDecrement(counter.id)}
                >
                    Button text
                </button>
            </div>
        </>
    )
}

export default Counter
