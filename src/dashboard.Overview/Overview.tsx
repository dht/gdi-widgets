import React from 'react';
import { Column, Wrapper, Content, Header, Resolution } from './Overview.style';
import { OverviewBar } from './OverviewBar/OverviewBar';
import { TrianglesBk } from '@gdi/web-ui';
import { useMeasure } from 'react-use';

export type OverviewProps = {
    accountName: string;
    callbacks: {
        onAccountChange: () => void;
    };
    children: JSX.Element[];
};

export function Overview(props: OverviewProps) {
    const { callbacks, accountName } = props;
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

    return (
        <Wrapper
            className='Overview-wrapper'
            data-testid='Overview-wrapper'
            ref={ref}
        >
            <TrianglesBk>
                <Header>
                    <OverviewBar
                        accountName={accountName}
                        onAccountChange={callbacks.onAccountChange}
                    />
                </Header>
                <Content>
                    <Column>{props.children[0]}</Column>
                    <Column>{props.children[1]}</Column>
                </Content>
                <Resolution>
                    {width} x {height}px
                </Resolution>
            </TrianglesBk>
        </Wrapper>
    );
}

export default Overview;
