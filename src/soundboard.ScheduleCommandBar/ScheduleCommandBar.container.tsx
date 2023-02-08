import React from 'react';
import { BigAutoComplete } from '@gdi/web-ui';
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from '@gdi/selectors';

export const ScheduleCommandBarContainer = () => {
    const dispatch = useDispatch();
    const options = useSelector(
        tasks.selectors.options.$ticketsAndProjectsOptions
    );

    function onRun(command: any) {
        dispatch({
            type: 'SCHEDULE_ATTACH_TICKET_TO_BLOCK',
            id: command.id,
        });
    }

    return <BigAutoComplete items={options as any[]} onRun={onRun} />;
};

export default ScheduleCommandBarContainer;
