import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Text, Link } from '@chakra-ui/react'

type HeaderProps = {
  location: Location
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Box mt={8}>
    <Text
      as='h1'
      fontSize={['2xl', '4xl']}
      fontWeight='bold'
      fontFamily='Montserrat'
      textAlign='center'
    >
      <Link as={GatsbyLink} to='/' color='gray.200' _hover={{ textDecoration: 'none' }}>
        {title}
      </Link>
    </Text>
  </Box>
)

export default Header