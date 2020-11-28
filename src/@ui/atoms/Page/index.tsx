import React, { FC, memo } from 'react'
import './styles.css'

export const Page: FC = memo(({ children }) => (
    <div className='page'>
        <div className='content-area'>
            {children}
        </div>
    </div>
))
