import { Flex, Image, Text } from "@chakra-ui/react";
import { artists } from "../../../mocks/artistis";

function ForYou() {
  return (
    <>
      <Text fontSize={"2xl"}>For you</Text>
      <Flex
        direction="row"
        gap={{ base: 2, md: 3 }}
        w="100%"
        flexWrap="wrap"
        justify={{ base: "center", md: "flex-start" }}
      >
        {artists.map((item) => (
          <Flex
            key={item.id}
            gap={{ base: 2, md: 4 }}
            borderRadius={5}
            bg="cardBody"
            _hover={{ bg: "cardBodyHover" }}
            w={{ base: "100%", sm: "45%", md: "300px" }}
            minW={{ base: "280px", sm: "auto" }}
            h={{ base: "80px", md: "100px" }}
            align="center"
            flex={{ base: "1 0 auto", md: "0 1 auto" }}
            p={{ base: 1, md: 2 }}
          >
            <Image
              objectFit="cover"
              h="100%"
              w={{ base: "70px", md: "100px" }}
              src={item.image}
              alt={`${item.name} artist`}
              boxShadow="dark-lg"
              flexShrink={0}
            />

            <Text fontSize={{ base: "sm", md: "md" }} noOfLines={2} flex={1}>
              {item.name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
}

export default ForYou;
