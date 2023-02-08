
import { ContentContainer } from './Content.container';;
import { ModalContentContainer } from './ModalContent.container';;
import { PanelContentContainer } from './PanelContent.container';                
                
export const widgets = {
    "com.usegdi.widgets.mixer.Content": {
        "id": "com.usegdi.widgets.mixer.Content",
        "component": ContentContainer
    },
    "com.usegdi.widgets.mixer.ModalContent": {
        "id": "com.usegdi.widgets.mixer.ModalContent",
        "component": ModalContentContainer
    },
    "com.usegdi.widgets.mixer.PanelContent": {
        "id": "com.usegdi.widgets.mixer.PanelContent",
        "component": PanelContentContainer
    }
}