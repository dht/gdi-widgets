import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Play, PlayProps } from './Play';
import { BaseComponentDriver } from 'testing-base';

export class PlayDriver extends BaseComponentDriver {
    private props: Partial<PlayProps> = {};

    constructor() {
        super('Play');
    }

    when: any = {
        rendered: () => {
            render(<Play {...(this.props as PlayProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Play {...(this.props as PlayProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PlayProps>) => {
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
