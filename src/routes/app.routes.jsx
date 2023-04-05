import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Create } from '../pages/Create'
import { Preview } from '../pages/Preview'
import { Profile } from '../pages/Profile'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/create' element={<Create />} />
         <Route path='/preview' element={<Preview />} />
         <Route path='/profile' element={<Profile />} />
         <Route path='/signin' element={<SignIn />} />
         <Route path='/signup' element={<SignUp />} />
      </Routes>
   )
}