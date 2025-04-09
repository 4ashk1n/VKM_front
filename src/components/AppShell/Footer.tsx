

import { AppShell, Burger, Center, Group, Image, Text, Title } from '@mantine/core';

export default function Footer() {
    return <AppShell.Footer p={'md'}>
        <Group justify='end'>
        <Group w='100%' maw={'calc(100% - 250px)'} h={'100%'} align={'center'} justify={'space-between'}>
            <Text size='xs' w='100%' c='gray' style={{textAlign: 'center'}}>
                Министерство науки и высшего образования Российской Федерации <br />
                ИНСТИТУТ БИОХИМИИ И ФИЗИОЛОГИИ МИКРООРГАНИЗМОВ ИМ. Г.К. СКРЯБИНА РОССИЙСКОЙ АКАДЕМИИ НАУК (ИБФМ РАН) –<br />
                ОБОСОБЛЕННОЕ ПОДРАЗДЕЛЕНИЕ ФЕДЕРАЛЬНОГО ГОСУДАРСТВЕННОГО БЮДЖЕТНОГО УЧРЕЖДЕНИЯ НАУКИ<br />
                «ФЕДЕРАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР «ПУЩИНСКИЙ НАУЧНЫЙ ЦЕНТР БИОЛОГИЧЕСКИХ ИССЛЕДОВАНИЙ РОССИЙСКОЙ АКАДЕМИИ НАУК»
            </Text>
        </Group></Group>


    </AppShell.Footer>;
}