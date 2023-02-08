import React, { useMemo } from 'react';
import ImportExportLayout from './ImportExportLayout';
import { useDispatch } from 'react-redux';

let popup;

export const ImportExportLayoutContainer = () => {
    const dispatch = useDispatch();

    const callbacks = useMemo(
        () => ({
            downloadLayout: () => {
                dispatch({ type: 'EXPORT_LAYOUT' });
            },
        }),
        []
    );

    return <ImportExportLayout callbacks={callbacks} />;
};

export default ImportExportLayoutContainer;
