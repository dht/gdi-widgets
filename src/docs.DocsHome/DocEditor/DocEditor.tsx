import React, { useEffect, useState } from 'react';
import { Column, Row, Toggler, Wrapper } from './DocEditor.style';
import { useLocalStorage, useMeasure } from 'react-use';
import { Code } from '@gdi/web-ui';
import { DocViewer } from '../DocViewer/DocViewer';
import { useKey } from '@gdi/hooks';

export type DocEditorProps = {
    content: string;
    onChange: (content: string) => void;
    onSave: (content: string) => void;
};

export function DocEditor(props: DocEditorProps) {
    const { content } = props;
    const [ref, { height, width }] = useMeasure<HTMLDivElement>();
    const [editorValue, setEditorValue] = useState(content);
    const [showPreview, togglePreview] = useLocalStorage(
        'DOC_EDITOR_PREVIEW',
        false
    );
    const [showCode, toggleCode] = useLocalStorage('DOC_EDITOR_CODE', false);

    useEffect(() => {
        setEditorValue(content);
    }, [content]);

    useKey(
        () => {
            props.onSave(editorValue);
        },
        {
            filterKeys: ['S', 's'],
            filterModifiers: ['shiftKey', 'metaKey'],
        },
        [editorValue]
    );

    function onChange(content: string) {
        setEditorValue(content ?? '');
        props.onChange(content);
    }

    function renderToggler() {
        return (
            <>
                <Toggler className='left' onClick={() => toggleCode(!showCode)}>
                    <i className='material-icons'>code</i>
                </Toggler>
                <Toggler onClick={() => togglePreview(!showPreview)}>
                    <i className='material-icons'>monitor</i>
                </Toggler>
            </>
        );
    }

    function renderEditor() {
        const style = {
            maxWidth: (showPreview ? width / 2 : width) + 'px',
        };

        if (!showCode) {
            return null;
        }

        return (
            <Column style={style}>
                <Code
                    value={editorValue}
                    height={height}
                    language='markdown'
                    onChange={onChange}
                    // quickSuggestions={false}
                />
            </Column>
        );
    }

    function renderViewer() {
        const style = {
            maxWidth: (!showCode ? width : width / 2) + 'px',
            marginLeft: showCode ? 0 : '5vw',
        };

        if (!showPreview && showCode) {
            return null;
        }

        const zoom = showCode ? 1 : 1.4;

        return (
            <Column style={style}>
                <DocViewer content={editorValue} zoom={zoom} />
            </Column>
        );
    }

    return (
        <Wrapper
            className='DocEditor-wrapper'
            data-testid='DocEditor-wrapper'
            ref={ref}
        >
            <Row>
                {renderEditor()}
                {renderViewer()}
            </Row>
            {renderToggler()}
        </Wrapper>
    );
}

export default DocEditor;
