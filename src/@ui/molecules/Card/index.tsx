import React, { FC, memo } from 'react'
import { Avatar, Panel, Typography } from '../../atoms'
import { Props } from './types'
import './styles.css'

export const Card: FC<Props> = memo<Props>(({
    kind,
    text,
    secondText,
}) => (
    <Panel>
        <div className='card'>
            <Avatar className='avatar-area' kind={kind}/>
            <Typography size='large'>{text}</Typography>
            <Typography>{secondText}</Typography>
        </div>
    </Panel>
))

export type CardProps = Props