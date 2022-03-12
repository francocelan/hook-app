import React, { useCallback} from 'react';
import { Hijo } from './Hijo';
import { useState } from 'react';

import '../02-useEffect/effects.css';

/* 
 
** tarea **

Tenemos que prevenir que los 5 hijos se rendericen. ya que como estan actualmente se renderizan los 5 hijos por cada vez que tocamos un boton 
El mensaje "Me volvi a generar" solo debe aparecer una vez. Actualmente ese mensaje aparece cada vez que hago click en un boton

tenemos que aplicar react.memo y el useCallback

*/

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementSolution = useCallback((num) => {
        setValor( c => c + num );
    }, [setValor]);


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementSolution={ incrementSolution }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
