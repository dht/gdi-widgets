import React, { useMemo } from 'react';
import Orders from './Orders';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { orders as store } from '@gdi/selectors';

export const OrdersContainer = () => {
    const dispatch = useDispatch();
    const orders = useSelector(store.selectors.tables.$orders);
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
        <Orders
            data={orders}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default OrdersContainer;
