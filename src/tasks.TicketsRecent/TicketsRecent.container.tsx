import React, { useMemo } from 'react';
import TicketsRecent from './TicketsRecent';
import { useSelector, useDispatch } from 'react-redux';
import { tasks as store } from '@gdi/selectors';

export const TicketsRecentContainer = () => {
    const dispatch = useDispatch();

    const callbacks = useMemo(
        () => ({
            clearRecentSessions: () => {
                dispatch(store.actions.recentSessions.setAll({}));
            },
        }),
        []
    );

    return (
        <TicketsRecent
            selector={store.selectors.tables.$tickets}
            callbacks={callbacks}
        />
    );
};

export default TicketsRecentContainer;
