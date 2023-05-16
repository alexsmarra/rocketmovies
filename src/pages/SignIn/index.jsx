import { Container, Form, Background } from './styles.js'

import { Link } from 'react-router-dom'

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
               <Input 
                  icon={AiOutlineMail} 
                  type='email'
                  placeholder='E-mail'
               />

               <Input 
                  icon={BiLockAlt} 
                  type='password'
                  placeholder='Senha'
               />

               <Button 
                  title='Entrar'
               />
            </div>

            <Link to="/signup">Criar conta</Link>
         </Form>

         <Background />
      </Container>
   )
}

////////////////////////////////////////////////////

export function SingIn(){
   const [email, setEmail] = useState('') //o nome do estado || função que atualiza o estado
   const [password, setPassword] = useState('')
  
    const {signIn} = useAuth()
  
   function handleSignIn(){
     signIn({email, password})
    }
  
  
    return(
      <Container>
        <Form>
  
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
  
          <h2>Faça seu login</h2>
  
          <Input
          type='text'
          icon={FiMail}
          placeholder= "E-mail"
          onChange = { e => setEmail(e.target.value)}/>
  
          <Input
          type='password'
          icon={FiLock}
          placeholder= "Senha"
          onChange= {e => setPassword(e.target.value)}/>
  
          <Button
          title='Entrar'
          onClick= {handleSignIn}/>
  
        <div className="buttonNewAccount">
  
          <ButtonText
          to= "/register"
          title='Criar conta'
          />
  
        </div>
  
        </Form>
  
        <Background/>
      </Container>
    )
  }
