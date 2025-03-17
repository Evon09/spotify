import { Flex, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import Header from "../components/common/header";
import MusicPlayer from "../components/music/player";
import ResponsiveCard from "../components/home/responsiveCard";
import PlaylistCard from "../components/home/playlistCard";

import { traks } from "../mocks/playlist";
import ForYou from "../components/home/main/forYou";
import RecentTraks from "../components/home/main/recentTraks";

function Home() {
  const gridTemplate = useBreakpointValue({
    base: "repeat(10, 1fr)",
    md: "repeat(10, 1fr)", 
  });

  return (
    <Flex
      fontFamily={"CircularStd"}
      direction="column"
      height="100vh"
      maxH="100vh"
      bg="bgBody"
      paddingBottom={5}
    >
      <Header></Header>
      <Flex flex={1} minH={0}>
        <Grid
          templateRows={gridTemplate}
          templateColumns={gridTemplate}
          gap={2}
          width="full"
          height="calc(100vh - 60px)"
        >
          <GridItem
            colSpan={{ base: 10, md: 1 }}
            rowSpan={{ base: 1, md: 9 }}
            bg="brand.sidebar"
          >
            <Flex direction="column" gap={2} height="full">
              <ResponsiveCard></ResponsiveCard>
              <PlaylistCard></PlaylistCard>
            </Flex>
          </GridItem>

          <GridItem
            colSpan={{ base: 10, md: 9 }}
            rowSpan={9}
            bg="componentBody"
            p={4}
            overflowY="auto"
          >
            <ForYou></ForYou>
            <RecentTraks></RecentTraks>
          </GridItem>
          <GridItem colSpan={10} rowSpan={1}>
            <MusicPlayer tracks={traks} />
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Home;
