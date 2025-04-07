import { Button, Group, Avatar, Text, Modal, Title, Stack, TextInput, PasswordInput } from "@mantine/core";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../App";
import { useDisclosure } from "@mantine/hooks";
import { observer } from "mobx-react-lite";

const UserButton: React.FC = observer(() => {

    const authStore = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const [opened, { toggle }] = useDisclosure();

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        console.log(usernameRef.current?.value, passwordRef.current?.value)
        try {
            await authStore.login(usernameRef.current?.value || '', passwordRef.current?.value || '');
            toggle();
        } catch (err: any) {
            setError(err.message || "Ошибка входа");
        }
    }

    if (user) {
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
            <>
                <Button variant='default' p={15} onClick={toggle} styles={{ inner: { height: 'fit-content' } }} h='fit-content' radius={0} mr={-1}>
                    <Text size='lg' fw={600} c='green'>
                        Sign in
                    </Text>
                </Button>

                <Modal opened={opened} onClose={toggle} size='md'>
                    <Stack align={'center'} gap={20}>
                        <Title order={3} c='green'>Sign in</Title>
                        <TextInput ref={usernameRef} description='login' size='md' w='100%' />
                        <PasswordInput ref={passwordRef} description='password' size='md' w='100%' />
                        <Button size="md" onClick={handleLogin} w='100%' mt={20}>Sign in</Button>
                        <Button size="md" onClick={toggle} w='100%' variant='default'>Cancel</Button>
                        {
                            error ? 
                                <Text color='red' size="sm">{error}</Text>
                            : null
                        }
                    </Stack>
                </Modal>
            </>

        )
    }

})

export default UserButton;