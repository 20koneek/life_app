import React, { FC, memo } from 'react'
import { Typography } from '../../atoms'
import './styles.css'

export const Header: FC = memo(({}) => (
    <div className='header'>
        <Typography
            negative
            size='large'
        >
            Text 1
        </Typography>
    </div>
))