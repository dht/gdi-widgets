import React from 'react';
import { Wrapper } from './Deals.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type DealsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function Deals(props: DealsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('deal' as any);
    const { t } = useLanguage();

    return (
        <Wrapper className='Deals-wrapper' data-testid='Deals-wrapper'>
            <Multi
                id='Deals'
                itemType={'deal' as any}
                header={t('Deals')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Wrapper>
    );
}

export default Deals;
