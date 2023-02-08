import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MixerPanel } from './MixerPanel';
import { mixer as store } from '@gdi/selectors';

export const MixerPanelContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(store.selectors.raw.$rawMixerState);

    const callbacks = useMemo(
        () => ({
            onLibraryChange: (optionId: string) => {
                dispatch(
                    store.actions.appStateMixer.patch({
                        panelLibraryFlavour: optionId,
                    })
                );
            },
        }),
        []
    );

    return (
        <MixerPanel
            panelLibraryFlavour={appState.panelLibraryFlavour}
            callbacks={callbacks}
        />
    );
};

export default MixerPanelContainer;
