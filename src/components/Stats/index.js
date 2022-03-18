import React from 'react'
import {WrapStats, WrapVisitors, WrapViews, StatsSection, StatsHeading, VisitorsHeading, ViewsHeading} from './StatsStyled';

const Stats = () => {
    return (
        <StatsSection>
            <StatsHeading>Stats</StatsHeading>
            <WrapStats>
                <WrapVisitors>
                    <VisitorsHeading>Visitors</VisitorsHeading>
                </WrapVisitors>
                <WrapViews>
                    <ViewsHeading>Views</ViewsHeading>
                </WrapViews>
            </WrapStats>
        </StatsSection>
    )
}

export default Stats;