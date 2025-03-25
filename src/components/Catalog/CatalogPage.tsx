import {Divider, Grid, Stack, TextInput, Title} from "@mantine/core";
import ContactCard from "./ContactCard.tsx";
import {FiSearch} from "react-icons/fi";
import {useEffect, useRef, useState} from "react";
import api from "../../../axiosConfig.ts";


export type Contact = {
    name: string,
    email: string,
    job: string,
    image: string,
}


const CatalogPage: React.FC = () => {

    const [query, setQuery] = useState('');
    const ref = useRef<HTMLInputElement>(null);

    const [strains, setStrains] = useState([]);

    useEffect(() => {
        if (ref.current) {
            const currentQuery = query;
            setTimeout(async () => {
                if (!ref.current || currentQuery !== ref.current.value){
                    return;
                }

                const { data } = await api.get(`/strains/search/?q=${query}`);
                setStrains(data);
            }, 1000)

        }
    }, [query]);

    return (
        <Stack align={'center'} gap={40}>
            <Title>Каталог</Title>

            <TextInput
                ref={ref}
                leftSection={<FiSearch size={24} />}
                placeholder={'Поиск'}
                variant={'default'}
                size={'lg'}
                w={'30%'}
                miw={300}
            />

            <Grid w={'100%'}>
                
            </Grid>
        </Stack>
    );
};

export default CatalogPage;