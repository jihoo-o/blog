import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import { breakpoints, mediaQuery } from 'lib/styles/media';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    ${mediaQuery(breakpoints.mobile)} {
        flex-direction: column;
    }
`;

const SidebarArea = styled.div`
    width: 100%;
    height: 100%;
    flex-basis: 15%;
    flex-shrink: 0;
    background-color: orange;
    ${mediaQuery(breakpoints.mobile)} {
        flex-basis: 50px;
    }
`;

const ContentsArea = styled.div`
    width: 100%;
    height: 100%;
    background-color: yellow;
`;

interface LayoutProps {}

const Layout = (props: LayoutProps) => (
    <Container>
        <SidebarArea>
            <Sidebar />
        </SidebarArea>
        <ContentsArea>
            <Outlet />
        </ContentsArea>
    </Container>
);

export default Layout;
