import React from 'react';
import OverviewNavigate from './OverviewNavigate';
import { useSelector, useDispatch } from 'react-redux';
import { studio as store, dashboard } from '@gdi/selectors';

export const OverviewNavigateContainer = () => {
    const inboxMessage = useSelector(dashboard.selectors.base.$inboxMessage);

    if (!inboxMessage) {
        return null;
    }

    return <OverviewNavigate inboxMessage={inboxMessage} />;
};

export default OverviewNavigateContainer;
