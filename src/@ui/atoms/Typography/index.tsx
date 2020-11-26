import React, { FC, memo } from 'react'
import { Props } from './types'
import './styles.css'

export const Typography: FC<Props> = memo<Props>(({
    children,
    negative = false,
    size = 'medium',
}) => (
    <div className={`typography ${size} ${negative ? 'negative' : ''}`}>
        {children}
    </div>
))
