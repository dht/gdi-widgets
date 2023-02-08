import React from 'react';
import OverviewNavigate from './OverviewNavigate';
import { useSelector, useDispatch } from 'react-redux';
import { dashboard as store } from '@gdi/selectors';

export const OverviewNavigateContainer = () => {
    const inboxMessage = useSelector(store.selectors.base.$inboxMessage);

    if (!inboxMessage) {
        return null;
    }

    return <OverviewNavigate inboxMessage={inboxMessage} />;
};

export default OverviewNavigateContainer;
