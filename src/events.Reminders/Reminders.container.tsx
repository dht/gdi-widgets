import React, { useMemo } from 'react';
import Reminders from './Reminders';
import { useSelector, useDispatch } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { events as store } from '@gdi/selectors';

export const RemindersContainer = () => {
    const dispatch = useDispatch();
    const reminders = useSelector(store.selectors.tables.$reminders);
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
        <Reminders
            data={reminders}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default RemindersContainer;
