import { FC } from 'react'
import { TransactionProvider } from '../transactions/TransactionsContext'
import Recharts from './recharts/Recharts'

const StatiscticsRecharts: FC = () => {
  return (
    <TransactionProvider>
        <Recharts/>
    </TransactionProvider>
  )
}

export default StatiscticsRecharts