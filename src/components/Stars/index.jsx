import { Container } from './styles'

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Stars({ title, ...rest }) {
   return (
      <Container>
            <h2>{title}</h2>
            <div {...rest}>
               <AiFillStar />
               <AiFillStar />
               <AiFillStar />
               <AiFillStar />
               <AiOutlineStar />
            </div>
      </Container>
   )
}