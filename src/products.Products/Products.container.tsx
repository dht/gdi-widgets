import React, { useMemo } from 'react';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { products as store } from '@gdi/selectors';

export const ProductsContainer = () => {
    const dispatch = useDispatch();
    const products = useSelector(store.selectors.tables.$products);
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
        <Products
            data={products}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default ProductsContainer;
