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
      font-size: 2.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.PINK};
   }

   > section {
      padding: 2.4rem 12.3rem;
      margin: 2rem 0;

      display: flex;
      justify-content: space-between;

      > h1 {
         color: ${({ theme }) => theme.COLORS.WHITE};
         font-size: 3.6rem;
      }

      a {
         width: 20.7rem;

      }

      a > button > svg {
         font-size: 26px;
         margin-right: 6px;
      }
   }

   > main {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
      
      /* padding: 2.4rem 12.3rem; */
      
      margin: 0 12.3rem 5.8rem;
      padding-right: 3rem;

      display: flex;
      flex-direction: column;
      gap: 2rem;

      overflow-y: auto;
      
      ::-webkit-scrollbar-track {
         background: none;
      }

      ::-webkit-scrollbar {
         width: 8px;
      }

      ::-webkit-scrollbar-thumb {
         background-color: ${({theme})=> theme.COLORS.PINK}; 
         border-radius: 8px; 
         border: none; 
      }
      


      > div {
         background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MATTE};

         padding: 2.4rem 6.3rem;
         border-radius: 16px;

         display: flex;
         flex-direction: column;
         gap: 1rem;
      }

      > div .stars {
         display: flex;
         gap: .5rem;

         margin-top: 1rem;
         margin-bottom: 1rem;

         svg {
            width: 15px;
            height: 15px;
         }
      }

      > div .tags {
         margin-top: 1.5rem;
         display: flex;
         gap: 1rem;
      }

      > div .tags span {
         background: ${({ theme }) => theme.COLORS.DARK_GRAY};
      }
   }
`

