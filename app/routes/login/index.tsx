import { Button, Field, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface LoginFormValues{
    username: string;
    password: string;
}

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormValues>();

    const onSubmit = handleSubmit(data => console.log(data));

    return (
        <Flex h="100vh" flex="1" alignItems="center" justifyContent="center">
            <Flex direction="column" bg={{ base: 'gray.50', _dark: 'gray.900' }} p={10} rounded={6}>
                <form onSubmit={onSubmit}>
                    <Stack gap="4" align="flex-start" maxW="sm">
                        <Heading>Log in</Heading>
                        <Field.Root invalid={!!errors.username}>
                            <Field.Label>User Name</Field.Label>
                            <Input {...register('username')} placeholder="User Name" />
                            <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
                        </Field.Root>

                        <Field.Root invalid={!!errors.password}>
                            <Field.Label>Password</Field.Label>
                            <Input {...register('password')} placeholder="********" />
                            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
                        </Field.Root>

                        <Button type="submit" w="full" mt="5">Log In</Button>
                    </Stack>
                </form>
            </Flex>
        </Flex>
    )
}