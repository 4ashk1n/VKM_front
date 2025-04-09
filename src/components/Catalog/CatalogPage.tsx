import { Button, Center, Divider, Grid, Group, Loader, Pagination, Stack, Text, TextInput, Title } from "@mantine/core";
import { FiPlus, FiSearch } from "react-icons/fi";
import { useContext, useEffect, useRef, useState } from "react";
import api from "../../../axiosConfig.ts";
import { Strain } from "../../stores/Strain.ts";
import StrainCard from "./StrainCard.tsx";
import authStore from "../../stores/User.ts";
import { AuthContext } from "../../App.tsx";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Catalog, CatalogContext } from "../../stores/Catalog.ts";

const catalogStore = new Catalog()

const CatalogPage: React.FC = () => {

    const [query, setQuery] = useState('');
    const ref = useRef<HTMLInputElement>(null);

    const [loading, setLoading] = useState(false);
    const [strains, setStrains] = useState<Strain[]>([]);

    const [page, setPage] = useState(0)


    const { isAuthenticated } = useContext(AuthContext);

    const { t } = useTranslation();

    useEffect(() => {
        if (query === '') {
            setStrains([]);
        }
        if (ref.current) {
            setLoading(true)
            const currentQuery = query;
            setTimeout(async () => {

                if (!ref.current || currentQuery !== ref.current.value) {
                    return;
                }

                catalogStore.setQuery(query);
            }, 1000)

        }
    }, [query]);

    useEffect(() => {
        catalogStore.setPage(page);
        (async () => {
            setStrains(await catalogStore.getItemsOnCurrentPage());
        })()
    }, [page, catalogStore.query])

    return (
        <CatalogContext.Provider value={catalogStore}>
            <Stack align={'center'} gap={40}>
                <Stack align='center' gap={10}>
                    <Title>{t("Каталог")}</Title>
                    {
                        isAuthenticated ?
                            <NavLink to='/strain/add'>
                                <Button size='md' variant="default" leftSection={<FiPlus />}>{t("Add")}</Button>
                            </NavLink>
                            : null
                    }
                </Stack>


                <Group gap={20} wrap='nowrap' justify="space-between" w='100%'>
                    <TextInput
                        ref={ref}
                        leftSection={<FiSearch size={24} />}
                        placeholder={t('Поиск')}
                        variant={'default'}
                        size={'lg'}
                        w={'50%'}
                        miw={300}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Group w='50%' align="center" justify="end" gap={10} wrap='nowrap'>
                        <Text size='md'>
                            {`Showing ${catalogStore.limit * (page) + 1} – ${Math.min(catalogStore.totalResults, catalogStore.limit * (page + 1))} of ${catalogStore.totalResults}`}
                        </Text>
                        <Pagination size='lg' withPages={false} total={catalogStore.totalPages} value={page + 1} onChange={(val) => setPage(val - 1)} />
                        
                    </Group>
                    
                </Group>




                <Grid w={'100%'}>
                    {
                        strains.map((strain) => {
                            return (
                                <Grid.Col span={4}>
                                    <StrainCard strain={strain} key={strain.data.strain_id} />
                                </Grid.Col>
                            )
                        })
                    }

                    {
                        loading ?
                            <Grid.Col span={12}>
                                <Center w='100%'>
                                    <Loader size='md' color='green' />
                                </Center>
                            </Grid.Col>
                            : null
                    }

                </Grid>

            </Stack>
        </CatalogContext.Provider>
    );
};

export default CatalogPage;