import { Container } from './styles'

import { Header } from '../../components/Header'

import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'

export function Details() {
   return (
      <Container>
         <Header />
         <Section title="Marcadores">
            <div className="aaa">

            <NoteItem value="React" />
            <NoteItem isNew placeholder="Novo marcador"/>
            </div>
         </Section>
      </Container>
   )
}