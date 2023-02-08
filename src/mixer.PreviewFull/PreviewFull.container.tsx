import React, { useCallback } from 'react';
import { PreviewFull } from './PreviewFull';
import { useDispatch, useSelector } from 'react-redux';
import { mixer as store } from '@gdi/selectors';

export const PreviewFullContainer = () => {
    const dispatch = useDispatch();
    const elements = useSelector(store.selectors.base.$instancesForCurrentPage);
    const datasets = useSelector(store.selectors.raw.$rawLibraryDatasets);
    const widget = useSelector(store.selectors.base.$widgetForCurrentZoomBuild);
    const mobileMode = useSelector(
        store.selectors.raw.$rawMixerState
    ).mobileMode;

    const onToggleMobile = useCallback((value: boolean) => {
        dispatch(
            store.actions.appStateMixer.patch({
                mobileMode: value,
            })
        );
    }, []);

    return (
        <PreviewFull
            elements={elements}
            widget={widget}
            datasets={datasets}
            mobileMode={mobileMode}
            onToggleMobile={onToggleMobile}
        />
    );
};

export default PreviewFullContainer;
