import { Component } from 'react';

import './Tickets.scss';

import Table from '../../containers/Table/Table';

class Tickets extends Component {
    render() {
        return (
            <div className="tickets-page">

                <Table />
            </div>
        )
    }
}

export default Tickets;