import { Container, AddMovie, Content } from './styles'

import {Link} from 'react-router-dom'

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

            <Link to='/create'>
               <Button 
                  icon={FiPlus} 
                  title="Adicionar filme">
               </Button>
            </Link>
         </AddMovie>
         
         <Content>
            <main>
               <NoteOfMovie data={
                  {
                     title: "Rocky Balboa",
                     rating: "5",
                     description: `Um campeão ofendido por Rocky o desafia para uma luta, e para a surpresa de todos, Balboa aceita, saindo da aposentadoria e começando um intensivo treinamento para voltar ao ringue uma última vez. 
                     Toda a saga do pugilista Rocky Balboa está intimamente ligada a biografia pessoal de autor e intérprete Sylvester Stallone. Desde o primeiro filme – Rocky: Um Lutador (1976) – em que ele também ascendia para o estrelato, passando pelos volumes três e cinco, na popularidades descerebrada de um e na decadência do outro. 
                     Rocky Balboa, o sexto volume da franquia, resgata seu astro a uma reverência que lhe é merecida, dado todo o esforço que fez durante sua carreira.`,
                     tags: [
                        {id: "1", name: "Ação"},
                        {id: "2", name: "Drama"},
                        {id: "3", name: "Família"}
                     ]
                  }
               }
               />
               <NoteOfMovie data={
                  {
                     title: "Interestelar",
                     rating: "3",
                     description: `As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.`,
                     tags: [
                        {id: "1", name: "Ficção Científica"},
                        {id: "2", name: "Espaço"},
                        {id: "3", name: "Tempo"}
                     ]
                  }
               }
               />
               <NoteOfMovie data={
                  {
                     title: "Mar em Fúria",
                     rating: "4",
                     description: `Baseado em uma história real, Mar em Fúria conta a história de cinco pescadores que são surpreendidos por um dos maiores temporais da História e que ocorreu em 1991 em função de uma rara conjunção de fatores meteorológicos. Depois de se afastarem da costa em busca de mais peixes ("Eu sempre encontro os peixes. Sempre!", afirma o capitão do barco), os cinco homens acabam encontrando a "tempestade perfeita" em seu retorno para casa - a pequena cidade de Gloucester. Agora, eles terão que lutar contra um mar revolto e ondas gigantescas numa tentativa desesperada de sobrevivência.`,
                     tags: [
                        {id: "1", name: "Superação"},
                        {id: "2", name: "Drama"},
                        {id: "3", name: "Mar"}
                     ]
                  }
               }
               />
               <NoteOfMovie data={
                  {
                     title: "Stranger Things",
                     rating: "4",
                     description: `Situada no início dos anos 1980, Stranger Things se passa na cidade rural fictícia de Hawkins, Indiana. Como fachada, o laboratório da região realizava experimentos científicos para o Departamento de Energia Americano, quando na realidade, os pesquisadores ali investiram em experimentos com o paranormal e o sobrenatural, incluindo o uso de cobaias humanas. Não intencionalmente, eles criaram um portal para uma dimensão alternativa conhecida como Mundo Invertido, o que iria impactar a vida dos residentes da pequena cidade.`,
                     tags: [
                        {id: "1", name: "Suspense"},
                        {id: "2", name: "Terror"},
                        {id: "3", name: "Ficção Científica"}
                     ]
                  }
               }
               />
            </main>
         </Content>
      </Container>
   )
}