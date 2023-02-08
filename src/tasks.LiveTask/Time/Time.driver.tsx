import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Time, TimeProps } from './Time';
import { BaseComponentDriver } from 'testing-base';

export class TimeDriver extends BaseComponentDriver {
    private props: Partial<TimeProps> = {};

    constructor() {
        super('Time');
    }

    when: any = {
        rendered: () => {
            render(<Time {...(this.props as TimeProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TimeProps>) => {
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
