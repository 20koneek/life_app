import React, { FC, memo } from 'react'
import './styles.css'

export const Content: FC = memo(({ children }) => (
    <div className='content'>
        {children}
    </div>
))
