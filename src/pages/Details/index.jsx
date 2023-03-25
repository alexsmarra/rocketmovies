import { Container } from './styles'

import { Header } from '../../components/Header'

import { ReturnButton } from '../../components/ReturnButton'

export function Details() {
   return (
      <Container>
         <Header />
         <ReturnButton title="Voltar" />
      </Container>
   )
}