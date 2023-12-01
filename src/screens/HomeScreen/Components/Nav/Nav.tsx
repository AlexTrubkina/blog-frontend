import React from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    Text,
    useBreakpointValue,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { navLinks } from "../../Datasets/navData";

import { FiMenu } from "react-icons/fi";
import { FaFireFlameSimple } from "react-icons/fa6";

function Nav(): JSX.Element {
    const isDesktop: boolean | undefined = useBreakpointValue({
        base: false,
        lg: true,
    });
    

    const { isOpen, onOpen, onClose } = useDisclosure();
    const mobileToggle: React.RefObject<HTMLButtonElement> = React.useRef(null);
    return (
        <Box as="nav" backgroundColor="#fff">
            <HStack py="4" px="20px" spacing="10" justify="space-between">
                <Flex gap="20px" alignItems="center">
                    <FaFireFlameSimple color="#F53838"/>
                    <NavLink to="/">
                    <Text fontWeight="bold" color="#0B132A" fontSize="xl">
                        Blog
                    </Text>
                    </NavLink>
                </Flex>
                {isDesktop ? (
                    <Flex justify="space-between" alignItems="center">
                        <ButtonGroup variant="link" spacing="8">
                            {navLinks.map((item) =>
                                <NavLink to={item.link} key={item.name}>
                                    <Button variant="link" key={item.name} color="#4F5665">
                                        {item.name}
                                    </Button>
                                </NavLink>
                                
                            )}
                        </ButtonGroup>
                    </Flex>
                ) : (
                    <IconButton
                        onClick={onOpen}
                        ref={mobileToggle}
                        variant="outline"
                        colorScheme="#F53838"
                        aria-label="Open Menu"
                        icon={<FiMenu fontSize="1.25rem" />}
                    />
                )}
                <ButtonGroup spacing="8" alignItems="center">
                    <NavLink to="/" >
                        <Button variant="link" color="#F53838">
                            Войти
                        </Button>
                    </NavLink>
                    <NavLink to="/" >
                        <Button variant="outline" colorScheme='#F53838'>
                            Регистрация
                        </Button>
                    </NavLink>
                </ButtonGroup>
            </HStack>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={mobileToggle}
                
            >
                <DrawerOverlay />
                <DrawerContent backgroundColor="#FFECEC">
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <NavLink to="/">
                            <FaFireFlameSimple color="#F53838"/>
                            <Text fontWeight="bold" fontSize="xl" color="#0B132A">
                                Blog
                            </Text>
                        </NavLink>
                    </DrawerHeader>

                    <DrawerBody>
                        <Flex flexDirection="column" gap="4" alignItems="start">
                            {navLinks.map((item) => 
                                <NavLink to={item.link} key={item.name}>
                                    <Button variant="link" key={item.name}>
                                        {item.name}
                                    </Button>
                                </NavLink>
                                
                            )}
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

export default Nav;