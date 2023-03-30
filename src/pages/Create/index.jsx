import { Container } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Stars } from '../../components/Stars'
import { SummarySinapse } from '../../components/SummarySinapse'
import { Tag } from '../../components/Tag'

import { BiPlus  } from "react-icons/bi";


export function Create() {
   return (
      <Container>
         <Header />
         
         <section>
            <h1>Meus filmes</h1>
            <Button icon={BiPlus} title="Adicionar filme" />
         </section>
         
         <main>
            <div>
               <Stars className='stars' title="Rocky: Um Lutador" />
               <SummarySinapse content="Rocky Balboa, um pequeno boxeador da classe trabalhadora da Filadélfia, é arbitrariamente escolhido para lutar contra o campeão dos pesos pesados, Apollo Creed, quando o adversário do invicto lutador agendado para a luta é ferido. Durante o treinamento com o mal-humorado Mickey Goldmill, Rocky timidamente começa um relacionamento com Adrian, a invisível irmã de Paulie, seu amigo empacotador de carne."/>
               <div className='tags'>
                  <Tag title="Ação" />
                  <Tag title="Drama" />
                  <Tag title="Superação" />
               </div>
            </div>

            <div>
               <Stars className='stars' title="Rocky: Um Lutador" />
               <SummarySinapse content="Rocky Balboa, um pequeno boxeador da classe trabalhadora da Filadélfia, é arbitrariamente escolhido para lutar contra o campeão dos pesos pesados, Apollo Creed, quando o adversário do invicto lutador agendado para a luta é ferido. Durante o treinamento com o mal-humorado Mickey Goldmill, Rocky timidamente começa um relacionamento com Adrian, a invisível irmã de Paulie, seu amigo empacotador de carne."/>
               <div className='tags'>
                  <Tag title="Ação" />
                  <Tag title="Drama" />
                  <Tag title="Superação" />
               </div>
            </div>

            <div>
               <Stars className='stars' title="Rocky: Um Lutador" />
               <SummarySinapse content="Rocky Balboa, um pequeno boxeador da classe trabalhadora da Filadélfia, é arbitrariamente escolhido para lutar contra o campeão dos pesos pesados, Apollo Creed, quando o adversário do invicto lutador agendado para a luta é ferido. Durante o treinamento com o mal-humorado Mickey Goldmill, Rocky timidamente começa um relacionamento com Adrian, a invisível irmã de Paulie, seu amigo empacotador de carne."/>
               <div className='tags'>
                  <Tag title="Ação" />
                  <Tag title="Drama" />
                  <Tag title="Superação" />
               </div>
            </div>
            <div>
               <Stars className='stars' title="Rocky: Um Lutador" />
               <SummarySinapse content="Rocky Balboa, um pequeno boxeador da classe trabalhadora da Filadélfia, é arbitrariamente escolhido para lutar contra o campeão dos pesos pesados, Apollo Creed, quando o adversário do invicto lutador agendado para a luta é ferido. Durante o treinamento com o mal-humorado Mickey Goldmill, Rocky timidamente começa um relacionamento com Adrian, a invisível irmã de Paulie, seu amigo empacotador de carne."/>
               <div className='tags'>
                  <Tag title="Ação" />
                  <Tag title="Drama" />
                  <Tag title="Superação" />
               </div>
            </div>
            <div>
               <Stars className='stars' title="Rocky: Um Lutador" />
               <SummarySinapse content="Rocky Balboa, um pequeno boxeador da classe trabalhadora da Filadélfia, é arbitrariamente escolhido para lutar contra o campeão dos pesos pesados, Apollo Creed, quando o adversário do invicto lutador agendado para a luta é ferido. Durante o treinamento com o mal-humorado Mickey Goldmill, Rocky timidamente começa um relacionamento com Adrian, a invisível irmã de Paulie, seu amigo empacotador de carne."/>
               <div className='tags'>
                  <Tag title="Ação" />
                  <Tag title="Drama" />
                  <Tag title="Superação" />
               </div>
            </div>
         </main>
      </Container>
   )
}