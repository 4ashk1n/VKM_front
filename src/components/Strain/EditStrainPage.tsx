import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import api from "../../../axiosConfig";
import { Strain, StrainData } from "../../stores/Strain";
import { useEffect, useState } from "react";
import { Button, Grid, Stack, Table, TextInput, Title } from "@mantine/core";
import ContentBlock from "../App/ContentBlock";

const EditStrainPage: React.FC<{strain?: Strain}> = ({strain}) => {

    const { id } = useParams<{ id: string }>();
    const [strainData, setStrainData] = useState<null | StrainData>(null);

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

        if (id) {
            fetchStrain();  
        }  
        else {
            setStrainData(Strain.createEmpty().data as StrainData);
        }
    }, [id]);

    const handleSave = async () => {
        try {
            if (!id){
                await api.post('/strains/add', {changes: strainData});
            }
            else {
                await api.post(`/strains/${id}/edit/`, {changes: strainData});
            }
        } catch (e) {
            console.error(e)
        }
    }

    return <Stack align={'center'} gap={40}>
        <Title>
            {id ?
            `${strainData?.NameAndTaxonomy?.Genus} ${strainData?.NameAndTaxonomy?.Species}`
            :   'New Strain'
            }
        </Title>
        <Button size='md' onClick={handleSave} variant="filled" >Отправить запрос</Button>
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
                                            console.log(key, value)
                                            const displayValue: string = typeof value === 'object' && value !== null && 'en' in value
                                                ? value['en']
                                                : value.toString();

                                            return (
                                                <Table.Tr key={key}>
                                                    <Table.Th w='30%' bg='green.1'>{key}</Table.Th>
                                                    <Table.Td>{
                                                        <TextInput size='md' w='100%' value={displayValue} />
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

export default EditStrainPage;
