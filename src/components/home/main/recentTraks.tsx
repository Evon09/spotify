import { useEffect, useRef, useState } from "react";
import { Card, Flex, Image, Text, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { recentlyPlayed } from "../../../mocks/recentlyPlayed";

const RecentTraks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState<boolean>(false);
  const [showRightButton, setShowRightButton] = useState<boolean>(false);

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      setShowLeftButton(scrollLeft > 0);

      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = containerRef.current;

    container?.addEventListener("scroll", checkScrollPosition);

    return () => {
      container?.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 200;
      if (direction === "left") {
        containerRef.current.scrollLeft -= scrollAmount;
      } else {
        containerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <>
      <Text fontSize={"2xl"}>Recent Tracks</Text>

      <Flex align="center" position={"relative"} gap={2}>
        {showLeftButton && (
          <IconButton
            zIndex={1}
            top={"50%"}
            left={"-1%"}
            transform={"translateY(-50%)"}
            position={"absolute"}
            aria-label="Scroll left"
            icon={<ChevronLeftIcon />}
            onClick={() => handleScroll("left")}
            size={"sm"}
            bg={"cardBody"}
          />
        )}

        <Flex
          ref={containerRef}
          direction="row"
          gap={4}
          w="100%"
          overflowX="auto"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
          }}
          p={2}
          cursor="grab"
          _active={{
            cursor: "grabbing",
          }}
        >
          {recentlyPlayed.map((item) => (
            <Card
              key={item.id}
              flexShrink={0}
              w={"150px"}
              h={"200px"}
              p={2}
              bg="cardBody"
              _hover={{ bg: "cardBodyHover" }}
              color={"text"}
              scrollSnapAlign="start"
              sx={{
                ":first-of-type": {
                  ml: { base: 4, md: 0 },
                },
                ":last-of-type": {
                  mr: { base: 4, md: 0 },
                },
              }}
              overflow={"hidden"}
            >
              <Image
                objectFit={"cover"}
                w={"100%"}
                h={"130px"}
                src={item.albumArt}
                alt={item.title}
              />
              <Text
                fontSize={"md"}
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {item.title}
              </Text>
              <Text
                fontSize={"sm"}
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                color="musicCardText"
              >
                {item.artist}
              </Text>
            </Card>
          ))}
        </Flex>
        {showRightButton && (
          <IconButton
            aria-label="Scroll right"
            icon={<ChevronRightIcon />}
            onClick={() => handleScroll("right")}
            position={"absolute"}
            zIndex={1}
            top={"50%"}
            right={"-1%"}
            transform={"translateY(-50%)"}
            size={"sm"}
            bg={"cardBody"}
          />
        )}
      </Flex>
    </>
  );
};

export default RecentTraks;
