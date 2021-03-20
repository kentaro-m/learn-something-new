import React from 'react'
import Header from './Header'
import { Container } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { Heading, Text, Link, UnorderedList, OrderedList, ListItem } from '@chakra-ui/react'
import CodeBlock from './CodeBlock'

type LayoutProps = {
  location: Location
  title: string
  children: JSX.Element[]
}

const components = {
  a: (props: any) => <Link {...props}>{props.children}</Link>,
  p: ({ children }: any) => <Text mb={8}>{children}</Text>,
  h2: ({ children }: any) => <Heading as='h2' size='lg' mb={4} >{children}</Heading>,
  ul: ({ children }: any) => <UnorderedList>{children}</UnorderedList>,
  ol: ({ children }: any) => <OrderedList>{children}</OrderedList>,
  li: ({ children }: any) => <ListItem>{children}</ListItem>,
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <CodeBlock {...props} />,
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
