import React, { useMemo } from 'react';
import { Articles } from './Articles';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { factory as store } from '@gdi/selectors';

export const ArticlesContainer = () => {
    const dispatch = useDispatch();
    const articles = useSelector(store.selectors.tables.$articles);
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
        <Articles
            data={articles}
            callbacks={callbacks}
            allOptions={allOptions}
            tags={allOptions.$articleTags}
            dispatch={dispatch}
        />
    );
};

export default ArticlesContainer;
