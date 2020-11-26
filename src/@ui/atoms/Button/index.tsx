import React, { FC } from 'react'
import './styles.css'

export const Button: FC = () => (
    <button
        className='button'
        onClick={() => console.log(1)}
    >
        Button
    </button>
)