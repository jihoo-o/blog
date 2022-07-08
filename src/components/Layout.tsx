import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

interface LayoutProps {}

const Layout = (props: LayoutProps) => (
    <div>
        <Sidebar />
        <Outlet />
    </div>
);

export default Layout;
