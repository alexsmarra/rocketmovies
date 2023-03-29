import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root {
      font-size: 62.5%;
   }

   body {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PURE_BLACK};
      color: ${({ theme }) => theme.COLORS.WHITE};
      -webkit-font-smoothing: antialiased;
   }

   body, input, button, textarea {
      font-family: 'Roboto Slab', serif;
      font-size: 1.6rem;
      outline: none;
   }

   h1 {
      color: ${({ theme }) => theme.COLORS.PINK}; 
   }
   
   a {
      text-decoration: none;
   }

   button, a {
      cursor: pointer;
      transition: filter .2s;
   }

   button:hover, a:hover {
      filter: brightness(.9);
   }
`