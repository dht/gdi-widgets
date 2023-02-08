import React from 'react';
import { Wrapper, Content } from './ZoomBuild.style';
import { EngineView } from '@gdi/engine';
import { ZoomBuildBar } from './ZoomBuildBar/ZoomBuildBar';
import { Device } from '@gdi/web-ui';

export type ZoomBuildProps = {
    elements: IElement[];
    widget?: IWidget;
    datasets: Json;
    mobileMode: boolean;
    onToggleMobile: (value: boolean) => void;
};

export function ZoomBuild(props: ZoomBuildProps) {
    const { elements, widget, datasets, mobileMode } = props;

    return (
        <Wrapper className='ZoomBuild-wrapper' data-testid='ZoomBuild-wrapper'>
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

export default ZoomBuild;
