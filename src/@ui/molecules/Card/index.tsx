import React, { FC, memo } from 'react'
import { Avatar, Panel, Typography } from '../../atoms'
import './styles.css'

export const Card: FC = memo(({ }) => (
    <Panel>
        <div className='card'>
            <Avatar className='avatar-area' kind={'alive'}/>
            <Typography size='large'>Text 1</Typography>
            <Typography>Text 2</Typography>
        </div>
    </Panel>
))