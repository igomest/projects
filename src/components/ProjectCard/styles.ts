import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   border: solid 1px var(--border);
   border-radius: 5px;
   width: 34vh;
   height: 46vh;
   margin: 20px;
   padding: 10px;
   background: var(--shape);
   flex-direction: column;
   display: flex;
   justify-content: space-around;
   box-shadow: 0px 17px 13px 0px #192c4b05;

   p, button {
      padding: 0.2rem;
      margin-top: 2px;
   }

   button {
      border-radius: 5px;
      border: none;
      width: 4.5rem;
      height: 2rem;
      margin-top: 10px;
      background-color: var(--blue);
      color: var(--shape);
   }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 10px;

  img {
     width: 100%;
     height: 100%;
     border-radius: 10px;
  }
`

export const Title = styled.div`
   p {
      font-size: 1.2rem;
      font-weight: bold;
   }
`
export const Content = styled.div`
   p {
      color: var(--silver);
   }
`
export const Budget = styled.div`
   display: flex;
   margin-top: 5px;
   
   p {
     font-weight: bold;
     font-size: 0.97rem;
   }

   .budget {
      color: var(--silver);
      font-size: 0.96rem;
   }
`
export const Separator = styled.hr`
   border: 1px solid var(--background);
`