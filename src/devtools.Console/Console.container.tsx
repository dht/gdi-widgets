import React from 'react';
import Console from './Console';
import { useLogs } from './utils/console';

export const ConsoleContainer = () => {
    const logs = useLogs();

    return <Console logs={logs} />;
};

export default ConsoleContainer;
