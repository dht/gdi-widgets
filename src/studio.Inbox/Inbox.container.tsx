import React, { useMemo } from 'react';
import Inbox from './Inbox';
import { useSelector, useDispatch } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { studio as store, dashboard } from '@gdi/selectors';

export const InboxContainer = () => {
    const dispatch = useDispatch();
    const inboxMessages = useSelector(
        dashboard.selectors.tables.$inboxMessages
    );
    const allOptions = useSelector(store.selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                // console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <Inbox
            callbacks={callbacks}
            data={inboxMessages}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default InboxContainer;
