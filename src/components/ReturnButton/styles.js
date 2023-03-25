import styled from 'styled-components'

export const Container = styled.span`
   display: flex;
   align-items: center;
   gap: 1rem;

   svg {
      color: ${({ theme }) => theme.COLORS.PINK};
   }
`