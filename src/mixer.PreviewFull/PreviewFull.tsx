import React, { useEffect } from 'react';
import { Wrapper, WindowSize } from './PreviewFull.style';
import { EngineView } from '@gdi/engine';
import { invokeEvent } from 'shared-base';
import { useMount, useWindowSize } from 'react-use';
import { BuiltWithGdi } from '@gdi/web-ui';

export type PreviewFullProps = {
    elements: IElement[];
    widget?: IWidget;
    datasets: Json;
    mobileMode: boolean;
    onToggleMobile: (value: boolean) => void;
};

export function PreviewFull(props: PreviewFullProps) {
    const { width, height } = useWindowSize();

    const { elements, datasets, mobileMode } = props;

    useMount(() => {
        setTimeout(() => {
            invokeEvent('force-dimensions-clear');
        }, 10);
    });

    useEffect(() => {
        if (width === 0) {
            return;
        }

        document.body.classList.add('hide-menu');

        const isMobile = width < 768;

        props.onToggleMobile(isMobile);

        return () => {
            document.body.classList.remove('hide-menu');
        };
    }, [width]);

    return (
        <Wrapper
            className='PreviewFull-wrapper'
            data-testid='PreviewFull-wrapper'
        >
            <EngineView
                elements={elements}
                isMobile={mobileMode}
                datasets={datasets}
                backgroundColor='#fff'
            />
            <WindowSize>
                {width} x {height}
            </WindowSize>
            <BuiltWithGdi
                data={{
                    elements,
                }}
            />
        </Wrapper>
    );
}

export default PreviewFull;
