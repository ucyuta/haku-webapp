import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';
import Header from '@/components/header';

export default function Layout() {
	return (
		<Flex minH="svh" flexDir="column">
			<Header />

			<Flex as="main" flex="1" flexDir="column">
				<Outlet />
			</Flex>
		</Flex>
	);
}
