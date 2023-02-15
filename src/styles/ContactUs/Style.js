import styled from "styled-components";

export const Title=styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.fontColor.primary};
  font-family: "Space Grotesk", sans-serif;
`

export const Detail=styled.h4`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.fontColor.secondary};
  font-family: "Space Grotesk", sans-serif;
`
