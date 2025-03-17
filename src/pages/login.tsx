import { Card, Divider, Flex, Text } from "@chakra-ui/react";
import "../styles/login.css";
import "../styles/font.css";

import Header from "../components/common/header";
import GoogleIcon from "../assets/icons/google";
import AppleIcon from "../assets/icons/apple";
import FacebookIcon from "../assets/icons/facebook";
import { IconButtonLogin } from "../components/login/loginIconButton";
import { LoginForm } from "../components/login/loginForm";

function Login() {
  const loginMethod = [
    { text: "Google", icon: GoogleIcon },
    { text: "Facebook", icon: FacebookIcon },
    { text: "Apple", icon: AppleIcon },
  ];

  return (
    <>
      <Flex
        fontFamily={"CircularStd"}
        bgGradient="linear(to-b, #191919,#020202)"
        _dark={{
          bgGradient: "linear(to-b,rgb(233, 233, 233),rgb(210, 210, 210))",
        }}
        minH={"100vh"}
        w={"100vw"}
        justifyContent={"center"}
        align={"center"}
        gap={{ sm: 0, md: 5 }}
        paddingBottom={10}
        direction={"column"}
      >
        <Header></Header>
        <Card
          bg={"componentBody"}
          h={"100%"}
          w={{ base: "100%", sm: "100%", md: "734px" }}
          color={"text"}
          gap={10}
          direction={"column"}
          align={"center"}
          paddingX={{ base: "10%", sm: "10%", md: "0" }}
          paddingY={10}
        >
          <Text fontSize={"5xl"}> Login to Spotify</Text>
          <Flex w={"100%"} direction={"column"} align={"center"} gap={2}>
            {loginMethod.map((item, index) => (
              <IconButtonLogin
                key={index}
                icon={<item.icon></item.icon>}
                text={item.text}
                iconPosition="left"
                hPadding={{ base: 2, md: 4, lg: 6 }}
                vPadding={{ base: 1, md: 3, lg: 3 }}
                width={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
                height={{ base: 10, sm: 10, md: 12, lg: 12 }}
                iconSize={{ base: 5, md: 6, lg: 6 }}
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                callback={() => {
                  alert(`login feito com ${item.text}`);
                }}
              />
            ))}
          </Flex>
          <Divider />
          <LoginForm></LoginForm>
          <Divider />
          <Text>
            Don't have an account? <a className="link"> Sing up for Spotify </a>
          </Text>
        </Card>
      </Flex>
    </>
  );
}

export default Login;
