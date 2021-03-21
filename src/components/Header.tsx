import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Text, Link } from '@chakra-ui/react'

type HeaderProps = {
  location: Location
  title: string
}

const Header: React.FC<HeaderProps> = ({ location, title }) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  
  if (location.pathname === rootPath) {
    return (
      <Box mt={8}>
        <Text
          as='h1'
          fontSize='2xl'
          fontWeight='bold'
          fontFamily='Montserrat'
          textAlign='center'
        >
          <Link as={GatsbyLink} to='/' color='white'>
            {title}
          </Link>
        </Text>
      </Box>
    )
  } else {
    return (
      <Box mt={8}>
        <Text
          as='h1'
          fontSize='2xl'
          fontWeight='bold'
          fontFamily='Montserrat'
          textAlign='center'
        >
          <Link as={GatsbyLink} to='/' color='white'>
            {title}
          </Link>
        </Text>
      </Box>
    )
  }
}

export default Header