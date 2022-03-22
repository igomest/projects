import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`
export const MoreContainer = styled.div`
   width: 10%;
   height: 7vh;
   display: flex;
   justify-content: center;
   align-items: center;

   button {
      border: none;
      color: var(--shape);
      background: var(--blue);
      width: 7rem;
      height: 3rem;
      border-radius: 10px;
   }
`