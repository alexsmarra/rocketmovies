import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ReturnButton } from '../../components/ReturnButton'

import { AiOutlineCamera, AiOutlineMail,  } from "react-icons/ai";
import { BiLockAlt, BiUser } from "react-icons/bi";



export function Profile() {
   return (
      <Container>
         <header>
           <a href="#"><ReturnButton title='Voltar'/></a>
         </header>

         <Form>
            <Avatar>
               <img src="https://github.com/alexsmarra.png" alt="user img" />
               <label htmlFor="avatar">
                  <AiOutlineCamera />
                  <input type="file" id="avatar" />
               </label>
            </Avatar>

            <Input 
               icon={BiUser}
               type="text"
               placeholder="Nome"
            />
            <Input 
               icon={AiOutlineMail}
               type="email"
               placeholder="E-mail"
            />
            <Input 
               icon={BiLockAlt}
               type="password"
               placeholder="Senha atual"
            />
            <Input 
               icon={BiLockAlt}
               type="password"
               placeholder="Nova senha"
            />
            
            <Button title="Salvar"/>
         </Form>
      </Container>
   )
}