import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Link, Icon } from '@chakra-ui/react'
import { FaGhost } from 'react-icons/fa'

const Header: React.FC = () => (
  <Box mt={10} textAlign='center'>
    <Link
      as={GatsbyLink}
      to='/'
      color='purple.200'
      _hover={{
        textDecoration: 'none',
        opacity: 0.8,
      }}
      fontSize='5xl'
      aria-label='ホーム'
    >
      <Icon as={FaGhost} />
    </Link>
  </Box>
)

export default Header