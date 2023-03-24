import styled from 'styled-components'

export const Container = styled.textarea`
   background-color: ${({ theme }) => theme.COLORS.DARK_GRAY};
   color: ${({ theme }) => theme.COLORS.GRAY};
   
   width: 100%;
   height: 27.4rem;
   padding: 1.9rem 1.6rem;

   resize: none;
   
   border-radius: 10px;
   border: none;
`