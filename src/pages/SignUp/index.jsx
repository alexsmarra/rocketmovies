/* Precisamos capturar o nome, email e senha dos inputs, digitado pelo usuário, e armazenar na 
memória para ser enviado para o backend. Por isso, criamos um estado para pegar essas informações
em tempo real digitada pelo usuário, importamos o useState, que é um hook para
possamos criar estados, e na primeira parte da nossa function SignUp, criaremos as nossas constantes
de estados e de setar estados, tanto para nome, email e senha */
import { useState } from 'react'

import { Container, Form, Background } from './styles.js'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ReturnButton } from '../../components/ReturnButton'

import { AiOutlineMail,  } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiUser } from 'react-icons/fi'



export function SignUp() {

   /* Podemos acessar o estado atual (primeira const), como também uma function que altera o valor 
   atual do estado (segunda const), os nomes nós que escolhemos. Para cada input, passaremos a
   function onChange para capturar os dados digitados pelo usuário, e criaremos a function 
   handleSignUp (para colocar no button de nosso <Form/>) para lidar com esses eventos de cada 
   input */
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   function handleSignUp() {
      console.log(name, email, password)
   }

   return (
      <Container>
         <Form>
            <div className='header'>
               <Link to='/'>
                  <h1>RocketMovies</h1>
               </Link>

               <p>Aplicação para acompanhar tudo que assistir</p>
               <h2>Crie sua conta</h2>
            </div>
            
            <div className='inputs-and-btn'>
               <Input 
                  icon={FiUser} 
                  placeholder='Nome'
                  onChange={e => setName(e.target.value)}
               />

               <Input 
                  icon={AiOutlineMail} 
                  placeholder='E-mail'
                  type='email'
                  onChange={e => setEmail(e.target.value)}
               />

               <Input 
                  icon={BiLockAlt} 
                  placeholder='Senha'
                  type='password'
                  onChange={e => setPassword(e.target.value)}
               />

               <Button 
                  title='Entrar'
                  onClick={handleSignUp}
               />
            </div>

            <Link to="/">
               <ReturnButton title="Voltar para o login"/>
            </Link>
         </Form>

         <Background />
      </Container>


   )
}