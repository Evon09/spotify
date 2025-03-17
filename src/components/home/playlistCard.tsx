import {
  Badge,
  Box,
  Card,
  CardProps,
  Flex,
  Image,
  ResponsiveValue,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";

import { FaBook } from "react-icons/fa";
import { IconButton } from "./iconFunctionButton";
import { playlists } from "../../mocks/music";

interface PlayListProps extends CardProps {
  display?: ResponsiveValue<string>;
  height?: ResponsiveValue<string>;
}

function PlaylistCard({
  display = { base: "none", md: "block" },
  height = "10%",
}: PlayListProps) {
  return (
    <Card
      bg="componentBody"
      flex={7}
      display={display}
      position="relative"
      h={height}
    >
      <Flex direction="column" h="100%">
        <Box>
          <IconButton icon={<FaBook />} text="Your Library" position="left" />
          <Stack direction="row" paddingX={5} mb={4}>
            <Badge colorScheme="cardBg">PlayList</Badge>
            <Badge colorScheme="cardBg">Others</Badge>
          </Stack>
        </Box>

        <Flex
          direction="column"
          flex={1}
          overflowY="auto"
          position="relative"
          css={{
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "gray.500",
              borderRadius: "8px",
            },
          }}
          gap={2}
          p={5}
        >
          {playlists.map((playlist) => (
            <Tooltip key={playlist.id} label={playlist.description}>
              <Card
                direction="row"
                bg="musicCardBody"
                _hover={{ bg: "musicCardBodyHover" }}
                justify="left"
                align="center"
                h="45px"
                minH="45px"
                gap={2}
                color="text"
                flexShrink={0}
              >
                <Image
                  objectFit="cover"
                  w="45px"
                  h="100%"
                  src={playlist.imageUrl}
                  alt={`${playlist.title} image`}
                  borderRadius={5}
                />
                <VStack overflow="hidden" align="start" gap={0} flex={1}>
                  <Text noOfLines={1}>{playlist.title}</Text>
                  <Text fontSize="sm" color="musicCardText">
                    Playlist • {playlist.songs}{" "}
                    {playlist.songs > 1 ? "songs" : "song"}
                  </Text>
                </VStack>
              </Card>
            </Tooltip>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}

export default PlaylistCard;
