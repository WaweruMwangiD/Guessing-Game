import React from 'react'
import './Input.css'

function Input({onChange, value}) {
  return (
    <div>
        <form>
            <input type='text' placeholder='Guess the number' onChange={onChange} value={value} />
        </form>
    </div>
  )
}

export default Input