import React, { useMemo } from 'react';
import Comments from './Comments';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { comments as store } from '@gdi/selectors';

export const CommentsContainer = () => {
    const dispatch = useDispatch();
    const comments = useSelector(store.selectors.tables.$comments);
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
        <Comments
            data={comments}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default CommentsContainer;
