import React, { useCallback } from 'react';
import { ZoomPreview } from './ZoomPreview';
import { useDispatch, useSelector } from 'react-redux';
import { mixer as store } from '@gdi/selectors';

export const PreviewContainer = () => {
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
        <ZoomPreview
            elements={elements}
            widget={widget}
            datasets={datasets}
            mobileMode={mobileMode}
            onToggleMobile={onToggleMobile}
        />
    );
};

export default PreviewContainer;
