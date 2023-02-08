import React, { useMemo } from 'react';
import Layouts from './Layouts';
import { definitions } from './definitions/main';
import { useDispatch, useSelector } from 'react-redux';
import { factory as store } from '@gdi/selectors';

export const LayoutsContainer = () => {
    const dispatch = useDispatch();
    const layouts = useSelector(store.selectors.tables.$layouts);
    const allOptions = useSelector(store.selectors.options.$allOptions);

    const data = layouts;

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string, point?: Json) => {},
            onSelectionChange: (ids: string[]) => {},
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <Layouts
            nodeName='Layouts'
            data={data}
            callbacks={callbacks}
            allOptions={allOptions}
            {...(definitions as any)}
        />
    );
};

export default LayoutsContainer;
