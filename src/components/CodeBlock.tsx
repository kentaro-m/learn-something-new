import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/dracula'
import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Pre = styled.pre`
  padding: 1.5rem 1.5rem 0;
  overflow: scroll;
`;

const CodeBlock = ({ children, className }: any) => {
  const language = className?.replace(/language-/, '') || ''

  return (
    <Highlight {...defaultProps} code={children} theme={nightOwl} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box fontSize='sm'>
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </Box>
      )}
    </Highlight>
  )
}

export default CodeBlock
