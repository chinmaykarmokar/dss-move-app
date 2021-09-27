import { Select, Input, FormLabel, Flex, Text, Heading, SimpleGrid, Divider, Button } from "@chakra-ui/react";
import { BsCaretDownFill } from "react-icons/bs"

const SearchItemsPage = () => {
    return (
        <>  
            <Flex border="1px solid #c6c6c6" m="3" bgGradient="linear(to-b, #f0f5f5, #fff, #f0f5f5)" borderRadius="10px" width="250px" flexWrap="wrap" p={5}>
               <Heading fontSize="16px" mb={3} color="#5c5c5c">Property Search</Heading>
               <br/>
               <Divider />
               <br/>
               <Text color="#898980" fontSize="14px"><b><a href="#">Login</a> to make the most of our search tools & features</b></Text>
               <FormLabel mt={5} color="#5c5c75" fontSize="14px"><b>Search for a property in:</b></FormLabel>
               <Input placeholder="Town/City" w={200} h={30} bg="#fff"/>
               <br/>
               <FormLabel mt={5} color="#5c5c75" fontSize="14px"><b>Radius:</b></FormLabel>
               <Select boxShadow="sm" icon={<BsCaretDownFill/>} w={200} h={30} placeholder="This area only" bgGradient="linear(to-b, #fff, #f0f5f5)" iconColor="#354882">
                    <option value="option1">Within 1/4 mile</option>
                    <option value="option2">Within 1/2 mile</option>
                    <option value="option3">Within 1 mile</option>
               </Select>
               <FormLabel mt={5} color="#5c5c75" fontSize="14px"><b>No. of Beds:</b></FormLabel>
               <SimpleGrid columns={2}>
                    <Select boxShadow="sm" w={95} h={30} icon={<BsCaretDownFill/>} placeholder="No Min" bgGradient="linear(to-b, #fff, #f0f5f5)" iconColor="#354882">
                        <option value="option1">1</option>
                        <option value="option2">2</option>
                        <option value="option3">3</option>
                        <option value="option4">4</option>
                        <option value="option5">5</option>
                    </Select>
                    <Select boxShadow="sm" w={95} h={30} icon={<BsCaretDownFill/>} ml={1} placeholder="No Max" bgGradient="linear(to-b, #fff, #f0f5f5)" iconColor="#354882">
                        <option value="option1">1</option>
                        <option value="option2">2</option>
                        <option value="option3">3</option>
                        <option value="option4">4</option>
                        <option value="option5">5</option>
                    </Select>
               </SimpleGrid>
               <FormLabel mt={5} color="#5c5c75" fontSize="14px"><b>Property Type:</b></FormLabel>
               <Select icon={<BsCaretDownFill/>} w={200} h={30} placeholder="Any" bgGradient="linear(to-b, #fff, #f0f5f5)" iconColor="#354882">
                    <option value="option1">Houses</option>
                    <option value="option2">Flats & Rooms</option>
               </Select>
               <FormLabel mt={5} color="#5c5c75" fontSize="14px"><b>Price per month:</b></FormLabel>
               <SimpleGrid columns={2}>
                    <Select boxShadow="sm" w={95} h={30} icon={<BsCaretDownFill/>} placeholder="No Min" bgGradient="linear(to-b, #fff, #f0f5f5)" iconColor="#354882">
                        <option value="option1">£100</option>
                        <option value="option2">£200</option>
                        <option value="option3">£300</option>
                        <option value="option4">£400</option>
                        <option value="option5">£500</option>
                    </Select>
                    <Select boxShadow="sm" w={95} h={30} icon={<BsCaretDownFill/>} ml={1} placeholder="No Max" bgGradient="linear(to-b, #fff, #f0f5f5)" iconColor="#354882">
                        <option value="option1">£100</option>
                        <option value="option2">£200</option>
                        <option value="option3">£300</option>
                        <option value="option4">£400</option>
                        <option value="option5">£500</option>
                    </Select>
               </SimpleGrid>
               <Button backgroundColor="#354882" color="#fff" mt={5} fontSize="14px" width="100%">Update Search</Button>
            </Flex>
        </>
    )
}

export default SearchItemsPage;