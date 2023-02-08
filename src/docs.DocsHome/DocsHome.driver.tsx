import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DocsHome, DocsHomeProps } from './DocsHome';
import { BaseComponentDriver } from 'testing-base';

export class DocsHomeDriver extends BaseComponentDriver {
    private props: Partial<DocsHomeProps> = {};

    constructor() {
        super('DocsHome');
    }

    when: any = {
        rendered: () => {
            render(<DocsHome {...(this.props as DocsHomeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DocsHome {...(this.props as DocsHomeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DocsHomeProps>) => {
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
