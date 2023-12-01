import { Container, Flex, Heading, Text, Box, Button, Image } from "@chakra-ui/react";
import React from "react";

function FirstScreen(): JSX.Element {
    return (
       <Container maxW="70%" >
        <Flex flexDirection={{lg: "row", base: "column"}} minH="90vh" alignItems="center">
            <Box>
                <Heading marginBottom="30px">
                    Выкладывать новости стало удобно и приятно
                </Heading>
                <Text color="grey.300" marginBottom="30px">
                    Попробуйте себя в качетсве писателя или журналиста. Поделитесь своими мыслями с миром.
                </Text>
                <Button bg="#F53838" color="#fff" boxShadow="0px 10px 14px 0px rgba(245, 56, 56, 0.35);">Попробовать</Button>
            </Box>
            <Image src="/assest/mainPic.jpg"/>
        </Flex>
            
       </Container>
    )
}

export default FirstScreen;