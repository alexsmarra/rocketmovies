import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: flex;
   flex-direction: column;

   main {
      margin: 4rem 12.3rem 8.5rem;
      padding-right: 3rem;
      
      overflow-y: auto;
      scroll-behavior: smooth;

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

      ::-webkit-scrollbar-thumb:vertical {
         height: 5px;
      }

      .btn {
         margin-bottom: 2.4rem;
      }

      .title {
         margin-bottom: 4rem;
      }

      .inputs {
         display: flex;
         gap: 4rem;
         margin-bottom: 4rem;
      }

      .textarea {
         /* margin-bottom: */
      }

      .section section div {
         display: flex;
         gap: 2.4rem;
         background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PURE_BLACK};
         padding: 2rem 1.5rem;
         border-radius: .8rem;

         > div:nth-child(1) {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_ELEMENTS};
            width: 11.3rem;
         }

         > div:nth-child(2) {
            width: 20.3rem;
         }

         > div {
            height: 5.6rem;
         }
      }

      .btns {
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 4rem;
         margin-bottom: 2rem;

         button:nth-child(1) {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PURE_BLACK};
            color: ${({ theme }) => theme.COLORS.PINK};
         }
      }
   }
`
