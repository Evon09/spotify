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
import { useEffect, useState } from "react";

const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<typeof searchResults>([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    const filteredResults = searchResults.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredResults);
    console.log(searchTerm.toLowerCase());

    setResults(filteredResults);
  }, [searchTerm]); 


  const handleOpen = () => {
    setSearchTerm("");
    setResults([]);
    onOpen();
  };

  return (
    <>
      <IconButton
        callback={handleOpen}
        icon={<FaSearch />}
        text="Search"
        position="left"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"componentBody"}>
          <ModalCloseButton />
          <Input
            placeholder="Search for songs, albums, or artists..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="lg"
            borderRadius="md"
            autoFocus
          />
          <ModalBody>
            {results.length > 0 ? (
              <VStack spacing={4} align="stretch">
                {results.map((result, index) => (
                  <Flex
                    key={index}
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
            ) : (
              <Text textAlign="center" color="gray.500">
                Nenhum resultado encontrado.
              </Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
