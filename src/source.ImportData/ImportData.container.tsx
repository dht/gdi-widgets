import React, { useMemo, useState } from 'react';
import ImportData from './ImportData';
import { useDispatch } from 'react-redux';
import { readFile } from 'shared-base';
import { fixFileContent, validateFileContent } from '../_utils/entityFields';
import { ModalAdhocLogsContainer } from './ModalAdhocLogs.container';

export const ImportDataContainer = () => {
    const dispatch = useDispatch();
    const [isError, setIsError] = useState(false);

    const callbacks = useMemo(
        () => ({
            onDrop: async (acceptedFiles: File[]) => {
                let content = await readFile(acceptedFiles[0], true);

                const response = validateFileContent(content as Json);

                setIsError(false);

                if (!response.isOk) {
                    console.log('file error ->', response.errorsByEntity);
                    setIsError(true);
                    return;
                }

                content = fixFileContent(content as Json);

                dispatch({
                    type: 'IMPORT_DATA_FROM_FILE',
                    payload: content,
                });
            },
        }),
        []
    );

    return (
        <>
            <ImportData callbacks={callbacks} isError={isError} />
            <ModalAdhocLogsContainer />
        </>
    );
};

export default ImportDataContainer;
