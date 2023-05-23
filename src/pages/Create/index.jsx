import { Container, Content } from './styles.js'

import { useState } from "react"

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { ReturnButton } from '../../components/ReturnButton'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Markers } from '../../components/Markers'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

export function Create() {
   const [tags, setTags] = useState([])
   const [newTag, setNewTag] = useState("")

   function handleAddTag() {
      /* prevState é tudo que tinha antes na const tags */
      setTags(prevState => [...prevState, newTag])
      setNewTag("")
   }

   function handleRemoveTag(deleted) {
      setTags(prevState => prevState.filter(tag => tag !== deleted))
   }

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
                        type='text' 
                        placeholder='Título' 
                     />
                     <Input
                        type='number' 
                        placeholder='Sua nota (de 0 a 5)' 
                     />
                  </div>

                  <div className='textarea'>
                     <Textarea 
                        placeholder='Observações'
                     />
                  </div>
               </div>

                  <div className='section'>
                     <Section title='Marcadores'>
                        <Markers>
                           {
                              tags.map((tag, index) => (
                                 <NoteItem 
                                    /* passando uma chave para cada tag, através do index que o map
                                    retorna  */
                                    key={String(index)}
                                    value={tag}
                                    /* quando a função tem params, temos que colocar dessa forma 
                                    com uma arrow function, caso contrário ela tentará executar 
                                    sozinha (palavras do professor) */
                                    onClick={() => {handleRemoveTag(tag)}}
                                 />
                              ))
                           }
                           <NoteItem 
                              isNew 
                              placeholder='Nova tag'
                              value={newTag}
                              onChange={e => setNewTag(e.target.value)}
                              onClick={handleAddTag}
                           />
                        </Markers>
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