import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ScheduleTop, ScheduleTopProps } from './ScheduleTop';
import { BaseComponentDriver } from 'testing-base';

export class ScheduleTopDriver extends BaseComponentDriver {
    private props: Partial<ScheduleTopProps> = {};

    constructor() {
        super('ScheduleTop');
    }

    when: any = {
        rendered: () => {
            render(<ScheduleTop {...(this.props as ScheduleTopProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ScheduleTopProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
