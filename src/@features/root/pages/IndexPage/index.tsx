import React, { FC } from 'react'
import { Card, Column, Bottom, Header, Skeleton, Scroll, Limiter } from '../../../../@ui'

export const IndexPage: FC = () => (
    <Skeleton>
        <Header/>
        <Scroll>
            <Limiter>
                <Column>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
            </Limiter>
        </Scroll>
        <Bottom/>
    </Skeleton>
)