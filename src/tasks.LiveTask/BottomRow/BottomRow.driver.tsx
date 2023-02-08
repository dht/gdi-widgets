import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BottomRow, BottomRowProps } from './BottomRow';
import { BaseComponentDriver } from 'testing-base';

export class BottomRowDriver extends BaseComponentDriver {
    private props: Partial<BottomRowProps> = {};

    constructor() {
        super('BottomRow');
    }

    when: any = {
        rendered: () => {
            render(<BottomRow {...(this.props as BottomRowProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<BottomRowProps>) => {
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
