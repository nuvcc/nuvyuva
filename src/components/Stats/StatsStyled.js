import styled from 'styled-components';

export const StatsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StatsHeading = styled.h1`
    text-align: center;
    color: rgb(243, 243, 247);
    font-size: 3rem;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 2rem;
    margin-top: 2rem;
`;

export const VisitorCount = styled.div`
    color: rgb(243, 243, 247);
    font-size: 3rem;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`;

export const VisitorsHeading = styled(StatsHeading)`
    font-size: 0.8rem;
    margin: 0;
    padding: 1rem 0;
`;

export const ViewsHeading = styled(VisitorsHeading)``;

export const WrapStats = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const WrapVisitors = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 30%; */
    padding: 2rem 3rem;
    margin-bottom: 6rem;

    background-color: #052c39;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(1,6,6,1);
    transition: all 0.2s ease-in-out;
`;

export const WrapViews = styled(WrapVisitors)``;
