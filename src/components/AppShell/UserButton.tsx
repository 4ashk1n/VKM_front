import { Button, Group, Avatar, Text } from "@mantine/core";
import React, { useContext } from "react";
import { AuthContext } from "../../App";

const UserButton: React.FC = () => {

    const { user } = useContext(AuthContext);


    if (!user) {
        return (
            <Button variant='default' p={15} styles={{ inner: { width: '100%', display: 'block' } }} h='fit-content' radius={0} mr={-1}>
                <Group w='100%' justify='space-between' h='100%'>
                    <Avatar color='green' />
                </Group>
            </Button>
        )
    }
    else {
        return (
            <Button variant='default' p={15}  styles={{ inner: { height: 'fit-content' } }} h='fit-content'  radius={0} mr={-1}>
                <Text size='lg' fw={600} c='green'>
                    Sign in
                </Text>
            </Button>
        )
    }

}

export default UserButton;