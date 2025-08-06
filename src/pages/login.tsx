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
import { zodResolver } from "@hookform/resolvers/zod";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import loginImage from "../../public/assets/login-image.gif";

const signInFormSchema = z.object({
  email: z.email("Enter a valid e-mail address").nonempty("E-mail is required"),
  password: z
    .string()
    .nonempty("A senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInFormSchema),
  });

  function handleSignIn(data: SignInFormData) {
    console.log(data);
  }

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
            If you already a member you can login with your email address and
            password.
          </Text>

          <VStack
            as="form"
            onSubmit={handleSubmit(handleSignIn)}
            align={"flex-start"}
            gap={6}
            mt={10}
          >
            <Field.Root invalid={!!errors.email}>
              <Field.Label color="gray.500" fontSize="md">
                Email
              </Field.Label>
              <Input
                type="email"
                h={16}
                colorPalette="blue"
                color="black"
                borderRadius="md"
                {...register("email")}
              />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.password}>
              <Field.Label color="gray.500" fontSize="md">
                Password
              </Field.Label>
              <PasswordInput
                h={16}
                colorPalette="blue"
                color="black"
                borderRadius="md"
                {...register("password")}
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
              type="submit"
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
