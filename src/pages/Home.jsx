import { Heading, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Heading as='h1'>
        Welcome to PhoneBook
        <Image boxSize='100%'
    objectFit='cover'
          src={require('../images/annie-spratt-goholCAVTRs-unsplash.jpg')}
    alt='old phone' mt='20px'></Image>
      </Heading>
    </div>
  );
};