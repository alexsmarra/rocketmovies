import { Container } from './styles'

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Stars({ title }) {
   return (
      <Container>
            <h2>{title}</h2>
            <div>
               <AiFillStar className='a'/>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
               <AiOutlineStar />
            </div>
      </Container>
   )
}