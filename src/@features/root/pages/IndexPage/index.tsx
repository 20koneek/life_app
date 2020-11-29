import React, { FC } from 'react'
import { LifeApp } from '../../../../@ui'

export const IndexPage: FC = () => {
    return (
        <LifeApp
            body={{ cards: [] }}
            header={{ title: 'Клеточное наполнение' }}
            bottom={{
                button: {
                    name: 'Сотворить',
                    onClick: () => console.log(1),
                },
            }}
        />
    )
}