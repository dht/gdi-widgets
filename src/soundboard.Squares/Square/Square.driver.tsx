import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Square, SquareProps } from './Square';
import { BaseComponentDriver } from 'testing-base';

export class SquareDriver extends BaseComponentDriver {
    private props: Partial<SquareProps> = {};

    constructor() {
        super('Square');
    }

    when: any = {
        rendered: () => {
            render(<Square {...(this.props as SquareProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<SquareProps>) => {
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
