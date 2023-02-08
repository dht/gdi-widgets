import React, { useMemo } from 'react';
import LayoutItems from './LayoutItems';
import { definitions } from './definitions/sub';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';
import { useNavigate } from 'react-router-dom';
import { factory as store } from '@gdi/selectors';

export const LayoutTableContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentIds = useSelector(store.selectors.raw.$rawCurrentIds);
    const layout = useSelector(store.selectors.base.$layout);
    const layoutItems = useSelector(store.selectors.tables.$layoutItems);
    const allOptions = useSelector(store.selectors.options.$allOptions);

    const { layoutId } = currentIds;

    useMount(() => {
        if (!currentIds.layoutId) {
            return;
        }

        dispatch(store.actions.layouts.getItems(layoutId, {}));
    });

    const data = layoutItems;

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string, point?: Json) => {},
            onSelectionChange: (ids: string[]) => {},
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <LayoutItems
            nodeName='LayoutItems'
            layout={layout}
            data={data}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
            {...(definitions as any)}
        />
    );
};

export default LayoutTableContainer;
