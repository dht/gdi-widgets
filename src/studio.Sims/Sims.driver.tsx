import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Sims, SimsProps } from './Sims';
import { BaseComponentDriver } from 'testing-base';

export class SimsDriver extends BaseComponentDriver {
    private props: Partial<SimsProps> = {};

    constructor() {
        super('Sims');
    }

    when: any = {
        rendered: () => {
            render(<Sims {...(this.props as SimsProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<SimsProps>) => {
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
