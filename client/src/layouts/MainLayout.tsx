import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/users">Users Page</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}