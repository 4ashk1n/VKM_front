import {Center, Divider, Grid, Loader, Stack, Text, TextInput, Title} from "@mantine/core";
import {FiSearch} from "react-icons/fi";
import {useEffect, useRef, useState} from "react";
import api from "../../../axiosConfig.ts";
import { Strain } from "../../stores/Strain.ts";
import StrainCard from "./StrainCard.tsx";


const CatalogPage: React.FC = () => {

    const [query, setQuery] = useState('');
    const ref = useRef<HTMLInputElement>(null);

    const [loading, setLoading] = useState(false);
    const [strains, setStrains] = useState<Strain[]>([]);

    useEffect(() => {
        if (query === '') {
            setStrains([]);
        }
        if (ref.current) {
            setLoading(true)
            const currentQuery = query;
            setTimeout(async () => {
                console.log(1)
                if (!ref.current || currentQuery !== ref.current.value){
                    return;
                }
                console.log(2)

                const data = await Strain.search(ref.current.value, 10, 0);
                setStrains(data);
                setLoading(false);
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
                onChange={(e) => setQuery(e.target.value)}
            />  

            <Grid w={'100%'}>
                {
                    strains.map((strain) => {
                        return (
                            <Grid.Col span={4}>
                                <StrainCard strain={strain} key={strain.data.strain_id}/>
                            </Grid.Col>
                        )
                    })
                }

                {
                    loading ? 
                        <Grid.Col span={12}>
                            <Center w='100%'>
                                <Loader size='md' color='green'/>
                            </Center>
                        </Grid.Col>
                        : null
                }
                
            </Grid>
        </Stack>
    );
};

export default CatalogPage;