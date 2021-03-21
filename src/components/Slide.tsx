import React from 'react'
import { Box } from '@chakra-ui/react'

type SlideProps = {
  id: string
  url?: string
}

const Slide: React.FC<SlideProps> = ({ id }) => {
  return (
    <Box
      position='relative'
      width='100%'
      height={0}
      left={0}
      paddingBottom='56.1987%'
      marginBottom='2rem'
    >
      <iframe
        src={`//speakerdeck.com/player/${id}`}
        style={{
          border: 0,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'absolute'
        }}
        frameBorder='0'
        allowFullScreen
      />
    </Box>
  )
}

export default Slide