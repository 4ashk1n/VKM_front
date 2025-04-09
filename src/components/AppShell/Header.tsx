import {AppShell, Burger, Group, Image, Switch, Text} from '@mantine/core';

export default function Header(props: {
    opened: boolean, toggle: () => void
}) {
  return <AppShell.Header p={'md'}>
      <Group w={'100%'} h={'100%'} align={'center'} justify={'space-between'}>
          <Image src={'/images/logo.svg'} h={'100%'} />


          {/*<Burger*/}
          {/*    opened={props.opened}*/}
          {/*    onClick={props.toggle}*/}
          {/*    size="sm"*/}
          {/*/>*/}

          <Switch size='xl' onLabel={'EN'} offLabel='RU'></Switch>
      </Group>


  </AppShell.Header>;
}