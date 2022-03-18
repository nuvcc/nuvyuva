import React, { useState, useEffect } from 'react'
import { WrapStats, WrapVisitors, StatsSection, StatsHeading, VisitorsHeading, VisitorCount } from './StatsStyled';

const Stats = () => {
    const [visitors, setVisitors] = useState(0);

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_BEARERTOKEN}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://plausible.io/api/v1/stats/aggregate?site_id=nuvyuva.com&period=6mo&metrics=visitors,pageviews,bounce_rate,visit_duration", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.results.visitors.value);
                setVisitors(result.results.visitors.value);
            })
            .catch(error => console.log('error', error));
    })
    return (
        <StatsSection>
            <StatsHeading>Stats</StatsHeading>
            <WrapStats>
                <WrapVisitors>
                    <VisitorCount>{visitors}</VisitorCount>
                    <VisitorsHeading>Visitors</VisitorsHeading>
                </WrapVisitors>
            </WrapStats>
        </StatsSection>
    )
}

export default Stats;