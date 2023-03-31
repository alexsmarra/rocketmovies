import styled from 'styled-components'

export const Container = styled.span`
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MATTE};
   color: ${({ theme }) => theme.COLORS.COLOR_TAGS};

   padding: .8rem 1.6rem;
  
   border-radius: 8px;

   font-size: 1.2rem;
`