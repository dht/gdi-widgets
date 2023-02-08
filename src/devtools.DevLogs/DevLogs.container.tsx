import React from 'react';
import { DevLogs } from './DevLogs';
import { useAdhocLogs } from '@gdi/hooks';

export const DevLogsContainer = () => {
    const items = useAdhocLogs();

    return <DevLogs items={items} />;
};

export default DevLogsContainer;
