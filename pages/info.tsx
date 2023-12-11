import { Container, Heading, Text } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'

export default function Info() {
  const address = useAddress()

  return (
    <Container maxW={'1200px'} p={5} bg="yellow.100">
      <Heading> Infomation </Heading>
      <Text>
        Developed by Park Jina <br />
        0x7871AE2269812D41B4168E5fC7Ac7216c189fd64 <br />
        Technology : Thirdweb, Ethers, Next.js, ChakraUI, Typescript
        <br />
      </Text>
      <br />
      <Heading> Contract Addresses </Heading>
      <Text>
        - MARKETPLACE_ADDRESS : 0xC3E49c80360a8B72BCBb9472B4922Be5803b0d25{' '}
        <br />
        - NFT_COLLECTION_ADDRESS : 0xdee48997b1e133A1d25c5AD5d771fCB4e801576b
        <br />
        - TOKEN_DROP_ADDRESS : 0x099cf8fFdeA6605Ddbb0D81b49fA6Ba12F53b9fD <br />
      </Text>
      <br />
      <Heading> Current Wallet </Heading>
      <Text>{address}</Text>
    </Container>
  )
}
