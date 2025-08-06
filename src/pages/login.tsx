import {
  Button,
  Link as ChakraLink,
  Field,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import loginImage from "../../public/assets/login-image.gif";

export default function Login() {
  return (
    <Flex w="100vw" h="100vh">
      <Flex w="50%" bg="#2C73EB" align="center" justify="center">
        <Image w={500} h={500} src={loginImage.src} />
      </Flex>
      <VStack w="50%" justify="center">
        <Stack>
          <Heading as="h1" fontSize="3xl" color="black" fontWeight="bold">
            Account Login
          </Heading>
          <Text fontSize="lg" color="gray.400" fontWeight="normal">
            If you already a member you can login with your email adress and
            password.
          </Text>

          <VStack align={"flex-start"} gap={6} mt={10}>
            <Field.Root>
              <Field.Label color="gray.500" fontSize="md">
                Email
              </Field.Label>
              <Input
                h={16}
                colorPalette="blue"
                color="black"
                borderRadius="md"
              />
            </Field.Root>

            <Field.Root>
              <Field.Label color="gray.500" fontSize="md">
                Password
              </Field.Label>
              <PasswordInput
                h={16}
                colorPalette="blue"
                color="black"
                borderRadius="md"
              />
            </Field.Root>

            <Checkbox
              colorPalette="blue"
              color="gray.500"
              fontSize="md"
              fontWeight="medium"
            >
              Remember me
            </Checkbox>

            <Button
              w="full"
              h={16}
              colorPalette="blue"
              borderRadius="md"
              fontSize="md"
              fontWeight="medium"
            >
              Login
            </Button>
          </VStack>

          <HStack justify="center" gap={1} mt={10}>
            <Text fontSize="md" fontWeight="medium" color="gray.500">
              Dont have an account ?
            </Text>
            <ChakraLink color="blue.500" asChild>
              <NextLink href="/sign-up">Sign up here</NextLink>
            </ChakraLink>
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  );
}
