import { Container, Form, Background } from './styles.js'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { AiOutlineMail,  } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

export function SignIn() {
   return (
      <Container>
         <Form>
            <div className='header'>
               <h1>RocketMovies</h1>
               <p>Aplicação para acompanhar tudo que assistir</p>
               <h2>Faça seu login</h2>
            </div>
            
            <div className='inputs-and-btn'>
               <Input icon={AiOutlineMail} placeholder='E-mail'/>
               <Input icon={BiLockAlt} placeholder='Senha'/>
               <Button title='Entrar'/>
            </div>

            <a href="#">Criar conta</a>
         </Form>

         <Background />
      </Container>


   )
}