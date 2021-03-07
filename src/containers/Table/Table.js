import TableItem from '../../components/TableItem/TableItem';
import Human from '../../assets/images/human.png';

import './Table.scss';

const tableInfoArr = [
    {
        id: 0,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: Human
    },

    {
        id: 1,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: Human
    },

    {
        id: 2,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: Human
    },

    {
        id: 3,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: Human
    },

    {
        id: 4,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: Human
    },

    {
        id: 5,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: Human
    },

    {
        id: 6,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: Human
    },

    {
        id: 7,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay: 'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: Human
    }

]

const Table = () => {
    return (
        <div className="table">
            <h3>All tickets</h3>
           {
                tableInfoArr.map((item) => (
                    <TableItem
                        id={item.id}
                        subject={item.subject}
                        updateDay={item.updateDay}
                        customerName={item.customerName}
                        customerDate={item.customerDate}
                        dateDay={item.dateDay}
                        dateHour={item.dateHour}
                        status={item.status}
                        imgLink={item.imgLink}
                    />
                ))
           }
        </div>
    )
}

export default Table;