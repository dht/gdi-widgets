import React from 'react';
import { Wrapper } from './DevLogs.style';
import { LogsConsole } from '@gdi/web-ui';

export type DevLogsProps = {
    items: Json[];
};

export function DevLogs(props: DevLogsProps) {
    const { items } = props;

    return (
        <Wrapper className='DevLogs-wrapper' data-testid='DevLogs-wrapper'>
            <LogsConsole items={items as any} showData={false} />
        </Wrapper>
    );
}

export default DevLogs;
