import React, { FC, memo } from 'react'
import { Card, ScrollableContent } from '../../molecules'
import { Props } from './types'

export const Body: FC<Props> = memo<Props>(({ cards }) => (
    <ScrollableContent>
        {cards.map(({ id, ...card }) => (
            <Card key={id} {...card}/>
        ))}
    </ScrollableContent>
))

export type BodyProps = Props