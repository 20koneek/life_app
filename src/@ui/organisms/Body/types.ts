import { CardProps } from '../../molecules/Card'

export interface Card extends CardProps {
    id: string
}

export interface Props {
    cards: Card[]
}