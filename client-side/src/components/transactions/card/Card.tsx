import { FC } from 'react'
import { CardStyled } from './Card.styled'

const Card: FC = () => {
  return (
    <CardStyled>
        <h2>Visa</h2>
        <p>Balanse</p>
        <span>$ 9,300</span>
    </CardStyled>
  )
}

export default Card