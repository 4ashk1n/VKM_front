import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import api from "../../../axiosConfig";
import { Strain, StrainData } from "../../stores/Strain";
import { useContext, useEffect, useState } from "react";
import { Button, FileInput, Grid, Modal, Stack, Table, TextInput, Title } from "@mantine/core";
import ContentBlock from "../App/ContentBlock";
import { FaFileImport } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../App";

const EditStrainPage: React.FC<{ strain?: Strain }> = ({ strain }) => {

    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const [strainData, setStrainData] = useState<null | StrainData>(null);
    const [oldStrainData, setOldStrainData] = useState<null | StrainData>(null);

    const [fileInputModalOpened, setFileInputModalOpened] = useState(false);
    const { refreshToken } = useContext(AuthContext);

    useEffect(() => {
        const fetchStrain = async () => {
            try {
                const strain = await Strain.fetchOne(id!);
                console.log(strain)
                setStrainData(strain ? strain.data as StrainData : null);
                setOldStrainData(strain ? strain.data as StrainData : null);
            } catch (e) {
                console.error(e)
            }
        }

        if (id) {
            fetchStrain();
        }
        else {
            setStrainData(Strain.createEmpty().data as StrainData);
            setOldStrainData(Strain.createEmpty().data as StrainData);
        }
    }, [id]);

    const handleSave = async () => {
        if (!oldStrainData || !strainData) return;
        const changedFields = Object.keys(oldStrainData!).filter(key => oldStrainData![key as keyof StrainData] !== strainData![key as keyof StrainData]);
        const changes = changedFields.map(key => ({ [key]: strainData![key as keyof StrainData] }));
        try {
            if (!id) {
                await api.post('/strains/add/', {
                    changes: changes,
                    refresh: `${refreshToken}`
                });
            }
            else {
                await api.post('/strains/' + id + '/edit/', {
                    changes: changes,
                    refresh: `${refreshToken}`
                });
            }
        } catch (e) {
            console.error(e)
        }
    }

    const handleChange = (key: string, key2: string, value: string) => {
        if (strainData) {
            setStrainData({ ...strainData, [key2]: { ...strainData[key2], [key]: value } });
            console.log({ ...strainData, [key]: value })
        }
    }

    const handleFileInput = async () => {

    }

    return <Stack align={'center'} gap={40}>
        <Title>
            {id ?
                `${strainData?.NameAndTaxonomy?.Genus} ${strainData?.NameAndTaxonomy?.Species}`
                : t('New Strain')
            }
        </Title>
        <Stack gap={10}>
            <Button size='md' onClick={handleSave} variant="filled" >Отправить запрос</Button>
            <Button size='md' variant='default' leftSection={<FaFileImport />} onClick={() => setFileInputModalOpened(true)}>
                {t("Import from CSV")}
            </Button>
        </Stack>

        <Grid w='100%'>
            {
                Object.keys(strainData || {}).map((key2) => {
                    if (key2 === 'strain_id') return null;
                    return <Grid.Col span={6} key={key2}>
                        <ContentBlock w='100%' h='100%' p={0}>
                            <Table w='100%' h='100%'>
                                <Table.Thead>
                                    <Table.Tr>
                                        <Table.Th colSpan={2} bg='green.1'>
                                            <Title w='100%' style={{ textAlign: 'center' }} order={3}>{key2}</Title>
                                        </Table.Th>
                                    </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                    {
                                        strainData && Object.entries((strainData as {
                                            [key: string]: string | number | object;
                                        })[key2] || {}).map(([key, value]) => {
                                            // console.log(key, value)
                                            const displayValue: string = value === null ? '' : typeof value === 'object' && value !== null && 'en' in value
                                                ? value['en']
                                                : value.toString();

                                            return (
                                                <Table.Tr key={key}>
                                                    <Table.Th w='30%' bg='green.1'>{key}</Table.Th>
                                                    <Table.Td>{
                                                        <TextInput onChange={(e) => handleChange(key, key2, e.target.value)} size='md' w='100%' value={displayValue} />
                                                    }</Table.Td>
                                                </Table.Tr>
                                            );
                                        })
                                    }
                                </Table.Tbody>
                            </Table>
                        </ContentBlock>

                    </Grid.Col>;
                })
            }
        </Grid>

        <Modal opened={fileInputModalOpened} onClose={() => setFileInputModalOpened(false)} title={t("Import from CSV")} size='md'>
            <Stack align={'center'} w='100%' gap={10}>
                <FileInput w='100%' accept="text/csv" placeholder={t("No files")} description={t("Select CSV file")} />
                <Button w='100%' size="md" onClick={handleFileInput}>{t("Import")}</Button>
                <Button w='100%' size='md' onClick={() => setFileInputModalOpened(false)} variant="default">{t("Cancel")}</Button>
            </Stack>

        </Modal>
    </Stack>;
};

export default EditStrainPage;
