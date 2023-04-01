import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { products } from "./dummyData";
const Cart = () => {
  return (
    <>
      <Grid
        h="200px"
        w={"90%"}
        m="auto"
        my={"50px"}
        // templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={3} colSpan={3}>
          <Box
            border={"1px"}
            p="20px"
            borderColor="gray.300"
            borderRadius={"5px"}
            boxShadow="md"
          >
            <HStack height={"200px"}>
              <Box height={"100%"} width={"25%"}>
                <Image
                  borderRadius={"5px"}
                  boxShadow="md"
                  height="100%"
                  src={products[0].image2}
                  alt="dummy"
                />
              </Box>
              <Box height={"100%"} width={"70%"}>
                <Flex justifyContent={"space-between"}>
                  <Heading
                    align="left"
                    // mt={{ base: "10px", md: "0px" }}
                    fontSize={"16px"}
                  >
                    The Simpsons: Expressions
                  </Heading>
                  <Box>
                    <HStack>
                      <Text
                        fontSize={"16px"}
                        fontWeight={"semibold"}
                        align="left"
                      >
                        {products[0].price}
                      </Text>
                      <Text
                        align="left"
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        {products[0].offer_price}
                      </Text>
                    </HStack>
                  </Box>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontSize={"14px"}
                    my={"10px"}
                    align="left"
                    color={"gray"}
                  >
                    {products[0].description}
                  </Text>
                  <Text align="left" color={"red"} fontSize={"14px"}>
                    {products[0].discount}
                  </Text>
                </Flex>
                <HStack>
                  <Select
                    mr={"10px"}
                    width="120px"
                    height="35px"
                    fontSize={"13px"}
                    fontWeight="bold"
                    placeholder={`Size:m`}
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </Select>
                  <Select
                    m={"10px"}
                    width="120px"
                    height="35px"
                    fontSize={"13px"}
                    fontWeight="bold"
                    placeholder="Qty:1"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Select>
                </HStack>
              </Box>
            </HStack>
            <Stack
              w={"75%"}
              ml="25%"
              borderTop={"1px"}
              borderColor="gray.300"
              direction="row"
              spacing={4}
              justifyContent="end"
              pt={"10px"}
            >
              <Button size="sm" colorScheme="red" variant="outline">
                Remove
              </Button>
              <Button size="sm" variant="outline" colorScheme="teal">
                Move To Wishlist
              </Button>
            </Stack>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Box>
              <Button
                size="md"
                w={"100%"}
                colorScheme="teal"
                variant="solid"
                fontWeight={"bold"}
              >
                PLACE ORDER
              </Button>
            </Box>
            <Box
              p={"20px"}
              bg="rgb(255,185,81)"
              my={"10px"}
              borderRadius="5px"
              textAlign={"left"}
            >
              <Checkbox fontWeight={"bold"}>
                Save an additional ₹ 250.48 on this order.
              </Checkbox>
            </Box>
            <Box>
              <Accordion allowToggle border={"1px"} borderColor="gray.300">
                <AccordionItem border={"none"}>
                  <h2>
                    <AccordionButton fontSize={"14px"}>
                      <Image
                        mr={"10px"}
                        width={"20px"}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAMAAAB5awL4AAAARVBMVEVHcEw1vK9IjYVYWFpXWFpXWFpVWlpLYWxYWFpXWFo2vK42va5YWFw2va5XWFpYWFo2va9YWFpXWVo2va5XWFpYWVs3va7cWG+0AAAAFXRSTlMARyDAXNAwEKDwp+xAynDgf4CQabANvZKzAAABeElEQVRIx5WUWxaDIAxEAVEUbbW+9r/UBlQQCEHz0WORK0kmA2NEyLbagqjbgZHRRMARM3nIhsdMI90vTEXJGlaz6bUme5EsK1hfKUQhLwScjhLKVN/iX4M3KFLnkQzTGOTL3jBNB8vS5b9MeuIFZgCkc8jU7yY+nGKsLM31T+9X8DzzhaXRIQts1gufPvveixwTyeK+D+fpDBMhHAo5u++eIiaRBVKb/IkYkyrJfUZQEMI0Y6KkgJ0qyvLOhEqeAf3Spl9L75o9bFt1yRIo6Q6yitof7ds0Y0reKupPSbXyG6VTsm7QEbd6utExYvxog51coF/lnxQrxuFEu5EyWMaJ80PEOvGohY2pLChy1w+eRRkJnbjiylBONMNQhGTgxDPTjiwJ0Q8dz9KdKm5tfHynEhdn/pVa3VhEsozEnYrPaaHUGYFkqaWp72RZunjLN1YyN4c+lYITsZKfOtGrq5460e99g5zqjoUJRNV9iUCPu9xtRzqZJv4YTCbCeHS4sAAAAABJRU5ErkJggg=="
                        alt="tag"
                      />
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        Apply Coupon
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box pt="15px" borderTop={"1px"} borderColor="gray.300">
                      <Input
                        size="sm"
                        mr={"20px"}
                        w={"50%"}
                        borderRadius={"10px"}
                        placeholder="Enter Code Here"
                      />
                      <Button
                        size="sm"
                        w={"40%"}
                        colorScheme="black"
                        variant="outline"
                        fontWeight={"bold"}
                      >
                        APPLY
                      </Button>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border={"none"}>
                  <h2>
                    <AccordionButton fontSize={"14px"}>
                      <Image
                        mr={"10px"}
                        width={"20px"}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAMAAAB5awL4AAAARVBMVEVHcEw1vK9IjYVYWFpXWFpXWFpVWlpLYWxYWFpXWFo2vK42va5YWFw2va5XWFpYWFo2va9YWFpXWVo2va5XWFpYWVs3va7cWG+0AAAAFXRSTlMARyDAXNAwEKDwp+xAynDgf4CQabANvZKzAAABeElEQVRIx5WUWxaDIAxEAVEUbbW+9r/UBlQQCEHz0WORK0kmA2NEyLbagqjbgZHRRMARM3nIhsdMI90vTEXJGlaz6bUme5EsK1hfKUQhLwScjhLKVN/iX4M3KFLnkQzTGOTL3jBNB8vS5b9MeuIFZgCkc8jU7yY+nGKsLM31T+9X8DzzhaXRIQts1gufPvveixwTyeK+D+fpDBMhHAo5u++eIiaRBVKb/IkYkyrJfUZQEMI0Y6KkgJ0qyvLOhEqeAf3Spl9L75o9bFt1yRIo6Q6yitof7ds0Y0reKupPSbXyG6VTsm7QEbd6utExYvxog51coF/lnxQrxuFEu5EyWMaJ80PEOvGohY2pLChy1w+eRRkJnbjiylBONMNQhGTgxDPTjiwJ0Q8dz9KdKm5tfHynEhdn/pVa3VhEsozEnYrPaaHUGYFkqaWp72RZunjLN1YyN4c+lYITsZKfOtGrq5460e99g5zqjoUJRNV9iUCPu9xtRzqZJv4YTCbCeHS4sAAAAABJRU5ErkJggg=="
                        alt="tag"
                      />
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        Gift Voucher
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} align="left">
                    <Box p="15px" borderTop={"1px"} borderColor="gray.300">
                      <Link fontSize={"14px"} color={"teal"} textDecoration="underline">Login To Apply</Link>
                      < Spacer m={"15px"}/>
                      <Input
                        size="sm"
                        mr={"20px"}
                        w={"50%"}
                        borderRadius={"10px"}
                        placeholder="Enter Code Here"
                      />                     
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border={"none"}>
                  <h2>
                    <AccordionButton fontSize={"14px"}>
                      <Image
                        mr={"10px"}
                        width={"20px"}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAMAAAB5awL4AAAARVBMVEVHcEw1vK9IjYVYWFpXWFpXWFpVWlpLYWxYWFpXWFo2vK42va5YWFw2va5XWFpYWFo2va9YWFpXWVo2va5XWFpYWVs3va7cWG+0AAAAFXRSTlMARyDAXNAwEKDwp+xAynDgf4CQabANvZKzAAABeElEQVRIx5WUWxaDIAxEAVEUbbW+9r/UBlQQCEHz0WORK0kmA2NEyLbagqjbgZHRRMARM3nIhsdMI90vTEXJGlaz6bUme5EsK1hfKUQhLwScjhLKVN/iX4M3KFLnkQzTGOTL3jBNB8vS5b9MeuIFZgCkc8jU7yY+nGKsLM31T+9X8DzzhaXRIQts1gufPvveixwTyeK+D+fpDBMhHAo5u++eIiaRBVKb/IkYkyrJfUZQEMI0Y6KkgJ0qyvLOhEqeAf3Spl9L75o9bFt1yRIo6Q6yitof7ds0Y0reKupPSbXyG6VTsm7QEbd6utExYvxog51coF/lnxQrxuFEu5EyWMaJ80PEOvGohY2pLChy1w+eRRkJnbjiylBONMNQhGTgxDPTjiwJ0Q8dz9KdKm5tfHynEhdn/pVa3VhEsozEnYrPaaHUGYFkqaWp72RZunjLN1YyN4c+lYITsZKfOtGrq5460e99g5zqjoUJRNV9iUCPu9xtRzqZJv4YTCbCeHS4sAAAAABJRU5ErkJggg=="
                        alt="tag"
                      />
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                       Gift Wrap (₹ 25)
                      </Box>
                      <Checkbox colorScheme='teal'/>
                    </AccordionButton>
                  </h2>               
                </AccordionItem>
                <AccordionItem border={"none"}>
                  <h2>
                    <AccordionButton fontSize={"14px"}>
                      <Image
                        mr={"10px"}
                        width={"20px"}
                        src="https://tss-static-images.gumlet.io/icons/tss-money.png"
                        alt="tag"
                      />
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        TSS Money / TSS Points
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} align="left">
                    <Box p="15px" borderTop={"1px"} borderColor="gray.300">
                      <Link fontSize={"14px"} color={"teal"} textDecoration="underline">Login To Apply</Link>
                      < Spacer m={"15px"}/>
                      <Input
                        size="sm"
                        mr={"20px"}
                        w={"50%"}
                        borderRadius={"10px"}
                        placeholder="Enter Code Here"
                      />                     
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Cart;
