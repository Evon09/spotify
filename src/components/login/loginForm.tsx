import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  Switch,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object().shape({
  login: yup
    .string()
    .required("Email or username is required")
    .transform((value) => value?.trim()),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export function LoginForm() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const { login, user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = async (data: { login: string; password: string }) => {
    try {
  
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data.password.length >= 6) resolve(true);
          else reject(new Error("Invalid credentials"));
        }, 1000);
      });
  

      const fakeToken = "fake_jwt_token";
      login(fakeToken);
  
      toast({
        title: "Login successful!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
  
      toast({
        title: "Login error",
        description:
          error instanceof Error ? error.message : "Unknown error",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        style={{
          width: "100%",
        }}
      >
        <FormControl w={"100%"}>
          <Flex direction={"column"} w={"100%"} align={"center"} gap={5}>
            <InputGroup
              size="md"
              width={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
              flexDirection={"column"}
            >
              <FormControl isInvalid={!!errors.login}>
                <FormLabel>Email or username</FormLabel>

                <Input
                  type="text"
                  placeholder="Email or username"
                  borderColor={"inputBorder"}
                  _hover={{ borderColor: "inputFocusBorder" }}
                  _focus={{ borderColor: "inputFocusBorder", border: "2px" }}
                  {...register("login")}
                />
                <FormErrorMessage>{errors.login?.message}</FormErrorMessage>
              </FormControl>
            </InputGroup>

            <InputGroup
              size="md"
              width={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
              flexDirection={"column"}
            >
              <FormControl isInvalid={!!errors.password}>
                <FormLabel>Password</FormLabel>
                <Flex w={"100%"} align={"center"} position={"relative"}>
                  <Input
                    placeholder="Password"
                    borderColor={"inputBorder"}
                    _hover={{ borderColor: "inputFocusBorder" }}
                    _focus={{ borderColor: "inputFocusBorder", border: "2px" }}
                    type={show ? "text" : "password"}
                    w={"100%"}
                    {...register("password")}
                  />
                  <Button
                    type="button"
                    border="0"
                    h={"100%"}
                    position={"absolute"}
                    right={2}
                    onClick={() => setShow(!show)}
                    w={"10%"}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </Flex>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
            </InputGroup>

            <InputGroup
              size="md"
              width={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
              flexDirection={"row"}
            >
              <Switch id="remember" />
              <FormLabel htmlFor="remember" mb="0">
                Remember me?
              </FormLabel>
            </InputGroup>

            <Button
              width={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
              variant={"spotify"}
              color={"text"}
              type="submit"
              isLoading={isSubmitting}
            >
              Log in
            </Button>
          </Flex>
        </FormControl>
        <Text align={"center"} paddingTop={10}>
          <a className="link">Forgot your password?</a>
        </Text>
      </form>
    </>
  );
}
