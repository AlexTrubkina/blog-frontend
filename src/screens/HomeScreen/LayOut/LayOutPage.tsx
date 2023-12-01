import React from "react";

import { ChakraProvider, Container } from "@chakra-ui/react";
import Nav from "../Components/Nav/Nav";

function LayOutPage({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <ChakraProvider>
            <Container maxW="70%">
                <Nav/>
            </Container>
            {children}
        </ChakraProvider>
       
    );
}

export default LayOutPage;