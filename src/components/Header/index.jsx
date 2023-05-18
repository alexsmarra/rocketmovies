import { useAuth } from '../../hooks/auth'

import { Container, RocketMovies, Search, Profile } from './styles'

import { Input } from '../Input'

import { Link } from 'react-router-dom'

export function Header() {
   const { signOut } = useAuth()

   return (
      <Container>
         <RocketMovies>
            <Link to="/"><h1>RocketMovies</h1></Link>
         </RocketMovies>

         <Search>
            <Input 
               placeholder="Pesquisar pelo título" 
               onChange={""}
            />
         </Search>

         <Profile>
            <div>
               <span>
                  Alexandre Simões
               </span>
               <span 
                  onClick={signOut}
               >
                  sair
               </span>
            </div>

            <Link to='/profile'>
               <img 
                  src="https://github.com/alexsmarra.png" 
                  alt="User img" />
            </Link>
         </Profile>
      </Container>
   )
}