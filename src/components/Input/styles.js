import styled from 'styled-components'

export const Container = styled.input`
   background-color: ${({ theme }) => theme.COLORS.DARK_GRAY};
   color: ${({ theme }) => theme.COLORS.WHITE};
   
   width: 100%;
   height: 5.6rem;

   padding: 1.9rem 2.4rem;
   border: none;
   border-radius: 10px;

   &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
   }
`