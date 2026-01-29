import { Box, Flex, Text } from "@chakra-ui/react";

export default function PageNotFound() {
  return (
    <Flex
      alignItems="center"
      justify="center"
      mt="10"
    >
      <Box>
        <Text 
          fontSize="9xl" 
          fontFamily="Lato" 
          letterSpacing="0.05em" 
          textShadow="0 0 4px gray" 
          fontWeight="semibold"
          textAlign="center"
        >
          404
        </Text>
        <Text 
          fontSize="4xl"
          textAlign="center"
          fontFamily="mono"
        >
          Not Found
        </Text>
      </Box>
    </Flex>
  )
}