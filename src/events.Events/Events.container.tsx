import React, { useMemo } from 'react';
import Events from './Events';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { events as store } from '@gdi/selectors';

export const EventsContainer = () => {
    const dispatch = useDispatch();
    const events = useSelector(store.selectors.tables.$events);
    const allOptions = useSelector(store.selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <Events
            data={events}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default EventsContainer;
