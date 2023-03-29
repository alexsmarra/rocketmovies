import styled from 'styled-components'

export const Container = styled.button`
   background-color: ${({ theme }) => theme.COLORS.PINK};
   color: ${({ theme }) => theme.COLORS.BACKGROUND_ELEMENTS};

   width: 100%;
   height: 5.6rem;
   border-radius: 10px;
   border: 0;
   font-weight: 500;
   display: flex;
   align-items: center;
   justify-content: center;

   &:disabled {
      opacity: .5;
   }
`
