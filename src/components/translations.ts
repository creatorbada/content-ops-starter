export const translations: Record<string, { pt: string; en: string }> = {
    // ==========================================
    // Homepage - Títulos
    // ==========================================
    'We Scale Brands With The Power Of Viral Content + AI': {
        pt: 'Escalamos Marcas Com O Poder De Conteúdo Viral + IA',
        en: 'We Scale Brands With The Power Of Viral Content + AI'
    },
    'Grow Your Reach 10x Faster': {
        pt: 'Cresça Seu Alcance 10x Mais Rápido',
        en: 'Grow Your Reach 10x Faster'
    },
    'Stop Doing The Same Thing And Expecting A Different Outcome': {
        pt: 'Pare de Fazer a Mesma Coisa Esperando um Resultado Diferente',
        en: 'Stop Doing The Same Thing And Expecting A Different Outcome'
    },
    'Start Getting Millions of High Quality Views Per Month': {
        pt: 'Comece a Ter Milhões de Visualizações de Alta Qualidade Por Mês',
        en: 'Start Getting Millions of High Quality Views Per Month'
    },
    // Homepage - Subtítulos
    'We know how to generate MILLIONS of high quality views every month for your brand': {
        pt: 'Sabemos como gerar MILHÕES de visualizações de alta qualidade todo mês para sua marca',
        en: 'We know how to generate MILLIONS of high quality views every month for your brand'
    },
    'Partner with experts that are in the trenches going viral everyday': {
        pt: 'Faça parceria com especialistas que estão nas trincheiras viralizando todo dia',
        en: 'Partner with experts that are in the trenches going viral everyday'
    },
    // ==========================================
    // Pricing Page
    // ==========================================
    'Flexible Pricing': {
        pt: 'Preços Flexíveis',
        en: 'Flexible Pricing'
    },
    'This is the subtitle for the pricing section': {
        pt: 'Escolha o plano ideal para o seu negócio',
        en: 'This is the subtitle for the pricing section'
    },
    'Developers': { pt: 'Desenvolvedores', en: 'Developers' },
    'Professional': { pt: 'Profissional', en: 'Professional' },
    'Enterprise': { pt: 'Empresarial', en: 'Enterprise' },
    'Free': { pt: 'Grátis', en: 'Free' },
    'Custom': { pt: 'Personalizado', en: 'Custom' },
    'No credit card required': { pt: 'Sem cartão de crédito', en: 'No credit card required' },
    'per month': { pt: 'por mês', en: 'per month' },
    'Try for free': { pt: 'Experimentar grátis', en: 'Try for free' },
    'Contact us': { pt: 'Fale conosco', en: 'Contact us' },
    'Feature one': { pt: 'Recurso um', en: 'Feature one' },
    'Feature two': { pt: 'Recurso dois', en: 'Feature two' },
    'Feature three': { pt: 'Recurso três', en: 'Feature three' },
    'Feature four': { pt: 'Recurso quatro', en: 'Feature four' },
    'Feature five': { pt: 'Recurso cinco', en: 'Feature five' },
    // ==========================================
    // Careers Page
    // ==========================================
    'Open positions': { pt: 'Vagas Abertas', en: 'Open positions' },
    'Developer': { pt: 'Desenvolvedor', en: 'Developer' },
    'YouTube Automation Expert': { pt: 'Especialista em Automação do YouTube', en: 'YouTube Automation Expert' },
    'Apply now': { pt: 'Candidatar-se agora', en: 'Apply now' },
    'Apply Now': { pt: 'Candidatar-se Agora', en: 'Apply Now' },
    // ==========================================
    // Navegação / Header
    // ==========================================
    'Home': { pt: 'Início', en: 'Home' },
    'Blog': { pt: 'Blog', en: 'Blog' },
    'Careers': { pt: 'Carreiras', en: 'Careers' },
    'Pricing': { pt: 'Preços', en: 'Pricing' },
    'About': { pt: 'Sobre', en: 'About' },
    'Services': { pt: 'Serviços', en: 'Services' },
    // ==========================================
    // Botões / Actions
    // ==========================================
    'Get started': { pt: 'Começar', en: 'Get started' },
    'Get Started': { pt: 'Começar', en: 'Get Started' },
    'Learn More': { pt: 'Saiba Mais', en: 'Learn More' },
    'Read More': { pt: 'Leia Mais', en: 'Read More' },
    'See More': { pt: 'Ver Mais', en: 'See More' },
    'View All': { pt: 'Ver Todos', en: 'View All' },
    // ==========================================
    // Formulário
    // ==========================================
    'Contact Us': { pt: 'Fale Conosco', en: 'Contact Us' },
    'Submit': { pt: 'Enviar', en: 'Submit' },
    'Submitting...': { pt: 'Enviando...', en: 'Submitting...' },
    'Name': { pt: 'Nome', en: 'Name' },
    'Email': { pt: 'E-mail', en: 'Email' },
    'Phone': { pt: 'Telefone', en: 'Phone' },
    'Message': { pt: 'Mensagem', en: 'Message' },
    'Your name': { pt: 'Seu nome', en: 'Your name' },
    'Your email': { pt: 'Seu e-mail', en: 'Your email' },
    'Your phone number': { pt: 'Seu telefone', en: 'Your phone number' },
    'Explain your Situation': { pt: 'Explique sua Situação', en: 'Explain your Situation' },
    'Tell us about your situation': { pt: 'Conte-nos sobre sua situação', en: 'Tell us about your situation' },
    '✅ Form submitted successfully! We will contact you soon.': {
        pt: '✅ Formulário enviado! Entraremos em contato em breve.',
        en: '✅ Form submitted successfully! We will contact you soon.'
    },
    '❌ Error submitting form. Please try again.': {
        pt: '❌ Erro ao enviar. Tente novamente.',
        en: '❌ Error submitting form. Please try again.'
    },
    // ==========================================
    // Footer
    // ==========================================
    'Privacy Policy': { pt: 'Política de Privacidade', en: 'Privacy Policy' },
    'Terms of Service': { pt: 'Termos de Serviço', en: 'Terms of Service' },
    'All rights reserved': { pt: 'Todos os direitos reservados', en: 'All rights reserved' },
    // ==========================================
    // Blog
    // ==========================================
    'Back to Blog': { pt: 'Voltar ao Blog', en: 'Back to Blog' },
    'All Posts': { pt: 'Todos os Posts', en: 'All Posts' },
    'Recent Posts': { pt: 'Posts Recentes', en: 'Recent Posts' },
};

export function getTranslation(key: string, language: 'pt' | 'en'): string {
    if (!key) return key;
    const translation = translations[key.trim()];
    if (translation) return translation[language];
    return key;
}
