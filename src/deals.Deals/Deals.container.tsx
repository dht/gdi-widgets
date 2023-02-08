import React, { useMemo } from 'react';
import Deals from './Deals';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { deals as store } from '@gdi/selectors';

export const DealsContainer = () => {
    const dispatch = useDispatch();
    const deals = useSelector(store.selectors.tables.$deals);
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
        <Deals
            data={deals}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default DealsContainer;
