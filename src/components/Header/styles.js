import styled from 'styled-components'

export const Container = styled.header`
   grid-area: header;
   height: 11.6rem;
   width: 100%;
   border-bottom-width: 1px;
   border-bottom-color: ${({ theme }) => theme.COLORS.GRAY};
   display: flex;
   justify-content: space-between;
   padding: 0 12.3rem;
`