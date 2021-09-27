import { Box, Text, Center, Input, FormControl, FormLabel, Button } from "@chakra-ui/react";

const IntroImg = () => {
    return (
        <>
            <Box
                bgImage="url('https://www.realestatemumbai.com/blog/wp-content/uploads/is-thane-the-best-real-estate-investment-destination.jpg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                width="950px"
                height="300px"
                borderRadius="10px"
            >
                <Center>
                    <Box backgroundColor="#354882" w={[300, 500, 800]} height={[250, 225, 200]} p={5} mt={["20px","30px","50px"]} opacity="0.9" borderRadius="10px">
                        
                    <FormControl id="email">
                        <FormLabel fontSize="25px" color="#fff"><b>Search for a property in:</b></FormLabel>
                        <Input type="text" backgroundColor="#fff" placeholder="Type a city, town or enter a post code..."/>
                        <Button
                            mt={4}
                            backgroundColor="#8eb035"
                            opacity="1"
                            color="#fff"
                            type="submit"
                        >
                            Search
                        </Button>
                        <Text color="#fff" fontSize="12px" mt="3px"><b>Switch to <a href="#">Advanced Search</a></b></Text>
                    </FormControl>
                    </Box>
                </Center>
            </Box>
        </>
    )
}

export default IntroImg;