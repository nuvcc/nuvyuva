import styled from "styled-components";



export const EventContainer = styled.div`   

  @media (max-width: 768px) {
      margin-top: 0rem;
      .stars{
        width: 2rem;
        height: 2rem;
      }
  }

  @media(min-width: 768px) and (max-width: 1024px){
    margin-top: 0rem;
      .stars{
        width: 3rem;
        height: 3rem;
      }
  }

`


export const ViewBtn = styled.button`

/* padding:1rem; */
border:none;
outline: none;
background: ${(props)=>props.bg};
width: 50%;
border-top-left-radius: 16px;
border-bottom-right-radius: 16px;
padding:1rem;
color:${({theme})=>theme.fontColor.primary}

`