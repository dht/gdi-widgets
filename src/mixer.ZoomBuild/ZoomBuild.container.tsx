import React, { useCallback } from 'react';
import ZoomBuild from './ZoomBuild';
import { useSelector, useDispatch } from 'react-redux';
import { mixer as store } from '@gdi/selectors';

export const ZoomBuildContainer = () => {
    const dispatch = useDispatch();
    const elements = useSelector(
        store.selectors.base.$instancesForCurrentZoomBuild
    );
    const widget = useSelector(store.selectors.base.$widgetForCurrentZoomBuild);
    const datasets = useSelector(store.selectors.raw.$rawLibraryDatasets);
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
        <ZoomBuild
            elements={elements}
            widget={widget}
            datasets={datasets}
            mobileMode={mobileMode}
            onToggleMobile={onToggleMobile}
        />
    );
};

export default ZoomBuildContainer;
