import { ReactNode } from 'react';
import Sidebar from '../Sidebar';
import './Layout.scss';
import Navbar from './components/Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="layout">
      <Sidebar />
      <div className="layout__container">
        <Navbar />
        <div>{children}</div>
      </div>
    </main>
  );
}
