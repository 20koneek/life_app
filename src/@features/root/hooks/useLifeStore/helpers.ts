import { Kind, LastThreeEqual, MapCard, Store } from './types'

export const initStore: Store = {
    cards: [],
    allowClick: true,
}

export const randomId = (): string => Math.random().toString(36).substr(2, 9)

export const randomKind = (): Kind => Math.random() > 0.5 ? 'alive' : 'dead'

export const mapCard: MapCard = (kind) => ({
    id: randomId(),
    kind,
    text: texts[kind],
    secondText: secondTexts[kind],
})

export const lastThreeEqual: LastThreeEqual = (cards) => {
    if (cards.length < 3) {
        return false
    }

    return cards
        .slice(-3)
        .map(({ kind }) => kind)
        .filter((kind, index, arr) => arr.indexOf(kind) === index)
        .length === 1
}

export const texts: { [key in Kind]: string } = {
    dead: 'Мёртвая',
    death: 'Смерть',
    alive: 'Живая',
    life: 'Жизнь',
}

export const secondTexts: { [key in Kind]: string } = {
    dead: 'или прикидывается',
    death: 'и забвение...',
    alive: 'и шевелится!',
    life: 'Ку-ку!',
}
