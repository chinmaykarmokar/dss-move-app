import { Flex, Button, Heading, Text, Image } from "@chakra-ui/react";

const BenefitCalc = () => {
    return (
        <>
            <Flex border="1px solid #c6c6c6" m="3" bgGradient="linear(to-b, #f0f5f5, #fff, #f0f5f5)" borderRadius="10px" height="250px" width="300px" flexWrap="wrap" p={5}>
               <Heading fontSize="25px" color="#354882">Benefit Calculator</Heading>
               <br/><br/> 
               <Text>Find out what you can afford using a simple housing benefit calculator.</Text>
               <Image src="http://www.dssmove.co.uk/default/public/media/images/graphic-housing.jpg"/>
               <Button backgroundColor="#354882" color="#fff" mt="5px" width="100%">Calculate Benefit</Button>
            </Flex>
        </>
    )
}

export default BenefitCalc;