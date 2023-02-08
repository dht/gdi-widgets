import React, { useMemo } from 'react';
import Reader from './Reader';
import { useDispatch, useSelector } from 'react-redux';
import { studio as store, dashboard } from '@gdi/selectors';

export const ReaderContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(dashboard.selectors.raw.$rawAppStateDashboard);
    const { showReader, readerUrl } = appState;

    const callbacks = useMemo(
        () => ({
            onClose: () => {
                dispatch(
                    dashboard.actions.appStateDashboard.patch({
                        showReader: false,
                    })
                );
            },
        }),
        [showReader]
    );

    if (!showReader) {
        return null;
    }

    return <Reader mode='light' contentUrl={readerUrl} callbacks={callbacks} />;
};

export default ReaderContainer;
