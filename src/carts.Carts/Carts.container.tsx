import React, { useMemo } from 'react';
import Carts from './Carts';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { carts as store } from '@gdi/selectors';

export const CartsContainer = () => {
    const dispatch = useDispatch();
    const carts = useSelector(store.selectors.tables.$carts);
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
        <Carts
            data={carts}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default CartsContainer;
