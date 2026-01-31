import { Box, Center, Container, Flex, Span, Text } from "@chakra-ui/react";

export default function PageNotFound() {
  return (
    <Container asChild>
      <Flex
        flex="1"
        align="center"
        justify="center" 
      >
        <Center>
          <Text 
            as="h1"
            fontSize="9xl" 
            fontFamily="Lato" 
            letterSpacing="0.05em" 
            textShadow="0 0 3px gray" 
            fontWeight="semibold"
            textAlign="center"
          >
            404
            <Span pl="5" fontWeight="normal" fontSize="4xl" fontFamily="mono">
              Not Found
            </Span>
          </Text>
        </Center>
      </Flex>
    </Container>
  )
}