import { Container } from './styles.js'

import { Header } from '../../components/Header'
import { ReturnButton } from '../../components/ReturnButton'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

export function Create() {
   return (
      <Container>
         <Header />
         
         <main>
            <div className="btn">
               <ReturnButton title="Voltar" />
            </div>

            <div className='title'>
               <h2>Novo filme</h2>
            </div>

            <form action="">
               <div className='inputs'>
                  <Input type='text' placeholder='Título' />
                  <Input type='number' placeholder='Sua nota (de 0 a 5)' />
               </div>

               <div className='textarea'>
                  <Textarea placeholder='Observações'/>
               </div>

               <div className='section'>
                  <Section title='Marcadores'>
                     <div>
                        <NoteItem value='React'/>
                        <NoteItem isNew value='Novo marcador'/>
                     </div>
                  </Section>
               </div>

               <div className='btns'>
                  <Button title='Excluir filme'/>
                  <Button title='Salvar alterações'/>
               </div>
            </form>
         </main>
      </Container>
   )
}