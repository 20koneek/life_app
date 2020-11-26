import React, { FC } from 'react'
import { Avatar, Button, Column, Content, Page, Panel, Typography } from '../../../../@ui'

export const IndexPage: FC = () => (
    <Page>
        <Content>
            <Column>
                <Panel>
                    <Avatar kind='die'/>
                </Panel>
                <Typography>Test 1</Typography>
                <Typography size='large' negative>Test 1</Typography>
                <Button/>
            </Column>
        </Content>
    </Page>
)