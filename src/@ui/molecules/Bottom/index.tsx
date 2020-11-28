import React, { FC, memo } from 'react'
import { Button, Limiter } from '../../atoms'
import './styles.css'

export const Bottom: FC = memo(({}) => (
    <Limiter className='bottom'>
        <Button>
            Text 1
        </Button>
    </Limiter>
))