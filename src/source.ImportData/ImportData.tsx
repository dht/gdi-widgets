import React, { useCallback } from 'react';
import { ErrorWrapper, Wrapper } from './ImportData.style';
import { useDropzone } from 'react-dropzone';
import classnames from 'classnames';
import { useLanguage } from '@gdi/language';

export type ImportDataProps = {
    isError: boolean;
    callbacks: {
        onDrop: (acceptedFiles: File[]) => void;
    };
};

export function ImportData(props: ImportDataProps) {
    const { callbacks, isError } = props;

    const { t } = useLanguage();

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: callbacks.onDrop,
        multiple: false,
        accept: {
            'application/json': [],
        },
    });

    const className = classnames('ImportData-wrapper', {
        active: isDragActive,
    });

    function renderError() {
        if (!isError) {
            return null;
        }

        return <ErrorWrapper>{t('ImportDataError')}</ErrorWrapper>;
    }

    return (
        <Wrapper
            className={className}
            data-testid='ImportData-wrapper'
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            <i className='material-icons'>cloud_upload</i>
            {t('DropToUpload')}
            {renderError()}
        </Wrapper>
    );
}

export default ImportData;
