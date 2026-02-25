import * as React from 'react';
import { useLanguage } from '../LanguageContext';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 ml-4">
            <button
                onClick={() => setLanguage('pt')}
                title="Português (Brasil)"
                className={`text-2xl transition-all duration-200 rounded p-0.5 ${
                    language === 'pt' ? 'opacity-100 ring-2 ring-green-500' : 'opacity-40 hover:opacity-70'
                }`}
            >
                🇧🇷
            </button>
            <button
                onClick={() => setLanguage('en')}
                title="English (US)"
                className={`text-2xl transition-all duration-200 rounded p-0.5 ${
                    language === 'en' ? 'opacity-100 ring-2 ring-blue-500' : 'opacity-40 hover:opacity-70'
                }`}
            >
                🇺🇸
            </button>
        </div>
    );
}
