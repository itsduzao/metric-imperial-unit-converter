# 🔄 Conversor de Unidades Métricas/Imperiais

## 📝 Descrição
Uma aplicação web para converter unidades métricas e imperiais, incluindo comprimento, volume e massa. Interface intuitiva e acessível para conversões rápidas e precisas.

## ⚙️ Funcionalidades
* Conversão de metros para pés e vice-versa
* Conversão de litros para galões e vice-versa
* Conversão de quilogramas para libras e vice-versa
* Interface responsiva e acessível
* Validação de entrada em tempo real
* Sistema de notificações toast para feedback de erros
* Favicon minimalista personalizado

## 🛠️ Tecnologias Utilizadas
* HTML5
* CSS3 (com variáveis CSS, flexbox e animações)
* JavaScript (ES6+ e módulos)
* WAI-ARIA para acessibilidade
* SVG para favicon

## 🚀 Como Usar
1. Clone o repositório:
```bash
git clone https://github.com/itsduzao/metric-imperial-unit-converter.git
```
2. Abra o arquivo [`index.html`](index.html) em seu computador
3. Digite o valor que deseja converter no campo de entrada
4. Clique no botão "Convert" para ver os resultados

## 🎨 Estrutura do Projeto
```markdown
projeto/
├── index.html
├── style.css
├── index.js
├── favicon.svg
└── scripts/
    ├── constants/
    │   ├── ConversionType.js
    │   └── outputMapping.js
    ├── converters/
    │   ├── lengthConverter.js
    │   ├── massConverter.js
    │   └── volumeConverter.js
    ├── dom/
    │   ├── elements.js
    │   └── renderer.js
    ├── handlers/
    │   ├── conversionHandler.js
    │   └── inputHandler.js
    └── utils/
        ├── formatValueToPrecision.js
        ├── toastNotification.js
        └── validateInput.js
```

## 🔔 Sistema de Notificações
* Notificações toast para feedback de validação
* Animações suaves de entrada e saída
* Tempo automático de expiração
* Estilo consistente com o tema da aplicação

## ♿ Acessibilidade
* Suporte completo a navegação por teclado
* Atributos ARIA para melhor experiência com leitores de tela
* Contraste de cores adequado
* Feedback em tempo real para usuários
* Notificações acessíveis via ARIA-live regions

## 📱 Responsividade
* Layout adaptável para diferentes tamanhos de tela
* Design mobile-first
* Experiência consistente em todos os dispositivos
* Interface otimizada para toque em dispositivos móveis

## 🎯 Validações
* Verificação de entrada numérica
* Validação de valores mínimos
* Feedback visual através de notificações toast
* Tratamento de erros robusto

## 🤝 Como Contribuir
1. Faça um Fork do projeto
2. Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
3. Commit suas mudanças (git commit -m 'Add some AmazingFeature')
4. Push para a branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request
