import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MixerStructure, { ActionType } from './MixerStructure';
import { mixer as store } from '@gdi/selectors';

export const MixerStructureContainer = () => {
    const dispatch = useDispatch();
    const pageStructure = useSelector(
        store.selectors.base.$instancesForCurrentPage
    );
    const currentInstanceId = useSelector(store.selectors.raw.$rawCurrentIds).selectedInstanceId; // prettier-ignore
    const panelLibraryFlavour = useSelector(store.selectors.raw.$rawMixerState).panelLibraryFlavour; // prettier-ignore

    const callbacks = useMemo(
        () => ({
            onSelectItem: (instanceId: string) => {
                dispatch(
                    store.actions.currentIds.patch({
                        selectedInstanceId: instanceId,
                    })
                );
            },
            onMoveItem: (instanceId: string, newOrderValue: number) => {
                dispatch(
                    store.actions.libraryInstances.patch(instanceId, {
                        order: newOrderValue,
                    })
                );
            },
            onAction: async (action: ActionType, id: string) => {
                switch (action) {
                    case 'new':
                        dispatch({ type: 'ELEMENT_ADD' });
                        break;
                    case 'delete':
                        dispatch({ type: 'ELEMENT_DELETE', id });
                        break;
                    case 'drillDown':
                        dispatch({ type: 'ELEMENT_CONTENT', id });
                        break;
                }
            },
        }),
        [panelLibraryFlavour]
    );

    return (
        <MixerStructure
            currentInstanceId={currentInstanceId}
            pageStructure={pageStructure}
            callbacks={callbacks}
        />
    );
};

export default MixerStructureContainer;
