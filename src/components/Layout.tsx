import React from 'react'
import Header from './Header'
import { Container } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import styled from '@emotion/styled'
import {
  Heading,
  Text,
  Link,
  UnorderedList,
  OrderedList,
  ListItem,
  Box,
  Image,
  Flex,
  Code,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'
import CodeBlock from './CodeBlock'
import Slide from './Slide'
import Bio from './Bio'

type LayoutProps = {
  location: Location
  title: string
  children: React.ReactNode
}

const components = {
  a: (props: any) => <Link {...props}>{props.children}</Link>,
  p: ({ children }: any) => <Text mb={8} lineHeight='tall' >{children}</Text>,
  h2: ({ children }: any) => <Heading as='h2' fontSize='2xl' lineHeight='base' mt={16} mb={8} >{children}</Heading>,
  h3: ({ children }: any) => <Heading as='h3' fontSize='xl' lineHeight='base' mt={16} mb={8} >{children}</Heading>,
  h4: ({ children }: any) => <Heading as='h4' fontSize='lg' fontWeight='bold' lineHeight='base' mt={16} mb={8} >{children}</Heading>,
  ul: ({ children }: any) => <UnorderedList>{children}</UnorderedList>,
  ol: ({ children }: any) => <OrderedList>{children}</OrderedList>,
  li: ({ children }: any) => <ListItem mt={1} mb={1}>{children}</ListItem>,
  pre: (props: any) => <Box {...props} mb={8} />,
  code: (props: any) => <CodeBlock {...props} />,
  inlineCode: ({ children }: any) => <Code background='rgb(40, 42, 54)' paddingY={0.5} paddingX={1}>{children}</Code>,
  img: (props: any) => <Image {...props} mb={8} />,
  table: (props: any) => <Table {...props} mb={8} size="sm" />,
  thead: (props: any) => <Thead {...props} />,
  tbody: (props: any) => <Tbody {...props} />,
  tr: (props: any) => <Tr {...props} />,
  th: (props: any) => <Th {...props} />,
  td: (props: any) => <Td {...props} />,
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

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <MDXProvider components={components}>
      <Container maxW="container.md" p={0}>
        <Header />
        <Flex height='32px' justifyContent='center' mt={5} mb={10}>
          <Divider />
        </Flex>
        {children}
        <Flex height='32px' justifyContent='center' mt={10} mb={10}>
          <Divider />
        </Flex>
        <Bio />
        <Box mb={20} />
      </Container>
    </MDXProvider>
  )
}

export default Layout
