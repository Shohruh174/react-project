import { Component } from 'react';
import { Link } from 'react-router-dom';

import SidebarButton from '../../components/SidebarButton/SidebarButton';
import {
    OverviewIcon,
    TicketsIcon,
    IdeasIcon,
    ContactsIcon,
    AgentsIcon,
    ArticlesIcon,
    SettingsIcon,
    SubIcon
} from '../../assets/icons/Icons';

import SidebarLogoIcon from '../../assets/images/sidebar-logo.svg';
import './Sidebar.scss';

class Sidebar extends Component {
    render() {

        const { setActivePage, activePage } = this.props;

        return (
            <div className="sidebar">
                <a href="javascript:void(0)" className="sidebar-logo">
                    <img src={SidebarLogoIcon} alt="" />
                    <h2>Dashboard Kit</h2>
                </a>

                <Link to="/overview" onClick={() => setActivePage('overview')}>
                    <SidebarButton
                        title="Overview"
                        icon={<OverviewIcon />}
                        active={activePage == 'overview'}
                    />
                </Link>

                <Link to="/tickets" onClick={() => setActivePage('tickets')}>
                    <SidebarButton
                        title="Tickets"
                        icon={<TicketsIcon />}
                        active={activePage == 'tickets'}
                    />
                </Link>

                <Link to="/ideas" onClick={() => setActivePage('ideas')}>
                    <SidebarButton
                        title="Ideas"
                        icon={<IdeasIcon />}
                        active={activePage == 'ideas'}
                    />
                </Link>

                <SidebarButton title="Contacts" icon={<ContactsIcon />} />
                <SidebarButton title="Agents" icon={<AgentsIcon />} />
                <SidebarButton title="Articles" icon={<ArticlesIcon />} />
                <SidebarButton title="Settings" icon={<SettingsIcon />} />
                <SidebarButton title="Subscription" icon={<SubIcon />} />
            </div>
        )
    }
}

export default Sidebar;