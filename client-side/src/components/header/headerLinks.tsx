import { ImHome } from 'react-icons/im';
import { MdChecklist } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { BsCurrencyDollar } from 'react-icons/bs'

export const links = [
    {
        id: 1,
        path: '/',
        title: 'Home',
        icon: <ImHome />,
    },
    {
        id: 2,
        path: '/registration',
        title: 'Registrations',
        icon: <FaUserAlt/>
    },
    {
        id: 3,
        path: '/expenses',
        title: 'Statistics',
        icon: <BsCurrencyDollar/>
    },
    {
        id: 4,
        path: '/transaction',
        title: 'Transaction',
        icon: <MdChecklist/>
    },
]


