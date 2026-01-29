import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useHideOnScroll } from "app/components/hooks/hideOnScroll";
import { ColorModeButton, useColorModeValue } from "app/components/ui/color-mode";

export default function Header() {
  const show = useHideOnScroll({ threshold: 12, topAlwaysShow: 8 });

  const glassBg = useColorModeValue(
    "rgba(255,255,255,0.06)",
    "rgba(0,0,0,0.06)"
  );

  const border = useColorModeValue(
    "rgba(0,0,0,0.05)",
    "rgba(255,255,255,0.05)"
  );

  const logoText = useColorModeValue(
    "rgba(17,17,17,0.85)",
    "rgba(255,255,255,0.85)"
  );

  const iconBg = useColorModeValue(
    "rgba(0,0,0,0.035)",
    "rgba(255,255,255,0.06)"
  );
  const iconBorder = useColorModeValue(
    "rgba(0,0,0,0.05)",
    "rgba(255,255,255,0.07)"
  );

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      transform={show ? "translateY(0)" : "translateY(-110%)"}
      opacity={show ? 1 : 0}
      transition="transform 200ms ease, opacity 200ms ease"
      bg={glassBg}
      backdropFilter="blur(14px) saturate(1.05)"
      borderBottom={`1px solid ${border}`}
      boxShadow={useColorModeValue(
        "inset 0 1px 0 rgba(255,255,255,0.35)",
        "inset 0 1px 0 rgba(255,255,255,0.06)"
      )}
    >
      <Flex align="center" gap="12px" px="16px" py="12px" justify="space-between">
        <Flex gap="3">
          <Box
            boxSize="28px"
            borderRadius="10px"
            bg={iconBg}
            border={`1px solid ${iconBorder}`}
          />
          <Box
            color={logoText}
            fontFamily="'Manrope', system-ui, sans-serif"
            fontWeight="800"
            fontSize="24px"
            lineHeight="1"
            letterSpacing="-0.02em"
          >
            Haku
          </Box>
        </Flex>
        <Flex gap="3">
          <Button variant="outline" size="md">
            <Text fontWeight="bold">
              Log in
            </Text>
          </Button>
          <ColorModeButton />
        </Flex>
      </Flex>
    </Box>
  );
}
