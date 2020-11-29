import React, { FC, memo } from 'react'
import { Button, Limiter } from '../../atoms'
import { Props } from './types'
import './styles.css'

export const Bottom: FC<Props> = memo<Props>(({ button}) => (
    <Limiter className='bottom'>
        <Button {...button}/>
    </Limiter>
))

Bottom.whyDidYouRender = true

export type BottomProps = Props
