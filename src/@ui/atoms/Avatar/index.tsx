import React, { FC, memo } from 'react'
import { Props } from './types'
import './styles.css'

export const Avatar: FC<Props> = memo<Props>(({ kind }) => (
    <div className={`avatar ${kind}`}>
        {kind === 'die' && '💀'}
        {kind === 'dead' && '☠️'}
        {kind === 'life' && '💥'}
        {kind === 'alive' && '🐣'}
    </div>
))
