import styled from 'styled-components'

export const Container = styled.div`
   background: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};

   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-rows: 11,6rem, auto;
   grid-template-areas:
   "header"
   "content";

   h1 {
      font-size: 3.6rem;
   }

   > section {
      padding: 2.4rem 12.3rem;

      display: flex;
      justify-content: space-between;

      > button {
         width: 20.7rem;
      }
   }

   > main {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MATTE};
      
      padding: 2.4rem 12.3rem;
      
      margin: 0 12.3rem 1rem;
   }

   > main:nth-child(5) {
      margin-bottom: 5.8rem;

   }
`

