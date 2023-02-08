import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionType } from '../mixer.MixerStructure/MixerStructure';
import MixerVisual from './MixerVisual';
import { mixer as store } from '@gdi/selectors';

export const MixerVisualContainer = () => {
    const dispatch = useDispatch();
    const pageStructure = useSelector(
        store.selectors.base.$instancesForCurrentPage
    );
    const currentInstanceId = useSelector(store.selectors.raw.$rawCurrentIds).selectedInstanceId; // prettier-ignore
    const panelLibraryFlavour = useSelector(store.selectors.raw.$rawMixerState).panelLibraryFlavour; // prettier-ignore
    const datasets = useSelector(store.selectors.raw.$rawLibraryDatasets);

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
                    (store.actions.instances.patch as any)(instanceId, {
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
        <MixerVisual
            currentInstanceId={currentInstanceId}
            pageStructure={pageStructure}
            callbacks={callbacks}
            datasets={datasets}
        />
    );
};

export default MixerVisualContainer;
