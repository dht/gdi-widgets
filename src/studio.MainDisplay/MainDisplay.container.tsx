import React, { useMemo } from 'react';
import MainDisplay from './MainDisplay';
import { isEmpty } from 'shared-base';
import { useDispatch, useSelector } from 'react-redux';
import { studio as store, dashboard } from '@gdi/selectors';

export const MainDisplayContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(dashboard.selectors.raw.$rawAppStateDashboard);
    const { mainDisplayData } = appState;

    const callbacks = useMemo(
        () => ({
            onClose: () => {
                dispatch(
                    dashboard.actions.appStateDashboard.patch({
                        showMainDisplay: false,
                        mainDisplayData: {},
                    })
                );
            },
            onCta: (item: Json) => {
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
        []
    );

    if (isEmpty(mainDisplayData)) {
        return null;
    }

    return (
        <MainDisplay
            data={mainDisplayData as IInboxMessage}
            callbacks={callbacks}
        />
    );
};

export default MainDisplayContainer;
