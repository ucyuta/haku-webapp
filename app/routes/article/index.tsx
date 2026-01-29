import type { Route } from "./+types/index";

import { Text } from "@chakra-ui/react";
import type { JSX } from "@emotion/react/jsx-runtime";

export function loader({ params }: Route.LoaderArgs) {
    return params;
}

export default function Article({ loaderData }: Route.ComponentProps): JSX.Element {
    return (
        <Text>
            {loaderData.id}
        </Text>
    )
}