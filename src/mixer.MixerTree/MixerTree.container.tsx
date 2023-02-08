import React, { useMemo } from 'react';
import { MixerTree } from './MixerTree';
import { useSelector, useDispatch } from 'react-redux';
import { mixer as store } from '@gdi/selectors';

export const MixerTreeContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(store.selectors.raw.$rawMixerState);
    const currentIds = useSelector(store.selectors.raw.$rawCurrentIds);
    const pageInstanceId = useSelector(store.selectors.base.$pageInstanceId);
    const pageInstances = useSelector(store.selectors.base.$pageInstances);

    const instancesForCurrentPage = useSelector(
        store.selectors.base.$instancesForCurrentPage
    );

    const callbacks = useMemo(
        () => ({
            onClose: () => {
                dispatch(
                    store.actions.appStateMixer.patch({
                        showMixerTree: false,
                    })
                );
            },
            onPageInstanceSelect: (id: string) => {
                dispatch(
                    store.actions.currentIds.patch({
                        pageInstanceId: id,
                    })
                );
            },
            onPageInstanceChange: (
                pageInstanceId: string,
                change: Partial<IPageInstance>
            ) => {
                dispatch(
                    store.actions.libraryPageInstances.patch(
                        pageInstanceId,
                        change
                    )
                );
            },

            onCustomAction: (actionId: string, _data?: Json) => {
                switch (actionId) {
                    case 'duplicateVersion':
                        dispatch({ type: 'DUPLICATE_PAGE_INSTANCE' });
                        break;
                    case 'promoteVersion':
                        dispatch({ type: 'PROMOTE_PAGE_INSTANCE' });
                        break;
                    case 'resetVersion':
                        dispatch({ type: 'RESET_PAGE_INSTANCE' });
                        break;
                    case 'deleteVersion':
                        dispatch({ type: 'DELETE_PAGE_INSTANCE' });
                        break;
                }
            },
        }),
        []
    );

    if (!appState.showMixerTree) {
        return null;
    }

    return (
        <MixerTree
            pageInstances={pageInstances}
            pageInstanceId={pageInstanceId}
            selectedInstanceId={currentIds.selectedInstanceId}
            instances={instancesForCurrentPage}
            callbacks={callbacks}
        />
    );
};

export default MixerTreeContainer;
