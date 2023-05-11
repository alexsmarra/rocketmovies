import { Container } from './styles'

import { ImPlus, ImCross } from "react-icons/im";

export function NoteItem({ isNew = false, value, onClick, ...rest }) {
   return (
      <Container isNew={isNew}>
         <input 
            type="text" 
            value={value}
            readOnly={!isNew}
            {...rest}
         />

         <button
            type="button"
            onClick={onClick}
            className={isNew ? 'button-add' : 'button-delete'}
         >
            {isNew ? <ImPlus /> : <ImCross />}
         </button>
      </Container>
   )
}