import styled from 'styled-components'

import movietheater  from '../../assets/movietheater.png'

export const Container = styled.div`
   height: 100vh;
   display: flex;
   align-items: stretch;
`

export const Form = styled.form`
   display: flex;
   flex: .7;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   gap: 4.8rem;
   margin-top: -5rem;

   .header {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: start;
      padding: 0 13.6rem;

      > h1 {
         font-size: 4.8rem;
      }

      > p {
         font-size: 1.4rem;
         margin-bottom: 4.8rem;
      }
   }

   .inputs-and-btn {
      padding: 0 13.6rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > button {
         margin-top: 1rem;
      }
   }

   a {
      color: ${({ theme }) => theme.COLORS.PINK};
   }
`

export const Background = styled.div`
   flex: 1;
   background: url(${movietheater}) no-repeat center center;
   background-size: cover;
   opacity: .4;
`