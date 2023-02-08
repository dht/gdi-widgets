import React from 'react';
import { Wrapper as Root } from './MixerPanel.style';
import { Accordion } from '@gdi/web-ui';
import { PanelContentContainer } from '../mixer.ContentForm/PanelContent.container';
import { PanelInspectorContainer } from '../mixer.Inspector/PanelInspector.container';
import { PanelLibraryContainer } from '../mixer.LibraryImages/PanelLibrary.container';
import { PanelLocaleContainer } from '../mixer.Locale/PanelLocale.container';
import { PanelPackagesContainer } from '../mixer.Packages/PanelPackages.container';
import { PanelPaletteContainer } from '../mixer.Palette/PanelPalette.container';
import { PanelTypographyContainer } from '../mixer.Typography/PanelTypography.container';
import { useLanguage } from '@gdi/language';
import { useTheme } from 'styled-components';
import { LibrarySelector } from '@gdi/web-ui';

export type MixerPanelProps = {
    panelLibraryFlavour: string;
    callbacks: {
        onLibraryChange: (optionId: string) => void;
    };
};

export function MixerPanel(props: MixerPanelProps) {
    const { panelLibraryFlavour, callbacks } = props;
    const { t } = useLanguage();
    const { isRtl } = useTheme() as any;

    function renderActions(panelKey: string) {
        switch (panelKey) {
            case 'Library':
                return (
                    <LibrarySelector
                        value={panelLibraryFlavour}
                        onChange={callbacks.onLibraryChange}
                    />
                );
            default:
                return null;
        }
    }

    return (
        <Root className='MixerPanel-wrapper' data-testid='MixerPanel-wrapper'>
            <Accordion
                initialPanel='Library'
                renderActions={renderActions}
                isRtl={isRtl}
            >
                <PanelInspectorContainer
                    key='Inspector'
                    title={t('Inspector')}
                    flex
                />
                <PanelLibraryContainer
                    key='Library'
                    title={t('Library')}
                    flex
                />
                <PanelContentContainer //
                    key='Data'
                    title={t('Data')}
                    flex
                />
                <PanelTypographyContainer
                    key='Typography'
                    title={t('Typography')}
                />
                <PanelPaletteContainer //
                    key='Palette'
                    title={t('Palette')}
                />
            </Accordion>
        </Root>
    );
}

export default MixerPanel;
