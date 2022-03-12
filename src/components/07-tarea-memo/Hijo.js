import React from 'react';

export const Hijo = React.memo(({ numero, incrementSolution }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementSolution( numero ) }
        >
            { numero }
        </button>
    )
})
