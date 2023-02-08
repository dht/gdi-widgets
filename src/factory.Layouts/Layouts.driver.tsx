import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Layouts, LayoutsProps } from './Layouts';
import { BaseComponentDriver } from 'testing-base';

export class LayoutsDriver extends BaseComponentDriver {
    private props: Partial<LayoutsProps> = {};

    constructor() {
        super('Layouts');
    }

    when: any = {
        rendered: () => {
            render(<Layouts {...(this.props as LayoutsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Layouts {...(this.props as LayoutsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LayoutsProps>) => {
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
