import React, { useMemo } from 'react';
import DesignerTree from './DesignerTree';
import { useSelector, useDispatch } from 'react-redux';
import { factory as store } from '@gdi/selectors';

export const DesignerTreeContainer = () => {
    const dispatch = useDispatch();
    const currentIds = useSelector(store.selectors.raw.$rawCurrentIds);
    const layout = useSelector(store.selectors.base.$layout);
    const resolutions = useSelector(store.selectors.base.$resolutions);

    const callbacks = useMemo(
        () => ({
            selectEntity: (flexEntityId: string) => {
                dispatch(
                    store.actions.currentIdsFactory.patch({
                        flexEntityId,
                    })
                );
            },
            onResolutionChange: (resolutionId: string) => {
                dispatch(
                    store.actions.currentIdsFactory.patch({
                        resolutionId,
                    })
                );
            },
            onSeed: (withId: string) => {
                dispatch({
                    type: 'FLEX_SEED',
                    withId,
                });
            },
            onAction: (actionId: string) => {
                switch (actionId) {
                    case 'rename':
                        dispatch({ type: 'FLEX_RENAME' });
                        break;
                }
            },
        }),
        []
    );

    return (
        <DesignerTree
            layout={layout}
            flexEntityId={currentIds.flexEntityId}
            resolutionId={currentIds.resolutionId}
            resolutions={resolutions as any}
            callbacks={callbacks}
        />
    );
};

export default DesignerTreeContainer;
