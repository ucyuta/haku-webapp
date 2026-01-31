import { Box, Button, ButtonGroup, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { ColorModeButton, useColorModeValue } from "app/components/ui/color-mode";
import { RiLoginBoxLine } from "react-icons/ri";

export default function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="docked"
      py="2"
      // hideBelow="sm"
    >
      <Container
        centerContent
        flexDir="row"
        justifyContent="space-between"
        gap="2"
        bg="bg/80"
        borderWidth="1px"
        rounded="md"
        shadow="md"
        backdropFilter="blur({blurs.md})"
        px="6"
        py="2"
      >
        <HStack
          as="nav"
          // p="2.5"
          // gap={["2", "4"]}
        >
          <Box
            fontFamily="'Manrope', system-ui, sans-serif"
            fontWeight="800"
            fontSize="24px"
            lineHeight="1"
            letterSpacing="-0.02em"
          >
            Haku
          </Box>
        </HStack>
        <ButtonGroup
        
        >
          <Button variant="ghost" size="md">
            {/* <Text fontWeight="bold">
              Log in
            </Text> */}
            <RiLoginBoxLine />
          </Button>
          <ColorModeButton size="md" />
        </ButtonGroup>
      </Container>
    </Box>
  );
}
