import { Container, Flex } from '@chakra-ui/react';
import type { JSX } from '@emotion/react/jsx-runtime';
import { useEffect } from 'react';
import { type LoaderFunctionArgs, useLoaderData } from 'react-router';

type LoaderData = {
	id: string;
};

export function loader({ params }: LoaderFunctionArgs) {
	return params;
}

export default function Article(): JSX.Element {
	const loaderData = useLoaderData<LoaderData>();

	useEffect(() => {
		const _id = loaderData.id;
	}, [loaderData.id]);
	return (
		<Container asChild>
			<Flex flex="1"></Flex>
		</Container>
	);
}
