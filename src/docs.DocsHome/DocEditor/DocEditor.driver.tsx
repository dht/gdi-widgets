import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DocEditor, DocEditorProps } from './DocEditor';
import { BaseComponentDriver } from 'testing-base';

export class DocEditorDriver extends BaseComponentDriver {
    private props: Partial<DocEditorProps> = {};

    constructor() {
        super('DocEditor');
    }

    when: any = {
        rendered: () => {
            render(<DocEditor {...(this.props as DocEditorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DocEditor {...(this.props as DocEditorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DocEditorProps>) => {
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
