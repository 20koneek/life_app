import React, { FC, memo } from 'react'
import { Typography } from '../../atoms'
import { Props } from './types'
import './styles.css'

export const Header: FC<Props> = memo<Props>(({ title }) => (
    <div className='header'>
        <Typography
            negative
            size='large'
        >
            {title}
        </Typography>
    </div>
))

export type HeaderProps = Props