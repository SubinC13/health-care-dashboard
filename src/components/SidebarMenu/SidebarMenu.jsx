import "./SidebarMenu.css";

const SidebarMenu = ({ menuItems }) => {
  return (
    <ul>
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href="#" className="sidebar-link">
            <img src={item.icon} alt="logo" width={18} height={18} />
            <span className={`menuText ${item.label}`}>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SidebarMenu;
