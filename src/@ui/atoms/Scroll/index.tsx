import React, { FC, memo } from 'react'
import './styles.css'

export const Scroll: FC = memo(({ children }) => (
    <div className='scroll'>
        {children}
    </div>
))
