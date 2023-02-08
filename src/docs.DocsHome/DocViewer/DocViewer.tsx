import React from 'react';
import { Wrapper } from './DocViewer.style';
import { MarkDown } from '@gdi/web-ui';

export type DocViewerProps = {
    content: string;
    zoom?: number;
};

export function DocViewer(props: DocViewerProps) {
    const { content, zoom } = props;

    return (
        <Wrapper className='DocViewer-wrapper' data-testid='DocViewer-wrapper'>
            <MarkDown markdown={content} mode='dark' zoom={zoom} />
        </Wrapper>
    );
}

export default DocViewer;
