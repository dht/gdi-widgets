import React, { useMemo } from 'react';
import Tickets from './Tickets';
import { useSelector, useDispatch } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { tasks as store } from '@gdi/selectors';

export const TicketsContainer = () => {
    const dispatch = useDispatch();
    const articles = useSelector(store.selectors.tables.$tickets);
    const allOptions = useSelector(store.selectors.options.$allOptions);
    const projectKey = useSelector(store.selectors.base.$projectKey);

    const newDataExtra = useMemo(() => {
        if (projectKey === 'ALL') {
            return {};
        } else {
            return {
                projectKey,
            };
        }
    }, [projectKey]);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {},
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <Tickets
            data={articles}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
            // customView={HoustonContainer}
            newDataExtra={newDataExtra}
        />
    );
};

export default TicketsContainer;
