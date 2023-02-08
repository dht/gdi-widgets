import React, { useContext } from 'react';
import ActiveApps from './ActiveApps';
import { useSelector } from 'react-redux';
import { PlatformContext } from '@gdi/platformer';
import { auth as store } from '@gdi/selectors';
import { settings } from '@gdi/selectors';

export const ActiveAppsContainer = () => {
    const me = useSelector(store.selectors.raw.$rawMe);
    const users = useSelector(store.selectors.base.$users);
    const activeApps = useSelector(settings.selectors.base.$activeApps);
    const activeAppsStats = useSelector(settings.selectors.base.$activeAppsStats); // prettier-ignore

    const templatesMeta = useContext(PlatformContext).state.templatesMeta;

    return (
        <ActiveApps
            me={me}
            users={users}
            activeApps={activeApps}
            stats={activeAppsStats}
            templatesMeta={templatesMeta}
        />
    );
};

export default ActiveAppsContainer;
