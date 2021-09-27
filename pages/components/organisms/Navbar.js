import { Box, Flex, Heading, Stack, Text, Image, useDisclosure } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { RiHome2Fill } from "react-icons/ri";
import React, { useState } from "react";

const Nav = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            zIndex="500"
            pos="fixed"
            backgroundColor="#fff"
            width="100%"
            boxShadow="lg"
        >
            <Flex align="center" mr={5}>
                <Image width="60%" src="http://www.dssmove.co.uk/default/public/media/css/images/logo-main.jpg"/>
            </Flex>

            <Box display={{ base: "block", md: "none" }}>
                <HamburgerIcon onClick={handleToggle} fontSize="25px"/>
            </Box>

            <Stack 
                direction={{ base: "column", md: "row" }} spacing="24px" alignItems="center"
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }} mt={{ base: 4, md: 0 }}
                transition="0.3s"
            >
                <Flex>Home</Flex>
                <Flex>Property to rent</Flex>
                <Flex>Find an agent</Flex>
                <Flex>Housing benefit calculator</Flex>
                <Flex>News</Flex>
                <Flex><RiHome2Fill fontSize="20px" color="#354882"/> &nbsp; Tenant Login</Flex>
                <Flex><RiHome2Fill fontSize="20px" color="#769627"/> &nbsp; Agent / Landlord Login</Flex>
            </Stack>
      </Flex>
    )
}

export default Nav;