import React, { useMemo } from 'react';
import Coupons from './Coupons';
import { useSelector, useDispatch } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { orders as store } from '@gdi/selectors';

export const CouponsContainer = () => {
    const dispatch = useDispatch();
    const coupons = useSelector(store.selectors.tables.$coupons);
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
        <Coupons
            data={coupons}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default CouponsContainer;
