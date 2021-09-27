import Head from 'next/head'
import Image from 'next/image'
import Nav from "./components/organisms/Navbar";
import Cards from './components/molecules/Cards';
import Socials from './components/atoms/SocialCard';
import PropertyToRent from './components/molecules/PropertiesToRent';
import BenefitCalc from './components/molecules/BenefitCalculator';
import IntroImg from './components/atoms/IntroImg';
import Footer from './components/organisms/Footer';
import LatestNews from './components/molecules/Latest';
import SearchItemsPage from './components/pages/SearchPage';
import { SimpleGrid, Center, Flex, Box, Button } from '@chakra-ui/react';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Nav />
      <br/><br/><br/><br/>
      <Center>
      <IntroImg/>
      </Center>
      
      <br/>
     
      <Flex flexWrap="wrap" justifyContent="center">
        <SimpleGrid columns={[1, null, 3]}>
        <Cards 
          header="Finding a property"
          color="#354882"
          desc="Make the most of our great tools below, they will help you find the perfect property that says yes to DSS" 
        />
        <Cards 
          header="Create an account"
          color="#354882"
          desc="Sign up to receive email updates. You can also use your account save your searches and the properties you like." 
        />
        <Cards 
          header="Rent your property"
          color="#769627"
          desc="We offer a FREE monthly service to letting agents looking to advertise their properties to DSS tenants." 
        />
        </SimpleGrid>
      </Flex>

      {/* <Center> */}
        <Flex flexWrap="wrap" justifyContent="center">
        <PropertyToRent
          header="DSS Properties to Rent"
          header1="We’re here to help you find a property that says “yes” to DSS"
          desc1="If you’re in receipt of benefits then finding a landlord that’s willing to have you as a tenant can be hard. Here at Dssmove, however, we pride ourselves on helping you find a rental property that says “yes” to DSS. We currently have hundreds of DSS welcome properties to rent and, in addition, new properties are added almost every day so there’s definitely something for you."
          header2="There’s something for everyone!"
          desc2="With properties ranging from one bedroom flats to 5 bedroom houses we really do have something for everyone. So, whether you’re moving into your own home or relocating with your family then we have something for you! "
          header3="Start browsing online today"
          desc3="All of our DSS welcome properties are available to view online today so you can start browsing right this minute from the comfort of your own sofa"
        />
        <Box>
          <Socials/>
          <BenefitCalc/>
          <LatestNews />
        </Box>
        </Flex>
      {/* </Center> */}
        <Footer />
     
    </>
  )
}
