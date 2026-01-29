import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "app/components/ui/color-mode";
import { backgroundTheme } from "app/theme/background";

export function PageBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  const t = useColorModeValue(
    backgroundTheme.light,
    backgroundTheme.dark
  );

  return (
    <Box
      minH="100vh"
      position="relative"
      bg={t.base}
      overflow="hidden"
      _before={{
        content: '""',
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        bg: `radial-gradient(
          900px 500px at 15% -20%,
          ${t.glow},
          transparent 60%
        )`,
        zIndex: 0,
      }}
      _after={{
        content: '""',
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        bg: `linear-gradient(
          180deg,
          ${t.linearFrom},
          ${t.linearTo}
        )`,
        zIndex: 0,
      }}
    >
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
}
