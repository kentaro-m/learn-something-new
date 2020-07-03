import styled, { CreateStyled } from '@emotion/styled'

type Theme = {
  colors: {
    background: string
    text: string
    primary: string
  }
}

export default styled as CreateStyled<Theme>