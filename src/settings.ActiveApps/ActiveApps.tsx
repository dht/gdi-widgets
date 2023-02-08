import React, { useCallback } from 'react';
import bytes from 'bytes';
import { TabbedPages, Toggle } from '@gdi/web-ui';
import { tabs } from './ActiveApps.data';
import { useLanguage } from '@gdi/language';
import { useLocalStorage, useToggle } from 'react-use';
import {
    Column,
    Wrapper,
    Color,
    AppField,
    AppRow,
    Apps,
    ToggleWrapper,
    ToggleAll,
    Description,
    Flags,
    Version,
    Content,
} from './ActiveApps.style';

const ACTIVE_APPS_LOCAL_STORAGE_KEY = 'active-apps';

export type ActiveAppsProps = {
    me: IUser;
    users: IUsers;
    activeApps: IActiveApp[];
    stats: IActiveAppsStats;
    templatesMeta: IGdiMetas;
};

export function ActiveApps(props: ActiveAppsProps) {
    const { me, activeApps, stats, templatesMeta } = props;
    const { count, totalSize: allAppsSize } = stats;
    const [toggleAll, setToggleAll] = useToggle(false);
    const { t } = useLanguage();

    const { displayName = '', photoURL } = me;

    const [activeState, patchActiveState] = useLocalStorage<
        Record<string, boolean>
    >(ACTIVE_APPS_LOCAL_STORAGE_KEY, {
        login: true,
        mixer: true,
        settings: true,
    });

    const onToggleAll = useCallback(
        (checked: boolean) => {
            setToggleAll(checked);

            const all = Object.values(activeApps).reduce((acc, app) => {
                acc[app.id] = checked;
                return acc;
            }, {} as Json);

            patchActiveState({
                ...all,
                login: true,
                mixer: true,
                settings: true,
            });
        },
        [activeState]
    );

    const toggleApp = useCallback(
        (appId: string) => {
            patchActiveState({
                ...activeState,
                [appId]: !(activeState ?? {})[appId],
            });
        },
        [activeState]
    );

    function renderActiveApp(activeApp: IActiveApp) {
        const { id, title, nodeCount, totalSize, color, description } =
            activeApp;

        const sizeColor = totalSize > 1000 ? 'gold' : 'gray';

        const key = id === 'login' ? 'auth' : id;
        const meta = templatesMeta[key] ?? {};
        const { isBeta, isDraft, version } = meta || {};

        const flags = isDraft ? 'draft' : isBeta ? 'beta' : '';

        return (
            <AppRow key={activeApp.id} className='user'>
                <AppField>
                    <Color value={color} />
                </AppField>
                <AppField color='pink'>
                    {title}
                    <Description>{meta.description}</Description>
                </AppField>
                <AppField>
                    <Flags className={flags}>{flags}</Flags>
                    <Version>{version}</Version>
                </AppField>
                <AppField>{nodeCount || '-'}</AppField>
                <AppField color={sizeColor}>{bytes(totalSize)}</AppField>
                <AppField>{description}</AppField>
                <ToggleWrapper>
                    <Toggle
                        readOnly={activeApp.isRequired}
                        value={(activeState as any)[activeApp.id]}
                        onChange={() => toggleApp(activeApp.id)}
                    />
                </ToggleWrapper>
            </AppRow>
        );
    }

    function renderApps() {
        return activeApps.map((activeApp: IActiveApp) =>
            renderActiveApp(activeApp)
        );
    }

    return (
        <Wrapper
            className='ActiveApps-wrapper'
            data-testid='ActiveApps-wrapper'
        >
            <TabbedPages
                avatarUrl={photoURL ?? ''}
                avatarName={displayName}
                title={`${count} ${t('apps')}`}
                subtitle={bytes(allAppsSize)}
                selectedTabId='activeApps'
                tabs={tabs}
            >
                <Content>
                    <Column></Column>
                    <Column>
                        <ToggleAll>
                            <Toggle
                                value={toggleAll}
                                onChange={(_ev: any, checked?: boolean) =>
                                    onToggleAll(checked === true)
                                }
                            />
                        </ToggleAll>
                        <Apps>{renderApps()}</Apps>
                    </Column>
                </Content>
            </TabbedPages>
        </Wrapper>
    );
}

export default ActiveApps;
