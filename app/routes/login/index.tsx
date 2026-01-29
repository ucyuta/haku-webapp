import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useColorModeValue } from "app/components/ui/color-mode";

export default function Login() {
    const formBackGround = useColorModeValue("gray.100", "gray.800");
    return (
        <Flex h="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={formBackGround} p={12} rounded={6}>
                <Heading mb={6}>Log in</Heading>
                <Input placeholder="sample@sample.com" variant="subtle" mb={3} type="email"></Input>
                <Input placeholder="********" variant="subtle" mb={6} type="password"></Input>
                <Button mb={6} colorScheme="teal">Log in</Button>
            </Flex>
        </Flex>
    )
}