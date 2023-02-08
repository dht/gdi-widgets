import React, { useMemo } from 'react';
import Leads from './Leads';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { leads as store } from '@gdi/selectors';

export const LeadsContainer = () => {
    const dispatch = useDispatch();
    const leads = useSelector(store.selectors.tables.$leads);
    const allOptions = useSelector(store.selectors.options.$allOptions);

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
        <Leads
            data={leads}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default LeadsContainer;
