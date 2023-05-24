import { Container } from './styles'

import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useAuth } from '../../hooks/auth'
import { useParams } from "react-router-dom"

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'

import { ReturnButton } from '../../components/ReturnButton'
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'
import { SummarySinapse } from '../../components/SummarySinapse'

import { AiOutlineClockCircle } from "react-icons/ai";

export function Preview() {
   const { user } = useAuth()
   const params = useParams()

   const [data, setData] = useState(null)

   useEffect(() => {
      async function fetchNoteDetails() {
         const response = await api.get(`/notes/${params.id}`)

         setData(response.data)
         console.log(data)
      }
      fetchNoteDetails()
   }, [])

   return (
      <Container>
         <Header />

         <Link to='/'>
            <div className="btn">
               <ReturnButton title="Voltar" />
            </div>
         </Link>

         { data &&
            <main>
               <header className='cabecalho'>

                  <div className='title'>
                     <h2>{data.title}</h2>

                     <Stars 
                        rating={data.rating}
                     />
                  </div>

                  <info>
                     <user>
                        <img src={""} alt={`${user.name} img`}/>
                        <span>{/* {`Por ${data.name}`} */}</span>
                     </user>

                     <date>
                        <AiOutlineClockCircle /> {""}
                     </date>
                  </info>
               
                  <div className='tags'>
                     {
                        data.tag.map(tag => (
                           <Tag 
                              key={String(tag.id)}
                              title={tag.name}
                           />
                        ))
                     }                   
                  </div>
               </header>

               <section className='sinopse'>
                  <SummarySinapse content={data.description}/>
               </section>
            </main>
         }
      </Container>
   )
}