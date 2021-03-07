import { BellIcon, SearchIcon } from '../../assets/icons/Icons';

import './Toolbar.scss';

import BratImg from '../../assets/images/brat.png'

const Toolbar = ({activePage}) => {
    return (
        <div className="toolbar">
            <div className="toolbar-left">
                <h2 className="page-title">{activePage}</h2>
            </div>

            <div className="toolbar-right">
                <button className="icon-btn">
                    <SearchIcon/>
                </button>
                <button className="icon-btn">
                    <BellIcon/>
                </button>

                <a href="javascript:void(0)" className="user-account-dropdown">
                    <span>Jones Ferdinand</span>
                    <img src={BratImg} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Toolbar;