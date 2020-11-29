import React, { FC, memo } from 'react'
import { Skeleton } from '../../atoms'
import { Bottom, Header } from '../../molecules'
import { Body } from '../../organisms'
import { Props } from './types'

export const LifeApp: FC<Props> = memo<Props>(({
    header,
    body,
    bottom,
}) => (
    <Skeleton>
        <Header {...header}/>
        <Body {...body}/>
        <Bottom {...bottom}/>
    </Skeleton>
))