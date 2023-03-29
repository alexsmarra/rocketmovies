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

   .aaa {
      display: flex;
      /* justify-content: space-between; */
      flex-wrap: wrap;
      gap: 3rem;
   }
`
