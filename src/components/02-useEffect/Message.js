import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

        const mouseMove = (e) => {
            const coors = {x: e.x, y: e.y}
        }
        
        window.addEventListener('mousemove', mouseMove);
    
      return () => {
        window.removeEventListener('mousemove', mouseMove);
      }
    }, [])
    

  return (
    <>
        <h3>Eres genial!</h3>
    </>
  )
}
