import React, { useCallback } from 'react';
import SiteProperties from './SiteProperties';
import { useSelector, useDispatch } from 'react-redux';
import { downloadJson } from 'shared-base';
import { site as store } from '@gdi/selectors';

export const SitePropertiesContainer = () => {
    const dispatch = useDispatch();
    const siteProperties = useSelector(store.selectors.raw.$rawSiteProperties);

    const onSave = useCallback((change: Json) => {
        dispatch(store.actions.siteProperties.patch(change));
    }, []);

    const onDownload = useCallback((json: Json) => {
        downloadJson('siteProperties.json', json);
    }, []);

    return (
        <SiteProperties
            siteProperties={siteProperties}
            onSave={onSave}
            onDownload={onDownload}
        />
    );
};

export default SitePropertiesContainer;
