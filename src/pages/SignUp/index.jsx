import { Container, Form, Background } from './styles.js'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ReturnButton } from '../../components/ReturnButton'

import { AiOutlineMail,  } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiUser } from 'react-icons/fi'

export function SignUp() {
   return (
      <Container>
         <Form>
            <div className='header'>
               <h1>RocketMovies</h1>
               <p>Aplicação para acompanhar tudo que assistir</p>
               <h2>Crie sua conta</h2>
            </div>
            
            <div className='inputs-and-btn'>
               <Input icon={FiUser} placeholder='Nome'/>
               <Input icon={AiOutlineMail} placeholder='E-mail'/>
               <Input icon={BiLockAlt} placeholder='Senha'/>
               <Button title='Entrar'/>
            </div>

            <Link to="/signin"><ReturnButton title="Voltar para o login"/></Link>
         </Form>

         <Background />
      </Container>


   )
}