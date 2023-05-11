import { Container, Content } from './styles.js'

import { Link } from 'react-router-dom'

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
            <Content>
               <Link to='/'>
                  <div className="return-btn-div">
                     <ReturnButton title="Voltar" />
                  </div>
               </Link>

               <div className='new-movie'>
                  <h2>Novo filme</h2>
               </div>

               <div className="info">
                  <div className='inputs'>
                     <Input 
                        value={""}
                        type='text' 
                        placeholder='Título' 
                        onChange={""}   
                     />
                     <Input
                        value={""}
                        type='number' 
                        placeholder='Sua nota (de 0 a 5)' 
                        onChange={""}   
                     />
                  </div>

                  <div className='textarea'>
                     <Textarea 
                        value={""}
                        placeholder='Observações'
                        onChange={""}   
                     />
                  </div>
               </div>

                  <div className='section'>
                     <Section title='Marcadores'>
                        <div className="markers">
                           <NoteItem value='React'/>
                           <NoteItem isNew placeholder='Novo marcador'/>
                        </div>
                     </Section>
                  </div>

                  <footer>
                     <Button title='Excluir filme'/>
                     <Button title='Salvar alterações'/>
                  </footer>
            </Content>
         </main>
      </Container>
   )
}