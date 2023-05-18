import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Container, Form, Avatar } from './styles'

import { useNavigate } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ReturnButton } from '../../components/ReturnButton'

import { AiOutlineCamera, AiOutlineMail,  } from "react-icons/ai";
import { BiLockAlt, BiUser } from "react-icons/bi";

export function Profile() {
   const { user, updateProfile } = useAuth()

   const [name, setName] = useState(user.name)
   const [email, setEmail] = useState(user.email)
   const [oldPassword, setOldPassword] = useState()
   const [newPassword, setNewPassword] = useState()

   async function handleUpdate() {
      const user = {
         name, 
         email,
         oldPassword,
         password: newPassword
      }

      await updateProfile({ user })
   }

   const navigate = useNavigate()

   function handleBack() {
      navigate(-1)
   }

   return (
      <Container>
         <header>
            <button 
               onClick={handleBack}
            >
               <ReturnButton 
                  title='Voltar'
               />
            </button>
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
               value={name}
               onChange={e => setName(e.target.value)}
            />
            <Input 
               icon={AiOutlineMail}
               type="email"
               placeholder="E-mail"
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
            <Input 
               icon={BiLockAlt}
               type="password"
               placeholder="Senha atual"
               onChange={e => setOldPassword(e.target.value)}
            />
            <Input 
               icon={BiLockAlt}
               type="password"
               placeholder="Nova senha"
               onChange={e => setNewPassword(e.target.value)}
            />
            
            <Button 
               title="Salvar"
               onClick={handleUpdate}
            />
         </Form>
      </Container>
   )
}