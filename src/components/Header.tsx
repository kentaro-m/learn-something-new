import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Link, Icon } from '@chakra-ui/react'
import { FaLightbulb } from 'react-icons/fa'

const Header: React.FC = () => (
  <Box mt={10} textAlign='center'>
    <Link
      as={GatsbyLink}
      to='/'
      color='gray.200'
      _hover={{
        textDecoration: 'none',
        color: 'yellow.400', 
      }}
      fontSize='5xl'
      aria-label='ホーム'
    >
      <Icon as={FaLightbulb}/>
    </Link>
  </Box>
)

export default Header