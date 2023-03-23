import styled from 'styled-components'

export const Container = styled.button`
   background-color: ${({ theme }) => theme.COLORS.PINK};
   color: ${({ theme }) => theme.COLORS.BACKGROUND_ELEMENTS};

   width: 100%;
   height: 5.6rem;
   padding: 0 14.5rem;
   margin-top: 2.4rem;
   border-radius: 10px;
   border: 0;
   font-weight: 500;

   &:disabled {
      opacity: .5;
   }
`
