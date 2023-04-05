import { Container, Form, Background } from './styles.js'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ReturnButton } from '../../components/ReturnButton'

import { AiOutlineMail,  } from "react-icons/ai";
import { BiLockAlt, BiUser } from "react-icons/bi";

export function SignUp() {
   return (
      <Container>
         <Background />

         <Form>
            <div className='header'>
               <h1>RocketMovies</h1>
               <p>Aplicação para acompanhar tudo que assistir</p>
               <h2>Crie sua conta</h2>
            </div>
            
            <div className='inputs-and-btn'>
               <Input icon={BiUser} placeholder='Nome'/>
               <Input icon={AiOutlineMail} placeholder='E-mail'/>
               <Input icon={BiLockAlt} placeholder='Senha'/>
               <Button title='Cadastrar'/>
            </div>

            <a href="#"><ReturnButton title="Voltar para o login"/></a>
         </Form>
      </Container>


   )
}