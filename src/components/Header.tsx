import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Link, Wrap } from '@chakra-ui/react'

const Header: React.FC = () => (
  <Wrap
    justify='center'
    mt={10}
  >
    <Box>
      <Link
        as={GatsbyLink}
        to='/'
        color='purple.200'
        _hover={{
          textDecoration: 'none',
          opacity: 0.8,
        }}
        fontSize='2xl'
        fontWeight={700}
        fontFamily='Source Code Pro'
      >
        KNOWLEDGE_IS_POWER
      </Link>
    </Box>
  </Wrap>
)

export default Header