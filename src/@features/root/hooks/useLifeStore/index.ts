import { useCallback, useReducer } from 'react'
import { initStore, lastThreeEqual, mapCard, randomKind } from './helpers'
import { Card, Kind, Reducer, UseLifeStore } from './types'

const reducer: Reducer = (state, action) => {
    switch (action.type) {
        case 'click':
            if (!state.allowClick) {
                return state
            }

            const kind = randomKind()
            const cards: Card[] = [
                ...state.cards,
                mapCard(kind),
            ]

            const allowClick: boolean = !lastThreeEqual(cards)

            if (!allowClick) {
                const finishKind: Kind = kind === 'alive' ? 'life' : 'death'
                cards.push(mapCard(finishKind))
            }

            return {
                allowClick,
                cards,
            }
        default:
            console.error('wrong action type')
            return state
    }
}

export const useLifeStore: UseLifeStore = () => {
    const [state, dispatch] = useReducer<Reducer>(reducer, initStore)
    const action = useCallback(() => dispatch({ type: 'click' }), [])

    return [state, action]
}