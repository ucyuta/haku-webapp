import type { Route } from "./+types/index";

import { Container, Flex } from "@chakra-ui/react";
import type { JSX } from "@emotion/react/jsx-runtime";
import { useEffect } from "react";
import { Prose } from "~/components/ui/prose";

export function loader({ params }: Route.LoaderArgs) {
    return params;
}

export default function Article({ loaderData }: Route.ComponentProps): JSX.Element {
    useEffect(() => {
        const id = loaderData.id;
    }, [])
    return (
        <Container asChild>
            <Flex flex="1">
                
            </Flex>
        </Container>
    )
}