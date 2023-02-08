import React, { useCallback } from 'react';
import Settings from './Settings';
import { useSelector, useDispatch } from 'react-redux';
import { downloadJson } from 'shared-base';
import { settings as store } from '@gdi/selectors';

export const SettingsContainer = () => {
    const dispatch = useDispatch();
    const settings = useSelector(store.selectors.raw.$rawSettings);

    const onSave = useCallback((change: Json) => {
        dispatch(store.actions.settings.patch(change));
    }, []);

    const onDownload = useCallback((json: Json) => {
        downloadJson('settings.json', json);
    }, []);

    return (
        <Settings settings={settings} onSave={onSave} onDownload={onDownload} />
    );
};

export default SettingsContainer;
