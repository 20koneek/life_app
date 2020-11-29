import React, { FC, useMemo } from 'react'
import { LifeApp } from '../../../../@ui'
import { BodyProps } from '../../../../@ui/organisms/Body'
import { BottomProps } from '../../../../@ui/molecules/Bottom'
import { HeaderProps } from '../../../../@ui/molecules/Header'
import { useLifeStore } from '../../hooks'

export const IndexPage: FC = () => {
    const [store, action] = useLifeStore()

    const header = useMemo<HeaderProps>(() => ({ title: 'Клеточное наполнение' }), [])
    const body = useMemo<BodyProps>(() => ({ cards: store.cards }), [store.cards])
    const bottom = useMemo<BottomProps>(() => ({
        button: {
            name: 'Сотворить',
            onClick: action,
        },
    }), [action])

    return (
        <LifeApp
            header={header}
            body={body}
            bottom={bottom}
        />
    )
}