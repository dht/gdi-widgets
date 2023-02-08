import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TopRow, TopRowProps } from './TopRow';
import { BaseComponentDriver } from 'testing-base';

export class TopRowDriver extends BaseComponentDriver {
    private props: Partial<TopRowProps> = {};

    constructor() {
        super('TopRow');
    }

    when: any = {
        rendered: () => {
            render(<TopRow {...(this.props as TopRowProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TopRowProps>) => {
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
