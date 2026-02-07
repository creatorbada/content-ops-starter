import { Model } from '@stackbit/types';

export const TelFormControl: Model = {
    type: 'object',
    name: 'TelFormControl',
    label: 'Phone number',
    labelField: 'label',
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'name',
            label: 'Name',
            required: true,
            default: 'phone',
            description: 'The name of the field, submitted with the form'
        },
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            description: 'The label of the field, shown above the input'
        },
        {
            type: 'boolean',
            name: 'hideLabel',
            label: 'Hide label',
            default: false
        },
        {
            type: 'string',
            name: 'placeholder',
            label: 'Placeholder text',
            description: 'The placeholder text shown in the input when empty'
        },
        {
            type: 'boolean',
            name: 'isRequired',
            label: 'Is the field required?',
            default: false
        },
        {
            type: 'enum',
            name: 'width',
            label: 'Width',
            group: 'styles',
            options: [
                { label: 'Full', value: 'full' },
                { label: 'Half', value: '1/2' }
            ],
            default: 'full'
        }
    ]
};
