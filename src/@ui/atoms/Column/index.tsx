import React, { FC, memo } from 'react'
import './styles.css'

export const Column: FC = memo(({ children }) => (
    <div className='column'>
        {children}
    </div>
))
