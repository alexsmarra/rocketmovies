import styled from 'styled-components'

export const Container = styled.div`
   h2 {
      font-weight: 700;
      font-size: 2.4rem;
   }

   div {
      display: flex;
      gap: .4rem;
   }

   > div svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      
      width: 1.2rem;
      height: 1.2rem;
   }
`