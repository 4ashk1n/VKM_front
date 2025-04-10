import { Table, TextInput, Select, Button, CopyButton, Tooltip, ActionIcon, Group, Text, Modal, Stack, Center, PasswordInput, Title } from "@mantine/core"
import { t } from "i18next"
import { FiCheck, FiCopy, FiX } from "react-icons/fi"
import { IUser, ROOTS } from "../../stores/User"
import ContentBlock from "../App/ContentBlock"
import { useEffect, useRef, useState } from "react"
import api from "../../../axiosConfig"
import { useTranslation } from "react-i18next"

const UsersTable = () => {

    const { t } = useTranslation()
    const [users, setUsers] = useState<IUser[]>([])
    const createUserRefs = {
        username: useRef<HTMLInputElement>(null),
        first_name: useRef<HTMLInputElement>(null),
        last_name: useRef<HTMLInputElement>(null),
        email: useRef<HTMLInputElement>(null),
        role: useRef<HTMLInputElement>(null),
        password: useRef<HTMLInputElement>(null)
    }
    const [createUserError, setCreateUserError] = useState('')
    const [createUserModalOpened, setCreateUserModalOpened] = useState(false)
    const [userToDelete, setUserToDelete] = useState<IUser | null>(null);
    const [removeUserModalOpened, setRemoveUserModalOpened] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const dataUsers = (await api.get('auth/users_list/')).data;
                console.log(dataUsers)
                setUsers(dataUsers);
            } catch (e) {
                console.log(e);
            }
        })()
    }, [])

    useEffect(() => {
        console.log(users)
    }, users)

    const handleCreateUser = async () => {
        if (Object.values(createUserRefs).some((v) => !v || v.current?.value === '' || !(v.current?.value))) {
            setCreateUserError(t('Вы заполнили не все поля'))
            return;
        }

        api.post('/auth/add_user/', {
            user: {
                username: createUserRefs.username.current?.value,
                email: createUserRefs.email.current?.value,
                isModerator: createUserRefs.role.current?.value == ROOTS[1],
                first_name: createUserRefs.first_name.current?.value,
                last_name: createUserRefs.last_name.current?.value,
                password: createUserRefs.password.current?.value
            }
        }).catch((e) => {
            setCreateUserError(e)
        }).then(() => {
            setCreateUserModalOpened(false);
        })
    }

    const handleDeleteUser = async () => {
        if (!userToDelete) return;

        api.delete('/auth/delete_user/', {
            data: {
                user_id: userToDelete.id
            }
        }).then(() => {
            setRemoveUserModalOpened(false);
        })
    }

    return <ContentBlock w='100%' p={'15px 0 0 0'} title={t("Пользователи")}>
        <Center w='100%' mb='20px'>
            <Button size='md' w='50%' onClick={() => setCreateUserModalOpened(true)}>
                {t('Create')}
            </Button>
        </Center>

        <Table w='100%' >
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>
                        ID
                    </Table.Th>
                    <Table.Th>
                        {t("Username")}
                    </Table.Th>
                    <Table.Th>
                        {t("Name")}
                    </Table.Th>
                    <Table.Th>
                        {t("Email")}
                    </Table.Th>
                    <Table.Th>
                        {t("Role")}
                    </Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>

                {
                    users ? users.map((user) => (
                        <Table.Tr key={user.id}>
                            <Table.Td>
                                <Text c='gray'>
                                    {user.id}
                                </Text>
                            </Table.Td>
                            <Table.Td maw={120}>
                                <TextInput value={user.username} size='md' rightSection={
                                    <CopyButton value={user.username} timeout={2000}>
                                        {({ copied, copy }) => (
                                            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                                <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                                    {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                                                </ActionIcon>
                                            </Tooltip>
                                        )}
                                    </CopyButton>
                                } />
                            </Table.Td>
                            <Table.Td>
                                <Group wrap='nowrap'>
                                    <TextInput placeholder={t("First name")} ref={createUserRefs.first_name} size='md' w='100%' ></TextInput>
                                    <TextInput ref={createUserRefs.last_name} size='md' w='100%' placeholder={t("Last name")}></TextInput>
                                </Group>
                            </Table.Td>
                            {/* <Table.Td maw={120}>
                            <PasswordInput value={user.password} rightSection={
                                <CopyButton value={user.password} timeout={2000}>
                                    {({ copied, copy }) => (
                                        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                            <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                                {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                                            </ActionIcon>
                                        </Tooltip>
                                    )}
                                </CopyButton>
                            } />
                        </Table.Td> */}
                            <Table.Td maw={120}>
                                <TextInput size='md' value={user.email} rightSection={
                                    <CopyButton value={user.email} timeout={2000}>
                                        {({ copied, copy }) => (
                                            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                                <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                                    {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                                                </ActionIcon>
                                            </Tooltip>
                                        )}
                                    </CopyButton>
                                } />
                            </Table.Td>
                            <Table.Td maw={120}>
                                <Select data={Object.values(ROOTS).map((v) => {
                                    return {
                                        label: t(v),
                                        value: v
                                    }
                                })} value={user.isModerator ? ROOTS[1] : ROOTS[0]} size='md' />
                            </Table.Td>
                            <Table.Td w='150px'>
                                <Group gap={5} w='100%' justify="end">
                                    <Button onClick={() => { setUserToDelete(user); setRemoveUserModalOpened(true); }} size="md" variant="filled" color="red">
                                        <FiX />
                                    </Button>
                                </Group>
                            </Table.Td>
                        </Table.Tr>
                    ))
                        : null
                }
            </Table.Tbody>
        </Table>


        <Modal opened={createUserModalOpened} title={t('New user')} onClose={() => setCreateUserModalOpened(false)}>

            <Stack gap={20}>

                <TextInput description={t('Login')} ref={createUserRefs.username} size='md' w='100%'></TextInput>

                <PasswordInput description={t('Password')} ref={createUserRefs.password} size='md' w='100%'>

                </PasswordInput>

                <Group wrap='nowrap'>
                    <TextInput description={t("First name")} ref={createUserRefs.first_name} size='md' w='100%' ></TextInput>
                    <TextInput ref={createUserRefs.last_name} size='md' w='100%' description={t("Last name")}></TextInput>
                </Group>

                <TextInput ref={createUserRefs.email} size='md' w='100%' description={t("Email")}></TextInput>

                <Select description={t("Role")} ref={createUserRefs.role} data={Object.values(ROOTS)} value={ROOTS[0]} size='md' />

                <Button size='md' onClick={() => handleCreateUser()}>
                    {t('Create')}
                </Button>
            </Stack>
        </Modal>

        <Modal opened={removeUserModalOpened} title={t("Remove user")} onClose={() => { setRemoveUserModalOpened(false) }}>
            <Stack gap={20}>
                <Text size='md'>{t("Are you sure you want to delete this user?")}</Text>
                <Title order={3}>{userToDelete?.first_name || '' + userToDelete?.last_name || ''}</Title>
                <Group w='100%' wrap='nowrap' grow gap={10}>
                    <Button size='md' variant="default" onClick={() => setRemoveUserModalOpened(false)}>
                        {t('Cancel')}
                    </Button>
                    <Button size='md' color='red' onClick={() => handleDeleteUser()}>
                        {t('Delete')}
                    </Button>
                </Group>

            </Stack>
        </Modal>
    </ContentBlock>
}

export default UsersTable;