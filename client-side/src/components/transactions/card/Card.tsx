import { FC  } from 'react'
import { CardStyled } from './Card.styled'

const Card: FC<{balance: number | null}> = ({balance}) => {


  return (
    <CardStyled>
      <h2>Visa</h2>
      {balance !== null && <p>Balance: {balance}</p>}
    </CardStyled>
  )
}

export default Card