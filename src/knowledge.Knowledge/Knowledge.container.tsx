import React, { useMemo } from 'react';
import Knowledge from './Knowledge';
import { useSelector, useDispatch } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { knowledge as store } from '@gdi/selectors';

export const KnowledgeContainer = () => {
    const dispatch = useDispatch();
    const links = useSelector(store.selectors.tables.$links);
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
        <Knowledge
            data={links}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default KnowledgeContainer;
