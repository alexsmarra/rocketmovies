import { Container, Content } from './styles.js'

import { useState } from "react"
import { api } from "../../services/api.js"
import { useAuth } from '../../hooks/auth.jsx'

import { useNavigate } from 'react-router-dom'
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
   const [title, setTitle] = useState("")
   const [rating, setRating] = useState("")
   const [description, setDescription] = useState("")

   const [tags, setTags] = useState([])
   const [newTag, setNewTag] = useState("")

   const { user } = useAuth() 
   const navigate = useNavigate()

   async function handleNewNote() {
      if(!title) {
         return alert("Enter the title of the movie please!")
      }

      if(newTag) {
         return alert("There are tags that were not added, are you sure you want to save?")
      }

      await api.post("/notes", {
         username: user.name,
         title, 
         description,
         rating: Number(rating),
         tags
      });

      alert("Successfully created note!")
      navigate("/")
   }

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
                        onChange={e => setTitle(e.target.value)}
                     />
                     <Input
                        type='number' 
                        placeholder='Sua nota (de 0 a 5)' 
                        onChange={e => setRating(e.target.value)}
                     />
                  </div>

                  <div className='textarea'>
                     <Textarea 
                        placeholder='Observações'
                        onChange={e => setDescription(e.target.value)}
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
                     <Button 
                        title='Excluir filme'
                     />
                     <Button 
                        title='Salvar alterações'
                        onClick={handleNewNote}
                     />
                  </footer>
            </Content>
         </main>
      </Container>
   )
}