import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DocViewer, DocViewerProps } from './DocViewer';
import { BaseComponentDriver } from 'testing-base';

export class DocViewerDriver extends BaseComponentDriver {
    private props: Partial<DocViewerProps> = {};

    constructor() {
        super('DocViewer');
    }

    when: any = {
        rendered: () => {
            render(<DocViewer {...(this.props as DocViewerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DocViewer {...(this.props as DocViewerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DocViewerProps>) => {
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
