import React from 'react';
import Palette from './Palette';
import { useSelector, useDispatch } from 'react-redux';
import { mixer as store } from '@gdi/selectors';

export const PanelPaletteContainer = (_props: any) => {
    const dispatch = useDispatch();
    const paletteOptions = useSelector(store.selectors.raw.$rawLibraryPalettes);
    const selectedPaletteId = useSelector(store.selectors.raw.$rawMixerState).paletteId; // prettier-ignore

    function onSelect(id: string) {
        dispatch(
            store.actions.mixerState.patch({
                paletteId: id,
            })
        );
    }

    return (
        <Palette
            selectedPaletteId={selectedPaletteId}
            options={Object.values(paletteOptions)}
            onSelect={onSelect}
        />
    );
};

export default PanelPaletteContainer;
