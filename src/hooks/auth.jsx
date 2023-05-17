import { createContext, useContext, useState, useEffect } from 'react'

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
   const [data, setData] = useState({})

   /* entre chaves, assim, não precisará ser chamado necessariamente nessa ordem */
   async function signIn({ email, password }) {
      try {
         const response = await api.post("/sessions", { email, password })
         const { user, token } = response.data

         localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
         // não precisa converter para texto, já que o token já é um texto
         localStorage.setItem("@rocketmovies:token", token)

         /* Inserindo um token do tipo Bearer, de autorização, no cabeçalho por padrão em todas as
         requisições que o usuário for fazer a partir de agora */
         api.defaults.headers.authorization = `Bearer ${token}`
         console.log(user, token)
         setData({ user, token })

      } catch(error) {
         if(error.response) {
            alert(error.response.data.message)
         } else {
            alert("Não foi possível entrar.")
         }
      }
   }

   /* useEffect para buscar as informações do localStorage. Always leave the closest to the return. 
   When we leave the [] empty, the app will be loader only once after rendering our component 
   (o app será carregado apenas uma vez após nosso componente ser renderizado, dessa forma, 
   quando o usuário fizer o login e for direcionando para a page Home, se atualizarmos a tela, 
   manterá na tela Home. Sem o useEffect, caso atualizássemos a tela após o usuário fazer o login, 
   voltaria para a tela de login). Se colocarmos uma variável dentro dos [], isso quer dizer que, 
   toda vez que essa variável mudar, o useEffect será executado. */
   useEffect(() => {
      const token = localStorage.getItem("@rocketmovies:token")
      const user = localStorage.getItem("@rocketmovies:user")
      
      if(token && user) {
         api.defaults.headers.authorization = `Bearer ${token}`
   
         setData({
            token,
            user: JSON.parse(user)
         })
      }
   }, [])


   return (
      <AuthContext.Provider value={{ signIn, user: data.user }}>
         {children}
      </AuthContext.Provider>
   )
}

// nosso hook
function useAuth() {
   const context = useContext(AuthContext)

   return context
}

export { AuthProvider, useAuth }