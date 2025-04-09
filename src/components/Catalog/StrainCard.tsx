import { Button, Stack, Table, Text, Title } from "@mantine/core";
import { Strain, StrainDataShort } from "../../stores/Strain";
import ContentBlock from "../App/ContentBlock";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


const StrainCard: React.FC<{ strain: Strain }> = ({ strain }) => {
    const data = strain.data as StrainDataShort

    const { t, i18n } = useTranslation();

    return (
        <ContentBlock p={0} w='100%' h='100%' align={'center'} justify={'space-between'} direction={'column'}>
            <Stack bg='green' p={15} w='100%' gap={5}>
                <Title fz={'1.5vw'} order={3} w='100%' c='white'>
                    {data.Genus} {data.Species}
                </Title>
                <Text lh={1} c='green.5' w='100%' size='xs'>ID: {strain.data.strain_id}</Text>
            </Stack>

            <Table h='100%' variant="vertical" w='100%'>
                <Table.Tbody>
                    {
                        Object.entries(data).map(([key, value]) => {
                            if (!value || key === 'strain_id') return null;
                            const displayValue = typeof value === 'object' && value !== null && 'en' in value
                                ? value[i18n.language as 'en' | 'ru' || 'en']
                                : value.toString();

                            return (
                                <Table.Tr key={key}>
                                    <Table.Th bg='green.1'>{key}</Table.Th>
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

            <Stack p={0} w='100%'>
                <NavLink to={`/strain/${strain.data.strain_id}`}>
                    <Button bg='green.1' radius={0} size='md' variant="subtle" w='100%'>
                        {t("Подробнее")}
                    </Button>
                </NavLink>

            </Stack>


        </ContentBlock>
    );
};
export default StrainCard;
