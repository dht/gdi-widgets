import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StoreSize, StoreSizeProps } from './StoreSize';
import { BaseComponentDriver } from 'testing-base';

export class StoreSizeDriver extends BaseComponentDriver {
    private props: Partial<StoreSizeProps> = {};

    constructor() {
        super('StoreSize');
    }

    when: any = {
        rendered: () => {
            render(<StoreSize {...(this.props as StoreSizeProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<StoreSizeProps>) => {
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
