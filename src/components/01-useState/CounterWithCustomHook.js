import React from 'react';
import { useCounter } from '../../hooks/useCounter'

import './counter.css';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} =  useCounter( 500 );
  return (
    <>
        <h1>Counter with Hook: { state } </h1>
        <hr />

        <button onClick={ () => increment(10)} className='btn btn-primary'>+ 1</button>

        <button onClick={ () => decrement(10)} className='btn btn-danger'>- 1</button>

        <button onClick={ reset } className='btn btn-success'>Reset</button>
    </>
  )
}
