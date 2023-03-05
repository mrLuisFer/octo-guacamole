import { MouseEventHandler } from 'react';
import { RiSettingsFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { Text } from '@chakra-ui/react';
import './Navbar.scss';

function SidebarItem({
  Icon,
  label,
  onClick = () => {},
}: {
  Icon: any;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="navbar__item" onClick={onClick} type="button">
      <Icon size="1.2rem" />
      <Text as="span">{label}</Text>
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="navbar">
      <SidebarItem Icon={RiSettingsFill} label="Settings" />
      <SidebarItem Icon={AiFillGithub} label="GitHub" />
    </header>
  );
}
