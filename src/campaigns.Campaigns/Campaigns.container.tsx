import React, { useMemo } from 'react';
import Campaigns from './Campaigns';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { campaigns as store } from '@gdi/selectors';

export const CampaignsContainer = () => {
    const dispatch = useDispatch();
    const campaigns = useSelector(store.selectors.tables.$campaigns);
    const allOptions = useSelector(store.selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <Campaigns
            data={campaigns}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default CampaignsContainer;
