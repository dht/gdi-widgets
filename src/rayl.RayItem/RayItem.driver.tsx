import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RayItem, RayItemProps } from './RayItem';
import { BaseComponentDriver } from 'testing-base';

export class RayItemDriver extends BaseComponentDriver {
    private props: Partial<RayItemProps> = {};

    constructor() {
        super('RayItem');
    }

    when: any = {
        rendered: () => {
            render(<RayItem {...(this.props as RayItemProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<RayItem {...(this.props as RayItemProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<RayItemProps>) => {
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
