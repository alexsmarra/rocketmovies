import { Container } from './styles'

export function SummarySinapse({ content, ...rest }) {
   return (
      <Container>
         <p>
            {content}
         </p>
      </Container>
   )
}