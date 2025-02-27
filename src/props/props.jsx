import { useState } from 'react'
import { Navbar } from './navbar'

export function Props() {
    const [count, setCount] = useState(0)
    return (
        < >
           <Navbar count={count}/>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>+</button>
            <button className='btn btn-lg btn-light disabled'>{count}</button>
            <button className='btn btn-danger' onClick={() => setCount(count - 1)}>-</button>
            
        </>


)
}