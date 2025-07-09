# Site Beato Carlo Acutis

Um site elegante e moderno dedicado ao jovem santo da era digital, criado para inspirar jovens católicos ao redor do mundo.

![Versão](https://img.shields.io/badge/versão-2.0-blue.svg)
![Tecnologia](https://img.shields.io/badge/tecnologia-HTML5%20%7C%20CSS3%20%7C%20JavaScript-brightgreen.svg)
![Status](https://img.shields.io/badge/status-completo-success.svg)

## Sobre o Projeto

Este é um site completo e responsivo em homenagem ao **Beato Carlo Acutis** (1991-2006), o jovem programador italiano que foi beatificado pela Igreja Católica em 2020. O site combina tecnologia moderna com conteúdo espiritual profundo, refletindo o próprio espírito de Carlo que usava a tecnologia para evangelizar.

### Objetivo

Criar uma plataforma digital que:
- Inspire jovens a conhecer a vida de Carlo Acutis
- Promova a devoção eucarística 
- Demonstre que santidade e modernidade podem coexistir
- Sirva como ferramenta de evangelização digital

## Características Principais

### Design Moderno
- **Interface elegante** com gradientes e animações suaves
- **Totalmente responsivo** para desktop, tablet e mobile
- **Paleta de cores harmoniosa** (azul, dourado, cinza)
- **Tipografia profissional** (Playfair Display + Inter)
- **Ícones Font Awesome** temáticos

### Funcionalidades Interativas
- Menu hamburger responsivo
- Contador de orações e reflexões
- Frases inspiradoras aleatórias
- Timeline interativa da vida de Carlo
- Scroll suave e animações de aparição
- Sistema de devoção diária

### Tecnologias Utilizadas
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com Grid e Flexbox
- **JavaScript Vanilla** - Interatividade sem dependências
- **Font Awesome 6** - Ícones vetoriais
- **Google Fonts** - Tipografia elegante

## Estrutura do Site

### Páginas Principais

| Página | Descrição | Arquivo |
|--------|-----------|---------|
| **Início** | Página principal com hero section, timeline e oração | `index.html` |
| **Biografia** | Vida completa de Carlo desde o nascimento até a beatificação | `biografia.html` |
| **Milagres** | Milagres reconhecidos oficialmente e testemunhos | `milagres.html` |
| **Curiosidades** | Aspectos únicos e interessantes da vida de Carlo | `curiosidades.html` |
| **Frases** | Citações inspiradoras organizadas por temas espirituais | `frases.html` |
| **Eucaristia** | Devoção eucarística e projeto dos milagres eucarísticos | `eucaristia.html` |

### Arquivos de Suporte

| Arquivo | Função |
|---------|--------|
| `styles.css` | Estilos principais e responsividade |
| `script.js` | Funcionalidades interativas e animações |

## Como Executar

1. **Clone o repositório:**
   ```bash
   git clone [URL-do-repositório]
   cd CarloAcutis
   ```

2. **Abra o site:**
   - Navegue até a pasta `Carlo Acutis`
   - Abra o arquivo `index.html` em qualquer navegador moderno
   - Ou use um servidor local como Live Server no VS Code

3. **Compatibilidade:**
   - ✅ Chrome 80+
   - ✅ Firefox 75+
   - ✅ Safari 13+
   - ✅ Edge 80+

## Recursos por Página

### Página Inicial
- Hero section com chamada inspiradora
- Cards sobre características de Carlo
- Timeline interativa da vida
- Seção de oração oficial
- Links para todas as seções

### Biografia
- História completa desde o nascimento
- Contexto familiar e descoberta da fé
- Paixão pela programação e evangelização
- Vida de caridade e devoções
- Últimos momentos e legado

### Milagres
- Milagre oficial da beatificação (Brasil)
- Outros prodígios relatados mundialmente
- Instruções para pedir intercessão
- Testemunhos de fiéis
- Oração oficial para graças

### Curiosidades
- Aspectos únicos da personalidade
- Relação com tecnologia e videogames
- Vida espiritual extraordinária
- Atos de caridade desde criança
- Legado após a morte

### Frases
- Citações organizadas por temas:
  - Eucaristia e Missa
  - Felicidade e tristeza  
  - Santidade e vocação
  - Virgem Maria
  - Caridade e amor ao próximo
  - Vida e eternidade
  - Tecnologia e evangelização
  - Juventude cristã
- Gerador de frase do dia
- Contador de reflexões

### Eucaristia
- Centro da espiritualidade de Carlo
- Projeto dos milagres eucarísticos
- Rotina de Missa e adoração
- Milagres eucarísticos famosos
- Ensinamentos sobre a Eucaristia
- Contador de comunhões espirituais

## Paleta de Cores

```css
--primary-color: #2c3e50      /* Azul escuro */
--secondary-color: #3498db    /* Azul claro */
--accent-color: #e74c3c       /* Vermelho */
--gold-color: #f39c12         /* Dourado */
--light-blue: #ecf0f1         /* Azul muito claro */
--white: #ffffff              /* Branco */
--dark-gray: #2c3e50          /* Cinza escuro */
--light-gray: #95a5a6         /* Cinza claro */
```

## Funcionalidades JavaScript

### Navegação
- Menu responsivo com animação hamburger
- Scroll suave entre seções
- Indicador de página ativa

### Contadores Espirituais
- **Contador de orações:** Armazena orações diárias
- **Contador de reflexões:** Para estudos das frases
- **Contador de comunhões:** Para comunhões espirituais
- **Reset diário automático**

### Animações
- Fade in para elementos na rolagem
- Hover effects nos cards
- Transições suaves em botões
- Animações nos ícones

### Recursos Especiais
- Gerador de frases aleatórias
- Lembretes de devoção diária
- Navegação por teclado
- Indicadores de foco para acessibilidade

## Responsividade

O site foi desenvolvido com **mobile-first** e inclui:

### Breakpoints
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px  
- **Mobile:** até 767px
- **Mobile pequeno:** até 480px

### Adaptações Mobile
- Menu hamburger animado
- Cards em coluna única
- Texto otimizado para telas pequenas
- Botões com tamanho adequado para toque
- Timeline simplificada

## Customização

### Alterando Cores
Edite as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --primary-color: #sua-cor;
    --secondary-color: #sua-cor;
    /* ... outras variáveis */
}
```

### Adicionando Frases
No arquivo `frases.html`, adicione novas frases ao array `carloQuotes`:

```javascript
const carloQuotes = [
    "Nova frase aqui...",
    // ... outras frases
];
```

### Modificando Contadores
Os contadores usam `localStorage` e podem ser customizados no `script.js`.

## SEO e Acessibilidade

### SEO
- Meta tags descritivas
- Estrutura HTML semântica
- Headings hierárquicos
- URLs amigáveis
- Schema markup (futuro)

### Acessibilidade
- Navegação por teclado
- Alt text em imagens
- Contraste adequado
- Focus indicators
- ARIA labels onde necessário

## Performance

### Otimizações
- CSS e JS minificados (em produção)
- Imagens otimizadas
- Fontes carregadas de forma eficiente
- Lazy loading para conteúdo (futuro)

### Métricas
- **First Paint:** < 1s
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2s
- **Time to Interactive:** < 3s

## Contribuições

Este é um projeto pessoal, mas sugestões são bem-vindas:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Guidelines
- Mantenha o foco espiritual e católico
- Respeite o design e paleta de cores
- Teste em múltiplos dispositivos
- Documente alterações importantes

## TODO / Futuras Melhorias

### Curto Prazo
- [ ] Galeria de imagens de Carlo
- [ ] Seção de downloads (orações em PDF)
- [ ] Formulário de testemunhos
- [ ] Newsletter de devoção

### Médio Prazo
- [ ] Blog com artigos sobre Carlo
- [ ] Integração com redes sociais
- [ ] Sistema de comentários
- [ ] Modo escuro

### Longo Prazo
- [ ] Aplicativo móvel
- [ ] Integração com API de santos
- [ ] Sistema de usuários
- [ ] Gamificação da devoção

## Contato e Suporte

- **Autor:** Daniel Tomazi de Oliveira
- **Versão:** 2.0
- **Data de Atualização:** Julho 2025
- **Licença:** Projeto pessoal sem fins comerciais

## Agradecimentos

- **Beato Carlo Acutis** - pela inspiração
- **Igreja Católica** - pelas informações oficiais
- **Família Acutis** - por compartilhar a história
- **Comunidade católica** - pelo apoio e feedback

## Disclaimer

Este site é um projeto **pessoal e devocional**, criado sem fins comerciais ou lucrativos. Todo o conteúdo sobre Carlo Acutis é baseado em fontes oficiais da Igreja Católica e biografias aprovadas. A imagem utilizada é de domínio público ou utilizada com fins educacionais e devocionais.

---

**"A Eucaristia é a minha autoestrada para o céu"** - Beato Carlo Acutis
