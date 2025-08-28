// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Objeto que conterá todas as nossas traduções
const resources = {
  // Objeto para o idioma Inglês
  en: {
    translation: {
      "sobre": {
        "nome": "Pedro Maia",
        "cargo": "Developer & Automation Enthusiast",
        "biografia": "Hello! I'm a developer passionate about creating efficient automations and innovative solutions, especially in the legal sector. With experience in Python, RPA, and API integrations, I focus on building tools that optimize processes, reduce repetitive tasks, and enhance productivity. I believe technology should simplify work and make complex operations seamless.",
        "titulo_skills": "Main Skills:"
      }
    }
  },
  pt: {
    translation: {
      "sobre": {
        "nome": "Pedro Maia",
        "cargo": "Desenvolvedor & Apaixonado por Automação",
        "biografia": "Olá! Sou um desenvolvedor apaixonado por criar automações eficientes e soluções inovadoras, especialmente para o setor jurídico. Com experiência em Python, RPA e integrações de APIs, foco em construir ferramentas que otimizem processos, reduzam tarefas repetitivas e aumentem a produtividade. Acredito que a tecnologia deve simplificar o trabalho e tornar operações complexas mais fluídas.",
        "titulo_skills": "Principais Habilidades:"
      }
    }
  }
};

i18n
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    resources,
    lng: 'pt', // Define o idioma inicial
    fallbackLng: 'en', // Idioma para usar caso a tradução não seja encontrada
    interpolation: {
      escapeValue: false // React já protege contra XSS
    }
  });

export default i18n;