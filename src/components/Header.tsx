import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import { mq } from '../styles/media-queries'
import styled from '@emotion/styled'
import { Box, Text, Link } from '@chakra-ui/react'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const BlogTitle = styled.h1`
  font-family: Montserrat, sans-serif;
  font-size: ${scale(0.5).fontSize};
  line-height: ${scale(1.0).lineHeight};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
  font-weight: 800;
  border-bottom: none;
  ${mq[0]} {
    font-size: ${scale(1.0).fontSize};
  }
`

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