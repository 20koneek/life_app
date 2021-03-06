import React, { FC, memo } from 'react'
import './styles.css'

export const Panel: FC = memo(({ children }) => (
    <div className='panel'>
        {children}
    </div>
))