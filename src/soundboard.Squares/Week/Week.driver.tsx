import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Week, WeekProps } from './Week';
import { BaseComponentDriver } from 'testing-base';

export class WeekDriver extends BaseComponentDriver {
    private props: Partial<WeekProps> = {};

    constructor() {
        super('Week');
    }

    when: any = {
        rendered: () => {
            render(<Week {...(this.props as WeekProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<WeekProps>) => {
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
