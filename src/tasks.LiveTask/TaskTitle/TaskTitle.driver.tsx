import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TaskTitle, TaskTitleProps } from './TaskTitle';
import { BaseComponentDriver } from 'testing-base';

export class TaskTitleDriver extends BaseComponentDriver {
    private props: Partial<TaskTitleProps> = {};

    constructor() {
        super('TaskTitle');
    }

    when: any = {
        rendered: () => {
            render(<TaskTitle {...(this.props as TaskTitleProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TaskTitleProps>) => {
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
