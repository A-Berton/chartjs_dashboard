import { faUsers, faLock, faPieChart, faCartPlus } from '@fortawesome/free-solid-svg-icons'

export const stats = [
    {
        id: 1,
        icon: faLock,
        iconStyle: 'text-sm text-orange-500 ',
        title:'Total Sales',
        growth:'24%',
        amount:'27300',
    },
    {
        id: 2,
        icon: faPieChart,
        iconStyle: 'text-sky-500 text-sm',
        title:'Total Expenses',
        growth:'-32%',
        amount:'27340',
    },
    {
        id: 3,
        icon: faUsers,
        iconStyle: 'text-green-500 text-sm',
        title:'Total Visitors',
        growth:'+48%',
        amount:'18260',
    },
    {
        id: 4,
        icon: faCartPlus,
        iconStyle: 'text-red-500 text-sm',
        title:'Total Orders',
        growth:'+12%',
        amount:'11340',
    },
];