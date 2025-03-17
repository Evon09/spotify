import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import SpotifyIcon from "../../assets/icons/spotify";
import { cloneElement } from "react";
import { ThemeToggle } from "./colorSwitch";
import { useAuth } from "../../auth/AuthContext";
import { user as mockUser } from "../../mocks/user";

function Header() {
  const { user, logout } = useAuth();

  const spotifyIconElement = <SpotifyIcon />;

  const iconWithProps = cloneElement(spotifyIconElement, {
    boxSize: { base: "20px", md: "30px" },
    color: "white",
  });

  return (
    <Flex
      bg="spotify.black"
      w="100vw"
      h="60px"
      align="center"
      paddingX={{ base: 0, sm: 10 }}
      justify={"space-between"}
    >
      <Flex align={"center"}>
        {iconWithProps}
        <Text fontSize={{ base: "2xl", md: "4xl" }} color={"white"}>
          Spotify{" "}
        </Text>
      </Flex>
      <Flex gap={{ sm: "0", md: 5 }} align="center">
        <ThemeToggle></ThemeToggle>

        {user ? (
          <Flex align="center">
            <Text
              fontSize={"md"}
              color={"white"}
              display={{ base: "none", md: "block" }}
            >
              {mockUser.name}
            </Text>
            <Menu>
              <MenuButton as={Button} border={"0px"}>
                <Avatar
                  p={2}
                  size="md"
                  name={mockUser.name}
                  src={mockUser.profileImage}
                />
              </MenuButton>

              <MenuList bg={"cardBody"}>
                <MenuItem isDisabled bg={"cardBody"}>
             
                  {mockUser.email}
                </MenuItem>

                <MenuItem onClick={logout} bg={"cardBody"}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
}

export default Header;
