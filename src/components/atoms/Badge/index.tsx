import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { useLanguage } from '../../LanguageContext';
import { getTranslation } from '../../translations';

export default function Badge(props) {
    const { label, color = 'text-primary', styles, className } = props;
    const fieldPath = props['data-sb-field-path'];
    const { language } = useLanguage();
    if (!label) {
        return null;
    }

    return (
        <div
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-badge',
                color,
                className,
                styles?.self ? mapStyles(styles?.self) : undefined
            )}
            data-sb-field-path={fieldPath}
        >
            <span className="uppercase tracking-wider" {...(fieldPath && { 'data-sb-field-path': '.label' })}>
                {getTranslation(label, language)}
            </span>
        </div>
    );
}
