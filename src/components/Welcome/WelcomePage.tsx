import {Alert, Center, Divider, Group, Image, Stack, Text, ThemeIcon, Title} from "@mantine/core";
import ContentBlock from "../App/ContentBlock.tsx";
import {GiMushrooms} from "react-icons/gi";
import {FaBacterium} from "react-icons/fa";
import {IoDocumentText} from "react-icons/io5";
import {HiMiniCheckBadge} from "react-icons/hi2";


const WelcomePage: React.FC = () => {

    return (<>
        <Center w={'100%'}>
            <Stack gap={20} w={'80%'}>
                <Group w={'100%'} mt={50} align={'center'} gap={40} justify={'space-between'} wrap={'nowrap'}>
                    <ContentBlock p={0} w={'40%'} style={{rotate: '-10deg'}}>
                        <Image src={'/images/building2.png'} w={'100%'}/>
                    </ContentBlock>

                    <Stack gap={20}>
                        <Image src={'/images/logo.svg'} h={'100%'}/>
                        <Title order={1} fz={'4vh'} c={'green'} style={{textWrap: 'pretty'}}>
                            Добро пожаловать в ВКМ!
                        </Title>
                        <Divider size={2} color={'green'}/>
                    </Stack>

                </Group>


                <Group w={'100%'} gap={20} justify={'space-between'} mt={80}>
                    <Group w={'100%'}>
                        <Alert w={'100%'}>
                            <Text size={'xl'} style={{textWrap: 'balance', textAlign: 'center'}}>
                                ВКМ – крупнейшая в России коллекция микроорганизмов по показателю разнообразия
                                поддерживаемых
                                культур и одна из крупнейших по общей численности фонда.
                            </Text>
                        </Alert>

                    </Group>


                    <Group wrap={'nowrap'} h={'100%'} gap={10} w={'100%'}>
                        <ContentBlock h={'100%'} direction={'column'} align={'center'} justify={'center'} w={'100%'}>
                            <Title c={'green'} size={'48px'}>
                                23 000+
                            </Title>
                            <Text size={'lg'} c={'green'}>
                                штаммов
                            </Text>
                        </ContentBlock>

                        <ContentBlock h={'100%'} direction={'column'} align={'center'} justify={'center'} w={'100%'}>
                            <Title c={'green'} size={'48px'}>
                                8 000+
                            </Title>
                            <Text size={'lg'} c={'green'}>
                                в каталоге
                            </Text>
                        </ContentBlock>
                    </Group>
                </Group>

                <Stack w={'100%'} mt={80} justify={'space-between'} pos={'relative'}>
                    <Group w={'100%'}>
                        <Alert>
                            <Text size={'xl'} style={{textWrap: 'balance', textAlign: 'center'}}>
                                ВКМ включает представителей всех основных надцарств (грибы, бактерии, археи) и
                                физиологических групп (в т.ч., анаэробы и экстремофилы), более 2500 типовых штаммов
                                видов, а также объекты интеллектуальной собственности, депонированные в ВКМ в связи с
                                патентной процедурой, и другие организмы с уникальными свойствами и биотехнологическим
                                потенциалом.
                            </Text>
                        </Alert>

                    </Group>

                    <ThemeIcon pos={'absolute'} bottom={-64} left={-64} variant={'transparent'} c={'green'}
                               size={'128'}>
                        <GiMushrooms size={128}/>
                    </ThemeIcon>

                    <ThemeIcon pos={'absolute'} top={-64} style={{rotate: '90deg'}} right={-64} variant={'transparent'}
                               c={'green'} size={'128'}>
                        <FaBacterium size={128}/>
                    </ThemeIcon>
                </Stack>

                <Stack w={'100%'} mt={80} justify={'space-between'} pos={'relative'}>
                    <Group w={'100%'}>
                        <Alert>
                            <Text size={'xl'} style={{textWrap: 'balance', textAlign: 'center'}}>
                                ВКМ выполняет функции Международного органа по депонированию защищенных патентами
                                культур – в соответствии с обязательствами страны по Будапештскому договору о взаимном
                                признании депонирования микроорганизмов для целей патентной процедуры (Распоряжение
                                Совета министров СССР № 1112р от 02.06.86г.). ВКМ является признанным на международном
                                уровне центром депонирования типовых штаммов вновь описываемых видов микроорганизмов.
                            </Text>
                        </Alert>

                    </Group>

                    <ThemeIcon pos={'absolute'} bottom={-64} style={{rotate: '-10deg'}} left={-64}
                               variant={'transparent'} c={'green'}
                               size={'128'}>
                        <IoDocumentText size={128}/>
                    </ThemeIcon>

                    <ThemeIcon pos={'absolute'} top={-64} style={{rotate: '0deg'}} right={-64} variant={'transparent'}
                               c={'green'} size={'128'}>
                        <HiMiniCheckBadge size={128}/>
                    </ThemeIcon>
                </Stack>

                <Stack w={'100%'} mt={80} justify={'space-between'} pos={'relative'}>
                    <Group w={'100%'}>
                        <Alert>
                            <Text size={'xl'} style={{textWrap: 'balance', textAlign: 'center'}}>
                                Наряду с предоставлением и депонированием штаммов микроорганизмов для различных целей,
                                коллектив ВКМ выполняет широкий спектр научно-сервисных работ, в том числе, по
                                идентификации
                                микроорганизмов, определению их таксономических характеристик, требуемых для описания
                                новых
                                видов и родов, а также проводит ряд других видов работ по заявкам пользователей (см.
                                раздел
                                Услуги).
                            </Text>
                        </Alert>

                    </Group>

                    {/*<ThemeIcon pos={'absolute'} bottom={-64} style={{rotate: '-10deg'}} left={-64}*/}
                    {/*           variant={'transparent'} c={'green'}*/}
                    {/*           size={'128'}>*/}
                    {/*    <IoDocumentText size={128}/>*/}
                    {/*</ThemeIcon>*/}

                    {/*<ThemeIcon pos={'absolute'} top={-64} style={{rotate: '0deg'}} right={-64} variant={'transparent'}*/}
                    {/*           c={'green'} size={'128'}>*/}
                    {/*    <HiMiniCheckBadge size={128}/>*/}
                    {/*</ThemeIcon>*/}
                </Stack>

                <Stack w={'100%'} mt={80} justify={'space-between'} pos={'relative'}>
                    <Group w={'100%'}>
                        <Alert>
                            <Text size={'xl'} style={{textWrap: 'balance', textAlign: 'center'}}>
                                Показателями высокой востребованности фонда и услуг ВКМ могут служить многочисленные
                                договора с пользователями и цитируемость штаммов коллекции в научных статьях и патентах.
                                Библиографическая база данных ВКМ содержит в настоящее время более 10 000 публикаций с
                                информацией о штаммах коллекционного фонда.
                            </Text>
                        </Alert>

                    </Group>

                    {/*<ThemeIcon pos={'absolute'} bottom={-64} style={{rotate: '-10deg'}} left={-64}*/}
                    {/*           variant={'transparent'} c={'green'}*/}
                    {/*           size={'128'}>*/}
                    {/*    <IoDocumentText size={128}/>*/}
                    {/*</ThemeIcon>*/}

                    {/*<ThemeIcon pos={'absolute'} top={-64} style={{rotate: '0deg'}} right={-64} variant={'transparent'}*/}
                    {/*           c={'green'} size={'128'}>*/}
                    {/*    <HiMiniCheckBadge size={128}/>*/}
                    {/*</ThemeIcon>*/}
                </Stack>

                <Stack w={'100%'} mt={80} justify={'space-between'} pos={'relative'}>
                    <Group w={'100%'}>
                        <Alert>
                            <Text size={'xl'} style={{textWrap: 'balance', textAlign: 'center'}}>
                                Основные направления научных исследований коллектива ВКМ связаны с изучением
                                биологического (генетического) разнообразия микроорганизмов, выявлением и описанием
                                новых таксонов, совершенствованием системы классификации и методов идентификации. В
                                составе коллектива ВКМ работают 4 доктора наук, 19 кандидатов наук, 17 специалистов с
                                высшим образованием и высококвалифицированный технический персонал.
                            </Text>
                        </Alert>

                    </Group>

                    {/*<ThemeIcon pos={'absolute'} bottom={-64} style={{rotate: '-10deg'}} left={-64}*/}
                    {/*           variant={'transparent'} c={'green'}*/}
                    {/*           size={'128'}>*/}
                    {/*    <IoDocumentText size={128}/>*/}
                    {/*</ThemeIcon>*/}

                    {/*<ThemeIcon pos={'absolute'} top={-64} style={{rotate: '0deg'}} right={-64} variant={'transparent'}*/}
                    {/*           c={'green'} size={'128'}>*/}
                    {/*    <HiMiniCheckBadge size={128}/>*/}
                    {/*</ThemeIcon>*/}
                </Stack>

                <Stack w={'100%'} mt={80} justify={'space-between'} pos={'relative'}>
                    <Group w={'100%'}>
                        <Alert>
                            <Text size={'xl'} style={{textWrap: 'balance', textAlign: 'center'}}>
                                ВКМ имеет организационно-правовой статус научного отдела в структуре Института биохимии
                                и физиологии микроорганизмов им. Г.К. Скрябина РАН – обособленного подразделения ФИЦ
                                «Пущинский научный центр биологических исследований Российской Академии Наук».
                            </Text>
                        </Alert>

                    </Group>

                    {/*<ThemeIcon pos={'absolute'} bottom={-64} style={{rotate: '-10deg'}} left={-64}*/}
                    {/*           variant={'transparent'} c={'green'}*/}
                    {/*           size={'128'}>*/}
                    {/*    <IoDocumentText size={128}/>*/}
                    {/*</ThemeIcon>*/}

                    {/*<ThemeIcon pos={'absolute'} top={-64} style={{rotate: '0deg'}} right={-64} variant={'transparent'}*/}
                    {/*           c={'green'} size={'128'}>*/}
                    {/*    <HiMiniCheckBadge size={128}/>*/}
                    {/*</ThemeIcon>*/}
                </Stack>

                <Stack w={'100%'} mt={80} justify={'space-between'} pos={'relative'}>
                    <Group w={'100%'}>
                        <Alert>
                            <Text size={'xl'} style={{textWrap: 'balance', textAlign: 'center'}}>
                                Отдел ВКМ создан в 1980 г. в связи с решением Президиума АН СССР о передислокации
                                Всесоюзной коллекции микроорганизмов в ИБФМ АН СССР из Института микробиологии АН СССР
                                (ныне обособленное подразделение ФИЦ «Фундаментальные основы биотехнологии» РАН).
                                Характер и основные направления деятельности ВКМ определены Постановлениями Президиума
                                АН СССР (№942) и Президиума РАН (№233).
                            </Text>
                        </Alert>

                    </Group>

                    {/*<ThemeIcon pos={'absolute'} bottom={-64} style={{rotate: '-10deg'}} left={-64}*/}
                    {/*           variant={'transparent'} c={'green'}*/}
                    {/*           size={'128'}>*/}
                    {/*    <IoDocumentText size={128}/>*/}
                    {/*</ThemeIcon>*/}

                    {/*<ThemeIcon pos={'absolute'} top={-64} style={{rotate: '0deg'}} right={-64} variant={'transparent'}*/}
                    {/*           c={'green'} size={'128'}>*/}
                    {/*    <HiMiniCheckBadge size={128}/>*/}
                    {/*</ThemeIcon>*/}
                </Stack>

                <Stack w={'100%'} mt={80} justify={'space-between'} pos={'relative'}>
                    <Group w={'100%'}>
                        <Alert>
                            <Text size={'xl'} style={{textWrap: 'balance', textAlign: 'center'}}>
                                Дополнительную информацию о ВКМ можно найти на порталах базовой организации ИБФМ и
                                проекта "Современная исследовательская инфраструктура Российской Федерации"
                                (http://www.ckp-rf.ru/usu/; http://www.ckp-rf.ru/ckp/).
                            </Text>
                        </Alert>

                    </Group>

                    {/*<ThemeIcon pos={'absolute'} bottom={-64} style={{rotate: '-10deg'}} left={-64}*/}
                    {/*           variant={'transparent'} c={'green'}*/}
                    {/*           size={'128'}>*/}
                    {/*    <IoDocumentText size={128}/>*/}
                    {/*</ThemeIcon>*/}

                    {/*<ThemeIcon pos={'absolute'} top={-64} style={{rotate: '0deg'}} right={-64} variant={'transparent'}*/}
                    {/*           c={'green'} size={'128'}>*/}
                    {/*    <HiMiniCheckBadge size={128}/>*/}
                    {/*</ThemeIcon>*/}
                </Stack>
            </Stack>
        </Center>


    </>);
};

export default WelcomePage;