import './App.css'
import '@mantine/core/styles.css';

import { AppShell, createTheme, MantineProvider, NavLink, Stack, ThemeIcon } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import Header from "./components/AppShell/Header.tsx";
import { IoBriefcase, IoHome } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
import { GiChemicalTank } from "react-icons/gi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/Welcome/WelcomePage.tsx";
import ContactsPage from "./components/Contacts/ContactsPage.tsx";
import CatalogPage from "./components/Catalog/CatalogPage.tsx";
import StrainPage from './components/Strain/StrainPage.tsx';
import { NavBar } from './components/AppShell/NavBar.tsx';
import React, { useEffect } from 'react';
import authStore from './stores/User.ts';
import AdminPage from './components/Admin/AdminPage.tsx';
import EditStrainPage from './components/Strain/EditStrainPage.tsx';
import ServicesPage from './components/Services.tsx';
import OrderPage from './components/Order/OrderPage.tsx';
import Footer from './components/AppShell/Footer.tsx';

const theme = createTheme({
    primaryColor: 'green',
    fontFamily: 'Inter, sans-serif',
    headings: {
        fontFamily: 'Shantell, sans-serif'
    },
    colors: {
        green: [
            '#ebf7f1',
            '#d7f2e5',
            '#bff4d3',
            '#a8edc6',
            '#87e7b5',
            '#69e0a0',
            '#32965B',
            '#1f734f',
            '#14633e',
            '#004928'
        ]
    },
    white: '#FBF9F1',
    defaultRadius: 10
})

export function isMobile() {
    return window.innerWidth < 1024
}

export const AuthContext = React.createContext(authStore);

function App() {
    const [opened, { toggle }] = useDisclosure();

    useEffect(() => {
        authStore.init();
    }, [])

    return (
        <MantineProvider theme={theme}>
            <AuthContext.Provider value={authStore}>
                <AppShell
                    header={{ height: 100 }}
                    navbar={{
                        width: 250,
                        breakpoint: 'sm',
                        collapsed: { mobile: !opened },
                    }}
                    padding={'md'}
                >
                    <Header opened={opened} toggle={toggle} />

                    <NavBar />

                    <AppShell.Main>
                        <BrowserRouter>
                            <Routes>

                                <Route path={'/'} element={<WelcomePage />} />
                                <Route path={'/contacts'} element={<ContactsPage />} />
                                <Route path={'/catalog'} element={<CatalogPage />} />
                                <Route path={'/strain/:id'} element={<StrainPage />} />
                                <Route path={'/admin'} element={<AdminPage />} />
                                <Route path={'/strain/add'} element={<EditStrainPage />} />
                                <Route path={'/strain/:id/edit'} element={<EditStrainPage />} />
                                <Route path='/services' element={<ServicesPage />} />
                                <Route path='/order' element={<OrderPage />} />

                            </Routes>
                        </BrowserRouter>
                    </AppShell.Main>

                    <AppShell.Footer>
                        <Footer />
                    </AppShell.Footer>
                </AppShell>
            </AuthContext.Provider>
        </MantineProvider>
    )
}

export default App
