import {
	Box,
	Button,
	ButtonGroup,
	Container,
	HStack,
	Span,
} from '@chakra-ui/react';
import { RiLoginBoxLine } from 'react-icons/ri';
import { Link as RLink } from 'react-router';
import { ColorModeButton } from '@/components/ui/color-mode';

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
				<HStack as="nav">
					<RLink to="/" prefetch="intent">
						<Box
							fontFamily="'Manrope', system-ui, sans-serif"
							fontWeight="800"
							fontSize="24px"
							lineHeight="1"
							letterSpacing="-0.02em"
						>
							Haku
						</Box>
					</RLink>
				</HStack>
				<ButtonGroup>
					<Button variant="ghost" size="md">
						<RLink
							to="https://discord.com/oauth2/authorize?client_id=1432581614059131020&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&scope=identify"
							prefetch="intent"
						>
							<RiLoginBoxLine />
							<Span fontFamily="Noto Sans JP">ログイン</Span>
						</RLink>
					</Button>
					<ColorModeButton size="md" />
				</ButtonGroup>
			</Container>
		</Box>
	);
}
