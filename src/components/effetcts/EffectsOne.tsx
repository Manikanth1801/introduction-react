import React, { useEffect } from 'react'

const EffectsOne = () => {
    let dependencies:string = ''
    useEffect(() => {
        // Side effect code here
      }, [dependencies]);
      
  return (
    <div>EffectsOne</div>
  )
}

export default EffectsOne