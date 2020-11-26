import React, { FC, memo } from 'react'
import './styles.css'

export const Button: FC = memo(() => (
    <button
        className='button'
        onClick={() => console.log(1)}
    >
        Button
    </button>
))