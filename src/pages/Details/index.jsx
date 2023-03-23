import { Container } from './styles'
import { Button } from '../../components/Button'

export function Details() {
   return (
      <Container>
         <h1>Olá a todos!</h1>
         <p>Bom.. no video de hoje..</p>
         <Button title="Entrar" loading/>
         <Button title="Register" />
         <Button title="Return" />
      </Container>
   )
}