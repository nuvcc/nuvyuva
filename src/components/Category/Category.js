import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const EventContain = styled.div`
    height: 100vh;
`;
export const Event = styled.div`
    /* height: 100vh; */
    width: 100%;
`;

export const EventCard = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: green;
    margin-bottom: 1rem;

    &:first-child{
        margin-top: 1rem;
    }
`;