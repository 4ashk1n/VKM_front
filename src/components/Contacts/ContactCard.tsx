import {ActionIcon, CopyButton, Image, Paper, Stack, Text, Title, Tooltip} from "@mantine/core";
import ContentBlock from "../App/ContentBlock.tsx";
import {Contact} from "./ContactsPage.tsx";
import {IoCheckmark} from "react-icons/io5";
import {FiCopy} from "react-icons/fi";


const ContactCard: React.FC<Contact> = (contact: Contact) => {
    return (
        <ContentBlock w={'100%'} h={'100%'} align={'center'} justify={'end'} gap={10} p={0}>
            <Image w={'100%'} mah={'200px'} src={contact.image}/>
            <Stack gap={10} p={15} align={'center'} w={'100%'}>
                <Title c={'green'} order={3} style={{textAlign: 'center'}}>{contact.name}</Title>
                <Text style={{textAlign: 'center'}} c={'grey'} size={'sm'}>{contact.job}</Text>
                <Paper shadow={'sm'} p={'sm'} w={'100%'} style={{textAlign: 'center'}} withBorder pos={'relative'}>
                    <Text style={{textOverflow: 'ellipsis', overflow: 'hidden'}}>{contact.email}</Text>
                    <CopyButton value={contact.email} timeout={2000}>
                        {({copied, copy}) => (
                            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                <ActionIcon pos={'absolute'} right={10} bottom={'10px'} color={copied ? 'teal' : 'gray'}
                                            variant="subtle" onClick={copy}>
                                    {copied ? <IoCheckmark size={16}/> : <FiCopy size={16}/>}
                                </ActionIcon>
                            </Tooltip>
                        )}
                    </CopyButton>
                </Paper>
            </Stack>

        </ContentBlock>
    );
};
export default ContactCard;