import styled from 'styled-components'

export const Container = styled.form`
   display: flex;
   border: solid 1px var(--border);
   border-radius: 5px;
   width: 34vh;
   height: 46vh;
   padding: 10px;
   background: var(--shape);
   flex-direction: column;
   justify-content: space-around;
   box-shadow: 0px 17px 13px 0px #192c4b05;

    label, input, textarea {
       padding-top: 5%;
   }

   label {
       font-size: 0.95rem;
       font-weight: bold;
   }

   input {
      width: 100%;
      height: 2.5rem;
      border-radius: 5px;
      border: none;
      background-color: var(--background);
      padding: 10px;
   }

   textarea {
       width: 100%;
       height: 4rem;
       background-color: var(--background);
       border-radius: 5px;
       border: none;
       padding: 10px;
   }

   .active {
       width: 1rem;
       height: 1rem;
       background: var(--blue);
   }
`

export const ButtonContainer = styled.div`
   width: 56%;
   height: 4rem;
   display: flex;
   justify-content: space-around;
   align-items: center;
   

   button {
       width: 4.5rem;
       height: 2rem;
       border: none;
       background: var(--blue);
       border-radius: 5px;
       color: var(--shape);
       margin-top: 1rem;
   }
`
export const ValidationCard = styled.div`
   width: 100%;
   height: 2.3rem;
   background-color: #13171F;
   color: var(--shape);
   border-radius: 5px;


   p {
       padding: 10px;
       font-weight: bold;
       font-size: 0.85rem;
   }
`