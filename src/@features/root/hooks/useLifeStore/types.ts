export type Kind = 'death' | 'dead' | 'life' | 'alive'

export interface Card {
    id: string
    kind: Kind
    text: string
    secondText: string
}

export interface Store {
    cards: Card[]
    allowClick: boolean
}

export interface Action {
    type: 'click'
}

export type LastThreeEqual = (cards: Card[]) => boolean

export type MapCard = (kind: Kind) => Card

export type Reducer = (state: Store, action: Action) => Store

export type UseLifeStore = () => [Store, VoidFunction]