import React, { FC, memo } from 'react'
import './styles.css'

export const Skeleton: FC = memo(({ children }) => (
    <div className='skeleton'>
        {children}
    </div>
))
