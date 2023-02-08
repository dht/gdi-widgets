import React, { useMemo } from 'react';
import Things from './Things';
import { useSelector, useDispatch } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { things as store } from '@gdi/selectors';

export const ThingsContainer = () => {
    const dispatch = useDispatch();
    const articles = useSelector(store.selectors.tables.$things);
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
        <Things
            data={articles}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default ThingsContainer;
