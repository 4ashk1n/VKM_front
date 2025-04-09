import { Stack, ThemeIcon, NavLink, AppShell, Button, Group, Avatar } from '@mantine/core';
import { IoHome, IoBriefcase } from 'react-icons/io5';
import { FaListAlt } from 'react-icons/fa';
import { GiChemicalTank } from 'react-icons/gi';
import { MdContactMail } from 'react-icons/md';
import UserButton from './UserButton';
import { useTranslation } from 'react-i18next';

export function NavBar() {
    const { t } = useTranslation()
    return (
        <AppShell.Navbar>
            <Stack justify='space-between' h='100%'>
                <Stack align={'start'} p="md" gap={10}>
                    <NavLink
                        href={'/'}
                        label={t("Добро пожаловать!")}
                        leftSection={<ThemeIcon variant={'light'}><IoHome size={16} /></ThemeIcon>}
                        
                    />
                    <NavLink
                        label={t("Услуги")}
                        href={'/services'}
                        leftSection={<ThemeIcon variant={'light'}><IoBriefcase size={16} /></ThemeIcon>}
                    />
                    <NavLink
                        href={'/catalog'}
                        label={t("Каталог ВКМ")}
                        leftSection={<ThemeIcon variant={'light'}><FaListAlt size={16} /></ThemeIcon>}
                    />
                    <NavLink
                        label={t("Заказ штаммов")}
                        href='/order'
                        leftSection={<ThemeIcon variant={'light'}><GiChemicalTank size={16} /></ThemeIcon>}
                    />
                    <NavLink
                        href={'/contacts'}
                        label={t("Контакты")}
                        leftSection={<ThemeIcon variant={'light'}><MdContactMail size={16} /></ThemeIcon>}
                    />
                </Stack>

                <UserButton />
            </Stack>
        </AppShell.Navbar>
    );
}
