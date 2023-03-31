import { Container } from './styles'

import { Header } from '../../components/Header'

import { ReturnButton } from '../../components/ReturnButton'
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'
import { SummarySinapse } from '../../components/SummarySinapse'

import { AiOutlineClockCircle } from "react-icons/ai";



export function Preview() {
   return (
      <Container>
         <Header />

         <div className="btn">
            <ReturnButton title="Voltar" />
         </div>

         <main>
            <header className='cabecalho'>

               <div className='title'>
                  <h2>Rocky: Um Lutador</h2>

                  <Stars className="stars" />
               </div>

               <info>
                  <user>
                     <img src="https://github.com/alexsmarra.png" alt="user img" />
                     <span>Por Alexandre Simões</span>
                  </user>

                  <date>
                     <AiOutlineClockCircle /> 23/06/23 às 9:28
                  </date>
               </info>
              
               <div className='tags'>
                  <Tag title='Ação' />                     
                  <Tag title='Drama' />                     
                  <Tag title='Superação' />                     
               </div>
            </header>

            <section className='sinopse'>
               <SummarySinapse content="Rocky Balboa, um pequeno boxeador da classe trabalhadora da Filadélfia, é arbitrariamente escolhido para lutar contra o campeão dos pesos pesados, Apollo Creed, quando o adversário do invicto lutador agendado para a luta é ferido. Durante o treinamento com o mal-humorado Mickey Goldmill, Rocky timidamente começa um relacionamento com Adrian, a invisível irmã de Paulie, seu amigo empacotador de carne."/> <br/> <SummarySinapse content="Rocky Balboa (Sylvester Stallone) é um vencedor antes mesmo de subir ao ringue para desafiar o campeão mundial dos pesos-pesados, Apollo Creed (Carl Weathers). A luta pouco importa, já que o até então garoto de recados (quebra-ossos) de um agiota conseguiu superar seus limites, conquistar a mulher que ama e provar para todo mundo que com boa dose de perseverança e bom coração, o céu é o limite. Rocky: Um Lutador é uma obra limitada justamente por essa necessidade de enfileirar lições, de afirmar ideais e mostrar que, sim, os Estados Unidos é a terra de oportunidades, mas apenas para quem se esforça. Era o filme sob medida para o momento norte-americano, recém-finda a Guerra do Vietnã. Talvez isso ajude a explicar sua vitória no Oscar, derrotando, por exemplo, Táxi Driver (1976), cuja visão desiludida e crua era diametralmente oposta e indigesta para muita gente."/> <br/> <SummarySinapse content="O roteiro do próprio Stallone começa nos mostrando esse cara penando para vencer uma luta vagabunda num circuito alternativo de boxe. Seu treinador o acha desleixado, alguém que não está nem aí para o esporte, um desperdício de talento. Rocky perambula pela cidade, é indulgente com os devedores de seu patrão, dá lições de moral em garotinhas que não devem falar palavrão, é legal com a atendente tímida de um pet shop, brinca com suas tartarugas, em suma, faz o tipo boa-praça. Não há contradições, nada que o macule aos olhos do público. A construção do personagem é esquemática, calculada para nos colocar ao lado dele, custe o que custar. É tudo muito dito, falado, explicitado, sem qualquer espaço para sutilezas. Cinema essencialmente expositivo, no qual o roteiro dita as regras à direção." /> <br/> <SummarySinapse content="Existe, por exemplo, um forte e canhestro contraponto entre o comportamento de Apollo e o de Rocky. A luta de ambos é fruto de um golpe de marketing, já que o campeão acredita ser bom para os negócios desafiar um desconhecido local. Nas poucas vezes em que aparece, Apollo é pintado como um tipo arrogante, mais preocupado com o espetáculo e a própria imagem, que com o espírito esportivo do combate. O retrato de Rocky é oposto, pois ele é íntegro, treina duro, sobe os degraus do Museu de Arte da Filadélfia ao som da música triunfante, soca carne no frigorífico, aprimora seus relacionamentos pessoais, ou seja, vira um exemplo a quem os mais jovens devem seguir. As mensagens edificantes são várias, e estão ali, incomodamente impressas com tintas carregadas."/> <br/> <SummarySinapse content="O trabalho do diretor John G. Avildsen é apenas ilustrativo. Sendo assim, o verdadeiro autor, para o bem ou para o mal, é Sylvester Stallone. O ringue, utilizado em outros filmes também como metáfora, é um coadjuvante de luxo. Veem-se apenas duas lutas, a que abre o filme, na qual somos apresentados ao protagonista considerado perdedor, um fracassado por suas próprias escolhas ou pela falta delas, e a última, em que esse mesmo cara, transformado quase num herói em virtude de sua retidão moral e ética, permanece em pé, reafirmando o necessário à restauração da então combalida autoestima norte-americana. Basta querer e fazer por onde. A gente sabe que as coisas são bem mais complexas, mas finge não saber quando embarca sem salva-vidas num filme desses. É com isso que os realizadores contam, muitas vezes."/>
            </section>
         </main>
      </Container>
   )
}