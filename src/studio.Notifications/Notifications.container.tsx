import React, { useMemo } from 'react';
import Notifications from './Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { studio as store, dashboard } from '@gdi/selectors';

export const NotificationsContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(dashboard.selectors.raw.$rawAppStateDashboard);
    const inboxMessages = useSelector(dashboard.selectors.base.$inboxMessages);
    const { showNotifications } = appState;

    const callbacks = useMemo(
        () => ({
            onClearNotifications: () => {
                console.log('onClearNotifications');
            },
            onClose: () => {
                dispatch(
                    dashboard.actions.appStateDashboard.patch({
                        showNotifications: false,
                    })
                );
            },
            onClick: (item: Json) => {
                dispatch({
                    type: 'INBOX_OPEN_ITEM',
                    item,
                });
            },
            onSnooze: (item: Json) => {
                dispatch({
                    type: 'INBOX_SNOOZE_ITEM',
                    item,
                });
            },
        }),
        [showNotifications]
    );

    if (!showNotifications) {
        return null;
    }

    return (
        <Notifications inboxMessages={inboxMessages} callbacks={callbacks} />
    );
};

export default NotificationsContainer;
