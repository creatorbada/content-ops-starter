import * as React from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

export const LanguageContext = React.createContext<LanguageContextType>({
    language: 'pt',
    setLanguage: () => {}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = React.useState<Language>('pt');

    React.useEffect(() => {
        const saved = localStorage.getItem('lang') as Language;
        if (saved === 'pt' || saved === 'en') setLanguage(saved);
    }, []);

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('lang', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return React.useContext(LanguageContext);
}
