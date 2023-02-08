import React from 'react';
import { Column, NewWrapper, Row, Wrapper } from './DocsHome.style';
import { Button, IconButton, VerticalTabs } from '@gdi/web-ui';
import { DocEditor } from './DocEditor/DocEditor';
import { DocViewer } from './DocViewer/DocViewer';

export type DocsHomeProps = {
    tabs: IVerticalTab[];
    doc?: IDoc;
    callbacks: {
        onDocChange: (content: string) => void;
        selectDoc: (docId: string) => void;
        saveDoc: (content: string) => void;
        newDoc: () => void;
        renameDoc: (docId: string) => void;
        deleteDoc: (docId: string) => void;
    };
};

export function DocsHome(props: DocsHomeProps) {
    const { tabs, doc, callbacks } = props;

    const { id, content } = doc ?? {};

    function renderActions(docId: string) {
        return (
            <>
                <IconButton
                    iconName='Edit'
                    onClick={() => callbacks.renameDoc(docId)}
                />
                <IconButton
                    iconName='Delete'
                    onClick={() => callbacks.deleteDoc(docId)}
                />
            </>
        );
    }

    return (
        <Wrapper className='DocsHome-wrapper' data-testid='DocsHome-wrapper'>
            <Row>
                <Column>
                    <NewWrapper>
                        <Button title='New doc' onClick={callbacks.newDoc} />
                    </NewWrapper>
                    <VerticalTabs
                        items={tabs}
                        selectedId={id ?? ''}
                        onChange={callbacks.selectDoc}
                        renderActions={renderActions}
                    />
                </Column>
                <Column>
                    <DocEditor
                        content={content ?? ''}
                        onChange={callbacks.onDocChange}
                        onSave={callbacks.saveDoc}
                    />
                </Column>
            </Row>
        </Wrapper>
    );
}

export default DocsHome;
