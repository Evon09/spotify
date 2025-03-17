import {
  Card,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IconButton } from "./iconFunctionButton";
import { FaBars, FaHome } from "react-icons/fa";
import PlaylistCard from "./playlistCard";
import SeachModal from "./seach";

function ResponsiveCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <Card bg="componentBody" flex={1}>
      <SeachModal />
      <IconButton icon={<FaHome></FaHome>} text="Search" position="left" />
      <IconButton
        icon={<FaBars></FaBars>}
        text="Menu"
        position="left"
        callback={onOpen}
        display={{ base: "flex", md: "none" }}
        ref={btnRef}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"componentBody"}>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody p={2}>
            <PlaylistCard display={"block"} height={"100%"}></PlaylistCard>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Card>
  );
}

export default ResponsiveCard;
