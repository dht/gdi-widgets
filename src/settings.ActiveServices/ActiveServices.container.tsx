import React, { useContext } from 'react';
import ActiveServices from './ActiveServices';
import { useSelector } from 'react-redux';
import { PlatformContext } from '@gdi/platformer';
import { auth as store, settings } from '@gdi/selectors';

export const ActiveServicesContainer = () => {
    const me = useSelector(store.selectors.raw.$rawMe);
    const users = useSelector(store.selectors.base.$users);
    const activeServices = useSelector(settings.selectors.base.$activeServices);
    const activeServicesStats = useSelector(
        settings.selectors.base.$activeServicesStats
    );

    const templatesMeta = useContext(PlatformContext).state.templatesMeta;

    return (
        <ActiveServices
            me={me}
            users={users}
            activeServices={activeServices}
            stats={activeServicesStats}
            templatesMeta={templatesMeta}
        />
    );
};

export default ActiveServicesContainer;
