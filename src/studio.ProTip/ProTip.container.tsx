import React, { useMemo } from 'react';
import ProTip from './ProTip';
import { useSelector, useDispatch } from 'react-redux';
import { studio as store, dashboard } from '@gdi/selectors';

export const ProTipContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(dashboard.selectors.raw.$rawAppStateDashboard);
    const { showQuickTip, quickTipUrl } = appState;

    const callbacks = useMemo(
        () => ({
            onClose: () => {
                dispatch(
                    dashboard.actions.appStateDashboard.patch({
                        showQuickTip: false,
                    })
                );
            },
        }),
        [showQuickTip]
    );

    if (!showQuickTip) {
        return null;
    }

    return <ProTip contentUrl={quickTipUrl} callbacks={callbacks} />;
};

export default ProTipContainer;
