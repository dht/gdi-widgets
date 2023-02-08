import { PanelLibraryContainer } from './PanelLibrary.container';
import { PanelLibraryImagesContainer } from './PanelLibraryImages.container';

export const widgets = {
    'com.usegdi.widgets.mixer.PanelLibrary': {
        id: 'com.usegdi.widgets.mixer.PanelLibrary',
        component: PanelLibraryContainer,
    },
    'com.usegdi.widgets.mixer.PanelLibraryImages': {
        id: 'com.usegdi.widgets.mixer.PanelLibraryImages',
        component: PanelLibraryImagesContainer,
    },
};
