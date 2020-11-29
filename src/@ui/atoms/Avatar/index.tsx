import React, { FC, memo } from 'react'
import { Props } from './types'
import './styles.css'

export const Avatar: FC<Props> = memo<Props>(({ kind, className }) => (
    <div className={`avatar ${kind} ${className}`}>
        {kind === 'dead' && '💀'}
        {kind === 'death' && '☠️'}
        {kind === 'alive' && '💥'}
        {kind === 'life' && '🐣'}
    </div>
))

export type AvatarProps = Props