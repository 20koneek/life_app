import React, { FC, memo } from 'react'
import { Props } from './types'
import './styles.css'

export const Limiter: FC<Props> = memo<Props>(({
    className,
    children,
}) => (
    <div className='limiter'>
        <div className={`limiter-area ${className ?? ''}`}>
            {children}
        </div>
    </div>
))
