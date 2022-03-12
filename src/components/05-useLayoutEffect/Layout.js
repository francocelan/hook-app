import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}
    `);
    
    const { quote } = !!data && data[0];

    const parrafoTag = useRef();

    useLayoutEffect(() => {

      console.log(parrafoTag.current.getBoundingClientRect());

    }, [quote])


  return (
    <div>
        <h1>LayoutEffect</h1>
        <hr/>

        <blockquote className='blockquote text-right'>
            <p
                ref={ parrafoTag }
            >{quote}</p>
        </blockquote>
        

        <button 
            className='btn btn-primary'
            onClick={ increment }
        >
            Siguiente quote
        </button>

    </div>
  )
}
