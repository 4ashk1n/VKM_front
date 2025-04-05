import { ActionIcon, Badge, Button, CopyButton, Group, PasswordInput, Select, Stack, Table, Text, TextInput, Title, Tooltip } from "@mantine/core";
import ContentBlock from "../App/ContentBlock";
import { FiCheck, FiCopy, FiX } from "react-icons/fi";
import { IUser, ROOTS } from "../../stores/User";


const editRequests = [
    {
        action: 'Добавление',
        actionColor: 'green',
        initiator: 'Иван Иванович',
        microorganism: 'Metarhizium robertsii',
    },
    {
        action: 'Удаление',
        actionColor: 'red',
        initiator: 'Иван Иванович',
        microorganism: 'Metarhizium robertsii',
    },
    {
        action: 'Редактирование',
        actionColor: 'gray',
        initiator: 'Иван Иванович',
        microorganism: 'Metarhizium robertsii',
    }
]

const users: IUser[] = [
    {
        id: 1,
        username: 'admin',
        password: 'admin',
        email: 'admin@vk.com',
        roots: 1
    },
    {
        id: 2,
        username: 'user',
        password: 'user',
        email: 'user@vk.com',
        roots: 0
    },
    {
        id: 3,
        username: 'user1',
        password: 'user1',
        email: 'user1@vk.com',
        roots: 0
    },
    {
        id: 4,
        username: 'user2',
        password: 'user2',
        email: 'user2@vk.com',
        roots: 0
    },
    {
        id: 5,
        username: 'user3',
        password: 'user3',
        email: 'user3@vk.com',
        roots: 0
    },
    {
        id: 6,
        username: 'user4',
        password: 'user4',
        email: 'user4@vk.com',
        roots: 0
    },
    {
        id: 7,
        username: 'user5',
        password: 'user5',
        email: 'user5@vk.com',
        roots: 0
    },
    {
        id: 8,
        username: 'user6',
        password: 'user6',
        email: 'user6@vk.com',
        roots: 0
    },
    {
        id: 9,
        username: 'user7',
        password: 'user7',
        email: 'user7@vk.com',
        roots: 0
    },
    {
        id: 10,
        username: 'user8',
        password: 'user8',
        email: 'user8@vk.com',
        roots: 0
    },
    {
        id: 11,
        username: 'user9',
        password: 'user9',
        email: 'user9@vk.com',
        roots: 0
    },
    {
        id: 12,
        username: 'user10',
        password: 'user10',
        email: 'user10@vk.com',
        roots: 0
    },
]


const AdminPage: React.FC = () => {


    return (
        <Stack align={'center'} gap={40}>
            <Title>Панель администратора</Title>


            <ContentBlock w='100%' p={'15px 0 0 0'} title="Каталог микроорганизмов - Заявки">
                <Table w='100%' >
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>
                                Действие
                            </Table.Th>
                            <Table.Th>
                                Инициатор
                            </Table.Th>
                            <Table.Th>
                                Микроорганизм
                            </Table.Th>
                            <Table.Th w='fit-content'></Table.Th>
                            <Table.Th w='fit-content'></Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {
                            editRequests.map((request, index) => (
                                <Table.Tr key={index}>
                                    <Table.Td>
                                        <Badge size='lg' color={request.actionColor}>
                                            {request.action}
                                        </Badge>
                                    </Table.Td>
                                    <Table.Td>
                                        {request.initiator}
                                    </Table.Td>
                                    <Table.Td>
                                        {request.microorganism}
                                    </Table.Td>
                                    <Table.Td w='150px'>
                                        <Button size="md" variant="default">
                                            Подробнее
                                        </Button>
                                    </Table.Td>
                                    <Table.Td w='150px'>
                                        <Group gap={5} w='100%' justify="end">
                                            <Button size="md" variant="filled" color="red">
                                                <FiX />
                                            </Button>
                                            <Button size="md" variant="filled" color="green">
                                                <FiCheck />
                                            </Button>
                                        </Group>
                                    </Table.Td>
                                </Table.Tr>
                            ))
                        }
                    </Table.Tbody>
                </Table>


            </ContentBlock>

            <ContentBlock w='100%' p={'15px 0 0 0'} title="Пользователи">
                <Table w='100%' >
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>
                                ID
                            </Table.Th>
                            <Table.Th>
                                Username
                            </Table.Th>
                            <Table.Th>
                                Password
                            </Table.Th>
                            <Table.Th>
                                Email
                            </Table.Th>
                            <Table.Th>
                                Role
                            </Table.Th>
                            <Table.Th w='fit-content'></Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {
                            users.map((user) => (
                                <Table.Tr key={user.id}>
                                    <Table.Td>
                                        <Text c='gray'>
                                            {user.id}
                                        </Text>
                                    </Table.Td>
                                    <Table.Td maw={120}>
                                        <TextInput value={user.username} rightSection={
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
                                    <Table.Td maw={120}>
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
                                    </Table.Td>
                                    <Table.Td maw={120}>
                                        <TextInput value={user.email} rightSection={
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
                                        <Select data={Object.values(ROOTS)} value={ROOTS[user.roots]} size='md' />
                                    </Table.Td>
                                    <Table.Td w='150px'>
                                        <Group gap={5} w='100%' justify="end">
                                            <Button size="md" variant="filled" color="red">
                                                <FiX />
                                            </Button>
                                        </Group>
                                    </Table.Td>
                                </Table.Tr>
                            ))
                        }
                    </Table.Tbody>
                </Table>


            </ContentBlock>

        </Stack>
    );
};

export default AdminPage;