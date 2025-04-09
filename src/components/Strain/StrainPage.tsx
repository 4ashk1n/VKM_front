import { AxiosError } from "axios";
import { NavLink, useParams } from "react-router-dom";
import api from "../../../axiosConfig";
import { Strain, StrainData } from "../../stores/Strain";
import { useContext, useEffect, useState } from "react";
import { Button, Grid, Stack, Table, Title } from "@mantine/core";
import ContentBlock from "../App/ContentBlock";
import { FiEdit, FiPlus } from "react-icons/fi";
import { AuthContext } from "../../App";

const StrainPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [strainData, setStrainData] = useState<StrainData | null | undefined>(undefined);
    const { isAuthenticated } = useContext(AuthContext)

    useEffect(() => {
        const fetchStrain = async () => {
            try {
                const strain = await Strain.fetchOne(id!);
                console.log(strain)
                setStrainData(strain ? strain.data as StrainData : null);
            } catch (e) {
                console.error(e)
            }
        }
        fetchStrain();
    }, [id]);

    return <Stack align={'center'} gap={40}>
        <Title>{strainData?.NameAndTaxonomy?.Genus} {strainData?.NameAndTaxonomy?.Species}</Title>
        {
            isAuthenticated ?
                <NavLink to={`/strain/${id}/edit`}>
                    <Button size='md' variant="default" leftSection={<FiEdit />}>Редактировать</Button>
                </NavLink>
                : null
        }
        <Grid w='100%'>
            {
                Object.keys(strainData || {}).map((key) => {
                    if (key === 'strain_id') return null;
                    return <Grid.Col span={6} key={key}>
                        <ContentBlock w='100%' h='100%' p={0}>
                            <Table w='100%' h='100%'>
                                <Table.Thead>
                                    <Table.Tr>
                                        <Table.Th colSpan={2} bg='green.1'>
                                            <Title w='100%' style={{ textAlign: 'center' }} order={3}>{key}</Title>
                                        </Table.Th>
                                    </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                    {
                                        strainData && Object.entries((strainData as {
                                            [key: string]: string | number | object;
                                        })[key] || {}).map(([key, value]) => {
                                            if (!value || key === 'strain_id') return null;
                                            const displayValue: string = typeof value === 'object' && value !== null && 'en' in value
                                                ? value['en']
                                                : value.toString();

                                            return (
                                                <Table.Tr key={key}>
                                                    <Table.Th w='30%' bg='green.1'>{key}</Table.Th>
                                                    <Table.Td>{
                                                        displayValue ?
                                                            displayValue
                                                            : '-'
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
    </Stack>;
};

export default StrainPage;
