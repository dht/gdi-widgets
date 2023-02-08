export const widgetSchemas = {
    hero: {
        id: 'hero',
        title: 'Hero',
        order: 1,
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
            installation: { fieldType: 'text', order: 2 },
            ctaButtonText: { fieldType: 'text', isRequired: true, order: 3 },
            secondaryButtonText: { fieldType: 'text', order: 4 },
        },
        colors: {},
        extra: {
            href: { fieldType: 'url', isRequired: true, order: 0 },
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            hrefSecondary: { fieldType: 'url', order: 2 },
        },
    },
    twins: {
        id: 'twins',
        title: 'Twins',
        order: 2,
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 0 },
            description: {
                fieldType: 'longText',
                isRequired: true,
                order: 1,
            },
            buttonText: { fieldType: 'text', isRequired: true, order: 3 },
            headerSecondary: { fieldType: 'text', isRequired: true, order: 2 },
            descriptionSecondary: {
                fieldType: 'longText',
                isRequired: true,
                order: 3,
            },
            buttonTextSecondary: {
                fieldType: 'text',
                isRequired: true,
                order: 3,
            },
            notes: {
                fieldType: 'longText',
                isRequired: false,
                order: 4,
            },
        },
        colors: {},
        extra: {
            href: { fieldType: 'url', isRequired: true, order: 0 },
            hrefSecondary: { fieldType: 'url', isRequired: true, order: 1 },
            rotation: { fieldType: 'number', isRequired: false, order: 2 },
        },
    },
};

export const instanceProps = {
    hero: {
        strings: {
            slogan: 'Business name',
        },
    },
    twins: {
        strings: {},
    },
};
