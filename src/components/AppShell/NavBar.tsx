import { Stack, ThemeIcon, NavLink, AppShell, Button, Group, Avatar } from '@mantine/core';
import { IoHome, IoBriefcase } from 'react-icons/io5';
import { FaListAlt } from 'react-icons/fa';
import { GiChemicalTank } from 'react-icons/gi';
import { MdContactMail } from 'react-icons/md';
import UserButton from './UserButton';

export function NavBar() {
    return (
        <AppShell.Navbar>
            <Stack justify='space-between' h='100%'>
                <Stack align={'start'} p="md" gap={10}>
                    <NavLink
                        href={'/'}
                        label="Добро пожаловать!"
                        leftSection={<ThemeIcon variant={'light'}><IoHome size={16} /></ThemeIcon>}
                    />
                    <NavLink
                        label="Услуги"
                        leftSection={<ThemeIcon variant={'light'}><IoBriefcase size={16} /></ThemeIcon>}
                    />
                    <NavLink
                        href={'/catalog'}
                        label="Каталог ВКМ"
                        leftSection={<ThemeIcon variant={'light'}><FaListAlt size={16} /></ThemeIcon>}
                    />
                    <NavLink
                        label="Заказ штаммов"
                        leftSection={<ThemeIcon variant={'light'}><GiChemicalTank size={16} /></ThemeIcon>}
                    />
                    <NavLink
                        href={'/contacts'}
                        label="Контакты"
                        leftSection={<ThemeIcon variant={'light'}><MdContactMail size={16} /></ThemeIcon>}
                    />
                </Stack>

                <UserButton />
            </Stack>
        </AppShell.Navbar>
    );
}
