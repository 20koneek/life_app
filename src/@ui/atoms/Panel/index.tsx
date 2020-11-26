import React, { FC } from 'react'
import './styles.css'

export const Panel: FC = ({ children }) => (
    <div className='panel'>
        {children}
    </div>
)