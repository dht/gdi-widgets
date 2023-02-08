import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, LogsConsole } from '@gdi/web-ui';
import { useAdhocLogs } from '@gdi/hooks';
import { mixer as store } from '@gdi/selectors';

export const ModalAdhocLogsContainer = () => {
    const dispatch = useDispatch();
    const mixerState = useSelector(store.selectors.raw.$rawMixerState);

    function onClose() {
        dispatch(
            store.actions.appStateMixer.patch({
                showConsoleLogs: false,
            })
        );
    }

    const items = useAdhocLogs();

    if (!mixerState.showConsoleLogs) {
        return null;
    }

    return (
        <Modal open={true} title='Log' onClose={onClose}>
            <LogsConsole items={items as any} />
        </Modal>
    );
};

export default ModalAdhocLogsContainer;
