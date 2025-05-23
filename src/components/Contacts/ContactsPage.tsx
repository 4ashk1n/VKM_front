import {Divider, Grid, Stack, Title} from "@mantine/core";
import ContactCard from "./ContactCard.tsx";

export type Contact = {
    name: string,
    email: string,
    job: string,
    image: string,
}

const CONTACTS_GENERAL: Contact[] = [
    {
        name: "Почтовый адрес",
        email: "Россия, 142290, Московская обл., Пущино, пр.Науки, 5, ИБФМ",
        job: "Пущино",
        image: ''
    },
    {
        name: "Телефон",
        email: "+7 (4967) 73-09-24",
        job: "Пущино",
        image: ''
    },
    {
        name: "Телефон",
        email: "+7 (499) 783-2402",
        job: "Москва",
        image: ''
    },
]

const CONTACTS: Contact[] = [

    {
        name: 'Коллекция дрожжевых грибов (Пущино)',
        email: 'kachalkin_a@mail.ru',
        job: 'Качалкин Алексей Владимирович, к.б.н.',
        image: ''
    },
    {
        name: 'Коллекция бактерий (Пущино)',
        email: 'e.kudryashova@pbcras.ru',
        job: 'Екатерина Борисовна Кудряшова, к.б.н.',
        image: ''
    },
    {
        name: 'Коллекция актиномицетов (Пущино)',
        email: 'evtushenko@pbcras.ru',
        job: 'Людмила Ивановна Евтушенко, д.б.н.',
        image: ''
    },
    {
        name: 'Коллекция мицелиальных грибов (Москва)',
        email: 'ivanushkina58@mail.ru',
        job: 'Иванушкина Наталия Евгеньевна, к.б.н.',
        image: ''
    },
    {
        name: 'Коллекция микроводорослей (Пущино)',
        email: 'temraleeva@pbcras.ru',
        job: 'Темралеева Анна Дисенгалиевна, к.б.н.',
        image: ''
    },
    {
        name: 'Коллекция анаэробных микроорганизмов (Пущино)',
        email: 'vshakola@gmail.com',
        job: 'Виктория Артуровна Щербакова, д.б.н.',
        image: ''
    },
    {
        name: 'Группа консервации (Пущино)',
        email: 'puchkov@pbcras.ru',
        job: 'Евгений Октябринович Пучков, д.б.н.',
        image: ''
    },
    {
        name: 'Группа информации и координации (Пущино)',
        email: 's.absalyamov@pbcras.ru',
        job: 'Абсалямов Сергей Якубович',
        image: ''
    },
    {
        name: 'Секретарь (Пущино)',
        email: 'vkm@pbcras.ru',
        job: 'Иванова Ирина',
        image: ''
    },
]

const ContactsPage: React.FC = () => {

    return (
        <Stack align={'center'} gap={40}>
            <Title>Контакты</Title>
            <Grid w={'100%'}>
                {
                    CONTACTS_GENERAL.map((contact, index) =>
                        <Grid.Col span={4}>
                            <ContactCard key={index} {...contact}/>
                        </Grid.Col>
                    )
                }
            </Grid>
            <Divider size={2} color={'green'} w={'100%'}/>
            <Grid w={'100%'}>
                {
                    CONTACTS.map((contact, index) =>
                        <Grid.Col span={4}>
                            <ContactCard key={index} {...contact}/>
                        </Grid.Col>
                    )
                }
            </Grid>


        </Stack>
    );
};

export default ContactsPage;