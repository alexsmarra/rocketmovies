import { Container, RocketMovies, Search, Profile } from './styles'

import { Input } from '../Input'

import { Link } from 'react-router-dom'

export function Header() {
   return (
      <Container>
         <RocketMovies>
            <a href="#"><h1>RocketMovies</h1></a>
         </RocketMovies>

         <Search>
            <Input placeholder="Pesquisar pelo título" />
         </Search>

         <Profile>
            <div>
               <span>Alexandre Simões</span>
               <span>sair</span>
            </div>

            <a href='#'><img src="https://github.com/alexsmarra.png" alt="User img" /></a>
         </Profile>
      </Container>
   )
}