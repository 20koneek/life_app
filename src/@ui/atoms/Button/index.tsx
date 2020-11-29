import React, { FC, memo } from 'react'
import { Props } from './types'
import './styles.css'

export const Button: FC<Props> = memo<Props>(({
    name,
    onClick,
}) => (
    <button
        className='button'
        onClick={onClick}
    >
        {name}
    </button>
))

export type ButtonProps = Props