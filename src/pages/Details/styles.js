import styled from 'styled-components'

export const Container = styled.div`
   background: ${({ theme }) => theme.COLORS.DARK_GRAY};
   height: 100vh;

   h1 {
      font-size: 3.6rem;
   }
`