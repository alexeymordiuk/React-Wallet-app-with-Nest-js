import { FC } from 'react'
import { BsPlus } from 'react-icons/bs'
import { OpenWindowButtonStyled, WindowButtonTitle } from './OpenWindowButton.styled'

interface IOpenWindowButtonProps {
  title?: string
  onClick: () => void
}

const OpenWindowButton: FC<IOpenWindowButtonProps> = ({title, onClick}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
    <WindowButtonTitle>{title}</WindowButtonTitle>
    <OpenWindowButtonStyled onClick={onClick}>
      <BsPlus />
    </OpenWindowButtonStyled>
  </div>
  )
}

export default OpenWindowButton