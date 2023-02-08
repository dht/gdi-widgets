import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Deals, DealsProps } from './Deals';
import { BaseComponentDriver } from 'testing-base';

export class DealsDriver extends BaseComponentDriver {
    private props: Partial<DealsProps> = {};

    constructor() {
        super('Deals');
    }

    when: any = {
        rendered: () => {
            render(<Deals {...(this.props as DealsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Deals {...(this.props as DealsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DealsProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
