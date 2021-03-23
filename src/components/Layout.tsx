import React from 'react'
import Header from './Header'
import { Container } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { Heading, Text, Link, UnorderedList, OrderedList, ListItem, Box, Image } from '@chakra-ui/react'
import CodeBlock from './CodeBlock'
import Slide from './Slide'

import '@fontsource/montserrat/800.css'
import '@fontsource/noto-sans-jp/700.css'
import '@fontsource/noto-sans-jp/500.css'

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

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {

  return (
    <MDXProvider components={components}>
      <Container maxW="container.md">
        <Header location={location} title={title} />
        {children}
      </Container>
    </MDXProvider>
  )
}

export default Layout
