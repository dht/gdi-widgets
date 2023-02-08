import React, { useState } from 'react';
import { Modal, LogsConsole } from '@gdi/web-ui';
import { useAdhocLogs, useCustomEvent } from '@gdi/hooks';

export const ModalAdhocLogsContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    function onClose() {
        setIsOpen(false);
    }

    const items = useAdhocLogs();

    useCustomEvent('toggleAdhocModal', (value) => {
        setIsOpen(value.show);
    });

    if (!isOpen) {
        return null;
    }

    return (
        <Modal open={true} title='Log' onClose={onClose}>
            <LogsConsole items={items as any} />
        </Modal>
    );
};

export default ModalAdhocLogsContainer;
