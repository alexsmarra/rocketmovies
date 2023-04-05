import { Container } from './styles'

import { ImArrowLeft2 } from "react-icons/im";

export function ReturnButton({ title }) {
   return (
      <Container>
         <ImArrowLeft2 /> <span>{title}</span>
      </Container>
   )
}

