import React, { FC, memo } from 'react'
import { Column, Limiter, Scroll } from '../../atoms'

export const ScrollableContent: FC = memo(({ children }) => (
    <Scroll>
        <Limiter>
            <Column>
                {children}
            </Column>
        </Limiter>
    </Scroll>
))