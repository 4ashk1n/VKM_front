import './App.css'
import '@mantine/core/styles.css';

import {AppShell, createTheme, MantineProvider, NavLink, Stack, ThemeIcon} from '@mantine/core';
import {useDisclosure} from "@mantine/hooks";
import Header from "./components/AppShell/Header.tsx";
import {IoBriefcase, IoHome} from "react-icons/io5";
import {MdContactMail} from "react-icons/md";
import {FaListAlt} from "react-icons/fa";
import {GiChemicalTank} from "react-icons/gi";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "./components/Welcome/WelcomePage.tsx";
import ContactsPage from "./components/Contacts/ContactsPage.tsx";
import CatalogPage from "./components/Catalog/CatalogPage.tsx";

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

function App() {
    const [opened, {toggle}] = useDisclosure();
    return (
        <MantineProvider theme={theme}>
            <AppShell
                header={{height: 100}}
                navbar={{
                    width: 250,
                    breakpoint: 'sm',
                    collapsed: {mobile: !opened},
                }}
                padding={'md'}
            >
                <Header opened={opened} toggle={toggle}/>

                <AppShell.Navbar p="md">
                    <Stack align={'start'} gap={10}>
                        <NavLink
                            href={'/'}
                            label="Добро пожаловать!"
                            leftSection={<ThemeIcon variant={'light'}><IoHome size={16}/></ThemeIcon>}
                        />

                        <NavLink
                            label="Услуги"
                            leftSection={<ThemeIcon variant={'light'}><IoBriefcase size={16}/></ThemeIcon>}
                        />

                        <NavLink
                            href={'/catalog'}
                            label="Каталог ВКМ"
                            leftSection={<ThemeIcon variant={'light'}><FaListAlt size={16}/></ThemeIcon>}
                        />

                        <NavLink
                            label="Заказ штаммов"
                            leftSection={<ThemeIcon variant={'light'}><GiChemicalTank size={16}/></ThemeIcon>}
                        />

                        <NavLink
                            href={'/contacts'}
                            label="Контакты"
                            leftSection={<ThemeIcon variant={'light'}><MdContactMail size={16}/></ThemeIcon>}
                        />

                    </Stack>
                </AppShell.Navbar>

                <AppShell.Main>
                    <BrowserRouter>
                        <Routes>

                            <Route path={'/'} element={<WelcomePage/>}/>
                            <Route path={'/contacts'} element={<ContactsPage/>}/>
                            <Route path={'/catalog'} element={<CatalogPage/>}/>
                        </Routes>
                    </BrowserRouter>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    )
}

export default App
