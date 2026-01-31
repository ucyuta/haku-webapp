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
            lineHeight="0.5"
          >
            404
            <Span 
              display={{ smDown: "block", md: "inline" }}
              pl={{ smDown: "0", md: "5" }}
              py={{ smDown: "12", md: "0" }}
              fontWeight="normal" 
              fontSize="4xl" 
              fontFamily="mono"
            >
              Not Found
            </Span>
          </Text>
        </Center>
      </Flex>
    </Container>
  )
}