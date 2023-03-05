import { SiJavascript } from 'react-icons/si';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

interface SidebarRoute {
  path: string;
  icon: any | IconType;
}
const sidebarRoutes: SidebarRoute[] = [
  {
    path: '/',
    icon: <SiJavascript />,
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {sidebarRoutes.map((route) => (
        <Link key={route.path} to={route.path} className="sidebar__link">
          {route.icon}
        </Link>
      ))}
    </aside>
  );
}
