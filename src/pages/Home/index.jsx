import { Container, AddMovie, Wrapper, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { NoteOfMovie } from '../../components/NoteOfMovie'

import { FiPlus } from "react-icons/fi";


export function Home() {
   return (
      <Container>
         <Header 

         />
      
         <AddMovie>
            <h1>Meus filmes</h1>

            <Wrapper to='/create'>
               <Button 
                  icon={FiPlus} 
                  title="Adicionar filme">
               </Button>
            </Wrapper>
         </AddMovie>
         
         <Content>
            <main>
               <NoteOfMovie data={
                  {
                     title: "Rocky Balboa",
                     rating: "4",
                     description: `Um campeão ofendido por Rocky o desafia para uma luta, e para a surpresa de todos, Balboa aceita, saindo da aposentadoria e começando um intensivo treinamento para voltar ao ringue uma última vez. 
                     Toda a saga do pugilista Rocky Balboa está intimamente ligada a biografia pessoal de autor e intérprete Sylvester Stallone. Desde o primeiro filme – Rocky: Um Lutador (1976) – em que ele também ascendia para o estrelato, passando pelos volumes três e cinco, na popularidades descerebrada de um e na decadência do outro. 
                     Rocky Balboa, o sexto volume da franquia, resgata seu astro a uma reverência que lhe é merecida, dado todo o esforço que fez durante sua carreira.`,
                     tags: [
                        {id: "1", name: "ação"},
                        {id: "2", name: "drama"}
                     ]
                  }
               }
               />
            </main>
         </Content>
      </Container>
   )
}