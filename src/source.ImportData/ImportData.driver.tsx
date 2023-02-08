import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ImportData, ImportDataProps } from './ImportData';
import { BaseComponentDriver } from 'testing-base';

export class ImportDataDriver extends BaseComponentDriver {
    private props: Partial<ImportDataProps> = {};

    constructor() {
        super('ImportData');
    }

    when: any = {
        rendered: () => {
            render(<ImportData {...(this.props as ImportDataProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ImportData {...(this.props as ImportDataProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ImportDataProps>) => {
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
