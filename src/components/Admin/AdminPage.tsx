import { ActionIcon, Badge, Button, CopyButton, Group, PasswordInput, Select, Stack, Table, Text, TextInput, Title, Tooltip } from "@mantine/core";
import ContentBlock from "../App/ContentBlock";
import { FiCheck, FiCopy, FiX } from "react-icons/fi";
import { IUser, ROOTS } from "../../stores/User";
import { useEffect, useState } from "react";
import api from "../../../axiosConfig";
import { StrainData, StrainDataShort } from "../../stores/Strain";
import { useTranslation } from "react-i18next";

type EditRequest = {
    strain: StrainDataShort,
    changedBy: IUser
    changes: Partial<StrainData>,
    createdAt: string,
    updatedAt: string,
    approved: boolean
}

type AddRequest = {
    createdBy: IUser,
    changes: Partial<StrainData>,
    createdAt: string,
    updatedAt: string,
    approved: boolean
}


const AdminPage: React.FC = () => {

    const { t } = useTranslation();

    const [editRequests, setEditRequests] = useState<EditRequest[]>([])
    const [addRequests, setAddRequests] = useState<AddRequest[]>([])
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        (async () => {
            try {
                const dataEdit = (await api.get('strains/get_changed_strains/')).data;
                setEditRequests(dataEdit.results);
            }
            catch (e) {
                console.log(e);
            }


            try {
                const dataAdd = (await api.get('strains/get_new_strains/')).data;
                setAddRequests(dataAdd.results);
            } catch (e) {
                console.log(e);
            }

            try {
                const dataUsers = (await api.get('auth/users_list/')).data;
                setUsers(dataUsers.results);
            } catch (e) {
                console.log(e);
            }

        })()
    }, [])

    return (
        <Stack align={'center'} gap={40}>
            <Title>{t("Панель администратора")}</Title>


            <ContentBlock w='100%' p={'15px 0 0 0'} title={t("Каталог микроорганизмов - Заявки")}>
                <Table w='100%' >
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>
                                {t('Действие')}
                            </Table.Th>
                            <Table.Th>
                                {t('Пользователь')}
                            </Table.Th>
                            <Table.Th>
                                {t("Микроорганизм")}
                            </Table.Th>
                            <Table.Th w='fit-content'></Table.Th>
                            <Table.Th w='fit-content'></Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {
                            addRequests.map((request, index) => (
                                <Table.Tr key={index}>
                                    <Table.Td>
                                        <Badge size='lg' color='green'>
                                            {t("Add")}
                                        </Badge>
                                    </Table.Td>
                                    <Table.Td>
                                        {request.createdBy.username}
                                    </Table.Td>
                                    <Table.Td>
                                        {request.changes.NameAndTaxonomy?.Genus + ' ' + request.changes.NameAndTaxonomy?.Species}
                                    </Table.Td>
                                    <Table.Td w='150px'>
                                        <Button size="md" variant="default">
                                            {t("Подробнее")}
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
                        {
                            editRequests.map((request, index) => (
                                <Table.Tr key={index}>
                                    <Table.Td>
                                        <Badge size='lg' color='gray'>
                                            {t("Edit")}
                                        </Badge>
                                    </Table.Td>
                                    <Table.Td>
                                        {request.changedBy.username}
                                    </Table.Td>
                                    <Table.Td>
                                        {request.strain.Genus + ' ' + request.strain.Species}
                                    </Table.Td>
                                    <Table.Td w='150px'>
                                        <Button size="md" variant="default">
                                            {t("Подробнее")}
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