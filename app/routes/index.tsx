import { Box, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "app/components/ui/color-mode";
import { backgroundTheme } from "app/theme/background";

export default function Home() {
  const t = useColorModeValue(backgroundTheme.light, backgroundTheme.dark);

  return (
    <Box>
        
    </Box>
  );
}