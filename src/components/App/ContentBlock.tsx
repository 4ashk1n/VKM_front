import {Flex, FlexProps, Title, useMantineTheme} from "@mantine/core";

export type ContentBlockProps = FlexProps & {
    title?: string
}

const ContentBlock: React.FC<ContentBlockProps> = ({style, ...props}) => {
    const theme = useMantineTheme()
    return (<>
        <Flex p={15} direction={'column'} {...props} style={{
            border: '1px solid ' + theme.colors.green[6],
            borderRadius: '10px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
            overflow: 'hidden', ...style
        }}>
            {
                props.title ? 
                    <Title mb={20} w='100%' style={{textAlign: 'center'}} order={3} c='green'>{props.title}</Title>
                    :null 
            }
            {
                props.children
            }
        </Flex>
    </>);
}

export default ContentBlock