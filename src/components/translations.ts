export const translations: Record<string, { pt: string; en: string }> = {
    // Homepage
    'We Scale Brands With The Power Of Viral Content + AI': {
        pt: 'Escalamos Marcas Com O Poder De Conteúdo Viral + IA',
        en: 'We Scale Brands With The Power Of Viral Content + AI'
    },
    'Grow Your Reach 10x Faster': {
        pt: 'Cresça Seu Alcance 10x Mais Rápido',
        en: 'Grow Your Reach 10x Faster'
    },
    'We know how to generate MILLIONS of high quality views every month for your brand': {
        pt: 'Sabemos como gerar MILHÕES de visualizações de alta qualidade todo mês para sua marca',
        en: 'We know how to generate MILLIONS of high quality views every month for your brand'
    },
    'Stop Doing The Same Thing And Expecting A Different Outcome': {
        pt: 'Pare de Fazer a Mesma Coisa e Esperar um Resultado Diferente',
        en: 'Stop Doing The Same Thing And Expecting A Different Outcome'
    },
    'Partner with experts that are in the trenches going viral everyday': {
        pt: 'Parceria com especialistas que estão nas trincheiras viralizando todo dia',
        en: 'Partner with experts that are in the trenches going viral everyday'
    },
    'Start Getting Millions of High Quality Views Per Month': {
        pt: 'Comece a Ter Milhões de Visualizações de Alta Qualidade Por Mês',
        en: 'Start Getting Millions of High Quality Views Per Month'
    },
    // Buttons / Actions
    'Get started': { pt: 'Começar', en: 'Get started' },
    'Get Started': { pt: 'Começar', en: 'Get Started' },
    'Learn More': { pt: 'Saiba Mais', en: 'Learn More' },
    'Apply Now': { pt: 'Inscreva-se Agora', en: 'Apply Now' },
    'Read More': { pt: 'Leia Mais', en: 'Read More' },
    'View All': { pt: 'Ver Todos', en: 'View All' },
    'See More': { pt: 'Ver Mais', en: 'See More' },
    'Submit': { pt: 'Enviar', en: 'Submit' },
    'Submitting...': { pt: 'Enviando...', en: 'Submitting...' },
    'Contact Us': { pt: 'Fale Conosco', en: 'Contact Us' },
    // Form
    'Your name': { pt: 'Seu nome', en: 'Your name' },
    'Your email': { pt: 'Seu e-mail', en: 'Your email' },
    'Your phone number': { pt: 'Seu telefone', en: 'Your phone number' },
    'Tell us about your situation': { pt: 'Conte-nos sobre sua situação', en: 'Tell us about your situation' },
    'Explain your Situation': { pt: 'Explique sua Situação', en: 'Explain your Situation' },
    'Name': { pt: 'Nome', en: 'Name' },
    'Email': { pt: 'E-mail', en: 'Email' },
    'Phone': { pt: 'Telefone', en: 'Phone' },
    'Message': { pt: 'Mensagem', en: 'Message' },
    '✅ Form submitted successfully! We will contact you soon.': {
        pt: '✅ Formulário enviado com sucesso! Entraremos em contato em breve.',
        en: '✅ Form submitted successfully! We will contact you soon.'
    },
    '❌ Error submitting form. Please try again.': {
        pt: '❌ Erro ao enviar. Tente novamente.',
        en: '❌ Error submitting form. Please try again.'
    },
    // Navigation
    'Home': { pt: 'Início', en: 'Home' },
    'Blog': { pt: 'Blog', en: 'Blog' },
    'Careers': { pt: 'Carreiras', en: 'Careers' },
    'Pricing': { pt: 'Preços', en: 'Pricing' },
    'About': { pt: 'Sobre', en: 'About' },
    'Services': { pt: 'Serviços', en: 'Services' },
    'Open Menu': { pt: 'Abrir Menu', en: 'Open Menu' },
    'Close Menu': { pt: 'Fechar Menu', en: 'Close Menu' },
    // Footer
    'Privacy Policy': { pt: 'Política de Privacidade', en: 'Privacy Policy' },
    'Terms of Service': { pt: 'Termos de Serviço', en: 'Terms of Service' },
    'All rights reserved': { pt: 'Todos os direitos reservados', en: 'All rights reserved' },
    // Pricing
    'Most Popular': { pt: 'Mais Popular', en: 'Most Popular' },
    'per month': { pt: 'por mês', en: 'per month' },
    'Choose Plan': { pt: 'Escolher Plano', en: 'Choose Plan' },
    // Blog
    'Recent Posts': { pt: 'Posts Recentes', en: 'Recent Posts' },
    'All Posts': { pt: 'Todos os Posts', en: 'All Posts' },
    'Back to Blog': { pt: 'Voltar ao Blog', en: 'Back to Blog' },
    // Careers
    'Join Our Team': { pt: 'Junte-se ao Nosso Time', en: 'Join Our Team' },
    'Open Positions': { pt: 'Vagas Abertas', en: 'Open Positions' },
    'Apply': { pt: 'Candidatar-se', en: 'Apply' },
};

export function getTranslation(key: string, language: 'pt' | 'en'): string {
    if (!key) return key;
    const translation = translations[key.trim()];
    if (translation) return translation[language];
    return key;
}
