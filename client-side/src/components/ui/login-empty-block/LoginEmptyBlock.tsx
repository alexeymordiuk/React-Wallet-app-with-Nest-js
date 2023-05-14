import { FC } from 'react'

interface ILoginEmptyBlockProps {
    title: string
}

const LoginEmptyBlock: FC<ILoginEmptyBlockProps> = ({title}) => {
  return (
    <div>{title}</div>
  )
}

export default LoginEmptyBlock