import React from 'react'
import Header from './Header'
import { Container } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import styled from '@emotion/styled'
import { Heading, Text, Link, UnorderedList, OrderedList, ListItem, Box, Image, Flex } from '@chakra-ui/react'
import CodeBlock from './CodeBlock'
import Slide from './Slide'
import Bio from './Bio'

import '@fontsource/montserrat/800.css'
import '@fontsource/noto-sans-jp/700.css'
import '@fontsource/noto-sans-jp/400.css'

type LayoutProps = {
  location: Location
  title: string
  children: JSX.Element[]
}

const components = {
  a: (props: any) => <Link {...props}>{props.children}</Link>,
  p: ({ children }: any) => <Text mb={8} lineHeight='tall' >{children}</Text>,
  h2: ({ children }: any) => <Heading as='h2' size='lg' lineHeight='base' mb={8} >{children}</Heading>,
  h3: ({ children }: any) => <Heading as='h3' size='md' lineHeight='base' mb={8} >{children}</Heading>,
  ul: ({ children }: any) => <UnorderedList spacing={1}>{children}</UnorderedList>,
  ol: ({ children }: any) => <OrderedList>{children}</OrderedList>,
  li: ({ children }: any) => <ListItem>{children}</ListItem>,
  pre: (props: any) => <Box {...props} mb={8} />,
  code: (props: any) => <CodeBlock {...props} />,
  img: (props: any) => <Image {...props} mb={8} />,
  iframe: (props: any) => <Box mb={8}><iframe {...props} /></Box>,
  Slide: ({ id }: { id: string }) => <Box mb={8}><Slide id={id} /></Box>
}

const Divider = styled.div`
  &::before {
    content: '...';
    font-size: 64px;
    position: relative;
    top: -53px;
  }
`

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {

  return (
    <MDXProvider components={components}>
      <Container maxW="container.md">
        <Header location={location} title={title} />
        <Flex height='32px' justifyContent='center' mt={8} mb={8}>
          <Divider />
        </Flex>
        {children}
        <Flex height='32px' justifyContent='center' mt={4} mb={10}>
          <Divider />
        </Flex>
        <Bio />
        <Box mb={20} />
      </Container>
    </MDXProvider>
  )
}

export default Layout
