import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RayHome, RayHomeProps } from './RayHome';
import { BaseComponentDriver } from 'testing-base';

export class RayHomeDriver extends BaseComponentDriver {
    private props: Partial<RayHomeProps> = {};

    constructor() {
        super('RayHome');
    }

    when: any = {
        rendered: () => {
            render(<RayHome {...(this.props as RayHomeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<RayHome {...(this.props as RayHomeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<RayHomeProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
