import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;

   padding: 8px;

   background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.DARK_GRAY};
   color: ${({ theme, isNew }) => isNew ? theme.COLORS.DARK_GRAY : 'white'};

   border: ${({ isNew, theme }) => isNew ? `3px dashed ${theme.COLORS.GRAY}` : 'none'};
   border-radius: 10px;

   > input {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.DARK_GRAY : 'white'};
      background: transparent;

      width: 100%;
      height: 5.6rem;
      border: none;

      font-size: 1.6rem;
   }

   button {
      background: transparent;
      color: ${({ theme }) => theme.COLORS.PINK};
      border: none;
   }
`