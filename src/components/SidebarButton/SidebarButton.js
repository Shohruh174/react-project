import './SidebarButton.scss'

const SidebarButton = ({ title, icon, active }) => {
    return (
        <button className={`sidebar-btn ${active ? 'active' : ''}`}>
            <div className="btn-icon">{icon}</div>
            <span>{title}</span>
        </button>
    )
}

export default SidebarButton;