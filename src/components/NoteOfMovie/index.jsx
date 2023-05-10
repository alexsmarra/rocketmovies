import { Container } from "./styles"

import { Stars } from "../Stars"
import { Tag } from "../Tag"

export function NoteOfMovie({ data, ...rest }) {
   return (
      <Container {...rest}>
         <header>
            <h2>{data.title}</h2>

            <Stars rating={data.rating}/>
         </header>

         <main>
            <p>
               {data.description}
            </p>
         </main>

         { data.tags && 
            <footer>
               {
                  data.tags.map(tag =>
                     <Tag key={tag.id} title={tag.name} />
                  )
               }
            </footer>
         }
      </Container>   
   )
}
