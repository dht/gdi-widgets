import React from 'react';
import Houston from './Houston';
import { LiveTaskContainer } from '../tasks.LiveTask/LiveTask.container';
import { PlaybackContainer } from '../tasks.Playback/Playback.container';
import { TicketsByProjectContainer } from '../tasks.TicketsByProject/TicketsByProject.container';
import { TicketsRecentContainer } from '../tasks.TicketsRecent/TicketsRecent.container';
import { useSelector, useDispatch } from 'react-redux';

export const HoustonContainer = () => {
    return (
        <Houston>
            <LiveTaskContainer />
            <PlaybackContainer />
            <TicketsByProjectContainer />
            <TicketsRecentContainer />
        </Houston>
    );
};

export default HoustonContainer;
