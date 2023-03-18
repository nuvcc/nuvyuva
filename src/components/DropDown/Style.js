import styled from "styled-components";

export const DropMenu = styled.div`
  position: relative;
  width: 100%;
  top: 10px;
  &:hover {
    cursor: pointer;
    background: #e8eaee;
    transition: 0.6s;
  }
  @media(max-width: 768px) {
    top: 0;
  }
`;

export const DropText = styled.p`
  /* padding: 0.5rem; */
`;

export const DropList = styled.ul`
  list-style: none;
`;
export const DropListItems = styled.li`
  padding: 0.2rem;
  border-bottom: 1px solid #caced8;
  /* color: #000; */
  color: white;
`;

export const DropContainer = styled.div`
  margin: 0.4rem 0;
  position: absolute;
  border: 1px solid #caced8;
  border-radius: 0.4rem;
  width: 100%;
  color: white;
  /* padding: 12px 16px; */
  background-color: #1b3547;
`;