import React from 'react';
import { Wrapper, Content } from './ZoomPreview.style';
import { EngineView } from '@gdi/engine';
import { ZoomBuildBar } from './ZoomBuildBar/ZoomBuildBar';
import { Device } from '@gdi/web-ui';

export type ZoomPreviewProps = {
    elements: IElement[];
    widget?: IWidget;
    datasets: Json;
    mobileMode: boolean;
    onToggleMobile: (value: boolean) => void;
};

export function ZoomPreview(props: ZoomPreviewProps) {
    const { elements, widget, datasets, mobileMode } = props;

    return (
        <Wrapper
            className='ZoomPreview-wrapper'
            data-testid='ZoomPreview-wrapper'
        >
            <ZoomBuildBar
                widget={widget}
                onToggleMobile={props.onToggleMobile}
                mobileMode={mobileMode}
            />
            <Content>
                <Device isMobile={mobileMode}>
                    <EngineView
                        elements={elements}
                        isMobile={mobileMode}
                        datasets={datasets}
                        backgroundColor='#fff'
                    />
                </Device>
            </Content>
        </Wrapper>
    );
}

export default ZoomPreview;
