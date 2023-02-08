import React, { useMemo } from 'react';
import InterestingReads from './InterestingReads';
import { useSelector, useDispatch } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { biblo as store } from '@gdi/selectors';

export const InterestingReadsContainer = () => {
    const dispatch = useDispatch();
    const reads = useSelector(store.selectors.tables.$interestingReads);
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
        <InterestingReads
            data={reads}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default InterestingReadsContainer;
