import {
  Box,

  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,

  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { searchResults } from "../../mocks/seachResult";
import { FaSearch } from "react-icons/fa";
import { IconButton } from "./iconFunctionButton";
import { useState } from "react";

const SeachModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<typeof searchResults>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setResults([]); 
    } else {
      const filteredResults = searchResults.filter((item) =>
        item.title.toLowerCase().includes(term.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  return (
    <>
      <IconButton
        callback={onOpen}
        icon={<FaSearch />}
        text="Search"
        position="left"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"componentBody"}>
          <Input
            placeholder="Search for songs, albums, or artists..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            size="lg"
            borderRadius="md"
          />
          <ModalCloseButton />
          <ModalBody>
            {results.length > 0 && (
              <VStack spacing={4} align="stretch">
                {results.map((result) => (
                  <Flex
                    key={result.id}
                    align="center"
                    gap={4}
                    p={3}
                    borderRadius="md"
                    _hover={{ bg: "gray.100" }}
                  >
                    <Image
                      src={result.image}
                      alt={result.title}
                      boxSize="60px"
                      borderRadius="md"
                    />
                    <Box>
                      <Text fontWeight="bold">{result.title}</Text>
                      <Text fontSize="sm" color="gray.500">
                        {result.description}
                      </Text>
                      <Text fontSize="xs" color="blue.500" fontWeight="bold">
                        {result.type.toUpperCase()}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SeachModal;
